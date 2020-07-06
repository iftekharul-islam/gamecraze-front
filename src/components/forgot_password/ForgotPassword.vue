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
                                            <input type="text" class="form-control" id="username1" value="" placeholder="User Email" v-model="form.email">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                            <br v-if="errors[0]">
                                        </ValidationProvider>
                                        <span style="color: red;" v-if="invalidEmail">{{ invalidEmailMessage }}<br></span>
                                    </div>

                                    <div v-if="codeSent">
                                        <div class="form-group">
                                            <label for="user-otp" class="sr-only">otp</label>
                                            <ValidationProvider name="otp" rules="required|digits:6" v-slot="{ errors }">
                                                <input type="text" class="form-control" id="user-otp" placeholder="Your code" v-model="form.code">
                                                <span style="color: red;">{{ errors[0] }}</span>
                                                <br v-if="!resend">
                                                <span style="color: green;" v-if="!resend">We've sent a 6-digit code in your {{ form.resetOption }} <strong style="color: white;">{{ media }}</strong> valid for 300 seconds</span>
                                                <br v-if="wrongCode">
                                                <span style="color: red;" v-if="wrongCode">You entered wrong code or Timeout</span>
                                                <br v-if="resend">
                                                <span style="color: green;" v-if="resend">We've Resent a 6-digit code in your phone <strong style="color: white;">{{ media }}</strong>&nbsp;which will be valid for 300 seconds</span>
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
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="resetradio" id="phonereset" value="phone" v-model="form.resetOption">
                                                <label class="form-check-label" for="phonereset"> Phone Number </label>
                                            </div>
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                        <div class="otpbtn mt-3" v-if="codeSent">
                                            <button type="button" class="btn btn-success" @click.prevent="onResendOtp">Resend Code</button>
                                            <button type="button" class="btn btn-success" @click.prevent="handleSubmit(onOtpVerification)">Submit</button>
                                        </div>
                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-2" v-if="!codeSent">
                                        <button type="submit" class="btn btn-primary mb-2">Send Reset Code</button>
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
                    code: "",
                    resetOption: '',
                }
            }
        },
        methods: {
            onSendResetPasswordCode: function () {
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
                });
            },
            onOtpVerification: function () {
                this.resend = false
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
                });
            }
        }
    }
</script>
