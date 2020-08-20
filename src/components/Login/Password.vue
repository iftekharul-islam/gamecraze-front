<template>
    <div>
        <!-- sign in  -->
        <section class="sign-in sign-in-bg">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h3 class="card-title text-center">Email and Password Setup</h3>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form method="post">
                                    <div class="form-group">
                                        <!-- user anme -->
                                        <label for="name" class="sr-only">Name</label>
                                        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="name" value="" placeholder="Name*" v-model="form.name">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <div class="form-group">
                                        <!-- user anme -->
                                        <label for="email" class="sr-only">Email</label>
                                        <ValidationProvider name="email" rules="email" v-slot="{ errors }">
                                            <input type="email" class="form-control" id="email" value="" placeholder="Email" v-model="form.email">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <!-- password -->
                                    <div class="form-group">
                                        <label for="gamepassword1" class="sr-only">Password</label>
                                        <ValidationProvider name="password" rules="min:8|password:@confirm" v-slot="{ errors }">
                                            <input type="password" class="form-control" id="gamepassword1" placeholder="Password" v-model="form.password">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <!-- confirm password -->
                                    <div class="form-group">
                                        <label for="gamepassword2" class="sr-only">Confirm Password</label>
                                        <ValidationProvider name="confirm" rules="min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" id="gamepassword2" placeholder="Confirm Password" v-model="form.confirmPassword">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-5">
                                        <button class="btn btn-primary mb-2" type="button" @click.prevent="handleSubmit(onSubmit)" :disabled="isLoading">
                                            Submit
                                            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                        </button>
<!--                                        <button type="button" class="btn btn-primary mb-2" @click.prevent="handleSubmit(onSubmit)">Submit</button>-->
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
        data () {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phone_number: JSON.parse(localStorage.getItem('user')).phone_number
                },
                isLoading: false
            }
        },
        methods: {
            onSubmit: function () {
                this.isLoading = true
                this.$store.dispatch('updateUserDetails', this.form)
            }
        },
        created () {
            this.$toaster.success('Welcome to Game Hub');
        }

    }
</script>
