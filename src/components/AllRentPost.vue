<template>
    <div>
        <div class="game-page sign-in-bg pt-3">
            <div class="container-fluid game-page-width pb-5">
                  <div class="row m-0">
                    <div class="col-md-3 col-xl-2 mb-3">
                        <!-- new category -->
                        <form class="controls" id="Filters">
                            <div class="filter-category">
                                <fieldset class="mb-4 category-1">
                                    <h4>select category</h4>
<!--                                    <div v-for="(category, index) in categories" :key="index" class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" :id="category + '-game'" :value="category" v-model="checkedCategories"/>-->
<!--                                        <label class="custom-control-label" :for="category + '-game'">{{ category }}</label>-->
<!--                                    </div>-->
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="adventure-game" value=".adventure"/>
                                        <label class="custom-control-label" for="adventure-game">Adventure</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="arcade-game" value=".arcade"/>
                                        <label class="custom-control-label" for="arcade-game">Arcade</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="music-game" value=".music"/>
                                        <label class="custom-control-label" for="music-game">Music & Dance</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="racing-game" value=".racing"/>
                                        <label class="custom-control-label" for="racing-game">Racing</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="role-playing-game" value=".role-playing"/>
                                        <label class="custom-control-label" for="role-playing-game">Role Playing</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="simulation-game" value=".simulation"/>
                                        <label class="custom-control-label" for="simulation-game">Simulation</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="sports-game" value=".sports"/>
                                        <label class="custom-control-label" for="sports-game">Sports</label>
                                  </div>
                                   <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="strategy-game" value=".strategy"/>
                                        <label class="custom-control-label" for="strategy-game">Strategy</label>
                                    </div> 
                                </fieldset>

                                <fieldset class="mb-4 category-2">
                                    <h4>select brands</h4>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="sony-game" value=".sony"/>
                                        <label class="custom-control-label" for="sony-game">Sony</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="rockstar-game" value=".rockstar"/>
                                        <label class="custom-control-label" for="rockstar-game">Rockstar Games</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="ea-game" value=".ea"/>
                                        <label class="custom-control-label" for="ea-game">EA</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="2k-game" value=".2k"/>
                                        <label class="custom-control-label" for="2k-game">2k Games</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="electronic-game" value=".electronic"/>
                                        <label class="custom-control-label" for="electronic-game">Electronic Arts</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="activision-game" value=".activision"/>
                                        <label class="custom-control-label" for="activision-game">Activision </label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="ubi-soft-game" value=".ubi-soft"/>
                                        <label class="custom-control-label" for="ubi-soft-game">Ubisoft</label>
                                    </div>
                                </fieldset>

                                <fieldset class="mb-4 category-3">
                                    <h4>PEGI Rating</h4>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="3-yrs-game" value=".3-yrs"/>
                                        <label class="custom-control-label" for="3-yrs-game">3 years and over</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="7-yrs-game" value=".7-yrs"/>
                                        <label class="custom-control-label" for="7-yrs-game">7 years and over</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="16-yrs-game" value=".16-yrs"/>
                                        <label class="custom-control-label" for="16-yrs-game">16 years and over</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="18-yrs-game" value=".18-yrs"/>
                                        <label class="custom-control-label" for="18-yrs-game">18 years and over</label>
                                    </div>
                                </fieldset>

                                <fieldset class="mb-4 category-4">
                                    <h4>Avg. Customer Review</h4>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="1str-game" value=".1str"/>
                                        <label class="custom-control-label" for="1str-game">
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            & up
                                        </label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="2str-game" value=".2str"/>
                                        <label class="custom-control-label" for="2str-game">
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            & up
                                        </label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="3str-game" value=".3str"/>
                                        <label class="custom-control-label" for="3str-game">
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            & up
                                        </label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="4str-game" value=".4str"/>
                                        <label class="custom-control-label" for="4str-game">
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star"></i>
                                            & up
                                        </label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="5str-game" value=".5str"/>
                                        <label class="custom-control-label" for="5str-game">
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            & up
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <button class="cate-reset" id="Reset">Clear Filters</button>
                        </form>
                    </div>
                    <div class="col-md-9 col-xl-10">
                        <div class="game-content">
                            <div class="game-show">
                                <!-- Game Content -->
                                <div class="row">
                                    <div class="col-sm-6 col-lg-4 col-xl-3 mb-4" v-for="(rent, index) in rents" :key="index">
                                        <div class="card game-card">
                                            <img class="card-img-top img-fix-size" :src="rent.game.data.assets.data[0].url" :alt="rent.game.data.name " v-if="rent.game.data.assets.data.length">
                                            <img class="card-img-top img-fix-size" src="../assets/img/rented/grid.png" alt="Grid" v-else>
                                            <h4 class="game-name name-height">EA  SPORTS <span></span>{{rent.game.data.name}}</h4>
                                            <p class="game-brands">Sports</p>
                                            <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>
                                            <p class="star">
                                                <i class="fas fa-star star-color"></i>
                                                <i class="fas fa-star star-color"></i>
                                                <i class="fas fa-star star-color"></i>
                                                <i class="fas fa-star star-color"></i>
                                                <i class="fas fa-star"></i>
                                                <span class="star-color ml-2">178</span>
                                            </p>
                                            <div class="text-center game-cart">
                                                <router-link class="btn btn-info" :to="{ path: 'rent-view/' + rent.id + '/' + rent.game.data.slug}" v-bind:tooltip="rent.id" append>Read more</router-link>
<!--                                                <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
                                            </div>
                                         </div>
                                    </div>
                                 </div>
                            </div>
                            <!-- pagination -->
                            <nav aria-label="Page navigation example" class="category-pagi">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rents: []
            }
        },
        created() {
            this.$api.get('rent-posts?include=game.assets').then(response => {
                var vm = this;
                vm.rents = response.data.data;
                console.log(vm.rents);
            });
        }
    }
</script>

<style scoped>
    .container {
        margin: 50px auto;
    }
    .box {
        width: 100%;
        overflow: hidden;
        border: 1px solid red;
    }

    .box-item {
        width: 31%;
        height: 400px;
        float: left;
        padding: 15px;
        border: 1px solid green;
        margin: 10px;
    }

    .box-item h4 {
        text-align: center;
    }
    .img-fix-size {
        height: 121px
    }
    .name-height {
        height: 90px
    }
</style>