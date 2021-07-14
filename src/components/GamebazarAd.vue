<template>
  <div>
    <div class="gamebazar-step-form pt-5 pb-a-25">
        <div class="container">
            <div class="mx-auto">
              <div class="max-400 mx-auto">
                <h3 class="text-white gil-bold f-s-28 mb-4">পণ্যের বিজ্ঞাপন দিতে নিচের
                    ফরম টি পূরণ করুন।</h3>
              </div>
                <vue-good-wizard 
                    :steps="steps"
                    :onNext="nextClicked" 
                    :onBack="backClicked">
                    <div slot="page1" class="">
                        <div class="group mb-a-6">
                          <label for="product-category" class="mb-3 w-100">পণ্যের ক্যাটাগরি সিলেক্ট করুন</label>
                          <select name="" class="w-100 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" id="product-category">
                            <option value="">প্লে-ষ্টেশন 5</option>
                          </select>
                        </div>
                        <div class="group mb-a-6">
                          <label for="" class="mb-3 w-100">আপনার পণ্যটি</label>

                          <div class="d-grid grid-cols-2 grid-gap-16">
                            <div class="gamebazar-step-form__input-btn">
                              <input type="radio" id="my-product" name="my-product" class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                              <label for="my-product">নতুন</label>
                            </div>
                            <div class="gamebazar-step-form__input-btn">
                              <input type="radio" id="my-product2" name="my-product" class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                              <label for="my-product2">নতুন</label>
                            </div>
                          </div>
                        </div>
                        <div class="group mb-a-6">
                          <label for="product-name" class="mb-3 w-100">পণ্যের নাম</label>
                          <input type="text" id="product-name" class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4">
                        </div>
                        <div class="group mb-a-6">
                          <label for="product-des" class="mb-3 w-100">পণ্যের নাম</label>
                          <textarea id="product-des" rows="5" class="w-100 bg-step-form-input border-1 border-secondery-opa-25 text-white no-focus br-4"></textarea>
                        </div>
                        <div class="group mb-a-6">
                          <label for="product-price" class="mb-3 w-100">পণ্যের মূল্য (টাকায়)</label>
                          <input type="text" id="product-price" rows="5" class="w-100 bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus br-4" />
                        </div>
                        <div class="group">
                          <div class="d-grid grid-cols-2 grid-gap-16">
                            <div class="group flex-1">
                              <label for="waranty" class="w-100">ওয়ারেন্টি আছে?</label>
                              <select name="" id="waranty" class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus w-100 br-4">
                                <option value="">Yes</option>
                              </select>
                            </div>
                            <div class="group flex-1">
                              <label for="waranty-time" class="w-100 ">ওয়ারেন্টি টাইম</label>
                              <select name="" id="waranty-time" class="bg-step-form-input h-40 border-1 border-secondery-opa-25 text-white no-focus w-100 br-4">
                                <option value="">1 years</option>
                              </select>
                            </div>
                          </div>
                        </div>

                    </div>
                    

                    <div slot="page2">
                        <h4>Step 2</h4>
                        <p>This is step 2</p>
                    </div>
                    <div slot="page3">
                        <h4>Step 3</h4>
                        <p>This is step 3</p>
                    </div>
                </vue-good-wizard>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueGoodWizard from 'vue-good-wizard';
Vue.use(VueGoodWizard);
export default {
  name: 'demo',
  data(){
    return {
      steps: [
        {
          label: `Product Description`,
          slot: 'page1',
        },
        {
          label: `Product photos`,
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
    nextClicked(currentPage) {
      console.log('next clicked', currentPage)
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log('back clicked', currentPage);
      return true; //return false if you want to prevent moving to previous page
    }
  },
};
</script>
