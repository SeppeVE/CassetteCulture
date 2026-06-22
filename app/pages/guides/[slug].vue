<script setup lang="ts">
const route = useRoute()
const guides = useGuides()
const guide = guides.find((g) => g.slug === route.params.slug)

if (!guide) {
  throw createError({ statusCode: 404, statusMessage: 'Guide not found' })
}

useSeoMeta({
  title: `${guide.title} — Cassette Culture Hub`,
  description: guide.excerpt,
})
</script>

<template>
  <div>
    <section class="hero">
      <NuxtLink to="/guides" class="back">← All Guides</NuxtLink>
      <div class="meta-row">
        <UiPill bg="var(--coral)">{{ guide.level }}</UiPill>
        <span>⏱ {{ guide.readTime }} read</span>
      </div>
      <h1>{{ guide.title }}</h1>
      <p class="lede">{{ guide.excerpt }}</p>
      <div class="author">
        <span class="avatar" aria-hidden="true">🎧</span>
        <div>
          <div class="name">{{ guide.author }}</div>
          <div class="role">Contributor</div>
        </div>
      </div>
    </section>

    <section class="body-section">
      <article>
        <p>
          This is placeholder body copy — real content will come from the Tiptap-authored,
          sanitised guide body (§11 of the plan) once the database is wired up.
        </p>
      </article>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: var(--yellow);
  border-bottom: var(--border-thick);
  padding: 32px 32px 48px;
  max-width: 920px;
  margin: 0 auto;
}
.back {
  display: inline-flex;
  background: white;
  border: var(--border);
  border-radius: var(--radius-pill);
  padding: 7px 16px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 2px 2px 0 var(--ink);
  margin-bottom: 28px;
}
.meta-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 600;
}
h1 {
  font-size: 44px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 0 0 18px;
}
.lede {
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 24px;
}
.author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar {
  width: 44px;
  height: 44px;
  background: var(--purple);
  border: var(--border);
  border-radius: 50%;
  box-shadow: 2px 2px 0 var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.name {
  font-size: 14px;
  font-weight: 700;
}
.role {
  font-size: 12px;
  color: var(--text-muted);
}
.body-section {
  max-width: 680px;
  margin: 0 auto;
  padding: 56px 32px;
  font-size: 17px;
  line-height: 1.75;
}
</style>
