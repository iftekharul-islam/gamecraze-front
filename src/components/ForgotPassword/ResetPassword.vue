<template>
    <div>
        <!-- sign in  -->
        <section class="sign-in sign-in-bg">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3 pb-5">
                        <div class="card">
                            <h3 class="card-title text-center">Reset Password</h3>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form method="post" @submit.prevent="handleSubmit(onReset)">
                                    <!-- password -->
                                    <div class="form-group">
                                        <label for="gamepassword1" class="sr-only">Password</label>
                                        <ValidationProvider name="password" rules="required|min:8|password:@confirm" v-slot="{ errors }">
                                            <input type="password" class="form-control mb-2" id="gamepassword1" placeholder="Password" v-model="form.password">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <!-- confirm password -->
                                    <div class="form-group">
                                        <label for="gamepassword2" class="sr-only">Confirm Password</label>
                                        <ValidationProvider name="confirm" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control mb-2" id="gamepassword2" placeholder="Confirm Password" v-model="form.confirmPassword">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn">
                                        <button class="btn btn-primary mb-2" type="submit" :disabled=false>
                                            Reset
                                            <span v-if=false class="spinner-border spinner-border-sm"></span>
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
                form: {
                    password: "",
                    confirmPassword: ""
                }
            }
        },
        methods: {
            onReset() {
                this.$store.dispatch('updateUserDetails', this.form)
            }
        }

    }
</script>
