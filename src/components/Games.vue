<template>
    <div>
        <!-- games & categories -->
        <section class="games-categories-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-3 mb-3">
                      <div class="text-right">
                            <button id="btn--filter" class="btn--filter"  v-on:click="toggleMenu()">
                                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="40" height="35"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="22" y2="498"><stop offset="0" stop-color="#00efd1"/><stop offset="1" stop-color="#00acea"/></linearGradient><path d="m412.943 69h-313.886c-5.523 0-10.057 4.936-10.057 10.458v64.164c0 .326.046.65.077.972.014.146.055.288.075.432.024.17.052.341.085.51s.083.344.126.515c.033.135.066.27.105.4.052.177.115.35.177.523.044.124.087.249.136.371.068.168.143.331.219.494.059.124.116.249.179.371.079.152.164.3.25.448.074.127.15.254.23.379s.18.267.274.4.185.254.283.378.2.24.3.357c.057.066.176.138.237.2l114.247 124.683v157.487a9.939 9.939 0 0 0 5.739 9.078 9.839 9.839 0 0 0 4.158.922 9.948 9.948 0 0 0 6.467-2.386l80.194-68.334a9.926 9.926 0 0 0 3.442-7.614v-89.153l114.25-124.679c.061-.065.146-.137.2-.2.1-.117.217-.235.314-.357s.2-.25.291-.378.19-.263.277-.4.159-.252.233-.379c.086-.148.172-.3.251-.448.063-.122.121-.247.18-.371.075-.163.15-.326.218-.494.05-.122.092-.247.136-.371.062-.173.124-.346.176-.523.039-.133.07-.268.1-.4.043-.171.088-.341.121-.515s.055-.34.078-.51c.021-.144.076-.286.09-.432.031-.322.077-.646.077-.972v-64.168c.008-5.522-4.526-10.458-10.049-10.458zm-124.25 195.6a9.6 9.6 0 0 0 -2.693 6.568v88.42l-60 51.312v-139.732a9.6 9.6 0 0 0 -2.693-6.565l-101.532-110.603h268.45zm114.307-130.6h-294v-45h294z" fill="url(#a)"/>
                                    </svg><span>Filter</span> 
                            </button>
                      </div>
                        <div v-if="isHidden" class="games-categories-section--categories" id="games-categories-list">
                           <!-- Gamehub -->
                            <!-- <div class="select-categories">
                                <h6>Game Hub</h6>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="gamehub-name" >
                                    <label class="custom-control-label" for="gamehub-name">Trending</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="gamehub-name2" >
                                    <label class="custom-control-label" for="gamehub-name2">Upcoming</label>
                                </div>

                            </div> -->


                              <!-- Game Type -->
                            <div class="select-categories">
                                <h6>Game type</h6>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="digital_copy" :checked="checkedDiskType.includes('digital_copy')" @change="changeCheckedDiskType('digital_copy')">
                                    <label class="custom-control-label"  for="digital_copy">Digital copy</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="physical_copy" :checked="checkedDiskType.includes('physical_copy')" @change="changeCheckedDiskType('physical_copy')">
                                    <label class="custom-control-label" for="physical_copy">Physical copy</label>
                                </div>

                            </div>

                            <!-- select categories -->
                            <div class="select-categories">
                                <h6>Select Category</h6>
                                <div class="form-group form-check" v-for="(category, index) in categories" :key="index">
                                    <input type="checkbox" class="custom-control-input" :id="category.name + '-game'" :checked="checkedCategories.includes(category.slug)" @change="changeCheckedCategories(category.slug)">
                                    <label class="custom-control-label" :for="category.name + '-game'">{{category.name}}</label>
                                </div>

                            </div>
                            <!-- platform -->
                            <div class="select-platforms">
                                <h6>Select Platforms</h6>
                                <div class="form-group form-check" v-for="(platform, index) in platforms" :key="index">
                                    <input type="checkbox" class="custom-control-input" :id="platform.name + '-game'" :checked="checkedPlatforms.includes(platform.slug)" @change="changeCheckedPlatforms(platform.slug)">
                                    <label class="custom-control-label" :for="platform.name + '-game'">{{platform.name}}</label>
                                </div>
                            </div>
                            <div class="clear">
                                <a href="javascript:void(0)" class="clear-filters btn--secondery" id="clear-filters" @click="clearFilter()"><span>Clear Filters</span></a>
                                <a href="#" class="clear-filters btn--secondery d-flex d-sm-none" id="filter-apply" v-on:click="toggleMenu()"><span>Apply</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-9 mb-3">
                      <div class="games-categories-section--tag">
                        <span v-for="(categoryItem, categoryIndex) in checkedCategories" :key="categoryIndex">{{categoryItem}} <div @click="removeCategoryFilter(categoryItem)" class="remove-icon"><i class="fas fa-times"></i></div></span>
                        <span v-for="(platformItem, platformIndex) in checkedPlatforms" :key="platformIndex">{{ platformItem}} <div @click="removePlatformFilter(platformItem)" class="remove-icon"><i class="fas fa-times"></i></div></span>
                        <span v-for="(diskTypeItem, diskTypeIndex) in checkedDiskType" :key="diskTypeIndex">{{ diskTypeItem == 'digital_copy' ? 'Digital Copy': 'Physical Copy'}} <div @click="removeDiskTypeFilter(diskTypeItem)" class="remove-icon"><i class="fas fa-times"></i></div></span>
                        <span v-if="$route.query.search">{{$route.query.search}} <div @click="removeSearchKey()" class="remove-icon"><i class="fas fa-times"></i></div></span>
                      </div>
                        <div class="games-categories-section--games">
                            <div class="row">
                                <div v-for="(rent, index) in filteredGames" :key="index" class="col-md-6 col-lg-4 mb-4">
