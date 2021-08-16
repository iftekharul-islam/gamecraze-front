<template>
  <div>
    <!-- games & categories -->
    <section class="games-categories-section">
      <div class="container">
        <div class="row">
           <div class="col-md-6 ml-auto">
              <div class="gamebazar-search mb-a-6">
                        <div class="d-flex justify-content-end">
                          <div class="gamebazar__search position-relative">
                            <vue-autosuggest
                                v-model="query"
                                :suggestions="filteredOptions"
                                @focus="focusMe"
                                @keyup.enter="searchProduct"
                                @click="clickHandler"
                                @input="onInputChange"
                                @selected="onSelected"
                                :get-suggestion-value="getSuggestionValue"
                                :input-props="{id:'autosuggest__input',class:'auto-suggest-menu',placeholder:'Search...'}">
                              <div  slot-scope="{ suggestion }" class="w-100">
                                <div class="d-flex align-items-center justify-content-between">
                                  
                                   <div class="d-flex align-items-center">
                                      <div class="w-100px min-w-100 h-75 overflow-hidden br-4">
                                         <img :src="suggestion.item.cover.url" class="img-fluid  h-100 w-100" alt="Gamehub Logo logo" v-if="suggestion.item.cover != null">
                                         <img src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/11/PS5-PS4-Game-Forced-Install-Problem.jpg" class="img-fluid  h-100 w-100" alt="Gamehub Logo logo" v-else>
                                      </div>
                                      <div class="ml-3">
                                        <span class="d-block gil-bold mb-2">{{ suggestion.item.name }}</span>
                                        <span v-if="suggestion.item.product_type === 1">
                                          {{ $t('new', $store.state.locale) }}
                                        </span>
                                        <span v-if="suggestion.item.product_type === 2">
                                          {{ $t('used', $store.state.locale) }}&nbsp;
                                            <span v-if="suggestion.item.used_year != null">
                                                  {{ suggestion.item.used_year }}&nbsp;
                                                  {{ $t('year', $store.state.locale) }}&nbsp;
                                            </span>
                                            <span v-if="suggestion.item.used_month != null">
                                                  {{ suggestion.item.used_month }}&nbsp;
                                                  {{ $t('month', $store.state.locale) }}&nbsp;
                                            </span>
                                            <span v-if="suggestion.item.used_day != null">
                                                  {{ suggestion.item.used_day }}&nbsp;
                                                  {{ $t('day', $store.state.locale) }}
                                            </span>
                                        </span>
                                      </div>
                                   </div>
                                   <span class="text-secondery gil-bold font-weight-bold">৳ {{ suggestion.item.price }}</span>
                                </div>
