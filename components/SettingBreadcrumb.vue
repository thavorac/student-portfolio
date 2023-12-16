<template>
  <div class="-intro-x breadcrumb breadcrumb--light mr-32">
    <NuxtLink class="flex flex-row px-3" :to="localePath(`/advisor/settings`)">
      <SettingIcon class="iconColor w-5 text-white fill-current" />
      <p class="textColor text-white pl-2 pt-3">Setting</p>
    </NuxtLink>
    <div class="hidden">
      <a
        v-for="(item, i) in crumbs"
        :key="i"
        :class="item.classes"
        :href="item.path"
      >
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<script>
import SettingIcon from '~/assets/icons/settings.svg?inline'
export default {
  components: { SettingIcon },
  computed: {
    crumbs() {
      const crumbs = []
      this.$route.matched.forEach((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        // crumb.name = this.$i18n.t('route.' + (item.name || item.path)) // future using
        crumb.name = item.name || item.path

        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, '')),
            })
            crumb.path = this.$route.path
            crumb.name = this.$i18n.t('route.' + this.$route.name, [
              crumb.path.match(/[^/]*$/)[0],
            ])
          }
          crumb.classes = 'breadcrumb--active'
        }

        crumbs.push(crumb)
      })

      return crumbs
    },
  },
}
</script>
<style scoped>
a.nuxt-link-active {
  border: 1px solid white;
  background-color: #fff;
  color: black;
  border-radius: 15px;
}
a.nuxt-link-active .textColor {
  color: black;
}
a.nuxt-link-active .iconColor {
  color: black;
  fill: currentColor;
}
</style>
