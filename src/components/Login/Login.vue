<template>
    <div>
        <!-- sign in  -->

        <section class="login-section">
            <div class="container-fluid sign-in-width">
                <div class="row login-form">
                    <div class="col-md-6 col-xl-4 mx-auto">
                        <ul class="d-flex justify-content-center align-items-center p-0">
                            <li style="text-transform: uppercase">
                                {{ $t('sign_in', $store.state.locale) }}
                            </li>
                        </ul>

                        <div class="password-setup-popup" v-if="$store.state.setPasswordPopUp">
                            <div class="password-setup-popup--content">
                                <p>{{ $t('mail_password', $store.state.locale) }}</p>
                                <!-- <router-link to="/registration">ok</router-link> -->
                                <button @click="hidePopUp" class="password-setup-popup--content--btn"><p>{{ $t('submit', $store.state.locale) }}</p></button>
                            </div>
                        </div>

                        <!-- form -->
                        <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption === 'phone_number' && !$store.state.setPasswordPopUp">
                            <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                <div class="form-group" v-if="$store.state.notSetPassword">
                                    <!-- user name -->
                                    <label for="username1" class="">{{ $t('email', $store.state.locale) }}</label>
                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                        <div class="floating-email">
                                            <input @click="changeErrorMessage" type="text" class="form-control mb-2"
                                               id="username1" v-model="form.email" :placeholder="$t('enter_email', $store.state.locale)">
                                             <label class="email-icon"><i class="fas fa-envelope"></i></label>
                                        </div>
                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <!-- password -->
                                <div class="form-group mb-3" v-if="!$store.state.notSetPassword">
                                    <label for="gamepassword1" class="">{{ $t('password', $store.state.locale) }}</label>
                                    <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                        <input @keypress="submitOnEnterPressed" @click="changeErrorMessage" type="password" class="form-control mb-2"
                                               id="gamepassword1" v-model="form.password">
                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        <br v-if="errors[0]">
                                    </ValidationProvider>
                                    <span class="error-message"
                                        v-if="$store.state.notFoundEmail && !$store.state.inactiveUser">{{ $t('password', $store.state.locale) }}<br></span>
                                        <span class="error-message" v-if="$store.state.inactiveUser">{{ $t('inactive_user', $store.state.locale) }}</span>
                                </div>
                                <div class="d-flex justify-content-between" v-if="!$store.state.notSetPassword">
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" id="gamecheck1">
                                        <label class="custom-control-label" for="gamecheck1">
                                            {{ $t('remember_me', $store.state.locale) }}
                                        </label>
                                    </div>
                                    <!-- forget password -->
                                    <div class="forget">
                                        <router-link to="forgot-password"><u>{{ $t('forget_password', $store.state.locale) }}</u></router-link>
                                    </div>
                                </div>
                                <!-- sign in button -->
                                <div class="text-center sign-btn">
                                    <button class="btn mb-2 btn--login w-100" type="submit" ref="emailLoginBtn" :disabled="isLoading && $store.state.notSetPassword && !$store.state.notFoundEmail">
                                        {{ $t('sign_in', $store.state.locale) }}
                                        <span v-if="$store.state.isEmailLoading"
                                              class="spinner-border spinner-border-sm"></span>
                                    </button>
                                </div>
                            </form>
                        </ValidationObserver>

                        <!-- form -->
                        <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption === 'email'">
                            <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                <div class="form-group">
                                    <label>{{ $t('phone_number', $store.state.locale) }}</label>
                                    <div class="floating-label-group">

                                        <ValidationProvider name="number"
                                                            :rules="`required|user-number:${phone_number}`"
                                                            v-slot="{ errors }">

                                            <input type="tel" class="form-control country-number mb-2 cursor-none"
                                                   v-model="phone_number" name="user-number" v-if="showOTP === true"
                                                   disabled/>
                                            <input @keypress="isNumber($event)" type="tel" id="user-number"  class="form-control country-number mb-2"
                                                   v-model="phone_number" name="user-number" :placeholder="$t('enter_phone_number', $store.state.locale)"
                                                   v-else/>

                                            <span v-if="errors.length" class="error-message number-error-message">{{ errors[0] }}</span>
                                            <label class="floating-label">+88</label>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div v-if="showOTP">
                                    <div class="form-group">
                                        <span class="success-message mt-5 d-block">{{ $t('insert_digit', $store.state.locale) }}</span>
                                        <div class="otp-input-group">
                                            <v-otp-input
                                                    ref="otpInput"
                                                    input-classes="otp-input"
                                                    separator=""
                                                    :num-inputs="6"
                                                    :should-auto-focus="true"
                                                    :is-input-num="true"
                                                    @on-change="handleOnChange"
                                                    @on-complete="handleOnComplete"
                                            />
                                        </div>
                                        <!--                                            <label for="user-otp" class="sr-only">otp</label>-->
                                        <!--                                            <ValidationProvider name="OTP" rules="required|digits:6" v-slot="{ errors }">-->
                                        <!--                                                 <span class="success-message" v-if="resend">Insert 6 digits code sent to your phone <strong style="color: white;">{{ form.phone_number }}</strong></span>-->
                                        <!--                                                  <span class="success-message" v-if="!resend && !$store.state.wrongOTP && !$store.state.timeout && !$store.state.inactiveUser">Insert 6 digits code sent to your phone <strong style="color: white;">{{ form.phone_number }}</strong></span><br>-->
                                        <!--                                                <input @click="changeWrongOtp" type="text" class="form-control mb-2 otp-input" id="user-otp" placeholder="Your OTP" v-model="otp">-->

                                        <!--                                                <span class="error-message">{{ errors[0] }}</span>-->
                                        <br v-if="error">

                                        <span class="error-message" v-if="$store.state.isOTPEmpty && !resend">{{ $t('insert_digit', $store.state.locale) }}</span>
                                        <span class="error-message" v-if="$store.state.wrongOTP && !resend">{{ $t('wrong_otp', $store.state.locale) }}</span>
                                        <span class="error-message" v-if="$store.state.timeout && !resend">{{ $t('otp_expired', $store.state.locale) }}</span>
                                        <span class="error-message" v-if="$store.state.inactiveUser && !resend">{{ $t('inactive_user', $store.state.locale) }}</span>
                                        <span class="error-message" v-if="$store.state.otpNotFound && !resend">{{ $t('otp_not_found', $store.state.locale) }}</span>

                                        <!--                                            </ValidationProvider>-->
                                    </div>
                                    <div class="otpbtn">
                                        <button class="btn btn-link mb-2 resend-code" type="button"
                                                @click.prevent="onResendOtp" :disabled="isResendLoading">
                                            {{ $t('not_get_code', $store.state.locale) }}<u>{{ $t('try_resent_code', $store.state.locale) }}</u>
                                            <span v-if="isResendLoading"
                                                  class="spinner-border spinner-border-sm"></span>
                                        </button>
                                        <button class="btn btn--otp mb-2 w-100" type="button"
                                                @click.prevent="handleSubmit(onOtpVerification)"
                                                :disabled="$store.state.isSubmitLoading">
                                            {{ $t('sign_in', $store.state.locale) }}
                                            <span v-if="$store.state.isSubmitLoading"
                                                  class="spinner-border spinner-border-sm"></span>
                                        </button>
                                    </div>
                                </div>
                                <!-- sign in button -->
                                <div v-else>
                                    <div class="text-center sign-btn">
                                        <button class="btn mb-2 w-100 btn--login" ref="sendOtpBtn" type="submit" :disabled="isLoading">
                                            {{ $t('proceed', $store.state.locale) }}
                                            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
                        <span class="or text-center w-100 d-block">{{ $t('or', $store.state.locale) }}</span>
                        <button v-if="!$store.state.setPasswordPopUp"
                                class="btn mb-4 btn--registration button-style w-100" style="margin: 0 auto;"
                                @click="onChangeLoginOption">
                                <i class="fas fa-sign-in-alt"></i>
                            <span>{{ $t('continue_with', $store.state.locale) }}
                                 <b v-if="loginOption === 'email'">{{ $t('email', $store.state.locale) }}</b>
                                 <b v-else>{{ $t('phone_number', $store.state.locale) }}</b>
                                {{ $t('through_this', $store.state.locale) }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                error: false,
                form: {
                    email: "",
                    password: "",
                },
                phone_number: "",
                otp: "",
                loginOption: 'email',
                unauthorized: "",
                unautorizedError: "",
                showOTP: false,
                resend: false,
                wrongOTP: false,
                isLoading: false,
                isResendLoading: false,
                isLoggingIn: false,
                referral: ''
            }
        },
        methods: {
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                //if enter pressed
                if (charCode == 13) {
                    if (this.phone_number == '' || this.phone_number.length < 11) {
                        return;
                    }

                    this.$store.dispatch('setEmailLoader', true);
                    this.isLoggingIn = true;
                    let elem = this.$refs.sendOtpBtn;
                    elem.click();
                    return;
                } 

                if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.phone_number.length > 10) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            handleOnComplete(value) {
                this.otp = value;
            },
            handleOnChange(value) {
                // console.log('OTP changed: ', value);
            },
            handler(val) {
                if (val != '0') {
                    this.phone_number = null;
                }
            },
            checkAdminRole(roles) {
                return roles.some(el => el.name === 'admin')
            },
            onLogin() {
                this.$store.dispatch('setEmailLoader', true);
                this.isLoading = true;
                this.isLoggingIn = true;
                if (this.loginOption === 'email') {
                    this.$store.dispatch('setPhoneNumber', this.phone_number);
                    this.clearErrorMessages();
                    this.$api.post('send-otp', {phone_number: this.phone_number}).then(response => {
                        if (response.data.error === false) {
                            this.isLoading = false
                            setTimeout(() => {
                                this.isLoading = false
                            }, 4000) // to clear the status :)
                            this.showOTP = true
                        }
                    }).catch(error => {
                        console.error(error)
                        this.isLoading = false
                    });
                } else {
                    if (this.$store.state.notSetPassword) {
                        localStorage.setItem('email', this.form.email)
                        localStorage.setItem('referral', this.referral)
                        this.$store.dispatch('setEmail', this.form.email)
                        this.$store.dispatch('checkPassword', this.form)
                    } else {
                        this.$store.dispatch('login', this.form)
                    }

                }
            },
            onChangeLoginOption: function () {
                this.clearErrorMessages();
                if (this.loginOption === 'phone_number') {
                    this.loginOption = 'email'
                } else {
                    this.loginOption = 'phone_number';
                    this.$store.state.notSetPassword = true;
                }
              this.isLoading = false
            },
            onOtpVerification: function () {
                if (this.otp == '' || this.otp == null) {
                    this.$store.commit('setEmptyOTP', true);
                    return;
                }
                this.isLoading = true;
                this.resend = false;
                this.$store.dispatch('verifyOtp', {phone_number: this.phone_number, otp: this.otp, referral_code: this.referral})
            },
            onResendOtp: function () {
                this.isResendLoading = true;
                this.$store.dispatch('setPhoneNumber', this.phone_number);
                this.clearErrorMessages();
                this.$api.post('send-otp', {phone_number: this.phone_number}).then(response => {
                    if (response.data.error === false) {
                        this.isResendLoading = false
                        this.resend = true
                    }
                });
            },
            changeErrorMessage() {
                this.$store.commit('setNotFoundEmail', false)
                this.isLoading = false
            },
            changeWrongOtp() {
                this.$store.commit('setWrongOTP', false)
            },
            hidePopUp() {
                this.$store.dispatch('hidePasswordResetPopup', false)
                this.$router.push('/')
            },
            clearErrorMessages () {
                this.$store.commit('setWrongOTP', false);
                this.$store.commit('setInactiveUser', false);
                this.$store.commit('setTimeout', false);
                this.$store.commit('setEmptyOTP', false);
                this.$store.commit('setOTPNotFound', false);
                 this.$store.dispatch('setEmailLoader', false);
            },
            submitOnEnterPressed(evt, option) {
                if (option == 'passsword') {
                    if (this.form.password == '' || this.form.password.length < 8) {
                        return;
                    }
                    evt = (evt) ? evt : window.event;
                    let charCode = (evt.which) ? evt.which : evt.keyCode;
                    if (charCode == 13) {
                        this.$store.dispatch('setEmailLoader', true);
                        this.isLoggingIn = true;
                        let elem = this.$refs.emailLoginBtn;
                        elem.click();
                    }
                    return;
                }

                if (option == 'phone') {
                    console.log('op: ', option);
                }
                
            }
        },
        created() {
            this.referral = this.$route.query.referred_code ?? '';
            if(this.$store.getters.ifAuthenticated) {
                this.$router.push('/profile');
            }
            this.$store.state.setPasswordPopUp = false;
            this.$root.$on('stopLoader', () => {
                this.isLoading = false;
            });

            this.$store.watch(
                (state)=>{
                    return this.$store.state.isSubmitLoading;
                },
                (newValue, oldValue)=>{
                    this.isLoggingIn = newValue;
                },
                { deep:true }
            );
        },
    }
</script>


<style scoped>
</style>
