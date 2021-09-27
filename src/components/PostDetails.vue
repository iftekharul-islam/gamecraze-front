<template>
  <div>
    <!-- Product details -->
    <div class="gamebazar-product-details pb-a-20" v-if="post">
      <div class="container">
        <a href="#" @click.prevent="routeBack" class="d-flex align-items-center mt-a-6 mb-a-6 svg-secondery-hover">
          <svg class="rotate-180" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFFBE7"/>
          </svg>
          <span class="ml-2 opa-7">Back</span>
        </a>
        <div class="row">
          <div class="col-md-6 pr-a-md-5" v-if="sliderSection">
            <div class="gamebazar-product-details__gallery">
              <lingallery :iid.sync="currentId" accentColor="#ffd715" baseColor="#0B0F18" :width="600" :height="400" :items="images"/>
            </div>
          </div>
          <div class="col-md-6 pl-a-md-5">
            <div class="gamebazar-product-details__content">
              <h1 class="f-s-48 gil-bold text-secondery mb-a-6">{{ post.name }}</h1>
              <div class="gamebazar-product-details__content__des">
                <p class="text-white gil-bold mb-4">{{ $t('product_details', $store.state.locale) }}:</p>
                <p v-html="post.description"></p>

              </div>
              <p><span class="f-s-34 gil-bold text-secondery mb-a-6">{{ post.price }} tk </span><small v-if="post.is_negotiable ==1">Negotiable</small></p>
              <div class=" mt-5">
                <a class=" btn--secondery-hover br-4 gil-bold font-weight-bold primary-text-imp pl-a-6 pr-a-6 d-inline-block position-relative pointer" @click="showSeller = true"> <span></span> <div class="position-relative">Contact the seller</div></a>
              </div>
              <div class="row border-b-1 border-white-25 pt-a-6">
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">{{ $t('create_post', $store.state.locale) }}</p>
                    <p class="text-white gil-regular">{{ formattedDate(post.created_at) }}</p>
                  </div>
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">{{ $t('product_type', $store.state.locale) }}</p>
                    <p class="white-ball d-flex align-items-center text-white" v-if="post.product_type === 1">
                      {{ $t('new', $store.state.locale) }}
                    </p>
                    <p class="white-ball d-flex align-items-center text-white" v-if="post.product_type === 2">
                      {{ $t('used', $store.state.locale) }}&nbsp;
                      <span v-if="post.used_year != null">
                              {{ post.used_year }}&nbsp;
                              {{ $t('year', $store.state.locale) }}&nbsp;
                      </span>
                      <span v-if="post.used_month != null">
                              {{ post.used_month }}&nbsp;
                              {{ $t('month', $store.state.locale) }}&nbsp;
                      </span>
                      <span v-if="post.used_day != null">
                              {{ post.used_day }}&nbsp;
                              {{ $t('day', $store.state.locale) }}
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">{{ $t('product_id', $store.state.locale) }}</p>
                    <p class="text-white gil-regular">{{ post.product_no }}</p>
                  </div>
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">{{ $t('warranty', $store.state.locale) }}</p>
                    <p class="d-flex align-items-center text-success-ball" v-if="post.warranty_availability == 1">
                      {{ $t('available', $store.state.locale) }}&nbsp;
                      <span v-if="post.warranty_year != null">
                          {{ post.warranty_year }}&nbsp;
                          {{ $t('year', $store.state.locale) }}&nbsp;
                      </span>
                      <span v-if="post.warranty_month != null">
                          {{ post.warranty_month }}&nbsp;
                          {{ $t('month', $store.state.locale) }}&nbsp;
                      </span>
                      <span v-if="post.warranty_day != null">
                          {{ post.warranty_day }}&nbsp;
                          {{ $t('day', $store.state.locale) }}
                      </span>
                    </p>
                    <p class="d-flex align-items-center text-danger" v-else>
                      {{ $t('not_available', $store.state.locale) }}
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">{{ $t('availability', $store.state.locale) }}</p>
                    <p class="before-ball d-flex align-items-center text-success-ball" v-if="post.is_sold == 1">{{ $t('in_stock', $store.state.locale) }}</p>
                    <p class="before-danger-ball d-flex align-items-center text-danger-ball" v-else>{{ $t('sold_out', $store.state.locale) }}</p>
                  </div>
              </div>
              </div>

              <div class="row border-b-1 border-white-25 pt-a-6">
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">{{ $t('location', $store.state.locale) }}</p>
                    <p class="text-white gil-regular">{{ post.area }}, {{ post.thana.data.name }}, {{ post.thana.data.district.data.name }}, {{ post.thana.data.district.data.division.data.name }}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">{{ $t('address', $store.state.locale) }}</p>
                    <p class="text-white gil-regular">{{ post.address }}</p>
                  </div>
                </div>
              </div>
              <div class="row pt-a-6" v-if="post.user != null">
                <div class="col-md-6">
                  <div class="">
                    <p class="text-white gil-bold f-s-20 mb-4">{{ $t('about_seller', $store.state.locale) }}</p>
                    <div class="w-80 h-80 overflow-hidden">
                      <img :src="post.user.data.image" class="img-fluid w-100" alt="Gamebazar image" v-if="post.user.data.image != ''">
                      <img src="../assets/img/avatar.png" class="img-fluid w-100" alt="Gamebazar image" v-else>
                    </div>
                    <p class="text-white gil-bold mb-4" v-if="post.user.data.name">{{ post.user.data.name }}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="h-100 d-flex align-items-end justify-content-end">
                    <a href="#" class="text-white text-underline" @click=" reportModalShow = !reportModalShow">{{ $t('report_to_post', $store.state.locale) }}</a>
                  </div>
                  <!-- report post modal -->
                  <transition name="slide">
                    <div
                      :class="{reportModalOpen : reportModalShow}"
                    class="report-post-modal primary-bg-5 position-fixed top-0 left-0 w-100 h-100 align-items-center justify-content-center z-index-99999 p-3">
                      <div class="report-post-modal__content max-460 w-full border-1 border-secondery-opa-50 p-4 bg-game-details br-4 max-h-100pr overflow-auto position-relative">
                        <span class="position-absolute top-10 right-10 pointer f-s-18 opa-8" @click=" reportModalShow = !reportModalShow">
                          X
                        </span>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <p class="mb-3">{{ $t('product_name', $store.state.locale) }}</p>
                            <p class="text-secondery gil-bold f-s-20">{{ post.name }}</p>
                            <div class="report-group mb-a-6">
                              <p class="mb-2 gil-regular">{{ $t('cause_of_report', $store.state.locale) }} <span class="text-danger">*</span></p>
                              <ValidationProvider name="Report reason" rules="required" v-slot="{ errors }">
                                <textarea v-model="report.reason" id="" class="w-full br-4 border-1 border-secondery-opa-50 bg-step-form-input focus-primary text-white opa-8 p-3" rows="3"></textarea>
                                <span v-if="errors.length" class="error-message d-block text-left mt-2 sellpost-error">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
