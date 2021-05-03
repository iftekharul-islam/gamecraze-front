<template>
   <div>
          <div class="profile-header position-relative">
              <div class="position-absolute w-100 h-100">
                   <img src="../assets/img/profile-bg.webp" alt="profile bg" class="img-fluid w-100 h-100 user-profile-bg">
              </div>
              <div class="container position-relative h-100">
                  <div class="profile-header--btn position-absolute right-0 bottom-50">
                      <router-link  class="btn--secondery" to="/profile" @click.native="clickProfile()"><span>{{ $t('post_for_lend', $store.state.locale) }}</span></router-link>
<!--                      <a href="https://www.gamehub.com.bd/profile" class="btn&#45;&#45;secondery"></a>-->
                  </div>
              </div>
          </div>
          <div class="lend-notice-content">
              <div class="container">
                  <p class="f-s-20 main-text"><i>{{ $t('lend_guide_body_part_1', $store.state.locale) }}</i> </p>
                  <div class="row">
                      <div class="col-sm-6">
                          <div class="lend-notice-content--text ">
                              <p>{{ $t('lend_guide_body_part_2', $store.state.locale) }}</p>
                              <p>{{ $t('lend_guide_body_part_3', $store.state.locale) }}</p>
                          </div>
                           <div class="lend-notice-content--text">
                              <p class="mb-3 lend-notice-content--text-margin">{{ $t('lend_guide_body_part_4', $store.state.locale) }}</p>
                              <ul>
                                  <li class="d-block">{{ $t('lend_guide_body_part_5', $store.state.locale) }}
                                      <u><a href="https://www.gamehub.com.bd/contacts" class="text-secondery">{{ $t('contact_us', $store.state.locale) }}</a></u>
                                  </li>
                                  <li>{{ $t('lend_guide_body_part_6', $store.state.locale) }}</li>
                                  <li>{{ $t('lend_guide_body_part_7', $store.state.locale) }}</li>
                                  <li>{{ $t('lend_guide_body_part_8', $store.state.locale) }}</li>
                                  
                              </ul>
                                <ul class="post-rent--form-group-width">
                                      <li>{{ $t('lend_guide_body_part_9', $store.state.locale) }} </li>
                                </ul>
                                <ul class="post-rent--form-group-width">
                                        <li>{{ $t('lend_guide_body_part_10', $store.state.locale) }}</li>
                                </ul>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="lend-notice-content--text-right ">
                            <p class="">{{ $t('lend_guide_body_part_11', $store.state.locale) }}</p>
                            <p>{{ $t('lend_guide_body_part_12', $store.state.locale) }}</p>
                            <p>{{ $t('lend_guide_body_part_13', $store.state.locale) }}</p>
                            <div class="img-margin">
                                <img src="../assets/img/disk.png" alt="Disk image preview" class="img-fluid">
                                    <img src="../assets/img/cover.png" alt="Cover image preview" class="img-fluid">
                            </div>
                        </div>
                      </div>
                      <div class="col-md-5 mx-auto">
                         <div class="lend-notice-content-btn">
                              <a href="https://www.gamehub.com.bd/profile" class="btn--secondery w-100"><span>{{ $t('post_for_lend', $store.state.locale) }}</span></a>
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
