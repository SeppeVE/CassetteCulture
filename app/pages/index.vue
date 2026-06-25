<script setup lang="ts">
const links = useLinks().slice(0, 3)
const guides = useGuides().slice(0, 3)

useSeoMeta({
  title: 'Cassette Culture Hub — Your home for all things cassette',
  description:
    'Tapes, decks, Walkmans, mixtapes — a living community directory of links, guides, and makers for everyone who loves the format.',
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-type">
          <div class="hero-type-main">
            <p class="hero-kicker">// COMMUNITY-MAINTAINED LIBRARY — EST. 2026</p>
            <h1 class="hero-title">
              <span class="hero-line hero-line--lead">The</span>
              <span class="hero-line hero-line--accent">Cassette Culture</span>
              <span class="hero-line hero-line--lead hero-line--library">library.</span>
            </h1>
          </div>
          <p class="hero-desc">
            A community-built library for the cassette format — tapes, decks, Walkmans &amp;
            mixtapes. Find a link, follow a guide, look up a tape type. Free, open, always growing.
          </p>
        </div>

        <div class="hero-panels">
          <div class="panel panel--mission">
            <div class="panel-titlebar">
              <span>About the Hub</span>
              <span class="panel-chrome-btn" aria-hidden="true"></span>
            </div>
            <div class="panel-body">
              <p>
                One roof for the whole cassette world. We collect, sort and upvote the best of it so
                you don't have to dig through twenty dead forums.
              </p>
              <div class="tag-row">
                <span class="tag tag--yellow">Non-profit</span>
                <span class="tag tag--teal">Open</span>
                <span class="tag tag--purple">Ad-free</span>
              </div>
              <a href="#" class="panel-link">About us →</a>
            </div>
          </div>

          <div class="panel panel--search">
            <div class="panel-titlebar panel-titlebar--dark">
              <span>▸ Search the Index</span>
              <div class="traffic-lights" aria-hidden="true">
                <span class="traffic-lights__dot traffic-lights__dot--red"></span>
                <span class="traffic-lights__dot traffic-lights__dot--teal"></span>
                <span class="traffic-lights__dot traffic-lights__dot--yellow"></span>
              </div>
            </div>
            <div class="panel-body">
              <div class="search-bar">
                <span class="search-bar__icon" aria-hidden="true">🔍</span>
                <input
                  type="search"
                  class="search-bar__input"
                  placeholder="Search links, guides, tape types, makers…"
                  disabled
                  aria-label="Search links, guides, tape types, makers"
                />
                <button type="button" class="search-bar__go" disabled>Go</button>
              </div>
              <div class="popular-row">
                <span class="popular-label">Popular:</span>
                <button type="button" class="popular-chip" disabled>Type II vs IV</button>
                <button type="button" class="popular-chip" disabled>Mixtape recording</button>
                <button type="button" class="popular-chip" disabled>Service manuals</button>
                <button type="button" class="popular-chip" disabled>Belt swap</button>
              </div>
              <div class="index-meta">
                <div class="index-meta__status">
                  <span class="index-meta__dot" aria-hidden="true"></span>
                  <span>LIVING INDEX</span>
                </div>
                <span class="index-meta__stat">220+ entries</span>
                <span class="index-meta__stat">12 new this month</span>
                <a href="#" class="index-meta__submit">Submit a link →</a>
              </div>
            </div>
          </div>

          <div class="panel panel--tape">
            <div class="panel-titlebar">
              <span>Random Tape</span>
              <span class="panel-chrome-btn" aria-hidden="true"></span>
            </div>
            <div class="panel-body panel-body--tape">
              <div class="cassette" aria-hidden="true">
                <div class="cassette-label">
                  <span>MAXELL XLII-S · 90</span>
                  <span class="cassette-label__line"></span>
                  <span class="cassette-label__line cassette-label__line--short"></span>
                </div>
                <div class="cassette-window">
                  <div class="cassette-hub">
                    <span class="cassette-hub__core"></span>
                  </div>
                  <div class="cassette-hub cassette-hub--fast">
                    <span class="cassette-hub__core"></span>
                  </div>
                </div>
                <div class="cassette-screws">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
              <button type="button" class="spin-btn" disabled>Spin another →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">What's Inside</h2>
      <div class="grid-2">
        <UiShadowBox bg="var(--coral)" lg>
          <h3>🔗 Link Station</h3>
          <p>A curated, categorised directory of the best cassette-related sites on the web.</p>
          <UiBrutalButton variant="dark" as="a" href="/links">Browse Links →</UiBrutalButton>
        </UiShadowBox>
        <UiShadowBox bg="var(--teal)" lg>
          <h3>📖 Guides</h3>
          <p>Practical, community-written guides from buying your first deck to recording the perfect mixtape.</p>
          <UiBrutalButton variant="dark" as="a" href="/guides">Read Guides →</UiBrutalButton>
        </UiShadowBox>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">🔗 Link Station</h2>
      <div class="grid-3">
        <LinksLinkCard v-for="lk in links" :key="lk.id" :link="lk" />
      </div>
      <UiBrutalButton variant="dark" as="a" href="/links">View All Links →</UiBrutalButton>
    </section>

    <section class="section">
      <h2 class="section-title">📖 Guides</h2>
      <div class="guide-list">
        <GuidesGuideRow v-for="g in guides" :key="g.id" :guide="g" />
      </div>
      <UiBrutalButton variant="dark" as="a" href="/guides">All Guides →</UiBrutalButton>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: var(--cream);
  background-image: radial-gradient(rgba(0, 0, 0, 0.06) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
  border-bottom: var(--border-thick);
  overflow: hidden;
}
.hero-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}
.hero-type {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
  padding: 46px 0 44px;
}
.hero-type-main {
  flex: 1;
  min-width: min(380px, 100%);
}
.hero-kicker {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #7a6a3a;
  margin: 0 0 18px;
}
.hero-title {
  font-family: var(--font-display);
  margin: 0;
  line-height: 0.88;
  letter-spacing: -2px;
  text-transform: uppercase;
}
.hero-line {
  display: block;
  color: var(--ink);
}
.hero-line--lead {
  font-size: clamp(36px, 5.5vw, 64px);
  letter-spacing: -1px;
  opacity: 0.85;
}
.hero-line--accent {
  font-size: clamp(48px, 7.5vw, 96px);
  letter-spacing: -2.5px;
  opacity: 0.85;
}
.hero-line--library {
  text-transform: lowercase;
}
.hero-desc {
  flex: 0 0 280px;
  border-left: 3px solid var(--ink);
  padding: 6px 0 6px 18px;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.7;
  color: #555;
  margin: 0;
}
.hero-panels {
  display: grid;
  grid-template-columns: 280px 1fr 312px;
  gap: 18px;
  align-items: start;
  margin: 0 0 56px;
}
.panel {
  border: 3px solid var(--ink);
  box-shadow: 7px 7px 0 #000;
  display: flex;
  flex-direction: column;
}
.panel--mission {
  background: var(--cream);
}
.panel--search {
  background: #fff;
}
.panel--tape {
  background: var(--coral);
}
.panel-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 11px;
  background: var(--window-chrome);
  border-bottom: 3px solid var(--ink);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--ink);
}
.panel-titlebar--dark {
  background: var(--ink);
  color: var(--yellow);
}
.panel-chrome-btn {
  width: 13px;
  height: 13px;
  border: 2px solid var(--ink);
  display: block;
  flex-shrink: 0;
}
.traffic-lights {
  display: flex;
  gap: 5px;
}
.traffic-lights__dot {
  width: 11px;
  height: 11px;
  border: 1.5px solid var(--yellow);
  display: block;
}
.traffic-lights__dot--red {
  background: var(--coral);
}
.traffic-lights__dot--teal {
  background: var(--teal);
}
.traffic-lights__dot--yellow {
  background: var(--yellow);
}
.panel-body {
  padding: 18px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}
