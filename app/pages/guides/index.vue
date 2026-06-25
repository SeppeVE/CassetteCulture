<script setup lang="ts">
const guides = useGuides()
const activeLevel = ref<string | null>(null)
const levels = ['Beginner', 'Intermediate', 'Advanced']

const filtered = computed(() =>
  guides.filter((g) => !activeLevel.value || g.level === activeLevel.value)
)

useSeoMeta({
  title: 'Guides — Cassette Culture Hub',
  description: 'Everything from buying your first deck to baking a sticky tape — practical, hands-on, and free.',
})
</script>

<template>
  <div>
    <section class="hero">
      <UiPill bg="var(--yellow)">📖 Written by the community</UiPill>
      <h1>Guides</h1>
      <p>Everything from buying your first deck to baking a sticky tape — practical, hands-on, and free.</p>
    </section>

    <section class="filters" aria-label="Filter by level">
      <span class="filter-label">Level:</span>
      <UiPill as="button" bg="transparent" :active="activeLevel === null" @click="activeLevel = null">All</UiPill>
      <UiPill
        v-for="level in levels"
        :key="level"
        as="button"
        bg="transparent"
        :active="activeLevel === level"
        @click="activeLevel = activeLevel === level ? null : level"
      >
        {{ level }}
      </UiPill>
    </section>

    <section class="list-section">
      <div class="guide-list">
        <GuidesGuideRow v-for="g in filtered" :key="g.id" :guide="g" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: var(--teal);
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
.list-section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 32px 64px;
}
.guide-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
