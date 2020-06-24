<template>
    <div>
        <!-- Category  -->
        <section class="category sign-in-bg pt-4">
            <div class="container-fluid category-width">
                <div class="row m-0">
                    <div class="col-lg-3 col-xl-2">
                        <!-- new category -->
                        <form class="controls" id="Filters">
                            <div class="filter-category">
                                <fieldset class="mb-4 category-1">
                                    <h4>select category</h4>
                                    <div v-for="(category, index) in categories" :key="index" class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" :id="category + '-game'" :value="category" v-model="checkedCategories"/>
                                        <label class="custom-control-label" :for="category + '-game'">{{ category }}</label>
                                    </div>
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="adventure-game" value=".adventure"/>-->
<!--                                        <label class="custom-control-label" for="adventure-game">Adventure</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="arcade-game" value=".arcade"/>-->
<!--                                        <label class="custom-control-label" for="arcade-game">Arcade</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="music-game" value=".music"/>-->
<!--                                        <label class="custom-control-label" for="music-game">Music & Dance</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="racing-game" value=".racing"/>-->
<!--                                        <label class="custom-control-label" for="racing-game">Racing</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="role-playing-game" value=".role-playing"/>-->
<!--                                        <label class="custom-control-label" for="role-playing-game">Role Playing</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="simulation-game" value=".simulation"/>-->
<!--                                        <label class="custom-control-label" for="simulation-game">Simulation</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="sports-game" value=".sports"/>-->
<!--                                        <label class="custom-control-label" for="sports-game">Sports</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="strategy-game" value=".strategy"/>-->
<!--                                        <label class="custom-control-label" for="strategy-game">Strategy</label>-->
<!--                                    </div>-->
                                </fieldset>

                                <fieldset class="mb-4 category-2">
                                    <h4>select brands</h4>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="sony-game" value=".sony"/>
                                        <label class="custom-control-label" for="sony-game">Sony</label>
                                    </div>
                                    <div class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="rockstar-game" value=".rockstar"/>
                                        <label class="custom-control-label" for="rockstar-game">Rockstar Game</label>
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
                                        <label class="custom-control-label" for="ubi-soft-game">UBI Soft</label>
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
                    <div class="col-lg-9 col-xl-10">
                        <div id="category-content" class="">
                            <div class="fail-message"><span class="">No items were found matching the selected filters</span></div>

                            <div class="category-show">
                                <div v-for="(game,index) in filteredGames" :key="index">
                                    <div class="card">
                                        <router-link :to="{ name: 'GameDetails', params: {gameId: game.id }}">
                                        <img :src="$gamehubStorageApi +'games/'+ game.assets.data[0].name" class="card-img-top" alt="Fifa-20">
                                        <h4 class="game-name">{{ game.name }}</h4>
                                        </router-link>
                                        <p class="gamte-brands"><span v-for="(genre,index) in game.genres.data" :key="index">{{genre.name}}<span class="mr-1" v-if="index < game.genres.data.length-1">,</span></span></p>
                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>
                                        <p class="star">
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star star-color"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="star-color ml-3">178</span>
                                        </p>
                                        <div class="text-center category-cart">
                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->

<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="mix ea sports">-->
<!--                                    <div class="card">-->
<!--                                        <img src="../assets/img/friday.png" class="card-img-top" alt="friday">-->
<!--                                        <h4 class="game-name">Friday The 13</h4>-->
<!--                                        <p class="gamte-brands">Action</p>-->
<!--                                        <p class="pegi-ratings">PEGI Rating: Ages 3 and Over</p>-->
<!--                                        <p class="star">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <span class="star-color">178</span>-->
<!--                                        </p>-->
<!--                                        <div class="text-center category-cart">-->
<!--                                            <a href="#" class="btn btn-info">Add to Cart <i class="fas fa-cart-plus"></i></a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
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
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                games: [],
                checkedGame: '',
                categories: ['Action', 'Adventure', 'Arcade', 'Music & Dance', 'Racing', 'Role Playing', 'Simulation', 'Sports', 'Strategy'],
                checkedCategories: [],
            }
        },
        computed: {
            filteredGames(){
                if (!this.checkedCategories.length) {
                    return this.games
                }
                // console.log(this.checkedCategories)
                var checked = this.checkedCategories

                return this.games.filter(function (game) {
                    var genres= []

                    for (var genre of game.genres.data) {
                        genres.push(genre.name)
                    }
                    return checked.some(r => genres.includes(r))
                })
            }
        },
        methods: {

        },
        created() {
            this.$api.get('games?include=assets,genres,platforms').then(response => {
                this.games = response.data.data
                console.log(this.games);
            });
        }
    }
</script>