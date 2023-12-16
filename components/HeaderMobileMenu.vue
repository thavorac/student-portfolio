<template>
  <div class="mobile-menu md:hidden">
    <div class="mobile-menu-bar">
      <a
        :href="localePath('/')"
        class="flex mr-auto text-lg font-bold text-white"
      >
        <Logo class="w-[100px] h-[70px] sm:w-24 mb-1 fill-current text-white" />
      </a>
      <a href="javascript:;" @click="toggleSideMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bar-chart-2 w-8 h-8 text-white transform -rotate-90"
        >
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      </a>
    </div>
    <transition name="ease-in">
      <template v-if="isSideMenuOpen">
        <ul class="border-t border-theme-29 py-5 h-full">
          <li v-for="(item, index) in menus" :key="index">
            <NuxtLink
              :to="item.path"
              class="menu"
              :class="{ 'top-menu--active': $route.path == item.path }"
            >
              <div class="menu__icon">
                <span v-html="item.icon"></span>
              </div>
              <div class="menu__title">
                {{ item.title }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Logo from '~/assets/img/logo.svg?inline'
export default {
  components: { Logo },
  props: {
    menus: {
      type: Array,
      default: null,
    },
  },
  computed: {
    ...mapState(['isSideMenuOpen']),
  },
  methods: {
    ...mapMutations(['toggleSideMenu']),
  },
}
</script>

<style lang="postcss" scoped>
.main .mobile-menu {
  .ease-in-leave-active {
    @apply transition ease-in duration-150;
  }
  .ease-in-enter-active,
  .ease-in-leave-active {
    @apply opacity-100 duration-300;
  }
  .ease-in-enter,
  .ease-in-leave-to {
    @apply opacity-0 duration-200;
  }
}
</style>
