<script setup lang="ts">
import SHLogo from '@/assets/svg/sh-logo.svg'

const REPO_URL = 'https://github.com/Schrodinger-Hat/sh-website-cms'
const ORG_URL = 'https://github.com/Schrodinger-Hat/'
</script>

<template>
  <div flex="~ justify-between items-center" p-3 border-b border-base>
    <NuxtLink :to="ORG_URL" target="_blank">
      <SHLogo w-8 h-8 />
    </NuxtLink>
    <NuxtLink :to="REPO_URL" target="_blank">
      <Icon w-6 h-6 name="carbon:logo-github" />
    </NuxtLink>
  </div>
</template>
