<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    Footer
  }
}
</script>
