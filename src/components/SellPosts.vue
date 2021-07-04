<template>
  <div>
    <!-- games & categories -->
    <section class="games-categories-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-3 mb-3">
            <div class="text-right">
              <button id="btn--filter" class="btn--filter" v-on:click="toggleMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
                     width="40" height="35">
                  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="22" y2="498">
                    <stop offset="0" stop-color="#00efd1"/>
                    <stop offset="1" stop-color="#00acea"/>
                  </linearGradient>
                  <path
                      d="m412.943 69h-313.886c-5.523 0-10.057 4.936-10.057 10.458v64.164c0 .326.046.65.077.972.014.146.055.288.075.432.024.17.052.341.085.51s.083.344.126.515c.033.135.066.27.105.4.052.177.115.35.177.523.044.124.087.249.136.371.068.168.143.331.219.494.059.124.116.249.179.371.079.152.164.3.25.448.074.127.15.254.23.379s.18.267.274.4.185.254.283.378.2.24.3.357c.057.066.176.138.237.2l114.247 124.683v157.487a9.939 9.939 0 0 0 5.739 9.078 9.839 9.839 0 0 0 4.158.922 9.948 9.948 0 0 0 6.467-2.386l80.194-68.334a9.926 9.926 0 0 0 3.442-7.614v-89.153l114.25-124.679c.061-.065.146-.137.2-.2.1-.117.217-.235.314-.357s.2-.25.291-.378.19-.263.277-.4.159-.252.233-.379c.086-.148.172-.3.251-.448.063-.122.121-.247.18-.371.075-.163.15-.326.218-.494.05-.122.092-.247.136-.371.062-.173.124-.346.176-.523.039-.133.07-.268.1-.4.043-.171.088-.341.121-.515s.055-.34.078-.51c.021-.144.076-.286.09-.432.031-.322.077-.646.077-.972v-64.168c.008-5.522-4.526-10.458-10.049-10.458zm-124.25 195.6a9.6 9.6 0 0 0 -2.693 6.568v88.42l-60 51.312v-139.732a9.6 9.6 0 0 0 -2.693-6.565l-101.532-110.603h268.45zm114.307-130.6h-294v-45h294z"
                      fill="url(#a)"/>
                </svg>
                <span>{{ $t('filter', $store.state.locale) }}</span>
              </button>
            </div>
            <div class="games-categories-section--categories" id="games-categories-list">
              <!-- Game Type -->
              <div class="select-categories">
                <h6>{{ $t('select_category', $store.state.locale) }}</h6>
                <div class="form-group form-check" v-for="(category, index) in categories" :key="'category' + index"
                     v-if="categories">
                  <h6 v-if="category.subcategory.data.length">{{ category.name }}</h6>
                  <div v-for="(subItem, index) in category.subcategory.data" :key="index"
                       v-if="category.subcategory.data.length">
                    <input type="checkbox" class="custom-control-input" :id="subItem.name + '-game'"
                           :checked="checkedCategories.includes(subItem.name)"
                           @change="changeCheckedCategories(subItem.name)">
                    <label class="custom-control-label" :for="subItem.name + '-game'">{{ subItem.name }}</label>
                  </div>
                </div>
              </div>
              <!-- Filter -->
              <div class="select-platforms">
                <h6 class="margin__bottom">Filter</h6>
                <div class="form-group form-check">
                  <div>
                    <input type="radio" class="custom-control-input" id="asc_price_filter" name="sort_price"
                           @change="ascPrice($event)">
                    <label class="custom-control-label" for="asc_price_filter">Price (Low To High)</label>
                  </div>
                  <div>
                    <input type="radio" class="custom-control-input" id="desc_price_filter" name="sort_price"
                           @change="descPrice($event)">
                    <label class="custom-control-label" for="desc_price_filter">Price (High To Low)</label>
                  </div>
                  <div>
                    <input type="checkbox" class="custom-control-input" id="date_filter" @change="sortDate($event)">
                    <label class="custom-control-label" for="date_filter">Date (From Today)</label>
                  </div>
                  <div>
                    <input type="checkbox" class="custom-control-input" id="new_type_filter"
                           @change="sortNewType($event)">
                    <label class="custom-control-label" for="new_type_filter">New Product</label>
                  </div>
                  <div>
                    <input type="checkbox" class="custom-control-input" id="used_type_filter"
                           @change="sortUsedType($event)">
                    <label class="custom-control-label" for="used_type_filter">Used Product</label>
                  </div>
                </div>
              </div>
              <div class="select-platforms">
                <h6>Price range</h6>
                <!-- <vue-range-slider ref="slider" v-model="value" :min="0" :max="1000" :enable-cross="false" :min-range="10"></vue-range-slider> -->
                <div class="track-container range-slider">
                  <!--                                     <span class="range-value min">{{ minValue}} </span> <span class="range-value max">{{ maxValue }}</span>-->
                  <div class="range-slider__bar" ref="_vpcTrack"></div>
                  <div class="range-slider__highlight-bar" ref="trackHighlight"></div>
                  <button class="range-slider__ball track1" ref="track1"></button>
                  <button class="range-slider__ball track2" ref="track2"></button>
                </div>
              </div>
              <div class="select-platforms d-grid grid-cols-2 col-gap-16 mt-3">
                <input type="number" class="text-center gil-medium" :min="min" :max="max" v-model="minValue">
                <input type="number" class="text-center gil-medium" :min="min" :max="max" v-model="maxValue">
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-9 mb-3">
            <div class="games-categories-section--tag">
              <span v-for="(categoryItem, categoryIndex) in checkedCategories"
                    :key="categoryItem + categoryIndex">{{ categoryItem }} <div
                  @click="removeCategoryFilter(categoryItem)" class="remove-icon"><i
                  class="fas fa-times"></i></div></span>
            </div>
            <div class="games-categories-section--games">
              <div class="row">
                <div v-for="(item, index) in posts" :key="index" class="col-md-6 col-lg-4 mb-4" v-if="posts.length">
                  <router-link :to="'/sell-post/' + item.id + '/post-details'"
                               class="games-categories-section--games--game-card-box game-card-hover-outer">
                    <div class="game-card game-card-hover-inner">
                      <div class="display-image" href="#">
                        <img :src="item.images[0]" :alt="item.name" class="img-fluid" v-if="item.images[0]">
                        <img src="https://via.placeholder.com/250x300" :alt="item.name" class="img-fluid" v-else>

                      </div>
                      <div class="game-card--details">
                        <h6>{{ item.name }}</h6>
                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                          <div class="game-card--details--platforms">{{ item.subcategory.data.name }}</div>
                          <span v-if="item.product_type == 1">New</span>
                          <span v-if="item.product_type == 2">Used</span>
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
            <sliding-pagination
                :current="currentPage"
                :total="totalPages"
                @page-change="pageChangeHandler"
            ></sliding-pagination>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import SlidingPagination from 'vue-sliding-pagination'
