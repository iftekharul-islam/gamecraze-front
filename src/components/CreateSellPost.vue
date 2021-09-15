<template>
  <div>
    <div class="gamebazar-step-form pb-a-25">
     
        <div class="container">
           <div class="mb-4">
              <router-link to="/gamebazar" class="d-flex align-items-center mt-a-6 mb-a-6 svg-secondery-hover">
              <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                <path d="M11.8114 14.5468C12.1234 14.3785 12.3179 14.0584 12.3179 13.7103V8.28972H23.0209C23.5614 8.28972 24 7.86127 24 7.33337C24 6.80546 23.5614 6.37702 23.0209 6.37702H12.3179V0.956419C12.3179 0.607032 12.1234 0.286973 11.8114 0.119931C11.4994 -0.0496622 11.1182 -0.038186 10.8166 0.146709L0.456894 6.52366C0.172314 6.69963 0 7.00438 0 7.33337C0 7.66235 0.172314 7.96711 0.456894 8.14308L10.8166 14.52C10.9759 14.6169 11.1574 14.6667 11.3388 14.6667C11.5007 14.6667 11.6639 14.6259 11.8114 14.5468Z" fill="white"/>
              </svg>
              {{$t('back', $store.state.locale) }}
              </router-link>
          </div>
            <div class="max-400 mx-auto mb-5">
              <router-link
                  class="gil-medium text-secondery d-flex align-items-center justify-content-end h-48"
                  to="/about-sell-post">{{$t('create_post_tutorial', $store.state.locale) }}
                  <svg width="20" height="20" class="ml-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.440118 11.26L1.79012 12.84C2.04012 13.14 2.25012 13.7 2.25012 14.1L2.25012 15.8C2.25012 16.86 3.12012 17.73 4.18012 17.73L5.88012 17.73C6.28012 17.73 6.85012 17.94 7.15012 18.19L8.73012 19.54C9.42012 20.13 10.5501 20.13 11.2401 19.54L12.8401 18.19C13.1401 17.94 13.7001 17.73 14.1001 17.73L15.8301 17.73C16.8901 17.73 17.7601 16.86 17.7601 15.8L17.7601 14.1C17.7601 13.71 17.9601 13.15 18.2101 12.85L19.5601 11.26C20.1401 10.56 20.1401 9.44004 19.5601 8.76004L18.2101 7.17004C17.9601 6.88004 17.7601 6.31004 17.7601 5.92004L17.7601 4.21004C17.7601 3.15004 16.8901 2.28004 15.8301 2.28004L14.0901 2.28004C13.7001 2.28004 13.1301 2.07004 12.8301 1.82004L11.2501 0.470042C10.5601 -0.119958 9.43012 -0.119958 8.74012 0.470042L7.16012 1.82004C6.86012 2.07004 6.30012 2.28004 5.90012 2.28004L4.20012 2.28004C3.14012 2.28004 2.27012 3.15004 2.27012 4.21004L2.27012 5.91004C2.27012 6.31004 2.06012 6.87004 1.81012 7.17004L0.460116 8.75004C-0.149884 9.43004 -0.149882 10.56 0.440118 11.26ZM10.7501 13.87C10.7501 14.28 10.4101 14.62 10.0001 14.62C9.59012 14.62 9.25012 14.28 9.25012 13.87L9.25012 9.04004C9.25012 8.63004 9.59012 8.29004 10.0001 8.29004C10.4101 8.29004 10.7501 8.63004 10.7501 9.04004L10.7501 13.87ZM10.0001 5.13004C10.5501 5.13004 11.0001 5.58004 11.0001 6.13004C11.0001 6.68004 10.5601 7.13004 10.0001 7.13004C9.45012 7.13004 9.00012 6.68004 9.00012 6.13004C9.00012 5.58004 9.44012 5.13004 10.0001 5.13004Z" fill="#FFD715"/>
                  </svg>
              </router-link>
            </div>
            <div class="max-400 mx-auto">
              <h3 class="text-white gil-bold f-s-28 mb-5">{{$t('step_form_top_title', $store.state.locale) }}</h3>
            </div>
            <!-- step bar -->
            <div class="max-400 mx-auto mb-4">
              <ul class="d-flex step-form">
                <li class="step-form__line p-0 active"> <a href="#" @click.prevent="backToFirstStep">1</a></li>
                <li class="step-form__line p-0" :class="{ 'active' : twoActive }"> <a href="#" class="mx-auto" :class="{ 'user-select-none' : twoActive }" @click.prevent="confirmFirstStep">2</a></li>
                <li class="step-form__line p-0" :class="{ 'active' : threeActive }"> <a href="#" class="ml-auto" :class="{ 'user-select-none' : accessThreeStep }" @click.prevent="goToFinal">3</a></li>
              </ul>
            </div>
            <div class="max-400 mx-auto" v-show="one">
              <ValidationObserver ref="sellForm1">
                <form id="sellForm1">
                  <div class="group mb-a-6 location-filter create-sellpost-select profile-v-select step-select">
                    <label class="mb-3 w-100">{{ $t('select_product_category', $store.state.locale) }}</label>
                      <v-select :options="subCategories" @input="checkCategoryValidation" label="name" :reduce="option => option.id" v-model="sub_category_id" placeholder="Select category"></v-select>
                      <span class="text-step-error mt-2 d-inline-block" v-if="errorCategory">Please select a Category</span>
                  </div>
                  <div class="group mb-a-6">
                    <label class="mb-3 w-100">{{ $t('your_product', $store.state.locale) }}</label>
                    <ValidationProvider name="Product type" rules="required" v-slot="{ errors, classes }">
                      <div class="d-grid grid-cols-2 grid-gap-16">
                        <div class="gamebazar-step-form__input-btn position-relative">
                            <input type="radio" id="my-product" name="my-product"  class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" @click="usedModal = false" value="1" v-model="product_type">
                            <label for="my-product" :class="classes" class="border-1 border-secondery-opa-50 py-2 w-full d-block br-4 text-center pointer opa-7 position-relative bg-step-form-input">{{ $t('new', $store.state.locale) }}</label>
                        </div>
                        <div class="gamebazar-step-form__input-btn position-relative">
                          <input type="radio" id="my-product2" name="my-product"  class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" @click="usedModal = true" value="2" v-model="product_type">
                          <label for="my-product2" :class="classes" class="border-1 border-secondery-opa-50 py-2 w-full d-block br-4 text-center pointer opa-7 position-relative bg-step-form-input">{{ $t('used', $store.state.locale) }}</label>
                        </div>
                      </div>
                      <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                <div class="group mb-a-6" v-if="usedModal">
                  <div class="d-grid grid-cols-3 grid-gap-16">
                    <div class="group flex-1">
                      <label class="w-100">{{ $t('year', $store.state.locale) }}</label>
                      <select v-model="used_product.year" class=" px-3 bg-step-form-input h-40 border-1 triangle-select-arrow no-default-arrow border-secondery-opa-25 text-white no-focus w-100 br-4">
                        <option :value="item" v-for="(item, index) in 12" :key="index">{{ item }} Year</option>
                      </select>
                    </div>
                    <div class="group flex-1">
                      <label class="w-100 ">{{ $t('month', $store.state.locale) }}</label>
                      <select name="" id="months" v-model="used_product.month" class="px-3 bg-step-form-input triangle-select-arrow no-default-arrow h-40 border-1 border-secondery-opa-25 text-white no-focus w-100 br-4">
                        <option :value="item" v-for="(item, index) in 12" :key="index">{{ item }} Month</option>
                      </select>
                    </div>
                    <div class="group flex-1">
                      <label class="w-100 ">{{ $t('day', $store.state.locale) }}</label>
                      <select name="" id="days" v-model="used_product.day" class="px-3 bg-step-form-input triangle-select-arrow no-default-arrow h-40 border-1 border-secondery-opa-25 text-white no-focus w-100 br-4">
                        <option :value="item" v-for="(item, index) in 30" :key="index">{{ item }} Day</option>
                      </select>
                    </div>
                  </div>
                </div>
                  <div class="group mb-a-6">
                    <label for="product-name" class="mb-3 w-100">{{ $t('product_name', $store.state.locale) }}</label>
                    <ValidationProvider name="name" rules="required" v-slot="{ errors, classes }">
                      <input type="text" id="product-name" v-model="name" :class="classes" class=" px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" 
                        :placeholder="$t('enter_product_name', $store.state.locale)">
                      <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="group mb-a-6">
                    <label class="mb-3 w-100">{{ $t('description', $store.state.locale) }}</label>
                    <ValidationProvider name="Description" rules="required" v-slot="{ errors, classes }">
                      <textarea type="text" :class="classes" v-model="description" rows="5" class="w-full px-3 py-2 bg-step-form-input border-1 border-secondery-opa-25 text-white no-focus br-4"></textarea>
                      <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="group mb-a-6">
                    <label class="mb-3 w-100">{{ $t('price', $store.state.locale) }}</label>
                    <ValidationProvider name="product price" rules="required|max:6" v-slot="{ errors, classes }">
                      <div class="position-relative overflow-hidden">
                        <input type="number" @keypress="isNumber($event)" name="product price" :class="classes" class="price-valid pr-3 w-100 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" v-model="price"/>
                        <label v-if="tkShow" class="taka" :class="{'tk-sign': errors[0]}">৳</label>
                      </div>
                      <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="group mb-a-6 ml-3">
                      <input class="custom-control-input platform" id="is_negotiable" name="is_negotiable" type="checkbox" value="" v-model="is_negotiable">
                      <label class="custom-control-label ml-2" for="is_negotiable">{{ $t('is_negotiable', $store.state.locale) }}</label>
                  </div>
                  <div class="group mb-a-6">
                    <label class="w-100">{{ $t('is_warranty_available', $store.state.locale) }}</label>
                    <ValidationProvider name="warranty" rules="required" v-slot="{ errors, classes }">
                      <select id="warranty" @change="warrantyCheck()" :class="classes" class=" px-3 bg-step-form-input h-40 border-1 triangle-select-arrow no-default-arrow border-secondery-opa-25 text-white no-focus w-100 br-4" v-model="warranty_availability">
                        <option value="">Select condition</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                      <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                    <div class="group mb-a-6" v-if="warrantyModal">
                    <div class="d-grid grid-cols-3 grid-gap-16">
                      <div class="group flex-1">
                        <label class="w-100">{{ $t('year', $store.state.locale) }}</label>
                        <select v-model="warranty.year" class="px-3 bg-step-form-input h-40 border-1 triangle-select-arrow no-default-arrow border-secondery-opa-25 text-white no-focus w-100 br-4">
                          <option :value="item" v-for="(item, index) in 12" :key="index">{{ item }} Year</option>
                        </select>
                      </div>
                      <div class="group flex-1">
                        <label class="w-100 ">{{ $t('month', $store.state.locale) }}</label>
                        <select v-model="warranty.month" class="px-3 bg-step-form-input triangle-select-arrow no-default-arrow h-40 border-1 border-secondery-opa-25 text-white no-focus w-100 br-4">
                          <option :value="item" v-for="(item, index) in 12" :key="index">{{ item }} Month</option>
                        </select>
                      </div>
                      <div class="group flex-1">
                        <label  class="w-100 ">{{ $t('day', $store.state.locale) }}</label>
                        <select v-model="warranty.day" class="px-3 bg-step-form-input triangle-select-arrow no-default-arrow h-40 border-1 border-secondery-opa-25 text-white no-focus w-100 br-4">
                          <option :value="item" v-for="(item, index) in 30" :key="index">{{ item }} Days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center flex-sm-row justify-content-end mt-5">
                    <div class="modal-content--description--form--call">
                      <a href="#" @click.prevent="confirmFirstStep" class=" btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative"><span>{{ $t('continue', $store.state.locale) }}</span></a>
                    </div>
                  </div>
                </form>
              </ValidationObserver>
            </div>
            <div class="max-400 mx-auto" v-show="two">
                <div class="group">
                  <label class="mb-3 w-100">{{ $t('cover_image', $store.state.locale) }}</label>
                  <div>
                    <a class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative pointer" @click="$refs.FileInputNew.click()"> <span></span> <div class="position-relative">Upload image</div></a>
                    <input ref="FileInputNew" type="file" style="display: none;" @change="onFileSelect" />
                  </div>
                  <span class="text-step-error mt-2 d-inline-block" v-if="validType">{{ $t('image_validation', $store.state.locale) }}</span>
                </div>
                <div class="group" v-if="dialog">
                  <label class="mb-3 w-100">{{ $t('image_preview', $store.state.locale) }}</label>
                  <div class="img-prev">
                    <VueCropper v-show="postCoverImage"
                                ref="cropper"
                                :src="postCoverImage"
                                :scalable="true"
                                dragMode="none"
                                :viewMode="2"
                                :cropBoxMovable="false"
                                :cropBoxResizable="false"
                                :ready="cropBoxSet"
                                :containerStyle="{ height: '300px'}"
                                :center="false"
                                alt="Disk image preview">
                    </VueCropper>
                  </div>
                  <div class="my-3 d-grid grid-cols-2 grid-gap-16">
                    <a class="btn--secondery-hover br-4 text-center gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative pointer" @click="saveImage(), (dialog = true)"> <span></span> <div class="position-relative">Crop</div></a>
