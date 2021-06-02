<template>
    <div>
        <!-- navbar -->
        <nav class="navbar navbar-expand-xl gamehub-menu fixed-top">
            <div class="container">
                <!-- logo -->
                <a class="navbar-brand" href="/">
                    <img src="../../assets/img/logo/gamehublogo.svg" class="img-fluid gamehub--logo" alt="Gamehub Logo logo">
                </a>

                <!-- Toggle button for small device -->
                <div class="toggler-position">
                    <button v-bind:class="{ open: isNavOpen }" @click="isNavOpen = !isNavOpen" ref="btnMenuToggle" id="removeClass" class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse custom-collapse gamehub-menu-collapse" id="navbarSupportedContent" @click="modal = false">
                    <ul class="">
                        <li class="active">
                            <router-link @click.native="onMenuItemClick()" class="nav-link active router_link" to="/" >{{ $t('home', $store.state.locale) }}<span class="sr-only">(current)</span></router-link>
                        </li>
                        <li>
                            <router-link @click.native="onMenuItemClick()" class="router_link" to="/games" :class="{ 'router-link-exact-active router-link-active active': this.$route.path == '/games' }">{{ $t('games', $store.state.locale)}}</router-link>
                        </li>
                        <li>
                            <router-link  class="router_link" to="/profile" @click.native="onMenuItemClick(); clickProfile()">{{ $t('post_for_lend', $store.state.locale) }}</router-link>
                        </li>
                        <li class="dropdown position-relative dropdown-hover">
                            <router-link class="router_link no-after" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('more', $store.state.locale)}}</router-link>
                                <div class="dropdown--sub-menu p-0 dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/about-us">{{ $t('about_us', $store.state.locale) }}</router-link></div>
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/terms">{{ $t('terms', $store.state.locale) }}</router-link></div>
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/privacy">{{ $t('privacy_policy', $store.state.locale) }}</router-link></div>
                                  <div class="dropdown--sub-menu--item"><router-link @click.native="onMenuItemClick()" class="router_link" to="/frequently-asked-questions">{{ $t('faq', $store.state.locale) }}</router-link></div>
                              </div>
                        </li>
                    </ul>
                    <!-- language -->
                    <div class="locale-changer gamehub-language">
                        <div v-for="(lang) in $i18n.availableLocales" @click="languageChange(lang)" >
                            <span @click="onMenuItemClick()" v-if="lang == 'bn'" v-bind:class="{ active: isActive === 'bn' }">বাংলা</span>
                            <span @click="onMenuItemClick()" v-if="lang == 'en'" v-bind:class="{ active: isActive === 'en' }">English</span>
                        </div>
                    </div>
                   <!-- search bar -->
                   <div class="gamehub-input-group gamehub-input-group-searchbar">
                   <div class="gamehub-input-group--content">

                            <div class="search-input-design">
                              <vue-autosuggest
                                  v-model="query"
                                  :suggestions="filteredOptions"
                                  @focus="focusMe"
                                  @keyup.enter="searchGame"
                                  @click="clickHandler"
                                  @input="onInputChange"
                                  @selected="onSelected"
                                  :get-suggestion-value="getSuggestionValue"
                                  :input-props="{id:'autosuggest__input',class:'auto-suggest-menu'}">
                                <div  slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                  <span @click="onMenuItemClick()">{{suggestion.item.game.data.name}}</span>
                                </div>
                              </vue-autosuggest>
                            </div>
                            
                            <button class="btn gamehub-search-btn" @click="onMenuItemClick()" type="search" @click.prevent="searchGame">
                                <i class="fa fa-search gamehub-search-btn--icon"></i>
                            </button>
                        </div>
                </div>
                </div>
                
                <!-- sign in button and cart icon out side of collapse -->
                 <div class="gamehub-input-group signin-cart-group">
                        <!-- <div class="gamehub-input-group--content">

                            <div class="search-input-design">
                              <vue-autosuggest
                                  v-model="query"
                                  :suggestions="filteredOptions"
                                  @focus="focusMe"
                                  @keyup.enter="searchGame"
                                  @click="clickHandler"
                                  @input="onInputChange"
                                  @selected="onSelected"
                                  :get-suggestion-value="getSuggestionValue"
                                  :input-props="{id:'autosuggest__input',class:'auto-suggest-menu'}">
                                <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                  {{suggestion.item.name}}
                                </div>
                              </vue-autosuggest>
                            </div>
                            
                            <button class="btn gamehub-search-btn" type="search" @click.prevent="searchGame">
                                <i class="fa fa-search"></i>
                            </button>
                        </div> -->
                        <div class="gamehub-input-group--content">
                            <router-link v-if="!auth" class="sign-in" to="/login"><span>{{ $t('sign_in', $store.state.locale) }}</span></router-link>
                                <div v-if="auth" class="dropdown-toggle complete-sign-in" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                  <span class="user-name" v-if="$store.state.user.name">{{ this.$store.state.user.name }}</span>
                                  <span class="user-name" v-else>{{ this.$store.state.user.phone_number }}</span>
                                    <span class="complete-sign-in--badge" v-if="user.is_verified == 1"></span>
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
                                              <a @click="onLogout" to="/" class="dropdown-item" href="#">{{ $t('logout', $store.state.locale) }}</a>
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
                                <div class="dropdown-menu w-300 w-sm-400 max-h-450 overflow-auto custom-scroll position-absolute secondery-border right-20 bg-game-details text-white br-0 p-0 top-55" aria-labelledby="rating-notification">
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
        <div class="promo-notification mt-1">
            <div class="alert gamehub-warning-bg alert-dismissible fade show mb-0 br-0 text-center text-black gil-bold f-s-20 position-fixed w-100 z-index-999" role="alert">
                {{ $t('discount_notice', $store.state.locale) }}  <router-link to="/games" class="text-dark"><u>{{ $t('rent_now', $store.state.locale) }}</u></router-link>
              <button type="button" class="close opa-10 x-close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" class="x-icon"></span>
              </button>
            </div>
        </div>
        <div v-if="ratingNavModal">
            <transition name="modal">
                <div class="modal-mask rating-box-modal position-fixed top-0 left-0 w-100 h-100 m-auto z-index-9999">
                    <div class="modal-wrapper bg-black-opa overflow-auto h-100">
                        <div class="modal-dialog modal-dialog-centered h-100 mt-a-16" role="document">
                            <div class="modal-content max-500 bg-game-details border-2 border-secondery br-0">
                                <button type="button" class="close position-absolute right-20 top-20" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="ratingNavModal = false" class="close-modal">
                                        <svg class="secondery-border rounded-circle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2427 4.34315L10.0001 8.58579L5.75744 4.34315L4.34323 5.75736L8.58587 10L4.34323 14.2426L5.75744 15.6569L10.0001 11.4142L14.2427 15.6569L15.6569 14.2426L11.4143 10L15.6569 5.75736L14.2427 4.34315Z" fill="#FFD715"/>
                                    </svg>
                                    </span>
                                </button>
                                <div class="modal-body-content">
                                    <h5 class="modal-title text-secondery text-center f-s-32 mb-4" id="exampleModalLabel">{{ $t('rate_please', $store.state.locale) }}</h5>
                                    <div class="text-center w-100px h-100px mx-auto overflow-hidden rounded-circle mb-4" v-if="ratingData.value.lender_id != $store.state.user.id">
                                        <img :src="ratingData.value.lender.data.image" alt="img" class="img-fluid" v-if="ratingData.value.lender.data.image">
                                        <img src="../../assets/img/avatar.png" class="img-fluid gamehub--logo" alt="Gamehub Logo logo" v-else>
                                    </div>
                                    <div class="text-center w-100px h-100px mx-auto overflow-hidden rounded-circle mb-4" v-else>
                                        <img :src="ratingData.value.renter.data.image" alt="img" class="img-fluid" v-if="ratingData.value.renter.data.image">
                                         <img src="../../assets/img/avatar.png" class="img-fluid gamehub--logo" alt="Gamehub Logo logo" v-else>
                                    </div>
                                    <div class="text-center" v-if="ratingData.value.lender_id != $store.state.user.id">
                                        <p class="f-s-20 mb-1 gil-bold" >{{ ratingData.value.lender.data.name}} {{ ratingData.value.lender.data.last_name}}</p>
                                        <p class="gil-bold opa-8">{{ $t('Lender', $store.state.locale) }}</p>
                                    </div>
                                    <div class="text-center" v-else>
                                        <p class="f-s-20 mb-1 gil-bold" >{{ ratingData.value.renter.data.name}} {{ ratingData.value.renter.data.last_name}}</p>
                                        <p class="gil-bold opa-8">{{ $t('Renter', $store.state.locale) }}</p>
                                    </div>
                                    <div class="text-center">
                                        <p class="f-s-20 mb-1 gil-bold">{{ ratingData.value.lend.data.rent.data.game.data.name }}</p>
                                        <p class="gil-bold opa-8">{{ $t('game_name', $store.state.locale) }}</p>
                                    </div>
                                    <div class="d-flex vue-react justify-content-center align-items-center mb-5">
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
                                            <button type="submit" class="bg-secondery primary-text text-center py-2 w-100 d-block gil-medium primary-text-hover">{{ $t('submit', $store.state.locale) }}</button>
                                        </div>
                                    </form>
                                </div>
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
    import Profile from '../../components/Profile';
    export default {
        components: {VueFeedbackReaction},
        data() {
            return {
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
                user: {},
                isActive : this.$store.state.locale ?? this.$i18n.locale,
                pendingRating: [],

            }
        },
        methods: {
            ratingSubmit () {
                this.invalidRating = false;
                if (this.ratingData.rating === 0 && this.ratingData.comment === ''){
                    this.invalidRating = true;
                    return;
                }
                var config = {
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

                    this.$api.get('user/details', config).then(response =>{
                        this.user = response.data.data;
                        if (this.user.locale === '' || this.user.locale == null){
                            this.localeSet(this.isActive);
                            return;
                        }
                        this.isActive = this.user.locale;
                        this.$store.dispatch('changeLocale', this.user.locale)
                    });
                    this.navRatingCheck();
                    this.$store.watch(
                        (state)=>{
                            return this.totalItems // could also put a Getter here
                        },
                        (newValue, oldValue)=>{
                            this.totalItems = newValue;
                        },
                        //Optional Deep if you need it
                        { deep:true }
                    );
                }
                this.totalItems = 0;
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
                var auth = this.$store.getters.ifAuthenticated;
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
          clickHandler(item) {
            // event fired when clicking on the input
          },
          onSelected(item) {
            this.selected = item.item.game.data;
            this.query = this.selected.name;
            this.$router.push('/game-details/' + this.selected.slug);
          },
          onInputChange(text) {
            // event fired when the input changes
            // console.log(text)
          },
          /**
           * This is what the <input/> value is set to when you are selecting a suggestion.
           */
          getSuggestionValue(suggestion) {
            return suggestion.item.game.data.name;
          },
          focusMe(e) {
            // console.log(e) // FocusEvent
          }, 
          // totalCartItems(){
          //   let cartItems = localStorage.getItem('cartItems');
          //   if (cartItems) {
          //     let cart = JSON.parse(cartItems);
          //     this.totalItems = cart.length;
          //   }
          // },
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
          }
        },
        created() {
            this.$root.$refs.Navbar = this;
            // this.$root.$refs.Profile = Profile;
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
