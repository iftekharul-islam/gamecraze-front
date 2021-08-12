<head>
    <meta name="Description" content="Games rent in Dhaka Bangladesh for Playstation games, PS4 Games, PS5 Games, Xbox, and PC games. Game Hub is an online game exchanging, renting & selling platform for all kinds of game discs">
    <meta name="Keywords" content="Game Hub, Games rent in Bangladesh, Sell Games, Rent Games, PlayStation games rent 2021, Game exchange near me, Games for PS4, PS5, Xbox and PC, Game Exchanging platform,  Game renting platform, Games selling platform">
</head>
<template>
    <div>
        <!-- slider section -->
        <section class="slider-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h1 class="gamehub-heading">
                            {{ $t('largest', $store.state.locale) }} <span>{{ $t('online', $store.state.locale) }}</span><br> <span>{{ $t('banner_platform', $store.state.locale) }}</span> {{ $t('for_rent_in', $store.state.locale) }}<span>{{ $t('bangladesh_on_banner', $store.state.locale) }}</span>
                            </h1>
                        <h6>{{ $t('home_banner_text', $store.state.locale) }}</h6>
                        <router-link to="/games" class="btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('begin_journey', $store.state.locale) }}<span></span> <span></span></router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- exchange and lend section -->
        <section class="exchange-lend-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="exchange-lend-section--exchange">
                            <h3>{{ $t('do_you_want_to', $store.state.locale) }}
                                <span>{{ $t('earn', $store.state.locale) }}</span> {{ $t('money', $store.state.locale) }}</h3>
                                <router-link to="/profile" class="btn--secondery exchange-lend-section--exchange-btn" @click.native="clickProfile()"> <span>{{ $t('lend', $store.state.locale) }}</span> </router-link>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="exchange-lend-section--lend">
                            <h3>{{ $t('do_you_want_to', $store.state.locale) }}
                                <span>{{ $t('save', $store.state.locale) }}</span> {{ $t('money_on_rent', $store.state.locale) }}</h3>
