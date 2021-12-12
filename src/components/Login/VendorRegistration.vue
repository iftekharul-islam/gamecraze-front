<template>
    <div>
        <!-- sign up -->
        <div class="margin-t-32">
            <!-- form -->
            <ValidationObserver v-slot="{ handleSubmit }">
                <form method="post">
                  <!-- Shop Name -->
                  <div class="form-row margin-b-32">
                    <div class="col-md-12">
                      <label for="firstName" class="opa-85"><span>{{ $t('shop_name', $store.state.locale) }}</span></label>
                      <ValidationProvider name="Shop name" rules="required" v-slot="{ errors }">
                        <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                          <input @keypress="isValidNameString($event)" type="text" class="login-input" v-model="form.shopName" :placeholder="$t('shop_name', $store.state.locale)">
                          <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <!-- trade license No. -->
                  <div class="form-group margin-b-32">
                    <label for="Phone" class="opa-85"><span>{{ $t('trade_license', $store.state.locale) }}</span></label>
                    <ValidationProvider name="Trade license" rules="required|max:6" v-slot="{ errors }">
                      <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                        <input type="text" class="login-input" maxlength="6" v-model="form.tradeLicense"  :placeholder="$t('trade_license', $store.state.locale)">
                        <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <!-- First Name -->
                  <div class="form-row margin-b-32">
                    <div class="col-md-12">
                      <label for="firstName" class="opa-85"><span>{{ $t('shop_owner_name', $store.state.locale) }}</span></label>
                      <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                        <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                          <input @keypress="isValidNameString($event)" type="text" class="login-input" id="firstName" value="" v-model="form.name" :placeholder="$t('full_name', $store.state.locale)">
                          <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <!-- Mobile No. -->
                  <div class="form-group margin-b-32">
                    <label for="Phone" class="opa-85"><span>{{ $t('mobile_no', $store.state.locale) }}</span></label>
                    <ValidationProvider name="Phone Number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">
                      <div class="floating-label-group" :class="{'error-input-group': errors[0] || $store.state.numberExists || isPhoneExists}">
                        <input @focus="changePhoneValidation" @keypress="isNumber($event)" type="text" class="login-input" id="Phone" v-model="form.phone_number" :readonly="phone_number !== ''" :placeholder="$t('phone_number', $store.state.locale)">
                        <!-- <input type="text" class="login-input gray cursor-none" id="Phone" value="" v-model="form.phone_number" readonly> -->
                        <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                        <span class="error-txt d-block" v-if="$store.state.numberExists || isPhoneExists">{{ $t('phone_number_exits', $store.state.locale) }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <!-- user email -->
                  <div class="form-group margin-b-32">
                    <label for="email" class="opa-85"><span>{{ $t('email', $store.state.locale) }}</span> <span class="text-lowercase">{{ $t('address', $store.state.locale) }}</span></label>
                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                      <div class="floating-label-group" :class="{'error-input-group': errors.length || isEmailExists }">
                        <input @focus="onEmailChange" type="email" class="login-input gray" id="email" v-model="form.email" :readonly="exist_email" :placeholder="$t('email', $store.state.locale) + ' ' + $t('address', $store.state.locale)">
                        <!-- <input @focus="onEmailChange" type="email" class="login-input" id="email" value="" v-model="form.email"> -->
                        <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                        <span class="error-txt d-block" v-if="isEmailExists">{{ $t('email_exits', $store.state.locale) }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <!-- password -->
                  <div class="form-group margin-b-32">
                    <label for="gamepassword1" class="opa-85"><span>{{ $t('password', $store.state.locale) }}</span></label>
                    <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                      <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                        <input @keypress="lengthLimit($event)" type="password" class="login-input" id="gamepassword1" :placeholder="$t('password', $store.state.locale)" v-model="form.password">
                        <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>

                  <!-- sign in button -->
                  <div class="text-center sign-btn">
                      <button class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-100" type="button" @click.prevent="handleSubmit(onSubmit)" :disabled="isLoading">
                          {{ $t('sign_up', $store.state.locale) }}
                          <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                      </button>
                  </div>

                </form>
            </ValidationObserver>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
              agreement: '',
              exist_email: localStorage.getItem('email'),
              phone_number: this.$store.state.signup.phoneNumber,
              form: {
                shopName: '',
                tradeLicense: '',
                name: '',
                email: localStorage.getItem('email'),
                referral: localStorage.getItem('referral') ?? '',
                phone_number: this.$store.state.signup.phoneNumber,
                password: ""
                ,                },
              isLoading: false,
              isPhoneExists: false,
              isEmailExists: false
            }
        },
        methods: {
          onEmailChange: function() {
            this.isEmailExists = false;
          },
          onSubmit: function () {
            if(this.phone_number){
              this.onPhoneSubmit();
            } else {
              this.$store.dispatch('emailVerify', this.form)
            }

          },
          onPhoneSubmit: function () {
            this.isLoading = true;
            let config = {
              headers: {
                'Authorization': 'Bearer ' + this.$store.state.token
              }
            }
            this.$api.put('update-users-by-phone', this.form, config).then(response => {
              if (response.data.error === false) {
                this.$store.commit('setUser', response.data.data);
                this.$store.commit('setUserId', response.data.data.id);
                localStorage.setItem('userId', JSON.stringify(response.data.data.id))
                localStorage.setItem('user', JSON.stringify(response.data.data));
                this.$router.push('/');
                return
              }
              if (response.data.error === true) {
                if (response.data.data.isEmailExists) {
                  this.isEmailExists = true;
                  this.isLoading = false;
                }
                if (response.data.data.isPhoneExists) {
                  this.isPhoneExists = true;
                  this.isLoading = false;
                }
                return;
              }

              this.$swal("Warning", response.message, 'warning');
            });
          },
          isValidNameString: function(evt) {
            evt = (evt) ? evt : window.event;
            if(this.form.name.length > 30){
              evt.preventDefault();
            }
          },
          changePhoneValidation: function() {
            this.isPhoneExists = false,
            this.$store.dispatch('setNumberExist', false);
          },
          isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.form.phone_number.length > 10) {
              evt.preventDefault();;
            } else {
              return true;
            }
          },
          lengthLimit: function(evt) {
            evt = (evt) ? evt : window.event;
            if(this.form.password.length > 14){
              evt.preventDefault();
            }
          },
          toggleBodyClass(addRemoveClass, className) {
            const el = document.body;

                if (addRemoveClass === 'addClass') {
                el.classList.add(className);
                } else {
                el.classList.remove(className);
                }
            },
        },
         mounted() {
        this.toggleBodyClass('addClass', 'registrationPadding');
        },
        destroyed() {
        this.toggleBodyClass('removeClass', 'registrationPadding');
        }

    }
</script>
