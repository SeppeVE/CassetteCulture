<script setup lang="ts">
defineProps<{ bg?: string; lg?: boolean; xl?: boolean }>()
</script>

<template>
  <div class="box" :class="{ 'box--lg': lg, 'box--xl': xl }" :style="{ background: bg ?? 'white' }">
    <slot />
  </div>
</template>

<style scoped>
.box {
  border: var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 24px;
}
.box--lg {
  box-shadow: var(--shadow-lg);
}
.box--xl {
  box-shadow: var(--shadow-xl);
}
</style>
