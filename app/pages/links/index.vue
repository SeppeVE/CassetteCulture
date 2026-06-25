<script setup lang="ts">
const allLinks = useLinks()
const search = ref('')
const activeTag = ref<string | null>(null)

const tags = computed(() => [...new Set(allLinks.map((l) => l.tag))])

const filtered = computed(() =>
  allLinks
    .filter((l) => !activeTag.value || l.tag === activeTag.value)
    .filter((l) => l.title.toLowerCase().includes(search.value.toLowerCase()))
    .sort((a, b) => b.votes - a.votes)
)

useSeoMeta({
  title: 'Link Station — Cassette Culture Hub',
  description: 'Every great cassette site on the web, curated and ranked by the community.',
})
</script>

<template>
  <div>
    <section class="hero">
      <UiPill bg="var(--yellow)">🔗 The Community Directory</UiPill>
      <h1>Link Station</h1>
      <p>Every great cassette site on the web, curated and ranked by the community.</p>
      <div class="search-row">
        <label class="sr-only" for="search">Search links</label>
        <input id="search" v-model="search" type="text" placeholder="Search links…" />
        <UiBrutalButton variant="dark">+ Submit a Link</UiBrutalButton>
      </div>
    </section>

    <section class="filters" aria-label="Filter by category">
      <span class="filter-label">Filter:</span>
      <UiPill as="button" bg="transparent" :active="activeTag === null" @click="activeTag = null">All</UiPill>
      <UiPill
        v-for="tag in tags"
        :key="tag"
        as="button"
        bg="transparent"
        :active="activeTag === tag"
        @click="activeTag = activeTag === tag ? null : tag"
      >
        {{ tag }}
      </UiPill>
    </section>

    <section class="grid-section">
      <p v-if="filtered.length === 0" class="empty">No links match your filters yet.</p>
      <div v-else class="grid-3">
        <LinksLinkCard v-for="lk in filtered" :key="lk.id" :link="lk" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: var(--coral);
  border-bottom: var(--border-thick);
  padding: 56px 32px 48px;
  max-width: 1280px;
  margin: 0 auto;
}
h1 {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 16px 0;
}
.search-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  max-width: 600px;
  margin-top: 24px;
}
input {
  flex: 1;
  min-width: 220px;
  border: var(--border);
  border-radius: var(--radius-pill);
  padding: 12px 22px;
  font-family: var(--font);
  font-size: 15px;
}
.filters {
  background: var(--ink);
  padding: 18px 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.filter-label {
  color: #777;
  font-size: 13px;
  font-weight: 600;
}
.filters :deep(.pill) {
  color: #ccc;
  border-color: #444;
}
.filters :deep(.pill[aria-pressed='true']) {
  color: var(--ink);
  border-color: var(--yellow);
}
.grid-section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 32px 64px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.empty {
  color: var(--text-muted);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

@media (max-width: 900px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
</style>
