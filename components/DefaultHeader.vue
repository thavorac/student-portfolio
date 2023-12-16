<template>
  <div
    class="border-b border-theme-29 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10"
  >
    <div class="top-bar-boxed flex items-center">
      <!-- BEGIN: Logo -->
      <NuxtLink
        :to="localePath('/')"
        class="-intro-x hidden md:flex text-lg font-bold text-white"
      >
        <Logo class="w-[100px] sm:w-24 mb-1 fill-current text-white" />
      </NuxtLink>
      <!-- END: Logo -->
      <Breadcrumb />

      <div class="intro-x dropdown mr-4 sm:mr-6 text-white">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          class="dark:text-brand-300 uppercase hover:!underline !duration-300"
          :to="switchLocalePath(locale.code)"
        >
          <KhFlag v-if="locale.code === 'kh'" class="w-[28px] svg-shadow" />
          <UsFlag v-else class="w-[28px] svg-shadow" />
        </nuxt-link>
      </div>
      <!-- BEGIN: Account Menu -->
      <div class="intro-x dropdown w-8 h-8">
        <div
          class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
          role="button"
          aria-expanded="false"
          @click="toggleProfileMenu"
          @keydown.esc="closeProfileMenu"
        >
          <LazyImage
            class="object-cover w-8 h-8 rounded-full"
            :src="userAvatar"
            fit="cover"
            alt=""
            aria-hidden="true"
          />
        </div>
        <transition name="ease-in">
          <template v-if="isProfileMenuOpen">
            <div
              v-click-outside="closeProfileMenu"
              class="dropdown-menu w-56"
              :class="{ 'display-dropdown show': isProfileMenuOpen }"
              @keydown.esc="closeProfileMenu"
            >
              <div
                class="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white"
              >
                <div class="p-4 border-b border-theme-27 dark:border-dark-3">
                  <div class="font-medium">Sala</div>
                  <div class="text-xs text-theme-28 mt-0.5 dark:text-gray-600">
                    's SALA.co
                  </div>
                </div>
                <div class="p-2">
                  <NuxtLink
                    class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                    :to="localePath('/profile/edit')"
                    :title="$t('authenticator.profile')"
                  >
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
                      class="feather feather-user w-4 h-4 mr-2"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      ></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    {{ $t('authenticator.profile') }}
                  </NuxtLink>
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md hidden"
                  >
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
                      class="feather feather-edit w-4 h-4 mr-2"
                    >
                      <path
                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                      ></path>
                      <path
                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                      ></path>
                    </svg>
                    Add Account
                  </a>
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md hidden"
                  >
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
                      class="feather feather-lock w-4 h-4 mr-2"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Reset Password
                  </a>
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md hidden"
                  >
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
                      class="feather feather-help-circle w-4 h-4 mr-2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Help
                  </a>
                </div>
                <div class="p-2 border-t border-theme-27 dark:border-dark-3">
                  <a
                    href="javascript:;"
                    class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                    :title="$t('navigation.logout')"
                    @click.prevent="logout"
                  >
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
                      class="feather feather-toggle-right w-4 h-4 mr-2"
                    >
                      <rect
                        x="1"
                        y="5"
                        width="22"
                        height="14"
                        rx="7"
                        ry="7"
                      ></rect>
                      <circle cx="16" cy="12" r="3"></circle>
                    </svg>
                    {{ $t('navigation.logout') }}
                  </a>
                </div>
              </div>
            </div>
          </template>
        </transition>
      </div>
      <!-- END: Account Menu -->
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Logo from '~/assets/img/logo.svg?inline'
import KhFlag from '~/assets/svg/cambodia.svg?inline'
import UsFlag from '~/assets/svg/united-states.svg?inline'
import Breadcrumb from '~/components/Breadcrumb.vue'
import LazyImage from '~/components/LazyImage.vue'

export default {
  name: 'DefaultHeader',
  components: {
    Logo,
    Breadcrumb,
    LazyImage,
    KhFlag,
    UsFlag,
  },
  computed: {
    ...mapState(['isProfileMenuOpen', 'isNotificationsMenuOpen']),
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    userAvatar() {
      return '/placeholder.png'
    },
  },
  methods: {
    ...mapMutations([
      'toggleSideMenu',
      'togglePagesMenu',
      'toggleProfileMenu',
      'toggleNotificationsMenu',
      'closeSideMenu',
      'closeNotificationsMenu',
      'closeProfileMenu',
    ]),
    async logout() {
      await this.$store.dispatch('users/logout')
      await this.$store.dispatch('closeProfileMenuAction')
      this.$router.push(this.localePath('/'))
    },
  },
}
</script>

<style lang="postcss" scoped>
.main .dropdown {
  a {
    @apply text-white;
  }
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
.svg-shadow {
  -webkit-filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))
    drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))
    drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06));
}
</style>
