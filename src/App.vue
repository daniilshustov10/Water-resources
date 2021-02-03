<template>
  <component :is="layout">
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import EmptyLayout from '@/layouts/EmptyLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components : {
    MainLayout,
    EmptyLayout
  }
}
</script>

<style scoped>
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/style.css';

</style>


