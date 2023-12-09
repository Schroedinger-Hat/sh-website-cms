<script setup lang="ts">
const navEl = ref<HTMLElement | null>(null)
const { height } = useElementBounding(navEl)
</script>

<template>
  <main bg-primary text-white>
    <TheNav ref="navEl" z-2 bg-primary />
    <TheSidebar z-1 :nav-height="height" />
    <div relative>
      <div h-100vh bg-green-500 w-full />
      <div h-100vh bg-red-500 w-full />
      <div h-100vh bg-blue-500 w-full />
      <div h-100vh bg-pink-500 w-full />
    </div>
    <NuxtPage />
  </main>
</template>

<style scoped lang="scss">
.layout {
  height: calc(100dvh - v-bind('navHeight'))
}
</style>
