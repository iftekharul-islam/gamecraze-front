<template>
    <div>
        <!-- footer -->
        <footer class="footer-section">
             <div class="footer-section--content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-11 ml-auto">
                            <!-- <div class="footer-top">
                            <a href="/" class="footer-logo"><img src="../assets/img/logo/gamehublogo.svg" alt="logo"></a>
                            <div class="footer-top--right">
                            </div>
                        </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-middle" v-if="largeFooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-sm-6 col-lg-3">
                                    <div class="footer-menu-content mb-5 mb-sm-0">
                                        <div class="footer-top mb-3 mb-sm-4">
                                            <a href="/" class="footer-logo"><img src="../../assets/img/logo/gamehublogo.svg" alt="logo"></a>
                                            <div class="footer-top--right">
                                            </div>
                                        </div>
                                        <p class="footer-menu-content--about-gamehub">
                                            {{ $t('gamehub_title', $store.state.locale) }}
                                        </p>
                                        <div class="footer-menu-content--address">
                                            <p class="footer-menu-content--address--text text-secondery">{{ $t('office', $store.state.locale) }}</p>
                                            <p class="footer-menu-content--address--text">House: 941, Road: 14, Avenue: 2,
                                                Mirpur DOHS, Dhaka 1216</p>
                                        </div>
                                         <div class="footer-menu-content--address">
                                            <p class="footer-menu-content--address--text text-secondery">{{ $t('cell_number', $store.state.locale) }}</p>
                                            <p class="footer-menu-content--address--text"><a href="tel:+8801886-614533">01886-614533</a></p>
                                        </div>
                                         <div class="footer-menu-content--address">
                                            <p class="footer-menu-content--address--text text-secondery">{{ $t('email_us', $store.state.locale) }}</p>
                                            <p class="footer-menu-content--address--text"><a href="mailto:contact@augnitive.com">contact@augnitive.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="footer-content-margin footer-menu-content footer-menu-content-middle mb-4 mb-sm-0">
                                        <div class="d-flex justify-content-between">
                                            <ul>
                                                <li class="text-white mb-3 gil-bold">Gamehub</li>
                                                <li @click="scrollToTop"><router-link to="/">{{ $t('home', $store.state.locale) }}</router-link></li>
                                                <li><router-link to="/games">{{ $t('rent_games', $store.state.locale) }}</router-link></li>
                                                <li><router-link to="/about-us">{{ $t('about_gamehub', $store.state.locale) }}</router-link></li>
                                                <li><router-link  class="router_link" to="/profile" @click.native="clickProfile()">{{ $t('post_for_lend', $store.state.locale) }}</router-link></li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                     <div class="footer-content-margin footer-menu-content footer-menu-content-middle mb-4 mb-sm-0">
                                        <div class="d-flex justify-content-between">
                                            <ul>
                                                <li class="text-white mb-3 gil-bold">Game Bazar</li>
                                                <li @click="scrollToTop"><router-link to="/gamebazar">{{ $t('home', $store.state.locale) }}</router-link></li>
                                                <li><router-link to="/sell-posts">{{ $t('all_product', $store.state.locale) }}</router-link></li>
                                                <li><a href="#" @click.prevent="routeOnSellPost">{{ $t('create_sell_post', $store.state.locale) }}</a></li>
<!--                                                <li><router-link to="/sell-posts">{{ $t('buy_ps4', $store.state.locale) }}</router-link></li>-->
<!--                                                <li><router-link to="/sell-posts">{{ $t('buy_ps5', $store.state.locale) }}4</router-link></li>-->
<!--                                                <li><router-link to="/sell-posts">{{ $t('buy_controller', $store.state.locale) }}</router-link></li>-->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-lg-3">
                                    <div class="footer-content-margin footer-menu-content footer-menu-content-last">
                                        <ul>
                                            
                                             <li>
                                                 <router-link to="/about-us">{{ $t('about_us', $store.state.locale) }}</router-link>
                                            </li>
                                              <li>
                                                <router-link to="/contacts">{{ $t('contact_us', $store.state.locale) }}</router-link>
                                            </li>
                                             <li>
                                                <router-link to="/frequently-asked-questions">{{ $t('faq', $store.state.locale) }}</router-link>
                                            </li>
                                             <li>
                                                <router-link to="/terms">{{ $t('terms_&_condition', $store.state.locale) }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/news">{{ $t('news_&_blog', $store.state.locale) }}</router-link>
                                            </li>
                                            <li>
                                                <router-link to="/privacy">{{ $t('privacy_policy', $store.state.locale) }}</router-link>
                                            </li>
                                             <li>
                                                <router-link to="/sponsors">{{ $t('ask_for_sponsorship', $store.state.locale) }}</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
<!--                        <div class="col-sm-6 offset-md-3">-->
<!--                           <form action="#" class="newsletter">-->
<!--                                <p>{{ $t('subscribe_our_newsletter', $store.state.locale) }}</p>-->
<!--                                <div class="d-flex ">-->
<!--                                    <input type="text">-->
<!--                                    <button class="px-4 newsletter__btn"> {{ $t('subscribe', $store.state.locale) }}</button>-->
<!--                                </div>-->
<!--                            </form> -->
<!--                        </div>-->
                    </div>
                </div>
            </div>
            <div class="footer-section--content">
                <div class="container">
                     <div class="row">
                         <div class="col-12">
                             <div class="footer-bottom">
                                <p class="gil-regular-imp">©2021 Game Hub</p>
                                   <p class="gil-regular-imp">Powered By: <a href="https://augnitive.com/?utm_source=GameHub&utm_medium=GH%20Footer&utm_campaign=GH%20Traffic" target="_blank">Augnitive</a></p>
                                <div class="footer-bottom--social">
                                    <a href="https://www.facebook.com/gamehub.bangladesh" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/BdGamehub" target="_blank"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/gamehub.bd" target="_blank"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/channel/UCEtVjE3POZd-DKXpjpjJ53g" target="_blank"><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          largeFooter: false
        }
      },
      methods: {
        scrollToTop() {
          window.scrollTo(0,0)
        },
        clickProfile() {
          var auth = this.$store.getters.ifAuthenticated;
          if (!auth) {
            this.$router.push('/lend-notice');
            return
          }
          this.$root.$emit('rentPost');
        },
        routeOnSellPost(){
          var user = this.$store.state.user;
          if (!user){
            this.$router.push('/login')
            return
          }
          if (user.name && user.phone_number && user.identification_number && user.birth_date) {
            this.$router.push('/create-sell-post')
          }
          else {
            this.$swal("Incomplete Profile", "Please Update Your Profile with all information ");
            this.$router.push('/profile').then( () => {
              this.$root.$emit('profileEdit');
            });
          }
        },
      },
      watch: {
        "$route": {
          handler: function(value) {
            this.largeFooter = false;
            if (value.name === 'Home' || value.name === 'gamebazar' || value.name === 'sell-post' || value.name === 'rent-post-details' || value.name === 'CreateSellPost'){
                this.largeFooter = true
            }
          },
          deep: true,
          immediate: true,
        },
      },
    }
</script>
