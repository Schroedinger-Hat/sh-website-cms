<script setup lang="ts">
const links = [
  {
    text: 'Code of Conduct',
    slug: '/code-of-conduct',
    icon: 'carbon:rule',
  },
  {
    text: 'Events',
    slug: '/events',
    icon: 'carbon:calendar-heat-map',
  },
  {
    text: 'General',
    slug: '/general',
    icon: 'carbon:chat',
  },
  {
    text: 'Sponsors',
    slug: '/sponsors',
    icon: 'carbon:partnership',
  },
  {
    text: 'Team',
    slug: '/team',
    icon: 'carbon:events-alt',
  },
]
</script>

<template>
  <aside class="aside" h-100dvh p3 fixed left-0 border-r border-base bg-inherit>
    <nav class="nav" flex="~ col justify-start items-center" w-full h-full>
      <NuxtLink
        v-for="link in links"
        :key="link.slug"
        :to="link.slug"
        :class=" $route.name === link.slug.slice(1)
          ? 'bg-gray-500/30 hover:bg-gray-500/30 cursor-default'
          : 'hover:bg-gray-400:5'
        "
        flex="~ justify-start items-center"
        w-full mb1 p3 rounded-lg
        active:bg-gray-300:6
      >
        <Icon :name="link.icon" mr2 />
        <span capitalize>
          {{ link.text }}
        </span>
      </NuxtLink>
    </nav>
  </aside>
</template>
