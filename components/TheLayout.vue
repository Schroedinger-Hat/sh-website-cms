<script setup lang="ts">
const navEl = ref<HTMLElement | null>(null)
const sidebarEl = ref<HTMLElement | null>(null)
const { height } = useElementBounding(navEl)
const { width } = useElementBounding(sidebarEl)
</script>

<template>
  <main bg-primary>
    <TheNav ref="navEl" class="nav" />
    <TheSidebar ref="sidebarEl" class="sidebar" />
    <div class="content">
      <slot />
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  max-width: v-bind('`calc(100vw - ${width}px)`');
  margin-top: v-bind('`${height}px`');
  margin-left: v-bind('`${width}px`');
}

.nav {
  z-index: $z-nav;
}

.sidebar {
  z-index: $z-sidebar;
}
</style>
