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
                    </ul>
                    <div class="gamehub-input-group">
                        <div class="gamehub-input-group--content">
                            <div class="search-input-design">
                                <input type="search" class="">
                            </div>
                            <button class="btn gamehub-search-btn" type="search">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <div class="gamehub-input-group--content">
                            <a href="#">Sign in</a>
                        </div>
                        <div class="gamehub-input-group--content">
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
<!--        <nav class="navbar navbar-expand-xl navbar-light sign-in-bg">-->
<!--            <div class="container-fluid nav-width">-->
<!--                <router-link class="navbar-brand mr-5" to="/"><img src="../../assets/img/logo/logo.jpg" alt="Game-logo"></router-link>-->
<!--                <div class="toggler-pos">-->
<!--                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                        &lt;!&ndash;just add these span here&ndash;&gt;-->
<!--                        <span></span>-->
<!--                        <span></span>-->
<!--                        <span></span>-->
<!--                        <span></span>-->
<!--                        &lt;!&ndash;/end span&ndash;&gt;-->
<!--                    </button>-->
<!--                </div>-->
<!--                <div class="collapse navbar-collapse" id="exCollapsingNavbar" @click="modal = false">-->
<!--                    &lt;!&ndash; menu-list &ndash;&gt;-->
<!--                    <div class="menu-list">-->
<!--                        <ul class="navbar-nav menu-list-bottom">-->
<!--                            <li class="nav-item mr-3 for-active">-->
<!--                                <router-link class="nav-link active router_link" to="/">Home</router-link>-->
<!--                            </li>-->
<!--                            <li class="nav-item mr-3 for-active">-->
<!--                                <router-link class="router_link" to="/games">Games</router-link>-->
<!--                            </li>-->
<!--                            <li class="nav-item mr-3 for-active">-->
<!--                                <router-link class="router_link" to="/supports">Supports</router-link>-->
<!--                            </li>-->
<!--                            <li class="nav-item mr-3 for-active">-->
<!--                                <router-link class="router_link" to="/contacts">Contact us</router-link>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="search">-->
<!--                    <form class="my-2 my-lg-0 menu-search">-->
<!--                        <div class="input-group">-->
<!--                            <div class="about">-->
<!--                                <input type="text" class="form-control main-search-bar" autocomplete="off" v-model="result" @input="filterResults" @focus="modal = true">-->
<!--                                <button class="btn btn-secondary menu-search-icon" type="button" @click.prevent="searchGame">-->
<!--                                    <i class="fa fa-search "></i>-->
<!--                                </button>-->
<!--                            </div>-->
<!--                            <div v-if="filteredResults && modal" class=" z-10">-->
<!--                                <ul class="my-list">-->
<!--                                    <li v-for="filteredResult in filteredResults" @click="setResult(filteredResult.name)" class="text-black">{{ filteredResult.name }}-->
<!--                                        <hr></li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                            <router-link v-if="!auth" class="btn btn-danger ml-4 sign-in-btn" to="/login">Sign in</router-link>-->

<!--                            <div class="sign-logout ml-4">-->
<!--                                <router-link v-if="auth" class="btn btn-danger sign-in-btn" to="/profile"><span v-if="$store.state.user.name">{{ this.$store.state.user.name }}</span><span v-else>{{ this.$store.state.user.phone_number }}</span></router-link>-->
<!--                                <div class="log-out">-->
<!--                                    <a @click.prevent="onLogout" class="sign-out">-->
<!--                                        <span class="mr-2">Sign Out</span>-->
<!--                                        <i class="fas fa-sign-out-alt"></i>-->
<!--                                    </a>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div class="cart-icon ml-3">-->
<!--                                <router-link to="/add-to-cart"> <i class="material-icons text-yellow"> shopping_cart </i></router-link>-->
<!--                                <div class="badges">{{ $store.state.postId.length }}</div>-->
<!--                            </div>-->

<!--                        </div>-->
<!--                    </form>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nav>-->
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
            }
        },
        methods: {
            searchGame() {
                console.log(this.result)
                if(this.result !== '') {
                    this.$api.get('/rent-posts'+ '?include=game.assets,game.genres,platform').then(response => {
                        let games = response.data.data;
                        console.log(games);
                        var gameName = this.result;
                        let filtered = games.filter(function (data) {
                            return data.game.data.name.toLowerCase().includes(gameName.toLowerCase())
                        })
                        this.$store.commit('addToSearchResult', filtered);
                        this.$router.push('/search').catch(err => {});
                    });
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

            }
        },
        computed: {
            auth () {
                return this.$store.getters.ifAuthenticated
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
        },
        mounted() {
            this.$root.$on("loggedIn", () => {
                this.token = localStorage.getItem('token')
                this.userProfile = JSON.parse(localStorage.getItem('userProfile'))
            })
        }
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
</style>