<!--                            <div class="report-group mb-a-6">-->
<!--                              <p class="mb-2 gil-regular">Add photo (if possible)</p>-->
<!--                              <UploadImages class="w-100 p-0 bg-transparent border-0" :max="1" maxError="Max image upload limit is 1" @change="uploadScreenshots"/>-->
<!--                            </div>-->
                            <div class="report-group mb-a-6">
                              <p class="mb-2 gil-regular">{{ $t('your_name', $store.state.locale) }}</p>
                              <ValidationProvider name="Reporter name" rules="required" v-slot="{ errors }">
                                <input type="text" class="w-full br-4 border-1 border-secondery-opa-50 bg-step-form-input focus-primary text-white opa-8 pl-3 " v-model="report.name" :readonly="authExist">
                                <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                            <div class="report-group mb-a-6">
                              <p class="mb-2 gil-regular">{{ $t('your_email', $store.state.locale) }}</p>
                              <ValidationProvider name="Reporter email" rules="required|email" v-slot="{ errors }">
                                <input type="text" class="w-full br-4 border-1 border-secondery-opa-50 bg-step-form-input focus-primary text-white opa-8 pl-3 " v-model="report.email" :readonly="authExist">
                                <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                            <div class="report-group mb-a-6">
                              <p class="mb-2 gil-regular">{{ $t('phone_number', $store.state.locale) }}</p>
                              <ValidationProvider name="Reporter phone no" rules="required|integer|max:11" v-slot="{ errors }">
                                <input type="number" class="w-full br-4 border-1 border-secondery-opa-50 bg-step-form-input focus-primary text-white opa-8 pl-3 " v-model="report.phone_no" :readonly="authExist">
                                <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                            <div class="report-group mb-a-6 text-right">
                              <a href="#" class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative" @click.prevent="handleSubmit(reportSubmit)">
                                 {{ $t('report_now', $store.state.locale) }}
                                <div v-if="submitLoading" class="spinner-border spinner-border-sm skew-none"></div>
                              </a>
                            </div>
                        </ValidationObserver>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gamebazar-product-similar pb-a-20" v-if="loadedRelated">
          <div class="container">
              <h3 class="text-white f-s-24 gil-bold mb-4">{{ $t('related_post', $store.state.locale) }}</h3>
                <!-- carousel -->
              <div class="position-relative carousel-nav">
                  <carousel v-if ="loadedRelated"
                          :autoplay ="false"
                          :loop ="true"
                          :center ="true"
                          :nav ="false"
                          :dots ="true"
                          :margin ="32"
                          :stagePadding ="0"
                          :responsive="{ 0:{items:1.5, stagePadding:0, center:false,},
                                  600:{items:2, stagePadding:0, center:false,},
                                  1000:{items:3, stagePadding:0, center:false,},
                                  1200:{items:4, stagePadding:0, center:false,},
                                  1400:{items:5, stagePadding:0, center:false,}}">
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

                  <div class="item gamebazar-post"  v-for="(related, index) in relatedPosts" :key="index">
                      <router-link :to="'/sell-post/' + related.id + '/' + related.url_name" @click.native="gameDetails(related.id)">
                          <div class="product-img position-relative br-4 overflow-hidden">
                            <img :src="related.cover.url" class="img-fluid w-100 " alt="Gamebazar image" v-if="related.cover != null">
                            <img src="../assets/img/play.png" class="img-fluid w-100 " alt="Gamebazar image" v-else>
                              <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-3" v-if="related.product_type === 1">New</span>
                              <span class="position-absolute top-0 left-0 bg-purple br-b-r-5 py-1 px-3 text-white br-t-l-3" v-if="related.product_type === 2">Used</span>
                              <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-3 py-1 px-3 primary-text gil-medium br-b-r-5">৳ {{ related.price }}</span>
                          </div>
                          <p class="gil-bold mb-4 mt-a-4 text-white post-name">{{ related.name }}</p>
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
                  </carousel>
             </div>
              <div class="text-center mt-5">
                  <router-link to='/sell-posts' class="btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative">{{ $t('all_post', $store.state.locale) }}</router-link>
              </div>
          </div>
      </div>
    <div class="gamebazar-product-similar pb-a-20" v-else>
      <div class="container">
        <h3 class="text-white f-s-24 gil-bold mb-4">{{ $t('might_also_like', $store.state.locale) }}</h3>
        <!-- carousel -->
        <div class="position-relative carousel-nav">
          <carousel v-if ="loadLatestPosts"
                    :autoplay ="false"
                    :loop ="true"
                    :center ="true"
                    :nav ="false"
                    :dots ="true"
                    :margin ="32"
                    :stagePadding ="0"
                    :responsive="{ 0:{items:1.5, stagePadding:0, center:false,},
                                  600:{items:2, stagePadding:0, center:false,},
                                  1000:{items:3, stagePadding:0, center:false,},
                                  1200:{items:4, stagePadding:0, center:false,},
                                  1400:{items:5, stagePadding:0, center:false,}}">
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

            <div class="item gamebazar-post"  v-for="(post, index) in latestPosts" :key="index">
              <router-link :to="'/sell-post/' + post.id + '/' + post.url_name" @click.native="gameDetails(post.id)">
                <div class="product-img position-relative br-4 overflow-hidden">
                  <img :src="post.cover.url" class="img-fluid w-100 " alt="Gamebazar image" v-if="post.cover != null">
                  <img src="../assets/img/play.png" class="img-fluid w-100 " alt="Gamebazar image" v-else>
                  <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-3" v-if="post.product_type === 1">New</span>
                  <span class="position-absolute top-0 left-0 bg-purple br-b-r-5 py-1 px-3 text-white br-t-l-3" v-if="post.product_type === 2">Used</span>
                  <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-3 py-1 px-3 primary-text gil-medium br-b-r-5">৳ {{ post.price }}</span>
                </div>
                <p class="gil-bold mb-4 mt-a-4 text-white post-name">{{ post.name }}</p>
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
          </carousel>
        </div>
        <div class="text-center mt-5">
          <router-link to='/sell-posts' class="border-1 border-secondery-opa-25 text-secondery py-2 pl-a-6 pr-a-6 d-inline-block br-4">{{ $t('all_post', $store.state.locale) }}</router-link>
        </div>
      </div>
    </div>
    <div v-if="showSeller && post.user != null">
      <transition name="modal">
        <div class="modal-mask order-details-extend-modal position-fixed top-0 left-0 h-100 w-full d-flex align-items-center justify-content-center z-index-99">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-centered w-328" role="document">
              <div class="modal-content bg-game-details border-1 border-secondery-opa-50 p-a-4 br-8">
                <button type="button" class="close cancel-btn no-focus text-right z-10" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showSeller = false" class="close-modal">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                        <path d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z" fill="white"/>
                    </svg>
                  </span>
                </button>
                <div class="modal-body-content">
                  <div class="mb-a-6">
                    <p class="mb-2 opa-8 text-white">{{ $t('seller_name', $store.state.locale) }}</p>
                    <p class="mb-0 gil-bold text-white f-s-20 word-break">{{ post.user.data.name }}</p>
                  </div>
                  <div class="mb-a-6">
                    <p class="mb-2 opa-8 text-white">{{ $t('phone_number', $store.state.locale) }}</p>
                    <a :href="`tel:+88${ post.phone_no ? post.phone_no : post.user.data.phone_number }`" class="mb-0 gil-bold text-secondery f-s-20">{{ post.phone_no ? post.phone_no : post.user.data.phone_number }}</a>
                  </div>
                  <div class="mb-a-6" v-if="post.user.data.email != null">
                    <p class="mb-2 opa-8 text-white">{{ $t('email', $store.state.locale) }}</p>
                    <a :href="`mailto:${ post.email ? post.email : post.user.data.email}`" class="mb-0 gil-bold text-white f-s-20 word-break">{{ post.email ? post.email : post.user.data.email}}</a>
                  </div>
                  <a :href="`tel:+88${ post.phone_no ? post.phone_no : post.user.data.phone_number }`" class=" btn--secondery-hover br-4 gil-bold font-weight-bold text-center primary-text pl-a-6 pr-a-6 d-inline-block position-relative w-full pointer" v-if="post.user.data.phone_number != null">{{ $t('phone_seller', $store.state.locale) }}</a>
                   <a :href="`mailto:${ post.email ? post.email : post.user.data.email}`" class=" btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative pointer w-full" v-else>{{ $t('email_seller', $store.state.locale) }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
    import carousel from 'vue-owl-carousel';
    export default {
        components: {carousel},
        name: 'post-details',
        props: ['id', 'slug'],
        data() {
            return {
                authExist: this.auth(),
                reportModalShow: false,
                report: {
                  name: this.auth() ? this.$store.state.user.name : '',
                  email: this.auth() ? this.$store.state.user.email : '',
                  phone_no: this.auth() ? this.$store.state.user.phone_number : '',
                  reason: '',
                  image: ''
                },
                submitLoading: false,
                showSeller: false,
                sliderSection: false,
                images: '',
                post: '',
                currentId: null,
                rentingAvg : 4,
                loadedRelated: false,
                relatedPosts: [],
                latestPosts:  [],
                loadLatestPosts: false,
                prevRoute: null,
            }
        },
        beforeRouteEnter(to, from, next) {
          next(vm => {
            vm.prevRoute = from
          })
        },
        methods: {
          reportSubmit(){
            this.submitLoading = true;
            let data = {
              user_id: this.auth() ? this.$store.state.user.id : null,
              product_id: this.post.id,
              name: this.report.name,
              email: this.report.email,
              phone_no: this.report.phone_no,
              reason: this.report.reason,
            }
            this.$api.post('post-report', data).then(response => {
              if (response.data.error == false) {
                this.submitLoading = false
                this.reportModalShow = false
                this.$toaster.success("Report request sent successfully!!");
              }

            });
          },
          auth(){
            return this.$store.getters.ifAuthenticated
          },
          routeBack(){
            if (this.prevRoute.name === 'profile'){
                this.$router.push('/profile').then( () => {
                this.$root.$emit('sellPostDashboard');
              });
              return
            }
            if (this.prevRoute.name === 'gamebazar'){
                this.$router.push('/gamebazar')
                return
            }
            this.$router.go(-1);
          },
          formattedDate(date) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let formattedDate = new Date(date)
            return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
          },
          relatedPost(id, cat_id){
            this.loadedRelated = false
            this.$api.get('related-sell-posts/' + id + '/' + cat_id + '?include=subcategory,user').then(response => {
              this.relatedPosts = response.data.data;
              if (this.relatedPosts.length > 0) {
                this.loadedRelated = true
              }
            });
          },
          gameDetails(id){
            window.scrollTo(0,0);
            this.$api.get('sell-post/'+ id +'?include=subcategory,user,thana.district.division').then(response => {
              this.post = response.data.data;
              this.relatedPost(this.post.id, this.post.sub_category_id)
              if (this.post.slider.length > 0) {
                this.images = this.post.slider
                this.sliderSection = true
              }
            });
          }
        },
        created() {
          window.scrollTo(0,0);
          this.gameDetails(this.id);
          this.$api.get('latest-sell-posts?include=subcategory,user').then(response => {
            this.latestPosts = response.data.data;
            if (this.latestPosts.length > 0) {
              this.loadLatestPosts = true
            }
          });
        },
    }
</script>
