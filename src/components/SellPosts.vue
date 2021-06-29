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
                                </svg><span>{{ $t('filter', $store.state.locale) }}</span>
                            </button>
                        </div>
                        <div class="games-categories-section--categories" id="games-categories-list">
                            <!-- Game Type -->
                            <div class="select-categories">
                                <h6>{{ $t('select_category', $store.state.locale) }}</h6>
                                <div class="form-group form-check" v-for="(category, index) in categories" :key="'category' + index" v-if="categories">
<!--                                    <input type="checkbox" class="custom-control-input" :id="category.name + '-game'" :checked="checkedCategories.includes(category.slug)" @change="changeCheckedCategories(category.slug)">-->
                                    <h6 v-if="category.subcategory.data.length">{{ category.name }}</h6>
                                    <div v-for="(subItem, index) in category.subcategory.data" :key="index" v-if="category.subcategory.data.length" >
                                        <input type="checkbox" class="custom-control-input" :id="subItem.name + '-game'" :checked="checkedCategories.includes(subItem.name)" @change="changeCheckedCategories(subItem.name)">
                                        <label class="custom-control-label" :for="subItem.name + '-game'">{{subItem.name}}</label>
                                    </div>
                                </div>
                            </div>
<!--                            <div class="select-categories" v-if="categories">-->
<!--                                <div class="accordion" id="accordionExample">-->
<!--                                    <div class="card" v-for="(item, index) in categories" :key="index">-->
<!--                                        <div class="card-header p-0" :id="'cat-' + index">-->
<!--                                            <h2 class="mb-0">-->
<!--                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" :data-target="'#collapse'+ index" aria-expanded="false" aria-controls="collapseTwo">-->
<!--                                                    {{ item.name }}-->
<!--                                                </button>-->
<!--                                            </h2>-->
<!--                                        </div>-->
<!--                                        <div :id="'collapse'+ index" class="collapse" :aria-labelledby="'cat-' + index" data-parent="#accordionExample">-->
<!--                                            <div v-for="(subItem, index) in item.subcategory.data" :key="index" v-if="item.subcategory.data.length">-->
<!--                                                <label class="text-black py-a-1" @click="postsById(subItem.id)">{{ subItem.name }}</label>-->
<!--                                            </div>-->
<!--                                            <div v-if="item.subcategory.data.length === 0">-->
<!--                                                <label class="text-black py-a-1">No data found</label>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-9 mb-3">
                        <div class="games-categories-section--tag">
                            <span v-for="(categoryItem, categoryIndex) in checkedCategories" :key="categoryItem + categoryIndex">{{categoryItem}} <div @click="removeCategoryFilter(categoryItem)" class="remove-icon"><i class="fas fa-times"></i></div></span>
                        </div>
                        <div class="games-categories-section--games">
                            <div class="row">
                                <div v-for="(item, index) in posts" :key="index" class="col-md-6 col-lg-4 mb-4" v-if="posts.length">
                                  <router-link :to="'/sell-post/' + item.id + '/post-details'" class="games-categories-section--games--game-card-box game-card-hover-outer">
                                    <div class="game-card game-card-hover-inner">
                                        <div class="display-image" href="#">
                                            <img :src="item.images[0]" :alt="item.name" class="img-fluid" v-if="item.images[0]">
                                            <img src="https://via.placeholder.com/250x300" :alt="item.name" class="img-fluid" v-else>

                                        </div>
                                       <div class="game-card--details">
                                          <div> <h6>{{item.name}}</h6></div>
                                          <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                                              <div class="game-card--details--platforms"><a href="javascript:void(0)">{{ item.subcategory.data.name }}</a></div>
                                              <span>৳ {{ item.price }}</span>
                                          </div>
                                       </div>

                                    </div>
                                  </router-link>
                                </div>
                                <div class="not-matching" v-if="noPostFound">
                                    <h2>{{ $t('noting_to_show', $store.state.locale) }}</h2>
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
    export default {
        data() {
            return {
                noPostFound: true,
                posts: [],
                categories: [],
                checkedCategories: [],
                queryCategories: [],
                isHidden: false,
                noGameFound: false
            }
        },
      methods: {
          postsById(id) {
              console.log(id);
              this.$api.get('sell-posts/'+ id + '?include=subcategory' ).then(response => {
                  this.posts = response.data.data;
                  console.log(this.posts)
              });
          },
          removeCategoryFilter(value) {
              const index = this.checkedCategories.indexOf(value);
              if ( index> -1) {
                  this.checkedCategories.splice(index, 1);
              }
              console.log(this.checkedCategories)
          },
          changeCheckedCategories(value) {
              const index = this.checkedCategories.indexOf(value);
              if ( index> -1) {
                  this.checkedCategories.splice(index, 1);
              } else {
                  this.checkedCategories.push(value);
              }
          },
          fetchFilteredPosts() {
              this.noPostFound = false;
              if (this.$route.query.categories) {
                  this.queryCategories = this.$route.query.categories
              }
              else {
                  this.queryCategories = []
              }
              this.$api.get('sell-posts?include=subcategory&subcategory=' + this.queryCategories).then(resp => {
                  this.posts = resp.data.data;
                  if (!this.posts.length) {
                      this.noPostFound = true;
                  }
              })

          },
      },
      watch: {
          checkedCategories: function (val) {
              if (this.checkedCategories.length) {
                  this.$router.push({
                      query: Object.assign({}, this.$route.query, {
                          categories: this.checkedCategories.join()
                      })
                  })
              } else {
                  this.$router.push({query: {}});
              }
              this.fetchFilteredPosts();
          },
      },
      created() {
          this.posts = [];
          this.$api.get('sell-posts?include=subcategory').then(response => {
              this.posts = response.data.data;
              console.log(this.posts)
              if (!this.posts.length) {
                  this.noPostFound = true;
              }
          });
          this.$api.get('categories?include=subcategory').then(response => {
              this.categories = response.data.data;
              console.log(this.categories)
          });
      }
    }


</script>


