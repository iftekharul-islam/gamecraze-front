<template>
    <div>
        <!-- otp -->
        <section class="registration sign-in-bg">
            <div class="container-fluid registration-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h4 class="card-title text-center">Your OTP</h4>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form id="otpForm" @submit.prevent="handleSubmit(onOtpVerification)" method="post">
                                    <div class="form-group">
                                        <label for="user-otp" class="sr-only">otp</label>
                                        <ValidationProvider name="otp" rules="required|digits:6" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="user-otp" placeholder="Your OTP" v-model="oneTimePassword.otp">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                            <span style="color: red;" v-if="otpVerfication.notVerified">{{ otpVerfication.message }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="otpbtn">
                                        <button type="submit" class="btn btn-success">Submit</button>
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
                oneTimePassword: {
                    name: this.$store.state.signup.name,
                    phone_number: this.$store.state.signup.phoneNumber,
                    otp: ''
                },
                otpVerfication: {
                    notVerified: false,
                    message: 'Sorry! You entered wrong OTP.'
                },
                form: {
                    phone_number: this.$store.state.signup.phoneNumber
                },
            }
        },
        methods: {
            onOtpVerification: function () {
                this.$api.post('verifyOtp', this.oneTimePassword).then(response => {
                    console.log(response);
                    if (response.data) {
                        this.$api.post('login', this.form).then(response => {
                            if (response.data) {
                                console.log(response.data);
                                this.$store.dispatch('setToken', response.data)
                                console.log(this.$store.state.token);
                                let config = {
                                    headers: {
                                        'Authorization': 'Bearer ' + response.data
                                    }
                                }
                                this.$api.get('profile', config).then(response => {
                                    this.$store.dispatch('setProfile', response.data.data)
                                    this.$router.push('/password-setup').catch(err => {});
                                });
                            }
                        });
                    }
                    else {
                        this.otpVerfication.notVerified = true
                    }

                });

            }
        }
    }
</script>