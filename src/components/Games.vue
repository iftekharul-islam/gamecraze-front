<template>
    <div>
        <!-- games & categories -->
        <section class="games-categories-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-3 mb-5">
                      <div class="text-right">
                            <button id="btn--filter" class="btn--filter"  v-on:click="toggleMenu()">
                                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="40" height="35"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="22" y2="498"><stop offset="0" stop-color="#00efd1"/><stop offset="1" stop-color="#00acea"/></linearGradient><path d="m412.943 69h-313.886c-5.523 0-10.057 4.936-10.057 10.458v64.164c0 .326.046.65.077.972.014.146.055.288.075.432.024.17.052.341.085.51s.083.344.126.515c.033.135.066.27.105.4.052.177.115.35.177.523.044.124.087.249.136.371.068.168.143.331.219.494.059.124.116.249.179.371.079.152.164.3.25.448.074.127.15.254.23.379s.18.267.274.4.185.254.283.378.2.24.3.357c.057.066.176.138.237.2l114.247 124.683v157.487a9.939 9.939 0 0 0 5.739 9.078 9.839 9.839 0 0 0 4.158.922 9.948 9.948 0 0 0 6.467-2.386l80.194-68.334a9.926 9.926 0 0 0 3.442-7.614v-89.153l114.25-124.679c.061-.065.146-.137.2-.2.1-.117.217-.235.314-.357s.2-.25.291-.378.19-.263.277-.4.159-.252.233-.379c.086-.148.172-.3.251-.448.063-.122.121-.247.18-.371.075-.163.15-.326.218-.494.05-.122.092-.247.136-.371.062-.173.124-.346.176-.523.039-.133.07-.268.1-.4.043-.171.088-.341.121-.515s.055-.34.078-.51c.021-.144.076-.286.09-.432.031-.322.077-.646.077-.972v-64.168c.008-5.522-4.526-10.458-10.049-10.458zm-124.25 195.6a9.6 9.6 0 0 0 -2.693 6.568v88.42l-60 51.312v-139.732a9.6 9.6 0 0 0 -2.693-6.565l-101.532-110.603h268.45zm114.307-130.6h-294v-45h294z" fill="url(#a)"/>
                                    </svg><span>Filter</span> 
                            </button>
                      </div>
                        <div v-if="isHidden" class="games-categories-section--categories" id="games-categories-list">
                            <!-- select categories -->
                            <div class="select-categories">
                                <h6>Select Category</h6>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="categories1">
                                    <label class="custom-control-label" for="categories1">Action</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="categories2">
                                    <label class="custom-control-label" for="categories2">Adventure</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="categories3">
                                    <label class="custom-control-label" for="categories3">Strategy</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="categories4">
                                    <label class="custom-control-label" for="categories4">RPG</label>
                                </div>
                            </div>
                            <!-- platform -->
                            <div class="select-platforms">
                                <h6>Select Platforms</h6>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="platform1">
                                    <label class="custom-control-label" for="platform1">PS4</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="platform2">
                                    <label class="custom-control-label" for="platform2">PS3</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="platform3">
                                    <label class="custom-control-label" for="platform3">Nintendo</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="platform4">
                                    <label class="custom-control-label" for="platform4">Xbox</label>
                                </div>
                            </div>
                            <div class="clear">
                                <a href="#" class="clear-filters" id="clear-filters">Clear Filters</a>
                                <a href="#" class="clear-filters d-block d-sm-none" id="filter-apply">Apply</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-9 mb-5">
                        <div class="games-categories-section--games">
                            <div class="row">
                                <div class="col-md-6 col-lg-4 mb-5">
                                    <div class="game-card">
                                        <a class="display-image" href="#">
                                            <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                                        </a>
                                        <a href="#"> <h6>REALM ROYALE</h6></a>
                                        <div class="d-flex">
                                            <a href="#">Action</a><span class="mr-2">,</span>
                                            <a href="#">Adventure</a>
                                        </div>
                                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                            <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                            <span class="game-rating">71</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mb-5">
                                    <div class="game-card">
                                        <a class="display-image" href="#">
                                            <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                                        </a>
                                        <a href="#"> <h6>REALM ROYALE</h6></a>
                                        <div class="d-flex">
                                            <a href="#">Action</a><span class="mr-2">,</span>
                                            <a href="#">Adventure</a>
                                        </div>
                                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                            <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                            <span class="game-rating">71</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mb-5">
                                    <div class="game-card">
                                        <a class="display-image" href="#">
                                            <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                                        </a>
                                        <a href="#"> <h6>REALM ROYALE</h6></a>
                                        <div class="d-flex">
                                            <a href="#">Action</a><span class="mr-2">,</span>
                                            <a href="#">Adventure</a>
                                        </div>
                                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                            <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                            <span class="game-rating">71</span>
                                        </div>

                                    </div>
                                </div>
                                <!--  -->
                                <div class="col-md-6 col-lg-4 mb-5">
                                    <div class="game-card">
                                        <a class="display-image" href="#">
                                            <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                                        </a>
                                        <a href="#"> <h6>REALM ROYALE</h6></a>
                                        <div class="d-flex">
                                            <a href="#">Action</a><span class="mr-2">,</span>
                                            <a href="#">Adventure</a>
                                        </div>
                                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                            <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                            <span class="game-rating">71</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mb-5">
                                    <div class="game-card">
                                        <a class="display-image" href="#">
                                            <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                                        </a>
                                        <a href="#"> <h6>REALM ROYALE</h6></a>
                                        <div class="d-flex">
                                            <a href="#">Action</a><span class="mr-2">,</span>
                                            <a href="#">Adventure</a>
                                        </div>
                                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                            <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                            <span class="game-rating">71</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mb-5">
                                    <div class="game-card">
                                        <a class="display-image" href="#">
                                            <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                                        </a>
                                        <a href="#"> <h6>REALM ROYALE</h6></a>
                                        <div class="d-flex">
                                            <a href="#">Action</a><span class="mr-2">,</span>
                                            <a href="#">Adventure</a>
                                        </div>
                                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                            <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                            <span class="game-rating">71</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<!--        <div class="game-page sign-in-bg pt-3">-->
