'use client'

import { PerspectiveBook } from '@/components/perspective-book'

// ── Layout tweaks ─────────────────────────────────────────────────────────────
const PANEL_MAX_W = 680   // px — max-width of each book panel
const PANEL_P     = 32    // px — internal padding of each panel
const BOOK_W      = 118   // px — 3D PerspectiveBook front face width
const BOOK_H      = 178   // px — 3D PerspectiveBook height
const BOOK_SPINE  = 22    // px — 3D book spine depth
// ─────────────────────────────────────────────────────────────────────────────

const ORANGE = '#FF7900'

type BookEntry = {
  coverSrc: string
  alt: string
  tags: string[]
  eyebrow: string
  title: string
  quoteLabel: string
  quote: string
  attribution: string
}

// ── Book data — add new entries here ─────────────────────────────────────────
const BOOKS: BookEntry[] = [
  {
    coverSrc: '/ogilvyonadvertising.png',
    alt: 'Ogilvy on Advertising — 3D view',
    tags: ['Advertising', 'Marketing', 'Copywriting', 'Research'],
    eyebrow: 'Recommended Reading',
    title: 'Ogilvy on Advertising',
    quoteLabel: 'Notable Quote',
    quote:
      '"On the average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar."',
    attribution: '— David Ogilvy · Advertising Magnate',
  },
  {
    coverSrc: '/cover_image.jpg.webp',
    alt: 'Agentic Coding with Claude Code — 3D view',
    tags: ['AI Engineering', 'Developer Tools', 'Automation', 'Claude Code'],
    eyebrow: 'Recommended Reading',
    title: 'Agentic Coding with Claude Code',
    quoteLabel: 'About This Book',
    quote:
      '"Move beyond ad hoc prompts and use Claude Code as an extensible, agent-driven development platform."',
    attribution: '— Agentic Coding with Claude Code, Eden Marco',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

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

function BookCard({ book }: { book: BookEntry }) {
  return (
    <div style={{ maxWidth: PANEL_MAX_W }} className="mx-auto w-full">
      {/*
        Panel width: PANEL_MAX_W above.
        Panel position: mx-auto centers. Swap to ml-0 / mr-auto to pin left.
      */}
      <div
        style={{
          border: `1px solid rgba(255,121,0,0.32)`,
          padding: PANEL_P,
        }}
      >
        <div className="flex flex-col sm:flex-row items-start gap-7 sm:gap-8">

          {/* ── 3D PerspectiveBook ───────────────────────────────────────────
              Tweak: BOOK_W / BOOK_H / BOOK_SPINE at top of file             */}
          <div className="flex-shrink-0">
            <PerspectiveBook
              coverSrc={book.coverSrc}
              alt={book.alt}
              width={BOOK_W}
              height={BOOK_H}
              spineWidth={BOOK_SPINE}
            />
          </div>

          {/* ── Metadata + editorial copy ──────────────────────────────── */}
          <div className="flex flex-col gap-5 min-w-0 pt-1">

            {/* Discipline pills */}
            <div className="flex flex-wrap gap-1.5">
              {book.tags.map((t) => <Tag key={t} label={t} />)}
            </div>

            {/* Title block */}
            <div className="flex flex-col gap-0.5">
              <p
                className="text-[9px] uppercase"
                style={{ letterSpacing: '0.18em', color: 'rgba(255,255,255,0.20)' }}
              >
                {book.eyebrow}
              </p>
              <h2
                className="text-white text-[18px] leading-tight font-normal tracking-tight"
                style={{ fontFamily: "'Pixel Grotesk', sans-serif" }}
              >
                {book.title}
              </h2>
            </div>

            {/* Quote / description block */}
            <div
              className="flex flex-col gap-2 pl-3"
              style={{ borderLeft: `2px solid rgba(255,121,0,0.35)` }}
            >
              <p
                className="text-[9px] uppercase"
                style={{ letterSpacing: '0.18em', color: ORANGE }}
              >
                {book.quoteLabel}
              </p>
              <blockquote
                className="text-[11px] leading-relaxed italic font-light"
                style={{ color: 'rgba(255,255,255,0.48)' }}
              >
                {book.quote}
              </blockquote>
              <p
                className="text-[9px] not-italic"
                style={{ letterSpacing: '0.1em', color: 'rgba(255,255,255,0.24)' }}
              >
                {book.attribution}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export function OgilvyShowcase() {
  return (
    <section className="bg-black w-full px-8 md:px-12 lg:px-20 py-20 lg:py-24">
      {/* Books stacked vertically — add entries to the BOOKS array above */}
      <div className="flex flex-col gap-6">
        {BOOKS.map((book) => (
          <BookCard key={book.coverSrc} book={book} />
        ))}
      </div>
    </section>
  )
}
