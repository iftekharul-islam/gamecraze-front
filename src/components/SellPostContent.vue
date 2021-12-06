<template>
    <div class="w-full">
        <div class="dashboard-right">
           <!-- sell post -->
           <div class="sellpost">
               <div class="total-sellpost d-flex justify-content-between">
                   <div class="total-sellpost__left">
                       <div class="total-sellpost__content"  >
                           <h1 class="text-secondery sellpost-count mb-0 ">63563</h1>
                           <p class="text-secondery opa-8 mb-0 gil-medium">Total sell post</p>
                       </div>
                       <div class="total-sellpost__content">
                           <h1 class="text-secondery sellpost-count mb-0">63563</h1>
                           <p class="text-secondery opa-8 mb-0 gil-medium">Total sell post</p>
                       </div>
                       <div class="total-sellpost__content">
                           <h1 class="text-secondery sellpost-count mb-0">63563</h1>
                           <p class="text-secondery opa-8 mb-0 gil-medium">Total sell post</p>
                       </div>
                       <div class="total-sellpost__content">
                           <h1 class="text-secondery sellpost-count mb-0">63563</h1>
                           <p class="text-secondery opa-8 mb-0 gil-medium">Total sell post</p>
                       </div>
                       <div class="total-sellpost__content">
                           <h1 class="text-secondery sellpost-count mb-0">63563</h1>
                           <p class="text-secondery opa-8 mb-0 gil-medium">Total sell post</p>
                       </div>
                       <div class="total-sellpost__content">
                           <h1 class="text-secondery sellpost-count mb-0">63563</h1>
                           <p class="text-secondery opa-8 mb-0 gil-medium">Total sell post</p>
                       </div>
                   </div>
                   <div class="total-sellpost__right">
                       <router-link to="/" class="new-sellpost d-flex align-items-center justify-content-center flex-column">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M19.9997 36.6668C29.2044 36.6668 36.6663 29.2049 36.6663 20.0002C36.6663 10.7954 29.2044 3.3335 19.9997 3.3335C10.7949 3.3335 3.33301 10.7954 3.33301 20.0002C3.33301 29.2049 10.7949 36.6668 19.9997 36.6668Z" fill="#292D32"/>
                                <path d="M26.6663 18.7502H21.2497V13.3335C21.2497 12.6502 20.683 12.0835 19.9997 12.0835C19.3163 12.0835 18.7497 12.6502 18.7497 13.3335V18.7502H13.333C12.6497 18.7502 12.083 19.3168 12.083 20.0002C12.083 20.6835 12.6497 21.2502 13.333 21.2502H18.7497V26.6668C18.7497 27.3502 19.3163 27.9168 19.9997 27.9168C20.683 27.9168 21.2497 27.3502 21.2497 26.6668V21.2502H26.6663C27.3497 21.2502 27.9163 20.6835 27.9163 20.0002C27.9163 19.3168 27.3497 18.7502 26.6663 18.7502Z" fill="#292D32"/>
                            </svg>
                            <p class="mt-3 mb-0 primary-text gil-bold">New sell post</p>
                       </router-link>
                   </div>
               </div>
               <!-- tags and filtering -->
               <div class="tag ">
                   <div class="tag__left">
                       <div class="sellpost-tags flex-wrap">
                           <div class="tags">
                              <div class="sellpost-tags__content" :class="{ active: sellPostTags }" @click="sellPostTags = true">
                                   Inactive
                              </div>
                               <!-- icon -->
                               <div class="icon" :class="{ dNone: !sellPostTags }" @click="sellPostTags = false">
                                    <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" rx="10" fill="#4E5A73"/>
                                            <path d="M12.2775 11.1775L10.8275 9.7275L12.2275 8.3275C12.5175 8.0375 12.5175 7.5575 12.2275 7.2675C11.9375 6.9775 11.4575 6.9775 11.1675 7.2675L9.7675 8.6675L8.3175 7.2175C8.0275 6.9275 7.5475 6.9275 7.2575 7.2175C6.9675 7.5075 6.9675 7.9875 7.2575 8.2775L8.7075 9.7275L7.2175 11.2175C6.9275 11.5075 6.9275 11.9875 7.2175 12.2775C7.3675 12.4275 7.5575 12.4975 7.7475 12.4975C7.9375 12.4975 8.1275 12.4275 8.2775 12.2775L9.7675 10.7875L11.2175 12.2375C11.3675 12.3875 11.5575 12.4575 11.7475 12.4575C11.9375 12.4575 12.1275 12.3875 12.2775 12.2375C12.5675 11.9475 12.5675 11.4775 12.2775 11.1775Z" fill="white"/>
                                        </svg>
                                </div>
                           </div>
                           <div class="tags">
                              <div class="sellpost-tags__content" :class="{ active: sellPostTags }" @click="sellPostTags = true">
                                   Inactive
                              </div>
                               <!-- icon -->
                               <div class="icon" :class="{ dNone: !sellPostTags }" @click="sellPostTags = false">
                                    <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" rx="10" fill="#4E5A73"/>
                                            <path d="M12.2775 11.1775L10.8275 9.7275L12.2275 8.3275C12.5175 8.0375 12.5175 7.5575 12.2275 7.2675C11.9375 6.9775 11.4575 6.9775 11.1675 7.2675L9.7675 8.6675L8.3175 7.2175C8.0275 6.9275 7.5475 6.9275 7.2575 7.2175C6.9675 7.5075 6.9675 7.9875 7.2575 8.2775L8.7075 9.7275L7.2175 11.2175C6.9275 11.5075 6.9275 11.9875 7.2175 12.2775C7.3675 12.4275 7.5575 12.4975 7.7475 12.4975C7.9375 12.4975 8.1275 12.4275 8.2775 12.2775L9.7675 10.7875L11.2175 12.2375C11.3675 12.3875 11.5575 12.4575 11.7475 12.4575C11.9375 12.4575 12.1275 12.3875 12.2775 12.2375C12.5675 11.9475 12.5675 11.4775 12.2775 11.1775Z" fill="white"/>
                                        </svg>
                                </div>
                           </div>
                           <div class="tags">
                              <div class="sellpost-tags__content" :class="{ active: sellPostTags }" @click="sellPostTags = true">
                                   Inactive
                              </div>
                               <!-- icon -->
                               <div class="icon" :class="{ dNone: !sellPostTags }" @click="sellPostTags = false">
                                    <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" rx="10" fill="#4E5A73"/>
                                            <path d="M12.2775 11.1775L10.8275 9.7275L12.2275 8.3275C12.5175 8.0375 12.5175 7.5575 12.2275 7.2675C11.9375 6.9775 11.4575 6.9775 11.1675 7.2675L9.7675 8.6675L8.3175 7.2175C8.0275 6.9275 7.5475 6.9275 7.2575 7.2175C6.9675 7.5075 6.9675 7.9875 7.2575 8.2775L8.7075 9.7275L7.2175 11.2175C6.9275 11.5075 6.9275 11.9875 7.2175 12.2775C7.3675 12.4275 7.5575 12.4975 7.7475 12.4975C7.9375 12.4975 8.1275 12.4275 8.2775 12.2775L9.7675 10.7875L11.2175 12.2375C11.3675 12.3875 11.5575 12.4575 11.7475 12.4575C11.9375 12.4575 12.1275 12.3875 12.2775 12.2375C12.5675 11.9475 12.5675 11.4775 12.2775 11.1775Z" fill="white"/>
                                        </svg>
                                </div>
                           </div>
                           <div class="tags">
                              <div class="sellpost-tags__content" :class="{ active: sellPostTags }" @click="sellPostTags = true">
                                   Inactive
                              </div>
                               <!-- icon -->
                               <div class="icon" :class="{ dNone: !sellPostTags }" @click="sellPostTags = false">
                                    <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" rx="10" fill="#4E5A73"/>
                                            <path d="M12.2775 11.1775L10.8275 9.7275L12.2275 8.3275C12.5175 8.0375 12.5175 7.5575 12.2275 7.2675C11.9375 6.9775 11.4575 6.9775 11.1675 7.2675L9.7675 8.6675L8.3175 7.2175C8.0275 6.9275 7.5475 6.9275 7.2575 7.2175C6.9675 7.5075 6.9675 7.9875 7.2575 8.2775L8.7075 9.7275L7.2175 11.2175C6.9275 11.5075 6.9275 11.9875 7.2175 12.2775C7.3675 12.4275 7.5575 12.4975 7.7475 12.4975C7.9375 12.4975 8.1275 12.4275 8.2775 12.2775L9.7675 10.7875L11.2175 12.2375C11.3675 12.3875 11.5575 12.4575 11.7475 12.4575C11.9375 12.4575 12.1275 12.3875 12.2775 12.2375C12.5675 11.9475 12.5675 11.4775 12.2775 11.1775Z" fill="white"/>
                                        </svg>
                                </div>
                           </div>
                       </div>
                       <div class="games-categories-section--tag">
                           <span>
                               Digital Copy 
                                <div class="remove-icon">
                                    <i class="fas fa-times"></i> 
                                </div>
                           </span>
                           <span>
                               Digital Copy 
                                <div class="remove-icon">
                                    <i class="fas fa-times"></i> 
                                </div>
                           </span>
                        </div>
                   </div>
                   <div class="tags__right">
                       <div class="position-relative">
                           <button class="filter-btn" @click="filterOpen = !filterOpen">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M17.167 3.41667V5.25C17.167 5.91667 16.7503 6.75 16.3337 7.16667L12.7503 10.3333C12.2503 10.75 11.917 11.5833 11.917 12.25V15.8333C11.917 16.3333 11.5837 17 11.167 17.25L10.0003 18C8.91699 18.6667 7.41699 17.9167 7.41699 16.5833V12.1667C7.41699 11.5833 7.08366 10.8333 6.75033 10.4167L5.91699 9.54167L10.767 1.75H15.5003C16.417 1.75 17.167 2.5 17.167 3.41667Z" fill="#FFD715"/>
                                    <path d="M9.41634 1.75L5.09967 8.675L3.58301 7.08333C3.16634 6.66667 2.83301 5.91667 2.83301 5.41667V3.5C2.83301 2.5 3.58301 1.75 4.49967 1.75H9.41634Z" fill="#FFD715"/>
                                </svg>
                            </button>
                           <transition name="slide">
                                <div v-if="filterOpen" class="shorting-menu px-4 px-md-0 overflow-hidden position-md-absolute left-initial-imp right-md-0-imp w-md-268 z-index-99">
                                    <div class="shorting-menu__content w-full w-md-268 bg-shorting br-4 border-1 d-block secondery-border left-initial-imp right-md-0-imp top-full-10px-imp p-0 overflow-hidden" >
                                    <div class="d-md-none d-flex align-items-center justify-content-between bg-shorting-tile px-3 py-2">
                                        <p class="mb-0 gil-bold text-secondery">Sorting</p>
                                        <p class="mb-0 pointer"  @click.prevent=" filterOpen = false">
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
                                        @click.prevent="getSellPosts(); filterOpen = false">{{ $t('apply', $store.state.locale) }}</a>
                                    </div>

                                </div>
                                </div>
                           </transition>
                       </div>
                       
                   </div>
               </div>
               <!-- table -->
               <div class="sellpost-table">
                    <div class="sellpost-table__header">
                        <p class="col-1" >Product id</p>
                        <p class="col-3" >Post name</p>
                        <p class="col-1" >Post type</p>
                        <p class="col-1" >Category</p>
                        <p class="col-1" >Status</p>
                        <p class="col-1" >Availability</p>
                        <p class="col-1" >Post date</p>
                        <p class="col-1" >Price</p>
                        <p class="col-1" ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.32029 4.12667L4.84699 1.65332C4.80032 1.60665 4.74031 1.56667 4.67365 1.54C4.66698 1.54 4.66029 1.53999 4.65363 1.53333C4.60029 1.51333 4.54029 1.5 4.48029 1.5C4.34695 1.5 4.22031 1.55331 4.12697 1.64665L1.64695 4.12667C1.45362 4.32 1.45362 4.64 1.64695 4.83333C1.84029 5.02667 2.16033 5.02667 2.35366 4.83333L3.98696 3.19999V14C3.98696 14.2733 4.21363 14.5 4.48696 14.5C4.76029 14.5 4.98696 14.2733 4.98696 14V3.20667L6.61363 4.83333C6.71363 4.93333 6.84031 4.97998 6.96698 4.97998C7.09365 4.97998 7.22029 4.93333 7.32029 4.83333C7.51363 4.64 7.51363 4.32667 7.32029 4.12667Z" fill="#FFD715"/>
                            <path opacity="0.4" d="M14.3535 11.1667C14.1602 10.9733 13.8401 10.9733 13.6468 11.1667L12.0135 12.8V2C12.0135 1.72667 11.7868 1.5 11.5135 1.5C11.2402 1.5 11.0135 1.72667 11.0135 2V12.7933L9.38682 11.1667C9.19349 10.9733 8.87349 10.9733 8.68016 11.1667C8.48682 11.36 8.48682 11.68 8.68016 11.8733L11.1535 14.3467C11.2001 14.3933 11.2601 14.4333 11.3268 14.46C11.3335 14.46 11.3402 14.46 11.3468 14.4667C11.4002 14.4867 11.4602 14.5 11.5202 14.5C11.6535 14.5 11.7801 14.4467 11.8735 14.3534L14.3535 11.8733C14.5468 11.6733 14.5468 11.36 14.3535 11.1667Z" fill="#FFD715"/>
                            </svg>
                        </p>
                    </div>
                    <!-- content -->
                    <div class="sellpost-table__content" :class="{collapseActive: detailsCollapse }" id="accordionExample">
                        <p class="col-1" scope="row">G123565</p>
                        <p class="col-3">Gaming PC for sell</p>
                        <p class="col-1">New</p>
                        <p class="col-1">Controller</p>
                        <p class="col-1">
                            <span class="d-flex">
                                <span class="rejected d-inline-block">Inactive</span> 
                                <span class="ml-1 alert-hover">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M14.0003 2.33317C7.557 2.33317 2.33366 7.55651 2.33366 13.9998C2.33366 20.4432 7.557 25.6665 14.0003 25.6665C20.4436 25.6665 25.667 20.4432 25.667 13.9998C25.667 7.55651 20.4436 2.33317 14.0003 2.33317Z" fill="#F53A50"/>
                                        <path d="M14 11.9582C13.5217 11.9582 13.125 12.3548 13.125 12.8332L13.125 18.6665C13.125 19.1448 13.5217 19.5415 14 19.5415C14.4783 19.5415 14.875 19.1448 14.875 18.6665L14.875 12.8332C14.875 12.3548 14.4783 11.9582 14 11.9582Z" fill="#F53A50"/>
                                        <path d="M12.927 9.77664C12.9853 9.91664 13.067 10.045 13.172 10.1616C13.2887 10.2666 13.417 10.3483 13.557 10.4066C13.837 10.5233 14.1637 10.5233 14.4437 10.4066C14.5837 10.3483 14.712 10.2666 14.8287 10.1616C14.9337 10.045 15.0153 9.91664 15.0737 9.77664C15.132 9.63664 15.167 9.48497 15.167 9.33331C15.167 9.18164 15.132 9.02997 15.0737 8.88997C15.0153 8.73831 14.9337 8.62164 14.8287 8.50497C14.712 8.39997 14.5837 8.31831 14.4437 8.25997C14.3037 8.20164 14.152 8.16664 14.0003 8.16664C13.8487 8.16664 13.697 8.20164 13.557 8.25997C13.417 8.31831 13.2887 8.39997 13.172 8.50497C13.067 8.62164 12.9853 8.73831 12.927 8.88997C12.8687 9.02997 12.8337 9.18164 12.8337 9.33331C12.8337 9.48497 12.8687 9.63664 12.927 9.77664Z" fill="#F53A50"/>
                                    </svg>
                                    <!-- hover content -->
                                    <div class="alert-hover__content">
                                        <p class="mb-0">Your content has been inactiv without any reason</p>
                                    </div>
                                </span>
                            </span>
                        </p>
                        <p class="col-1"><span class="sold">Sold</span></p>
                        <p class="col-1">25.08.2021</p>
                        <p class="col-1">Tk. 432</p>
                        <buton @click="detailsCollapse = !detailsCollapse" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="collaps-btn col-1 pointer"><p v-if="detailsCollapse">Collapse</p> <p v-else>Details</p></buton>
                        <!-- collapse content -->
                        <div class="sellpost-table-details collapse show" id="collapseOne"  aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="table-collapse-top">
                                <div class="sellpost-table-details__content">
                                    <div class="col-md-3 offset-md-1 content__left">
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Warranty</p>
                                            <p class="before-ball d-flex align-items-center text-success-ball mb-0">12 years</p>
                                        </div>
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Mobile no</p>
                                            <p class="text-white gil-medium mb-0">0290209999</p>
                                        </div>
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Address</p>
                                            <p class="text-white gil-medium mb-0">House: 941, Road: 14, Avenue: 2,
                                                Mirpur DOHS, Dhaka 1216</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 offset-md-1 content__right">
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Product details</p>
                                            <p class="text-white mb-0">This ads only who are collaborator antiquities
                                                for sale used retro machine 2001 PlayStation 2 slim NTSC U/ C model-77001
                                                hard moded official original first edition console
                                                working condition and smooth player. with 4 game cd listed shown picture. 1 official controller , a/v, adopter,cod with memory card its some time unsupported
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-collapse-bottom d-flex">
                                <router-link to="/" class="router_link w-100px btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 text-center d-inline-block position-relative mr-4">
                                    Delete
                                </router-link>
                                <router-link to="/" class="router_link w-100px btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 text-center d-inline-block position-relative">
                                    Edit
                                </router-link>
                                <div class="ml-auto">
                                    <router-link to="/" class="router_link btn--secondery-hover br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 text-center position-relative flex align-items-center justify-content-center">
                                        View this post 
                                        <svg class="ml-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M13.4915 1.6665H6.50817C3.47484 1.6665 1.6665 3.47484 1.6665 6.50817V13.4832C1.6665 16.5248 3.47484 18.3332 6.50817 18.3332H13.4832C16.5165 18.3332 18.3248 16.5248 18.3248 13.4915V6.50817C18.3332 3.47484 16.5248 1.6665 13.4915 1.6665Z" fill="#292D32"/>
                                            <path d="M13.9569 5.8335H9.9319C9.59023 5.8335 9.3069 6.11683 9.3069 6.4585C9.3069 6.80016 9.59023 7.0835 9.9319 7.0835H12.4486L6.01523 13.5168C5.77357 13.7585 5.77357 14.1585 6.01523 14.4002C6.14023 14.5252 6.29857 14.5835 6.4569 14.5835C6.61523 14.5835 6.77357 14.5252 6.89857 14.4002L13.3319 7.96683V10.4835C13.3319 10.8252 13.6152 11.1085 13.9569 11.1085C14.2986 11.1085 14.5819 10.8252 14.5819 10.4835V6.4585C14.5819 6.11683 14.2986 5.8335 13.9569 5.8335Z" fill="#292D32"/>
                                        </svg>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sellpost-table__content selpostError" :class="{collapseActive: detailsCollapse2 }" id="accordionExample2">
                        <p class="col-1" scope="row">G123565</p>
                        <p class="col-3">Gaming PC for sell</p>
                        <p class="col-1">New</p>
                        <p class="col-1">Controller</p>
                        <p class="col-1">Open</p>
                        <p class="col-1 ">
                            <span class="d-flex">
                                <span class="rejected d-inline-block">Rejected</span> 
                                <span class="ml-1 alert-hover">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M14.0003 2.33317C7.557 2.33317 2.33366 7.55651 2.33366 13.9998C2.33366 20.4432 7.557 25.6665 14.0003 25.6665C20.4436 25.6665 25.667 20.4432 25.667 13.9998C25.667 7.55651 20.4436 2.33317 14.0003 2.33317Z" fill="#F53A50"/>
                                        <path d="M14 11.9582C13.5217 11.9582 13.125 12.3548 13.125 12.8332L13.125 18.6665C13.125 19.1448 13.5217 19.5415 14 19.5415C14.4783 19.5415 14.875 19.1448 14.875 18.6665L14.875 12.8332C14.875 12.3548 14.4783 11.9582 14 11.9582Z" fill="#F53A50"/>
                                        <path d="M12.927 9.77664C12.9853 9.91664 13.067 10.045 13.172 10.1616C13.2887 10.2666 13.417 10.3483 13.557 10.4066C13.837 10.5233 14.1637 10.5233 14.4437 10.4066C14.5837 10.3483 14.712 10.2666 14.8287 10.1616C14.9337 10.045 15.0153 9.91664 15.0737 9.77664C15.132 9.63664 15.167 9.48497 15.167 9.33331C15.167 9.18164 15.132 9.02997 15.0737 8.88997C15.0153 8.73831 14.9337 8.62164 14.8287 8.50497C14.712 8.39997 14.5837 8.31831 14.4437 8.25997C14.3037 8.20164 14.152 8.16664 14.0003 8.16664C13.8487 8.16664 13.697 8.20164 13.557 8.25997C13.417 8.31831 13.2887 8.39997 13.172 8.50497C13.067 8.62164 12.9853 8.73831 12.927 8.88997C12.8687 9.02997 12.8337 9.18164 12.8337 9.33331C12.8337 9.48497 12.8687 9.63664 12.927 9.77664Z" fill="#F53A50"/>
                                    </svg>
                                    <!-- hover content -->
                                    <div class="alert-hover__content">
                                        <p class="mb-0 text-white">Your content has been inactiv without any reason</p>
                                    </div>
                                </span>
                            </span>
                        </p>
                        <p class="col-1">25.08.2021</p>
                        <p class="col-1">Tk. 432</p>
                        <buton @click="detailsCollapse2 = !detailsCollapse2" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" class="collaps-btn col-1 pointer"><p v-if="detailsCollapse2">Collapse</p> <p v-else>Details</p></buton>
                        <!-- collapse content -->
                        <div class="sellpost-table-details collapse" id="collapseTwo"  aria-labelledby="headingTwo" data-parent="#accordionExample2">
                            <div class="table-collapse-top">
                                <div class="sellpost-table-details__content">
                                    <div class="col-md-3 offset-md-1 content__left">
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Warranty</p>
                                            <p class="before-ball d-flex align-items-center text-success-ball mb-0">12 years</p>
                                        </div>
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Mobile no</p>
                                            <p class="text-white gil-medium mb-0">0290209999</p>
                                        </div>
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Address</p>
                                            <p class="text-white gil-medium mb-0">House: 941, Road: 14, Avenue: 2,
                                                Mirpur DOHS, Dhaka 1216</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 offset-md-1 content__right">
                                        <div class="details-group">
                                            <p class="opa-75 text-white mb-2">Product details</p>
                                            <p class="text-white mb-0">This ads only who are collaborator antiquities
                                                for sale used retro machine 2001 PlayStation 2 slim NTSC U/ C model-77001
                                                hard moded official original first edition console
                                                working condition and smooth player. with 4 game cd listed shown picture. 1 official controller , a/v, adopter,cod with memory card its some time unsupported
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-3  content__right error-text pt-3">
                                         <div class="details-group">
                                            <p class="mb-0">This ads only who are collaborator antiquities
                                                for sale used retro machine 2001 PlayStation 2 slim NTSC U/ C model-77001
                                                hard moded official original first edition console
                                                working condition and smooth player. with 4 game cd listed shown picture. 1 official controller , a/v, adopter,cod with memory card its some time unsupported
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-collapse-bottom d-flex">
                                <router-link to="/" class="router_link w-100px btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 text-center d-inline-block position-relative mr-4">
                                    Delete
                                </router-link>
                                <router-link to="/" class="router_link w-100px btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 text-center d-inline-block position-relative">
                                    Edit
                                </router-link>
                                <div class="ml-auto">
                                    <router-link to="/" class="router_link btn--secondery-hover br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 text-center position-relative flex align-items-center justify-content-center">
                                        View this post 
                                        <svg class="ml-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M13.4915 1.6665H6.50817C3.47484 1.6665 1.6665 3.47484 1.6665 6.50817V13.4832C1.6665 16.5248 3.47484 18.3332 6.50817 18.3332H13.4832C16.5165 18.3332 18.3248 16.5248 18.3248 13.4915V6.50817C18.3332 3.47484 16.5248 1.6665 13.4915 1.6665Z" fill="#292D32"/>
                                            <path d="M13.9569 5.8335H9.9319C9.59023 5.8335 9.3069 6.11683 9.3069 6.4585C9.3069 6.80016 9.59023 7.0835 9.9319 7.0835H12.4486L6.01523 13.5168C5.77357 13.7585 5.77357 14.1585 6.01523 14.4002C6.14023 14.5252 6.29857 14.5835 6.4569 14.5835C6.61523 14.5835 6.77357 14.5252 6.89857 14.4002L13.3319 7.96683V10.4835C13.3319 10.8252 13.6152 11.1085 13.9569 11.1085C14.2986 11.1085 14.5819 10.8252 14.5819 10.4835V6.4585C14.5819 6.11683 14.2986 5.8335 13.9569 5.8335Z" fill="#292D32"/>
                                        </svg>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SellPostContent',
        data() {
            return {
                sellPostTags: false,
                filterOpen: false,
                detailsCollapse: true,
                detailsCollapse2: false,
            }
        },

    }
</script>

<style scoped>

</style>