<!--                                 <div class="bg-vie-all-gamebazar position-absolute bottom-0 left-0 w-100 py-2 text-center">-->
<!--                                   <a href="/sell-posts" class="gil-bold text-secondery">View all</a>-->
<!--                                </div>-->
                              </div>
                            </vue-autosuggest>
                          </div>
                          <div class="search-icon pointer  px-3 d-flex align-items-center justify-content-center bg-secondery-gradient" @change="searchProduct()">
                              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.84199 13.9454C8.42078 13.9454 9.87214 13.392 11.0301 12.4742L14.7898 16.3057L15.9991 15.0733L12.2395 11.2418C13.1409 10.0608 13.684 8.58168 13.684 6.97272C13.684 3.12814 10.6145 0 6.84199 0C3.06949 0 0 3.12814 0 6.97272C0 10.8173 3.06949 13.9454 6.84199 13.9454ZM6.84199 1.74318C9.67201 1.74318 11.9735 4.08863 11.9735 6.97272C11.9735 9.85681 9.67201 12.2023 6.84199 12.2023C4.01197 12.2023 1.7105 9.85681 1.7105 6.97272C1.7105 4.08863 4.01197 1.74318 6.84199 1.74318Z" fill="black"/>
                              </svg>
                          </div>
                        </div>
                    </div>
           </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-3 mb-3">
            <div class="text-right">
              <!-- <button id="btn--filter" class="btn--filter" v-on:click="toggleMenu()">
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
              </button> -->
            </div>
            <div class="games-categories-section--categories filter-show-mobile p-0" id="games-categories-list" :class="{ filterShow : filterShow }">
              <div class="bg-shorting-tile p-3 d-flex align-items-center justify-content-between br-t-r-5 br-t-l-5 d-md-none">
                <span class="fs-20 text-secondery gil-bold opa-9">{{ $t('filter', $store.state.locale) }}</span>
                <span @click="filterShow = false" class="pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.66671 1.06789L3.66666 1.06794L3.67262 1.07396L7.5496 4.9897L7.9049 5.34856L8.26021 4.9897L12.1372 1.07396L12.1372 1.07401L12.1431 1.06789C12.8678 0.310704 14.0645 0.310705 14.7892 1.06789L14.7891 1.06794L14.7951 1.07396C15.5238 1.8099 15.5238 3.00455 14.7951 3.74049L10.9181 7.65623L10.5698 8.00802L10.9181 8.35981L14.7951 12.2756C15.5238 13.0115 15.5238 14.2062 14.7951 14.9421C14.4168 15.3242 13.9429 15.5 13.4661 15.5C12.9894 15.5 12.5155 15.3242 12.1372 14.9421L8.26021 11.0263L7.9049 10.6675L7.5496 11.0263L3.67262 14.9421L3.66656 14.9482L3.66071 14.9545C3.32515 15.3177 2.83124 15.5 2.34367 15.5C1.86357 15.5 1.39846 15.3225 1.0584 14.9545L1.05255 14.9482L1.04649 14.9421C0.317836 14.2062 0.317836 13.0115 1.04649 12.2756L4.92347 8.35981L5.27178 8.00802L4.92347 7.65623L1.04649 3.74049C0.317837 3.00455 0.317836 1.8099 1.04649 1.07396L1.04654 1.07401L1.0524 1.06789C1.7771 0.310705 2.94201 0.310705 3.66671 1.06789ZM7.5531 4.28259L4.02793 0.722167H0.691183C-0.230394 1.65296 -0.230394 3.16149 0.691183 4.09228L4.56816 8.00802L0.691183 11.9238C-0.230394 12.8546 -0.230394 14.3631 0.691183 15.2939C1.13608 15.7753 1.73987 16 2.34367 16C2.94746 16 3.58303 15.7753 4.02793 15.2939L7.5531 11.7335L7.5496 11.7299L7.9049 11.3781L8.26021 11.7299L8.25671 11.7335L11.7819 15.2939C12.2586 15.7753 12.8624 16 13.4661 16C14.0699 16 14.6737 15.7753 15.1504 15.2939C16.072 14.3631 16.072 12.8546 15.1504 11.9238L11.2734 8.00802L15.1504 4.09228C16.072 3.16149 16.072 1.65296 15.1504 0.722167C14.2288 -0.240722 12.7035 -0.240722 11.7819 0.722167L8.25671 4.28259L8.26021 4.28612L7.9049 4.63791L7.5496 4.28612L7.5531 4.28259Z" fill="white" stroke="#ffffff"/>
                    </svg>
                </span>
              </div>
                <div class="p-a-5 overflow-auto">
                    <!-- Game Type -->
                    <div class="select-categories">
                      <h6 class="">{{ $t('select_category', $store.state.locale) }}</h6>
                      <div v-if="categories.length">
                        <div class="form-group form-check mb-a-6" v-for="(category, index) in categories" :key="'category' + index">
                          <h6 v-if="category.subcategory.data.length" class="-ml-20px">{{ category.name }}</h6>
                          <div v-if="category.subcategory.data.length">
                            <div class="mb-a-3" v-for="(subItem, index) in category.subcategory.data" :key="index">
                              <input type="checkbox" class="custom-control-input" :id="subItem.name + '-game'"
                                     :checked="checkedCategories.includes(subItem.name)"
                                     @change="changeCheckedCategories(subItem.name)">
                              <label class="custom-control-label" :for="subItem.name + '-game'">{{ subItem.name }}</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Filter -->
                    <div class="select-platforms form-check">
                      <h6 class="margin__bottom -ml-20px">Filter</h6>
                      <div class="form-group ">
                        <div class="mb-a-3">
                          <input type="checkbox" name="newold" class="custom-control-input" id="new_type_filter"
                                @change="sortNewType($event)" :checked="sortNewChecked">
                          <label class="custom-control-label" for="new_type_filter">New Product</label>
                        </div>
                        <div class="mb-a-3">
                          <input type="checkbox" name="newold" class="custom-control-input" id="used_type_filter"
                                @change="sortUsedType($event)" :checked="sortUsedChecked">
                          <label class="custom-control-label" for="used_type_filter">Used Product</label>
                        </div>
                      </div>
                    </div>
                    <div class="select-platforms mt-a-6">
                      <h6>Price range</h6>
                      <!-- <vue-range-slider ref="slider" v-model="value" :min="0" :max="1000" :enable-cross="false" :min-range="10"></vue-range-slider> -->
                      <div class="track-container range-slider">
                        <!--  <span class="range-value min">{{ minValue}} </span> <span class="range-value max">{{ maxValue }}</span>-->
                        <div class="range-slider__bar" ref="_vpcTrack"></div>
                        <div class="range-slider__highlight-bar" ref="trackHighlight"></div>
                        <button class="range-slider__ball track1 position-relative" ref="track1">
                          <span class="position-absolute inline-block "><div class="triangle-rounded"></div> <input type="number" class="p-0 border-0 w-initial text-center gil-medium pe-none" :min="min" :max="max" v-model="minValue"></span>
                        </button>
                        <button class="range-slider__ball track2" ref="track2">
                          <span class="position-absolute inline-block"><div class="triangle-rounded"></div><input type="number" class="p-0 border-0 w-initial text-center gil-medium pe-none" :min="min" :max="max" v-model="maxValue"></span>
                        </button>
                      </div>
                    </div>
                    <div class="select-platforms d-grid grid-cols-2 col-gap-16 mt-3">
                    </div>
                    <!-- button show in mobile -->
                    <div class=" mt-4">
                      <a href="javascript:void(0)" class="d-block py-2 border-1 border-white-50 br-4 text-white mb-3 text-center gil-bold" @click="clearFilter"> {{ $t('clear_filters', $store.state.locale) }}</a>
                      <a @click="filterShow = false"
                         href="#" class="d-block d-md-none py-2 bg-secondery-gradient br-4 text-black text-center gil-bold primary-text-hover">{{ $t('apply', $store.state.locale) }}</a>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-9 mb-3">
            <div class="games-categories-section--tag mb-a-4 flex-column-reverse flex-md-row px-a-1">
              <div class="d-flex align-items-center flex-wrap mt-3 mt-md-0">
                <span class="tag-span" v-for="(categoryItem, categoryIndex) in checkedCategories"
                    :key="categoryItem + categoryIndex">{{ categoryItem }} <div
                  @click="removeCategoryFilter(categoryItem)" class="remove-icon"><i
                  class="fas fa-times"></i></div>
                </span>
                <span v-if="$route.query.search">{{$route.query.search}} <div @click="removeSearchKey()" class="remove-icon"><i class="fas fa-times"></i></div></span>
              </div>
                 <div class="position-relative ml-md-auto w-full w-md-initial">
                    <div class="d-flex flex-row-reverse flex-md-row align-items-center">
                        <button class="br-4 bg-game-details d-flex no-outline-focus align-items-center justify-content-center d-md-none flex-1 border-0 py-2" @click="filterShow = !filterShow" :aria-pressed="filterShow ? 'true' : 'false'">
                          <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.82408 11.0593L9.70774 11.0712C9.9499 11.072 10.1459 11.2748 10.1459 11.5234V13.7083C10.1459 13.9577 10.0043 14.1834 9.78352 14.2878L6.25816 15.9432C6.17579 15.9813 6.08848 16 6.00117 16C5.88504 16 5.7689 15.9661 5.66758 15.899C5.49049 15.7819 5.38341 15.58 5.38341 15.3636V11.5116C5.38341 11.2613 5.5811 11.0585 5.82408 11.0593ZM14.2975 0C15.2381 0 16 0.784842 16 1.7538V2.97901C16 3.44906 15.8163 3.90045 15.4901 4.22966L10.2861 9.49362C10.1963 9.58525 10.0744 9.63616 9.94842 9.63532L5.59115 9.62174C5.45853 9.62174 5.33251 9.56489 5.2419 9.46562L0.459614 4.2059C0.163912 3.88094 0 3.45161 0 3.00616V1.75465C0 0.78569 0.761905 0 1.70255 0H14.2975Z" fill="#FFD715"/>
                          </svg>
                          <span class="m-0 text-secondery f-s-16-imp p-0 border-0 bg-transparent">{{ $t('filter', $store.state.locale) }}</span>
                        </button>
                        <button class="d-flex bg-transparent align-items-center justify-content-center flex-1 h-100 px-0 px-md-4 py-2 br-4 text-secondery secondery-text-hover border-1 secondery-border mr-3 mr-md-0 sorting-mobile"
                           role="button" :class="showDrawer ? 'highlight': '' " @click="show" >
                          <svg class="mr-3" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2489 8.81565C14.7689 8.81565 16 10.026 16 11.5194C16 13.0118 14.7689 14.2222 13.2489 14.2222C11.7298 14.2222 10.4978 13.0118 10.4978 11.5194C10.4978 10.026 11.7298 8.81565 13.2489 8.81565ZM6.46663 10.3664C7.1324 10.3664 7.67285 10.8973 7.67285 11.5514C7.67285 12.2046 7.1324 12.7365 6.46663 12.7365H1.20622C0.540441 12.7365 0 12.2046 0 11.5514C0 10.8973 0.540441 10.3664 1.20622 10.3664H6.46663ZM2.7511 0C4.27109 0 5.50219 1.21039 5.50219 2.70285C5.50219 4.19618 4.27109 5.40657 2.7511 5.40657C1.23199 5.40657 0 4.19618 0 2.70285C0 1.21039 1.23199 0 2.7511 0ZM14.7947 1.51866C15.4596 1.51866 16 2.04962 16 2.70285C16 3.35695 15.4596 3.88791 14.7947 3.88791H9.53426C8.86848 3.88791 8.32804 3.35695 8.32804 2.70285C8.32804 2.04962 8.86848 1.51866 9.53426 1.51866H14.7947Z" fill="#FFD715"/>
                          </svg>
                          Sorting
                        </button>
                    </div>
                    <transition name="slide">
                          <div class="dropdown-menu w-268 bg-shorting br-4 border-1 d-block secondery-border left-initial-imp right-md-0-imp top-full-10px-imp p-0 overflow-hidden" v-if="showDrawer">
                            <p class="mb-0 gil-bold text-center text-white py-2 bg-shorting-tile">Price</p>
                            <div class="d-flex justify-content-center py-4">
                              <div class="mr-1 position-relative shorting-input high-to-low pr-a-5">
                                  <input type="radio" class="position-absolute -z-index-1 opa-0 " id="desc_price_filter" name="sort_price"
                                      @change="descPrice($event)">
                                  <label class="mb-0" for="desc_price_filter">High To Low</label>
                              </div>
                              <div class=" position-relative pl-a-5 shorting-input">
                                  <input type="radio" class="position-absolute -z-index-1 opa-0" id="asc_price_filter" name="sort_price"
                                        @change="ascPrice($event)">
                                  <label class="mb-0" for="asc_price_filter">Low To High</label>
                              </div>

                            </div>
                            <p class="mb-0 gil-bold text-center text-white py-2 bg-shorting-tile">Date</p>

                              <div class="d-flex justify-content-center py-4">
                                <div class="mr-1 position-relative shorting-input high-to-low pr-a-5">
                                    <input type="radio" class="position-absolute -z-index-1 opa-0 " id="recent_date" name="sort_date" @change="descDate($event)">
                                    <label class="mb-0" for="recent_date">Recent</label>
                                </div>
                                <div class=" position-relative pl-a-5 shorting-input">
                                    <input type="radio" class="position-absolute -z-index-1 opa-0" id="older_date" name="sort_date" @change="ascDate($event)">
                                    <label class="mb-0" for="older_date">Older</label>
                                </div>
                              </div>
                              <div class="text-right p-4">
                                <a href="#" class="bg-secondery-gradient br-4 d-inline-block gil-bold primary-text py-2 primary-text-hover px-4"
                                @click="showDrawer = false">Apply</a>
                              </div>

                          </div>
                        </transition>
                 </div>
            </div>
            <div class="games-categories-section--games" v-if="posts.length">
              <div class="d-grid grid-cols-2 grid-md-cols-3 grid-lg-cols-4 grid-gap-16 grid-gap-md-30 gamebazar-post">
                  <router-link v-for="(item, index) in posts" :key="index" :to="{ path: '/sell-post/' + item.id + '/' + item.url_name }"
                               class="">
                    <div class="product-img position-relative br-4 overflow-hidden">
                      <img :src="item.cover.url" :alt="item.name" class="img-fluid w-100" v-if="item.cover != null">
                      <img src="../assets/img/play.png" :alt="item.name" class="img-fluid w-100" v-else>

                      <span v-if="item.product_type == 1" class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5">New</span>
                      <span v-if="item.product_type == 2" class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5">Used</span>

                      <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5">৳ {{ item.price }}</span>
                    </div>

                    <p class="gil-bold mb-3 mt-a-4 text-white">{{ item.name }}</p>
                        <span v-if="item.product_type == 1" class="mb-2 text-white d-inline-block">
                          {{ $t('new', $store.state.locale) }}&nbsp;
                        </span>
                        <span v-if="item.product_type == 2" class="mb-2 text-white d-inline-block">
                          {{ $t('used', $store.state.locale) }}&nbsp;
                        <span v-if="item.used_year != null">
                              {{ item.used_year }}&nbsp;
                              {{ $t('year', $store.state.locale) }}&nbsp;
                        </span>
                        <span v-if="item.used_month != null">
                              {{ item.used_month }}&nbsp;
                              {{ $t('month', $store.state.locale) }}&nbsp;
                        </span>
                        <span v-if="item.used_day != null">
                              {{ item.used_day }}&nbsp;
                              {{ $t('day', $store.state.locale) }}
                        </span>
                        </span>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                  </router-link>
              </div>
              <!-- <div class="text-center my-5">
                    <a href="#" class="btn--collision br-4 border-1 secondery-border gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative">Load more</a>
                </div> -->
            </div>
            <div class="not-matching" v-if="noPostFound">
              <h2>{{ $t('noting_to_show', $store.state.locale) }}</h2>
            </div>
            <div class="mt-5" v-if="totalPages > 1">
              <sliding-pagination
                :current="currentPage"
                :total="totalPages"
                @page-change="pageChangeHandler">
              </sliding-pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Current Popular -->
    <section class="related-game-section current-popular" id="related-game">
          <div class="container">
               <h3 class="f-s-24 gil-bold text-white mb-a-4">{{ $t('popular_games_at_gamehub', $store.state.locale) }} :</h3>
              <!-- new carousel -->
            <div class="position-relative">
              <carousel
                  v-if="loadedPopular"
                  :autoplay ="false"
                  :loop ="true"
                  :center ="false"
                  :nav ="false"
                  :dots ="false"
                  :margin ="32"
                  :responsive="{ 0:{items:1, stagePadding:0, center:false,},
                              600:{items:2, stagePadding:0, center:false,},
                              1000:{items:3, stagePadding:0,},
                              1400:{items:4, stagePadding:0, center:false,}}">
                <template slot="prev">
                  <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center secondery-border br-4 pointer vue-owl-nav-left w-32 h-32">
                    <button class="owl-prev z-index-9 h-100 w-100">
                        <span class="prev">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.87425 9.69787C8.08224 9.58566 8.21191 9.37228 8.21191 9.14021L8.21191 5.52648L15.3473 5.52648C15.7076 5.52648 16 5.24085 16 4.88891C16 4.53697 15.7076 4.25134 15.3473 4.25134L8.21191 4.25134V0.637613C8.21191 0.404688 8.08224 0.191316 7.87425 0.0799538C7.66625 -0.0331081 7.41213 -0.0254573 7.2111 0.0978057L0.304596 4.3491C0.114876 4.46642 0 4.66959 0 4.88891C0 5.10823 0.114876 5.31141 0.304596 5.42872L7.2111 9.68002C7.31727 9.74462 7.43824 9.77778 7.55921 9.77778C7.66712 9.77778 7.7759 9.75058 7.87425 9.69787Z" fill="#FFD715"/>
                            </svg>
                        </span>
                    </button>
                  </div>
                </template>

                <template slot="next">
                  <div class="vue-owl-nav d-flex align-items-center z-index-9 justify-content-center secondery-border br-4 pointer vue-owl-nav-right w-32 h-32">
                    <button class="owl-next z-index-9 h-100 w-100">
                        <span class="next">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12576 0.30213C7.91776 0.414342 7.78809 0.627714 7.78809 0.859789L7.78809 4.47352L0.652707 4.47352C0.292413 4.47352 4.5817e-07 4.75915 4.27402e-07 5.11109C3.96635e-07 5.46302 0.292413 5.74865 0.652707 5.74865L7.78809 5.74865L7.78809 9.36239C7.78809 9.59531 7.91776 9.80868 8.12575 9.92005C8.33375 10.0331 8.58787 10.0255 8.7889 9.90219L15.6954 5.6509C15.8851 5.53358 16 5.33041 16 5.11109C16 4.89177 15.8851 4.68859 15.6954 4.57128L8.7889 0.319982C8.68273 0.255375 8.56176 0.222222 8.44079 0.222222C8.33288 0.222222 8.2241 0.249424 8.12576 0.30213Z" fill="#FFD715"/>
                            </svg>
                        </span>
                    </button>
                  </div>
                </template>

                <div class="item" v-for="(related, index) in populars" :key="index">
                  <router-link :to="{ path: '/game-details/' + related.game.data.slug}" @click.native="window.scrollTo(0,0);" class="games-categories-section--games--game-card-box game-card-hover-outer">
                    <div class="game-card game-card-hover-inner">
                      <a class="display-image" href="javascript:void(0)">
                        <img :src="related.game.data.poster_url" :alt="related.game.data.name" class="img-fluid" v-if="related.game.data.poster_url != null">
                        <img src="../assets/img/category/fifa20.jpg" class="img-fluid w-100" alt="Gamebazar image" v-else>
                      </a>
                      <div class="game-card--details">
                        <a href="javascript:void(0)"> <h6>{{related.game.data.name}}</h6></a>
                        <div class="d-flex">
                          <span v-for="(genre, index) in related.game.data.genres.data" :key="'B' +index" >{{ genre.name }}<span class="mr-1" v-if="index < related.game.data.genres.data.length-1">, </span></span>
                        </div>
                        <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">
                          <div class="game-card--details--platforms"> <a href="javascript:void(0)" v-for="(platform, index) in related.game.data.platforms.data" :key="index"><img :src="platform.url" alt="ps4"></a> </div>
                          <span class="game-rating">{{ related.game.data.rating }}</span>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>

              </carousel>
            </div>
            <div class="text-center mt-5">
                  <a href="#" class="btn--collision br-4 border-1 secondery-border gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('all_games', $store.state.locale) }}</a>
            </div>
          </div>
      </section>

  </div>
