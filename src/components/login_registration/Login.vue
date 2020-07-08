<template>
    <div>
        <!-- sign in  -->
        <section class="sign-in sign-in-bg">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h3 class="card-title text-center">Sign in</h3>
                            <button class="btn btn-success mb-4 sign-in-option-btn button-style" style="margin: 0 auto;" @click="onChangeLoginOption">Login with {{ loginOption }} <i v-if="loginOption === 'Email'" class="far fa-envelope login-email"></i> <i v-if="loginOption === 'Phone Number'" class="fas fa-phone login-phone"></i> </button>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption==='Phone Number'">
                                <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                    <div class="form-group">
                                        <!-- user anme -->
                                        <label for="username1" class="sr-only">Email</label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="username1" value="" placeholder="User Name or Email" v-model="form.email">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <!-- password -->
                                    <div class="form-group mb-3">
                                        <label for="gamepassword1" class="sr-only">Password</label>
                                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" id="gamepassword1" placeholder="Password" v-model="form.password">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                            <br v-if="errors[0]">
                                        </ValidationProvider>
                                        <span style="color: red;" v-if="unauthorized">{{ unautorizedError }}<br></span>
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
                                            <router-link to="reset-password">Forget Password ?</router-link>
                                        </div>
                                    </div>
                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-5">
                                        <button type="submit" class="btn btn-primary mb-2">Sign in</button>
                                    </div>
                                </form>
                            </ValidationObserver>

                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption==='Email'">
                                <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                    <div class="form-group">
                                        <div class="floating-label-group">
                                            <ValidationProvider name="phone number" rules="required|max:14|min:11" v-slot="{ errors }">
                                                <input type="tel" id="user-number" class="form-control country-number" autocomplete="off" v-model="form.phone_number"  placeholder="Mobile Number" autofocus required />
                                                <span style="color: red;">{{ errors[0] }}</span>
                                                <label class="floating-label">+88</label>
                                            </ValidationProvider>
                                        </div>
                                        <label for="user-number"></label>
                                        <ValidationProvider name="phone number" rules="required|max:11|min:11" v-slot="{ errors }">
                                            <input type="tel" class="form-control" id="user-number" placeholder="Your Phone Number" v-model="form.phone_number">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div v-if="showOTP">
                                        <div class="form-group">
                                            <label for="user-otp" class="sr-only">otp</label>
                                            <ValidationProvider name="otp" rules="required|digits:6" v-slot="{ errors }">
                                                <input type="text" class="form-control" id="user-otp" placeholder="Your OTP" v-model="otp">
                                                <span style="color: red;">{{ errors[0] }}</span>
                                                <br v-if="!resend">
                                                <span style="color: green;" v-if="!resend">We've sent a 6-digit one time PIN in your phone <strong style="color: white;">{{ form.phone_number }}</strong></span>
                                                <br v-if="wrongOTP">
                                                <span style="color: red;" v-if="wrongOTP">You entered wrong OTP or Timeout</span>
                                                <br v-if="resend">
                                                <span style="color: green;" v-if="resend">We've Resent a 6-digit one time PIN in your phone <strong style="color: white;">{{ form.phone_number }}</strong></span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="otpbtn">
                                            <button type="button" class="btn btn-success" @click.prevent="onResendOtp">Resend OTP</button>
                                            <button type="button" class="btn btn-success" @click.prevent="handleSubmit(onOtpVerification)">Submit</button>
                                        </div>
                                    </div>

                                    <!-- sign in button -->
                                    <div v-else>
                                        <div class="text-center sign-btn pt-2">
                                            <button type="submit" class="btn btn-primary mb-2">Login / Sign up</button>
                                        </div>
                                    </div>

                                </form>
                            </ValidationObserver>

                        </div>
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
            }
        },
        methods: {
            checkAdminRole(roles) {
                return roles.some(el => el.name === 'admin')
            },
            onLogin() {
                if (this.loginOption === "Email") {
                    this.$store.dispatch('setPhoneNumber', this.form.phone_number)
                    this.$api.post('send-otp', {phone_number: this.phone_number}).then(response => {
                        console.log(response);
                        if (response.data.error === false) {
                            this.showOTP = true
                        }
                    });
                }
                else {
                    this.$store.dispatch('login', this.form)
                    this.$api.post('login', this.form).then(response => {
                        console.log(response);
                        if (!response.data.error) {
                            this.$store.dispatch('setToken', response.data.token)
                            console.log(this.$store.state.token);
                            let config = {
                                headers: {
                                    'Authorization': 'Bearer ' + response.data.token
                                }
                            }
                            this.$api.get('profile', config).then(response => {
                                let admin = this.checkAdminRole(response.data.data.roles)
                                if (admin) {
                                    this.$store.dispatch('setAdmin', admin)
                                    this.$router.push('/admin').catch(err => {});
                                }
                                else {
                                    this.$router.push('/').catch(err => {});
                                }
                                this.$store.dispatch('setProfile', response.data.data)
                            });

                        }
                        else {
                            this.unauthorized = response.data.error
                            this.unautorizedError = response.data.message
                            console.log(this.unauthorized)
                        }
                    });
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
                this.resend = false
                this.$store.dispatch('verifyOtp', {phone_number: this.phone_number, otp: this.otp})
                this.$api.post('verify-otp', this.form).then(response => {
                    console.log(response);
                    if (response.data.error === true) {
                        this.wrongOTP = true
                    }
                    else {
                        this.$store.dispatch('setToken', response.data.token)
                        if (response.data.new_user === false) {
                            let config = {
                                headers: {
                                    'Authorization': 'Bearer ' + response.data.token
                                }
                            }
                            this.$api.get('profile', config).then(response => {
                                this.$store.dispatch('setProfile', response.data.data)
                                if (response.data.data.name) {
                                    this.$router.push('/').catch(err => {});
                                }
                                else {
                                    this.$router.push('/password-setup').catch(err => {});
                                }
                            });
                        }
                        else {
                            this.$router.push('/password-setup').catch(err => {});
                        }
                    }

                });

            },
            onResendOtp: function () {
                this.$store.dispatch('setPhoneNumber', this.form.phone_number)
                this.$api.post('send-otp', this.form).then(response => {
                    this.resend = true
                });
            }
        }
    }
</script>
