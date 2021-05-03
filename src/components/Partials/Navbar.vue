<template>
    <div>
        <!-- navbar -->
        <nav class="navbar navbar-expand-lg gamehub-menu fixed-top">
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
                            <router-link class="router_link no-after" to="#">{{ $t('more', $store.state.locale)}}</router-link>
                                <div class="dropdown--sub-menu p-0">
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
                            <span v-if="lang == 'bn'" v-bind:class="{ active: isActiveBn }">বাংলা</span>
                            <span v-if="lang == 'en'" v-bind:class="{ active: isActiveEn }">English</span>
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
                                <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                  {{suggestion.item.game.data.name}}
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
                            <router-link v-if="!auth" class="sign-in" to="/login"><span>Sign in</span></router-link>
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
                                                  <router-link to="/profile" class="dropdown-item" href="#">{{ $t('dashboard', $store.state.locale) }}</router-link>
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
                {{ $t('discount_notice', $store.state.locale) }}<router-link to="/games" class="text-dark"><u> {{ $t('rent_now', $store.state.locale) }}</u></router-link>
              <button type="button" class="close opa-10 x-close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true" class="x-icon"></span>
              </button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                isActiveBn: false,
                isActiveEn: false,

            }
        },
        methods: {
            languageChange(value) {

                this.lang = value;
                this.activeLanguage(value);
            },
            activeLanguage(value){
                this.isActiveBn = false;
                this.isActiveEn = false;
                if (value == 'en') {
                    this.isActiveEn = true;
                } else {
                    this.isActiveBn = true;
                }
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
                        this.activeLanguage(this.user.locale);
                        this.$store.dispatch('changeLocale', this.user.locale)
                    });

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
            localChange(value){
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
                    console.log('get value');
                    console.log(this.$store.state.locale);
                    return this.$store.state.locale
                },
                set: function(newVal) {
                    console.log('set value');
                    console.log(newVal);
                    this.$store.dispatch('changeLocale', newVal)
                    this.localChange(newVal);
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
