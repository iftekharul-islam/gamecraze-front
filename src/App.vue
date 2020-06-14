<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import navbar from './components/partials/Navbar.vue'
import Footer from './components/partials/Footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    Footer
  }
}
</script>

