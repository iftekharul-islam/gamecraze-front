<template>
    <div>
        <!-- games header section -->
        <section class="games-header-section">
            <div class="games-header-section--display-image">
                <img src="../assets/img/game-details.png" alt="game details">
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
<!--                                <a href="javascript:void(0)" v-if="game.platforms.data.find(s => s.slug === 'ps4')"><img src="../assets/img/ps4-white.png" alt="ps4"></a>-->
<!--                                <a href="javascript:void(0)" v-if="game.platforms.data.find(s => s.slug === 'xbox')"><img src="../assets/img/fav-1.png" alt="xbox"></a>-->
<!--                                <a href="javascript:void(0)"><img src="../assets/img/windows.png" alt="windowa"></a>-->
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
                <div id="owl-screenshot-video" class="owl-carousel owl-theme">
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
                    </div>
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
                    </div>
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
                    </div>
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
                    </div>
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
                    </div>
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
                    </div>
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
                    </div>
                    <div class="item">
                        <a href="../assets/img/screenshot.png"><img src="../assets/img/screenshot.png" alt="screenshot"></a>
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
                <div id="owl-related" class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                    <div class="item">
                        <div class="game-card">
                            <a class="display-image" href="#">
                                <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                            </a>
                            <a href="#"> <h6>REALM ROYALE</h6></a>
                            <div class="d-flex">
                                <a href="#">Action</a>,
                                <a href="#">Adventure</a>
                            </div>
                            <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                <span class="game-rating">71</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'GameDetails',
        props: ['id'],
        data() {
            return {
                game: null,
            }
        },
        watch: {
          '$route.params': function (value) {
            this.fetchGame();
          },
        },
        methods: {
          formattedDate(date) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let formattedDate = new Date(date)
            return  months[formattedDate.getMonth()] + " " + formattedDate.getDate() + ", " + formattedDate.getFullYear()
          },
          fetchGame() {
            this.$api.get('games/' + this.id + '?include=assets,genres,platforms').then(response => {
              this.game = response.data.data;
              console.log(this.game);
            });
          }
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
