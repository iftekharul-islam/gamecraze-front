<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import navbar from './components/Partials/Navbar.vue'
import Footer from './components/Partials/Footer.vue'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    navbar,
    Footer,
  },
  created() {
    this.$store.dispatch('AutoLogin')
  }
}
</script>

