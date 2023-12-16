<template>
  <div class="-intro-x breadcrumb breadcrumb--light mr-auto">
    <a href="#" class="!text-white">Dashboard</a>
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
      class="feather feather-chevron-right breadcrumb__icon hidden"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
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
export default {
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
