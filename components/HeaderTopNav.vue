<template>
  <nav class="top-nav">
    <ul>
      <li v-for="(item, index) in menus" :key="index">
        <NuxtLink
          :to="item.path"
          class="top-menu"
          :class="{ 'top-menu--active': $route.path.includes(item.path) }"
        >
          <div class="top-menu__icon">
            <span v-html="item.icon"></span>
          </div>
          <div class="top-menu__title">{{ item.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: null,
    },
  },
}
</script>
