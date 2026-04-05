'use client'

import Image from 'next/image'
import { PerspectiveBook } from '@/components/perspective-book'

// ── Layout tweaks — adjust these constants ────────────────────────────────────
const FLAT_COVER_W  = 260   // px — large left flat cover: width
const FLAT_COVER_H  = 390   // px — large left flat cover: height
const CONNECTOR_W   = 108   // px — horizontal connector line + arrowhead total width
const PANEL_P       = 32    // px — internal padding of the orange outlined panel
const BOOK_W        = 118   // px — 3D PerspectiveBook front face width
const BOOK_H        = 178   // px — 3D PerspectiveBook height
const BOOK_SPINE    = 22    // px — 3D book spine depth (thicker = more dramatic tilt)
// ─────────────────────────────────────────────────────────────────────────────

const COVER_SRC = '/ogilvyonadvertising.png'
const ORANGE    = '#FF7900'

const TAGS = ['Advertising', 'Marketing', 'Copywriting', 'Research']

const QUOTE =
  '"On the average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar."'

// ── Sub-components ────────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-[3px] text-[9px] uppercase whitespace-nowrap"
      style={{
        letterSpacing: '0.11em',
        border: '1px solid rgba(255,121,0,0.22)',
        color: 'rgba(255,255,255,0.40)',
      }}
    >
      {label}
    </span>
  )
}

function ConnectorArrow({ width }: { width: number }) {
  return (
    // ── Connector tweaks: change CONNECTOR_W above ──
    <div
      aria-hidden
      className="hidden lg:flex items-center flex-shrink-0"
      style={{ width }}
    >
      <div
        className="flex-1 h-px"
        style={{ background: 'rgba(255,255,255,0.16)' }}
      />
      {/* Arrowhead — CSS triangle */}
      <div
        style={{
          width: 0,
          height: 0,
          borderTop:    '4px solid transparent',
          borderBottom: '4px solid transparent',
          borderLeft:   '7px solid rgba(255,255,255,0.16)',
          flexShrink:   0,
        }}
      />
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export function OgilvyShowcase() {
  return (
    <section className="bg-black w-full px-8 md:px-12 lg:px-20 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">

        {/*
          Desktop layout: [flat cover] [connector] [panel]  — items bottom-aligned
          so the tall cover sits in the lower-left while the shorter panel aligns
          to the same baseline. Mobile: stacked, connector hidden.
        */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-0">

          {/* ── Left: large flat book cover ─────────────────────────────────────
              Tweak: FLAT_COVER_W / FLAT_COVER_H at top of file                  */}
          <div
            className="flex-shrink-0 mx-auto lg:mx-0"
            style={{ width: FLAT_COVER_W, height: FLAT_COVER_H }}
          >
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                boxShadow: '0 20px 70px rgba(0,0,0,0.85), 0 4px 16px rgba(0,0,0,0.6)',
              }}
            >
              <Image
                src={COVER_SRC}
                alt="Ogilvy on Advertising book cover"
                fill
                priority
                sizes={`${FLAT_COVER_W}px`}
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                draggable={false}
              />
            </div>
          </div>

          {/* ── Middle: connector arrow ──────────────────────────────────────────
              Tweak: CONNECTOR_W at top of file                                   */}
          <ConnectorArrow width={CONNECTOR_W} />

          {/* ── Right: orange outlined panel ────────────────────────────────────
              flex-1 fills remaining width on desktop                             */}
          <div
            className="flex-1"
            style={{
              border: `1px solid rgba(255,121,0,0.32)`,
              padding: PANEL_P,
            }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-7 sm:gap-8">

              {/* ── 3D PerspectiveBook inside panel ───────────────────────────────
                  Tweak: BOOK_W / BOOK_H / BOOK_SPINE at top of file              */}
              <div className="flex-shrink-0">
                <PerspectiveBook
                  coverSrc={COVER_SRC}
                  alt="Ogilvy on Advertising — 3D view"
                  width={BOOK_W}
                  height={BOOK_H}
                  spineWidth={BOOK_SPINE}
                />
              </div>

              {/* ── Metadata + editorial copy ──────────────────────────────────── */}
              <div className="flex flex-col gap-5 min-w-0 pt-1">

                {/* Discipline pills */}
                <div className="flex flex-wrap gap-1.5">
                  {TAGS.map((t) => <Tag key={t} label={t} />)}
                </div>

                {/* Title block */}
                <div className="flex flex-col gap-0.5">
                  <p
                    className="text-[9px] uppercase"
                    style={{ letterSpacing: '0.18em', color: 'rgba(255,255,255,0.20)' }}
                  >
                    Recommended Reading
                  </p>
                  <h2
                    className="text-white text-[18px] leading-tight font-normal tracking-tight"
                    style={{ fontFamily: "'Pixel Grotesk', sans-serif" }}
                  >
                    Ogilvy on Advertising
                  </h2>
                </div>

                {/* Notable quote — left accent rule for editorial feel */}
                <div
                  className="flex flex-col gap-2 pl-3"
                  style={{ borderLeft: `2px solid rgba(255,121,0,0.35)` }}
                >
                  <p
                    className="text-[9px] uppercase"
                    style={{ letterSpacing: '0.18em', color: ORANGE }}
                  >
                    Notable Quote
                  </p>
                  <blockquote
                    className="text-[11px] leading-relaxed italic font-light"
                    style={{ color: 'rgba(255,255,255,0.48)' }}
                  >
                    {QUOTE}
                  </blockquote>
                  <p
                    className="text-[9px] not-italic"
                    style={{ letterSpacing: '0.1em', color: 'rgba(255,255,255,0.24)' }}
                  >
                    — David Ogilvy · Advertising Magnate
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
