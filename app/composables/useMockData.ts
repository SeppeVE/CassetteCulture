// Placeholder data shaped like the Supabase schema (§7 of the plan).
// Swap these for `useDb().from(...)` calls once Supabase is wired up —
// the component-facing shape is meant to stay the same.

export interface LinkRow {
  id: string
  title: string
  url: string
  description: string
  icon: string
  iconBg: string
  tag: string
  tagBg: string
  votes: number
}

export interface GuideRow {
  id: string
  slug: string
  title: string
  excerpt: string
  icon: string
  iconBg: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  readTime: string
  author: string
}

export function useLinks(): LinkRow[] {
  return [
    { id: '1', icon: '⚙️', iconBg: 'var(--blue)', title: 'HiFi Engine', description: 'Service manuals and specs for almost every deck ever made. An essential bookmark.', votes: 342, tag: 'Manuals & Tech', tagBg: 'var(--teal)' },
    { id: '2', icon: '🎧', iconBg: 'var(--orange)', title: 'Walkman Land', description: 'Comprehensive Walkman database and community. Every model documented.', votes: 289, tag: 'Communities', tagBg: 'var(--purple)' },
    { id: '3', icon: '💬', iconBg: 'var(--coral)', title: 'r/cassetteculture', description: 'The subreddit. A large, active community for all things cassette tape.', votes: 201, tag: 'Communities', tagBg: 'var(--coral)' },
    { id: '4', icon: '🛒', iconBg: 'var(--teal)', title: 'Tapeline', description: 'New old-stock blanks and fresh pressings shipped worldwide. Reliable seller.', votes: 178, tag: 'Buying & Selling', tagBg: 'var(--yellow)' },
    { id: '5', icon: '🏷️', iconBg: 'var(--purple)', title: 'Tabs Out', description: 'Cassette label review podcast and blog. Find your next favourite tape release.', votes: 164, tag: 'Labels', tagBg: 'var(--coral)' },
    { id: '6', icon: '🔧', iconBg: 'var(--yellow)', title: 'Vintage Cassette', description: 'Deck database with photos, specs, and original brochures going back to the 70s.', votes: 142, tag: 'Manuals & Tech', tagBg: 'var(--teal)' },
  ].map((l) => ({ ...l, url: '#' })) as LinkRow[]
}

export function useGuides(): GuideRow[] {
  return [
    { id: '1', slug: 'buying-tapes', icon: '🛍️', iconBg: 'var(--yellow)', title: 'Buying Tapes', excerpt: 'What to look for, where to buy, and which brands to trust.', level: 'Beginner', readTime: '6 min', author: 'deckdoctor' },
    { id: '2', slug: 'restoring-tapes', icon: '🔧', iconBg: 'var(--coral)', title: 'Restoring Tapes', excerpt: 'Shell cleaning, splicing, baking, and dealing with oxide shed.', level: 'Intermediate', readTime: '14 min', author: 'deckdoctor' },
    { id: '3', slug: 'buying-a-deck', icon: '🎛️', iconBg: 'var(--purple)', title: 'Buying a Deck', excerpt: 'Which specs matter, models to look for, and red flags to avoid.', level: 'Beginner', readTime: '9 min', author: 'deckdoctor' },
    { id: '4', slug: 'servicing-a-deck', icon: '🪛', iconBg: 'var(--blue)', title: 'Servicing a Deck', excerpt: 'Belt swaps, head cleaning, demagnetising, and basic calibration.', level: 'Advanced', readTime: '18 min', author: 'deckdoctor' },
    { id: '5', slug: 'recording-your-first-mixtape', icon: '🎵', iconBg: 'var(--orange)', title: 'Recording Your First Mixtape', excerpt: 'Bias settings, recording levels, tape selection, and the art of the perfect track order.', level: 'Beginner', readTime: '12 min', author: 'deckdoctor' },
  ]
}
