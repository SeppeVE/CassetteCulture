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
        <UiPill bg="var(--coral)">🔥 The Hub for Tape Heads</UiPill>
        <h1>Your Home For All Things <span class="highlight">Cassette.</span></h1>
        <p class="lede">
          Tapes, decks, Walkmans, mixtapes — a living community directory for everyone who loves
          the format.
        </p>
        <div class="cta-row">
          <UiBrutalButton variant="dark" as="a" href="/links">Explore the Site →</UiBrutalButton>
          <UiBrutalButton variant="light" as="a" href="/links">Browse Links</UiBrutalButton>
        </div>
        <dl class="stats">
          <div><dt>150+</dt><dd>Curated Links</dd></div>
          <div><dt>20+</dt><dd>Guides</dd></div>
          <div><dt>50+</dt><dd>Makers</dd></div>
          <div><dt>∞</dt><dd>Good Vibes</dd></div>
        </dl>
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
  background: var(--yellow);
  border-bottom: var(--border-thick);
  padding: 72px 32px;
}
.hero-inner {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}
h1 {
  font-size: 64px;
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -2px;
  margin: 20px 0 16px;
}
.highlight {
  background: var(--coral);
  border: 3px solid var(--ink);
  box-shadow: 5px 5px 0 var(--ink);
  padding: 0 10px;
}
.lede {
  font-size: 18px;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 0 32px;
}
.cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.stats {
  display: flex;
  border-top: var(--border);
  padding-top: 24px;
  margin: 0;
  gap: 24px;
}
.stats > div {
  flex: 1;
  padding-right: 24px;
  border-right: var(--border);
}
.stats > div:last-child {
  border-right: none;
}
.stats dt {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
}
.stats dd {
  font-size: 13px;
  margin: 4px 0 0;
  color: var(--text-muted);
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

@media (max-width: 900px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
  h1 {
    font-size: 44px;
  }
}
</style>