</template>

<script>
import SlidingPagination from 'vue-sliding-pagination'
import 'vue-range-component/dist/vue-range-slider.css'
import carousel from 'vue-owl-carousel';
export default {
  components: {SlidingPagination, carousel},
  data() {
    return {
      searchKey: '',
      products: [],
      query: '',
      showDrawer: false,
      loadedPopular: false,
      populars: [],
      min: 0,
      max: 100000,
      minValue: 0,
      maxValue: 100000,
      noPostFound: false,
      posts: [],
      allPosts: [],
      categories: [],
      checkedCategories: [],
      queryCategories: [],
      isHidden: false,
      pagination: '',
      currentPage: 0,
      totalPages: 0,
      ascByPrice: '',
      descByPrice: '',
      ascByDate: '',
      descByDate: '',
      sortNew: '',
      sortUsed: '',
      sortNewChecked: false,
      sortUsedChecked: false,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      filterShow: false,
      pos: {
        curTrack: null
      }
    }
  },
  methods: {
    clearFilter() {
      this.$router.push({query: {}});
      this.checkedCategories = [];
      this.getSellPosts();
      this.sortNew = '';
      this.sortUsed = '';
      this.sortUsedChecked = false;
      this.sortNewChecked = false;
    },
    removeSearchKey() {
      let query = Object.assign({}, this.$route.query);
      delete query.search;
      this.$router.replace({ query });
      this.getSellPosts();
    },
    focusMe(e) {
      console.log(e)
    },
    searchProduct() {
      if(this.query !== '') {
        this.$router.push({name: 'sell-post', query: {categories: this.$route.query.categories, search: this.query}})
        this.getSellPosts();
      }
      else {
        this.$router.push({name: 'sell-post', query: {categories: this.$route.query.categories}})
        this.getSellPosts();
      }
    },
    clickHandler() {

    },
    onInputChange(text) {
      // event fired when the input changes
      console.log(text)
    },
    onSelected(item) {
      console.log(item);
      this.selected = item.item;
      this.query = this.selected.name;
      this.$router.push('/sell-post/' + this.selected.id + '/' + this.selected.url_name);
    },
    getSuggestionValue(suggestion) {
      return suggestion.name;
    },
    show(e) {
      this.showDrawer = !this.showDrawer;
    },
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
    ascDate(event) {
      this.descByDate = '';
      this.ascByDate = event.target.checked === true ? 1 : '';
      console.log(this.ascByDate)
      this.getSellPosts();
    },
    descDate(event) {
      this.ascByDate = '';
      this.descByDate = event.target.checked === true ? 1 : '';
      console.log(this.descByDate)
      this.getSellPosts();
    },
    sortNewType(event) {
      console.log(event.target.checked);
      console.log(this.sortNewChecked);
      console.log(this.sortUsedChecked);
      this.sortNewChecked = false
      this.sortUsedChecked = false
      this.sortNew = '';
      this.sortUsed = '';
      if (event.target.checked === true){
        this.sortNewChecked = true;
        this.sortNew = 1;
      }
      this.getSellPosts();
    },
    sortUsedType(event) {
      this.sortNewChecked = false
      this.sortUsedChecked = false
      this.sortNew = '';
      this.sortUsed = '';
      if (event.target.checked === true){
        this.sortUsedChecked = true;
        this.sortUsed = 1;
      }
      this.getSellPosts();
    },
    pageChangeHandler(selectedPage) {
      window.scrollTo(0,0);
      this.currentPage = selectedPage
      this.getSellPosts(selectedPage);
    },
    postsById(id) {
      this.$api.get('sell-posts/' + id + '?include=subcategory').then(response => {
        this.posts = response.data.data;
      });
    },
    removeCategoryFilter(value) {
      const index = this.checkedCategories.indexOf(value);
      if (index > -1) {
        this.checkedCategories.splice(index, 1);
      }
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
      if (this.$route.query.search) {
        this.searchKey = this.$route.query.search
      }
      else {
        this.searchKey = '';
        this.query = '';
      }
      this.noPostFound = false;
      this.$api.get('sell-posts?include=subcategory&page=' + page_no + '&subcategory=' + this.queryCategories + '&ascPrice=' + this.ascByPrice + '&descPrice=' + this.descByPrice + '&ascDate=' + this.ascByDate + '&descDate=' + this.descByDate + '&sortNew=' + this.sortNew + '&sortUsed=' + this.sortUsed + '&minPrice=' + this.minValue + '&maxPrice=' + this.maxValue + '&search=' + this.searchKey).then(response => {
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
  computed: {
    filteredOptions() {
      return [
        {
          data: this.products.filter(option => {
            return option.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          })
        }
      ];
    },
  },
  watch: {
    checkedCategories: function () {
      if (this.checkedCategories.length) {
        this.$router.push({
          query: Object.assign({}, this.$route.query, {
            categories: this.checkedCategories.join(),
            search: this.$route.query.search
          })
        })
      } else {
        this.$router.push({query: {search: this.$route.query.search}})
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
    window.scrollTo(0,0);
    this.posts = [];
    this.getSellPosts();
    this.$api.get('categories?include=subcategory').then(response => {
      this.categories = response.data.data;
    });
    this.$api.get('games/popular-games?include=game.assets,game.platforms,game.genres').then(response => {
      this.populars = response.data.data;
      if (this.populars.length > 0) {
        this.loadedPopular = true
      }
    });
    this.$api.get('all-sell-post').then(response => {
      this.products = response.data.data;
    });
    this.$root.$on('searchProductEvent', () => {
      this.getSellPosts();
    })
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
  }


}

// for range slider


</script>

