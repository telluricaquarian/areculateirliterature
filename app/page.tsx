"use client"

import Component from "../vercel-logo-particles"
import { OgilvyShowcase } from "@/components/ogilvy-showcase"

export default function SyntheticV0PageForDeployment() {
  return (
    <div className="bg-black">
      {/* Particle logo hero — full viewport height */}
      <Component />

      {/* Ogilvy book showcase — below the fold */}
      <OgilvyShowcase />
    </div>
  )
}