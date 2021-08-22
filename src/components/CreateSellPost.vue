<template>
  <div>
    <div class="gamebazar-step-form pt-5 pb-a-25">
        <div class="container">
            <div class="mx-auto">
                <div class="max-400 mx-auto mb-5">
                  <router-link
                      class="secondery-border text-secondery d-flex align-items-center justify-content-center h-48 game-rent-bg"
                      to="/about-sell-post">{{$t('learn_about_create_sell_post', $store.state.locale) }}
                  </router-link>
                </div>
                <div class="max-400 mx-auto">
                  <h3 class="text-white gil-bold f-s-28 mb-5">{{$t('step_form_top_title', $store.state.locale) }}</h3>
                </div>
                <vue-good-wizard
                    ref="wizard"
                    :steps="steps"
                    :onNext="nextClicked" 
                    :onBack="backClicked"
                    :previousStepLabel="$t('previous', $store.state.locale)"
                    :nextStepLabel="$t('continue', $store.state.locale)"
                    :finalStepLabel="$t('post', $store.state.locale)">
                    <div slot="page1" >
                      <ValidationObserver ref="sellForm1">
                        <form id="sellForm1">
                          <div class="group mb-a-6">
                            <label class="mb-3 w-100">{{ $t('select_product_category', $store.state.locale) }}</label>
                            <ValidationProvider name="Category" rules="required" v-slot="{ errors, classes }">
                              <select name="Category" :class="classes" class="w-100 bg-step-form-input triangle-select-arrow no-default-arrow h-40 border-1 border-secondery-opa-25 text-white no-focus br-4 px-3" id="product-category" v-model="sub_category_id" required>
                                <option value="">{{ $t('select_category', $store.state.locale) }}</option>
                                <option :value="category.id" v-for="(category, index) in subCategories" :key="index">{{ category.name }}</option>
                              </select>
                              <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                            </ValidationProvider>
                          </div>
                          <div class="group mb-a-6">
                            <label class="mb-3 w-100">{{ $t('your_product', $store.state.locale) }}</label>
                            <ValidationProvider name="Product type" rules="required" v-slot="{ errors, classes }">
                              <div class="d-grid grid-cols-2 grid-gap-16">
                                <div class="gamebazar-step-form__input-btn">
                                    <input type="radio" id="my-product" name="my-product"  class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" @click="usedModal = false" value="1" v-model="product_type">
                                    <label for="my-product" :class="classes" class="border-1 border-secondery-opa-50 py-2 w-full d-block br-4 text-center pointer opa-7 position-relative bg-step-form-input">{{ $t('new', $store.state.locale) }}</label>
                                </div>
                                <div class="gamebazar-step-form__input-btn">
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
                              <input type="text" id="product-name" v-model="name" :class="classes" class=" px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                              <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                            </ValidationProvider>
                          </div>
                          <div class="group mb-a-6">
                            <label class="mb-3 w-100">{{ $t('description', $store.state.locale) }}</label>
                            <ValidationProvider name="Description" rules="required" v-slot="{ errors, classes }">
                              <ckeditor v-model="description" :class="classes" :config="editorConfig"></ckeditor>
                              <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                            </ValidationProvider>
                          </div>
                          <div class="group mb-a-6">
                            <label class="mb-3 w-100">{{ $t('price', $store.state.locale) }}</label>
                            <ValidationProvider name="product price" rules="required" v-slot="{ errors, classes }">
                              <input type="number" name="product price" :class="classes" class=" px-3 w-100 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" v-model="price"/>
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
                        </form>
                      </ValidationObserver>
                    </div>

                    <div class="min-h-250" slot="page2">
                        <div class="group mb-a-6">
                          <label class="mb-3 w-100">{{ $t('cover_image', $store.state.locale) }}</label>
                          <div>
                            <a class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative pointer" @click="$refs.FileInputNew.click()"> <span></span> <div class="position-relative">Upload image</div></a>
                            <input ref="FileInputNew" type="file" style="display: none;" @change="onFileSelect" />
                          </div>
                        </div>
                        <div class="group mb-a-6" v-if="dialog">
                          <label class="mb-3 w-100">{{ $t('image_preview', $store.state.locale) }}</label>
                          <div class="img-prev">
                            <VueCropper v-show="postCoverImage"
                                        ref="cropper"
                                        :src="postCoverImage"
                                        :autoCropArea="0"
                                        :scalable="false"
                                        dragMode="move"
                                        :cropBoxMovable="false"
                                        :cropBoxResizable="false"
                                        :ready="cropBoxSet"
                                        alt="Disk image preview">

                            </VueCropper>
                          </div>
                          <div class="my-3 d-grid grid-cols-2 grid-gap-16">
                            <a class="btn--secondery-hover br-4 text-center gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative pointer" @click="saveImage(), (dialog = true)"> <span></span> <div class="position-relative">Crop</div></a>
                            <a class="btn--secondery-hover br-4 text-center gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative pointer" @click="dialog = false, (cover_image = '')"> <span></span> <div class="position-relative">Cancel</div></a>
                          </div>
                          <div class="img-prev" v-if="cover_image">
                            <img :src="cover_image" alt="Cover image preview">
                          </div>
                        </div>
                        <div class="group mb-a-6">
                          <label class="mb-3 w-100">{{ $t('upload_screenshots', $store.state.locale) }}</label>
                             <UploadImages class="w-100 p-0 bg-transparent border-0" :max="4" maxError="Max image upload limit is 4" @change="uploadScreenshots"/>
                        </div>
                    </div>

                    <div slot="page3">
                      <ValidationObserver ref="sellForm2">
                        <form id="sellForm2">
                        <div>
