<template>
  <div>
    <div class="gamebazar-step-form">
        <div class="container">
            <div class="max-400 mx-auto">
                <vue-good-wizard 
                    :steps="steps"
                    :onNext="nextClicked" 
                    :onBack="backClicked">
                    <div slot="page1">
                        <h4>Step 1</h4>
                        <p>This is step 1</p>
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
          label: `বিক্রেতা বিবরন`,
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
