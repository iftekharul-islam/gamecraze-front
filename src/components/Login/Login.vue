<template>
    <div>
        <!-- sign in  -->
        <section class="login-section">
            <div class="login-form">
                <a href="/login" class="back text-white-hover gil-medium d-inline-flex align-items-center mb-a-10" v-if="showOTP && ! $store.state.setPasswordPopUp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M20.4999 12H3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="ml-1">{{ $t('back', $store.state.locale) }}</span>
                </a>
                <h2 class="gil-regular f-s-32 f-s-md-48 opa-85" v-if="! $store.state.setPasswordPopUp"> <span class="text-secondery">{{ $t('gamehubbd', $store.state.locale) }}</span> {{ $t('welcome_back_to', $store.state.locale) }} <span class="text-secondery gil-medium">{{ $t('gamehube', $store.state.locale) }}</span></h2>
                <p class="gil-medium f-s-28 sign-text" v-if="! $store.state.setPasswordPopUp"> {{ $t('sign_in', $store.state.locale) }}</p>

                <div class="password-setup-popup" v-if="$store.state.setPasswordPopUp">
                    <div class="password-setup-popup--content">
                        <p class="text-white mb-0 f-s-48">{{ $t('mail_password', $store.state.locale) }}</p>
                        <p class="text-secondery mb-0 f-s-48">example@mail.com</p>
                        <button @click="hidePopUp" class="password-setup-popup--content--btn text-white gil-medium f-s-28">{{ $t('please_email', $store.state.locale) }}</button>
                    </div>
                </div>

                <!-- For number -->
                <ValidationObserver v-slot="{ handleSubmit }" v-if="!$store.state.setPasswordPopUp">
                    <form @submit.prevent="handleSubmit(onLogin)" method="post">
                        <div v-if="loginOption === 'email'">
                            <div class="form-group">
                                <label class="gil-medium mb-2 opa-85">{{ $t('phone_number_enter', $store.state.locale) }}</label>
                                    <ValidationProvider name="number"
                                                        :rules="`required|user-number:${phone_number}`"
                                                        v-slot="{ errors }">
                                         <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                                            <input type="tel" class="login-input mb-2 cursor-none"
                                                    v-model="phone_number" name="user-number" v-if="showOTP === true"
                                                    disabled/>
                                            <input @keypress="isNumber($event)" type="tel" id="user-number"  class="login-input"
                                                    v-model="phone_number" name="user-number" :placeholder="$t('enter_phone_number', $store.state.locale)"
                                                    v-else/>
                                            <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                                          </div>
                                    </ValidationProvider>
                            </div>
                            <div v-if="showOTP">
                                <div class="form-group">
                                    <span class="success-message mt-5 d-block opa-85 gil-medium">{{ $t('insert_digit', $store.state.locale) }}</span>
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
                                <div class="otpbtn d-flex justify-content-between align-items-center">
                                    <button class="btn btn-link text-white gil-medium" type="button"
                                            @click.prevent="onResendOtp" :disabled="isResendLoading">
                                        {{ $t('try_resent_code', $store.state.locale) }}
                                        <span v-if="isResendLoading"
                                                class="spinner-border spinner-border-sm"></span>
                                    </button>
                                    <button class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative" type="button"
                                            @click.prevent="handleSubmit(onOtpVerification)"
                                            :disabled="$store.state.isSubmitLoading">
                                        {{ $t('sign_in', $store.state.locale) }}
                                        <span v-if="$store.state.isSubmitLoading"
                                                class="spinner-border spinner-border-sm"></span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div v-else>
                            <div class="form-group"  v-if="$store.state.notSetPassword">
                                <!-- user name -->
                                <label for="username1" class="opa-85 gil-medium">{{ $t('enter_your_email_address', $store.state.locale) }}</label>
                                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                    <div class="floating-email" :class="{'error-input-group': errors[0]}">
                                        <input @click="changeErrorMessage" type="text" class="login-input"
                                            id="username1" v-model="form.email" :placeholder="$t('enter_email', $store.state.locale)">
                                            <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                                    </div>
                                    
                                </ValidationProvider>
                            </div>
                            <!-- password -->
                            <div class="form-group mb-3" v-if="!$store.state.notSetPassword">
                                <label for="gamepassword1" class="opa-85 mb-2 d-inline-block">{{ $t('password', $store.state.locale) }}</label>
                                <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                    <div :class="{'error-input-group': errors[0] || $store.state.notFoundEmail && !$store.state.inactiveUser }">
                                        <input @keypress="submitOnEnterPressed" @click="changeErrorMessage" type="password" class="login-input"
                                                id="gamepassword1" v-model="form.password">

                                        <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>

                                        <span class="error-txt" v-if="$store.state.notFoundEmail && !$store.state.inactiveUser && !errors.length">
                                            {{ $t('incorrect_password', $store.state.locale) }}<br></span>

                                        <span class="error-txt" v-if="!$store.state.notFoundEmail && $store.state.inactiveUser && !errors.length">{{ $t('inactive_user', $store.state.locale) }}</span>
                                    </div>
                                   
                                </ValidationProvider>
                               
                            </div>
                            <!-- forget password -->
                            <div class="forget d-flex mt-4" v-if="!$store.state.notSetPassword">
                                <p class="mb-0 mr-1">{{ $t('forget_password', $store.state.locale) }}  </p><router-link to="forgot-password" class="text-error gil-medium"><u> {{ $t('reset_now', $store.state.locale) }}</u></router-link>
                            </div>
                            
                        </div>
                        <!-- all button -->
                        <div class="all-btn d-grid grid-md-cols-2 grid-gap-20">
                             <!-- email phone number collapse btn -->
                            <button v-if="!$store.state.setPasswordPopUp && !showOTP"
                                    type="button"
                                    class="router_link btn--collision br-40 bg-login-input border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-4 pr-a-4 d-inline-block position-relative"
                                    @click="onChangeLoginOption">
                                <span>{{ $t('sign_in_by', $store.state.locale) }}
                                        <span class="text-lowercase" v-if="loginOption === 'email'">{{ $t('email', $store.state.locale) }}</span>
                                        <span v-else>{{ $t('phone_no', $store.state.locale) }}</span>
                                    {{ $t('through_this', $store.state.locale) }}
                                </span>
                            </button>
                            <!-- Continue btn -->
                                <div class="text-center" v-if="!showOTP && loginOption === 'email'">
                                    <button class="w-full router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative" ref="sendOtpBtn" type="submit" :disabled="isLoading">
                                        {{ $t('continue', $store.state.locale) }}
                                        <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                    </button>
                                </div>

                            <!-- sign in button -->
                            <div v-if="loginOption === 'phone_number'" class="text-center">
                                <button class="w-full router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative" type="submit" ref="emailLoginBtn" :disabled="isLoading && $store.state.notSetPassword && !$store.state.notFoundEmail">
                                    <span v-if="$store.state.notSetPassword">{{ $t('continue', $store.state.locale) }}</span>
                                    <span v-if="! $store.state.notSetPassword">{{ $t('sign_in', $store.state.locale) }}</span>
                                    <span v-if="$store.state.isEmailLoading"
                                            class="spinner-border spinner-border-sm ml-2"></span>
                                </button>
                            </div>
                           
                        </div>
                    </form>
                </ValidationObserver>

                <!-- for email -->
                <!-- <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption === 'email'">
                    <form @submit.prevent="handleSubmit(onLogin)" method="post">
                        
                    </form>
                </ValidationObserver> -->
                
                
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
                if (option == 'password') {
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
        created() {
            this.$store.commit('removeSignupPhoneNumber');
            localStorage.removeItem('email')
            localStorage.removeItem('setupPasswordUser')
            this.$store.commit('setSubmitLoading', false)
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
        mounted() {
        this.toggleBodyClass('addClass', 'pt-0');
        },
        destroyed() {
        this.toggleBodyClass('removeClass', 'pt-0');
        }
    }
</script>


<style scoped>
</style>
