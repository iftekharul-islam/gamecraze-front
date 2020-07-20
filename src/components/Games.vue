<template>
    <div>
        <!-- <div class="container">
            <div class="box">
                <div class="box-item" v-for="(game,index) in games" :key="index">
                    <h4>{{game.name}}</h4>
                    <p>Description: {{game.description}}</p>
                    <p>Genres: <span v-for="(genre,index) in game.genres.data" :key="index">{{genre.name}}</span></p>
                    <p>Release Date: {{game.release_date}}</p>
                    <p>Publisher: {{game.publisher}}</p>
                    <p>Rating: {{game.rating}}</p>
                </div>
            </div>
        </div> -->

        <div class="game-page sign-in-bg pt-3">
            <div class="container-fluid game-page-width pb-5">
                  <div class="row m-0">
                    <div class="col-md-3 col-xl-2 mb-3">
                        <!-- new category -->
                        <form class="controls" id="Filters">
                            <div class="filter-category">
                                <fieldset class="mb-4 category-1">
                                    <h4>select category</h4>
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
                            <!-- <div class="fail-message"><span class="">No items were found matching the selected filters</span></div> -->
                            <div class="game-show">
                                <!-- Game Content -->
                                <div class="row">
                                        <div v-for="(rent, index) in rents" :key="index" class="col-sm-6 col-lg-4 col-xl-3 mb-4">
                                            <div class="card game-card">
                                                    <img src="../assets/img/release/fifa.jpg" class="card-img-top" alt="Fifa-20">
                                                    <h4 class="game-name">{{ rent.game.data.name }}</h4>
                                                    <p class="game-brands">Sports</p>
                                                    <p class="pegi-ratings">Rating: {{ rent.game.data.rating }}</p>
                                                    <p class="star">
                                                        <i class="fas fa-star star-color"></i>
                                                        <i class="fas fa-star star-color"></i>
                                                        <i class="fas fa-star star-color"></i>
                                                        <i class="fas fa-star star-color"></i>
                                                        <i class="fas fa-star"></i> 
                                                        <span class="star-color ml-2">178</span>
                                                    </p>
                                                    <div class="text-center game-cart">
                                                        <router-link :to="{ path: '/game-details/' + rent.id}" class="btn btn-info">Details<i class="fa fa-info-circle ml-2" aria-hidden="true"></i></router-link>
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
                this.rents = response.data.data;
                console.log(this.rents)
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
</style>
