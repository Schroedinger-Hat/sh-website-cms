<script setup lang="ts">
defineProps<{
  navHeight: number
}>()
</script>

<template>
  <aside class="aside" border-r border-base fixed left-0 bg-primary h-100dvh w-20>
    {{ navHeight }}
  </aside>
</template>

<style scoped lang="scss">
.aside {
  top: 57px;
}
</style>
