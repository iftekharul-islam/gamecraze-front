<template>
    <div>
        <!-- slider section -->
        <section class="slider-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h1 class="gamehub-heading">Largest <span>Game</span><br>
                            <span>Exchanging</span> AND
                            <span>Renting</span> Platform</h1>
                        <h6>Play with over 15 million+ gamers in leagues,<br> tournaments & ladders.</h6>
                        <a href="#" class="btn--secondery">BEGIN JOURNEY</a>
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
                            <h3>Would you like to
                                <span>Exchange</span> your CD?</h3>
                            <a href="#" class="btn--secondery exchange-lend-section--exchange-btn" @click.prevent="onExchange">exchange</a>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="exchange-lend-section--lend">
                            <h3>DO YOU WANT TO
                                <span>LEND</span> GAMES?</h3>
<!--                            <a href="#" class="btn&#45;&#45;secondery exchange-lend-section&#45;&#45;exchange-btn">lend</a>-->
                                <router-link to="/games" class="btn--secondery exchange-lend-section--exchange-btn">Lend</router-link>
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
            <div id="owl-trending" class="owl-carousel owl-theme">


                <div class="item" v-for="(trending, index) in trendingGames" :key="index">
                    <a class="trending-image" href="#">
                        <img :src="trending.game.data.assets.data[0].url" alt="Code vein"  v-if="trending.game.data.assets.data.length">
                        <img src="../assets/img/rented/dummy-image.jpg" alt="no-image" v-else>
                    </a>
                    <div class="trending-game--name-price d-flex justify-content-between">
                        <a href="#">{{ trending.game.data.name }}</a>
<!--                        <span>$19.99</span>-->
                    </div>
                    <div class="trending-game--categories d-flex justify-content-between">
                        <div class="home-categories">
                            <a href="#" v-for="(genre) in trending.game.data.genres.data">{{ genre.name }}</a>
                        </div>


                        <div class="d-flex home-platform">
                            <a href="#" v-for="(platform) in trending.game.data.platforms.data"><img :src=platform.url :alt="platform.name"></a>

                        </div>
                    </div>
                </div>
                </div>
        </section>
        <!-- favorite-section -->
        <section class="favorite-section">
            <div class="text-center">
                <h2 class="section-heading">UPCOMING GAMES</h2>
            </div>
            <div id="owl-favorite" class="owl-carousel owl-theme">
                <div class="item" v-for="(game, index) in popularGames" :key="index">
<!--                <div class="item" v-for="(rent,index) in rents" :key="index">-->
                    <div class="favorite-games">
                        <img :src="game.assets.data[0].url" alt="Code vein"  v-if="game.assets.data.length">
                        <img src="../assets/img/rented/dummy-image.jpg" alt="no-image" v-else>
                        <div class="favorite-games-categories d-flex justify-content-between align-items-center">
                            <a href="#" v-for="(platform) in game.platforms.data"><img :src=platform.url :alt="platform.name" class="img-fluid"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="upcoming-section">
            <div class="text-center">
                <h2 class="section-heading">RENT YOUR FAVORITE GAMES</h2>
            </div>
            <div id="owl-upcoming" class="owl-carousel owl-theme">
                <div class="item" v-for="(rent,index) in rents" :key="index">

                    <div class="owl-upcoming--item">

                        <a class="upcoming-image" href="#">
                            <img class="card-img-top" :src="rent.game.data.assets.data[0].url" :alt="rent.game.data.name " v-if="rent.game.data.assets.data.length">
                            <img class="card-img-top" src="../assets/img/rented/dummy-image.jpg" alt="no-image" v-else>
                        </a>
                        <div class="d-flex upcoming-order">
                            <router-link :to="{ path: '/rent-details/' + rent.id}">View Details</router-link>
                            <a href="#">Rent</a>
                        </div>
                    </div>
                    <div class="upcoming-game--name-price d-flex justify-content-between">
                        <a href="#">{{ rent.name }}</a>
                        <!--                        <span>$19.99</span>-->
                    </div>
                    <div class="upcoming-game--categories d-flex justify-content-between">
                        <div class="home-categories">
                            <a href="#">Action </a>,
                            <a href="#">Fun</a>
                        </div>

                        <div class="d-flex">
                            <a href="#"><img :src="rent.platform.data.url" :alt="rent.platform.data.name" class="img-fluid"></a>
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
                <div class="noticed-grid">
                    <div class="notice-box">
                        <img src="../assets/img/noticed1.png" alt="Noticed 1">
                        <div class="noticed-details">
                            <h6>Team up with Friends</h6>
                            <p>Team up with your real-life mates in co-op mode to explore dedicated online content and missions.</p>
                            <a href="#"><span>View More <i class="fas fa-arrow-right ml-2"></i></span></a>
                        </div>
                    </div>
                    <div class="notice-box">
                        <img src="../assets/img/noticed2.png" alt="noticed">
                        <div class="noticed-details">
                            <a href="#"><span>View More <i class="fas fa-arrow-right ml-2"></i></span></a>
                        </div>
                    </div>
                    <div class="notice-box">
                        <img src="../assets/img/noticed2.png" alt="noticed">
                        <div class="noticed-details">
                            <a href="#"><span>View More <i class="fas fa-arrow-right ml-2"></i></span></a>
                        </div>
                    </div>
                    <div class="notice-box">
                        <img src="../assets/img/noticed2.png" alt="noticed">
                        <div class="noticed-details">
                            <a href="#"><span>View More <i class="fas fa-arrow-right ml-2"></i></span></a>
                        </div>
                    </div>
                    <div class="notice-box">
                        <img src="../assets/img/noticed2.png" alt="noticed">
                        <div class="noticed-details">
                            <a href="#"><span>View More <i class="fas fa-arrow-right ml-2"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- featured section -->
