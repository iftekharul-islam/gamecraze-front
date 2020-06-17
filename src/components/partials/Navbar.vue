<template>
    <div>
        <!-- navbar -->
        <nav class="navbar navbar-expand-xl navbar-light">
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
                        <!-- menu-list-top -->
                        <!-- <ul class="navbar-nav menu-list-top">
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="#">Platforms</a>
                            </li>
                            <li class="nav-item dropdown mr-3">
                                <a class="nav-link dropdown-toggle" href="#" id="serviceDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Top Buyers/Sellers <i class="fas fa-chevron-down ml-1"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="serviceDropdown">
                                    <a class="dropdown-item" href="#">Game 1</a>
                                    <a class="dropdown-item" href="#">Game 2</a>
                                    <a class="dropdown-item" href="#">Game 3</a>
                                    <a class="dropdown-item" href="#">Game 4</a>
                                    <a class="dropdown-item" href="#">Game 5</a>
                                    <a class="dropdown-item" href="#">Game 6</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown mr-3">
                                <a class="nav-link dropdown-toggle" href="#" id="sitesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Trailer/Gameplay/Walkthrough <i class="fas fa-chevron-down ml-1"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="sitesDropdown">
                                    <a class="dropdown-item" href="#">Game 1</a>
                                    <a class="dropdown-item" href="#">Game 2</a>
                                    <a class="dropdown-item" href="#">Game 3</a>
                                    <a class="dropdown-item" href="#">Game 4</a>
                                    <a class="dropdown-item" href="#">Game 5</a>
                                    <a class="dropdown-item" href="#">Game 6</a>
                                </div>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="#">Latest News</a>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link" href="#">Fourm</a>
                            </li>
                            <li class="nav-item ml-auto search">
                            </li>
                        </ul> -->
                        <!-- menu-list-bottom -->
                        <ul class="navbar-nav menu-list-bottom">
                            <li class="nav-item mr-3 for-active">
                                <router-link class="nav-link active router_link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item mr-3 for-active">
                                <router-link class="router_link" to="/categories">Categories</router-link>
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
                            <router-link v-if="this.$store.state.profile" class="btn btn-danger ml-4 sign-in-btn" to="profile" style="color: white;">{{this.$store.state.profile.name}}</router-link>
                            <router-link v-else class="btn btn-danger ml-4 sign-in-btn" to="login" style="color: white;">Sign in</router-link>
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
                gameName: ''
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
            }
        },
    }
</script>

<style scoped>
    .router_link {
        color: white;
    }
</style>