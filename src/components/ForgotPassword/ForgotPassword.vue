<template>
    <div>
        <!-- sign in  -->
        <section class="sign-in sign-in-bg">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h3 class="card-title text-center">Reset Password</h3>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(onSendResetPasswordCode)" method="post">
                                    <div class="form-group">
                                        <!-- user anme -->
                                        <label for="username1" class="sr-only">Email</label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="text" class="form-control mb-2" id="username1" value="" placeholder="User Email" v-model="form.email">
                                            <span class="error-message">{{ errors[0] }}</span>
                                            <br v-if="errors[0]">
                                        </ValidationProvider>
                                        <span class="error-message" v-if="invalidEmail">{{ invalidEmailMessage }}<br></span>
                                    </div>

                                    <div v-if="codeSent">
                                        <div class="form-group">
                                            <label for="user-otp" class="sr-only">otp</label>
                                            <ValidationProvider name="otp" rules="required|digits:6" v-slot="{ errors }">
                                                <input @click="changeWrongOtp" type="text" class="form-control mb-2" id="user-otp" placeholder="Your code" v-model="form.otp">
                                                <span class="error-message">{{ errors[0] }}</span>
                                                <br v-if="errors[0]">
                                                <span class="success-message" v-if="!resend && !$store.state.wrongOTP && !$store.state.timeout">We've sent a 6-digit one time PIN in your phone <strong style="color: white;">{{ form.phone_number }}</strong></span>
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
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" type="radio" name="resetradio" id="emailreset" value="email" v-model="form.resetOption">
                                                <label class="form-check-label" for="emailreset"> Email </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="radio" name="resetradio" id="phonereset" value="phone" v-model="form.resetOption">
                                                <label class="form-check-label" for="phonereset"> Phone Number </label>
                                            </div>
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                        <div class="otpbtn mt-3" v-if="codeSent">
                                            <button class="btn btn-primary mb-2" type="button" :disabled="isResendLoading" @click.prevent="onResendOtp">
                                                Resend Code
                                                <span v-if="isResendLoading" class="spinner-border spinner-border-sm"></span>
                                            </button>
                                            <button class="btn btn-primary mb-2" type="button" :disabled="$store.state.isSubmitLoading" @click.prevent="handleSubmit(onVerifyPasswordResetCode)">
                                                Submit
                                                <span v-if="$store.state.isSubmitLoading" class="spinner-border spinner-border-sm"></span>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-2" v-if="!codeSent">
                                        <button class="btn btn-primary mb-2" type="submit" :disabled="isLoading">
                                            Send Reset Code
                                            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
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
                    resetOption: '',
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
        }
    }
</script>
