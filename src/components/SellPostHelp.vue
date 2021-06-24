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
                  <p class="f-s-20 main-text"><i>Sell post help</i> </p>
                  <div class="row">
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
