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
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'The Creative Act: A Way of Being — 3D view',
    tags: ['Creativity', 'Taste', 'Creative Direction', 'Philosophy'],
    eyebrow: 'Recommended Reading',
    title: 'The Creative Act: A Way of Being',
    quoteLabel: 'Notable Quote',
    quote:
      '"The desire to make something has its own momentum, and that desire is sacred."',
    attribution: '— Rick Rubin · Record Producer & Creative Philosopher',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'Ways of Seeing — 3D view',
    tags: ['Visual Intelligence', 'Aesthetics', 'Culture', 'Perception'],
    eyebrow: 'Recommended Reading',
    title: 'Ways of Seeing',
    quoteLabel: 'Notable Quote',
    quote:
      '"Seeing comes before words. The child looks and recognises before it can speak."',
    attribution: '— John Berger · Art Critic & Author',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'On Writing — 3D view',
    tags: ['Writing', 'Craft', 'Language', 'Storytelling'],
    eyebrow: 'Recommended Reading',
    title: 'On Writing',
    quoteLabel: 'Notable Quote',
    quote: '"The road to hell is paved with adverbs."',
    attribution: '— Stephen King · Author',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'The Elements of Typographic Style — 3D view',
    tags: ['Typography', 'Visual Design', 'Aesthetics', 'Craft'],
    eyebrow: 'Recommended Reading',
    title: 'The Elements of Typographic Style',
    quoteLabel: 'Notable Quote',
    quote: '"Typography exists to honour content."',
    attribution: '— Robert Bringhurst · Typographer & Author',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'The Anatomy of Influence — 3D view',
    tags: ['Literature', 'Influence', 'Creative Sensibility', 'Writing'],
    eyebrow: 'Recommended Reading',
    title: 'The Anatomy of Influence',
    quoteLabel: 'Notable Quote',
    quote: '"Influence is influenza — an astral disease."',
    attribution: '— Harold Bloom · Literary Critic',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'The Poetics — 3D view',
    tags: ['Philosophy', 'Narrative', 'Structure', 'Aesthetics'],
    eyebrow: 'Recommended Reading',
    title: 'The Poetics',
    quoteLabel: 'Notable Quote',
    quote: '"The greatest thing by far is to be a master of metaphor."',
    attribution: '— Aristotle · Philosopher',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'Creativity: A Short and Cheerful Guide — 3D view',
    tags: ['Creativity', 'Thinking', 'Process', 'Humour'],
    eyebrow: 'Recommended Reading',
    title: 'Creativity: A Short and Cheerful Guide',
    quoteLabel: 'Notable Quote',
    quote: '"Creativity is not a talent. It is a way of operating."',
    attribution: '— John Cleese · Writer & Comedian',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'Art and Fear — 3D view',
    tags: ['Creativity', 'Making', 'Fear', 'Process'],
    eyebrow: 'Recommended Reading',
    title: 'Art and Fear',
    quoteLabel: 'Notable Quote',
    quote:
      '"The ceramics teacher announced he was dividing the class into two groups — quantity and quality. The quantity group\'s best work was produced by simply making more pots."',
    attribution: '— David Bayles & Ted Orland · Authors',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'Thinking with Type — 3D view',
    tags: ['Typography', 'Design', 'Visual Communication', 'Craft'],
    eyebrow: 'Recommended Reading',
    title: 'Thinking with Type',
    quoteLabel: 'About This Book',
    quote: '"Type is what meaning looks like."',
    attribution: '— Ellen Lupton · Designer & Author',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'The Vignelli Canon — 3D view',
    tags: ['Design', 'Modernism', 'Visual Systems', 'Craft'],
    eyebrow: 'Recommended Reading',
    title: 'The Vignelli Canon',
    quoteLabel: 'Notable Quote',
    quote: '"The life of a designer is a life of fight — fight against the ugliness."',
    attribution: '— Massimo Vignelli · Designer',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'Logo Modernism — 3D view',
    tags: ['Design', 'Branding', 'Modernism', 'Visual History'],
    eyebrow: 'Recommended Reading',
    title: 'Logo Modernism',
    quoteLabel: 'About This Book',
    quote:
      '"An archive of the period when commercial visual communication was at its most intentional and precise."',
    attribution: '— Jens Müller · Design Historian',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'The Elements of Style — 3D view',
    tags: ['Writing', 'Language', 'Style', 'Craft'],
    eyebrow: 'Recommended Reading',
    title: 'The Elements of Style',
    quoteLabel: 'Notable Quote',
    quote: '"Omit needless words."',
    attribution: '— Strunk & White · Authors',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'A Swim in a Pond in the Rain — 3D view',
    tags: ['Writing', 'Narrative', 'Craft', 'Reading'],
    eyebrow: 'Recommended Reading',
    title: 'A Swim in a Pond in the Rain',
    quoteLabel: 'Notable Quote',
    quote: '"A story is a system for the transfer of feeling."',
    attribution: '— George Saunders · Author & Professor',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'Bobos in Paradise — 3D view',
    tags: ['Culture', 'Aesthetics', 'Commerce', 'Sociology'],
    eyebrow: 'Recommended Reading',
    title: 'Bobos in Paradise',
    quoteLabel: 'About This Book',
    quote:
      '"The educated class has become the new establishment — and taste is their primary currency."',
    attribution: '— David Brooks · Author & Journalist',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'The Rebel Sell — 3D view',
    tags: ['Culture', 'Branding', 'Counterculture', 'Commerce'],
    eyebrow: 'Recommended Reading',
    title: 'The Rebel Sell',
    quoteLabel: 'Notable Quote',
    quote:
      '"Rebellion, it turns out, is one of the most reliable engines of consumer capitalism."',
    attribution: '— Joseph Heath & Andrew Potter · Authors',
  },
  {
    coverSrc: '/placeholder-logo.png',
    alt: 'Selling the Invisible — 3D view',
    tags: ['Marketing', 'Services', 'Positioning', 'Strategy'],
    eyebrow: 'Recommended Reading',
    title: 'Selling the Invisible',
    quoteLabel: 'Notable Quote',
    quote:
      '"In services, you are not selling what you do. You are selling what the client will feel."',
    attribution: '— Harry Beckwith · Marketing Strategist',
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
