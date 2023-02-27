
<template>
    <div>
        <!-- slider section -->
        <section class="slider-section position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <h1 class="gamehub-heading wow fadeInUpBig" data-wow-duration=".9s">
                            <div class="english-svg">
                                 <img src="../assets/img/english_header.svg" class="img-fluid" alt="Gamehub Logo logo">
                            </div>
                            <div class="bangla-svg">
                                <img src="../assets/img/bangla_header.svg" class="img-fluid" alt="Gamehub Logo logo">
                            </div>

                            </h1>
                        <h6 class="home-banner-text mb-a-6 wow fadeInUpBig" data-wow-duration=".9s" data-wow-delay=".3s">{{ $t('home_banner_text', $store.state.locale) }}</h6>
                        <div class="heading-btn d-flex align-items-center wow fadeInUpBig"  data-wow-duration=".9s" data-wow-delay=".5s">
                            <router-link to="/games" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative mr-3"><span></span> <div class="position-relative">{{ $t('rent_game', $store.state.locale) }}</div></router-link>
                            <router-link to="/profile" @click.native="clickProfile" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative mr-3"><span></span> <div class="position-relative">{{ $t('lend_game', $store.state.locale) }}</div></router-link>
                            <router-link to="/sell-posts" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-none d-sm-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('buy_gaming_product', $store.state.locale) }}</div></router-link>
                            <router-link to="/sell-posts" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold d-sm-none d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('product', $store.state.locale) }}</div></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <a href="#exchange" class="position-absolute do-scroll mx-auto">{{ $t('scroll', $store.state.locale) }}</a> -->
        </section>
        <!-- exchange and lend section -->
        <section class="exchange-lend-section" id="exchange">
            <div class="container">
                <h2 class="section-heading wow fadeInUpBig">{{ $t('exchange_heading', $store.state.locale) }}</h2>
                <div class="d-grid grid-cols-2 grid-md-cols-3 grid-lg-cols-4 exchange-lend-section__grid wow fadeInUpBig">
                    <div class="pt-a-6 pb-a-6 px-2 px-sm-4 exchange-lend-section__content">
                        <div class="exchange-lend-section__content__img">
                             <img src="../assets/img/card-img-1.png" class="img-fluid" alt="Gamehub Logo logo">
                        </div>
                        <h6 class="text-secondery gil-bold f-s-20 mb-3">{{ $t('rent_games', $store.state.locale) }}</h6>
                        <p class="mb-a-4 light-white">{{ $t('card_text_1', $store.state.locale) }}</p>
                        <router-link to="/games" class="w-full text-center router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative mr-3"><span></span> <div class="position-relative">{{ $t('rents', $store.state.locale) }}</div></router-link>
                    </div>
                     <div class="pt-a-6 pb-a-6 px-2 px-sm-4 exchange-lend-section__content">
                        <div class="exchange-lend-section__content__img">
                             <img src="../assets/img/card-img-2.png" class="img-fluid" alt="Gamehub Logo logo">
                        </div>
                        <h6 class="text-secondery gil-bold f-s-20 mb-3">{{ $t('lend_games', $store.state.locale) }}</h6>
                        <p class="mb-a-4 light-white">{{ $t('card_text_2', $store.state.locale) }}</p>
                        <router-link to="/profile" @click.native="clickProfile" class="w-full text-center router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative mr-3"><span></span> <div class="position-relative">{{ $t('lend', $store.state.locale) }}</div></router-link>
                    </div>
                     <div class="pt-a-6 pb-a-6 px-2 px-sm-4 exchange-lend-section__content">
                        <div class="exchange-lend-section__content__img">
                             <img src="../assets/img/card-img-3.png" class="img-fluid" alt="Gamehub Logo logo">
                        </div>
                        <h6 class="text-secondery gil-bold f-s-20 mb-3">{{ $t('buy_gaming_product', $store.state.locale) }}</h6>
                        <p class="mb-a-4 light-white">{{ $t('card_text_3', $store.state.locale) }}</p>
                        <router-link to="/sell-posts" class="w-full text-center router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative mr-3"><span></span> <div class="position-relative">{{ $t('buy_now', $store.state.locale) }}</div></router-link>
                    </div>
                     <div class="pt-a-6 pb-a-6 px-2 px-sm-4 exchange-lend-section__content">
                        <div class="exchange-lend-section__content__img">
                             <img src="../assets/img/card-img-4.png" class="img-fluid" alt="Gamehub Logo logo">
                        </div>
                        <h6 class="text-secondery gil-bold f-s-20 mb-3">{{ $t('sell_gaming_product', $store.state.locale) }}</h6>
                        <p class="mb-a-4 light-white">{{ $t('card_text_4', $store.state.locale) }}</p>
                        <a href="#" @click.prevent="routeOnSellPost" class="w-full text-center router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative mr-3"><span></span> <div class="position-relative">{{ $t('sell_post', $store.state.locale) }}</div></a>
                    </div>

                </div>
            </div>
        </section>
        <!-- trending games -->
        <section class="trending-section wow fadeInUpBig">
            <div class="container">
                <h2 class="section-heading">{{ $t('trending_games', $store.state.locale) }}</h2>
            </div>
            <div class="position-relative">
                <carousel v-if ="loadedTrending"
                    :autoplay ="true"
                    :loop ="true"
                    :center ="false"
                    :nav ="false"
                    :margin ="20"
                    :items ="3"
                    :stagePadding ="150"
                    :responsive="{ 0:{items: 1.5, stagePadding:0, nav:false, dots:true, center:true,},
                                    600:{items:3, stagePadding:0, center:false, dots:false,},
                                    800:{items:3, stagePadding:50, dots:false,},
                                    1026:{items:3, stagePadding:100, dots:false,},
                                    1200:{items:5, stagePadding:100, dots:false,},
                                    1300:{items:5, stagePadding:100, dots:false,},
                                    1800:{items:7, stagePadding:100, dots:false,}}">
                        <template slot="prev">
                                <div class="vue-owl-nav vue-owl-nav-prev">
                                    <button class="owl-prev z-index-9">
                                        <span class="prev">
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                                        </svg>
                                        </span> 
                                    </button> 
                                </div>
                            </template>
                            <template slot="next">
                                <div class="vue-owl-nav vue-owl-nav-next">
                                    <button class="owl-next z-index-9">
                                        <span class="next">
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </template>

                    <div class="item" v-for="(trending, index) in trendingGames" :key="index">
                        <router-link :to="{ path: '/game-details/' + trending.game.data.slug}" class="trending-image">
                            <img :src="trending.game.data.trending_url" alt="trending.game.data.name">
                        </router-link>
                        <div class="trending-game--categories py-3" v-if="trending">
                            <div class="d-flex home-platform justify-content-center px-3">
                                <a :href="'/games?platforms=' + platform.slug" v-for="(platform) in trending.game.data.platforms.data" :key="platform.id"><img :src=platform.url :alt="platform.name"></a>
                            </div>
                        </div>
                    </div>
            </carousel>
           </div>
           <div class="text-center mt-a-6">
               <router-link to="/games" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('all_games', $store.state.locale) }}</div></router-link>
           </div>
        </section>
        <!-- favorite-section -->
        <section class="favorite-section d-none">
            <div class="container">
                 <h2 class="section-heading">{{ $t('rent_favorite_games', $store.state.locale) }}</h2>
            </div>
              <div class="position-relative">
                    <carousel v-if ="loadedPopular"
                        :autoplay ="true"
                        :loop ="true"
                        :center ="false"
                        :nav ="false"
                        :margin ="20"
                        :items ="3"
                        :stagePadding ="150"
                        :responsive="{ 0:{items:1.5, stagePadding:0, nav:false, dots:true, center:true,},
                                    600:{items:3, stagePadding:0, center:false, dots:false,},
                                    800:{items:3, stagePadding:50, dots:false,},
                                    1026:{items:3, stagePadding:100, dots:false,},
                                    1200:{items:5, stagePadding:100, dots:false,},
                                    1300:{items:5, stagePadding:100, dots:false,},
                                    1800:{items:7, stagePadding:100, dots:false,}}"
                        >
                       <template slot="prev">
                            <div class="vue-owl-nav vue-owl-nav-prev">
                                <button class="owl-prev z-index-9">
                                    <span class="prev">
                                       <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </template>
                        <template slot="next">
                            <div class="vue-owl-nav vue-owl-nav-next">
                                <button class="owl-next z-index-9">
                                    <span class="next">
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </template>

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
             <div class="text-center mt-a-6">
               <router-link to="/games" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('all_games', $store.state.locale) }}</div></router-link>
           </div>
        </section>

        <section class="upcoming-section wow fadeInUpBig">
            <div class="container">
                <h2 class="section-heading">{{ $t('upcoming_games_for_rent', $store.state.locale) }}</h2>
            </div>
            <div class="position-relative">
                <carousel v-if ="loadedUpcoming"
                        :autoplay ="false"
                        :loop ="true"
                        :center ="false"
                        :nav ="false"
                        :margin ="0"
                        :items ="3"
                        :stagePadding ="150"
                        :responsive="{ 0:{items:1.5, stagePadding:0, center: true,},
                                    590:{items:2, dots:false, nav:false, stagePadding:0, center: false,},
                                    768:{items:3, stagePadding:0, dots:false,},
                                    900:{items:3, stagePadding:0, dots:false,},
                                    1200:{items:3, stagePadding:50, dots:false,},
                                    1500:{items:3, dots:false,},
                                    1800:{items:4, dots:false,}}"
                        >
                        <template slot="prev">
                            <div class="vue-owl-nav vue-owl-nav-prev">
                                <button class="owl-prev z-index-9">
                                    <span class="prev">
                                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                                      </svg>
                                    </span> 
                                </button> 
                            </div>
                        </template>
                        <template slot="next">
                            <div class="vue-owl-nav vue-owl-nav-next">
                                <button class="owl-next z-index-9">
                                    <span class="next">
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </template>

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
           <div class="text-center mt-a-6">
               <router-link to="/games" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('all_games', $store.state.locale) }}</div></router-link>
           </div>
       </section>
        
        <!-- product section -->
        <section class="product-section d-none d-sm-block" v-if ="loadLatestSellPosts">
            <div class="container">
                 <h2 class="section-heading wow fadeInUpBig">{{ $t('products_for_sell', $store.state.locale) }}</h2>
                 <div class="d-grid grid-cols-2 grid-md-cols-3 grid-lg-cols-5 grid-gap-16 grid-gap-md-30 gamebazar-post">
                      <router-link class="wow fadeInUpBig" v-for="(item, index) in sellPosts" :key="index" :to="{ path: '/sell-post/' + item.id + '/' + item.url_name }">
                            <div class="product-img position-relative br-4 overflow-hidden">
                              <img :src="item.cover.url" :alt="item.name" class="img-fluid w-100" v-if="item.cover != null">
                              <img src="../assets/img/play.png" alt="gaming product" class="img-fluid w-100" v-else>

                              <span v-if="item.product_type == 1" class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-3">New</span>
                              <span v-if="item.product_type == 2" class="position-absolute top-0 left-0 bg-purple br-b-r-5 py-1 px-3 text-white br-t-l-3">Used</span>

                              <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-3 py-1 px-3 primary-text gil-medium br-b-r-5">৳ {{ item.price }}</span>
                            </div>

                            <p class="gil-bold mb-3 mt-a-4 text-white post-name">{{ item.name }}</p>
                                <div class="d-flex align-items-center text-secondery">
                                    <p class="mb-0">{{ $t('details', $store.state.locale) }}</p>
                                    <div class="gamebazar-post__arrow">
                                        <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                        </svg>
                                    </div>
                                </div>
                      </router-link>
                 </div>
                 <div class="text-center mt-a-6">
                    <router-link to="/sell-posts" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('all_post', $store.state.locale) }}</div></router-link>
                </div>
            </div>
        </section>
        <!-- product section for mobile -->
        <section class="d-sm-none product-mobile" v-if ="loadLatestSellPosts">
            <h2 class="section-heading wow fadeInUpBig">{{ $t('products_for_sell', $store.state.locale) }}</h2>
            <div class="position-relative">
                <carousel
                        :autoplay ="true"
                        :loop ="true"
                        :center ="false"
                        :nav ="false"
                        :margin ="20"
                        :items ="3"
                        :stagePadding ="150"
                        :responsive="{ 0:{items:1.5, stagePadding:0, center: false, nav: false, dots: false},}"
                        >
                        <template slot="prev">
                            <div class="vue-owl-nav vue-owl-nav-prev">
                                <button class="owl-prev z-index-9">
                                    <span class="prev">
                                       <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                                        </svg>
                                    </span> 
                                </button> 
                            </div>
                        </template>
                        <template slot="next">
                            <div class="vue-owl-nav vue-owl-nav-next">
                                <button class="owl-next z-index-9">
                                    <span class="next">
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </template>

                        <div class="item" v-for="(item, index) in sellPosts" :key="index">
                            <div class="owl-upcoming--item">
                              <router-link :to="'/sell-post/' + item.id + '/' + item.url_name " >
                                <div class="product-img position-relative br-4 overflow-hidden">
                                  <img :src="item.cover.url" :alt="item.name" class="img-fluid w-100" v-if="item.cover != null">
                                  <img src="../assets/img/play.png" alt="gaming product" class="img-fluid w-100" v-else>

                                  <span v-if="item.product_type == 1" class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-3">New</span>
                                  <span v-if="item.product_type == 2" class="position-absolute top-0 left-0 bg-purple br-b-r-5 py-1 px-3 text-white br-t-l-3">Used</span>

                                  <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-3 py-1 px-3 primary-text gil-medium br-b-r-5">৳ {{ item.price }}</span>
                                </div>

                                <p class="gil-bold mb-3 mt-a-4 text-white post-name">{{ item.name }}</p>
                                <div class="d-flex align-items-center text-secondery">
                                    <p class="mb-0">{{ $t('details', $store.state.locale) }}</p>
                                    <div class="gamebazar-post__arrow">
                                        <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                        </svg>
                                    </div>
                                </div>
                              </router-link>
                            </div>
                        </div>
                </carousel>
           </div>
           <div class="text-center mt-a-6">
              <router-link to="/sell-posts" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('all_post', $store.state.locale) }}</div></router-link>
            </div>
        </section>
        
        <!-- featured video section -->
        <section class="featured-section wow fadeInUpBig">
            <div class="container">
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
                        <template slot="prev">
                                    <div class="vue-owl-nav vue-owl-nav-prev">
                                        <button class="owl-prev z-index-9">
                                            <span class="prev">
                                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                                            </svg>
                                            </span> 
                                        </button> 
                                    </div>
                                </template>
                                <template slot="next">
                                    <div class="vue-owl-nav vue-owl-nav-next">
                                        <button class="owl-next z-index-9">
                                            <span class="next">
                                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                            </template>

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
    import carousel from 'vue-owl-carousel';

    export default {
        components: { carousel },
        data() {
            return {
                loadedUpcoming: false,
                loadedTrending: false,
                loadedPopular: false,
                loadedVideos: false,
                loadLatestSellPosts: false,
                sellPosts: [],
                trendingGames: [],
                upcomingGames: [],
                populars: [],
                Loadedarticles: false,
                featuredArticle: null,
                isLoggedIn: false,
                articles: [],
                videos: [],
                platforms: [],
                email: '',
                reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                isSubscring: false
            }
        },
        methods: {
            routeOnSellPost(){
              let user = this.$store.state.user;
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
            clickProfile() {
              let auth = this.$store.getters.ifAuthenticated;
              if (!auth) {
                this.$router.push('/lend-notice');
                return
              }
              this.$root.$emit('rentPost');
            },
            getTrendingGames: function () {
                this.loadedTrending = false;
                this.$api.get('games/trending?include=game,game.assets,game.genres,game.platforms').then(response => {
                  this.trendingGames = response.data.data;
                  this.loadedTrending = true
                });
            },
            getRentGames: function () {
                this.loadedPopular = false;
                this.$api.get('games/popular-games?include=game.assets,game.platforms').then(response => {
                    let vm = this;
                    vm.populars = response.data.data;
                    vm.loadedPopular = true;
                });
            },
            getNewGames: function () {
                this.loadedUpcoming = false;
                this.$api.get('games/upcoming-games?include=assets,genres,platforms').then(response => {
                    let vm = this;
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
                        this.articles = response.data.data;
                        if (this.featuredArticle && this.articles){
                          let index = this.articles.findIndex((item) => item.id === this.featuredArticle.id);
                          if (index !== -1) this.articles.splice(index, 1);
                          this.Loadedarticles = true;
                        }
                    }
                });
            },
            getFeaturedVideo: function (number) {
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
            getUrlCode() {
                let promo = this.$route.query.promo;
                if (promo != null) {
                    this.$store.dispatch('setPromo', promo);
                }
            },
            latestSellPosts(number){
              this.$api.get('latest-sell-posts?number=' + number + 'include=subcategory,user').then(response => {
                this.sellPosts = response.data.data;
                if (this.sellPosts.length) {
                  this.loadLatestSellPosts = true
                }
              });
            }
        },
        watch: {
            '$route' (to) {
                if (to.name == 'Home') {
                    this.getTrendingGames();
                    this.getNewGames();
                    this.getRentGames();
                    this.getFeaturedArticles();
                    this.getArticles();
                    this.getFeaturedVideo(6);
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
            window.scrollTo(0,0);
            this.getTrendingGames();
            this.getNewGames();
            this.getRentGames();
            this.getFeaturedArticles();
            this.getArticles();
            this.getFeaturedVideo(5);
            this.featuredPlatforms(4);
            this.latestSellPosts(10);

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
