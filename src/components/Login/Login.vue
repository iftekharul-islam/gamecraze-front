<template>
    <div>
        <!-- sign in  -->
        <!-- <section class="login-section">
            <div class="container">
                <div class="col-md-6 mx-auto">
                    <div class="login-form">
                        <div class="text-center login-logo">
                            <img src="../../assets/img/logo/gamehublogo.svg" alt="gamehublogo" class="text-center">
                        </div>
                        <ul class="mb-3 d-flex justify-content-between">
                            <li>
                                <a class="active">LOG IN</a>
                            </li>
                            <li>
                                <a>CREATE AN ACCOUNT</a>
                            </li>
                        </ul>

                                <form action="index.html">

                                    <div class="form-group">
                                        <label for="loginuser">Phone/Email Address</label>
                                        <input type="text" class="form-control" id="loginuser" aria-describedby="emailHelp" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="loginpass">Password</label>
                                        <input type="password" class="form-control" id="loginpass" required>
                                    </div>

                                    <div class="form-group form-check d-flex justify-content-between">
                                        <div class="remember-me">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                        </div>
                                        <u><a href="#">Forgot your password?</a></u>
                                    </div>

                                    <button type="submit" class="btn btn-primary w-100 btn--login">LOG IN</button>
                                </form>

                    </div>
                </div>
            </div>
        </section> -->

        <section class="login-section">
            <div class="container-fluid sign-in-width">
                <div class="row login-form">
                    <div class="col-md-6 col-xl-4 mx-auto">
                        <div class="text-center login-logo">
                            <img src="../../assets/img/logo/gamehublogo.svg" alt="gamehublogo" class="text-center">
                        </div>
                        <ul class="d-flex justify-content-center align-items-center p-0">
                            <li>
                                SIGN IN
                            </li>
                        </ul>

                        <!-- <div class="password-setup-popup" v-if="$store.state.setPasswordPopUp">
                            <div class="password-setup-popup--content">
                                <p>Please Click this link and set your password</p>
                                <router-link to="/registration">ok</router-link>
                            </div>
                        </div> -->

                        <!-- form -->
                        <ValidationObserver v-slot="{ handleSubmit }"
                                            v-if="loginOption==='Phone Number' && !$store.state.setPasswordPopUp">
                            <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                <div class="form-group" v-if="$store.state.notSetPassword">
                                    <!-- user name -->
                                    <label for="username1" class="">Email address</label>
                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                        <input @click="changeErrorMessage" type="text" class="form-control mb-2"
                                               id="username1" v-model="form.email">
                                        <span class="error-message">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <!-- password -->
                                <div class="form-group mb-3" v-if="!$store.state.notSetPassword">
                                    <label for="gamepassword1" class="">Password</label>
                                    <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                        <input @click="changeErrorMessage" type="password" class="form-control mb-2"
                                               id="gamepassword1" v-model="form.password">
                                        <span class="error-message">{{ errors[0] }}</span>
                                        <br v-if="errors[0]">
                                    </ValidationProvider>
                                    <span class="error-message"
                                          v-if="$store.state.notFoundEmail && !$store.state.inactiveUser">Email or Password is not valid<br></span>
                                    <span class="error-message" v-if="$store.state.inactiveUser">This User is inactive, please contact to helpline</span>
                                </div>
                                <div class="d-flex justify-content-between" v-if="!$store.state.notSetPassword">
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" id="gamecheck1">
                                        <label class="custom-control-label" for="gamecheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <!-- forget password -->
                                    <div class="forget">
                                        <router-link to="forgot-password"><u>Forgot Password ?</u></router-link>
                                    </div>
                                </div>
                                <!-- sign in button -->
                                <div class="text-center sign-btn">
                                    <button class="btn mb-2 btn--login w-100" type="submit"
                                            :disabled="isLoading && $store.state.notSetPassword && !$store.state.notFoundEmail">
                                        PROCEED
                                        <span v-if="isLoading && $store.state.notSetPassword && !$store.state.notFoundEmail && $store.state.isEmailLoading"
                                              class="spinner-border spinner-border-sm"></span>
                                    </button>
                                </div>
                            </form>
                        </ValidationObserver>

                        <!-- form -->
                        <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption==='Email'">
                            <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                <div class="form-group">
                                    <label>Phone number</label>
                                    <div class="floating-label-group">

                                        <ValidationProvider name="number"
                                                            :rules="`required|user-number:${phone_number}`"
                                                            v-slot="{ errors }">
                                            <!--                                            <ValidationProvider name="number" rules="{ required: true, digits:11, regex:^(?=\d{10,11}$)(01)\d+ }" v-slot="{ errors }">-->
                                            <!--                                                <input type="tel" v-validate="{ regex: /^(?=\d{10,11}$)(01)\d+/ }" id="user-number" class="form-control country-number mb-2" v-model="phone_number"  placeholder="Mobile Number" autofocus />-->
                                            <!-- <input type="tel" id="user-number" class="form-control country-number mb-2" v-model="phone_number" name="user-number"  placeholder="Mobile Number" /> -->
                                            <input type="tel" class="form-control country-number mb-2 cursor-none"
                                                   v-model="phone_number" name="user-number" v-if="showOTP === true"
                                                   disabled/>
                                            <input @keypress="isNumber($event)" type="tel" id="user-number" class="form-control country-number mb-2"
                                                   v-model="phone_number" name="user-number" placeholder="01xxxxxxxxx"
                                                   v-else/>

                                            <span class="error-message">{{ errors[0] }}</span>
                                            <label class="floating-label">+88</label>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div v-if="showOTP">
                                    <div class="form-group">
                                        <span class="success-message" v-if="resend">Insert 6 digits code sent to your phone <strong
                                                style="color: white;">{{ form.phone_number }}</strong></span>
                                        <span class="success-message"
                                              v-if="!resend && !$store.state.wrongOTP && !$store.state.timeout && !$store.state.inactiveUser">Insert 6 digits code sent to your phone <strong
                                                style="color: white;">{{ form.phone_number }}</strong></span><br>
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

                                        <span class="error-message" v-if="$store.state.wrongOTP && !resend">You entered wrong OTP</span>
                                        <span class="error-message" v-if="$store.state.timeout && !resend">This OTP is not valid for timeout</span>
                                        <span class="error-message" v-if="$store.state.inactiveUser && !resend">This User is inactive, please contact to helpline</span>
                                        <span class="error-message" v-if="$store.state.otpNotFound && !resend">The OTP no found. Please recheck.</span>

                                        <!--                                            </ValidationProvider>-->
                                    </div>
                                    <div class="otpbtn">
                                        <button class="btn btn-link mb-2 resend-code" type="button"
                                                @click.prevent="onResendOtp" :disabled="isResendLoading">
                                            Didn’t get any code? <u>Try Resend Code </u>
                                            <span v-if="isResendLoading"
                                                  class="spinner-border spinner-border-sm"></span>
                                        </button>
                                        <button class="btn btn--otp mb-2 w-100" type="button"
                                                @click.prevent="handleSubmit(onOtpVerification)"
                                                :disabled="$store.state.isSubmitLoading">
                                            PROCEED
                                            <span v-if="$store.state.isSubmitLoading"
                                                  class="spinner-border spinner-border-sm"></span>
                                        </button>
                                    </div>
                                </div>
                                <!-- sign in button -->
                                <div v-else>
                                    <div class="text-center sign-btn">
                                        <button class="btn mb-2 w-100 btn--login" type="submit" :disabled="isLoading">
                                            PROCEED
                                            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
                        <span class="or text-center w-100 d-block">OR</span>
                        <button v-if="!$store.state.setPasswordPopUp"
                                class="btn mb-4 btn--registration button-style w-100" style="margin: 0 auto;"
                                @click="onChangeLoginOption"><i v-if="loginOption === 'Email'" class="fas fa-envelope login-email"></i>
                                <i v-if="loginOption === 'Phone Number'" class="fas fa-mobile-alt login-phone"></i> <span>Continue with  {{ loginOption }} </span>
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
                loginOption: "Email",
                unauthorized: "",
                unautorizedError: "",
                showOTP: false,
                resend: false,
                wrongOTP: false,
                isLoading: false,
                isResendLoading: false
            }
        },
        methods: {
            isNumber: function(evt) {
              evt = (evt) ? evt : window.event;
              var charCode = (evt.which) ? evt.which : evt.keyCode;
              if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.phone_number.length > 10) {
                evt.preventDefault();
              } else {
                return true;
              }
            },
            handleOnComplete(value) {
                this.otp = value;
                console.log('OTP completed: ', value);
            },
            handleOnChange(value) {
                console.log('OTP changed: ', value);
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
                if (this.loginOption === "Email") {
                    this.$store.dispatch('setPhoneNumber', this.phone_number)
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
                        this.$store.dispatch('setEmail', this.form.email)
                        this.$store.dispatch('checkPassword', this.form)
                    } else {
                        this.$store.dispatch('login', this.form)
                    }

                }
            },
            onChangeLoginOption: function () {
                if (this.loginOption === "Phone Number") {
                    this.loginOption = "Email"
                } else {
                    this.loginOption = "Phone Number"
                }
            },
            onOtpVerification: function () {
                console.log('verify otp')
                this.isLoading = true
                this.resend = false
                this.$store.dispatch('verifyOtp', {phone_number: this.phone_number, otp: this.otp})
            },
            onResendOtp: function () {
                this.isResendLoading = true
                this.$store.dispatch('setPhoneNumber', this.phone_number)
                this.$api.post('send-otp', {phone_number: this.phone_number}).then(response => {
                    if (response.data.error === false) {
                        this.isResendLoading = false
                        this.resend = true
                    }
                    console.log(response.data);
                });
            },
            changeErrorMessage() {
                this.$store.commit('setNotFoundEmail', false)
                this.isLoading = false
            },
            changeWrongOtp() {
                this.$store.commit('setWrongOTP', false)
            }
        },
        created() {
            this.$store.state.setPasswordPopUp = false;
            this.$root.$on('stopLoader', () => {
                this.isLoading = false;
            })
        },
        mounted() {
            document.body.classList.add('body-position')
        },
        destroyed() {
            document.body.classList.remove('body-position')
        }
    }
</script>


<style scoped>

</style>
