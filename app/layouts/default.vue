<script setup lang="ts"></script>

<template>
  <div>
    <a href="#main" class="skip-link">Skip to content</a>

    <header class="site-header">
      <div class="bar">
        <NuxtLink to="/" class="brand">
          <span class="logo" aria-hidden="true">📼</span>
          <span class="brand-name">Cassette Culture Hub</span>
        </NuxtLink>
        <nav aria-label="Main">
          <NuxtLink to="/links" class="nav-link">Link Station</NuxtLink>
          <NuxtLink to="/guides" class="nav-link">Guides</NuxtLink>
          <NuxtLink to="/cassette-types" class="nav-link">Cassette Types</NuxtLink>
          <NuxtLink to="/makers" class="nav-link">Makers</NuxtLink>
          <NuxtLink to="/labels" class="nav-link">Labels</NuxtLink>
          <div class="divider" aria-hidden="true"></div>
          <UiBrutalButton variant="accent">Join Community</UiBrutalButton>
        </nav>
      </div>
    </header>

    <main id="main">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="bar">
        <NuxtLink to="/" class="brand brand--footer">
          <span class="logo logo--sm" aria-hidden="true">📼</span>
          <span class="brand-name">Cassette Culture Hub</span>
        </NuxtLink>
        <span class="copy">© 2026 · Built with love for the tape community</span>
        <div class="links">
          <a href="#">About</a>
          <a href="/links">Submit a Link</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--ink);
  border-bottom: var(--border-thick);
}
.bar {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.logo {
  width: 36px;
  height: 36px;
  background: var(--yellow);
  border: 2px solid #555;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
.logo--sm {
  width: 30px;
  height: 30px;
  font-size: 14px;
}
.brand-name {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: -0.3px;
}
nav {
  display: flex;
  align-items: center;
  gap: 2px;
}
.nav-link {
  color: #aaa;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  padding: 7px 14px;
  border-radius: 6px;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: #fff;
  background: #2a2a2a;
}
.divider {
  width: 1px;
  height: 24px;
  background: #333;
  margin: 0 10px;
}
.site-footer {
  background: #111;
  border-top: 3px solid #222;
  padding: 36px 0;
}
.site-footer .bar {
  height: auto;
  flex-wrap: wrap;
}
.brand--footer .brand-name {
  font-size: 14px;
}
.copy {
  font-size: 13px;
  color: #555;
}
.links {
  display: flex;
  gap: 20px;
}
.links a {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.links a:hover {
  color: #aaa;
}
</style>
