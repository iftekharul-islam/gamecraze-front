<template>
    <div>
        <!-- games & categories -->
        <section class="games-categories-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-3 mb-5">
                        <div class="games-categories-section--categories">
                            <!-- select categories -->
                            <div class="select-categories">
                                <h6>Select Category</h6>
                                <div class="form-group form-check" v-for="(category, index) in categories" :key="index">
                                    <input type="checkbox" class="custom-control-input" :id="category.name + '-game'" :value="category.slug" v-model="checkedCategories">
                                    <label class="custom-control-label" :for="category.name + '-game'">{{category.name}}</label>
                                </div>
<!--                                <div class="form-group form-check">-->
<!--                                    <input type="checkbox" class="custom-control-input" id="categories2">-->
<!--                                    <label class="custom-control-label" for="categories2">Adventure</label>-->
<!--                                </div>-->
<!--                                <div class="form-group form-check">-->
<!--                                    <input type="checkbox" class="custom-control-input" id="categories3">-->
<!--                                    <label class="custom-control-label" for="categories3">Strategy</label>-->
<!--                                </div>-->
<!--                                <div class="form-group form-check">-->
<!--                                    <input type="checkbox" class="custom-control-input" id="categories4">-->
<!--                                    <label class="custom-control-label" for="categories4">RPG</label>-->
<!--                                </div>-->
                            </div>
                            <!-- platform -->
                            <div class="select-platforms">
                                <h6>Select Platforms</h6>
                                <div class="form-group form-check" v-for="(platform, index) in platforms" :key="index">
                                    <input type="checkbox" class="custom-control-input" :id="platform.name + '-game'" :value="platform.slug" v-model="checkedPlatforms">
                                    <label class="custom-control-label" :for="platform.name + '-game'">{{platform.name}}</label>
                                </div>
<!--                                <div class="form-group form-check">-->
<!--                                    <input type="checkbox" class="custom-control-input" id="platform2">-->
<!--                                    <label class="custom-control-label" for="platform2">PS3</label>-->
<!--                                </div>-->
<!--                                <div class="form-group form-check">-->
<!--                                    <input type="checkbox" class="custom-control-input" id="platform3">-->
<!--                                    <label class="custom-control-label" for="platform3">Nintendo</label>-->
<!--                                </div>-->
<!--                                <div class="form-group form-check">-->
<!--                                    <input type="checkbox" class="custom-control-input" id="platform4">-->
<!--                                    <label class="custom-control-label" for="platform4">Xbox</label>-->
<!--                                </div>-->
                            </div>
                            <div class="clear">
                                <a href="#" class="clear-filters">Clear Filters</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-9 mb-5">
                        <div class="games-categories-section--games">
                            <div class="row">
                                <div v-for="(rent, index) in filteredGames" :key="index" class="col-md-6 col-lg-4 mb-5">
                                  <router-link :to="{ path: '/rent-posted-users/' + rent.id}">
                                    <div class="game-card">
                                        <a class="display-image" href="#">
                                            <img src="../assets/img/fifa19.png" alt="fifa" class="img-fluid">
                                        </a>
                                        <a href="#"> <h6>{{rent.name}}</h6></a>
                                        <div class="d-flex">
                                          <span v-for="(genre,index) in rent.genres.data" :key="index" >{{ genre.name }}<span class="mr-1" v-if="index < rent.genres.data.length-1">, </span></span>

                                        </div>
                                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                            <a href="#"><img src="../assets/img/ps4-white.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/fav-1.png" alt="ps4"></a>
                                            <a href="#"><img src="../assets/img/windows.png" alt="ps4"></a>
                                            <span class="game-rating">71</span>
                                        </div>

                                    </div>
                                  </router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
                filteredGames: [],
                searchKey: '',
                queryCategories: [],
                queryPlatforms: []
            }
        },
        components: {
            StarRating
        },
      methods: {
        fetchFilteredGames() {
          console.log(this.$route.query.search);
            if (this.$route.query.search) {
              this.searchKey = this.$route.query.search
            }
            else {
              this.searchKey = ''
            }

            if (this.$route.query.categories) {
              this.queryCategories = this.$route.query.categories
            }
            else {
              this.queryCategories = []
            }
            if (this.$route.query.platforms) {
              this.queryPlatforms = this.$route.query.platforms
            }
            else {
              this.queryPlatforms = []
            }

            const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
          console.log('Hi');
          console.log(uniqueArr);
            this.$api.get('filter-games/?ids=' + uniqueArr + '&include=assets,genres,platforms&categories=' + this.queryCategories + '&platforms=' + this.queryPlatforms + '&search=' + this.searchKey).then(resp => {
              this.filteredGames = resp.data.data;
              console.log("Hello")
              console.log(this.filteredGames);
            })

        }
      },
      watch: {
        checkedCategories: function (val) {
          if (this.checkedCategories.length) {
            this.$router.push({ query: Object.assign({}, this.$route.query, {categories: this.checkedCategories.join(), search: this.$route.query.search})  })
            this.fetchFilteredGames();
          }
          else {
            this.$router.push({ query: {  search: this.$route.query.search} })
            this.fetchFilteredGames();
          }
        },
        checkedPlatforms: function (val) {
          if (this.checkedPlatforms.length) {
            this.$router.push({ query: Object.assign({}, this.$route.query, { platforms: this.checkedPlatforms.join(), search: this.$route.query.search})  })
            this.fetchFilteredGames();
          }
          else {
            this.$router.push({ query: { search: this.$route.query.search} })
            this.fetchFilteredGames();
          }
        }
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
                this.fetchFilteredGames();
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

          this.$root.$on('searchEvent', () => {
            this.fetchFilteredGames();
          })

        },
      // mounted() {
      //   this.$root.$on('searchEvent', () => {
      //     this.fetchFilteredGames();
      //   })
      // }
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
