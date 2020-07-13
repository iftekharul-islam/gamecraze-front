<template>
    <div>
        <!-- navbar -->
        <nav class="navbar navbar-expand-xl navbar-light sign-in-bg ">
            <div class="container-fluid nav-width">
                <router-link class="navbar-brand mr-5" to="/"><img src="../../assets/img/logo/logo.jpg" alt="Game-logo"></router-link>
                <div class="toggler-pos">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <!--just add these span here-->
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <!--/end span-->
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="exCollapsingNavbar">
                    <!-- menu-list -->
                    <div class="menu-list">
                        <ul class="navbar-nav menu-list-bottom">
                            <li class="nav-item mr-3 for-active">
                                <router-link class="nav-link active router_link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item mr-3 for-active">
                                <router-link class="router_link" to="games">Games</router-link>
                            </li>
                            <li class="nav-item mr-3 for-active">
                                <router-link class="router_link" to="supports">Supports</router-link>
                            </li>
                            <li class="nav-item mr-3 for-active">
                                <router-link class="router_link" to="contacts">Contact us</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="search">
                    <form class="my-2 my-lg-0 menu-search">
                        <div class="input-group">
                            <div class="input-group-append">
                                <input type="search" class="form-control menu-search-input" placeholder="Search Game Name" v-model="gameName">
                                <button class="btn btn-secondary menu-search-icon" type="button" @click.prevent="searchGame">
                                    <i class="fa fa-search "></i>
                                </button>
                            </div>
                            <router-link v-if="!auth" class="btn btn-danger ml-4 sign-in-btn" to="login">Sign in</router-link>
                            <div class="sign-logout ml-4">
                                <router-link v-if="auth" class="btn btn-danger sign-in-btn" to="profile"><span v-if="$store.state.user.name">{{ this.$store.state.user.name }}</span><span v-else>{{ this.$store.state.user.phone_number }}</span></router-link>
                                <div class="log-out">
                                    <a @click.prevent="onLogout" class="sign-out">
                                        <span class="mr-2">Sign Out</span>
                                        <i class="fas fa-sign-out-alt"></i>
                                    </a>
                                </div>
                            </div>
<!--                            <router-link v-if="this.$store.state.profile" class="btn btn-danger ml-4 sign-in-btn" to="profile" style="color: white;">{{this.$store.state.profile.name}}</router-link>-->
<!--                            <router-link v-else class="btn btn-danger ml-4 sign-in-btn" to="login" style="color: white;">Sign in</router-link>-->
                        </div>
                    </form>
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
                token: ''
            }
        },
        methods: {
            searchGame() {
                if(this.gameName !== '') {
                    this.$api.get('search/'+ this.gameName+'?include=assets').then(response => {
                        this.$store.commit('addToSearchResult', response.data.data);
                        this.$router.push('/search').catch(err => {});
                    });
                }
            },
            onLogout() {
                this.$store.dispatch('logout')
            }
        },
        computed: {
            auth () {
                return this.$store.getters.ifAuthenticated
            }
        },
        created() {
            this.userProfile = JSON.parse(localStorage.getItem('userProfile'))
        },
        mounted() {
            this.$root.$on("loggedIn", () => {
                this.token = localStorage.getItem('token')
                console.log(localStorage.getItem('userProfile'));
                this.userProfile = JSON.parse(localStorage.getItem('userProfile'))
            })
        }
    }
</script>

<style scoped>
    .router_link {
        color: white;
    }
</style>
