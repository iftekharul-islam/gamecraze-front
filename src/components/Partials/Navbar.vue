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
                            <router-link class="router_link" to="/support">Supports</router-link>
                        </li>
                        <li>
                            <router-link class="router_link" to="/contacts">Contact us</router-link>
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
                                  :input-props="{id:'autosuggest__input', placeholder:'Game Name'}">
                                <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                  <div style="{ display: 'flex', color: 'white'}">{{suggestion.item.name}}</div>
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
                                 <img src="../../assets/img/sss.jpg" alt="profile" class="img-fluid">
                                            <div class="dropdown-menu gamehub-dropdown-menu">
                                                <router-link to="/profile" class="dropdown-item" href="#">Profile</router-link>
                                                <router-link to="/profile" class="dropdown-item" href="#">My Account</router-link>
                                                <a @click="onLogout" to="" class="dropdown-item" href="#">Log out</a>
                                            </div>
                                </div>
                                        
                        </div>
                        <div class="gamehub-input-group--content">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
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
            searchGame() {
                console.log(this.result)
                if(this.query !== '') {
                    // this.$api.get('/rent-posts'+ '?include=game.assets,game.genres,platform').then(response => {
                    //     let games = response.data.data;
                    //     console.log(games);
                    //     var gameName = this.result;
                    //     let filtered = games.filter(function (data) {
                    //         return data.game.data.name.toLowerCase().includes(gameName.toLowerCase())
                    //     })
                    //     this.$store.commit('addToSearchResult', filtered);
                    //     this.$router.push('/search').catch(err => {});
                    // });
                  this.$router.push({name: 'games', query: {categories: this.$route.query.categories, platforms: this.$route.query.platforms, search: this.query}})
                  this.$root.$emit('searchEvent')
                }
                else {
                  this.$router.push({name: 'games', query: {categories: this.$route.query.categories, platforms: this.$route.query.platforms}})
                  this.$root.$emit('searchEvent')
                }
            },filterResults() {
                 this.filteredResults = this.results.filter(result => {
                     return result.name.toLowerCase().startsWith(this.result.toLowerCase())
                });
            },setResult(result) {
                this.result = result;
                this.modal = false;
            },
            onLogout() {
                // this.$store.dispatch('clearCart');
                this.$store.dispatch('logout');
                this.$store.state.postId = [];
                console.log(this.$store.state.postId, 'postId');

            },
          clickHandler(item) {
            // event fired when clicking on the input
          },
          onSelected(item) {
            this.selected = item.item;
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
    .router_link {
        color: white;
    }
    .about {
        display: flex;
    }
    .main-search-bar {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        background: #2d2061;
        border-color: #2d2061;
        color: #ffffff !important;
        padding-left: 20px;
        -webkit-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
    }
    .menu-search-icon {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        background: #fcd700;
        border-color: #fcd700;
        width: 20%;
        -webkit-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
    }
    .my-postion {
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .my-list {
        position: absolute;
        left: 0;
        background: #fcd700;
        top: 44px;
        z-index: 10;
        width: 244px;
        padding: 0;

    }
    .demo {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    input {
      width: 260px;
      padding: 0.5rem;
    }

    ul {
      width: 100%;
      color: rgba(30, 39, 46,1.0);
      list-style: none;
      margin: 0;
      padding: 0.5rem 0 .5rem 0;
    }
    li {
      margin: 0 0 0 0;
      border-radius: 5px;
      padding: 0.75rem 0 0.75rem 0.75rem;
      display: flex;
      align-items: center;
    }
    li:hover {
      cursor: pointer;
    }

    .autosuggest-container {
      display: block;
      justify-content: center;
      width: 280px;
    }

    #autosuggest { width: 100%; display: block;}
    .autosuggest__results-item--highlighted {
      background-color: rgba(51, 217, 178,0.2);
    }
</style>