<!--                            <div class="group mb-a-6">-->
<!--                              <label for="seller-name" class="mb-3 w-100">বিক্রেতার নাম</label>-->
<!--                              <input type="text" id="seller-name" class=" px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">-->
<!--                            </div>-->
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
<!--                            <div class="group mb-a-6">-->
<!--                              <label class="mb-3 w-100">জেলা শহর</label>-->
<!--                              <select name="" class="w-100 bg-step-form-input triangle-select-arrow no-default-arrow h-40 border-1 border-secondery-opa-25 text-white no-focus br-4 px-3" id="city">-->
<!--                                <option value="">Dhaka</option>-->
<!--                              </select>-->
<!--                            </div>-->
                            <div class="group mb-a-6">
                              <label for="address" class="mb-3 w-100">{{ $t('address', $store.state.locale) }}</label>
                              <ValidationProvider name="address" rules="required" v-slot="{ errors, classes }">
                                <input type="text" id="address" :class="classes" v-model="address" class="px-3 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                                <span class="text-step-error mt-2 d-inline-block" v-if="errors[0]">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                        </div>
                        </form>
                      </ValidationObserver>
                    </div>
                </vue-good-wizard>
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
        steps: [
          {
            label: `Description`,
            slot: 'page1',
          },
          {
            label: `Photos`,
            slot: 'page2',
          },
          {
            label: `Seller details`,
            slot: 'page3',
          },
        ],
      };
    },
    methods: {
      cropBoxSet(){
        let data = {
          width: 363,
          height: 270
        }
        this.$refs.cropper.setCropBoxData(data);
      },
      onFileSelect(e) {
        const file = e.target.files[0]
        console.log(file);
        if (file != undefined) {
          this.mime_type = file.type
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
        this.cover_image = this.$refs.cropper.getCroppedCanvas().toDataURL()
        this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
          const formData = new FormData()
          formData.append('profile_photo', blob, 'name.jpeg')
        }, this.mime_type)
      },
      uploadScreenshots(files) {
        if (files.length === 0) {
          this.postImages = [];
          console.log(this.postImages);
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
        files.forEach( function (file) {
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
        })
        this.postImages = screenshots;
        console.log(this.postImages);
      },
      warrantyCheck() {
        this.warrantyModal = false;
        if (this.warranty_availability == 1){
          this.warrantyModal = true;
        }
      },
      nextClicked(currentPage) {
        const _this = this;
        _this.$refs.wizard.isMobile = false;
        console.log('next clicked', currentPage)
        if (currentPage == 0) {
          this.$refs.sellForm1.validate().then(success => {
            if (success) {
              _this.$refs.wizard.goNext(true);
            }
          });
          return false; 
        }
        if (currentPage == 1) {
          if (this.cover_image == '') {
            this.$toaster.warning(this.$t('cover_img_upload_failed', this.$store.state.locale));
            return;
          }
          if (this.postImages.length === 0) {
            this.$toaster.warning(this.$t('screenshots_upload_failed', this.$store.state.locale));
            return;
          }
          _this.$refs.wizard.goNext(true);
        }
        if (currentPage == 2) {
          this.$refs.sellForm2.validate().then(success => {
            if (success) {
              this.onSellPostSubmit()
            }
            return false;
          });
        }
        return true;
      },
      onSellPostSubmit () {
        this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
          if (typeof response.data == 'string') {
            this.onLogout();
            return;
          }
          this.user = response.data.data;
          if (this.user.status == 0) {
            this.onLogout();
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
              address: this.address,
            }
            console.log(uploadInfo)
            let config = {
              headers: {
                'Authorization': 'Bearer ' + this.$store.state.token
              }
            }
            this.$api.post('sell-post', uploadInfo, config)
                .then(response => {
                  if (response.status == 200) {
                    this.$toaster.success(this.$t('post_submitted', this.$store.state.locale));
                    this.$router.push('/profile').then(res => {
                      this.$root.$emit('sellPostDashboard');
                    });
                  }
                }).catch(err => {
              console.log(err)
            });
        })
      },
      backClicked(currentPage) {
         const _this = this;
        _this.$refs.wizard.isMobile = false;
        console.log('back clicked', currentPage);
        return true; //return false if you want to prevent moving to previous page
      },
    },
    created() {
      window.scrollTo(0,0);
      this.$api.get('sub-categories').then (response =>{
        this.subCategories = response.data.data
      });
    },
    mounted() {
      // document.querySelector('.wizard__next').add
      // $('.wizard__next').addClass('')
      $(".final-step").append(" <span>Post</span> <i></i>");
          $('.final-step').contents().filter((_, el) => el.nodeType === 3).remove();
    },
  };
</script>
