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
                                <form id="otpForm" @submit.prevent="handleSubmit(onRegistration)" method="post">
                                    <div class="form-group">
                                        <label for="user-otp" class="sr-only">otp</label>
                                        <ValidationProvider name="otp" rules="required|digits:4" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="user-otp" placeholder="Your OTP" v-model="otp">
                                            <span style="color: red;">{{ errors[0] }}</span>
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
                otp: ''
            }
        },
        methods: {
            onRegistration: function () {

            }
        }
    }
</script>