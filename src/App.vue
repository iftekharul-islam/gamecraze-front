<template>
  <div id="app">
    <adminNavbar v-if="this.$store.state.admin"></adminNavbar>
    <navbar v-else></navbar>
    <mainSidebar v-if="this.$store.state.admin"></mainSidebar>
    <router-view></router-view>
    <adminFooter v-if="this.$store.state.admin"></adminFooter>
    <Footer v-else></Footer>
  </div>
</template>

<script>
import navbar from './components/Partials/Navbar.vue'
import Footer from './components/Partials/Footer.vue'
import adminNavbar from './components/admin/partial/Navbar'
import adminFooter from './components/admin/partial/Footer'
import mainSidebar from './components/admin/partial/MainSidebar'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    navbar,
    Footer,
    adminNavbar,
    adminFooter,
    mainSidebar
  },
  created() {
    this.$store.dispatch('AutoLogin');
    this.$store.dispatch('AddCartPostId');
    this.$store.dispatch('setLendWeek');
  }
}
</script>

