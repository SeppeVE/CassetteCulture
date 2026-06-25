<script setup lang="ts">
import type { LinkRow } from '~/composables/useMockData'

defineProps<{ link: LinkRow }>()
</script>

<template>
  <UiShadowBox class="card">
    <div class="top">
      <div class="icon" :style="{ background: link.iconBg }" aria-hidden="true">{{ link.icon }}</div>
      <span class="votes">
        <span aria-hidden="true">▲</span> {{ link.votes }}
        <span class="sr-only"> votes</span>
      </span>
    </div>
    <h4>{{ link.title }}</h4>
    <p>{{ link.description }}</p>
    <div class="bottom">
      <UiPill :bg="link.tagBg">{{ link.tag }}</UiPill>
      <a :href="link.url" class="visit">Visit →</a>
    </div>
  </UiShadowBox>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.icon {
  width: 46px;
  height: 46px;
  border: var(--border);
  border-radius: 8px;
  box-shadow: 2px 2px 0 var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 21px;
}
.votes {
  background: var(--yellow);
  border: var(--border);
  border-radius: var(--radius-pill);
  padding: 3px 11px;
  font-size: 11px;
  font-weight: 700;
  box-shadow: 1px 1px 0 var(--ink);
}
h4 {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 4px;
}
p {
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 12px;
  border-top: 1.5px solid #eee3d8;
}
.visit {
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
</style>
