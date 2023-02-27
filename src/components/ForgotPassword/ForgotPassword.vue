<template>
    <div>
        <!-- sign in  -->
        <section class="forget-password-section">
            <div class="login-form">
                <div class="forget-password-section--card">
                    <h2 class="gil-regular f-s-32 f-s-md-48 opa-85"><span class="text-secondery">{{ $t('all_in_one_marketplace', $store.state.locale) }} </span> {{ $t('dedicated_only_for_gamers', $store.state.locale) }}</h2>
                    <p class="gil-medium f-s-28 sign-text">{{ $t('reset_password', $store.state.locale) }}</p>
                    <!-- form -->
                    <ValidationObserver v-slot="{ handleSubmit }">
                        <form @submit.prevent="handleSubmit(onSendResetPasswordCode)" method="post">
                             <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                <div class="form-group" :class="{'error-input-group': errors[0] || invalidEmail }">
                                    <!-- user name -->
                                    <label for="username1" class="opa-85 gil-medium">{{ $t('enter_your_email_address', $store.state.locale) }}</label>
                                    <input type="text" class="login-input" id="username1" value="" :placeholder="$t('enter_email', $store.state.locale)" v-model="form.email">
                                    <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                                    <span class="error-txt" v-if="invalidEmail">{{ invalidEmailMessage }}<br></span>
                                </div>
                             </ValidationProvider>

                            <div v-if="codeSent">
                                <ValidationProvider name="otp" rules="required|digits:6" v-slot="{ errors }">
                                <div class="form-group mt-4" :class="{'error-input-group': errors[0] || $store.state.wrongOTP || $store.state.timeout || resend}">
                                    <label for="user-otp" class="sr-only">{{ $t('otp', $store.state.locale) }}</label>
                                    <input @click="changeWrongOtp" type="text" class="login-input" id="user-otp" placeholder="Your code" v-model="form.otp">
                                    <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                                    <br v-if="errors[0]">
                                    <span class="success-message" v-if="!resend && !$store.state.wrongOTP && !$store.state.timeout">{{ $t('insert_digit', $store.state.locale) }}<strong style="color: white;">{{ form.phone_number }}</strong></span>
                                    <span class="error-txt" v-if="$store.state.wrongOTP && !resend">{{ $t('wrong_otp', $store.state.locale) }}</span>
                                    <span class="error-txt" v-if="$store.state.timeout && !resend">{{ $t('invalid_otp', $store.state.locale) }}</span>
                                    <span class="success-message error-txt" v-if="resend">{{ $t('insert_digit', $store.state.locale) }} <strong style="color: white;">{{ form.phone_number }}</strong></span>
                                </div>
                                 </ValidationProvider>
                            </div>

                            <!-- forgot password input and label -->
                            <div class="form-group">
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
                            <div class="text-center d-flex align-items-center mt-a-8" v-if="!codeSent">
                                <router-link to="/login" class="router_link btn--collision br-40 border-1 border-secondery-opa-50 gil-bold font-weight-bold py-2 pl-a-6 pr-a-6 d-inline-block position-relative mr-4 flex-1 bg-login-input">{{ $t('sign_in', $store.state.locale) }}</router-link>
                                <button class=" router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative flex-1 py-2" type="submit" :disabled="isLoading">
                                    <span>{{ $t('submit', $store.state.locale) }} <i v-if="isLoading" class="spinner-border spinner-border-sm loader-skew"></i></span>
                                </button>
                            </div>
                        </form>
                    </ValidationObserver>

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
        mounted() {
        this.toggleBodyClass('addClass', 'pt-0');
        },
        destroyed() {
        this.toggleBodyClass('removeClass', 'pt-0');
        }
    }
</script>
