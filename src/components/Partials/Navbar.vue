<template>
    <div>
        <!-- navbar -->
        <nav class="navbar navbar-expand-xl gamehub-menu fixed-top">
            <div class="container">
                <!-- logo -->
                <a class="navbar-brand" href="/">
                    <img src="../../assets/img/logo/gamehublogo.svg" class="img-fluid gamehub--logo" alt="Gamehub Logo logo">
                </a>
                <!-- navbar middle content -->
                <div class="d-flex custom-collapse gamehub-menu-collapse mr-xl-auto">
                    <ul class="d-flex justify-content-between justify-content-xl-start pl-xl-4 gamehub-menu-collapse-list">
                        <li class="d-xl-none">
                            <router-link @click.native="onMenuItemClick()" class="router_link  flex-column d-inline-flex align-items-center justify-content-center" to="/" >
                            <div class="h-mbl-18">
                                <svg class=" mb-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.30782 15.0187V12.5725C5.30782 11.948 5.81773 11.4418 6.44674 11.4418H8.74608C9.04815 11.4418 9.33784 11.561 9.55142 11.773C9.76501 11.985 9.88501 12.2726 9.88501 12.5725V15.0187C9.8831 15.2783 9.98565 15.5279 10.1699 15.7121C10.3541 15.8964 10.6048 16 10.8663 16H12.4351C13.1677 16.0019 13.871 15.7143 14.3897 15.2006C14.9085 14.687 15.2 13.9896 15.2 13.2623V6.29348C15.2 5.70597 14.9376 5.14867 14.4837 4.77173L9.14721 0.540695C8.21892 -0.201151 6.88889 -0.177198 5.98831 0.597583L0.773609 4.77173C0.298192 5.13756 0.0140418 5.69651 0 6.29348V13.2551C0 14.7711 1.2379 16 2.76494 16H4.29783C4.84098 16 5.28239 15.565 5.28633 15.0258L5.30782 15.0187Z" fill="#C4C4C4"/>
                                </svg>
                            </div>
                            {{ $t('home', $store.state.locale) }}
                            <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li>
                            <router-link @click.native="onMenuItemClick()" class="router_link flex-column d-inline-flex align-items-center justify-content-center" to="/games" :class="{ 'router-link-exact-active router-link-active active': this.$route.path == '/games' }">
                            <div class="h-mbl-18">
                                <svg class="d-xl-none mb-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.73607 9.1759C5.86409 9.1759 6.7681 10.0887 6.7681 11.2247V13.952C6.7681 15.08 5.86409 16 4.73607 16H2.03203C0.912014 16 0 15.08 0 13.952V11.2247C0 10.0887 0.912014 9.1759 2.03203 9.1759H4.73607ZM13.9683 9.1759C15.0883 9.1759 16.0003 10.0887 16.0003 11.2247V13.952C16.0003 15.08 15.0883 16 13.9683 16H11.2642C10.1362 16 9.23222 15.08 9.23222 13.952V11.2247C9.23222 10.0887 10.1362 9.1759 11.2642 9.1759H13.9683ZM4.73607 0C5.86409 0 6.7681 0.920014 6.7681 2.04883V4.77607C6.7681 5.91209 5.86409 6.8241 4.73607 6.8241H2.03203C0.912014 6.8241 0 5.91209 0 4.77607V2.04883C0 0.920014 0.912014 0 2.03203 0H4.73607ZM13.9683 0C15.0883 0 16.0003 0.920014 16.0003 2.04883V4.77607C16.0003 5.91209 15.0883 6.8241 13.9683 6.8241H11.2642C10.1362 6.8241 9.23222 5.91209 9.23222 4.77607V2.04883C9.23222 0.920014 10.1362 0 11.2642 0H13.9683Z" fill="#C4C4C4"/>
                                </svg>
                            </div>
                            {{ $t('games', $store.state.locale)}}
                            </router-link>
                        </li>
                        <li class="active position-relative">
                            <router-link @click.native="onMenuItemClick()" class="nav-link active router_link flex-column d-inline-flex align-items-center justify-content-center" to="/gamebazar" >
                           <div class="h-mbl-18">
                                <svg class="d-xl-none mb-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8479 8.65219C15.9056 8.68459 15.9171 8.75329 15.9194 8.77948L15.92 8.78991L15.8559 12.9215C15.8559 14.5696 14.579 15.9136 12.971 15.996L12.8144 16H3.17759C1.54927 16 0.221423 14.7075 0.140023 13.08L0.136068 12.9215L0.08004 8.78991C0.08004 8.78991 0.08004 8.6927 0.152076 8.65219C0.216108 8.61168 0.296148 8.66029 0.304152 8.66839C1.92096 9.75396 3.86593 10.475 5.90695 10.7747C6.1951 10.8152 6.48324 10.6289 6.56328 10.3372C6.72836 9.71446 7.23815 9.29105 7.86181 9.24055L7.98799 9.23548H8.01201C8.69235 9.23548 9.26063 9.67294 9.43672 10.3372C9.51676 10.6289 9.8049 10.8152 10.093 10.7747C12.1341 10.475 14.079 9.75396 15.6958 8.66839C15.6958 8.66839 15.7119 8.66029 15.7279 8.65219C15.7599 8.63599 15.8079 8.62789 15.8479 8.65219ZM7.996 10.394C7.69518 10.394 7.44144 10.6254 7.40124 10.9198L7.3957 11.0015V12.0466C7.3957 12.3869 7.66783 12.6542 7.996 12.6542C8.30415 12.6542 8.55178 12.4296 8.59091 12.13L8.5963 12.0466V11.0015C8.5963 10.6694 8.33217 10.394 7.996 10.394ZM9.02851 0C10.2291 0 11.2136 0.915438 11.3657 2.09012H12.9505C14.6313 2.09012 16 3.47543 16 5.17668C16 5.17668 15.952 5.89688 15.936 6.89981C15.9344 6.97921 15.8959 7.05698 15.8327 7.10396C15.4477 7.38832 15.0955 7.62325 15.0635 7.63945C13.7349 8.53059 12.1909 9.15762 10.5461 9.46952C10.4388 9.49058 10.3332 9.43469 10.2787 9.33909C9.81771 8.54031 8.95648 8.02021 7.996 8.02021C7.04192 8.02021 6.17269 8.53464 5.69805 9.33423C5.64282 9.42821 5.53877 9.48248 5.43232 9.46223C3.8011 9.14952 2.25713 8.5233 0.936468 7.64756L0.168084 7.11288C0.104052 7.07237 0.064032 6.99946 0.064032 6.91845C0.04002 6.50528 0 5.17668 0 5.17668C0 3.47543 1.36868 2.09012 3.04952 2.09012H4.62631C4.77839 0.915438 5.76288 0 6.96348 0H9.02851ZM9.02851 1.21518H6.96348C6.42721 1.21518 5.97099 1.58784 5.84292 2.09012H10.1491C10.021 1.58784 9.56478 1.21518 9.02851 1.21518Z" fill="#C4C4C4"/>
                                </svg>
                           </div>
                            {{ $t('game_bazar', $store.state.locale) }}</router-link>
                            <span class="position-absolute new-badge">
                                <svg width="40" height="23" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.72319 12.6595C1.48852 8.56338 1.37119 6.51534 2.60516 5.24246C3.83913 3.96958 5.88762 4.02558 9.9846 4.13758L10.8574 4.16144C11.2495 4.17216 11.4456 4.17752 11.6411 4.16368C11.8365 4.14984 12.0302 4.11689 12.4175 4.05099L24.0609 2.06973C24.501 1.99485 24.721 1.95741 24.9432 1.94464C25.1653 1.93187 25.3878 1.94388 25.8328 1.96788L28.7075 2.12299C31.4856 2.27289 32.8746 2.34783 33.8735 3.15959C34.8723 3.97135 35.2293 5.31537 35.9434 8.0034L36.2809 9.27405C37.5532 14.0638 38.1894 16.4586 36.9263 18.0453C35.6633 19.6321 33.1856 19.5507 28.2302 19.388L27.0564 19.3495C26.7051 19.3379 26.5294 19.3322 26.354 19.3418C26.1786 19.3515 26.0044 19.3766 25.656 19.4267L13.5933 21.1616L10.4772 21.4579C6.61925 21.8247 4.69025 22.0081 3.41162 20.9103C2.133 19.8126 2.02216 17.8779 1.80047 14.0084L1.72319 12.6595Z" fill="url(#paint0_linear)"/>
                                    <path d="M12.64 12.724V7.6H14.296V16H13.036L9.436 10.864V16H7.78V7.6H9.04L12.64 12.724ZM21.6142 13.636H17.0902C17.2902 14.388 17.8542 14.764 18.7822 14.764C19.3742 14.764 19.8222 14.564 20.1262 14.164L21.3742 14.884C20.7822 15.74 19.9102 16.168 18.7582 16.168C17.7662 16.168 16.9702 15.868 16.3702 15.268C15.7702 14.668 15.4702 13.912 15.4702 13C15.4702 12.104 15.7662 11.352 16.3582 10.744C16.9422 10.136 17.7022 9.832 18.6382 9.832C19.5262 9.832 20.2502 10.136 20.8102 10.744C21.3862 11.352 21.6742 12.104 21.6742 13C21.6742 13.168 21.6542 13.38 21.6142 13.636ZM17.0662 12.436H20.1262C20.0382 12.044 19.8582 11.744 19.5862 11.536C19.3222 11.328 19.0062 11.224 18.6382 11.224C18.2222 11.224 17.8782 11.332 17.6062 11.548C17.3342 11.756 17.1542 12.052 17.0662 12.436ZM28.2565 13.696L29.2765 10H30.9205L29.0125 16H27.5365L26.4325 12.364L25.3285 16H23.8525L21.9445 10H23.5885L24.6085 13.684L25.7005 10H27.1645L28.2565 13.696Z" fill="#0B0F18"/>
                                    <defs>
                                    <linearGradient id="paint0_linear" x1="4.43461" y1="24.537" x2="30.9933" y2="4.40371" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD715"/>
                                    <stop offset="1" stop-color="#FFB81F"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </li>
                         <li class="dropdown dropdown-hover">
                            <a class="router_link no-after flex-column d-inline-flex align-items-center justify-content-center" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="h-mbl-18">
                                <svg class="d-xl-none mb-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.472 0C14.184 0 16 1.904 16 4.736V11.272C16 14.096 14.184 16 11.472 16H4.536C1.824 16 0 14.096 0 11.272V4.736C0 1.904 1.824 0 4.536 0H11.472ZM11.584 7.0408C11.056 7.0408 10.624 7.472 10.624 8C10.624 8.528 11.056 8.96 11.584 8.96C12.112 8.96 12.536 8.528 12.536 8C12.536 7.472 12.112 7.0408 11.584 7.0408ZM8 7.0408C7.472 7.0408 7.04 7.472 7.04 8C7.04 8.528 7.472 8.96 8 8.96C8.528 8.96 8.96 8.528 8.96 8C8.96 7.472 8.528 7.0408 8 7.0408ZM4.416 7.0408C3.888 7.0408 3.456 7.472 3.456 8C3.456 8.528 3.888 8.96 4.416 8.96C4.944 8.96 5.376 8.528 5.376 8C5.376 7.472 4.944 7.0408 4.416 7.0408Z" fill="#C4C4C4"/>
                                </svg>
                                </div>
                                {{ $t('more', $store.state.locale)}}
                            </a>
                              <div class="dropdown--sub-menu p-0 dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <div class="dropdown--sub-menu--item"><router-link  class="router_link" to="/profile" @click.native="onMenuItemClick(); clickProfile()">{{ $t('post_for_lend', $store.state.locale) }}</router-link></div>
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/about-us">{{ $t('about_us', $store.state.locale) }}</router-link></div>
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/terms">{{ $t('terms', $store.state.locale) }}</router-link></div>
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/privacy">{{ $t('privacy_policy', $store.state.locale) }}</router-link></div>
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/frequently-asked-questions">{{ $t('faq', $store.state.locale) }}</router-link></div>
                                  <!-- change language for mobile -->
                                   <div class="locale-changer gamehub-language d-lg-none">
                                        <div v-for="(lang) in $i18n.availableLocales" @click="languageChange(lang)" >
                                            <span @click="onMenuItemClick()" v-if="lang == 'bn'" v-bind:class="{ active: isActive === 'bn' }">বাং</span>
                                            <span @click="onMenuItemClick()" v-if="lang == 'en'" v-bind:class="{ active: isActive === 'en' }">Eng</span>
                                        </div>
                                    </div>
                              </div>
                        </li>
                    </ul>
                </div>
                     <!-- search bar -->
                   <div class="gamehub-input-group gamehub-input-group-searchbar">
                        <div class="gamehub-input-group--content">
                           
                            <div :class="{ animateNavebar: navbarAnimate }"  >
                                <div class="d-flex position-absolute animate-nav justify-content-center w-100">
                                     <!-- lend rent switch button -->
                                  <button class="switch-btn" v-if="isRent" @click="isRent = !isRent">
                                      For Rent
                                      <svg class="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.96684 3.47998L3.48682 1L1.00684 3.47998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M3.4873 13V1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M8.0332 10.52L10.5132 13L12.9932 10.52" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M10.5137 1V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                  </button>
                                  <button class="switch-btn" v-if="!isRent" @click="isRent = !isRent">
                                    For Sell
                                    <svg class="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M5.96684 3.47998L3.48682 1L1.00684 3.47998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M3.4873 13V1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M8.0332 10.52L10.5132 13L12.9932 10.52" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M10.5137 1V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                  </button>
                                  <span class="animate-navbar-icon order-3" @click="searchClear()" :class="{ block: navbarAnimate }">
                                    <i class="fas fa-times"></i>
                                  </span>
                                  <div class="search-input-design searchbar-input gamebazar__search position-relative" v-if="isRent">
                                      <vue-autosuggest
                                          v-model="query"
                                          :suggestions="filteredOptions"
                                          @keyup.enter="searchGame"
                                          @selected="onSelected"
                                          :get-suggestion-value="getSuggestionValue"
                                          :input-props="{id:'autosuggest__input',class:'auto-suggest-menu' ,placeholder: $t('search_game', $store.state.locale) }">
                                          <div  slot-scope="{suggestion}">
                                              <div class="d-flex align-items-center">
                                                  <div class="gamebazar__search__img overflow-hidden br-4">
                                                      <img :src="suggestion.item.game.data.poster_url" class="img-fluid  h-100 w-100 object-cover" :alt="suggestion.item.game.data.name" v-if="suggestion.item.game.data.poster_url">
                                                      <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/11/PS5-PS4-Game-Forced-Install-Problem.jpg" class="img-fluid object-cover h-100 w-100" alt="Gamehub Logo logo" v-else>
                                                  </div>
                                                  <div class="ml-3">
                                                     <span class="gil-bold">{{suggestion.item.game.data.name}}</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </vue-autosuggest>
                                  </div>
                                  <button class="btn gamehub-search-btn animate-nav-btn w-60" @click.prevent="searchGame" v-if="isRent">
                                      <i class="fa fa-search gamehub-search-btn--icon"></i>
                                  </button>
                                  <div class="search-input-design searchbar-input gamebazar__search position-relative d-flex" v-if="!isRent">
                                    <vue-autosuggest
                                        v-model="productQuery"
                                        :suggestions="productFilteredOptions"
                                        @keyup.enter="searchProduct"
                                        @selected="onSelectedProduct"
                                        :get-suggestion-value="getProductSuggestionValue"
                                        :input-props="{id:'autosuggest_prouduct_input',class:'auto-suggest-menu',placeholder: $t('search_game_accessories', $store.state.locale) }">
                                      <div  slot-scope="{ suggestion }" class="w-100">
                                        <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between position-relative">

                                          <div class="d-flex align-items-md-center search-content">
                                            <div class="gamebazar__search__img overflow-hidden br-4">
                                              <img :src="suggestion.item.cover.url" class="img-fluid  h-100 w-100" alt="Gamehub Logo logo" v-if="suggestion.item.cover != null">
                                              <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/11/PS5-PS4-Game-Forced-Install-Problem.jpg" class="img-fluid  h-100 w-100" alt="Gamehub Logo logo" v-else>
                                            </div>
                                            <div class="ml-3">
                                              <span class="d-block gil-bold mb-2 name">{{ suggestion.item.name }}</span>
                                              <span class="name" v-if="suggestion.item.product_type === 1">
                                          {{ $t('new', $store.state.locale) }}
                                        </span>
                                              <span class="name d-block w-152" v-if="suggestion.item.product_type === 2">
                                          {{ $t('used', $store.state.locale) }}&nbsp;
                                            <span v-if="suggestion.item.used_year != null">
                                                  {{ suggestion.item.used_year }}&nbsp;
                                                  {{ $t('year', $store.state.locale) }}&nbsp;
                                            </span>
                                            <span v-if="suggestion.item.used_month != null">
                                                  {{ suggestion.item.used_month }}&nbsp;
                                                  {{ $t('month', $store.state.locale) }}&nbsp;
                                            </span>
                                            <span v-if="suggestion.item.used_day != null">
                                                  {{ suggestion.item.used_day }}&nbsp;
                                                  {{ $t('day', $store.state.locale) }}
                                            </span>
                                        </span>
                                            </div>
                                          </div>
                                          <span class="text-secondery gil-bold font-weight-bold name search-price">৳ {{ suggestion.item.price }}</span>
                                        </div>
                                      </div>
                                    </vue-autosuggest>
                                    <button class="btn gamehub-search-btn animate-nav-btn w-60" @click.prevent="searchProduct">
                                      <i class="fa fa-search gamehub-search-btn--icon"></i>
                                    </button>
                                  </div>
                                </div>
                            </div>
                            <button :class="{ dnone: navbarAnimate }" class="btn gamehub-search-btn-2" @click="navbarAnimate = !navbarAnimate" type="search">
                                <i class="fa fa-search gamehub-search-btn--icon"></i>
                            </button>
                        </div>
                   </div>
                    <!-- language -->
                    <div class="locale-changer gamehub-language d-none d-lg-flex">
                        <div v-for="(lang) in $i18n.availableLocales" @click="languageChange(lang)" >
                            <span @click="onMenuItemClick()" v-if="lang == 'bn'" v-bind:class="{ active: isActive === 'bn' }">বাং</span>
                            <span @click="onMenuItemClick()" v-if="lang == 'en'" v-bind:class="{ active: isActive === 'en' }">Eng</span>
                        </div>
                    </div>
                
                
                <!-- sign in button and cart icon out side of collapse -->
                 <div class="gamehub-input-group signin-cart-group">
                        <div class="gamehub-input-group--content">
                            <router-link v-if="!auth" class="sign-in btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative" to="/login"><span>{{ $t('sign_in', $store.state.locale) }}</span></router-link>
                                <div v-if="auth" class="dropdown-toggle complete-sign-in" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                  <span class="user-name" v-if="$store.state.user.name">{{ this.$store.state.user.name }}</span>
                                  <span class="user-name" v-else>{{ this.$store.state.user.phone_number }}</span>
                                    <span class="complete-sign-in--badge" v-if="user != null && user.is_verified === 1"></span>
                                    <div class="complete-sign-in--nav-profile-img">
                                        <img v-if="$store.state.user.image" :src="$store.state.user.image" :alt="$store.state.user.name">
                                        <img v-else src="../../assets/img/avatar.png" alt="profile">
                                    </div>
                                    <div class="dropdown-menu gamehub-dropdown-menu">
                                      <div class="gamehub-dropdown-menu--top">
                                        <router-link to="/profile" class="dropdown-item">{{ $t('dashboard', $store.state.locale) }}</router-link>
                                        <router-link to="/profile" class="dropdown-item" @click.native="clickProfile()">{{ $t('post_for_lend', $store.state.locale) }}</router-link>
                                        <router-link class="router_link dropdown-item" to="/notice-board">{{ $t('noticeboard', $store.state.locale) }}</router-link>
                                        <router-link to="/contacts" class="dropdown-item" href="#">{{ $t('contact_us', $store.state.locale) }}</router-link>
                                      </div>
                                      <div class="gamehub-dropdown-menu--bottom">
                                        <a @click="onLogout" class="dropdown-item" href="#">{{ $t('logout', $store.state.locale) }}</a>
                                      </div>
                                    </div>
                                </div>
                                        
                        </div>
                        <div class="gamehub-input-group--content">
                            <div class="position-relative" v-if="auth && pendingRating.length">
                                <div class="gamehub-input-group--content--cart mr-4" role="button" id="rating-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.04845 24.1191C9.74833 23.971 14.013 23.971 14.7129 24.1191C15.3112 24.2573 15.9582 24.5802 15.9582 25.2852C15.9234 25.9563 15.5296 26.5514 14.9856 26.9293C14.2801 27.4792 13.4523 27.8274 12.5868 27.9529C12.1082 28.015 11.6379 28.0164 11.1759 27.9529C10.3091 27.8274 9.48118 27.4792 8.77713 26.9278C8.2317 26.5514 7.83793 25.9563 7.80314 25.2852C7.80314 24.5802 8.45015 24.2573 9.04845 24.1191ZM11.9633 0C14.8755 0 17.8503 1.38183 19.6174 3.67453C20.764 5.15083 21.2899 6.62572 21.2899 8.91842V9.51486C21.2899 11.2732 21.7546 12.3095 22.7773 13.5038C23.5523 14.3837 23.8 15.5131 23.8 16.7384C23.8 17.9623 23.3979 19.1242 22.5923 20.0675C21.5376 21.1983 20.0502 21.9203 18.5321 22.0458C16.3323 22.2333 14.1311 22.3912 11.9007 22.3912C9.66888 22.3912 7.46907 22.2968 5.26925 22.0458C3.74984 21.9203 2.26243 21.1983 1.20913 20.0675C0.403508 19.1242 0 17.9623 0 16.7384C0 15.5131 0.249062 14.3837 1.02268 13.5038C2.07737 12.3095 2.51149 11.2732 2.51149 9.51486V8.91842C2.51149 6.56368 3.09866 5.02393 4.30779 3.51661C6.10549 1.31838 8.98709 0 11.8381 0H11.9633Z" fill="#FFD715"/>
                                    </svg>
                                    <div class="badge navbar-badge"></div>
                                    <div class="badge gamehub-badge navbar-badge" v-if="pendingRating.length">{{ pendingRating.length }}</div>
                                </div>
                                <!-- Notification for rating -->
                                <div class="dropdown-menu rating-notification w-300 w-sm-400 max-h-450 overflow-auto custom-scroll position-absolute secondery-border right-20 bg-game-details text-white br-0 p-0 top-55" aria-labelledby="rating-notification">
                                    <div class="rating-notification--list d-block pointer" @click="clickOnRating(rating)" v-for="(rating, index) in pendingRating" v-if="pendingRating.length">
                                        <p class="gil-bold text-badge mb-2">{{ $t('congratulations', $store.state.locale) }}</p>
                                        <p class="text-white text transition-3 mb-0">{{ $t('the_order_of', $store.state.locale) }} <span class="text-secondery transition-3">{{ rating.lend.data.rent.data.game.data.name }}</span> {{ $t('rating_complete_notice', $store.state.locale) }} </p>
                                    </div>
                                    <p class="text-center mt-3" v-else>{{ $t('no_pending_rating', $store.state.locale) }}</p>
<!--                                    <div class="d-flex justify-content-between align-items-center px-3 py-2 primary-bg">-->
<!--                                        <a href="#" class="text-secondery">Clear</a>-->
<!--                                        <a href="#" class="text-secondery">Close</a>-->
<!--                                    </div>-->
                                </div>
                            </div>
                            <router-link class="gamehub-input-group--content--cart" to="/cart">
                              <i class="fas fa-shopping-cart gamehub-input-group--content--cart--icon"></i>
                              <div class="badge navbar-badge" v-if="totalItems == 0"></div>
                              <div class="badge gamehub-badge navbar-badge" v-if="totalItems !== 0">{{ totalItems }}</div>
                            </router-link>
                        </div>
                 </div>
            </div>
        </nav>
        <!-- promotion Notification -->
<!--        <div class="promo-notification mt-1">-->
<!--            <div class="alert gamehub-warning-bg alert-dismissible fade show mb-0 br-0 text-center text-black gil-bold f-s-20 position-fixed w-100 z-index-999" role="alert">-->
<!--                {{ $t('discount_notice', $store.state.locale) }}  <router-link to="/games" class="text-dark"><u>{{ $t('rent_now', $store.state.locale) }}</u></router-link>-->
<!--              <button type="button" class="close opa-10 x-close" data-dismiss="alert" aria-label="Close">-->
<!--                <span aria-hidden="true" class="x-icon"></span>-->
<!--              </button>-->
<!--            </div>-->
<!--        </div>-->
        <div v-if="ratingNavModal">
            <transition name="modal">
                <div class="modal-mask rating-box-modal position-fixed top-0 left-0 w-100 h-100 m-auto z-index-9999">
                    <div class="modal-wrapper bg-black-opa h-100 d-flex align-items-center justify-content-center py-4">
                        <div class="modal-content max-500 max-h-740 h-100 bg-game-details border-2 border-secondery br-0 overflow-auto p-4">
                            <button type="button" class="close position-absolute right-20 top-20" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" @click="ratingNavModal = false" class="close-modal">
                                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                                        <path d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z" fill="white"/>
                                    </svg>
                                </span>
                            </button>
                            <div class="modal-body-content">
                                <h5 class="modal-title text-secondery text-center f-s-32 mb-a-4" id="exampleModalLabel">{{ $t('rate_please', $store.state.locale) }}</h5>
                                <div class="text-center w-100px h-100px mx-auto overflow-hidden rounded-circle mb-a-4" v-if="ratingData.value.lender_id != $store.state.user.id">
                                    <img :src="ratingData.value.lender.data.image" alt="img" class="img-fluid" v-if="ratingData.value.lender.data.image">
                                    <img src="../../assets/img/avatar.png" class="img-fluid gamehub--logo" alt="Gamehub Logo logo" v-else>
                                </div>
                                <div class="text-center w-100px h-100px mx-auto overflow-hidden rounded-circle mb-4" v-else>
                                    <img :src="ratingData.value.renter.data.image" alt="img" class="img-fluid" v-if="ratingData.value.renter.data.image">
                                        <img src="../../assets/img/avatar.png" class="img-fluid gamehub--logo" alt="Gamehub Logo logo" v-else>
                                </div>
                                <div class="text-center mb-a-6" v-if="ratingData.value.lender_id != $store.state.user.id">
                                    <p class="f-s-20 mb-1 gil-bold" >{{ ratingData.value.lender.data.name}} {{ ratingData.value.lender.data.last_name}}</p>
                                    <p class="gil-bold opa-8 mb-0">{{ $t('Lender', $store.state.locale) }}</p>
                                </div>
                                <div class="text-center mb-a-6" v-else>
                                    <p class="f-s-20 mb-1 gil-bold" >{{ ratingData.value.renter.data.name}} {{ ratingData.value.renter.data.last_name}}</p>
                                    <p class="gil-bold opa-8 mb-0">{{ $t('Renter', $store.state.locale) }}</p>
                                </div>
                                <div class="text-center">
                                    <p class="f-s-20 mb-1 gil-bold">{{ ratingData.value.lend.data.rent.data.game.data.name }}</p>
                                    <p class="gil-bold opa-8">{{ $t('game_name', $store.state.locale) }}</p>
                                </div>
                                <div class="d-flex vue-react justify-content-center align-items-center mb-a-6">
                                    <vue-feedback-reaction v-model="ratingData.feedback" :labels="['Very Poor','Poor','Average','Good','Excellent']"/>
                                </div>
                                <form class="" @submit.prevent="ratingSubmit" method="post">
                                    <div class="comment-box">
                                        <div class="form-group">
                                            <label for="comment-box" class="d-block gil-bold">{{ $t('comment_box', $store.state.locale) }}</label>
                                            <textarea type="text" id="comment-box" rows="3" class="w-100 border-1 border-secondery primary-bg text-white p-2 focus-primary" v-model="ratingData.comment"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="text-center d-block text-danger" v-if="invalidRating">{{ $t('please_rating', $store.state.locale) }}</span>
                                    </div>
                                    <div>
                                        <button type="submit" class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-full">{{ $t('submit', $store.state.locale) }}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

    </div>
</template>

<script>
    import { VueFeedbackReaction } from 'vue-feedback-reaction';
    export default {
        components: {VueFeedbackReaction},
        data() {
            return {
                productQuery: "",
                posts: [],
                isRent: true,
                navbarAnimate: false,
                invalidRating: false,
                ratingNavModal: false,
                ratingData: {
                    value: null,
                    feedback: '',
                    comment: '',
                },
                langValue: null,
                gameName: '',
                userProfile: {},
                token: '',
                result: '',
                modal: false,
                rents: [],
                games: [],
                results: [],
                filteredResults: [],
                query: "",
                selected: "",
                totalItems: 0,
                isNavOpen: false,
                user: null,
                isActive : this.$store.state.locale ?? this.$i18n.locale,
                pendingRating: [],
                searchClick: 0,
            }
        },
        methods: {
            searchClear() {
              this.navbarAnimate = false;
              this.query = '';
              this.productQuery = '';
            },
            searchProduct() {
              if (this.query !== '') {
                this.$router.push({
                  name: 'sell-posts',
                  query: {categories: this.$route.query.categories, search: this.productQuery}
                })
                this.$root.$emit('searchProductEvent')
              } else {
                this.$router.push({
                  name: 'sell-posts'
                })
              }
            },
            ratingSubmit () {
                this.invalidRating = false;
                if (this.ratingData.rating === 0 && this.ratingData.comment === ''){
                    this.invalidRating = true;
                    return;
                }
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                let data = {
                    id: this.ratingData.value.id,
                    rating: this.ratingData.feedback,
                    comment: this.ratingData.comment,
                };

                this.$api.post('user-rating', data, config).then(response => {
                    this.$toaster.success( response.data.message );
                    this.navRatingCheck();
                    this.ratingNavModal = false;
                    this.$root.$emit('ratingNavCheck');
                });
            },
            languageChange(value) {
                this.lang = value;
                this.isActive = value;
            },
            navRatingCheck() {
                this.pendingRating = [];
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                this.$api.get('rating-check?include=lend.rent.game,lend.order,lender,renter', config).then(response => {
                    this.pendingRating = response.data.data;
                });
            },
            authData () {
              if (this.$store.state.user === null) {
                return;
              }
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                if (this.user.locale === '' || this.user.locale == null){
                  this.localeSet(this.isActive);
                  return;
                }
                this.isActive = this.user.locale;
                this.$store.dispatch('changeLocale', this.user.locale)
                var auth = this.$store.getters.ifAuthenticated;
                if (auth) {
                  let config = {
                    headers: {
                      'Authorization': 'Bearer ' + this.$store.state.token
                    }
                  };
                  this.$api.get('cart-items', config).then(response => {
                    this.totalItems = response.data.data.cartItems.length;
                  });
                  this.navRatingCheck();
                }
                this.totalItems = 0;
              });
            },
            localeSet(value){
                var auth = this.$store.getters.ifAuthenticated;
                if (!auth) {
                    return
                }
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };
                var data = {
                    value: value
                };
                this.$api.post('locale-update', data, config).then(res => {
                    if (res.data.error == false) {
                        this.$toaster.success( this.$t('Language_update', this.$store.state.locale) );
                    } else {
                        this.$toaster.warning( this.$t('Language_update_failed', this.$store.state.locale) );
                    }

                })
            },
          clickProfile() {
              let auth = this.$store.getters.ifAuthenticated;
              if (!auth) {
                  this.$router.push('/lend-notice');
                  return
              }
              this.$root.$emit('rentPost');
          },
          clickOnRating(data) {
              this.ratingNavModal = true;
              this.ratingData.value = data;
          },
          searchGame() {
              this.onMenuItemClick();
              this.navbarAnimate = false;
              if(this.query !== '') {
                this.$router.push({name: 'games', query: {categories: this.$route.query.categories, platforms: this.$route.query.platforms, search: this.query}})
                this.$root.$emit('searchEvent')
              }
              else {
                this.$router.push({name: 'games', query: {categories: this.$route.query.categories, platforms: this.$route.query.platforms}})
                this.$root.$emit('searchEvent')
              }
          },
          onLogout() {
              this.$store.dispatch('logout');
          },
          onSelected(item) {
            this.navbarAnimate = false;
            this.selected = item.item.game.data;
            this.query = this.selected.name;
            this.$router.push('/game-details/' + this.selected.slug).catch(()=>{});;
          },
          onSelectedProduct(item) {
            this.selected = item.item;
            this.productQuery = this.selected.name;
            this.$router.push('/sell-post/' + this.selected.id + '/' + this.selected.url_name).catch(()=>{});
          },
          /**
           * This is what the <input/> value is set to when you are selecting a suggestion.
           */
          getSuggestionValue(suggestion) {
            return suggestion.item.game.data.name;
          },
          getProductSuggestionValue(suggestion) {
            return suggestion.item.name;
          },
          onMenuItemClick() {
            if( window.innerWidth < 992 ) {
                let elem = this.$refs.btnMenuToggle;
                    elem.click();
            }
          }
        },
        watch: {
            "$route": {
                handler: function(value) {
                    if (value.name !== 'Profile'){
                        this.authData()
                    }
                },
                deep: true,
                immediate: true,
            },
        },
        computed: {
            lang: {
                get: function() {
                    return this.$store.state.locale
                },
                set: function(newVal) {
                    this.$store.dispatch('changeLocale', newVal)
                    this.localeSet(newVal);
                }
            },
          auth () {
              return this.$store.getters.ifAuthenticated
          },
          filteredOptions() {
            return [
              {
                data: this.games.filter(option => {
                  return option.game.data.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                })
              }
            ];
          },
          productFilteredOptions() {
            return [
              {
                data: this.posts.filter(option => {
                  return option.name.toLowerCase().indexOf(this.productQuery.toLowerCase()) > -1;
                })
              }
            ];
          },
        },
        created() {
            this.$root.$refs.Navbar = this;
            this.authData();
            this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
            this.$api.get('rent-posts?include=platform,game.assets,game.genres').then(response => {
                this.rents = response.data.data;
                const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
                this.$api.get('rent-games/?ids=' + uniqueArr + '&include=assets,genres,platforms').then(resp => {
                    this.results = resp.data.data;
                })
            });
            
            this.$api.get('all-rent-games?include=game.platforms').then(response =>{
              this.games = response.data.data;
            });
            this.$api.get('all-sell-post').then(response => {
              this.posts = response.data.data;
            });
            this.$root.$on('clearSearchKey', () => {
              this.query = '';
            });
        },
        mounted() {
            this.$root.$on("loggedIn", () => {
                this.token = localStorage.getItem('token')
                this.userProfile = JSON.parse(localStorage.getItem('userProfile'))
            })
        },

    }
</script>

<style scoped>

</style>