import 'vue-range-component/dist/vue-range-slider.css'
// import VueRangeSlider from 'vue-range-component'
export default {
  components: {SlidingPagination},
  data() {
    return {
      min: 0,
      max: 250,
      minValue: 0,
      maxValue: 250,
      noPostFound: false,
      posts: [],
      allPosts: [],
      categories: [],
      checkedCategories: [],
      queryCategories: [],
      isHidden: false,
      noGameFound: false,
      pagination: '',
      currentPage: 0,
      totalPages: 0,
      ascByPrice: '',
      descByPrice: '',
      sortByDate: '',
      sortNew: '',
      sortUsed: '',
      value: [],
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null
      }
    }
  },
  methods: {
    setMinValue() {
      setTimeout(() => {
        console.log(this.minValue)
        if ( this.minValue > this.min &&  this.maxValue > this.minValue ){
          this.setRangeTrack();
          this.getSellPosts();
        }
      },1500)
    },
    setMaxValue() {
      setTimeout(() => {
        console.log(this.maxValue)
        if (this.maxValue > this.minValue && this.max > this.maxValue) {
          this.setRangeTrack();
          this.getSellPosts();
        }
      },1500)
    },
    setValue() {
      var arr = [];
      arr.push(this.minValue, this.maxValue);
      console.log(arr);
    },
    ascPrice(event) {
      this.descByPrice = '',
          this.ascByPrice = event.target.checked === true ? 1 : '';
      this.getSellPosts();
    },
    descPrice(event) {
      this.ascByPrice = '',
          this.descByPrice = event.target.checked === true ? 1 : '';
      this.getSellPosts();
    },
    sortDate(event) {
      this.sortByDate = event.target.checked === true ? 1 : '';
      console.log(this.sortByDate)
      this.getSellPosts();
    },
    sortNewType(event) {
      this.sortNew = event.target.checked === true ? 1 : '';
      this.getSellPosts();
    },
    sortUsedType(event) {
      this.sortUsed = event.target.checked === true ? 1 : '';
      this.getSellPosts();
    },
    pageChangeHandler(selectedPage) {
      console.log(selectedPage);
      this.currentPage = selectedPage
      this.getSellPosts(selectedPage);
    },
    postsById(id) {
      console.log(id);
      this.$api.get('sell-posts/' + id + '?include=subcategory').then(response => {
        this.posts = response.data.data;
        console.log(this.posts)
      });
    },
    removeCategoryFilter(value) {
      const index = this.checkedCategories.indexOf(value);
      if (index > -1) {
        this.checkedCategories.splice(index, 1);
      }
      console.log(this.checkedCategories)
    },
    changeCheckedCategories(value) {
      const index = this.checkedCategories.indexOf(value);
      if (index > -1) {
        this.checkedCategories.splice(index, 1);
      } else {
        this.checkedCategories.push(value);
      }
    },
    fetchFilteredPosts() {
      this.noPostFound = false;
      if (this.$route.query.categories) {
        this.queryCategories = this.$route.query.categories
      } else {
        this.queryCategories = []
      }
      this.getSellPosts();

    },
    getSellPosts(page_no = '') {
      this.noPostFound = false;
      this.$api.get('sell-posts?include=subcategory&page=' + page_no + '&subcategory=' + this.queryCategories + '&ascPrice=' + this.ascByPrice + '&descPrice=' + this.descByPrice + '&sortDate=' + this.sortByDate + '&sortNew=' + this.sortNew + '&sortUsed=' + this.sortUsed + '&minPrice=' + this.minValue + '&maxPrice=' + this.maxValue).then(response => {
        this.posts = response.data.data;
        this.allPosts = this.posts;
        this.pagination = response.data.meta.pagination;
        this.currentPage = this.pagination.current_page
        this.totalPages = this.pagination.total_pages
        console.log(this.posts)
        if (!this.posts.length) {
          this.noPostFound = true;
        }
      });
    },
    moveTrack(track, ev) {

      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      let clientX = ev.clientX;
      let moveDiff = clientX - trackX;

      let moveInPct = moveDiff / percentInPx
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      let value = (Math.round(moveInPct / this.percentPerStep) * this.step) + this.min;
      if (track === 'track1') {
        if (value >= (this.maxValue - this.step)) return;
        this.minValue = value;
      }

      if (track === 'track2') {
        if (value <= (this.minValue + this.step)) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + '%';
      this.setTrackHightlight()

    },
    mousedown(ev, track) {

      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track) {
      this.mousedown(ev, track)
    },

    mouseup(ev, track) {
      if (!this.isDragging) return;
      this.isDragging = false
    },

    touchend(ev, track) {
      this.mouseup(ev, track)
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev)
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track)
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left = this.valueToPercent(this.minValue) + '%'
      this.$refs.trackHighlight.style.width = (this.valueToPercent(this.maxValue) - this.valueToPercent(this.minValue)) + '%'
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev) {
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack('track1', ev)
      } else if ((ev.clientX - track1Left) < (track2Left - ev.clientX)) {
        this.moveTrack('track1', ev)
      } else {
        this.moveTrack('track2', ev)
      }
    },
    setRangeTrack() {
      // set track1 initilal
      document.querySelector('.track1').style.left = this.valueToPercent(this.minValue) + '%'
      // track2 initial position
      document.querySelector('.track2').style.left = this.valueToPercent(this.maxValue) + '%'
      // set initial track highlight
      this.setTrackHightlight()
    }
  },
  watch: {
    checkedCategories: function () {
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
    minValue: function () {
      this.setMinValue()
    },
    maxValue: function () {
      this.setMaxValue()
    },
  },
  created() {
    this.min = 0;
    this.max = 250;
    this.posts = [];
    this.getSellPosts();
    this.$api.get('categories?include=subcategory').then(response => {
      this.categories = response.data.data;
      console.log(this.categories)
    });
  },
  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    this.setRangeTrack();

    var self = this;

    ['mouseup', 'mousemove'].forEach(type => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack)
        }
      })
    });

    ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend'].forEach(type => {
      document.querySelector('.track1').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track1')
      })

      document.querySelector('.track2').addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, 'track2')
      })
    })
    //
    // on track click
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    // document.querySelector('.track').addEventListener('click', function (ev) {
    //   ev.stopPropagation();
    //   self.setClickMove(ev)
    //
    // })
    //
    // document.querySelector('.track-highlight').addEventListener('click', function (ev) {
    //   ev.stopPropagation();
    //   self.setClickMove(ev)
    //
    // })
  }


}

// for range slider


</script>

