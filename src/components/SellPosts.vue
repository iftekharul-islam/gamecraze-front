<template>
  <div>
    <!-- games & categories -->
    <section class="games-categories-section">
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 mb-3">
            <div class="text-right">
            </div>
            <div class="games-categories-section--categories filter-show-mobile p-0" id="games-categories-list" :class="{ filterShow : filterShow }">
              <div class="bg-shorting-tile p-3 d-flex align-items-center justify-content-between 3 br-t-l-3 d-md-none">
                <span class="f-s-20 text-secondery gil-bold opa-9-5">{{ $t('filter', $store.state.locale) }}</span>
                <span @click="filterShow = false" class="pointer">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"></path><path d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z" fill="white"></path></svg>
                </span>
               
              </div>
                <div class="p-a-5 overflow-auto sorting-body">
                  <!-- location category -->
                  <div class="location-filter category-select">
                    <div class="mb-4 location-arrow">
                      <v-select :options="divisions" @input="setDistrict" label="name" :reduce="option => option.id" v-model="division_id" placeholder="All Bangladesh" ></v-select>
                    </div>
                    <div class="mb-4" v-if="division_id">
                      <v-select :options="selectedDistricts" label="name" @input="setThana" :reduce="option => option.id" v-model="district_id" placeholder="Choose District"></v-select>
                    </div>
                     <div class="mb-4" v-if="district_id">
                      <v-select :options="selectedThanas" label="name" :reduce="option => option.id" v-model="thana_id" placeholder="Choose Thana"></v-select>
                    </div>
                    <div class="mb-4 text-right">
                      <a href="#" @click.prevent="setLocation" class=" btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative">Search</a>
                    </div>
                  </div>
                    <!-- Game Type -->
                    <div class="select-categories">
                      <h6 class=" d-none d-lg-block">{{ $t('select_category', $store.state.locale) }}</h6>
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
                      <h6 class="mb-5">Price range</h6>
                      <vue-slider v-model="priceRange" :min-range="100" :max="100000" @drag-end="getValue" :process="process" :dot-options="dotOptions"></vue-slider>
                    </div>
                    <div class="select-platforms d-grid grid-cols-2 col-gap-16 mt-3">
                    </div>
                    <!-- button show in mobile -->
                    <div class=" mt-4">
                      <a href="javascript:void(0)" class="w-full text-center router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative" @click="clearFilter"> {{ $t('clear_filters', $store.state.locale) }}</a>
                      <a @click.prevent="filterShow = false"
                         href="#" class="text-center d-md-none btn--secondery-hover br-4 border-0 font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative w-100 gil-bold">{{ $t('apply', $store.state.locale) }}</a>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-8 col-xl-9 mb-3" :class="{'preLoadActive': responseDelay}">
            <div class="games-categories-section--tag mb-a-4 flex-column-reverse flex-md-row px-a-1">
              <div class="d-flex align-items-center flex-wrap mt-3 mt-md-0">
                <span class="tag-span" v-for="(categoryItem, categoryIndex) in checkedCategories"
                    :key="categoryItem + categoryIndex">{{ categoryItem }} <div
                  @click="removeCategoryFilter(categoryItem)" class="remove-icon"><i
                  class="fas fa-times"></i></div>
                </span>
                <span v-if="searchKey">{{ searchKey }} <div @click="removeSearchKey()" class="remove-icon"><i class="fas fa-times"></i></div></span>
              </div>
                 <div class="position-relative ml-md-auto w-full w-md-initial">
                    <div class="d-flex flex-row-reverse flex-md-row align-items-center justify-content-md-end">
                        <button class=" flex-1 br-4 bg-game-details d-flex no-outline-focus align-items-center justify-content-center d-md-none flex-1 border-0 py-2" @click="filterShow = !filterShow" :aria-pressed="filterShow ? 'true' : 'false'">
                          <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M5.82408 11.0593L9.70774 11.0712C9.9499 11.072 10.1459 11.2748 10.1459 11.5234V13.7083C10.1459 13.9577 10.0043 14.1834 9.78352 14.2878L6.25816 15.9432C6.17579 15.9813 6.08848 16 6.00117 16C5.88504 16 5.7689 15.9661 5.66758 15.899C5.49049 15.7819 5.38341 15.58 5.38341 15.3636V11.5116C5.38341 11.2613 5.5811 11.0585 5.82408 11.0593ZM14.2975 0C15.2381 0 16 0.784842 16 1.7538V2.97901C16 3.44906 15.8163 3.90045 15.4901 4.22966L10.2861 9.49362C10.1963 9.58525 10.0744 9.63616 9.94842 9.63532L5.59115 9.62174C5.45853 9.62174 5.33251 9.56489 5.2419 9.46562L0.459614 4.2059C0.163912 3.88094 0 3.45161 0 3.00616V1.75465C0 0.78569 0.761905 0 1.70255 0H14.2975Z" fill="#FFD715"/>
                          </svg>
                          <span class="m-0 text-secondery f-s-16-imp p-0 border-0 bg-transparent">{{ $t('filter', $store.state.locale) }}</span>
                        </button>
                        <!-- shorting -->
                        <div class="d-flex flex-1 grow-md-initial mr-3 mr-md-0">
                          <button v-if="descByDateTag" class="no-outline-focus d-flex bg-transparent align-items-center justify-content-center flex-1 h-100 px-2 px-md-4 py-2 br-4 text-secondery secondery-text-hover border-1 secondery-border mr-3 sorting-mobile">
                            {{ $t('date', $store.state.locale) }}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0583 8.59995C14.9 8.59995 14.7416 8.54162 14.6166 8.41662L9.99998 3.79995L5.38331 8.41662C5.14164 8.65829 4.74164 8.65829 4.49998 8.41662C4.25831 8.17495 4.25831 7.77495 4.49998 7.53328L9.55831 2.47495C9.79998 2.23328 10.2 2.23328 10.4416 2.47495L15.5 7.53328C15.7416 7.77495 15.7416 8.17495 15.5 8.41662C15.3833 8.54162 15.2166 8.59995 15.0583 8.59995Z" fill="#FFD715"/>
                              <path d="M10 17.7084C9.65833 17.7084 9.375 17.425 9.375 17.0834V3.05835C9.375 2.71668 9.65833 2.43335 10 2.43335C10.3417 2.43335 10.625 2.71668 10.625 3.05835V17.0834C10.625 17.425 10.3417 17.7084 10 17.7084Z" fill="#FFD715"/>
                            </svg>
                          </button>
                          <button v-if="ascByDateTag" class="no-outline-focus d-flex bg-transparent align-items-center justify-content-center flex-1 h-100 px-2 px-md-4 py-2 br-4 text-secondery secondery-text-hover border-1 secondery-border mr-3 sorting-mobile">
                             {{ $t('date', $store.state.locale) }}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.94169 11.4C5.10002 11.4 5.25836 11.4584 5.38336 11.5834L10 16.2L14.6167 11.5834C14.8584 11.3417 15.2584 11.3417 15.5 11.5834C15.7417 11.825 15.7417 12.225 15.5 12.4667L10.4417 17.525C10.2 17.7667 9.80002 17.7667 9.55836 17.525L4.50002 12.4667C4.25836 12.225 4.25836 11.825 4.50002 11.5834C4.61669 11.4584 4.78336 11.4 4.94169 11.4Z" fill="#FFD715"/>
                              <path d="M10 2.29165C10.3417 2.29165 10.625 2.57498 10.625 2.91665L10.625 16.9417C10.625 17.2833 10.3417 17.5667 10 17.5667C9.65833 17.5667 9.375 17.2833 9.375 16.9417L9.375 2.91665C9.375 2.57498 9.65833 2.29165 10 2.29165Z" fill="#FFD715"/>
                            </svg>
                          </button>
                          <button class="no-outline-focus d-flex bg-transparent align-items-center justify-content-center flex-1 h-100 px-2 px-md-4 py-2 br-4 text-secondery secondery-text-hover border-1 secondery-border mr-3 sorting-mobile" v-if="descByPriceTag">
                             {{ $t('prices', $store.state.locale) }}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0583 8.59995C14.9 8.59995 14.7416 8.54162 14.6166 8.41662L9.99998 3.79995L5.38331 8.41662C5.14164 8.65829 4.74164 8.65829 4.49998 8.41662C4.25831 8.17495 4.25831 7.77495 4.49998 7.53328L9.55831 2.47495C9.79998 2.23328 10.2 2.23328 10.4416 2.47495L15.5 7.53328C15.7416 7.77495 15.7416 8.17495 15.5 8.41662C15.3833 8.54162 15.2166 8.59995 15.0583 8.59995Z" fill="#FFD715"/>
                              <path d="M10 17.7084C9.65833 17.7084 9.375 17.425 9.375 17.0834V3.05835C9.375 2.71668 9.65833 2.43335 10 2.43335C10.3417 2.43335 10.625 2.71668 10.625 3.05835V17.0834C10.625 17.425 10.3417 17.7084 10 17.7084Z" fill="#FFD715"/>
                            </svg>
                          </button>
                          <button class="no-outline-focus d-flex bg-transparent align-items-center justify-content-center flex-1 h-100 px-2 px-md-4 py-2 br-4 text-secondery secondery-text-hover border-1 secondery-border mr-3 sorting-mobile" v-if="ascByPriceTag">
                            {{ $t('prices', $store.state.locale) }}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.94169 11.4C5.10002 11.4 5.25836 11.4584 5.38336 11.5834L10 16.2L14.6167 11.5834C14.8584 11.3417 15.2584 11.3417 15.5 11.5834C15.7417 11.825 15.7417 12.225 15.5 12.4667L10.4417 17.525C10.2 17.7667 9.80002 17.7667 9.55836 17.525L4.50002 12.4667C4.25836 12.225 4.25836 11.825 4.50002 11.5834C4.61669 11.4584 4.78336 11.4 4.94169 11.4Z" fill="#FFD715"/>
                              <path d="M10 2.29165C10.3417 2.29165 10.625 2.57498 10.625 2.91665L10.625 16.9417C10.625 17.2833 10.3417 17.5667 10 17.5667C9.65833 17.5667 9.375 17.2833 9.375 16.9417L9.375 2.91665C9.375 2.57498 9.65833 2.29165 10 2.29165Z" fill="#FFD715"/>
                            </svg>
                          </button>
                          <button class="d-flex bg-transparent align-items-center justify-content-center flex-1 h-42 px-2 px-md-3 py-2 br-4 text-secondery secondery-text-hover border-1 secondery-border  mr-md-0 sorting-mobile"
                            role="button" :class="showDrawer ? 'highlight': '' " @click="showDrawer = !showDrawer" >
                            <svg class="mx-auto" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.2489 8.81565C14.7689 8.81565 16 10.026 16 11.5194C16 13.0118 14.7689 14.2222 13.2489 14.2222C11.7298 14.2222 10.4978 13.0118 10.4978 11.5194C10.4978 10.026 11.7298 8.81565 13.2489 8.81565ZM6.46663 10.3664C7.1324 10.3664 7.67285 10.8973 7.67285 11.5514C7.67285 12.2046 7.1324 12.7365 6.46663 12.7365H1.20622C0.540441 12.7365 0 12.2046 0 11.5514C0 10.8973 0.540441 10.3664 1.20622 10.3664H6.46663ZM2.7511 0C4.27109 0 5.50219 1.21039 5.50219 2.70285C5.50219 4.19618 4.27109 5.40657 2.7511 5.40657C1.23199 5.40657 0 4.19618 0 2.70285C0 1.21039 1.23199 0 2.7511 0ZM14.7947 1.51866C15.4596 1.51866 16 2.04962 16 2.70285C16 3.35695 15.4596 3.88791 14.7947 3.88791H9.53426C8.86848 3.88791 8.32804 3.35695 8.32804 2.70285C8.32804 2.04962 8.86848 1.51866 9.53426 1.51866H14.7947Z" fill="#FFD715"/>
                            </svg>
                          </button>
                        </div>
                    </div>
                    <transition name="slide">
                         <div v-if="showDrawer" class="shorting-menu px-4 px-md-0 overflow-hidden position-md-absolute left-initial-imp right-md-0-imp w-md-268 z-index-99">
                            <div class="shorting-menu__content w-full w-md-268 bg-shorting br-4 border-1 d-block secondery-border left-initial-imp right-md-0-imp top-full-10px-imp p-0 overflow-hidden" >
                              <div class="d-md-none d-flex align-items-center justify-content-between bg-shorting-tile px-3 py-2">
                                <p class="mb-0 gil-bold text-secondery">Sorting</p>
                                <p class="mb-0 pointer"  @click.prevent=" showDrawer = false">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"></path><path d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z" fill="white"></path></svg>
                                </p>
                              </div>
                            <p class="mb-0 gil-bold text-md-center text-white py-2 bg-md-shorting-tile px-3">{{ $t('price', $store.state.locale) }}</p>
                            <div class="d-flex flex-column flex-md-row align-items-end align-items-md-center justify-content-center py-4 pr-3 pr-md-0">
                              <div class="mr-1 position-relative shorting-input high-to-low pr-a-5 mb-2 mb-md-0">
                                  <input type="checkbox" class="position-absolute -z-index-1 opa-0 " id="desc_price_filter" name="sort_price"
                                      @change="descPrice($event)" :checked="descByPriceTag">
                                  <label class="mb-0" for="desc_price_filter"> {{ $t('high_to_low', $store.state.locale) }}</label>
                              </div>
                              <div class=" position-relative pl-a-5 shorting-input mr-1 mr-md-0 pr-a-5 pr-md-0">
                                  <input type="checkbox" class="position-absolute -z-index-1 opa-0" id="asc_price_filter" name="sort_price"
                                        @change="ascPrice($event)" :checked="ascByPriceTag">
                                  <label class="mb-0" for="asc_price_filter">{{ $t('low_to_high', $store.state.locale) }}</label>
                              </div>

                            </div>
                            <p class="mb-0 gil-bold text-md-center text-white py-2 bg-md-shorting-tile px-3">{{ $t('date', $store.state.locale) }}</p>

                              <div class="d-flex flex-column flex-md-row align-items-end align-items-md-center justify-content-center py-4 pr-3 pr-md-0">
                                <div class="mr-1 position-relative shorting-input high-to-low pr-a-5 mb-2 mb-md-0">
                                    <input type="checkbox" class="position-absolute -z-index-1 opa-0 " id="recent_date" name="sort_date" @change="descDate($event)" :checked="descByDateTag">
                                    <label class="mb-0" for="recent_date">{{ $t('recent', $store.state.locale) }}</label>
                                </div>
                                <div class=" position-relative pl-a-5 shorting-input mr-1 mr-md-0 pr-a-5">
                                    <input type="checkbox" class="position-absolute -z-index-1 opa-0" id="older_date" name="sort_date" @change="ascDate($event)" :checked="ascByDateTag">
                                    <label class="mb-0" for="older_date">{{ $t('older', $store.state.locale) }}</label>
                                </div>
                              </div>
                              <div class="text-right p-4">
                                <a href="#" class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-full text-center"
                                @click.prevent="getSellPosts(); showDrawer = false">{{ $t('apply', $store.state.locale) }}</a>
                              </div>

                          </div>
                         </div>
                    </transition>
                 </div>
            </div>
            <div class="games-categories-section--games" v-if="posts.length">
              <div class="d-grid grid-cols-2 grid-lg-cols-3 grid-xl-cols-4 grid-gap-16 grid-gap-md-30 gamebazar-post">
                  <router-link v-for="(item, index) in posts" :key="index" :to="{ path: '/sell-post/' + item.id + '/' + item.url_name }"
                               class="">
                    <div class="product-img position-relative br-4 overflow-hidden">
                      <img :src="item.cover.url" :alt="item.name" class="img-fluid w-100" v-if="item.cover != null">
                      <img src="../assets/img/play.png" :alt="item.name" class="img-fluid w-100" v-else>

                      <span v-if="item.product_type == 1" class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-3">New</span>
                      <span v-if="item.product_type == 2" class="position-absolute top-0 left-0 bg-purple br-b-r-5 py-1 px-3 text-white br-t-l-3">Used</span>

                      <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-3 py-1 px-3 primary-text gil-medium br-b-r-5">৳ {{ item.price }}</span>
                    </div>

                    <p class="gil-bold mb-3 mt-a-4 text-white post-name">{{ item.name }}</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">{{ $t('details', $store.state.locale) }}</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                  </router-link>
              </div>
            </div>
            <div class="not-matching" v-if="noPostFound">
              <h2>{{ $t('no_product_found', $store.state.locale) }}</h2>
            </div>
            <div class="mt-5" v-if="totalPages > 1">
              <sliding-pagination
                :current="currentPage"
                :total="totalPages"
                @page-change="pageChangeHandler">
              </sliding-pagination>
            </div>
            <!-- preloader animation -->
                 <div class="preloader">
                    <div class="preloader">
                        <div class="loading">
                          <span>Loading</span>
                        </div>
                    </div>
                 </div>
              <!-- end preloader animation -->
          </div>
        </div>
      </div>
    </section>
    <!--Current Popular -->
    <section class="related-game-section current-popular sellpost-popular mb-5 mb-sm-0" id="related-game">
          <div class="container">
               <h3 class="f-s-24 gil-bold text-white mb-a-4 max-w-76pr">{{ $t('popular_games_at_gamehub', $store.state.locale) }} </h3>
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
              <router-link to="/games" class="btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('all_games', $store.state.locale) }}</router-link>
            </div>
          </div>
      </section>

  </div>
