<script setup lang="ts">
const navEl = ref<HTMLElement | null>(null)
const sidebarEl = ref<HTMLElement | null>(null)
const { width } = useElementBounding(sidebarEl)

const showSidebar = ref(false)
</script>

<template>
  <main bg-primary relative>
    <TheNav ref="navEl" class="nav" @toggle-sidebar="showSidebar = !showSidebar" />
    <TheSidebar ref="sidebarEl" class="sidebar" :show="showSidebar" />
    <div class="content">
      <slot />
    </div>
  </main>
</template>

<style scoped lang="scss">
.content {
  max-width: v-bind('`calc(100vw - ${width}px)`');

  @include breakpoint(md) {
    padding-left: v-bind('`${width}px`');
  }
}

.nav {
  z-index: $z-nav;
}

.sidebar {
  z-index: $z-sidebar;
}
</style>