<!--                    <a class="btn&#45;&#45;secondery-hover br-4 text-center gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative pointer" @click="dialog = false, (cover_image = '')"> <span></span> <div class="position-relative">Cancel</div></a>-->
                  </div>
                  <div class="img-prev" v-if="cover_image">
                    <img :src="cover_image" alt="Cover image preview">
                  </div>
                </div>
                <span class="text-step-error mt-1 d-inline-block" v-if="postCoverImageError">{{ $t('please_upload_cover_photo', $store.state.locale) }}</span>
                <span class="text-step-error mt-1 d-inline-block" v-if="coverError">{{ $t('please_crop_cover_photo', $store.state.locale) }}</span>
                <div class="group mb-a-6 mt-a-6">
                  <label class="mb-3 w-100">{{ $t('upload_screenshots', $store.state.locale) }}</label>
                  <div class="post-rent--form-group--input wizard__body__step">
                     <UploadImages class="w-100 p-0 bg-transparent border-0" :max="4" maxError="Max image upload limit is 4" @change="uploadScreenshots" @changed="uploadScreenshots"/>
                  </div>
                 
                    <span class="text-step-error mt-2 d-inline-block" v-if="screenshotsError"> {{ $t('please_upload_screenshots', $store.state.locale) }}</span>
                </div>
                <div class="d-flex align-items-center flex-sm-row mt-5">
                    <a href="#" @click.prevent="backToFirstStep" class="flex-1 mr-3 w-full btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative text-center"><span>{{ $t('previous', $store.state.locale) }}</span></a>
                    <a href="#" @click.prevent="confirmSecondStep" class="flex-1 w-full btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative text-center"><span>{{ $t('continue', $store.state.locale) }}</span></a>
                </div>
            </div>
            <div class="max-400 mx-auto" v-show="three">
              <ValidationObserver ref="sellForm2">
                <form id="sellForm2">
                <div>
                    <div class="group mb-a-6">
                      <label for="mobile-no" class="mb-3 w-100">{{ $t('phone_number', $store.state.locale) }}</label>
                      <ValidationProvider name="phone number" rules="required|max:11|min:11" v-slot="{ errors, classes }">
                        <input type="number" :class="classes" v-model="phone_no" id="mobile-no" class=" px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                        <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="group mb-a-6">
                      <label for="email" class="mb-3 w-100">{{ $t('email', $store.state.locale) }}</label>
                      <ValidationProvider name="email" rules="required|email" v-slot="{ errors, classes }">
                        <input type="text" id="email" :class="classes" v-model="email" class=" px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                        <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="group mb-a-6 location-filter profile-v-select step-select create-sellpost-select">
                      <label class="mb-3 w-100">{{ $t('selected_location', $store.state.locale) }}</label>
                      <v-select :options="thanas" label="item_data" @input="checkLocationValidation" :reduce="thana => thana.id" v-model="thana_id" ></v-select>
                      <span class="text-step-error mt-2 d-inline-block" v-if="errorLocation">Please select a location</span>
                    </div>
                    <div class="group mb-a-6">
                      <label class="mb-3 w-100">{{ $t('area', $store.state.locale) }}</label>
                      <ValidationProvider name="area" rules="required" v-slot="{ errors, classes }">
                        <input type="text" :class="classes" v-model="area" class="px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                        <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="group mb-a-6">
                      <label for="address" class="mb-3 w-100">{{ $t('address', $store.state.locale) }}</label>
                      <ValidationProvider name="address" rules="required" v-slot="{ errors, classes }">
                        <input type="text" id="address" :class="classes" v-model="address" class="px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                        <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  <div class="d-flex flex-column align-items-center flex-sm-row  mt-5">
                      <a href="#" @click.prevent="backToSecondStep" class="flex-1 mr-sm-3 mb-3 mb-sm-0 w-full btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative text-center"><span>{{ $t('previous', $store.state.locale) }}</span></a>
                      <a href="#" @click.prevent="finalSubmit" class="flex-1 w-full btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative text-center" :class="{'pe-none' :  submitLoading}">
                        <span>{{ $t('post', $store.state.locale) }}</span>
                        <div v-if="submitLoading" class="spinner-border spinner-border-sm skew-none ml-3"></div>
                      </a>
                  </div>
                </div>
                </form>
              </ValidationObserver>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import UploadImages from "vue-upload-drop-images";
  import VueCropper from 'vue-cropperjs';
  import 'cropperjs/dist/cropper.css';
  export default {
    components: {UploadImages, VueCropper},
    data(){
      return {
        postCoverImageError: false,
        errorCategory: false,
        validType: false,
        errorLocation: false,
        thanas: [],
        districts: [],
        thana_id: null,
        area: '',
        one: true,
        two: false,
        three: false,
        oneActive: true,
        twoActive: false,
        threeActive: false,
        accessThreeStep: false,
        submitLoading: false,
        coverError: false,
        screenshotsError: false,
        user: '',
        postCoverImage: '',
        dialog: false,
        mime_type: '',
        cover_image: '',
        postImages: [],
        warrantyModal: false,
        editorConfig:{
        },
        usedModal: false,
        subCategories: [],
        name: '',
        description: '',
        price: '',
        product_type: '',
        used_product: {
          year: '',
          month: '',
          day: '',
        },
        is_negotiable: '',
        sub_category_id: '',
        warranty_availability: '',
        warranty: {
          year: '',
          month: '',
          day: '',
        },
        product_image: '',
        phone_no: '',
        email: '',
        address: '',
        summary: '',
        tkShow: false
      };
    },
    watch: {
    price: function (val) {
      if(val) {
        this.tkShow = true;
      }
      else {
        this.tkShow = false;
      }
    }
  },
    methods: {
      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.price.length > 6) {
          evt.preventDefault();
        } else {
          return true;
        }
      },
      checkLocationValidation(value) {
        this.errorLocation = false;
        if(value == null){
          this.errorLocation = true;
        }
      },
      checkCategoryValidation(value) {
        this.errorCategory = false;
        if(value == null){
          this.errorCategory = true;
        }
      },
      scrollToError(errorElement) {
        const offset = 150;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = errorElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      },
      confirmFirstStep() {
        if (this.sub_category_id == ''){
          this.errorCategory = true;
        }
        const errorElement = this.$el.querySelector('.text-step-error');
        if (errorElement) {
          this.scrollToError(errorElement);
          return
        }

        this.$refs.sellForm1.validate().then(success => {
          if (success) {
            window.scrollTo(0,20);
            this.one = false;
            this.two = true;
            this.three = false;
            this.twoActive = true;
            this.threeActive = false;
          }
        }).catch(err => {
          console.log(err)
        });
      },
      backToFirstStep() {
        window.scrollTo(0,0);
        this.one = true;
        this.two = false;
        this.three = false;
        this.twoActive = false;
        this.threeActive = false;
      },
      confirmSecondStep() {
        if (this.cover_image == '' && this.postImages.length === 0) {
          if (this.postCoverImage == ''){
              this.postCoverImageError = true;
          } else {
            this.coverError = true;
          }
          this.screenshotsError = true;
          return false;
        }
        if (this.postCoverImage == '') {
          this.postCoverImageError = true;
          return false;
        }
        if (this.cover_image == '') {
          this.coverError = true;
          return false;
        }
        if (this.postImages.length === 0) {
          this.screenshotsError = true;
          return false;
        }
        window.scrollTo(0,20);
        this.one = false
        this.two = false;
        this.three = true;
        this.twoActive = true;
        this.threeActive = true;
        this.accessThreeStep = true;
      },
      backToSecondStep() {
        window.scrollTo(0,0);
        this.three = false;
        this.two = true;
        this.threeActive = false;
      },
      finalSubmit() {
        if (this.thana_id == ''){
          this.errorLocation = true
        }
        const errorElement = this.$el.querySelector('.text-step-error');
        if (errorElement) {
          this.scrollToError(errorElement);
          return
        }
        this.submitLoading = true;
        this.$refs.sellForm2.validate().then(success => {
          if (success) {
            this.postSubmit()
            return
          }
          if(this.thana_id == null){
            this.errorLocation = true;
          }
          this.submitLoading = false;
          return false;
        });
      },
      goToFinal(){
        if (this.accessThreeStep){
          this.confirmSecondStep();
        }
      },
      cropBoxSet(){
        let data = {
          top: 15,
          left: 15,
          width: 363,
          height: 270
        }
        this.$refs.cropper.setCropBoxData(data);
      },
      onFileSelect(e) {
        this.coverError = false;
        this.validType = false;
        this.postCoverImageError = false;
        const file = e.target.files[0]
        if (file != undefined) {
          this.mime_type = file.type
          let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
          if (allowedTypes.indexOf(this.mime_type) == -1) {
            this.validType = true;
            return;
          }
          if (typeof FileReader === 'function') {
            this.dialog = true
            const reader = new FileReader()
            reader.onload = (event) => {
              this.postCoverImage = event.target.result
              this.$refs.cropper.replace(this.postCoverImage)
            }
            reader.readAsDataURL(file)
          } else {
            alert('Sorry, FileReader API not supported')
          }
        }
      },
      saveImage() {
        this.coverError = false;
        this.postCoverImageError = false;
        this.cover_image = this.$refs.cropper.getCroppedCanvas().toDataURL()
        this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
          const formData = new FormData()
          formData.append('profile_photo', blob, 'name.jpeg')
        }, this.mime_type)
      },
      uploadScreenshots(files) {
        this.screenshotsError = false;
        if (files.length === 0) {
          this.postImages = [];
          return;
        }
        if (this.postImages.length > files.length) {
          let val = '';
          this.postImages.forEach(function (image, index) {
            files.forEach(function (file) {
              if (image.name !== file.name) {
                val = index
                return
              }
            })
          })
          this.postImages.splice(val, 1);
          return
        }
        this.postImages = [];
        let screenshots = [];
        let fileCount = files.length
        for(let i = 0; i < fileCount; i++) {
          let file = files[i];
          let fileType = file.type.split('/');
          if (fileType[0] != 'image'){
            this.$toaster.warning("Please upload only image file !!!")
            continue
          }
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => {
            let fileBase64 = reader.result;
            let data = {
              name: file.name,
              file: fileBase64
            }
            screenshots.push(data);
          }
          reader.onerror = function (error) {
            console.log('Error: ', error)
          }
        }
        this.postImages = screenshots;
      },
      warrantyCheck() {
        this.warrantyModal = false;
        if (this.warranty_availability == 1){
          this.warrantyModal = true;
        }
      },
      postSubmit () {
        this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
          if (typeof response.data == 'string') {
            this.onLogout();
            this.submitLoading = false;
            return;
          }
          this.user = response.data.data;
          if (this.user.status == 0) {
            this.onLogout();
            this.submitLoading = false;
            return;
          }

          let uploadInfo = {
            sub_category_id: this.sub_category_id,
            product_type: this.product_type,
            used_year: this.used_product.year,
            used_month: this.used_product.month,
            used_day: this.used_product.day,
            name: this.name,
            description: this.description,
            price: this.price,
            is_negotiable: this.is_negotiable,
            warranty_availability: this.warranty_availability,
            warranty_year: this.warranty.year,
            warranty_month: this.warranty.month,
            warranty_day: this.warranty.day,
            cover_image: this.cover_image,
            images: this.postImages,
            phone_no: this.phone_no,
            email: this.email,
            thana_id: this.thana_id,
            area: this.area,
            address: this.address,
          }
          let config = {
            headers: {
              'Authorization': 'Bearer ' + this.$store.state.token
            }
          }
          this.$api.post('sell-post', uploadInfo, config)
              .then(response => {
                if (response.status == 200) {
                  this.$toaster.success(this.$t('post_submitted', this.$store.state.locale));
                  this.submitLoading = false;
                  this.$router.push('/profile').then(() => {
                    this.$root.$emit('sellPostDashboard');
                  });
                }
              }).catch(err => {
            console.log(err)
          });
        })
      }
    },
    created() {
      window.scrollTo(0,0);
      this.$api.get('sub-categories').then (response =>{
        this.subCategories = response.data.data
      });
      this.$api.get('thana-list?include=district.division').then (response =>{
        this.thanas = response.data.data
        this.thanas.map(function (thana){
          return thana.item_data = thana.name + ', ' + thana.district.data.name + ', ' + thana.district.data.division.data.name;
        });
      });

    },
  };
</script>
