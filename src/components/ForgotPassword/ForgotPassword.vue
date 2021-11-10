<template>
    <div>
        <!-- sign in  -->
        <section class="forget-password-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="forget-password-section--card">
                            <h3 class="forget-password-section--card--title text-center">{{ $t('reset_password', $store.state.locale) }}</h3>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(onSendResetPasswordCode)" method="post">
                                    <div class="form-group">
                                        <!-- user name -->
                                        <label for="username1" class="sr-only">{{ $t('email', $store.state.locale) }}</label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="text" class="form-control mb-2" id="username1" value="" :placeholder="$t('enter_email', $store.state.locale)" v-model="form.email">
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            <br v-if="errors[0]">
                                        </ValidationProvider>
                                        <span class="error-message" v-if="invalidEmail">{{ invalidEmailMessage }}<br></span>
                                    </div>

                                    <div v-if="codeSent">
                                        <div class="form-group">
                                            <label for="user-otp" class="sr-only">{{ $t('otp', $store.state.locale) }}</label>
                                            <ValidationProvider name="otp" rules="required|digits:6" v-slot="{ errors }">
                                                <input @click="changeWrongOtp" type="text" class="form-control mb-2" id="user-otp" placeholder="Your code" v-model="form.otp">
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                <br v-if="errors[0]">
                                                <span class="success-message" v-if="!resend && !$store.state.wrongOTP && !$store.state.timeout">{{ $t('insert_digit', $store.state.locale) }}<strong style="color: white;">{{ form.phone_number }}</strong></span>
                                                <span class="error-message" v-if="$store.state.wrongOTP && !resend">{{ $t('wrong_otp', $store.state.locale) }}</span>
                                                <span class="error-message" v-if="$store.state.timeout && !resend">{{ $t('invalid_otp', $store.state.locale) }}</span>
                                                <span class="success-message" v-if="resend">{{ $t('insert_digit', $store.state.locale) }} <strong style="color: white;">{{ form.phone_number }}</strong></span>
                                            </ValidationProvider>
                                        </div>
                                    </div>

                                    <!-- forgot password input and label -->
                                    <div class="form-group">
                                        <ValidationProvider name="reset option" rules="required" v-slot="{ errors }">
                                            <p style="color: white;">{{ $t('get_password_reset_code', $store.state.locale) }}</p>

                                            <div class="d-flex">
                                                <div class="forget-password-section--card--input-group custom-radio">
                                                    <input class="custom-control-input" type="radio" name="resetradio" id="emailreset" value="email" v-model="form.resetOption">
                                                    <label class="custom-control-label" for="emailreset"> {{ $t('email', $store.state.locale) }} </label>
                                                </div>
<!--                                                <div class="forget-password-section&#45;&#45;card&#45;&#45;input-group custom-radio">-->
<!--                                                    <input class="custom-control-input" type="radio" name="resetradio" id="phonereset" value="phone" v-model="form.resetOption">-->
<!--                                                    <label class="custom-control-label" for="phonereset"> Phone Number </label>-->
<!--                                                </div>-->
                                            </div>
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                        <div class="d-flex mt-3" v-if="codeSent">
                                            <button class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative mb-2 mr-3 w-100" type="button" :disabled="isResendLoading" @click.prevent="onResendOtp">
                                                <span>{{ $t('try_resent_code', $store.state.locale) }} <i v-if="isResendLoading" class="spinner-border spinner-border-sm"></i></span>
                                                
                                            </button>
                                            <button class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative mb-2 w-100" type="button" :disabled="$store.state.isSubmitLoading" @click.prevent="handleSubmit(onVerifyPasswordResetCode)">
                                                <span>{{ $t('submit', $store.state.locale) }} <i v-if="$store.state.isSubmitLoading" class="spinner-border spinner-border-sm"></i></span>
                                                
                                            </button>
                                        </div>
                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-2" v-if="!codeSent">
                                        <button class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative mb-2 m-auto" type="submit" :disabled="isLoading">
                                            <span>{{ $t('submit', $store.state.locale) }} <i v-if="isLoading" class="spinner-border spinner-border-sm loader-skew"></i></span>
                                            
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
    }
</script>
