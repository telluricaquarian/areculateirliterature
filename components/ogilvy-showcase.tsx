'use client'

import { PerspectiveBook } from '@/components/perspective-book'

// ── Layout tweaks ─────────────────────────────────────────────────────────────
const PANEL_MAX_W   = 680   // px — max-width of the panel; change to widen/narrow
const PANEL_P       = 32    // px — internal padding of the orange outlined panel
const BOOK_W        = 118   // px — 3D PerspectiveBook front face width
const BOOK_H        = 178   // px — 3D PerspectiveBook height
const BOOK_SPINE    = 22    // px — 3D book spine depth
// ─────────────────────────────────────────────────────────────────────────────

const COVER_SRC = '/ogilvyonadvertising.png'
const ORANGE    = '#FF7900'

const TAGS = ['Advertising', 'Marketing', 'Copywriting', 'Research']

const QUOTE =
  '"On the average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar."'

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

export function OgilvyShowcase() {
  return (
    <section className="bg-black w-full px-8 md:px-12 lg:px-20 py-20 lg:py-24">
      {/*
        Panel positioning: mx-auto centers it. To shift left, swap to ml-0 or
        ml-auto with a fixed margin. To change width, adjust PANEL_MAX_W above.
      */}
      <div style={{ maxWidth: PANEL_MAX_W }} className="mx-auto">

        {/* Orange outlined panel */}
        <div
          style={{
            border: `1px solid rgba(255,121,0,0.32)`,
            padding: PANEL_P,
          }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-7 sm:gap-8">

            {/* ── 3D PerspectiveBook ─────────────────────────────────────────────
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

            {/* ── Metadata + editorial copy ────────────────────────────────── */}
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

              {/* Notable quote */}
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
    </section>
  )
}
