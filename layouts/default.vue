<template>
  <div class="main">
    <HeaderMobileMenu :menus="menus" />
    <DefaultHeader />
    <HeaderTopNav :menus="menus" />
    <div class="content shadow-lg">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import antdvPlugin from '~/plugins/antd-ui'
import HeaderMobileMenu from '~/components/HeaderMobileMenu.vue'
import DefaultHeader from '~/components/DefaultHeader.vue'
import HeaderTopNav from '~/components/HeaderTopNav.vue'

export default {
  name: 'DefaultLayout',
  components: { HeaderMobileMenu, DefaultHeader, HeaderTopNav },
  middleware: ['auth'],
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Discover information about schools, universities, courses that you like here in Sala. ',
      },
    ],
    bodyAttrs: {
      class: 'default',
    },
  },
  computed: {
    menus() {
      return [
        {
          title: this.$t('dashboard'),
          path: this.localePath('/'),
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>`,
        },
      ]
    },
  },
  created() {
    antdvPlugin()
  },
}
</script>
<style lang="less">
.default {
  @import (inline) 'ant-design-vue/dist/antd.css';
  @import (inline) '~/assets/styles/default-design.css';

  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#0052d4),
    to(#138ce3)
  );
  background: -o-linear-gradient(#0052d4, #138ce3);
  background: linear-gradient(#0052d4, #138ce3);
  padding-right: 2rem;
  padding-left: 2rem;
  overflow-x: hidden;

  --tw-border-opacity: 1;
  --tw-text-opacity: 1;
  --tw-bg-opacity: 1;

  a {
    color: rgb(45, 55, 72);
    &:hover {
      color: #d1d5db;
    }
  }

  p {
    margin: 0;
  }

  .main {
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .border-theme-29 {
    border-color: rgba(40, 78, 178, var(--tw-border-opacity));
  }

  .bg-theme-26 {
    background-color: rgba(21, 50, 154, var(--tw-bg-opacity));
  }

  .hover\:bg-theme-1:hover {
    background-color: rgba(28, 63, 170, var(--tw-bg-opacity));
  }

  .ant-calendar-picker {
    border: none;
  }
  .anticon {
    vertical-align: 0.175em;
  }
  .ant-table-pagination.ant-pagination {
    width: 100%;
    text-align: right;
  }
  .ant-pagination-total-text {
    float: left;
    margin-left: 10px;
  }
  .ant-pagination.ant-table-pagination li {
    margin-bottom: 10px;
  }
  .ant-table-thead > tr > th .anticon-filter,
  .ant-table-thead > tr > th .ant-table-filter-icon {
    font-size: 15px;
  }
  .ant-table-thead > tr > th .anticon-filter > svg,
  .ant-table-thead > tr > th .ant-table-filter-icon > svg {
    margin-top: -10px;
  }

  .img-box-shadow {
    -webkit-box-shadow: 0 0 0 2px #fff, 1px 1px 5px rgb(0 0 0 / 32%);
    box-shadow: 0 0 0 2px #fff, 1px 1px 5px rgb(0 0 0 / 32%);
  }
  .ant-table-filter-dropdown .ant-dropdown-menu {
    max-height: 400px;
    overflow: auto;
  }
}
</style>
