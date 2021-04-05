<template>
    <div>
        <!-- games header section -->
        <section class="games-header-section">
            <div class="games-header-section--display-image" v-if="game">
                <img :src="game.coverImage" alt="game details">
                <div class="games-header-section--display-image--photo-credit">
                    <h3>Photo Credit:  </h3>
                    <h3> {{ game.image_source }}</h3>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="games-header-section--content" v-if="game">
                            <a href="#" class="d-block game-name-img"><h2>{{game.name}}</h2></a>
                            <p>{{game.description.substring(0, 300) | strippedContent}} . . .</p>
                            <a href="#description" class="read-more">Read More</a>
                            <router-link to="/login" class="btn--secondery rent-now border-0" v-if="!auth"><span>RENT NOW</span></router-link>
                            <router-link to="/login" class="border-0" v-if="!rentExist"><span></span></router-link>
                            <button class="btn--secondery rent-now border-0"  data-toggle="modal" data-target="#warning" v-else-if="rentLimit <= myLends && rentButton"><span>RENT NOW</span></button>
                            <router-link :to="{ path: '/rent-posted-users/' + game.slug}" class="btn--secondery rent-now border-0" v-else-if="rentButton"><span>RENT NOW</span></router-link>
                            <div class="d-flex games-header-section--platforms">
                                <p>PLATFORM:</p>
                                <a href="javascript:void(0)" v-for="(platform, index) in game.platforms.data" :key="index"><img :src="platform.url" alt="windows"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade seller-information-modal upgrade-modal" id="warning" tabindex="-1" aria-labelledby="warningModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                            <button type="button" class="close m-0 close-modal" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        <p>Opps !!! You exceeded renting limit. Return your current games to rent new ones</p>

                    </div>
                </div>
            </div>
        </section>
        <!-- game-details menu -->
        <section class="game-details-menu">
            <div class="container">
                <ul>
                    <li><a href="#screenshot-video">Screenshots & Videos</a></li>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#description">Description</a></li>
                    <li><a href="#related-game">Related games</a></li>
                </ul>
            </div>
        </section>
        <!-- screenshot n video -->
        <section class="screenshot-video" id="screenshot-video">
            <div class="container">
                <h6>Screenshots & Videos</h6>
                <!-- <div id="owl-screenshot-video" class="owl-carousel owl-theme" v-if="game">
                    <div class="item" v-for="(screenshot, index) in game.screenshots.data" :key="index">
                        <a href="#"><img :src="screenshot.url" alt="screenshot"></a>
                    </div>
                  <div class="item" v-for="(video, index) in game.videoUrls.data" :key="'A' + index">
                    <iframe :src="'https://www.youtube.com/embed/' + getVideoIdByURL(video.url)" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>
                       <a href="#">< :src="video.url" alt="screenshot"></a>
                    </div>
                </div> -->
                 <div class="position-relative">
                  <carousel
                          v-if="loadedScreenshots"
                  :autoplay ="false"
                  :loop ="true"
                  :nav ="false"
                  :dots ="true"
                  :center ="false"
                  :margin ="32"
                  :responsive="{ 0:{items:1, stagePadding:0, center:false,},
                                600:{items:2, stagePadding:0, center:false,},
                                1000:{items:3, stagePadding:0,},
                                1400:{items:4, stagePadding:0, center:false,}}">
                    <template slot="prev"><div class="vue-owl-nav vue-owl-nav-left "><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                    <template slot="next"><div class="vue-owl-nav vue-owl-nav-right"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

                      <div class="item" v-for="(screenshot, index) in game.screenshots.data" :key="index">
                            <a href="#">
                                <img :src="screenshot.url" alt="screenshot" @click="setModalData(screenshot.url, 'image')">
                            </a>
                        </div>
                      <div class="item" v-for="(video, index) in game.videoUrls.data" :key="'A' + index">
                        <iframe :src="'https://www.youtube.com/embed/' + getVideoIdByURL(video.url)" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo" @click="setModalData(video.url, 'video')"></iframe>
                          <!-- <a href="#">< :src="video.url" alt="screenshot"></a> -->
                    </div>
                  
                  </carousel>
                     <div v-if="showImageModal">
                         <transition name="modal">
                             <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
                                 <div class="modal-wrapper">
                                     <div class="modal-dialog modal-dialog-centered" role="document">
                                         <div class="modal-content">
                                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                 <span aria-hidden="true" @click="showImageModal = false" class="close-modal"></span>
                                             </button>
                                             <div class="modal-body-content">
                                                 <img :src="this.modalScreenShot" alt="screenshot" v-if="isImage" width="800px">
                                                 <iframe :src="'https://www.youtube.com/embed/' + getVideoIdByURL(this.modalScreenShot)" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo" v-if="isVideo"></iframe>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </transition>
                     </div>
                </div>

            </div>
        </section>
        <!-- overview -->
        <section class="overview" id="overview">
            <div class="container">
                <h6>Overview</h6>
                <div class="overview-content">
                    <div class="row" v-if="game">
                        <div class="col-6">
                            <div class="overview-content--text mb-3" v-if="game">
                              <p>Genre</p>
                              <span v-for="(genre, index) in game.genres.data" :key="index" >{{ genre.name }}<span class="mr-1" v-if="index < game.genres.data.length-1">, </span></span>
                            </div>
                            <div class="overview-content--text">
                                <p>Publisher</p>
                                <p>{{game.publisher}}</p>
                            </div>
                            <div class="overview-content--text">
                                <p>Developer</p>
                                <p>{{game.developer}}</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="overview-content--text">
                                <p>Release Date</p>
                                <p>{{ formattedDate (game.release_date)}}</p>
                            </div>
                            <div class="overview-content--text">
                                <p>Supported languages</p>
                                <p>{{ game.supported_language }}</p>
                            </div>
                            <div class="overview-content--text">
                                <p>Game link</p>
                                <a :href="game.official_website" target="_blank">Click Here <i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- description -->
        <section class="description" id="description">
            <div class="container">
                <h6>Description</h6>
                <div class="description-content" v-if="game">
                    <div class="row" v-html="game.description">

                    </div>
                </div>
            </div>
        </section>
        <!-- RELATED GAME -->
        <section class="related-game-section" id="related-game">
            <div class="container">
                <h6 class="mb-4">You Might Also Like</h6>
                <!-- new carousel -->
                <div class="position-relative">
                  <carousel
                  v-if="loadedRelated"
                  :autoplay ="false"
                  :loop ="true"
                  :center ="false"
                  :nav ="false"
                  :dots ="false"
                  :margin ="32"
                  :responsive="{ 0:{items:1, stagePadding:0, center:false,},
                                600:{items:2, stagePadding:0, center:false,},
                                1000:{items:3, stagePadding:0,},
                                1400:{items:4, stagePadding:0, center:false,}}">
                    <template slot="prev"><div class="vue-owl-nav vue-owl-nav-left "><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                    <template slot="next"><div class="vue-owl-nav vue-owl-nav-right"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

                      <div class="item" v-for="(related, index) in relatedGames" :key="index" v-if="game.id != related.game.data.id">
                        <router-link :to="{ path: '/game-details/' + related.game.data.slug}" @click.native="scrollToTop()" class="games-categories-section--games--game-card-box game-card-hover-outer">
                          <div class="game-card game-card-hover-inner">
                              <a class="display-image" href="javascript:void(0)">
                                <img :src="related.game.data.poster_url" :alt="related.game.data.name" class="img-fluid">
                              </a>
                              <div class="game-card--details">
                                <a href="javascript:void(0)"> <h6>{{related.game.data.name}}</h6></a>
                                <div class="d-flex">
                                  <span v-for="(genre, index) in related.game.data.genres.data" :key="'B' +index" >{{ genre.name }}<span class="mr-1" v-if="index < related.game.data.genres.data.length-1">, </span></span>
                                </div>
                                <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                  <div class="game-card--details--platforms"> <a href="javascript:void(0)" v-for="(platform, index) in related.game.data.platforms.data" :key="index"><img :src="platform.url" alt="ps4"></a> </div>
                                    <span class="game-rating">{{ related.game.data.rating }}</span>
                                </div>
                              </div>
                          </div>
                        </router-link>
                      </div>
                  
                  </carousel>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from "vue";
    import carousel from 'vue-owl-carousel';

    export default {
        name: 'GameDetails',
        props: ['slug'],
        components: { carousel },
        data() {
            return {
                showImageModal: false,
                loadedScreenshots: false,
                loadedRelated: false,
                rentButton: false,
                game: [],
                relatedGames: [],
                rentLimit: '',
                myLends: '',
                rentExist: false,
                modalScreenShot: null,
                isImage: false,
                isVideo: false,
            }
        },
        watch: {
            "$route.params.slug": {
                handler: function(value) {
                    this.fetchGame();
                },
                deep: true,
                immediate: true,
            },
        },
        methods: {
            setModalData(screenShot, type) {
                this.isImage = true;
                this.modalScreenShot = screenShot;
                if (type == 'video') {
                    this.isVideo = true;
                    this.modalScreenShot = screenShot;
                }
                this.showImageModal = true;
            },
            authData () {
                var auth = this.$store.getters.ifAuthenticated;
                if (auth){
                    var config = {
                        headers: {
                            'Authorization': 'Bearer ' + this.$store.state.token
                        }
                    };
                    this.$api.get('rent-limit', config).then (response =>
                    {
                        this.rentLimit = response.data.rent_limit;
                        this.rentButton = true;
                    });
                    this.$api.get('my-lends', config).then (response =>
                    {
                        this.myLends = response.data.lends;
                    });
                }
            },
          getVideoIdByURL: function(url) {
            var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            var match = url.match(regExp);
            return (match && match[1].length==11)? match[1] : false;
          },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
          formattedDate(date) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let formattedDate = new Date(date)
            return  months[formattedDate.getMonth()] + " " + formattedDate.getDate() + ", " + formattedDate.getFullYear()
          },
          fetchGame() {
              this.loadedScreenshots = false;
                  this.loadedRelated = false;
            this.$api.get('games/slug/' + this.slug + '?include=assets,genres,platforms,screenshots,videoUrls').then(response => {
              var vm = this;
              vm.game = response.data.data;
              vm.loadedScreenshots = true;

            this.$api.get('game-exist-in-rent/' + this.slug).then(response => {
                if (response.data.data != 0){
                    this.rentExist = true;
                }
            });
              this.fetchRelatedGame();
            });
          },
          fetchRelatedGame() {
            let genres = [];
            this.game.genres.data.forEach(genre => {
              genres.push(genre.slug);
            })
            this.$api.get('games/related/' + genres.join() + '?include=game.assets,game.genres,game.platforms').then(response => {
                if (response.data.data.length) {
                    var vm = this;
                    vm.relatedGames = response.data.data;
                    vm.loadedRelated = true;
                }
            });
          },
        },
        computed: {
            auth () {
                return this.$store.getters.ifAuthenticated
            },
        },
        created() {
            window.scrollTo(0,0);
            this.authData();
            this.fetchGame();

        },
        filters: {
          strippedContent: function(string) {
            return string.replace(/<\/?[^>]+>/ig, " ");
          }
        }
    }
</script>
