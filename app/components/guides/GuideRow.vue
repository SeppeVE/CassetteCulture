<script setup lang="ts">
import type { GuideRow } from '~/composables/useMockData'

defineProps<{ guide: GuideRow }>()
</script>

<template>
  <NuxtLink :to="`/guides/${guide.slug}`" class="row">
    <div class="icon" :style="{ background: guide.iconBg }" aria-hidden="true">{{ guide.icon }}</div>
    <div class="body">
      <h4>{{ guide.title }}</h4>
      <p>{{ guide.excerpt }}</p>
      <div class="meta">
        <UiPill bg="var(--cream)">{{ guide.level }}</UiPill>
        <span class="time">⏱ {{ guide.readTime }}</span>
      </div>
    </div>
    <span class="arrow" aria-hidden="true">→</span>
  </NuxtLink>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 18px;
  background: white;
  border: var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px 24px;
  text-decoration: none;
  color: var(--ink);
  transition: transform 0.1s, box-shadow 0.1s;
}
.row:hover,
.row:focus-visible {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-lg);
}
.icon {
  width: 48px;
  height: 48px;
  border: var(--border);
  border-radius: 10px;
  box-shadow: 2px 2px 0 var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.body {
  flex: 1;
  min-width: 0;
}
h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 3px;
}
p {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0 0 8px;
}
.meta {
  display: flex;
  align-items: center;
  gap: 10px;
}
.time {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
}
.arrow {
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .row:hover,
  .row:focus-visible {
    transform: none;
  }
}
</style>
