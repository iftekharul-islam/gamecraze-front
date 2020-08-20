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
                                    <div v-for="(category, index) in categories" :key="index" class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" :id="category.name + '-game'" :value="category.name" v-model="checkedCategories"/>
                                        <label class="custom-control-label" :for="category.name + '-game'">{{ category.name }}</label>
                                    </div>
                                </fieldset>

                                <fieldset class="mb-4 category-2">
                                    <h4>select platforms</h4>
                                    <div v-for="(platform, index) in platforms" :key="index" class="checkbox custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" :id="platform.name + '-game'" :value="platform.name" v-model="checkedPlatforms"/>
                                        <label class="custom-control-label" :for="platform.name + '-game'">{{ platform.name }}</label>
                                    </div>
                                </fieldset>

<!--                                <fieldset class="mb-4 category-3">-->
<!--                                    <h4>PEGI Rating</h4>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="3-yrs-game" value=".3-yrs"/>-->
<!--                                        <label class="custom-control-label" for="3-yrs-game">3 years and over</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="7-yrs-game" value=".7-yrs"/>-->
<!--                                        <label class="custom-control-label" for="7-yrs-game">7 years and over</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="16-yrs-game" value=".16-yrs"/>-->
<!--                                        <label class="custom-control-label" for="16-yrs-game">16 years and over</label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="18-yrs-game" value=".18-yrs"/>-->
<!--                                        <label class="custom-control-label" for="18-yrs-game">18 years and over</label>-->
<!--                                    </div>-->
<!--                                </fieldset>-->

<!--                                <fieldset class="mb-4 category-4">-->
<!--                                    <h4>Avg. Customer Review</h4>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="1str-game" value=".1str"/>-->
<!--                                        <label class="custom-control-label" for="1str-game">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            & up-->
<!--                                        </label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="2str-game" value=".2str"/>-->
<!--                                        <label class="custom-control-label" for="2str-game">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            & up-->
<!--                                        </label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="3str-game" value=".3str"/>-->
<!--                                        <label class="custom-control-label" for="3str-game">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            & up-->
<!--                                        </label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="4str-game" value=".4str"/>-->
<!--                                        <label class="custom-control-label" for="4str-game">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star"></i>-->
<!--                                            & up-->
<!--                                        </label>-->
<!--                                    </div>-->
<!--                                    <div class="checkbox custom-control custom-checkbox">-->
<!--                                        <input type="checkbox" class="custom-control-input" id="5str-game" value=".5str"/>-->
<!--                                        <label class="custom-control-label" for="5str-game">-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            <i class="fas fa-star star-color"></i>-->
<!--                                            & up-->
<!--                                        </label>-->
<!--                                    </div>-->
<!--                                </fieldset>-->
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
                                    <div v-for="(rent, index) in filteredCategory" :key="index" class="col-sm-6 col-lg-4 col-xl-3 mb-4">
                                      <router-link :to="{ path: '/rent-posted-users/' + rent.game.data.id}">
                                        <div class="card game-card">
                                            <img class="card-img-top" :src="rent.game.data.assets.data[0].url" :alt="rent.game.data.name " v-if="rent.game.data.assets.data.length">
                                            <img src="../assets/img/release/fifa.jpg" class="card-img-top" alt="Fifa-20" v-else>
                                            <h4 class="game-name">{{ rent.game.data.name }}</h4>
                                            <p class="game-brands"><span v-for="(genre,index) in rent.game.data.genres.data" :key="index" >{{ genre.name }}<span v-if="index < rent.game.data.genres.data.length-1">, </span></span></p>
                                            <p class="metacritic-rating">{{ rent.game.data.rating }}</p>
<!--                                            <p class="star">-->
<!--                                                <star-rating :rating="parseFloat(rent.game.data.rating)" :read-only="true" :increment="0.01" :show-rating="false" :star-size="30"></star-rating>-->
<!--                                            </p>-->
                                         </div>
                                      </router-link>
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