<!--                            <a href="#" class="btn&#45;&#45;secondery exchange-lend-section&#45;&#45;exchange-btn">lend</a>-->
                                <router-link to="/games" class="btn--secondery exchange-lend-section--exchange-btn"><span>{{ $t('rent_button', $store.state.locale) }}</span></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- TRENDING GAMES -->
        <section class="trending-section">
            <div class="text-center">
                <h2 class="section-heading">{{ $t('trending_games', $store.state.locale) }}</h2>
            </div>
            <div class="position-relative">
                <carousel v-if ="loadedTrending"
                    :autoplay ="true"
                    :loop ="true"
                    :center ="false"
                    :nav ="false"
                    :margin ="5"
                    :items ="3"
                    :stagePadding ="150"
                    :responsive="{ 0:{items:1, stagePadding:0, dots:true},
                                590:{items:2, dots:false, nav:false, stagePadding:0,},
                                768:{items:3, stagePadding:0, dots:false,},
                                900:{items:3, stagePadding:0, dots:false,},
                                1200:{items:3, stagePadding:100, dots:false,},
                                1500:{items:3, dots:false,},
                                1800:{items:5, dots:false,}}">
                    <template slot="prev"><div class="vue-owl-nav vue-owl-nav-prev"><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                    <template slot="next"><div class="vue-owl-nav vue-owl-nav-next"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

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
            </carousel>
           </div>
        </section>
        <!-- favorite-section -->
        <section class="favorite-section">
            <div class="text-center">
                 <h2 class="section-heading">{{ $t('rent_favorite_games', $store.state.locale) }}</h2>
            </div>
              <div class="position-relative">
                    <carousel v-if ="loadedPopular"
                        :autoplay ="true"
                        :loop ="true"
                        :center ="false"
                        :nav ="false"
                        :margin ="10"
                        :stagePadding = "0"
                        :responsive="{ 0:{items:3, stagePadding:0, nav:false, dots:true, center:true,},
                                    600:{items:3, stagePadding:0, center:false, dots:false,},
                                    800:{items:3, stagePadding:50, dots:false,},
                                    1026:{items:3, stagePadding:100, dots:false,},
                                    1200:{items:5, stagePadding:100, dots:false,},
                                    1300:{items:5, stagePadding:100, dots:false,},
                                    1800:{items:7, stagePadding:100, dots:false,}}"
                        >
                        <template slot="prev"><div class="vue-owl-nav vue-owl-nav-prev"><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                        <template slot="next"><div class="vue-owl-nav vue-owl-nav-next"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

                        <div class="item" v-for="(popular, index) in populars" :key="index">
                            <div class="favorite-games">
                                <router-link :to="{ path: '/game-details/' + popular.game.data.slug}" v-if="popular.game.data.trending_url" class="d-block favorite-games--link">
                                    <img :src="popular.game.data.poster_url" :alt="popular.game.data.name">
                                </router-link>
                                <router-link :to="{ path: '/game-details/' + popular.game.data.slug}" v-else>
                                    <picture class="picture">
                                        <source srcset="../assets/img/webp-image/dummy-image.webp" type="image/webp" class="picture__img">
                                        <img src="../assets/img/webp-image/dummy-image.webp" alt="no-image" class="picture__img">
                                    </picture>
                                </router-link>
                                <div class="favorite-games-categories d-flex justify-content-center align-items-center">
                                    <a :href="'/games?platforms=' + platform.slug" v-for="(platform) in popular.game.data.platforms.data" :key="platform.id"><img :src=platform.url :alt="platform.name"></a>
                                </div>
                            </div>
                        </div>
                </carousel>
             </div>
        </section>

       <section class="upcoming-section">
            <div class="text-center">
                <h2 class="section-heading">{{ $t('upcoming_games', $store.state.locale) }}</h2>
            </div>
            <div class="position-relative">
                <carousel v-if ="loadedUpcoming"
                        :autoplay ="true"
                        :loop ="false"
                        :center ="false"
                        :nav ="false"
                        :margin ="5"
                        :items ="3"
                        :stagePadding ="150"
                        :responsive="{ 0:{items:1, stagePadding:0},
                                    590:{items:2, dots:false, nav:false, stagePadding:0,},
                                    768:{items:3, stagePadding:0, dots:false,},
                                    900:{items:3, stagePadding:0, dots:false,},
                                    1200:{items:3, stagePadding:100, dots:false,},
                                    1500:{items:3, dots:false,},
                                    1800:{items:5, dots:false,}}"
                        >
                        <template slot="prev"><div class="vue-owl-nav vue-owl-nav-prev"><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                        <template slot="next"><div class="vue-owl-nav vue-owl-nav-next"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

                        <div class="item" v-for="(game, index) in upcomingGames" :key="index">
                        
                            <div class="owl-upcoming--item">
                                <router-link :to="{ path: '/game-details/' + game.slug}" class="upcoming-image">
                                    <img class="card-img-top" :src="game.upcoming_url" :alt="game.name"  v-if="game.upcoming_url">
                                    <picture class="picture" v-else>
                                        <source srcset="../assets/img/webp-image/dummy-image.webp" type="image/webp" class="card-img-top">
                                        <img src="../assets/img/webp-image/dummy-image.webp" alt="no-image" class="card-img-top">
                                    </picture>
                                </router-link>
                                <div class="d-flex upcoming-order">
                                    <router-link :to="{ path: '/game-details/' + game.slug}"><span>View Details</span></router-link>
                                    <a href="javascript:void(0)"  @click.prevent="setReminder(game.id)"><span class="text-black">Remind me</span></a>
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
                </carousel>
           </div>
       </section>
        <!-- notice board -->
        <section class="noticed-board-section">
            <div class="text-center">
                <h2 class="section-heading">{{ $t('news_&_notice', $store.state.locale) }}</h2>
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
                                    <router-link :to="{ name: 'NewsStory', params: { slug: featuredArticle.slug }}"><span>{{ $t('read_more', $store.state.locale) }} <i class="fas fa-arrow-right ml-2"></i></span></router-link>
                                </div>
                            </div>

                            <div class="notice-box" v-for="(article, index) in articles" :key="index" v-if="featuredArticle.id !== article.id">
                                <img :src=article.thumbnail :alt="article.title" class="w-100">
                                <div class="noticed-details">
                                    <router-link :to="{ name: 'NewsStory', params: { slug: article.slug }}" class="small-readmore"><span>{{ $t('read_more', $store.state.locale) }} <i class="fas fa-arrow-right ml-2"></i></span></router-link>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <a href="/news" class="btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative m-auto ">{{ $t('view_all', $store.state.locale) }}<span></span> <span></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Noticed bord section mobile -->
        <section class="noticed-board-section-mobile d-block d-sm-none">
            <div class="container">
                <div class="col-12 p-0">
                     <!-- <div id="owl-notice-mobile" class="owl-carousel owl-theme">
                         <div class="item"  v-for="(article, index) in articles" :key="index">
                             <div class="notice-box">
                                <img :src=article.thumbnail :alt="article.title" class="w-100">
                                <div class="noticed-details">
                                    <router-link :to="{ name: 'NewsStory', params: { slug: article.slug }}" class="small-readmore"><span>Read More <i class="fas fa-arrow-right ml-2"></i></span></router-link>
                                </div>
                            </div>
                         </div>
                     </div> -->
                    <div class="position-relative">
                        <carousel v-if ="Loadedarticles"
                            :autoplay ="false"
                            :loop ="true"
                            :center ="true"
                            :nav ="false"
                            :dots ="true"
                            :items ="1"
                            :margin ="10"
                            :stagePadding ="0">
                            <template slot="prev"><div class="vue-owl-nav vue-owl-nav-left"><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                            <template slot="next"><div class="vue-owl-nav vue-owl-nav-right"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

                            <div class="item"  v-for="(article, index) in articles" :key="index">
                                <div class="notice-box">
                                    <img :src=article.thumbnail :alt="article.title" class="w-100">
                                    <div class="noticed-details">
                                        <router-link :to="{ name: 'NewsStory', params: { slug: article.slug }}" class="small-readmore"><span>{{ $t('read_more', $store.state.locale) }} <i class="fas fa-arrow-right ml-2"></i></span></router-link>
                                    </div>
                                </div>
                            </div>
                        </carousel>
                    </div>





                </div>
            </div>
        </section>
        <!-- featured section -->
        <section class="featured-section">
            <div class="text-center">
                <h2 class="section-heading">{{ $t('featured_videos', $store.state.locale) }}</h2>
            </div>
            <div class="container">
                <div class="col-12">
                    <carousel v-if ="loadedVideos"
                        :autoplay ="false"
                        :loop ="true"
                        :center ="true"
                        :nav ="false"
                        :dots ="false"
                        :margin ="10"
                        :stagePadding ="150"
                        :responsive="{ 0:{items:1, stagePadding:0},
                                    768:{items:2, stagePadding:0, dots:false,}}">
                  <template slot="prev"><div class="vue-owl-nav "><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                  <template slot="next"><div class="vue-owl-nav"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

                        <div class="item" v-for="(video, index) in videos" :key="index">
                            <div class="featured-videos">
                                <iframe :src="'https://www.youtube.com/embed/' + getVideoIdByURL(video.url)" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>
                            </div>
                       </div>
           </carousel>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
    import Vue from 'vue';
    import carousel from 'vue-owl-carousel';

    export default {
        components: { carousel },
        data() {
            return {
                loadedUpcoming: false,
                loadedTrending: false,
                loadedPopular: false,
                loadedVideos: false,
                trendingGames: [],
                upcomingGames: [],
                populars: [],
                Loadedarticles: false,
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
            carouselNotice: function () {
            $('#owl-notice-mobile').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			dots:false,
            autoplay:true,
            autoplayTimeout: 2000,
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
                this.loadedTrending = false;
                this.$api.get('games/trending?include=game,game.assets,game.genres,game.platforms').then(response => {
                    var vm = this;
                    vm.trendingGames = response.data.data;
                    vm.loadedTrending = true
                });
            },
            getRentGames: function () {
                this.loadedPopular = false;
                this.$api.get('games/popular-games?include=game.assets,game.platforms').then(response => {
                    var vm = this;
                    vm.populars = response.data.data;
                    vm.loadedPopular = true;
                });
            },
            getNewGames: function () {
                this.loadedUpcoming = false;
                this.$api.get('games/upcoming-games?include=assets,genres,platforms').then(response => {
                    var vm = this;
                    vm.upcomingGames = response.data.data;
                    this.loadedUpcoming = true;
                });
            },
            getFeaturedArticles: function () {
                this.$api.get('featured-article?number=1').then(response => {
                    if (response.status == 200) {
                        if ( response.data.data.length > 0) {
                            this.featuredArticle = response.data.data[0];
                        }
                    }
                });
            },
            getArticles: function () {
                this.$api.get('top-articles?number=4').then(response => {
                    if (response.status == 200) {
                        let vm = this;
                        vm.articles = response.data.data;
                        this.Loadedarticles = true;
                        Vue.nextTick(function() {
                            vm.carouselNotice();
                        }.bind(vm));
                    }
                });
            },
            getFeturedVideo: function (number) {
                this.loadedVideos = false;
                this.$api.get('featured-videos?number=' + number).then(response => {
                    if (response.status == 200) {
                        let vm = this;
                        vm.videos = response.data.data;
                        vm.loadedVideos = true;
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
            getUrlCode() {
                let promo = this.$route.query.promo;
                if (promo != null) {
                    this.$store.dispatch('setPromo', promo);
                    console.log('store promo code');
                    console.log(this.$store.state.promo);
                }
            },
        },
        watch: {
            '$route' (to) {
                console.log(to);
                if (to.name == 'Home') {
                    this.getTrendingGames();
                    this.getNewGames();
                    this.getRentGames();
                    this.getFeaturedArticles();
                    this.getArticles();
                    this.getFeturedVideo(5);
                    this.featuredPlatforms(4);
                }
            }
        },
        computed: {
            auth () {
                return this.$store.getters.ifAuthenticated;
            }
        },
        created() {
            this.getUrlCode();
            // console.log(this.$route.query.promo);
            window.scrollTo(0,0);

            this.getTrendingGames();
            this.getNewGames();
            this.getRentGames();
            this.getFeaturedArticles();
            this.getArticles();
            this.getFeturedVideo(5);
            this.featuredPlatforms(4);

            if (this.$store.getters.ifAuthenticated) {
                this.isLoggedIn = true;
            }
        },
         mounted () {
            document.body.classList.add('body-home');
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
