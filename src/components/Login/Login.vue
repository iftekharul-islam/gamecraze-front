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
                        <ul class="mb-3 d-flex justify-content-between">
                            <li>
                                <a class="active">LOG IN</a>
                            </li>
                            <li>
                                <a>CREATE AN ACCOUNT</a>
                            </li>
                        </ul>
                            <button class="btn mb-4 btn--registration button-style w-100" style="margin: 0 auto;" @click="onChangeLoginOption">Login with {{ loginOption }} <i v-if="loginOption === 'Email'" class="far fa-envelope login-email"></i> <i v-if="loginOption === 'Phone Number'" class="fas fa-phone login-phone"></i> </button>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption==='Phone Number'">
                                <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                    <div class="form-group">
                                        <!-- user name -->
                                        <label for="username1" class="sr-only">Email</label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input @click="changeErrorMessage" type="text" class="form-control mb-2" id="username1" placeholder="User Email" v-model="form.email">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <!-- password -->
                                    <div class="form-group mb-3">
                                        <label for="gamepassword1" class="sr-only">Password</label>
                                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                            <input @click="changeErrorMessage" type="password" class="form-control mb-2" id="gamepassword1" placeholder="Password" v-model="form.password">
                                            <span class="error-message">{{ errors[0] }}</span>
                                            <br v-if="errors[0]">
                                        </ValidationProvider>
                                        <span class="error-message" v-if="$store.state.notFoundEmail && !$store.state.inactiveUser">Email or Password is not valid<br></span>
                                        <span class="error-message" v-if="$store.state.inactiveUser">This User is inactive, please contact to helpline</span>
                                    </div>
                                    <div class="d-flex justify-content-between">
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
                                    <div class="text-center sign-btn pt-5">
                                        <button class="btn mb-2 btn--login w-100" type="submit" :disabled="isLoading && !$store.state.notFoundEmail">
                                            Sign in
                                            <span v-if="isLoading && !$store.state.notFoundEmail" class="spinner-border spinner-border-sm"></span>
                                        </button>
                                    </div>
                                </form>
                            </ValidationObserver>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption==='Email'">
                                <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                    <div class="form-group">
                                        <div class="floating-label-group">
                                            <ValidationProvider name="number" :rules="`required|user-number:${phone_number}`" v-slot="{ errors }">
<!--                                            <ValidationProvider name="number" rules="{ required: true, digits:11, regex:^(?=\d{10,11}$)(01)\d+ }" v-slot="{ errors }">-->
<!--                                                <input type="tel" v-validate="{ regex: /^(?=\d{10,11}$)(01)\d+/ }" id="user-number" class="form-control country-number mb-2" v-model="phone_number"  placeholder="Mobile Number" autofocus />-->
                                                <input type="tel" id="user-number" class="form-control country-number mb-2" v-model="phone_number" name="user-number"  placeholder="Mobile Number" autofocus />
                                                <span class="error-message">{{ errors[0] }}</span>
                                                <label class="floating-label">+88</label>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div v-if="showOTP">
                                        <div class="form-group">
                                            <label for="user-otp" class="sr-only">otp</label>
                                            <ValidationProvider name="OTP" rules="required|digits:6" v-slot="{ errors }">
                                                <input @click="changeWrongOtp" type="text" class="form-control mb-2" id="user-otp" placeholder="Your OTP" v-model="otp">
                                                <span class="error-message">{{ errors[0] }}</span>
                                                <br v-if="errors[0]">
                                                <span class="success-message" v-if="!resend && !$store.state.wrongOTP && !$store.state.timeout && !$store.state.inactiveUser">We've sent a 6-digit one time PIN in your phone <strong style="color: white;">{{ form.phone_number }}</strong></span><br>
                                                <span class="error-message" v-if="$store.state.wrongOTP && !resend">You entered wrong OTP</span>
                                                <span class="error-message" v-if="$store.state.timeout && !resend">This OTP is not valid for timeout</span>
                                                <span class="error-message" v-if="$store.state.inactiveUser && !resend">This User is inactive, please contact to helpline</span>
                                                <span class="success-message" v-if="resend">We've Resent a 6-digit one time PIN in your phone <strong style="color: white;">{{ form.phone_number }}</strong></span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="otpbtn">
                                            <button class="btn btn-success mb-2" type="button" @click.prevent="onResendOtp" :disabled="isResendLoading">
                                                Resend OTP
                                                <span v-if="isResendLoading" class="spinner-border spinner-border-sm"></span>
                                            </button>
                                            <button class="btn btn-success mb-2" type="button" @click.prevent="handleSubmit(onOtpVerification)" :disabled="$store.state.isSubmitLoading">
                                                Submit
                                                <span v-if="$store.state.isSubmitLoading" class="spinner-border spinner-border-sm"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- sign in button -->
                                    <div v-else>
                                        <div class="text-center sign-btn pt-2">
                                            <button class="btn mb-2 w-100 btn--login" type="submit" :disabled="isLoading">
                                                Login / Sign up
                                                <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </ValidationObserver>
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
            handler(val){
                if(val != '0' ){
                    this.phone_number = null;
                }
            },
            checkAdminRole(roles) {
                return roles.some(el => el.name === 'admin')
            },
            onLogin() {
                console.log(this.$store.state.inactiveUser, 'hello email')
                this.isLoading = true
                if (this.loginOption === "Email") {
                    this.$store.dispatch('setPhoneNumber', this.phone_number)
                    this.$api.post('send-otp', {phone_number: this.phone_number}).then(response => {
                        console.log(response);
                        if (response.data.error === false) {
                            this.isLoading = false
                            setTimeout(() => { this.isLoading = false }, 4000) // to clear the status :)
                            this.showOTP = true
                        }
                    }).catch(error => {
                        console.error(error)
                        this.isLoading = false
                    });
                }
                else {
                    this.$store.dispatch('login', this.form)
                }
            },
            onChangeLoginOption: function () {
                if (this.loginOption === "Phone Number") {
                    this.loginOption = "Email"
                }
                else {
                    this.loginOption = "Phone Number"
                }
            },
            onOtpVerification: function () {
                console.log('hello')
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
            console.log(this.$store.state.inactiveUser, 'inactive user 1')
        },
       mounted () {
        document.body.classList.add('body-position')
        },
        destroyed () {
        document.body.classList.remove('body-position')
        }
    }
</script>
