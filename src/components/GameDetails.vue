<template>
    <div>
        <!-- games header section -->
        <section class="games-header-section">
            <div class="games-header-section--display-image" v-if="game">
                <img :src="game.coverImage" alt="game details">
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="games-header-section--content" v-if="game">
                            <a href="#" class="d-block game-name-img"><h2>{{game.name}}</h2></a>
                            <p>{{game.description.substring(0, 300) | strippedContent}} . . .</p>
                            <a href="#description" class="read-more">Read More</a>
                            <router-link :to="{ path: '/rent-posted-users/' + game.id}" class="btn--secondery rent-now"><span>RENT NOW</span></router-link>
                            <div class="d-flex games-header-section--platforms">
                                <p>PLATFORM:</p>
                                <a href="javascript:void(0)" v-for="(platform, index) in game.platforms.data" :key="index"><img :src="platform.url" alt="windows"></a>
                            </div>
                        </div>
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
                <div id="owl-screenshot-video" class="owl-carousel owl-theme" v-if="game">
                    <div class="item" v-for="(screenshot, index) in game.screenshots.data" :key="index">
                        <a href="#"><img :src="screenshot.url" alt="screenshot"></a>
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
                        <div class="col-md-6">
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
                        <div class="col-md-6">
                            <div class="overview-content--text">
                                <p>Release Date</p>
                                <p>{{ formattedDate (game.release_date)}}</p>
                            </div>
                            <div class="overview-content--text">
                                <p>Supported languages</p>
                                <p>English (US), 한국어, 中文（体）, 中文（繁體）</p>
                            </div>
                            <div class="overview-content--text">
                                <p>Game links</p>
                                <p>Official Site</p>
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
                <h6>You Might Also Like</h6>
                <div id="owl-related" class="owl-carousel owl-theme" v-if="relatedGames">
                    <div class="item" v-for="(related, index) in relatedGames" :key="index">
                      <router-link @click.native="scrollToTop()" :to="{ path: '/game-details/' + related.game.data.id}" class="games-categories-section--games--game-card-box">
                        <div class="game-card">
                            <a class="display-image" href="javascript:void(0)">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="javascript:void(0)"> <h6>{{related.game.data.name}}</h6></a>
                            <div class="d-flex">
                              <span v-for="(genre, index) in related.game.data.genres.data" :key="index" >{{ genre.name }}<span class="mr-1" v-if="index < related.game.data.genres.data.length-1">, </span></span>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="javascript:void(0)" v-for="(platform, index) in related.game.data.platforms.data" :key="index"><img :src="platform.url" alt="ps4"></a>
                                <span class="game-rating">{{ related.game.data.rating }}</span>
                            </div>

                        </div>
                      </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: 'GameDetails',
        props: ['id'],
        data() {
            return {
                game: null,
                relatedGames: null
            }
        },
        watch: {
          '$route.params': function (value) {
            this.fetchGame();
          },
        },
        methods: {
          scrollToTop() {
            window.scrollTo(0,0);
          },
          formattedDate(date) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let formattedDate = new Date(date)
            return  months[formattedDate.getMonth()] + " " + formattedDate.getDate() + ", " + formattedDate.getFullYear()
          },
          fetchGame() {
            this.$api.get('games/' + this.id + '?include=assets,genres,platforms,screenshots').then(response => {
              var vm = this;
              vm.game = response.data.data;
              Vue.nextTick(function(){
                vm.screenshotsCarousel();
              }.bind(vm));
              this.fetchRelatedGame();
            });
          },
          fetchRelatedGame() {
            let genres = [];
            this.game.genres.data.forEach(genre => {
              genres.push(genre.slug);
            })
            console.log(genres, 'genres')
            this.$api.get('games/related/' + genres.join() + '?include=game.assets,game.genres,game.platforms').then(response => {
              var vm = this;
              vm.relatedGames = response.data.data;
              console.log(vm.relatedGames, 'related');
              Vue.nextTick(function(){
                vm.relatedCarousel();
              }.bind(vm));
            });
          },
          screenshotsCarousel() {
            $('#owl-screenshot-video').owlCarousel({
              loop: true,
              margin: 10,
              nav: true,
              dots:true,
              navText: [
                '<i class="fas fa-arrow-left"></i>',
                '<i class="fas fa-arrow-right"></i>'
              ],
              responsive:{
                0:{
                  items: 1.3,
                  dots:false,
                  nav: false,
                },
                600:{
                  items: 2,
                  dots:true,
                  nav: true,

                },
                1000:{
                  items: 4
                }
              }
            });
          },
          relatedCarousel() {
            $('#owl-related').owlCarousel({
              loop: true,
              margin: 10,
              nav: true,
              dots:false,
              navText: [
                '<i class="fas fa-arrow-left"></i>',
                '<i class="fas fa-arrow-right"></i>'
              ],
              responsive:{
                0:{
                  items: 1.3,
                  nav: false,
                },
                600:{
                  items: 2,
                  nav: true,

                },
                1000:{
                  items: 4
                }
              }
            });
          },
        },
        created() {
            this.fetchGame();
        },
        filters: {
          strippedContent: function(string) {
            return string.replace(/<\/?[^>]+>/ig, " ");
          }
        }
    }
</script>
