<template>
    <div>
        <!-- sign up -->
        <div class="margin-t-32">
            <!-- form -->
            <ValidationObserver v-slot="{ handleSubmit }">
                <form method="post">
                    <!-- Shop name. -->
                    <div class="form-group margin-b-32">
                        <label for="shopName" class="opa-85">{{ $t('shop_name', $store.state.locale) }}</label>
                        <ValidationProvider name="Shop Name"  v-slot="{ errors }">
                          <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                            <input type="text" class="login-input" id="shopName" value="" >
                            <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                    </div>
                      <!-- Shop owner name. -->
                    <div class="form-group margin-b-32">
                        <label for="shopOwnerName" class="opa-85">{{ $t('shop_owner_name', $store.state.locale) }}</label>
                        <ValidationProvider name="Shop Name"  v-slot="{ errors }">
                          <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                            <input type="text" class="login-input" id="shopOwnerName" value="" >
                            <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                    </div>
                      <!-- Shop Address. -->
                    <div class="form-group margin-b-32">
                        <label for="shopAddress" class="opa-85">{{ $t('shop_address', $store.state.locale) }}</label>
                        <ValidationProvider name="Shop Name"  v-slot="{ errors }">
                          <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                            <input type="text" class="login-input" id="shopAddress" value="" >
                            <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                    </div>
                      <!-- Mobile no -->
                    <div class="form-group margin-b-32">
                        <label for="mobileNumber" class="opa-85">{{ $t('mobile_no', $store.state.locale) }}</label>
                        <ValidationProvider name="Shop Name"  v-slot="{ errors }">
                          <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                            <input type="text" class="login-input" id="mobileNumber" value="" >
                            <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                    </div>
                    <!-- password -->
                    <div class="form-group margin-b-32">
                        <label for="gamepassword1" class="opa-85">{{ $t('password', $store.state.locale) }}</label>
                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                            <div class="floating-label-group" :class="{'error-input-group': errors[0]}">
                                <input type="password" class="login-input" id="gamepassword1" placeholder="Password" v-model="form.password">
                                <span v-if="errors.length" class="error-txt">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>

                    <!-- sign in button -->
                    <div class="text-center sign-btn">
                        <button class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-100" type="button" @click.prevent="handleSubmit(onSubmit)" :disabled="isLoading">
                            {{ $t('sign_up', $store.state.locale) }}
                            <span v-if="$store.state.isSubmitLoading" class="spinner-border spinner-border-sm"></span>
                        </button>
                        <!-- <button type="button" class="btn btn-primary mb-2" @click.prevent="handleSubmit(onSubmit)">Submit</button>-->
                    </div>

                </form>
            </ValidationObserver>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
            },
                isLoading: false,
            }
        },
        methods: {
        },

    }
</script>