<!--                                    <p>{{rent }}</p>-->
                                  <router-link :to="{ path: '/game-details/' + rent.game.data.slug}" class="games-categories-section--games--game-card-box">
                                    <div class="game-card">
                                        <div class="display-image" href="#">
                                            <img :src="rent.game.data.poster_url" :alt="rent.game.data.name" class="img-fluid">
                                        </div>
                                       <div class="game-card--details">
                                          <div> <h6>{{rent.game.data.name}}</h6></div>
                                          <div class="d-flex flex-wrap game-card--category">

                                            <span v-for="(genre, index) in rent.game.data.genres.data" :key="index" >{{ genre.name }}<span class="mr-2" v-if="index < rent.game.data.genres.data.length-1">, </span></span>


                                          </div>
                                          <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">

                                              <div class="game-card--details--platforms"><a href="javascript:void(0)" v-for="(platform, index) in rent.game.data.platforms.data" :key="index"><img :src="platform.url" alt="ps4"></a></div>

                                              <span class="game-rating">{{ rent.game.data.rating }}</span>
                                          </div>
                                       </div>

                                    </div>
                                  </router-link>
                                </div>

                              <div class="not-matching" v-if="noGameFound">
                                <h2>Not match any games</h2>
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
                diskTypes: [],
                checkedPlatforms: [],
                checkedCategories: [],
                checkedDiskType: [],
                filteredGames: [],
                searchKey: '',
                queryCategories: [],
                queryPlatforms: [],
                queryDiskType: [],
                isHidden: false,
                noGameFound: false
            }
        },
        components: {
            StarRating
        },
      methods: {
        removeSearchKey() {
          let query = Object.assign({}, this.$route.query);
          delete query.search;
          this.$router.replace({ query });
          this.fetchFilteredGames();
          this.$root.$emit('clearSearchKey');
        },
        removeCategoryFilter(value) {
          const index = this.checkedCategories.indexOf(value);
          if ( index> -1) {
            this.checkedCategories.splice(index, 1);
          }
        },
        removePlatformFilter(value) {
          const index = this.checkedPlatforms.indexOf(value);
          if ( index> -1) {
            this.checkedPlatforms.splice(index, 1);
          }
        },
          removeDiskTypeFilter(value) {
              const index = this.checkedDiskType.indexOf(value);
              if ( index> -1) {
                  this.checkedDiskType.splice(index, 1);
              }
          },
        clearFilter() {
          this.$router.push({query: {}});
          this.checkedPlatforms = [];
          this.checkedCategories = [];
          this.fetchFilteredGames();
          this.$root.$emit('clearSearchKey');
          this.toggleMenu();
        },
        changeCheckedCategories(value) {
          const index = this.checkedCategories.indexOf(value);
          if ( index> -1) {
            this.checkedCategories.splice(index, 1);
          }
          else {
            this.checkedCategories.push(value);
          }
        },
        changeCheckedPlatforms(value) {
          const index = this.checkedPlatforms.indexOf(value);
          if ( index> -1) {
            this.checkedPlatforms.splice(index, 1);
          }
          else {
            this.checkedPlatforms.push(value);
          }
        },
          changeCheckedDiskType(value) {
              const index = this.checkedDiskType.indexOf(value);
              if ( index> -1) {
                  this.checkedDiskType.splice(index, 1);
              }
              else {
                  this.checkedDiskType.push(value);
              }
          },
        fetchFilteredGames() {
            this.noGameFound = false;
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
            if (this.$route.query.diskType) {
                this.queryDiskType = this.$route.query.diskType
            }
            else {
                this.queryDiskType = []
            }
            console.log('this.queryDiskType');
            console.log(this.queryDiskType);
            const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
            this.$api.get('filter-games/?ids=' + uniqueArr + '&include=game.assets,game.genres,game.platforms&categories=' + this.queryCategories + '&platforms=' + this.queryPlatforms + '&diskType=' + this.queryDiskType + '&search=' + this.searchKey).then(resp => {
              this.filteredGames = resp.data.data;
              if (!this.filteredGames.length) {
                this.noGameFound = true;
              }
            })

        },
        toggleMenu: function (event) {
          if (window.innerWidth < 768) {
            this.isHidden = !this.isHidden;
          }
        }
      },
      watch: {
          checkedCategories: function (val) {
              if (this.checkedCategories.length) {
                  this.$router.push({
                      query: Object.assign({}, this.$route.query, {
                          categories: this.checkedCategories.join(),
                          search: this.$route.query.search
                      })
                  })
                  this.fetchFilteredGames();
              } else {
                  if (this.checkedPlatforms.length || this.checkedDiskType.length) {
                      this.$router.push({
                          query: {
                              search: this.$route.query.search,
                              platforms: this.checkedPlatforms.join(),
                              diskType: this.checkedDiskType.join()
                          }
                      })
                  } else {
                      this.$router.push({query: {search: this.$route.query.search}})
                  }

                  this.fetchFilteredGames();
              }
          },
          checkedPlatforms: function (val) {
              if (this.checkedPlatforms.length) {
                  this.$router.push({
                      query: Object.assign({}, this.$route.query, {
                          platforms: this.checkedPlatforms.join(),
                          search: this.$route.query.search
                      })
                  })
                  this.fetchFilteredGames();
              } else {
                  if (this.checkedCategories.length || this.checkedDiskType.length) {
                      this.$router.push({
                          query: {
                              search: this.$route.query.search,
                              categories: this.checkedCategories.join(),
                              diskType: this.checkedDiskType.join()
                          }
                      })
                  } else {
                      this.$router.push({query: {search: this.$route.query.search}})
                  }
                  this.fetchFilteredGames();
              }
          },
          checkedDiskType: function (val) {
              if (this.checkedDiskType.length) {
                  this.$router.push({
                      query: Object.assign({}, this.$route.query, {
                          diskType: this.checkedDiskType.join(),
                          search: this.$route.query.search
                      })
                  })
                  this.fetchFilteredGames();
              } else {
                  if (this.checkedCategories.length || this.checkedPlatforms.length) {
                      this.$router.push({
                          query: {
                              search: this.$route.query.search,
                              categories: this.checkedCategories.join(),
                              platforms: this.checkedPlatforms.join()
                          }
                      })
                  } else {
                      this.$router.push({query: {search: this.$route.query.search}})
                  }
              }
              this.fetchFilteredGames();
          }
      },
        computed: {

        },
        created() {
            window.scrollTo(0,0);
            this.$api.get('rent-posts?include=platform,game.assets,game.genres').then(response => {
                this.rents = response.data.data;
                this.fetchFilteredGames();
                this.checkedCategories = this.queryCategories != [] ? this.queryCategories.split(',') : [];
                this.checkedPlatforms = this.queryPlatforms != [] ? this.queryPlatforms.split(',') : [];
                this.checkedDiskType = this.queryDiskType != [] ? this.queryDiskType.split(',') : [];
                console.log('this.checkedCategories');
                console.log(this.checkedCategories);
                const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
                this.$api.get('rent-games/?ids=' + uniqueArr + '&include=assets,genres,platforms').then(resp => {
                  this.games = resp.data.data;
                  console.log(this.games)
                })
                
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

          if (window.innerWidth < 768) {
            this.isHidden = false;
          }
          else {
            this.isHidden = true;
          }

        },
         mounted() {
            document.body.classList.add('body-position')
        },
        destroyed() {
            document.body.classList.remove('body-position')
        }
    }


</script>


