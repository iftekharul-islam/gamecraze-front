<template>
    <div>
        <!-- search results -->
        <section class="search-results">
            <div class="container-fluid search-results-width">
                <div class="row mb-4">
                    <div class="col-md-6 offset-md-3">
                        <form action="#" class="searchbar-big">
                            <!-- search bar big -->
                            <div class="input-group-append">
                                <input type="search" class="form-control menu-search-input" placeholder="Search Game Name...">
                                <button class="btn btn-secondary menu-search-icon" type="button">
                                    <i class="fa fa-search "></i>
                                </button>
                            </div>
                            <!-- ens search bar -->
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="search-title">
                            <h3>Your search Results</h3>
                        </div>
                        <div class="search-list">
                            <p><small>You have 0 results found...</small></p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="game-filter">
                            <h3>Search by Filter</h3>
                            <!-- filter option -->
                            <div class="dropdown" data-control="checkbox-dropdown">
                                <label class="dropdown-label" data-toggle="tooltip" data-placement="top" title="click to filter"></label>
                                <div class="dropdown-list">
                                    <a href="#" data-toggle="check-all" class="dropdown-option">
                                        Check All
                                    </a>
                                    <ul id="filter-options">
                                        <li><input class="filter-check" type="checkbox" value="filter_rented selection 1" data-filter_id="rented"> Rented</li>
                                        <li><input class="filter-check" type="checkbox" value="filter_selling" data-filter_id="selling"> Selling</li>
                                        <li><input class="filter-check" type="checkbox" value="filter_release" data-filter_id="release"> New Realese</li>
                                        <li><input class="filter-check" type="checkbox" value="filter_upcoming" data-filter_id="upcoming"> Up Coming</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- end filter option -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end search results -->
        <!-- search  -->
        <section class="search-ing sign-in-bg">
            <div class="container-fluid search-width" id="">
                <div class="row">
                    <div class="col-12">
                        <ul id="product-list" class="row">
                            <li class="col-sm-6 col-md-3 filter_rented mb-4" v-for="(game,index) in searchResult" :key="index">
                                <div class="card">
                                    <a href="#"><img v-if="game.assets.data" :src="$backendPath+'games/'+game.assets.data[0].name" alt="doom" class="img-fluid img-effect">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {

            }
        },
        computed: {
            searchResult() {
                return this.$store.getters.getSearchResult
            }
        }
    }
</script>