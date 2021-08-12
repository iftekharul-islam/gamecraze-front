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
                        <div class="col-md-11 ml-auto">
                            <div class="row">
                                <div class="col-sm-6 col-md-3">
                                    <div class="footer-menu-content mb-5 mb-sm-0">
                                        <div class="footer-top mb-3 mb-sm-5">
                                            <a href="/" class="footer-logo"><img src="../../assets/img/logo/gamehublogo.svg" alt="logo"></a>
                                            <div class="footer-top--right">
                                            </div>
                                        </div>
                                        <p class="footer-menu-content--about-gamehub">
                                            {{ $t('gamehub_title', $store.state.locale) }}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-3">
                                    <div class="footer-menu-content mb-5 mb-sm-0">
                                        <div class="footer-menu-content--address">
                                            <p class="footer-menu-content--address--text">{{ $t('email_us', $store.state.locale) }}</p>
                                            <p class="footer-menu-content--address--text"><a href="mailto:contact@augnitive.com">contact@augnitive.com</a></p>
                                        </div>
                                        <div class="footer-menu-content--address">
                                            <p class="footer-menu-content--address--text">{{ $t('cell_number', $store.state.locale) }}</p>
                                            <p class="footer-menu-content--address--text"><a href="tel:+8801886-614533">01886-614533</a></p>
                                        </div>
                                        <div class="footer-menu-content--address">
                                            <p class="footer-menu-content--address--text">{{ $t('office', $store.state.locale) }}</p>
                                            <p class="footer-menu-content--address--text">House: 941, Road: 14, Avenue: 2,
                                                Mirpur DOHS, Dhaka 1216</p>
                                        </div>
                                    </div>
                                </div>
                        <div class="col-6 col-md-3">
                            <div class="footer-menu-content">
                                <ul>
                                    <li><router-link to="/about-us">{{ $t('about_gamehub', $store.state.locale) }}</router-link></li>
                                    <li><router-link to="/profile">{{ $t('rent_games', $store.state.locale) }}</router-link></li>
                                    <li><router-link to="/games">{{ $t('lend_games', $store.state.locale) }}</router-link></li>
                                    <li><router-link to="/terms">{{ $t('terms_&_condition', $store.state.locale) }}</router-link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="footer-menu-content">
                                <ul>
                                    <li>
                                        <router-link to="/sponsors">{{ $t('ask_for_sponsorship', $store.state.locale) }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/contacts">{{ $t('contact_us', $store.state.locale) }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/frequently-asked-questions">{{ $t('faq', $store.state.locale) }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/news">{{ $t('news_&_blog', $store.state.locale) }}</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/privacy">{{ $t('privacy_policy', $store.state.locale) }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-section--content">
                <div class="container">
                     <div class="row">
                         <div class="col-md-11 ml-auto">
                             <div class="footer-bottom">
                                <p>©2021 Game Hub</p>
                                   <p>Powered By: <a href="https://augnitive.com/?utm_source=GameHub&utm_medium=GH%20Footer&utm_campaign=GH%20Traffic" target="_blank">Augnitive</a></p>
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
        <!-- footer -->
        <!-- <section class="copyright-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <div class="footer-bottom">
                    <p>©2021 Game Hub</p>
                     <p>Powered By: <a href="https://augnitive.com/?utm_source=GameHub&utm_medium=GH%20Footer&utm_campaign=GH%20Traffic" target="_blank"> Augnitive</a></p>
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
        </section> -->

    </div>
</template>
<script>
    export default {
      data() {
        return {
          largeFooter: false
        }
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
