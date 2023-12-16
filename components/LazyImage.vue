<template>
  <nuxt-picture
    v-if="isPicture"
    class="h-full w-full"
    :src="src || '/discover-course.jpg'"
    :preset="preset"
    :width="width"
    :height="height"
    :sizes="sizes"
    :provider="provider"
    :format="format"
    :quality="quality"
    :fit="fit"
    :modifiers="modifiers"
    :loading="loadingAttr"
  />
  <nuxt-img
    v-else
    class="h-full w-full"
    :src="src || '/discover-course.jpg'"
    :preset="preset"
    :width="width"
    :height="height"
    :sizes="sizes"
    :provider="provider"
    :format="format"
    :quality="quality"
    :fit="fit"
    :modifiers="modifiers"
    :loading="loadingAttr"
  />
</template>

<script>
export default {
  props: {
    src: { type: String, default: undefined },
    preset: { type: String, default: undefined },
    width: { type: [Number, String], default: undefined },
    height: { type: [Number, String], default: undefined },
    sizes: { type: String, default: undefined },
    provider: { type: String, default: undefined },
    format: { type: String, default: undefined },
    quality: { type: String, default: undefined },
    fit: { type: String, default: undefined },
    modifiers: { type: Object, default: undefined },
    lazy: { type: Boolean, default: true },
    eager: { type: Boolean, default: false },
    isPicture: { type: Boolean, default: false },
  },
  data() {
    return {
      imageExists: true,
    }
  },
  head() {
    return {
      link: [{ rel: 'preload', as: 'image', href: this.backgroundImageUrl }],
    }
  },
  computed: {
    loadingAttr() {
      return this.eager ? 'eager' : this.lazy ? 'lazy' : 'auto'
    },
    backgroundImageUrl() {
      if (this.src) {
        return this.$img(this.src, {
          width: 30,
          quality: 40,
          blur: 1000,
        })
      } else {
        return '/discover-course.jpg'
      }
    },
  },
  methods: {
    onImageError(event) {
      this.imageExists = false
    },
  },
}
</script>