</template>

<script>
import SlidingPagination from 'vue-sliding-pagination'
import 'vue-range-component/dist/vue-range-slider.css'
import carousel from 'vue-owl-carousel';
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default {
  components: {SlidingPagination, carousel, VueSlider},
  data() {
    return {
      responseDelay: true,
      thanas: [],
      selectedDistricts: [],
      selectedThanas: [],
      divisions: [],
      districts: [],
      division_id: null,
      district_id: null,
      thana_id: null,
      priceRange: [0, 100000],
      searchKey: '',
      products: [],
      query: '',
      showDrawer: false,
      loadedPopular: false,
      populars: [],
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
      descByPriceTag: false,
      ascByPriceTag: false,
      ascByDate: '',
      ascByDateTag: false,
      descByDateTag: false,
      descByDate: '',
      sortNew: '',
      sortUsed: '',
      sortNewChecked: false,
      sortUsedChecked: false,
      isDragging: false,
      filterShow: false,
      baseColor: '#FFD715',
      process: dotsPos => [
        [
          dotsPos[0],
          dotsPos[1],
          {backgroundColor: this.baseColor}
        ],
      ],
      dotOptions: [{
        tooltip: 'always',
        tooltipStyle: {backgroundColor: this.baseColor, borderColor: this.baseColor, color: 'black'}
      }, {
        tooltip: 'always',
        tooltipStyle: {backgroundColor: this.baseColor, borderColor: this.baseColor, color: 'black'}
      }]
    }
  },
  methods: {
    setLocation(){
      this.filterShow = false
      this.getSellPosts();
    },
    setDistrict() {
      this.district_id = null;
      this.thana_id = null;
      this.selectedDistricts = this.districts.filter(district => district.division_id === this.division_id);
    },
    setThana() {
      this.thana_id = null;
      this.selectedThanas = this.thanas.filter(thana => thana.district_id === this.district_id);
    },
    getValue() {
      this.getSellPosts();
    },
    clearFilter() {
      this.$router.push({query: {}});
      this.checkedCategories = [];
      this.getSellPosts();
      this.sortNew = '';
      this.sortUsed = '';
      this.sortUsedChecked = false;
      this.sortNewChecked = false;
      this.priceRange = [0, 100000];
    },
    removeSearchKey() {
      let query = Object.assign({}, this.$route.query);
      delete query.search;
      this.$router.replace({query});
      this.getSellPosts();
    },
    searchProduct() {
      if (this.query !== '') {
        this.$router.push({name: 'sell-post', query: {categories: this.$route.query.categories, search: this.query}})
        this.getSellPosts();
      } else {
        this.$router.push({name: 'sell-post', query: {categories: this.$route.query.categories}})
        this.getSellPosts();
      }
    },
    onSelected(item) {
      this.selected = item.item;
      this.query = this.selected.name;
      this.$router.push('/sell-post/' + this.selected.id + '/' + this.selected.url_name);
    },
    getSuggestionValue(suggestion) {
      return suggestion.name;
    },
    clearPrice() {
      this.ascByPrice = '';
      this.descByPrice = '';
      this.ascByPriceTag = false;
      this.descByPriceTag = false;
    },
    ascPrice(event) {
      this.clearPrice()
      if (event.target.checked === true) {
        this.ascByPriceTag = true;
        this.ascByPrice = 1
      }
    },
    descPrice(event) {
      this.clearPrice();
      if (event.target.checked === true) {
        this.descByPriceTag = true;
        this.descByPrice = 1
      }
    },
    clearDate() {
      this.descByDate = '';
      this.ascByDate = '';
      this.ascByDateTag = false;
      this.descByDateTag = false;
    },
    ascDate(event) {
      this.clearDate();
      if (event.target.checked === true) {
        this.ascByDateTag = true;
        this.ascByDate = 1
      }
    },
    descDate(event) {
      this.clearDate();
      if (event.target.checked === true) {
        this.descByDateTag = true;
        this.descByDate = 1
      }
    },
    clearSorting() {
      this.sortNewChecked = false
      this.sortUsedChecked = false
      this.sortNew = '';
      this.sortUsed = '';
    },
    sortNewType(event) {
      this.clearSorting();
      if (event.target.checked === true) {
        this.sortNewChecked = true;
        this.sortNew = 1;
      }
      this.getSellPosts();
    },
    sortUsedType(event) {
      this.clearSorting();
      if (event.target.checked === true) {
        this.sortUsedChecked = true;
        this.sortUsed = 1;
      }
      this.getSellPosts();
    },
    pageChangeHandler(selectedPage) {
      window.scrollTo(0, 0);
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
       this.responseDelay = true;
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
        if (this.$route.query.search.trim() === ''){
          this.searchKey = '';
        }
      } else {
        this.searchKey = '';
        this.query = '';
      }
      this.$api.get('sell-posts?include=subcategory&page=' + page_no +
          '&subcategory=' + this.queryCategories +
          '&ascPrice=' + this.ascByPrice +
          '&descPrice=' + this.descByPrice +
          '&ascDate=' + this.ascByDate +
          '&descDate=' + this.descByDate +
          '&sortNew=' + this.sortNew +
          '&sortUsed=' + this.sortUsed +
          '&priceRange=' + this.priceRange  +
          '&search=' + this.searchKey +
          '&thana_id=' + this.thana_id +
          '&district_id=' + this.district_id +
          '&division_id=' + this.division_id
      ).then(response => {
        this.responseDelay = false;
        this.posts = response.data.data;
        this.allPosts = this.posts;
        this.pagination = response.data.meta.pagination;
        this.currentPage = this.pagination.current_page
        this.totalPages = this.pagination.total_pages
        this.noPostFound = false;
        if (this.posts.length == 0) {
          this.noPostFound = true;
        }
      });
    },
    getUrlParams(){
      if (this.$route.query.categories) {
        this.queryCategories = this.$route.query.categories.split(',')
      } else {
        this.queryCategories = []
      }
      this.queryCategories.forEach(item => {
        this.checkedCategories.push(item);
      })
      this.getSellPosts();
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
  },
  created() {
    window.scrollTo(0, 0);
    this.posts = [];
    this.getSellPosts();
    this.$api.get('categories?include=subcategory').then(response => {
      this.categories = response.data.data;
    });
    this.$api.get('games/popular-games?include=game.assets,game.platforms,game.genres').then(response => {
      this.populars = response.data.data;
      if (this.populars.length) {
        this.loadedPopular = true
      }
    });
    this.$api.get('all-sell-post').then(response => {
      this.products = response.data.data;
    });
    this.$root.$on('searchProductEvent', () => {
      this.getSellPosts();
    })
    this.getUrlParams();
    this.$api.get('division-list').then (response =>{
      this.divisions = response.data.data
    });
    this.$api.get('district-list').then (response =>{
      this.districts = response.data.data
    });
    this.$api.get('thana-list').then (response =>{
      this.thanas = response.data.data
    });
  }
}


</script>

