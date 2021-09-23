<template>
    <div>
        <!-- games & categories -->
        <section class="games-categories-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-3 mb-3">
                      <div class="text-right">
                            <button id="btn--filter" class="router_link btn__filter btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-full text-center d-md-none mb-4"  v-on:click="toggleMenu()">
                                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2"><path d="M5.82408 11.0593L9.70774 11.0712C9.9499 11.072 10.1459 11.2748 10.1459 11.5234V13.7083C10.1459 13.9577 10.0043 14.1834 9.78352 14.2878L6.25816 15.9432C6.17579 15.9813 6.08848 16 6.00117 16C5.88504 16 5.7689 15.9661 5.66758 15.899C5.49049 15.7819 5.38341 15.58 5.38341 15.3636V11.5116C5.38341 11.2613 5.5811 11.0585 5.82408 11.0593ZM14.2975 0C15.2381 0 16 0.784842 16 1.7538V2.97901C16 3.44906 15.8163 3.90045 15.4901 4.22966L10.2861 9.49362C10.1963 9.58525 10.0744 9.63616 9.94842 9.63532L5.59115 9.62174C5.45853 9.62174 5.33251 9.56489 5.2419 9.46562L0.459614 4.2059C0.163912 3.88094 0 3.45161 0 3.00616V1.75465C0 0.78569 0.761905 0 1.70255 0H14.2975Z" fill="#0B0F18"></path></svg><span>{{ $t('filter', $store.state.locale) }}</span>
                            </button>
                      </div>
                        <div v-if="isHidden" class="games-categories-section--categories" id="games-categories-list">
                            <!-- Game Type -->
                            <div class="select-categories mb-a-6">
                                <h6>{{ $t('game_type', $store.state.locale) }}</h6>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="digital_copy" :checked="checkedDiskType.includes('digital_copy')" @change="changeCheckedDiskType('digital_copy')">
                                    <label class="custom-control-label"  for="digital_copy">{{ $t('digital_copy', $store.state.locale) }}</label>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="custom-control-input" id="physical_copy" :checked="checkedDiskType.includes('physical_copy')" @change="changeCheckedDiskType('physical_copy')">
                                    <label class="custom-control-label" for="physical_copy">{{ $t('physical_copy', $store.state.locale) }}</label>
                                </div>
                            </div>

                            <!-- select categories -->
                            <div class="select-categories mb-a-6">
                                <h6>{{ $t('select_category', $store.state.locale) }}</h6>
                                <div class="form-group form-check" v-for="(category, index) in categories" :key="'category' + index">
                                    <input type="checkbox" class="custom-control-input" :id="category.name + '-game'" :checked="checkedCategories.includes(category.slug)" @change="changeCheckedCategories(category.slug)">
                                    <label class="custom-control-label" :for="category.name + '-game'">{{category.name}}</label>
                                </div>
                            </div>
                            <!-- platform -->
                            <div class="select-platforms">
                                <h6>{{ $t('select_platform', $store.state.locale) }}</h6>
                                <div class="form-group form-check" v-for="(platform, index) in platforms" :key="'platform' + index">
                                    <input type="checkbox" class="custom-control-input" :id="platform.name + '-game'" :checked="checkedPlatforms.includes(platform.slug)" @change="changeCheckedPlatforms(platform.slug)">
                                    <label class="custom-control-label" :for="platform.name + '-game'">{{platform.name}}</label>
                                </div>
                            </div>
                            <div class="clear">
                                <a href="javascript:void(0)" class="clear-filters btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative" id="clear-filters" @click="clearFilter()"><span></span> <div class="position-relative">{{ $t('clear_filters', $store.state.locale) }}</div></a>
                                <a href="javascript:void(0)" class="clear-filters d-sm-none btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative" id="filter-apply" v-on:click="toggleMenu()"><span></span><div class="position-relative">{{ $t('apply', $store.state.locale) }}</div></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-9 mb-3" :class="{'preLoadActive': responseDelay}">
                      <div class="games-categories-section--tag">
                        <span v-for="(categoryItem, categoryIndex) in checkedCategories" :key="categoryItem + categoryIndex">{{categoryItem}} <div @click="removeCategoryFilter(categoryItem)" class="remove-icon"><i class="fas fa-times"></i></div></span>
                        <span v-for="(platformItem, platformIndex) in checkedPlatforms" :key="platformItem + platformIndex">{{ platformItem}} <div @click="removePlatformFilter(platformItem)" class="remove-icon"><i class="fas fa-times"></i></div></span>
                        <span v-for="(diskTypeItem, diskTypeIndex) in checkedDiskType" :key="diskTypeItem + diskTypeIndex">{{ diskTypeItem == 'digital_copy' ? 'Digital Copy': 'Physical Copy'}} <div @click="removeDiskTypeFilter(diskTypeItem)" class="remove-icon"><i class="fas fa-times"></i></div></span>
                        <span v-if="$route.query.search">{{$route.query.search}} <div @click="removeSearchKey()" class="remove-icon"><i class="fas fa-times"></i></div></span>
                      </div>
                        <div class="games-categories-section--games">
                            <div class="row">
                                <div v-for="(rent, index) in filteredGames" :key="index" class="col-md-6 col-lg-4 mb-4">
                                  <router-link :to="{ path: '/game-details/' + rent.game.data.slug}" class="games-categories-section--games--game-card-box game-card-hover-outer">
                                    <div class="game-card game-card-hover-inner">
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
                                <h2>{{ $t('game_no_found', $store.state.locale) }}</h2>
                              </div>
                            </div>
                        </div>
                        <!-- preloader animation -->
                              <div class="preloader">
                                <div class="loading">
                                  <span>Loading</span>
                                </div>
                            </div>
                        <!-- end preloader animation -->
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
                responseDelay: true,
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
          this.checkedDiskType = [];
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
            this.responseDelay = true;
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
              this.queryPlatforms = this.$route.query.platforms;
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
            const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
            this.$api.get('filter-games/?ids=' + uniqueArr + '&include=game.assets,game.genres,game.platforms&categories=' + this.queryCategories + '&platforms=' + this.queryPlatforms + '&diskType=' + this.queryDiskType + '&search=' + this.searchKey).then(resp => {
              this.responseDelay = false;
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
              } else if (this.checkedPlatforms.length || this.checkedDiskType.length) {
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
          },
          checkedPlatforms: function (val) {
              if (this.checkedPlatforms.length) {
                  this.$router.push({
                      query: Object.assign({}, this.$route.query, {
                          platforms: this.checkedPlatforms.join(),
                          search: this.$route.query.search
                      })
                  })
              } else if (this.checkedCategories.length || this.checkedDiskType.length) {
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
          },

          checkedDiskType: function (val) {
              if (this.checkedDiskType.length) {
                  this.$router.push({
                      query: Object.assign({}, this.$route.query, {
                          diskType: this.checkedDiskType.join(),
                          search: this.$route.query.search
                      })
                  })
              } else if (this.checkedCategories.length || this.checkedPlatforms.length) {
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
              this.fetchFilteredGames();
          }
      },
        created() {
            window.scrollTo(0,0);
            this.$api.get('rent-posts?include=platform,game.assets,game.genres').then(response => {
                this.rents = response.data.data;
                this.fetchFilteredGames();
                // this.checkedCategories = typeof this.queryCategories == 'string'? this.queryCategories.split(',') : [];
                // this.checkedPlatforms = typeof this.queryPlatforms == 'string' ? this.queryPlatforms.split(',') : [];
                // this.checkedDiskType = typeof this.queryDiskType == 'string' ? this.queryDiskType.split(',') : [];
                const uniqueArr = [... new Set(this.rents.map(data => data.game_id))]
                this.$api.get('rent-games/?ids=' + uniqueArr + '&include=assets,genres,platforms').then(resp => {
                  this.games = resp.data.data;
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
    }


</script>


