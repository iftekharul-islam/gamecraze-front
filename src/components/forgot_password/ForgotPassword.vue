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
                                <form @submit.prevent="handleSubmit(onSendResetCode)" method="post">
                                    <div class="form-group">
                                        <!-- user anme -->
                                        <label for="username1" class="sr-only">Email</label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="username1" value="" placeholder="User Email" v-model="form.email">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-5">
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
                form: {
                    email: "",
                }
            }
        },
        methods: {
            onSendResetCode: function () {
                this.$api.post('send')
            }
        }
    }
</script>