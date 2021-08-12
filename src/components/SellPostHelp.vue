<template>
   <div>
          <div class="profile-header position-relative">
              <div class="position-absolute w-100 h-100">
                   <img src="../assets/img/profile-bg.webp" alt="profile bg" class="img-fluid w-100 h-100 user-profile-bg">
              </div>
              <div class="container position-relative h-100">
                  <div class="profile-header--btn position-absolute right-0 bottom-50">
                      <router-link  class="btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative" to="/create-sell-post">{{ $t('sell_post', $store.state.locale) }}<span></span> <span></span></router-link>
<!--                      <a href="https://www.gamehub.com.bd/profile" class="btn&#45;&#45;secondery"></a>-->
                  </div>
              </div>
          </div>
          <div class="sellpost-help">
              <div class="container">
                  <div class="row">
                      <div class="col-md-8 mx-auto">
                           <div class="">
                                <h5 class="my-5">{{ $t('sellpost_help_title_1', $store.state.locale) }} :</h5>
                                <ul class="bullet-list">
                                    <li class="bullet-list--item">{{ $t('sellpost_list_1', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_2', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_3', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_4', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_5', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_6', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_7', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_8', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_9', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_10', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_10', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_11', $store.state.locale) }}</li>
                                    <li class="bullet-list--item">{{ $t('sellpost_list_12', $store.state.locale) }}</li>
                                </ul>
                                <h5>{{ $t('sellpost_help_title_2', $store.state.locale) }}</h5>
                            </div>
                            <div class="lend-notice-content-btn mx-auto">
                              <router-link to="/create-sell-post" class="btn--secondery-hover br-4 gil-bold font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative w-100 text-center">{{ $t('sell_post', $store.state.locale) }}<span></span> <span></span></router-link>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
   </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        methods: {
            clickProfile() {
                var auth = this.$store.getters.ifAuthenticated;
                if (!auth) {
                    this.$router.push('/login');
                    return
                }
                this.$root.$emit('rentPost');
            },
        },
        created() {
            window.scrollTo(0,0);
        },
    }
</script>

<style scoped>
    fieldset {
        max-width: 100% !important;
    }
</style>
