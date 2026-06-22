<script setup lang="ts">
withDefaults(defineProps<{ bg?: string; active?: boolean; as?: 'span' | 'button' }>(), {
  bg: 'var(--cream)',
  as: 'span',
})
defineEmits<{ click: [] }>()
</script>

<template>
  <component
    :is="as"
    class="pill"
    :aria-pressed="as === 'button' ? active : undefined"
    :style="{ background: active ? 'var(--yellow)' : bg, borderColor: 'var(--ink)' }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<style scoped>
.pill {
  display: inline-flex;
  align-items: center;
  border: var(--border);
  border-radius: var(--radius-pill);
  padding: 4px 14px;
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font);
  cursor: default;
}
button.pill {
  cursor: pointer;
}
</style>
