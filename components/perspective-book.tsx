'use client'

import { useState } from 'react'
import Image from 'next/image'

// ── Tweak these defaults ──────────────────────────────────────────────────
// width:         front cover face width in px
// height:        book height in px
// spineWidth:    spine depth in px — thicker = more dramatic 3D edge
// idleRotateY:   Y-axis tilt at rest in degrees (negative = tilts left, reveals spine)
// hoverRotateY:  Y-axis tilt on hover in degrees
// rotateX:       slight downward tilt for realism
// perspective:   camera distance in px — lower feels more dramatic
// ─────────────────────────────────────────────────────────────────────────

export interface PerspectiveBookProps {
  coverSrc: string
  alt: string
  /** Front cover width in px — default 110 */
  width?: number
  /** Book height in px — default 166 */
  height?: number
  /** Spine depth in px — default 18 */
  spineWidth?: number
}

export function PerspectiveBook({
  coverSrc,
  alt,
  width = 110,
  height = 166,
  spineWidth = 18,
}: PerspectiveBookProps) {
  const [hovered, setHovered] = useState(false)

  const IDLE_ROTATE_Y  = -12
  const HOVER_ROTATE_Y = -28
  const ROTATE_X       = 2
  const PERSPECTIVE    = 700

  return (
    <div
      className="cursor-pointer select-none"
      style={{
        // Give the container the cover's width only — spine lives in 3D space
        width,
        height,
        perspective: `${PERSPECTIVE}px`,
        perspectiveOrigin: '50% 50%',
        // Provide left breathing room so the spine has visual space
        marginLeft: spineWidth,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: hovered
            ? `rotateY(${HOVER_ROTATE_Y}deg) rotateX(${ROTATE_X}deg)`
            : `rotateY(${IDLE_ROTATE_Y}deg) rotateX(${ROTATE_X}deg)`,
          transition: 'transform 0.48s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >

        {/* ── Spine — perpendicular left face ─────────────────────────── */}
        {/* Rotates -90° around its own right edge (= the cover's left edge)
            so it sticks out perpendicular to the cover on the left side.  */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: spineWidth,
            height: '100%',
            background: 'linear-gradient(to right, #111 0%, #1e1e1e 60%, #161616 100%)',
            transform: 'rotateY(-90deg)',
            transformOrigin: 'right center',
          }}
        />

        {/* ── Top page-edge strip ────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 5,
            background: 'linear-gradient(to right, #d4cfc6, #e8e3db)',
            transform: 'rotateX(90deg)',
            transformOrigin: 'top center',
            opacity: 0.55,
          }}
        />

        {/* ── Front cover ───────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
          }}
        >
          <Image
            src={coverSrc}
            alt={alt}
            fill
            sizes={`${width}px`}
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            draggable={false}
          />
          {/* Gloss sheen overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(130deg, rgba(255,255,255,0.07) 0%, transparent 38%, rgba(0,0,0,0.18) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

      </div>
    </div>
  )
}