.panel-body p {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  color: var(--ink);
}
.panel-body--tape {
  padding: 20px;
  align-items: center;
}
.tag-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tag {
  font-family: var(--font-mono);
  border: 2px solid var(--ink);
  padding: 2px 9px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
}
.tag--yellow {
  background: var(--yellow);
}
.tag--teal {
  background: var(--teal);
}
.tag--purple {
  background: var(--purple);
}
.panel-link {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 2px solid var(--ink);
  align-self: flex-start;
  margin-top: auto;
}
.search-bar {
  display: flex;
  align-items: stretch;
  border: 3px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  overflow: hidden;
}
.search-bar__icon {
  display: flex;
  align-items: center;
  padding-left: 18px;
  font-size: 20px;
  line-height: 1;
}
.search-bar__input {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-mono);
  font-size: 15px;
  color: var(--ink);
  padding: 16px 14px;
  background: transparent;
  min-width: 0;
}
.search-bar__input::placeholder {
  color: #999;
}
.search-bar__go {
  background: var(--ink);
  color: var(--yellow);
  border: none;
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 26px;
  white-space: nowrap;
  letter-spacing: 0.5px;
}
.popular-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.popular-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: #999;
  text-transform: uppercase;
}
.popular-chip {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--ink);
  background: transparent;
  border: 2px solid var(--ink);
  padding: 3px 11px;
  cursor: default;
}
.index-meta {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  padding-top: 16px;
  border-top: 2px dashed var(--ink);
}
.index-meta__status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--ink);
}
.index-meta__dot {
  width: 9px;
  height: 9px;
  background: var(--teal);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.25);
}
.index-meta__stat {
  font-family: var(--font-mono);
  font-size: 12px;
  color: #777;
}
.index-meta__submit {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
  margin-left: auto;
  border-bottom: 2px solid var(--yellow);
}
.cassette {
  width: 252px;
  height: 160px;
  background: var(--yellow);
  border: 3px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  padding: 13px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cassette-label {
  background: var(--cream);
  border: 2px solid var(--ink);
  padding: 7px 9px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cassette-label span:first-child {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.cassette-label__line {
  height: 2px;
  background: var(--ink);
  opacity: 0.55;
  width: 90%;
}
.cassette-label__line--short {
  opacity: 0.35;
  width: 70%;
}
.cassette-window {
  flex: 1;
  background: #2a2a2a;
  border: 2px solid var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
}
.cassette-hub {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: repeating-conic-gradient(#fff 0 9deg, #2a2a2a 9deg 18deg);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: hub-spin 7s linear infinite;
}
.cassette-hub--fast {
  animation-duration: 11s;
}
.cassette-hub__core {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #2a2a2a;
  border: 2px solid #fff;
  display: block;
}
.cassette-screws {
  display: flex;
  justify-content: center;
  gap: 14px;
}
.cassette-screws span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ink);
  display: block;
}
.spin-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--ink);
  background: #fff;
  border: 2px solid var(--ink);
  box-shadow: 3px 3px 0 var(--ink);
  padding: 7px 16px;
  text-transform: uppercase;
  cursor: default;
}
.section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 32px;
}
.section-title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.8px;
  margin: 0 0 32px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}
.guide-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

@media (prefers-reduced-motion: reduce) {
  .cassette-hub {
    animation: none;
  }
}

@media (max-width: 1100px) {
  .hero-panels {
    grid-template-columns: 1fr 1fr;
  }
  .panel--tape {
    grid-column: 1 / -1;
    max-width: 360px;
    justify-self: center;
    width: 100%;
  }
}
@media (max-width: 900px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
  .hero-type {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding-top: 32px;
  }
  .hero-desc {
    flex: none;
    width: 100%;
    border-left: none;
    border-top: 3px solid var(--ink);
    padding: 18px 0 0;
  }
  .hero-panels {
    grid-template-columns: 1fr;
  }
  .panel--tape {
    max-width: none;
  }
}
</style>