<!--            <div class="container-fluid game-page-width pb-5">-->
<!--                  <div class="row m-0">-->
<!--                    <div class="col-md-3 col-xl-2 mb-3">-->
<!--                        &lt;!&ndash; new category &ndash;&gt;-->
<!--                        <form class="controls" id="Filters">-->
<!--                            <div class="filter-category">-->
<!--                                <fieldset class="mb-4 category-1">-->
<!--                                    <h4>select category</h4>-->
<!--                                    <div v-for="(category, index) in categories" :key="index" class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" :id="category.name + '-game'" :value="category.name" v-model="checkedCategories"/>-->
<!--                                        <label class="custom-control-label" :for="category.name + '-game'">{{ category.name }}</label>-->
<!--                                    </div>-->
<!--                                </fieldset>-->

<!--                                <fieldset class="mb-4 category-2">-->
<!--                                    <h4>select platforms</h4>-->
<!--                                    <div v-for="(platform, index) in platforms" :key="index" class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" :id="platform.name + '-game'" :value="platform.name" v-model="checkedPlatforms"/>-->
<!--                                        <label class="custom-control-label" :for="platform.name + '-game'">{{ platform.name }}</label>-->
<!--                                    </div>-->
<!--                                </fieldset>-->

<!--&lt;!&ndash;                                <fieldset class="mb-4 category-3">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <h4>PEGI Rating</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="3-yrs-game" value=".3-yrs"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="3-yrs-game">3 years and over</label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="7-yrs-game" value=".7-yrs"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="7-yrs-game">7 years and over</label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="16-yrs-game" value=".16-yrs"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="16-yrs-game">16 years and over</label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="18-yrs-game" value=".18-yrs"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="18-yrs-game">18 years and over</label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </fieldset>&ndash;&gt;-->

