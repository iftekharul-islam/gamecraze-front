<template >
  <div id="app" :class="lang">
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
      lang : this.$store.state.locale ?? this.$i18n.locale
    }
  },
  components: {
    navbar,
    Footer,
  },
  created() {
    this.$store.dispatch('AutoLogin');
    this.$store.dispatch('AddCartPostId');
    this.$store.dispatch('setLendWeek');
    this.$store.dispatch('setCheckpointId');
    this.$store.dispatch('setSetupPasswordUserFromStorage');
    
  },
  watch: {
  '$store.state.locale': function() {
    this.lang = this.$store.state.locale ?? this.$i18n.locale;
    }
  }
}
</script>

