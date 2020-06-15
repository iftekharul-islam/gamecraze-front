<template>
    <div>
        <!-- Hunter section slider -->
        <section class="hunter-section">
            <div id="mainslider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item" v-for="(game,index) in latestGames" :key="index" :class="{active: index==0}">
                        <a href="#"><img data-u="image" :src="$gamehubStorageApi +'games/'+ game.assets.data[0].name" class="img-fluid d-block w-100" alt="hunter"/></a>
                    </div>
                </div>
                <a class="carousel-control-prev slider-icon" href="#mainslider" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next slider-icon" href="#mainslider" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>

        <!-- New release Section -->
        <section class="new-release pt-5 sign-in-bg">
            <div class="container-fluid release-width">
                <div class="release-header">
                    <h2>New Release</h2>
                </div>
                <div class="owl-carousel-one owl-carousel owl-theme">
                    <div class="item" v-for="(game,index) in latestGames" :key="index">
                        <div class="card">
                            <a href="#"> <img class="card-img-top" :src="$gamehubStorageApi+'games/'+game.assets.data[0].name" alt="Code vein"></a>
                            <div class="card-body">
                                <h4 class="mb-3 game-name">{{game.name}}</h4>
                                <p class="card-text">{{game.description}}</p>
                            </div>
                            <div class="more-read text-right pb-3 pr-2">
                                <a href="#"><router-link :to="{ name: 'GameDetails', params: {gameId: game.id }}">View More <span class="material-icons">arrow_forward_ios</span></router-link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="exchange-section">
            <div class="container-fluid exchange-width">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card mb-3 exchange">
                            <div class="row no-gutters">
                                <div class="col-lg-5">
                                    <img src="../assets/img/exchange/watch-dog.jpeg" class="card-img" alt="watch dog ">
                                </div>
                                <div class="col-lg-7">
                                    <div class="card-body">
                                        <h2 class="card-title">Would You Like to</h2>

                                        <h1 class="exchange-1">EXCHANGE</h1>
                                        <h2 class="text-right your-cd">Your CD</h2>
                                        <div class="text-center excng-btn">
                                            <a href="#" class="btn btn-success text-center mt-5" type="button">Exchange</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="card mb-3 rent">
                            <div class="row no-gutters">
                                <div class="col-lg-5">
                                    <a href="#"><router-link to="game-details"><img src="../assets/img/exchange/jedi.png" class="card-img" alt="jedi fallen order "></router-link></a>
                                </div>
                                <div class="col-lg-7">
                                    <div class="card-body">
                                        <h2 class="card-title">Do you want </h2>
                                        <h1 class="rent-1"><span>to</span>RENT</h1>
                                        <h2 class="your-cd">Your CD</h2>
                                        <div class="text-center rent-btn">
                                            <a href="#" class="btn btn-success text-center mt-5" type="button">Rent</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Best selling -->
        <section class="best-selling sign-in-bg">
            <div class="container-fluid selling-width">
                <div class="release-header">
                    <h2>Best Selling</h2>
                </div>
                <div class="owl-carousel-two owl-carousel owl-theme">

                    <div class="item" v-for="(game,index) in popularGames" :key="index">
                        <div class="card" >
                            <a href="#"><img class="card-img-top" :src="game.background_image" alt="doom"></a>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Up Coming -->
        <section class="up-coming">
            <div class="container-fluid up-coming-width">
                <div class="upcoming-header">
                    <h2>UP Coming</h2>
                </div>
                <div class="owl-carousel-three owl-carousel owl-theme">
                    <div class="item" v-for="(game,index) in upcomingGames" :key="index">
                        <div class="card" >
                            <a href="#"><img class="card-img-top" :src="game.background_image" alt="nioh2"></a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- rented -->
        <section class="more-rented sign-in-bg">
            <div class="container-fluid rented-width">
                <div class="row">
                    <div class="col-sm">
                        <div class="rented-header">
                            <h2>More Rented</h2>
                        </div>
                        <div class="owl-carousel-four owl-carousel owl-theme">

                            <div class="item" v-for="(rent,index) in rents" :key="index">
                                <div class="card" >
                                    <img class="card-img-top" :src="$gamehubStorageApi+'games/'+rent.game.data.assets.data[0].name" alt="wwe">
                                    <div class="card-body">
                                        <h4 class="mb-2 game-name text-center">{{rent.game.data.name}}</h4>
                                    </div>
                                    <div class="view-more-btn text-center pb-4">
                                        <a href="#" class="btn btn-dark">View More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        data() {
            return {
                latestGames: [],
                upcomingGames: [],
                rents: [],
                popularGames: [],
            }
        },
        methods: {
            carouselOne: function () {
                $('.owl-carousel-one').owlCarousel({
                    loop: true,
                    margin: 10,
                    autoplay: false,
                    nav: true,
                    navText: [
                        '<img src="https://gamingapp.test/img/icon/left-arrow.png">',
                        '<img src="https://gamingapp.test/img/icon/right-arrow.png">'
                    ],
                    dots: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        575: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 3,
                            nav: true
                        },
                        1400: {
                            items: 4,
                            nav: true
                        }
                    }
                });
            },
            carouselTwo: function() {
                $('.owl-carousel-two').owlCarousel({
                    loop:true,
                    margin:10,
                    nav: true,
                    autoplay: true,
                    navText: [
                        '<img src="https://gamingapp.test/img/icon/left-arrow.png">',
                        '<img src="https://gamingapp.test/img/icon/right-arrow.png">'
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
                            items:3
                        },
                        992:{
                            items:4,
                            nav: true
                        },
                        1200:{
                            items:4,
                            nav: true
                        },
                        1400:{
                            items:4,
                            nav: true
                        }
                    }
                });
            },
            carouselThree: function() {
                $('.owl-carousel-three').owlCarousel({
                    loop:true,
                    margin:10,
                    nav: true,
                    autoplay: true,
                    navText: [
                        '<img src="https://gamingapp.test/img/icon/left-arrow.png">',
                        '<img src="https://gamingapp.test/img/icon/right-arrow.png">'
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
                $('.owl-carousel-four').owlCarousel({
                    loop:true,
                    margin:10,
                    nav: true,
                    autoplay: true,
                    navText: [
                        '<img src="https://gamingapp.test/img/icon/left-arrow.png">',
                        '<img src="https://gamingapp.test/img/icon/right-arrow.png">'
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
                            items:4,
                            nav: true
                        },
                        992:{
                            items:5,
                            nav: true
                        },
                        1200:{
                            items:5,
                            nav: true
                        },
                        1400:{
                            items:6,
                            nav: true
                        }
                    }
                })
            }
        },
        created() {
            this.$api.get('games/latest?include=assets').then(response => {
                var vm = this;
                vm.latestGames = response.data.data;
                Vue.nextTick(function(){
                    vm.carouselOne();
                }.bind(vm));
            });

            this.$api.get(this.$upcomingGamesApi).then(response => {
                var vm = this;
                vm.upcomingGames = response.data.results;
                Vue.nextTick(function() {
                    vm.carouselThree();
                }.bind(vm));
            })

            this.$api.get(this.$popularGamesApi).then(response => {
                var vm = this;
                vm.popularGames = response.data.results;
                Vue.nextTick(function(){
                    vm.carouselTwo();
                }.bind(vm));
            })

            this.$api.get('rents?include=game.assets').then(response => {
                var vm = this;
                vm.rents = response.data.data;
                console.log(vm.rents);
                Vue.nextTick(function(){
                    vm.carouselFour();
                }.bind(vm));
            })
        }
    }
</script>
