<template>
    <div>
        <section class="forget-password-section">
            <div class="login-form">
                    <h2 class="gil-regular f-s-32 f-s-md-48 opa-85"> <span class="text-secondery">{{ $t('gamehubbd', $store.state.locale) }}</span> {{ $t('welcome_back_to', $store.state.locale) }} <span class="text-secondery">{{ $t('gamehube', $store.state.locale) }}</span></h2>
                     <p class="gil-medium f-s-28 sign-text">{{ $t('reset_password', $store.state.locale) }}</p>
                    <ValidationObserver v-slot="{ handleSubmit }">
                        <form method="post" @submit.prevent="handleSubmit(onReset)">
                            <!-- password -->
                             <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                <div class="form-group" :class="{'error-input-group': errors[0] }">
                                    <label for="gamepassword1" class="gil-medium opa-85 mb-2">{{ $t('type_new_password', $store.state.locale) }}</label>
                                    <input type="password" class="login-input" id="gamepassword1" placeholder="Password" v-model="form.password">
                                    <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                                </div>
                             </ValidationProvider>

                            <!-- confirm password -->
                            <ValidationProvider name="confirm" rules="required|min:8|confirmed:password" v-slot="{ errors }">
                                <div class="form-group" :class="{'error-input-group': errors[0] }">
                                    <label for="gamepassword2" class="gil-medium opa-85 mb-2">{{ $t('retype_password', $store.state.locale) }}</label>
                                    <input type="password" class="login-input" id="gamepassword2" placeholder="Confirm Password" v-model="form.confirmPassword">
                                    <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>

                            <!-- sign in button -->
                            <div class="text-right sign-btn justify-content-end">
                                <button class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative m-auto" type="submit" :disabled=false>
                                    <span>{{ $t('reset_password', $store.state.locale) }}</span>
                                    <span v-if=false class="spinner-border spinner-border-sm"></span>
                                </button>
                            </div>

                        </form>
                    </ValidationObserver>
            </div>
        </section>
        <!-- sign in  -->
<!--        <section class="sign-in sign-in-bg">-->
<!--            <div class="container-fluid sign-in-width">-->
<!--                <div class="row">-->
<!--                    <div class="col-md-6 offset-md-3 pb-5">-->
<!--                        <div class="card">-->
<!--                            <h3 class="card-title text-center">Reset Password</h3>-->
<!--                            &lt;!&ndash; form &ndash;&gt;-->
<!--                            <ValidationObserver v-slot="{ handleSubmit }">-->
<!--                                <form method="post" @submit.prevent="handleSubmit(onReset)">-->
<!--                                    &lt;!&ndash; password &ndash;&gt;-->
<!--                                    <div class="form-group">-->
<!--                                        <label for="gamepassword1" class="sr-only">Password</label>-->
<!--                                        <ValidationProvider name="password" rules="required|min:8|password:@confirm" v-slot="{ errors }">-->
<!--                                            <input type="password" class="form-control mb-2" id="gamepassword1" placeholder="Password" v-model="form.password">-->
<!--                                            <span class="error-message">{{ errors[0] }}</span>-->
<!--                                        </ValidationProvider>-->
<!--                                    </div>-->

<!--                                    &lt;!&ndash; confirm password &ndash;&gt;-->
<!--                                    <div class="form-group">-->
<!--                                        <label for="gamepassword2" class="sr-only">Confirm Password</label>-->
<!--                                        <ValidationProvider name="confirm" rules="required|min:8" v-slot="{ errors }">-->
<!--                                            <input type="password" class="form-control mb-2" id="gamepassword2" placeholder="Confirm Password" v-model="form.confirmPassword">-->
<!--                                            <span class="error-message">{{ errors[0] }}</span>-->
<!--                                        </ValidationProvider>-->
<!--                                    </div>-->

<!--                                    &lt;!&ndash; sign in button &ndash;&gt;-->
<!--                                    <div class="text-center sign-btn">-->
<!--                                        <button class="btn btn-primary mb-2" type="submit" :disabled=false>-->
<!--                                            Reset-->
<!--                                            <span v-if=false class="spinner-border spinner-border-sm"></span>-->
<!--                                        </button>-->
<!--                                    </div>-->

<!--                                </form>-->
<!--                            </ValidationObserver>-->

<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    password: "",
                    confirmPassword: ""
                }
            }
        },
        methods: {
            onReset() {
                this.$store.dispatch('updateUserDetails', this.form)
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
