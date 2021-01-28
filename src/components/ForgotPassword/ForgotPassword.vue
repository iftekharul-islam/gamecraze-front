<template>
    <div>
        <!-- sign in  -->
        <section class="forget-password-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="forget-password-section--card">
                            <h3 class="forget-password-section--card--title text-center">Reset Password</h3>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(onSendResetPasswordCode)" method="post">
                                    <div class="form-group">
                                        <!-- user anme -->
                                        <label for="username1" class="sr-only">Email</label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="text" class="form-control mb-2" id="username1" value="" placeholder="Enter your Email" v-model="form.email">
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            <br v-if="errors[0]">
                                        </ValidationProvider>
                                        <span class="error-message" v-if="invalidEmail">{{ invalidEmailMessage }}<br></span>
                                    </div>

                                    <div v-if="codeSent">
                                        <div class="form-group">
                                            <label for="user-otp" class="sr-only">otp</label>
                                            <ValidationProvider name="otp" rules="required|digits:6" v-slot="{ errors }">
                                                <input @click="changeWrongOtp" type="text" class="form-control mb-2" id="user-otp" placeholder="Your code" v-model="form.otp">
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                <br v-if="errors[0]">
                                                <span class="success-message" v-if="!resend && !$store.state.wrongOTP && !$store.state.timeout">We've sent a 6-digit one time PIN<strong style="color: white;">{{ form.phone_number }}</strong></span>
                                                <span class="error-message" v-if="$store.state.wrongOTP && !resend">You entered wrong OTP</span>
                                                <span class="error-message" v-if="$store.state.timeout && !resend">This OTP is not valid for timeout</span>
                                                <span class="success-message" v-if="resend">We've Resent a 6-digit one time PIN in your phone <strong style="color: white;">{{ form.phone_number }}</strong></span>
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <!-- forgot password input and label -->
                                    <div class="form-group">
                                        <ValidationProvider name="reset option" rules="required" v-slot="{ errors }">
                                            <p style="color: white;">Get Password Reset code in</p>

                                            <div class="d-flex">
                                                <div class="forget-password-section--card--input-group custom-radio">
                                                    <input class="custom-control-input" type="radio" name="resetradio" id="emailreset" value="email" v-model="form.resetOption">
                                                    <label class="custom-control-label" for="emailreset"> Email </label>
                                                </div>
                                                <div class="forget-password-section--card--input-group custom-radio">
                                                    <input class="custom-control-input" type="radio" name="resetradio" id="phonereset" value="phone" v-model="form.resetOption">
                                                    <label class="custom-control-label" for="phonereset"> Phone Number </label>
                                                </div>
                                            </div>
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                        <div class="otpbtn forget-otp mt-3" v-if="codeSent">
                                            <button class="btn--secondery mb-2" type="button" :disabled="isResendLoading" @click.prevent="onResendOtp">
                                                <span>Resend Code <i v-if="isResendLoading" class="spinner-border spinner-border-sm"></i></span>
                                                
                                            </button>
                                            <button class="btn--secondery mb-2" type="button" :disabled="$store.state.isSubmitLoading" @click.prevent="handleSubmit(onVerifyPasswordResetCode)">
                                                <span>Submit <i v-if="$store.state.isSubmitLoading" class="spinner-border spinner-border-sm"></i></span>
                                                
                                            </button>
                                        </div>
                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-2" v-if="!codeSent">
                                        <button class="btn--secondery mb-2 m-auto border-0" type="submit" :disabled="isLoading">
                                            <span>Send Reset Code <i v-if="isLoading" class="spinner-border spinner-border-sm loader-skew"></i></span>
                                            
                                        </button>
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
                invalidEmail: false,
                codeSent: false,
                invalidEmailMessage: '',
                resend: false,
                wrongCode: false,
                media: '',
                form: {
                    email: "",
                    otp: "",
                    resetOption: 'email',
                },
                isLoading: false,
                isResendLoading: false
            }
        },
        methods: {
            onSendResetPasswordCode: function () {
                this.isLoading = true
                this.$api.post('send-reset-code', this.form).then(response => {
                    console.log(response)
                    if (response.data.error) {
                        this.codeSent = false
                        this.invalidEmail = response.data.error
                        this.invalidEmailMessage = response.data.message
                    }
                    else {
                        this.codeSent = true
                        this.invalidEmail = false
                        this.media = response.data.media
                    }
                    this.isLoading = false
                });
            },
            onVerifyPasswordResetCode () {
                this.resend = false
                this.$store.dispatch('verifyPasswordResetCode', this.form)
            },
            onResendOtp: function () {
                this.isResendLoading = true
                this.$api.post('send-reset-code', this.form).then(response => {
                    console.log(response)
                    if (response.data.error) {
                        this.codeSent = false
                        this.invalidEmail = response.data.error
                        this.invalidEmailMessage = response.data.message
                    }
                    else {
                        this.resend = true
                        this.codeSent = true
                        this.invalidEmail = false
                        this.media = response.data.media
                    }
                    this.isResendLoading = false
                });
            },
            changeWrongOtp() {
                this.$store.commit('setWrongOTP', false)
            }
        },
         mounted() {
            document.body.classList.add('body-position')
        },
        destroyed() {
            document.body.classList.remove('body-position')
        }
    }
</script>
