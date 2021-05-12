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
//   watch: {
// language() {
//   localStorage.language = JSON.stringify(this.language);
//   this.$i18n.locale = this.language.code;
//   this.$root.$i18n.locale = this.language.code;
//   document.documentElement.lang = JSON.parse(localStorage.language).code; //Added this bit
//   this.$root.$emit('on-change-language', { language_code: this.language.code });
// }}
watch: {
  '$store.state.locale': function() {
    console.log(this.$store.state.locale)
    this.lang = this.$store.state.locale ?? this.$i18n.locale;
  }
}
}
</script>