<!--        <section class="featured-section">-->
<!--            <div class="text-center">-->
<!--                <h2 class="section-heading">FEATURED VIDEOS</h2>-->
<!--            </div>-->
<!--            <div class="container">-->
<!--                <div class="col-12">-->
<!--                    <div id="owl-video" class="owl-carousel owl-theme">-->
<!--                        <div class="item">-->
<!--                            <div class="featured-videos">-->
<!--                                <iframe src="https://www.youtube.com/embed/xIl2z5wwjdA" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="featured-videos">-->
<!--                                <iframe src="https://www.youtube.com/embed/xIl2z5wwjdA" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="featured-videos">-->
<!--                                <iframe src="https://www.youtube.com/embed/xIl2z5wwjdA" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="featured-videos">-->
<!--                                <iframe src="https://www.youtube.com/embed/xIl2z5wwjdA" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="featured-videos">-->
<!--                                <iframe src="https://www.youtube.com/embed/xIl2z5wwjdA" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <div class="featured-videos">-->
<!--                                <iframe src="https://www.youtube.com/embed/xIl2z5wwjdA" frameborder="0" allowfullscreen="allowfullscreen" ng-show="showvideo"></iframe>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <!-- footer -->
        <footer class="footer-section">
            <div class="container">
                <div class="footer-top">
                    <a href="#" class="footer-logo"><img src="../assets/img/logo/gamehublogo.svg" alt="logo"></a>
                    <div class="footer-top--right">
                        <span>Sign up for our newsletter.</span>
                        <div class="footer-top--right-input-group">
                            <div class="footer-top--right-input">
                                <input type="text" class="" placeholder="E-mail address">
                            </div>
                            <button class="btn gamehub-search-btn" type="search">
                                <i class="far fa-envelope"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row footer-middle">
                    <div class="col-6 col-md-3">
                        <div class="footer-menu-content">
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Join Us</a></li>
                                <li><a href="#">Sponsors</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="footer-menu-content">
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Join Us</a></li>
                                <li><a href="#">Sponsors</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="footer-menu-content">
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Join Us</a></li>
                                <li><a href="#">Sponsors</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="footer-menu-content">
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Join Us</a></li>
                                <li><a href="#">Sponsors</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>©2020 Game Hub Inc.</p>
                    <div class="footer-bottom--social">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
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
                rents: [],
                popularGames: [],
            }
        },
        methods: {
            carouselOne: function () {
                $('#owl-trending').owlCarousel({
                    stagePadding: 150,
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
                            stagePadding: 0,
                            dots:true,
                            nav: false,
                        },
                        590:{
                            stagePadding: 0,
                            items: 2,
                            dots:false,
                            nav: true,
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
                // $('.owl-carousel-one').owlCarousel({
                //     loop: true,
                //     margin: 10,
                //     autoplay: false,
                //     nav: true,
                //     navText: [
                //         '<img src="' + this.$baseApi + 'img/icon/left-arrow.png' + '">',
                //         '<img src="' + this.$baseApi + 'img/icon/right-arrow.png' + '">'
                //     ],
                //     dots: false,
                //     responsive: {
                //         0: {
                //             items: 1
                //         },
                //         575: {
                //             items: 2
                //         },
                //         768: {
                //             items: 2
                //         },
                //         992: {
                //             items: 3
                //         },
                //         1200: {
                //             items: 3,
                //             nav: true
                //         },
                //         1400: {
                //             items: 4,
                //             nav: true
                //         }
                //     }
                // });
            },
            carouselTwo: function() {
                $('#owl-upcoming').owlCarousel({
                    stagePadding: 150,
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
                            stagePadding: 0,
                            dots:true,
                            nav: false,
                        },
                        590:{
                            stagePadding: 0,
                            items: 2,
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
                            items: 5
                        }
                    }
                });
                // $('.owl-carousel-two').owlCarousel({
                //     loop:true,
                //     margin:10,
                //     nav: true,
                //     autoplay: true,
                //     navText: [
                //         '<img src="' + this.$baseApi + 'img/icon/left-arrow.png' + '">',
                //         '<img src="' + this.$baseApi + 'img/icon/right-arrow.png' + '">'
                //     ],
                //     dots: false,
                //     responsive:{
                //         0:{
                //             items:1
                //         },
                //         575:{
                //             items:2
                //         },
                //         768:{
                //             items:3
                //         },
                //         992:{
                //             items:4,
                //             nav: true
                //         },
                //         1200:{
                //             items:4,
                //             nav: true
                //         },
                //         1400:{
                //             items:4,
                //             nav: true
                //         }
                //     }
                // });
            },
            carouselThree: function() {
                $('.owl-carousel-three').owlCarousel({
                    loop:true,
                    margin:10,
                    nav: true,
                    autoplay: true,
                    navText: [
                        '<img src="' + this.$baseApi + 'img/icon/left-arrow.png' + '">',
                        '<img src="' + this.$baseApi + 'img/icon/right-arrow.png' + '">'
                    ],
                    dots: false,
                    responsive:{
                        0:{
                            items:1
                        },
                        575:{
                            items:2
                        },
                        768:{
                            items:3,
                            nav: true
                        },
                        992:{
                            items:3,
                            nav: true
                        },
                        1200:{
                            items:3,
                            nav: true
                        },
                        1400:{
                            items:3,
                            nav: true
                        }
                    }
                })
            },
            carouselFour: function () {
                $('#owl-favorite').owlCarousel({
                    stagePadding: 150,
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
                            items: 3,
                            stagePadding: 0,
                            dots:true,
                            nav: false,
                            center: true,
                        },
                        600:{
                            items: 3,
                            stagePadding: 0,
                            center: false,
                            dots:false,
                            nav: true,
                        },
                        800:{
                            items: 3,
                            stagePadding: 100,
                        },
                        1100:{
                            items: 4,
                            stagePadding: 100,
                        },
                          1300:{
                            items: 5,
                            stagePadding: 100,
                        },
                        1800:{
                            items: 6,
                             stagePadding: 100,
                        }
                    }
                });
                // $('.owl-carousel-four').owlCarousel({
                //     loop:true,
                //     margin:10,
                //     nav: true,
                //     autoplay: true,
                //     navText: [
                //         '<img src="' + this.$baseApi + 'img/icon/left-arrow.png' + '">',
                //         '<img src="' + this.$baseApi + 'img/icon/right-arrow.png' + '">'
                //     ],
                //     dots: false,
                //     responsive:{
                //         0:{
                //             items:1
                //         },
                //         575:{
                //             items:2
                //         },
                //         768:{
                //             items:4,
                //             nav: true
                //         },
                //         992:{
                //             items:5,
                //             nav: true
                //         },
                //         1200:{
                //             items:5,
                //             nav: true
                //         },
                //         1400:{
                //             items:6,
                //             nav: true
                //         }
                //     }
                // })
            },
            getTrendingGames: function () {
                this.$api.get('games/trending?include=game,game.assets,game.genres,game.platforms').then(response => {
                    var vm = this;
                    vm.trendingGames = response.data.data;
                    console.log('trendingGames')
                    console.log(vm.trendingGames)
                    Vue.nextTick(function(){
                        vm.carouselOne();
                    }.bind(vm));
                });
            },
            getUpcomingGames: function () {
                this.$api.get(this.$upcomingGamesApi).then(response => {
                    var vm = this;
                    vm.upcomingGames = response.data.results;
                    Vue.nextTick(function() {
                        vm.carouselThree();
                    }.bind(vm));
                });
            },
            getPopularGames: function () {
                this.$api.get('games/latest?include=assets,genres,platforms').then(response => {
                    var vm = this;
                    vm.popularGames = response.data.data;
                    Vue.nextTick(function(){
                        vm.carouselFour();
                    }.bind(vm));
                });
            },
            getRentGames: function () {
                this.$api.get('rent-posts?include=game.assets,platform').then(response => {
                    var vm = this;
                    vm.rents = response.data.data;
                    Vue.nextTick(function(){
                        vm.carouselTwo();
                    }.bind(vm));
                });
            },
            onExchange () {
                this.$swal("Exchange is now unavailable!", "We will provide exchange facility very soon!")
            }
        },
        created() {
            this.getTrendingGames();
            this.getUpcomingGames();
            this.getPopularGames();
            this.getRentGames();
        }
    }
</script>
