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
                    <div class="col-md-7">
                        <div class="games-header-section--content" v-if="game">
                            <a href="#" class="d-block game-name-img"><h2>{{game.name}}</h2></a>
                            <p>{{game.description.substring(0, 300) | strippedContent}} . . .</p>
                            <a href="#description" class="read-more">{{ $t('read_more', $store.state.locale) }}</a>
                            <div class="rent-now">
                                <router-link :to="{ path: '/rent-price/' + game.slug}" class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative border-0" v-if="!auth && rentExist" > <span></span> <div class="position-relative">{{ $t('rent_now', $store.state.locale) }}</div></router-link>
                                <button class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative border-0"  data-toggle="modal" data-target="#warning" v-else-if="auth && rentLimit <= myLends"> <span></span> <div class="position-relative">{{ $t('rent_now', $store.state.locale) }}</div></button>
                                <router-link :to="{ path: '/rent-posted-users/' + game.slug}" class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative border-0" v-else-if="auth && rentExist"> <span></span> <div class="position-relative">{{ $t('rent_now', $store.state.locale) }}</div></router-link>
                            </div>
                            <div class="d-flex games-header-section--platforms">
                                <p style="text-transform: uppercase">{{ $t('platform', $store.state.locale) }}:</p>
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
                                <span aria-hidden="true">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                                        <path d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z" fill="white"/>
                                    </svg>
                                </span>
                            </button>
                        <p>{{ $t('exceed_rent_limit', $store.state.locale) }}</p>

                    </div>
                </div>
            </div>
        </section>
        <!-- game-details menu -->
        <section class="game-details-menu">
            <div class="container">
                <ul>
                    <li><a href="#screenshot-video">{{ $t('screenshots_&_videos', $store.state.locale) }}</a></li>
                    <li><a href="#overview">{{ $t('overview', $store.state.locale) }}</a></li>
                    <li><a href="#description">{{ $t('description', $store.state.locale) }}</a></li>
                    <li><a href="#related-game">{{ $t('related_games', $store.state.locale) }}</a></li>
                </ul>
            </div>
        </section>
        <!-- screenshot n video -->
        <section class="screenshot-video" id="screenshot-video">
            <div class="container">
                <h6>{{ $t('screenshots_&_videos', $store.state.locale) }}</h6>
                 <div class="position-relative">
                  <carousel
                    v-if="loadedScreenshots"
                    :autoplay ="false"
                    :loop ="false"
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
                            <span @click="setModalData(screenshot.url, 'image')">
                                <img :src="screenshot.url" alt="screenshot">
                            </span>
                    </div>
<!--                    <div v-if="game.videoUrls.data.length > 0">-->
                      <div class="item" v-for="(video, index) in game.videoUrls.data" :key="'A' + index">
                      <span class="d-block screenshot-video--video" @click="setModalData(video.url, 'video')"><iframe
                          :src="'https://www.youtube.com/embed/' + getVideoIdByURL(video.url)" frameborder="0"
                          allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe></span>
                      </div>
<!--                    </div>-->

                  </carousel>
                     <div v-if="showImageModal">
                         <transition name="modal">
                             <div class="modal-mask upgrade-modal multiple-user-warning-modal screenshot-modal">
                                 <div class="modal-wrapper">
                                     <div class="modal-dialog modal-dialog-centered" role="document">
                                         <div class="modal-content">
                                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                 <span aria-hidden="true" @click="showImageModal = false" class="close-modal hhh">
                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                                                        <path d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z" fill="white"/>
                                                    </svg>
                                                 </span>
                                             </button>
                                             <div class="modal-body-content">
                                                 <img :src="this.modalScreenShot" alt="screenshot" v-if="isImage" class="img-fluid">
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
                <h6>{{ $t('overview', $store.state.locale) }}</h6>
                <div class="overview-content">
                    <div class="row" v-if="game">
                        <div class="col-6">
                            <div class="overview-content--text mb-3" v-if="game">
                              <p>{{ $t('genre', $store.state.locale) }}</p>
                              <span v-for="(genre, index) in game.genres.data" :key="index" >{{ genre.name }}<span class="mr-1" v-if="index < game.genres.data.length-1">, </span></span>
                            </div>
                            <div class="overview-content--text">
                                <p>{{ $t('publisher', $store.state.locale) }}</p>
                                <p>{{game.publisher}}</p>
                            </div>
                            <div class="overview-content--text">
                                <p>{{ $t('developer', $store.state.locale) }}</p>
                                <p>{{game.developer}}</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="overview-content--text">
                                <p>{{ $t('release_date', $store.state.locale) }}</p>
                                <p>{{ formattedDate (game.release_date)}}</p>
                            </div>
                            <div class="overview-content--text">
                                <p>{{ $t('supported_languages', $store.state.locale) }}</p>
                                <p>{{ game.supported_language }}</p>
                            </div>
                            <div class="overview-content--text">
                                <p>{{ $t('game_link', $store.state.locale) }}</p>
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
                <h6>{{ $t('description', $store.state.locale) }}</h6>
                <div class="description-content" v-if="game">
                    <div class="row" v-html="game.description"></div>
                </div>
            </div>
        </section>
        <!-- RELATED GAME -->
        <section class="related-game-section" id="related-game">
            <div class="container">
                <h6 class="mb-4">{{ $t('might_also_like', $store.state.locale) }}</h6>
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
                game: '',
                relatedGames: [],
                rentLimit: 0,
                myLends: 0,
                rentExist: false,
                modalScreenShot: null,
                isImage: false,
                isVideo: false,
            }
        },
        watch: {
            "$route.params.slug": {
                handler: function(e) {
                    this.fetchGame();
                },
                deep: true,
                immediate: true,
            },
        },
        methods: {
            setModalData(screenShot, type) {
                this.isVideo = false;
                this.isImage = true;
                this.modalScreenShot = screenShot;
                if (type == 'video') {
                    this.isVideo = true;
                    this.isImage = false;
                    this.modalScreenShot = screenShot;
                }
                this.showImageModal = true;
            },
            authData () {
                let auth = this.$store.getters.ifAuthenticated;
                if (auth){
                    this.rentLimit = this.$store.state.user.rent_limit;
                    let config = {
                        headers: {
                            'Authorization': 'Bearer ' + this.$store.state.token
                        }
                    };
                    this.$api.get('my-lends', config).then (response =>
                    {
                        this.myLends = response.data.lends;
                    });
                }
            },
          getVideoIdByURL: function(url) {
            let regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
            let match = url.match(regExp);
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
              this.game = response.data.data;
              if (this.game.screenshots.data.length){
                this.loadedScreenshots = true;
              }

            this.$api.get('game-exist-in-rent/' + this.slug).then(response => {
                if (response.data.data != 0){
                    this.rentExist = true;
                }
            });
              this.fetchRelatedGame();
            }).catch(()=>{});
          },
          fetchRelatedGame() {
            let genres = [];
            this.game.genres.data.forEach(genre => {
              genres.push(genre.slug);
            })
            this.$api.get('games/related/' + genres.join() + '?include=game.assets,game.genres,game.platforms').then(response => {
                if (response.data.data.length) {
                    let vm = this;
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
