'use client'

import React, { useRef, useEffect } from 'react'

// ── Tweak these values ────────────────────────────────────────────────────────
const CONFIG = {
  particleDensity:    6000,   // base particle count at 1920×1080; auto-scales with viewport area
  logoScale:          0.45,   // logo height as a fraction of viewport height
  particleSizeMin:    0.5,    // px
  particleSizeMax:    1.5,    // px
  particleColor:      '#FF7900',
  idleMotionStrength: 0.6,    // max ambient drift amplitude in px (0 = frozen)
  idleMotionSpeed:    0.0008, // radians per ms — higher = faster drift
  particleLifeMin:    50,
  particleLifeMax:    150,
} as const
// ─────────────────────────────────────────────────────────────────────────────

type Particle = {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  life: number
  phaseX: number
  phaseY: number
}

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    let textImageData: ImageData | null = null
    let animationFrameId: number
    let startTime: number | null = null

    function updateCanvasSize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    function createParticle(): Particle | null {
      if (!textImageData || !canvas) return null
      const { data } = textImageData
      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)
        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          return {
            x, y,
            baseX: x,
            baseY: y,
            size: CONFIG.particleSizeMin + Math.random() * (CONFIG.particleSizeMax - CONFIG.particleSizeMin),
            life: CONFIG.particleLifeMin + Math.floor(Math.random() * (CONFIG.particleLifeMax - CONFIG.particleLifeMin)),
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
          }
        }
      }
      return null
    }

    function createInitialParticles() {
      const count = Math.floor(
        CONFIG.particleDensity * Math.sqrt((canvas!.width * canvas!.height) / (1920 * 1080))
      )
      for (let i = 0; i < count; i++) {
        const p = createParticle()
        if (p) particles.push(p)
      }
    }

    function animate(timestamp: number) {
      if (!ctx || !canvas) return
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime

      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = CONFIG.particleColor

      const targetCount = Math.floor(
        CONFIG.particleDensity * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))
      )

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Gentle ambient drift — each particle breathes independently
        const driftX = Math.sin(elapsed * CONFIG.idleMotionSpeed + p.phaseX) * CONFIG.idleMotionStrength
        const driftY = Math.cos(elapsed * CONFIG.idleMotionSpeed + p.phaseY) * CONFIG.idleMotionStrength
        p.x += (p.baseX + driftX - p.x) * 0.1
        p.y += (p.baseY + driftY - p.y) * 0.1

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const np = createParticle()
          if (np) particles[i] = np
          else { particles.splice(i, 1); i-- }
        }
      }

      // Top-up to target count
      while (particles.length < targetCount) {
        const p = createParticle()
        if (p) particles.push(p)
        else break
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    function loadLogoAndStart() {
      if (!canvas || !ctx) return

      const img = new Image()

      img.onload = () => {
        // Fit logo within viewport: CONFIG.logoScale of height, max 85% of width
        const scaleByHeight = (canvas.height * CONFIG.logoScale) / img.naturalHeight
        const scaleByWidth  = (canvas.width  * 0.85)           / img.naturalWidth
        const scale = Math.min(scaleByHeight, scaleByWidth)

        const drawW = img.naturalWidth  * scale
        const drawH = img.naturalHeight * scale
        const drawX = (canvas.width  - drawW) / 2
        const drawY = (canvas.height - drawH) / 2

        // Draw SVG into offscreen canvas, capture imageData, then clear
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, drawX, drawY, drawW, drawH)
        textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles = []
        startTime = null
        createInitialParticles()
        animationFrameId = requestAnimationFrame(animate)
      }

      img.src = '/correctaalogo.svg'
    }

    updateCanvasSize()
    loadLogoAndStart()

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId)
      updateCanvasSize()
      loadLogoAndStart()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-dvh bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute top-0 left-0"
        aria-label="Areculateir logo particle animation"
      />
    </div>
  )
}