<!--&lt;!&ndash;                                <fieldset class="mb-4 category-4">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <h4>Avg. Customer Review</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="1str-game" value=".1str"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="1str-game">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            & up&ndash;&gt;-->
<!--&lt;!&ndash;                                        </label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="2str-game" value=".2str"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="2str-game">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            & up&ndash;&gt;-->
<!--&lt;!&ndash;                                        </label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="3str-game" value=".3str"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="3str-game">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            & up&ndash;&gt;-->
<!--&lt;!&ndash;                                        </label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="4str-game" value=".4str"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="4str-game">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            & up&ndash;&gt;-->
<!--&lt;!&ndash;                                        </label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="checkbox custom-control custom-checkbox">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <input type="checkbox" class="custom-control-input" id="5str-game" value=".5str"/>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <label class="custom-control-label" for="5str-game">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <i class="fas fa-star star-color"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                                            & up&ndash;&gt;-->
<!--&lt;!&ndash;                                        </label>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </fieldset>&ndash;&gt;-->
<!--                            </div>-->
<!--                            <button class="cate-reset" id="Reset">Clear Filters</button>-->
<!--                        </form>-->
<!--                    </div>-->
<!--                    <div class="col-md-9 col-xl-10">-->
<!--                        <div class="game-content">-->
<!--                            &lt;!&ndash; <div class="fail-message"><span class="">No items were found matching the selected filters</span></div> &ndash;&gt;-->
<!--                            <div class="game-show">-->
<!--                                &lt;!&ndash; Game Content &ndash;&gt;-->
<!--                                <div class="row">-->
<!--                                    <div v-for="(rent, index) in filteredCategory" :key="index" class="col-sm-6 col-lg-4 col-xl-3 mb-4">-->
<!--                                      <router-link :to="{ path: '/rent-posted-users/' + rent.game.data.id}">-->
<!--                                        <div class="card game-card">-->
<!--                                            <img class="card-img-top" :src="rent.game.data.assets.data[0].url" :alt="rent.game.data.name " v-if="rent.game.data.assets.data.length">-->
<!--                                            <img src="../assets/img/release/fifa.jpg" class="card-img-top" alt="Fifa-20" v-else>-->
<!--                                            <h4 class="game-name">{{ rent.game.data.name }}</h4>-->
<!--                                            <p class="game-brands"><span v-for="(genre,index) in rent.game.data.genres.data" :key="index" >{{ genre.name }}<span v-if="index < rent.game.data.genres.data.length-1">, </span></span></p>-->
<!--                                            <p class="metacritic-rating">{{ rent.game.data.rating }}</p>-->
<!--&lt;!&ndash;                                            <p class="star">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <star-rating :rating="parseFloat(rent.game.data.rating)" :read-only="true" :increment="0.01" :show-rating="false" :star-size="30"></star-rating>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </p>&ndash;&gt;-->
<!--                                         </div>-->
<!--                                      </router-link>-->
<!--                                    </div>-->
<!--                                 </div>-->
<!--                            </div>-->
<!--                            &lt;!&ndash; pagination &ndash;&gt;-->
<!--                            <nav aria-label="Page navigation example" class="category-pagi">-->
<!--                                <ul class="pagination">-->
<!--                                    <li class="page-item">-->
<!--                                        <a class="page-link" href="#" aria-label="Previous">-->
<!--                                            <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                    <li class="page-item"><a class="page-link" href="#">1</a></li>-->
<!--                                    <li class="page-item"><a class="page-link" href="#">2</a></li>-->
<!--                                    <li class="page-item"><a class="page-link" href="#">3</a></li>-->
<!--                                    <li class="page-item">-->
<!--                                        <a class="page-link" href="#" aria-label="Next">-->
<!--                                            <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>-->
<!--                                        </a>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </nav>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    export default {
        data() {
            return {
                games: [],
                rents: [],
                checkedGame: '',
                categories: [],
                platforms: [],
                checkedPlatforms: [],
                checkedCategories: [],
                isHidden: false
            }
        },
        components: {
            StarRating
        },
        computed: {
            filteredCategory(){
                if (this.checkedCategories.length) {
                    let newRents = [];

                    this.rents.forEach( rent => {
                      let existing = newRents.find(item => item.game_id == rent.game_id);

                      if(!existing) {
                        newRents.push(rent);
                      }

                    });

                    var checkedCat = this.checkedCategories
                    var categoryByGenre = newRents.filter(function (rent) {
                      var genres= []
                      for (var genre of rent.game.data.genres.data) {
                        genres.push(genre.name)
                      }
                      return checkedCat.some(r => genres.includes(r))
                    })

                    if (this.checkedPlatforms.length) {
                      var checkedPlat = this.checkedPlatforms
                      var rents = this.rents
                      return categoryByGenre.filter(function (rent) {
                        var platforms= []
                        platforms.push(rent.platform.data.name)
                        return checkedPlat.some(r => platforms.includes(r))
                      })
                    }
                    return categoryByGenre;
                }
                if (this.checkedPlatforms.length) {
                    checkedPlat = this.checkedPlatforms
                    rents = this.rents
                    return this.rents.filter(function (rent) {
                      var platforms= []
                      platforms.push(rent.platform.data.name)
                      return checkedPlat.some(r => platforms.includes(r))
                    })
                }

                let newRents = [];

                this.rents.forEach( rent => {
                  let existing = newRents.find(item => item.game_id == rent.game_id);

                  if(!existing) {
                    newRents.push(rent);
                  }

                });

                return newRents;
            }
        },
        created() {
            this.$api.get('rent-posts?include=platform,game.assets,game.genres').then(response => {
                this.rents = response.data.data;
                console.log(this.rents)
                const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
                this.$api.get('rent-games/?ids=' + uniqueArr + '&include=assets,genres,platforms').then(resp => {
                  this.games = resp.data.data;
                })
                console.log(uniqueArr)
            });
            this.$api.get('genres').then(response => {
                this.categories = response.data.data;
            });
            this.$api.get('platforms').then(response => {
                this.platforms = response.data.data;
            });
            if (window.innerWidth < 768) {
                    this.isHidden = false;
            }
            else {
                this.isHidden = true;
            }
        },
         methods: {
            toggleMenu: function (event) {
                if (window.innerWidth < 768) {
                    this.isHidden = !this.isHidden;
                }
                
                // var x = document.getElementById("games-categories-list");

                // if (x.style.display  === "none") {
                //     x.style.display = "block";
                // } else {
                //     x.style.display =  "none";
                // }
            }
        }
    }


</script>


