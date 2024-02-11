<script setup lang="ts">
import SHLogo from '@/assets/svg/sh-logo.svg'

defineEmits<{
  toggleSidebar: [void]
}>()

const REPO_URL = 'https://github.com/Schrodinger-Hat/sh-website-cms'
const ORG_URL = 'https://github.com/Schrodinger-Hat/'
</script>

<template>
  <header flex="~ justify-between items-center" w-full p-3 sticky top-0 left-0 border-b border-base bg-inherit>
    <NuxtLink :to="ORG_URL" target="_blank">
      <SHLogo w-8 h-8 />
    </NuxtLink>
    <div space="x-4">
      <button class="inline-block md:hidden" @click="$emit('toggleSidebar')">
        <Icon w-6 h-6 name="carbon:menu" />
      </button>
      <NuxtLink :to="REPO_URL" target="_blank">
        <Icon w-6 h-6 name="carbon:logo-github" />
      </NuxtLink>
    </div>
  </header>
</template>
