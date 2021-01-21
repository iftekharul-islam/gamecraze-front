<template>
    <div>
<!--        <div class="my-postion" @click="modal = false"></div>-->
        <!-- navbar -->
        <nav class="navbar navbar-expand-lg gamehub-menu fixed-top">
            <div class="container">
                <!-- logo -->
                <a class="navbar-brand" href="/">
                    <img src="../../assets/img/logo/gamehublogo.svg" class="img-fluid gamehub--logo" alt="Gamehub Logo logo">
                </a>

                <!-- Toggle button for small device -->
                <div class="toggler-position">
                    <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse custom-collapse gamehub-menu-collapse" id="navbarSupportedContent" @click="modal = false">
                    <ul class="">
                        <li class="active">
                            <router-link class="nav-link active router_link" to="/">Home<span class="sr-only">(current)</span></router-link>
                        </li>
                        <li>
                            <router-link class="router_link" to="/games">Games</router-link>
                        </li>
                        <li>
                            <router-link class="router_link" to="/profile" @click.native="clickProfile()">Post For Rent</router-link>
                        </li>
                        <li>
                            <router-link class="router_link" to="/notice-board">Notice Board</router-link>
                        </li>
                    </ul>
                    <div class="gamehub-input-group">
                        <div class="gamehub-input-group--content">

                            <div class="search-input-design">
                              <vue-autosuggest
                                  v-model="query"
                                  :suggestions="filteredOptions"
                                  @focus="focusMe"
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
                        </div>
                        <div class="gamehub-input-group--content">
                            <router-link v-if="!auth" class="sign-in" to="/login"><span>Sign in</span></router-link>
                                <div v-if="auth" class="dropdown-toggle complete-sign-in" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><span v-if="$store.state.user.name">{{ this.$store.state.user.name }}</span><span v-else>{{ this.$store.state.user.phone_number }}</span>
                                 <img v-if="$store.state.user.image" :src="$store.state.user.image" alt="profile" class="">
                                 <img v-else src="../../assets/img/sss.jpg" alt="profile" class="">
                                            <div class="dropdown-menu gamehub-dropdown-menu">
                                                <div class="gamehub-dropdown-menu--top">
                                                  <router-link to="/profile" class="dropdown-item" href="#">Profile</router-link>
                                                  <router-link to="/profile" class="dropdown-item" @click.native="clickProfile()">Post For Rent</router-link>
                                                  <router-link to="/support" class="dropdown-item" href="#">Support</router-link>
                                                  <router-link to="/contacts" class="dropdown-item" href="#">Contact Us</router-link>
                                                </div>
                                                <div class="gamehub-dropdown-menu--bottom">
                                                  <a @click="onLogout" to="" class="dropdown-item" href="#">Log out</a>
                                                </div>
                                            </div>
                                </div>
                                        
                        </div>
                        <div class="gamehub-input-group--content">
                            <router-link to="/cart"><i class="fas fa-shopping-cart"><span class="badge gamehub-badge navbar-badge">{{ $store.state.postId.length }}</span></i></router-link>

                        </div>

                        
                    </div>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        data() {
            return {
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
            }
        },
        methods: {
          clickProfile() {
            this.$root.$emit('rentPost');
          },
            searchGame() {
                console.log(this.result)
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
            this.selected = item.item;
            this.query = this.selected.name;
            this.$router.push('/game-details/' + this.selected.id);
          },
          onInputChange(text) {
            // event fired when the input changes
            console.log(text)
          },
          /**
           * This is what the <input/> value is set to when you are selecting a suggestion.
           */
          getSuggestionValue(suggestion) {
            return suggestion.item.name;
          },
          focusMe(e) {
            console.log(e) // FocusEvent
          }
        },
        computed: {
            auth () {
                return this.$store.getters.ifAuthenticated
            },
          filteredOptions() {
            return [
              {
                data: this.games.filter(option => {
                  return option.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                })
              }
            ];
          }
        },
        created() {
            this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
            this.$api.get('rent-posts?include=platform,game.assets,game.genres').then(response => {
                this.rents = response.data.data;
                console.log(this.rents, 'rents')
                const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
                this.$api.get('rent-games/?ids=' + uniqueArr + '&include=assets,genres,platforms').then(resp => {
                    this.results = resp.data.data;
                    console.log(this.results, 'results');
                })
                console.log(uniqueArr)
            });
            this.$api.get('games?include=platforms')
                .then(response =>
                {
                  this.games = response.data.data;
                })

            this.$root.$on('clearSearchKey', () => {
              this.query = '';
            })
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
