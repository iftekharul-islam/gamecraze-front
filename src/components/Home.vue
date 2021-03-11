<template>
    <div>
        <!-- slider section -->
        <section class="slider-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h1 class="gamehub-heading">
                                Largest <span>Online</span><br> <span>Platform</span> For Games rent in <span>Bangladesh</span>
                            </h1>
                        <h6>Rent Sell buy PlayStation, Xbox, PC games online<br> and join the largest gaming community in Bangladesh</h6>
                        <router-link to="/games" class="btn--secondery"><span>BEGIN JOURNEY</span></router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- exchange and lend sectio -->
        <section class="exchange-lend-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="exchange-lend-section--exchange">
                            <h3>Do you want to
                                <span>Earn</span> Money?</h3>
                                <router-link to="/profile" class="btn--secondery exchange-lend-section--exchange-btn" @click.native="clickProfile()"> <span>Lend</span> </router-link>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="exchange-lend-section--lend">
                            <h3>DO YOU WANT TO
                                <span>Save</span> Money?</h3>
<!--                            <a href="#" class="btn&#45;&#45;secondery exchange-lend-section&#45;&#45;exchange-btn">lend</a>-->
                                <router-link to="/games" class="btn--secondery exchange-lend-section--exchange-btn"><span>rent</span></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- TRENDING GAMES -->
        <section class="trending-section">
            <div class="text-center">
                <h2 class="section-heading">TRENDING GAMES</h2>
            </div>
            <div id="owl-trending" class="owl-carousel owl-theme" v-if="trendingGames">
                <div class="item" v-for="(trending, index) in trendingGames" :key="index">
                    <router-link :to="{ path: '/game-details/' + trending.game.data.slug}" class="trending-image">
                        <img :src="trending.game.data.trending_url" alt="trending.game.data.name">
                    </router-link>
                    <div class="trending-game--name-price d-flex justify-content-between">
                         <router-link :to="{ path: '/game-details/' + trending.game.data.slug}" class="">{{ trending.game.data.name }}</router-link>
                    </div>
                    <div class="trending-game--categories d-flex justify-content-between" v-if="trending">
                        <div class="home-categories">
                            <a :href="'/games?categories=' + genre.slug" v-for="(genre) in trending.game.data.genres.data" :key="genre.id">{{ genre.name }}</a>
                        </div>
                        <div class="d-flex home-platform">
                            <a :href="'/games?platforms=' + platform.slug" v-for="(platform) in trending.game.data.platforms.data" :key="platform.id"><img :src=platform.url :alt="platform.name"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- favorite-section -->
        <section class="favorite-section">
            <div class="text-center">
                 <h2 class="section-heading">RENT YOUR FAVORITE GAMES</h2>
            </div>
            <div id="owl-favorite" class="owl-carousel owl-theme" v-if="populars.length">
                <div class="item" v-for="(popular, index) in populars" :key="index">
                    <div class="favorite-games">
                        <router-link :to="{ path: '/game-details/' + popular.game.data.slug}" v-if="popular.game.data.trending_url" class="d-block favorite-games--link">
                            <img :src="popular.game.data.poster_url" :alt="popular.game.data.name">
                        </router-link>
                        <router-link :to="{ path: '/game-details/' + popular.game.data.slug}" v-else>
                                <img src="../assets/img/rented/dummy-image.jpg" alt="no-image">
                        </router-link>
                        <div class="favorite-games-categories d-flex justify-content-center align-items-center">
                            <a :href="'/games?platforms=' + popular.platform.data.slug"><img :src="popular.platform.data.url" :alt="popular.platform.data.name" class="img-fluid"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="upcoming-section">
            <div class="text-center">
                <h2 class="section-heading">UPCOMING GAMES</h2>
            </div>

            <div id="owl-upcoming" class="owl-carousel owl-theme" v-if="upcomingGames">
                <div class="item" v-for="(game, index) in upcomingGames" :key="index">
                    <div class="owl-upcoming--item">
                        <router-link :to="{ path: '/game-details/' + game.slug}" class="upcoming-image">
                            <img class="card-img-top" :src="game.upcoming_url" :alt="game.name"  v-if="game.upcoming_url">
                            <img class="card-img-top" src="../assets/img/rented/dummy-image.jpg" alt="no-image" v-else>
                        </router-link>
                        <div class="d-flex upcoming-order">
                            <router-link :to="{ path: '/game-details/' + game.slug}"><span>View Details</span></router-link>
                            <a href="javascript:void(0)"  @click.prevent="setReminder(game.id)"><span>Remind me</span></a>
                        </div>
                    </div>
                    <div class="upcoming-game--name-price d-flex justify-content-between">
                        <router-link :to="{ path: '/game-details/' + game.slug}">{{ game.name }}</router-link>
                    </div>
                    <div class="upcoming-game--categories d-flex justify-content-between">
                        <div class="home-categories">
                            <a :href="'/games?categories=' + genre.slug" v-for="(genre, index) in game.genres.data" :key="index">{{ genre.name }}</a>
                        </div>

                        <div class="d-flex">
                            <a :href="'/games?platforms=' + platform.slug" v-for="(platform, index) in game.platforms.data" :key="index">
                                <img :src=platform.url :alt="platform.name">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- notice board -->
        <section class="noticed-board-section">
            <div class="text-center">
                <h2 class="section-heading">NEWS & NOTICE BOARD</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mx-auto d-none d-sm-block">
                        <div class="noticed-grid" v-if="articles">
                            <div class="notice-box" v-if="featuredArticle">
                                <img :src=featuredArticle.thumbnail :alt="featuredArticle.title" class="w-100">
                                <div class="noticed-details">
                                    <h6>{{ featuredArticle.title.substring(0, 20) }}</h6>
                                    <p> {{ featuredArticle.description.substring(0, 80) | strippedContent }}</p>
                                    <router-link :to="{ name: 'NewsStory', params: { id: featuredArticle.id }}"><span>Read More <i class="fas fa-arrow-right ml-2"></i></span></router-link>
                                </div>
                            </div>

                            <div class="notice-box" v-for="(article, index) in articles" :key="index" v-if="featuredArticle.id !== article.id">
                                <img :src=article.thumbnail :alt="article.title" class="w-100">
                                <div class="noticed-details">
                                    <router-link :to="{ name: 'NewsStory', params: { id: article.id }}" class="small-readmore"><span>Read More <i class="fas fa-arrow-right ml-2"></i></span></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <a href="/news" class="btn--secondery m-auto "><span>View All</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Noticed bord section mobile -->
        <section class="noticed-board-section-mobile d-block d-sm-none">
            <div class="container">
                <div class="col-12 p-0">
                     <div id="owl-notice-mobile" class="owl-carousel owl-theme">
                         <div class="item"  v-for="(article, index) in articles" :key="index" v-if="featuredArticle.id !== article.id">
                             <div class="notice-box">
                                <img :src=article.thumbnail :alt="article.title" class="w-100">
                                <div class="noticed-details">
                                    <router-link :to="{ name: 'NewsStory', params: { id: article.id }}" class="small-readmore"><span>Read More <i class="fas fa-arrow-right ml-2"></i></span></router-link>
                                </div>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
        </section>
        <!-- featured section -->
        <section class="featured-section">
            <div class="text-center">
                <h2 class="section-heading">FEATURED VIDEOS</h2>
            </div>
            <div class="container">
                <div class="col-12">
                    <div id="owl-video" class="owl-carousel owl-theme" v-if="videos">
                        <div class="item" v-for="(video, index) in videos" :key="index">
                            <div class="featured-videos">
                                <iframe :src="'https://www.youtube.com/embed/' + getVideoIdByURL(video.url)" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- footer -->
        <footer class="footer-section">
             <div class="footer-section--content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-11 ml-auto">
                            <div class="footer-top">
                            <a href="/" class="footer-logo"><img src="../assets/img/logo/gamehublogo.svg" alt="logo"></a>
                            <div class="footer-top--right">
                                <span>Sign up for our newsletter.</span>
                                <div class="footer-top--right-input-group">
                                    <div class="footer-top--right-input">
                                        <input type="email" class="" placeholder="E-mail address" v-model="email">
                                    </div>
                                    <button class="btn gamehub-search-btn" @click="subscribe" type="search" :disabled="isSubscring">
                                        <i v-if="!isSubscring" class="far fa-envelope"></i>
                                        <i v-if="isSubscring" class="spinner-border spinner-border-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-md-11 ml-auto">
                            <div class="row">
                                <div class="col-sm-6 col-md-3">
                            <div class="footer-menu-content">
                                <!-- <ul>
                                    <li><a href="javascript:void(0)">Company</a></li>
                                    <li><a href="/about-us">About Gamehub</a></li>
                                    <li><a href="/join-us">Join Us</a></li>
                                    <li><a href="/sponsors">Sponsors</a></li>
                                    <li><a href="/contacts">Contact Us</a></li>
                                </ul> -->

                                <p class="footer-menu-content--about-gamehub">
                                    Game Hub is Bangladesh's First
                                     Online Platform for lending &
                                    renting games for PlayStation, Xbox And PC.
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="footer-menu-content">
                                <!-- <ul>
                                    <li><a href="javascript:void(0)">For You</a></li>
                                    <li><router-link to="/frequently-asked-questions">FAQs</router-link></li>
                                    <li><router-link to="/shop">Shop</router-link></li>
                                    <li><router-link to="/privacy">Privacy</router-link></li>
                                    <li><router-link to="/terms">Terms</router-link></li>
                                </ul> -->
                                <div class="footer-menu-content--address">
                                    <p class="footer-menu-content--address--text">Email Us</p>
                                    <p class="footer-menu-content--address--text">contact@augnitive.com</p>
                                </div>
                                <div class="footer-menu-content--address">
                                    <p class="footer-menu-content--address--text">Office</p>
                                    <p class="footer-menu-content--address--text">House: 941, Road: 14, Avenue: 2,
                                        Mirpur DOHS, Dhaka 1216</p>
                                </div>


                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="footer-menu-content">
                                <ul>
                                    <!-- <li><a href="javascript:void(0)">Help</a></li>
                                    <li><router-link to="/support">Support</router-link></li>
                                    <li><router-link to="/forum">Forum</router-link></li>
                                    <li><router-link to="/stats">Stats</router-link></li> -->

                                    <li><router-link to="/about-us">About Gamehub</router-link></li>
                                    <li><router-link to="/profile">Rent Games</router-link></li>
                                    <li><router-link to="/games">Lend Games</router-link></li>
                                    <li><router-link to="/terms">Terms & condition</router-link></li>
                                    

                                </ul>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="footer-menu-content" v-if="platforms">
                                <ul>
                                    <!-- <li><a href="javascript:void(0)">Platforms</a></li>
                                    <li v-for="platform in platforms" :key="'platform-' + platform.id">
                                        <a :href="'/games?platforms=' + platform.slug">{{ platform.name }}</a>
                                    </li> -->
                                     <li><router-link to="/sponsors">Ask for sponsorship</router-link></li>
                                     <li><router-link to="/contacts">Contact Us</router-link></li>
                                     <li><router-link to="/frequently-asked-questions">FAQ</router-link></li>
                                     <li><router-link to="/news">News & blogs</router-link></li>
                                      <li><router-link to="/privacy">Privacy</router-link></li>
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
                                   <p>Powered By: <a href="https://augnitive.com/?utm_source=GameHub&utm_medium=GH%20Footer&utm_campaign=GH%20Traffic">Augnitive</a></p>
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
    import Vue from 'vue';

    export default {
        data() {
            return {
                trendingGames: [],
                upcomingGames: [],
                populars: [],
                articles: [],
                featuredArticle: null,
                isLoggedIn: false,
                videos: [],
                platforms: [],
                email: '',
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                isSubscring: false
            }
        },
        methods: {
            carouselOne: function () {
                $('#owl-trending').owlCarousel({
                    stagePadding: 150,
                    loop: true,
                    margin: 10,
                    nav: true,
                    dots: false,
                    autoplay:true,
                    autoplayHoverPause: true,
                    navText: [
                        '<i class="fas fa-arrow-left arrow"></i>',
                        '<i class="fas fa-arrow-right arrow"></i>'
                    ],
                    responsive:{
                        0:{
                            items: 1,
                            stagePadding: 50,
                            dots:false,
                            nav: true,
                             autoplayTimeout: 1500,
                        },
                        590:{
                            stagePadding: 0,
                            items: 2,
                            dots:false,
                            nav: true,
                             autoplayTimeout: 2000,
                        },
                        768:{
                            stagePadding: 0,
                            items: 3,
                            dots:false,
                            nav: true,
                        },
                        900:{
                            items: 2,
                            stagePadding: 150,
                        },
                        1200:{
                            items: 3,
                        },
                        1500:{
                            items: 4,
                        },
                        1800:{
                            items: 5
                        }
                    }
                });
            },
            carouselTwo: function() {
                $('#owl-upcoming').owlCarousel({
                    stagePadding: 150,
                    loop: true,
                    margin: 10,
                    nav: true,
                    dots:false,
                    autoplay:true,
                    autoplayHoverPause: true,
                    navText: [
                        '<i class="fas fa-arrow-left arrow"></i>',
                        '<i class="fas fa-arrow-right arrow"></i>'
                    ],
                    responsive:{
                        0:{
                            items: 1,
                            stagePadding: 50,
                            dots:false,
                            nav: true,
                            autoplayTimeout: 1500,
                        },
                        590:{
                            stagePadding: 0,
                            items: 2,
                            dots:false,
                            nav: true,
                            autoplayTimeout: 2000,
                        },
                        768:{
                            stagePadding: 0,
                            items: 3,
                            dots:false,
                            nav: true,
                        },
                        900:{
                            items: 2,
                            stagePadding: 100,
                        },
                        1200:{
                            items: 3,
                        },
                        1500:{
                            items: 4,
                        },
                        1800:{
                            items: 5
                        }
                    }
                });
            },
            carouselFour: function () {
                $('#owl-favorite').owlCarousel({
                    stagePadding: 150,
                    loop: true,
                    margin: 10,
                    nav: true,
                    dots:false,
                    autoplay:true,
                    autoplayHoverPause: true,
                    navText: [
                        '<i class="fas fa-arrow-left arrow"></i>',
                        '<i class="fas fa-arrow-right arrow"></i>'
                    ],
                    responsive:{
                        0:{
                            items: 3,
                            stagePadding: 0,
                            dots:true,
                            dots:false,
                            nav: true,
                            center: true,
                            autoplayTimeout: 1500,
                        },
                        600:{
                            items: 3,
                            stagePadding: 0,
                            center: false,
                            dots:false,
                            nav: true,
                            autoplayTimeout: 2000,
                        },
                        800:{
                            items: 3,
                            stagePadding: 100,
                        },
                        1026:{
                            items: 4,
                            stagePadding: 100,
                        },
                        1100:{
                            items: 5,
                            stagePadding: 100,
                        },
                          1300:{
                            items: 6,
                            stagePadding: 100,
                        },
                        1800:{
                            items: 8,
                             stagePadding: 100,
                        }
                    }
                });
            },
            
            carouselVideo: function () {
                $('#owl-video').owlCarousel({
                    // stagePadding: 150,
                    center: true,
                    loop: true,
                    margin: 10,
                    nav: true,
                    // autoplay:true,
                    dots:false,
                    navText: [
                        '<i class="fas fa-arrow-left arrow"></i>',
                        '<i class="fas fa-arrow-right arrow"></i>'
                    ],
                    responsive:{
                        0:{
                            items: 1,
                            dots:false,
                            nav: true,
                        },
                        768:{
                            items: 2,

                        }
                    }
                });
            },
            carouselNotice: function () {
            $('#owl-notice-mobile').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			dots:false,
            autoplay:true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
			navText: [
				'<i class="fas fa-arrow-left arrow"></i>',
				'<i class="fas fa-arrow-right arrow"></i>'
			],
			responsive:{
				0:{
					items: 1,
					stagePadding: 50,
					dots:true,
					dots:false,
                    nav: true,
				}
			}
        });
            },
            getTrendingGames: function () {
                this.$api.get('games/trending?include=game,game.assets,game.genres,game.platforms').then(response => {
                    var vm = this;
                    vm.trendingGames = response.data.data;

                    Vue.nextTick(function(){
                        vm.carouselOne();
                    }.bind(vm));
                });
            },
            getRentGames: function () {
                this.$api.get('games/popular-games?include=game.assets,platform').then(response => {
                    var vm = this;
                    vm.populars = response.data.data;
                    console.log("populars posts");
                    console.log(vm.populars);
                    Vue.nextTick(function(){
                        vm.carouselFour();
                    }.bind(vm));
                });
            },
            getNewGames: function () {
                this.$api.get('games/upcoming-games?include=assets,genres,platforms').then(response => {
                    var vm = this;
                    vm.upcomingGames = response.data.data;
                    Vue.nextTick(function(){
                        vm.carouselTwo();
                    }.bind(vm));
                });
            },
            getFeaturedArticles: function () {
                this.$api.get('featured-article?number=1').then(response => {
                    if (response.status == 200) {
                        if ( response.data.data.length > 0) {
                            this.featuredArticle = response.data.data[0];
                            console.log('this.featuredArticle');
                            console.log(this.featuredArticle);
                        }
                    }
                });
            },
            getArticles: function () {
                this.$api.get('top-articles?number=4').then(response => {
                    if (response.status == 200) {
                       //this.articles = response.data.data;
                        let vm = this;
                        vm.articles = response.data.data;
                        // console.log('vm.articles');
                        // console.log(vm.articles);
                        Vue.nextTick(function() {
                            vm.carouselNotice();
                        }.bind(vm));
                    }
                });
            },
            getFeturedVideo: function (number) {
                this.$api.get('featured-videos?number=' + number).then(response => {
                    if (response.status == 200) {
                        let vm = this;
                        vm.videos = response.data.data;
                        Vue.nextTick(function() {
                            vm.carouselVideo();
                        }.bind(vm));
                    }
                });
            },
            setReminder: function(gameId) {
                if (!this.isLoggedIn) {
                    this.$toaster.warning('Please login to set reminder');
                    return;
                }

                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }

                this.$api.post('set-reminder/' + gameId, {game_id: gameId}, config).then(response => {
                    if (response.status === 200) {
                        this.$toaster.success(response.data.message);
                        return;
                    }
                    this.$toaster.warning(response.data.message);
                })
            },
            getVideoIdByURL: function(url) {
                var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
                var match = url.match(regExp);
                return (match && match[1].length==11)? match[1] : false;
            },
            subscribe: function() {
                if (this.email == '' || !this.reg.test(this.email)) {
                    this.$toaster.warning('Enter Valid Email');
                    return;
                } 
                this.isSubscring = true;
                this.$api.post('subscribe/', {email: this.email}, '').then(response => {
                    if (response.status == 200) {
                        this.email = null;
                        this.$toaster.success(response.data.message);
                    } else {
                        this.$toaster.warning(response.data.message);
                    }
                    
                    this.isSubscring = false;
                })
            },
            featuredPlatforms: function(number) {
                this.$api.get('featured-platforms?number=' + number).then(response => {
                    if (response.status == 200) {
                        this.platforms = response.data.data;
                    }
                    
                })
            },
            clickProfile() {
                this.$root.$emit('rentPost');
            },
        },
        computed: {
            auth () {
                return this.$store.getters.ifAuthenticated;
            }
        },
        created() {
            window.scrollTo(0,0);

            this.getTrendingGames();
            this.getNewGames();
            this.getRentGames();
            this.getArticles();
            this.getFeaturedArticles(1)
            this.getFeturedVideo(5);
            this.featuredPlatforms(4);

            if (this.$store.getters.ifAuthenticated) {
                this.isLoggedIn = true;
            }
        },
        mounted () {
            document.body.classList.add('body-home')
        },
        destroyed () {
            document.body.classList.remove('body-home')
        },
        filters: {
            strippedContent: function(string) {
                return string.replace(/<\/?[^>]+>/ig, " ");
            }
        }
    }
</script>
