<template>
    <div>
        <!-- sign up -->
        <div class="margin-t-32">
            <!-- form -->
            <ValidationObserver v-slot="{ handleSubmit }">
                <form method="post">
                  
                    <!-- First Name -->
                    <div class="form-row margin-b-32">
                        <div class="col-md-12">
                            <label for="firstName" class="opa-85"><span>{{ $t('full_name', $store.state.locale) }}</span></label>
                            <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                             <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                                <input @keypress="isValidNameString($event)" type="text" class="login-input" id="firstName" value="" v-model="form.name" :placeholder="$t('full_name', $store.state.locale)">
                                <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                             </div>
                            </ValidationProvider>
                        </div>
                        <!-- Last Name -->
<!--                        <div class="col-md-6">-->
<!--                            <label for="LastName" class="opa-85">{{ $t('last_name', $store.state.locale) }}</label>-->
<!--                            <ValidationProvider name="last name" rules="required" v-slot="{ errors }">-->
<!--                              <div class="floating-label-group" :class="{'error-input-group': errors[0]}">-->
<!--                                <input @keypress="isValidLastNameString($event)" type="text" class="login-input" id="LastName" value="" v-model="form.lastName" placeholder="Last Name">-->
<!--                                <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>-->
<!--                              </div>-->
<!--                            </ValidationProvider>-->
<!--                        </div>-->
                    </div>
                    <!-- Mobile No. -->
                    <div class="form-group margin-b-32">
                        <label for="Phone" class="opa-85"><span>{{ $t('mobile_no', $store.state.locale) }}</span></label>
                        <ValidationProvider name="Phone Number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">
                          <div class="floating-label-group" :class="{'error-input-group': errors[0] || $store.state.numberExists}">
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
                            <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                                <input type="email" class="login-input gray" id="email" v-model="form.email" :readonly="exist_email" :placeholder="$t('email', $store.state.locale) + ' ' + $t('address', $store.state.locale)">
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

                    <!-- confirm password -->
                    <!-- <div class="form-group">
                        <label for="gamepassword2">Confirm Password</label>
                        <ValidationProvider name="confirm" rules="password:@password" v-slot="{ errors }">
                            <input type="password" class="login-input" id="gamepassword2" placeholder="Confirm Password" v-model="form.confirmPassword">
                            <span class="error-txt">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div> -->
                        <!-- Agree terms and condition -->
                    <div class="post-rent--form-group post-rent--form-group--agree ml-a-6 mt-4">
                        <div class="checkbox-parents">
                            <ValidationProvider name="Terms & Conditions" rules="required" v-slot="{ errors }">
                            <input type="checkbox" id="terms-agree" class="checkbox-parents--input" v-model="agreement" @change="onAgreement($event)">
                            <label for="terms-agree" class="checkbox-parents--label">{{ $t('i_agree', $store.state.locale) }}  <router-link to="/terms" target="_blank" class="text-secondery"><u>{{ $t('terms', $store.state.locale) }}</u></router-link></label>
                            <span v-if="errors.length" class="error-txt text-danger d-block ml--30">{{ $t('please_agree_with_terms_and_condition', $store.state.locale) }}</span>
                        </ValidationProvider>
                        </div>
                    </div>

                    <!-- sign in button -->
                    <div class="text-center sign-btn">
                        <button class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-100" type="button" @click.prevent="handleSubmit(onSubmit)" :disabled="isLoading">
                            {{ $t('submit', $store.state.locale) }}
                            <span v-if="$store.state.isSubmitLoading || isLoading" class="spinner-border spinner-border-sm"></span>
                        </button>
                        <!-- <button type="button" class="btn btn-primary mb-2" @click.prevent="handleSubmit(onSubmit)">Submit</button>-->
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
                    name: '',
                    lastName: '',
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
            onAgreement(event){
                this.agreement = '';
                if (event.target.checked == true){
                    this.agreement = 1
                }
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
            isValidNameString: function(evt) {
              evt = (evt) ? evt : window.event;
              if(this.form.name.length > 30){
                evt.preventDefault();
              }
            },
           lengthLimit: function(evt) {
              evt = (evt) ? evt : window.event;
              if(this.form.password.length > 14){
                evt.preventDefault();
              }
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
                }
                if (response.data.data.isPhoneExists) {
                  this.isPhoneExists = true;
                }
                return;
              }

              this.$swal("Warning", response.message, 'warning');
            });
          },
            changePhoneValidation: function() {
                this.$store.dispatch('setNumberExist', false);
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
        created () {
          console.log('email', localStorage.getItem('email'))
          console.log('phone', this.$store.state.signup.phoneNumber)
          if (this.$store.state.signup.phoneNumber){
            console.log('hello from inner')
          }
        },
         mounted() {
        this.toggleBodyClass('addClass', 'registrationPadding');
        },
        destroyed() {
        this.toggleBodyClass('removeClass', 'registrationPadding');
        }

    }
</script>
