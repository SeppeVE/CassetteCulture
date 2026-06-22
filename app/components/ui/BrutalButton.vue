<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'dark' | 'light' | 'accent'
    as?: 'button' | 'a'
    href?: string
  }>(),
  { variant: 'dark', as: 'button' }
)
</script>

<template>
  <component
    :is="as"
    :href="as === 'a' ? href : undefined"
    class="btn"
    :class="`btn--${variant}`"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border-radius: var(--radius-pill);
  border: var(--border);
  padding: 11px 24px;
  box-shadow: var(--shadow);
  transition: transform 0.1s, box-shadow 0.1s;
  white-space: nowrap;
}
.btn:hover,
.btn:focus-visible {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-lg);
}
.btn--dark {
  background: var(--ink);
  color: white;
  border-color: var(--ink);
}
.btn--light {
  background: white;
  color: var(--ink);
}
.btn--accent {
  background: var(--yellow);
  color: var(--ink);
  border-color: var(--ink);
}

@media (prefers-reduced-motion: reduce) {
  .btn:hover,
  .btn:focus-visible {
    transform: none;
  }
}
</style>
