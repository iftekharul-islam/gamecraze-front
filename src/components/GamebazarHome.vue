<template>
    <div>
        <section class="gamebazar-banner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="max-488">
                            <h1 class="f-s-48 text-secondery gil-bold font-weight-bold mb-a-6">{{ $t('game_bazar_title_1', $store.state.locale) }} <br> {{ $t('game_bazar_title_2', $store.state.locale) }}</h1>
                            <router-link class="router_link btn--collision br-4 border-1 secondery-border gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative" to="/create-ad">{{ $t('sell_post', $store.state.locale) }}</router-link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="gamebazar-banner__content d-grid grid-gap-16 justify-content-md-end">
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item br-4">
                              <div class=" h-100 br-4 overflow-fidden">
                                   <img src="../assets/img/gamebazar1.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline">Controller</span>
                                  <span class="gil-bold f-s-20 text-white underline">Controller</span>
                                  <span class="gil-bold f-s-20 text-white underline">Controller</span>
                              </div>
                            </a>
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item br-4">
                              <div class=" h-100 br-4 overflow-fidden">
                                   <img src="../assets/img/gamebazar2.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline mt-auto">Controller</span>
                              </div>
                            </a>
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item br-4">
                              <div class=" h-100 br-4 overflow-fidden">
                                   <img src="../assets/img/gamebazar2.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline mt-auto">Controller</span>
                              </div>
                            </a>
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item br-4">
                              <div class=" h-100 br-4 overflow-fidden">
                                   <img src="../assets/img/gamebazar3.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline mt-auto">Controller</span>
                              </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- New post -->
        <section class="new-post pb-a-11 pt-a-9">
               <!-- search bar -->
            <div class="container">
                <div class="col-md-8 mx-auto py-5">
                    <div class="gamebazar-search">
                        <div class="d-flex justify-content-center">
                            <!-- <div class="position-relative">
                                <a class="bg-secondery-gradient d-flex align-items-center justify-content-center h-100 px-4 br-4 primary-text primary-text-hover dropdown-toggle br-t-r-0 br-b-r-0 border-1 black-border border-r-white-25" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All product
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div> -->
                            <div class="search-append  d-flex w-75 align-items-center position-relative border-1 black-border br-4 overflow-hidden">
                                <input type="search" class="h-100 br-4 bg-white-25 border-0 text-white opa-8" placeholder="Search here ....">
                                <div class="search-icon pointer position-absolute right-0 top-0 px-3 h-100 d-flex align-items-center justify-content-center bg-secondery-gradient">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.84199 13.9454C8.42078 13.9454 9.87214 13.392 11.0301 12.4742L14.7898 16.3057L15.9991 15.0733L12.2395 11.2418C13.1409 10.0608 13.684 8.58168 13.684 6.97272C13.684 3.12814 10.6145 0 6.84199 0C3.06949 0 0 3.12814 0 6.97272C0 10.8173 3.06949 13.9454 6.84199 13.9454ZM6.84199 1.74318C9.67201 1.74318 11.9735 4.08863 11.9735 6.97272C11.9735 9.85681 9.67201 12.2023 6.84199 12.2023C4.01197 12.2023 1.7105 9.85681 1.7105 6.97272C1.7105 4.08863 4.01197 1.74318 6.84199 1.74318Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="container pr-a-0-max-575">
                <h3 class="f-s-24 gil-bold text-white mb-a-4">{{ $t('new_post', $store.state.locale) }}</h3>
                <div class="position-relative carousel-nav">
                  <carousel v-if ="loadLatestPosts"
                            :autoplay ="false"
                            :loop ="true"
                            :center ="true"
                            :nav ="false"
                            :dots ="true"
                            :margin ="32"
                            :stagePadding ="0"
                            :responsive="{ 0:{items:1.5, stagePadding:0, center:false,},
                                    600:{items:2, stagePadding:0, center:false,},
                                    1000:{items:3, stagePadding:0,},
                                    1400:{items:5, stagePadding:0, center:false,}}">
                    <template slot="prev">
                      <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center border-secondery-opa-50 br-4 pointer vue-owl-nav-left w-32 h-32 border-1">
                        <button class="owl-prev z-index-9 h-100 w-100">
                          <span class="prev">
                              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                              </svg>
                          </span>
                        </button>
                      </div>
                    </template>

                    <template slot="next">
                      <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center border-secondery-opa-50 border-1 br-4 pointer vue-owl-nav-right w-32 h-32">
                        <button class="owl-next z-index-9 h-100 w-100">
                          <span class="next">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </template>

                    <div class="item gamebazar-post"  v-for="(post, index) in latestPosts" :key="index">
                      <router-link :to="'/sell-post/' + post.id + '/' + post.url_name " >
                        <div class="product-img position-relative br-4 overflow-hidden">
                          <img :src="post.cover.url" class="img-fluid w-100 " alt="Gamebazar image" v-if="post.cover != null">
                          <img src="../assets/img/play.png" class="img-fluid w-100 " alt="Gamebazar image" v-else>
                          <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5" v-if="post.product_type === 1">{{ $t('new', $store.state.locale) }}</span>
                          <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5" v-else>{{ $t('used', $store.state.locale) }}</span>
                          <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5"> ৳ {{ post.price }}</span>
                        </div>
                        <p class="gil-bold mb-3 mt-a-4 text-white">{{ post.name }}</p>
                        <p class="mb-3 text-white" v-if="post.product_type === 1">
                          {{ $t('new', $store.state.locale) }}
                        </p>
                        <p class="mb-3 text-white" v-if="post.product_type != 1">
                          {{ $t('used', $store.state.locale) }}
                          <span v-if="post.used_year != null">
                              {{ post.used_year }} &nbsp;
                              {{ $t('year', $store.state.locale) }}&nbsp;
                            </span>
                          <span v-if="post.used_month != null">
                              {{ post.used_month }}&nbsp;
                              {{ $t('month', $store.state.locale) }}&nbsp;
                            </span>
                          <span v-if="post.used_day != null">
                              {{ post.used_day }}&nbsp;
                              {{ $t('day', $store.state.locale) }}
                            </span>
                        </p>
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
                  </carousel>
              </div>
                <div class="text-center mt-5">
                    <router-link to="/sell-posts" class="router_link btn--collision br-4 border-1 secondery-border gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('all_post', $store.state.locale) }}</router-link>
                </div>
            </div>
        </section>
        <div v-if="categories.length">
          <section class="new-post pb-a-11" v-for="(category, index) in categories" :key="index">
            <div class="container">
              <h3 class="f-s-24 gil-bold text-white mb-a-4">{{ category.name }}</h3>
              <!-- carousel -->
              <div class="position-relative carousel-nav">
                <carousel v-if ="loadCategories"
                          :autoplay ="false"
                          :loop ="true"
                          :center ="true"
                          :nav ="false"
                          :dots ="true"
                          :margin ="32"
                          :stagePadding ="0"
                          :responsive="{ 0:{items:1.5, stagePadding:0, center:false,},
                                      600:{items:2, stagePadding:0, center:false,},
                                      1000:{items:3, stagePadding:0,},
                                      1400:{items:5, stagePadding:0, center:false,}}">
                  <template slot="prev">
                    <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center border-secondery-opa-50 br-4 pointer vue-owl-nav-left w-32 h-32 border-1">
                      <button class="owl-prev z-index-9 h-100 w-100">
                            <span class="prev">
                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                                </svg>
                            </span>
                      </button>
                    </div>
                  </template>

                  <template slot="next">
                    <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center border-secondery-opa-50 border-1 br-4 pointer vue-owl-nav-right w-32 h-32">
                      <button class="owl-next z-index-9 h-100 w-100">
                            <span class="next">
                              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                              </svg>
                            </span>
                      </button>
                    </div>
                  </template>

                  <div class="item gamebazar-post"  v-for="(post, index) in category.products.data" :key="index">
                    <router-link :to="'/sell-post/' + post.id + '/' + post.url_name " >
                      <div class="product-img position-relative br-4 overflow-hidden">
                        <img :src="post.cover.url" class="img-fluid w-100 " alt="Gamebazar image" v-if="post.cover != null">
                        <img src="../assets/img/play.png" class="img-fluid w-100 " alt="Gamebazar image" v-else>
                        <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5" v-if="post.product_type === 1">{{ $t('new', $store.state.locale) }}</span>
                        <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5" v-else>{{ $t('used', $store.state.locale) }}</span>
                        <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5"> ৳ {{ post.price }}</span>
                      </div>
                      <p class="gil-bold mb-3 mt-a-4 text-white">{{ post.name }}</p>
                      <p class="mb-3 text-white" v-if="post.product_type === 1">
                        {{ $t('new', $store.state.locale) }}
                      </p>
                      <p class="mb-3 text-white" v-if="post.product_type != 1">
                        {{ $t('used', $store.state.locale) }}
                        <span v-if="post.used_year != null">
                              {{ post.used_year }} &nbsp;
                              {{ $t('year', $store.state.locale) }}&nbsp;
                            </span>
                        <span v-if="post.used_month != null">
                              {{ post.used_month }}&nbsp;
                              {{ $t('month', $store.state.locale) }}&nbsp;
                            </span>
                        <span v-if="post.used_day != null">
                              {{ post.used_day }}&nbsp;
                              {{ $t('day', $store.state.locale) }}
                            </span>
                      </p>
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
                </carousel>
              </div>
              <div class="text-center mt-5">
                <router-link to="/sell-posts" class="router_link btn--collision br-4 border-1 secondery-border gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('all_post', $store.state.locale) }}</router-link>
              </div>
            </div>
          </section>
        </div>
        <!-- sell post -->
        <section class="accessories-sell-post position-relative">
            <div class="container">
              <div class="row">
                    <div class="col-md-7 col-lg-7">
                        <div class="mr-a-md-10 mb-3 mb-md-0">
                            <h1 class="f-s-28 f-s-md-48 max-600 mb-a-5">
                              {{ $t('game_bazar_title_4', $store.state.locale) }}
                                <span class="text-secondery">{{ $t('game_bazar_title_5', $store.state.locale) }}</span>
                              {{ $t('then', $store.state.locale) }} <span class="text-secondery">{{ $t('advertise', $store.state.locale) }}</span>
                              {{ $t('game_bazar_title_6', $store.state.locale) }}
                            </h1>
                            <p class="max-500 opa-8 text-white">{{ $t('game_bazar_title_3', $store.state.locale) }}</p>
                                <router-link to="/create-ad" class=" btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('create_ads', $store.state.locale) }} <span></span> <span></span></router-link>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-6 position-initial  pr-md-0">
                        <div class="accessories-sellpost position-xl-absolute right-0 top-0">
                                <img src="../assets/img/gamehome.png" class="img-fluid w-100" alt="Gamebazar image">
                        </div>
                    </div>
              </div>
            </div>
        </section>
          <!-- sell post -->
        <section class="accessories-sell-post position-relative">
            <div class="container">
               <div class="row accessories-sell-post__row">
                    <div class="col-md-5 col-lg-6 position-initial pl-md-0">
                        <div class="accessories-sellpost position-xl-absolute left-0 top-0 ">
                            <img src="../assets/img/gamehome.png" class="img-fluid w-100" alt="Gamebazar image">
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-7 ml-xl-auto">
                        <div class="ml-a-xl-10 mb-3 mb-xl-0">
                            <h1 class="f-s-28 f-s-md-48 max-600 mb-a-5">
                              {{ $t('game_bazar_title_8', $store.state.locale) }}
                              <span class="text-secondery">{{ $t('game_bazar_title_9', $store.state.locale) }}</span>
                              {{ $t('game_bazar_title_10', $store.state.locale) }}
                            </h1>
                            <p class="max-500 opa-8 text-white"> {{ $t('game_bazar_title_11', $store.state.locale) }}</p>
                                
                            <div class="d-flex align-items-center">
                              <router-link to="/profile" @click.native="clickToProfile()" class="btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative mr-3">{{ $t('lend', $store.state.locale) }} <span></span> <span></span></router-link>
                              <router-link to="/games" class="btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('rent_button', $store.state.locale) }} <span></span> <span></span></router-link>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
        <!--Current Popular -->
        <section class="pb-a-21 current-popular" id="related-game">
            <div class="container">
                 <h3 class="f-s-24 gil-bold text-white mb-a-4">{{ $t('popular_games_at_gamehub', $store.state.locale) }} :</h3>
                <!-- new carousel -->
              <div class="position-relative carousel-nav">
                <carousel
                    v-if="loadedPopular"
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
                  <template slot="prev">
                    <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center border-secondery-opa-50 br-4 pointer vue-owl-nav-left w-32 h-32 border-1">
                      <button class="owl-prev z-index-9 h-100 w-100">
                          <span class="prev">
                              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                              </svg>
                          </span>
                      </button>
                    </div>
                  </template>

                  <template slot="next">
                    <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center border-secondery-opa-50 border-1 br-4 pointer vue-owl-nav-right w-32 h-32">
                      <button class="owl-next z-index-9 h-100 w-100">
                          <span class="next">
                              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                              </svg>
                          </span>
                      </button>
                    </div>
                  </template>

                  <div class="item" v-for="(related, index) in populars" :key="index">
                    <router-link :to="{ path: '/game-details/' + related.game.data.slug}" @click.native="window.scrollTo(0,0);" class="games-categories-section--games--game-card-box game-card-hover-outer">
                      <div class="game-card game-card-hover-inner">
                        <a class="display-image" href="javascript:void(0)">
                          <img :src="related.game.data.poster_url" :alt="related.game.data.name" class="img-fluid" v-if="related.game.data.poster_url != null">
                          <img src="../assets/img/category/fifa20.jpg" class="img-fluid w-100" alt="Gamebazar image" v-else>
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
              <div class="text-center mt-5">
                     <router-link to="/games" class="router_link btn--collision br-4 border-1 secondery-border gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('all_games', $store.state.locale) }}</router-link>
              </div>
            </div>
        </section>
    </div>
</template>

<script>
   import carousel from 'vue-owl-carousel';
     export default {
          name: 'GamebazarHome',
          components: { carousel },
        data() {
          return {
            loadedRelated: false,
            relatedGames: [],
            loadLatestPosts: false,
            loadCategories: false,
            categories: [],
            latestPosts: [],
            loadedPopular: false,
            populars: []

          }
        },
         methods: {
           clickToProfile() {
             var auth = this.$store.getters.ifAuthenticated;
             if (!auth) {
               this.$router.push('/lend-notice');
               return
             }
             this.$root.$emit('rentPost');
           },
         },
        created() {
          window.scrollTo(0,0);
          this.$api.get('latest-sell-posts?include=subcategory,user').then(response => {
            this.latestPosts = response.data.data;
            if (this.latestPosts.length > 0) {
              this.loadLatestPosts = true
            }
          });
          this.$api.get('games/popular-games?include=game.assets,game.platforms,game.genres').then(response => {
            this.populars = response.data.data;
            if (this.populars.length > 0) {
              this.loadedPopular = true
            }
          });
          this.$api.get('category-list?include=products').then(response => {
            this.categories = response.data.data;
            if (this.categories.length > 0) {
              this.loadCategories = true
            }
          });
        },
        
    }
</script>
