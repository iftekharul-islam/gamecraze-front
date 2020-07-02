<template>
    <div>
        <!-- Registration  -->
        <section class="registration sign-in-bg">
            <div class="container-fluid registration-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h4 class="card-title text-center">Your Information</h4>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form id="regForm" @submit.prevent="handleSubmit(onNext)" method="post">
                                    <div class="form-group">
                                        <label for="user-name" class="sr-only">Name</label>
                                        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="user-name" placeholder="Your Name" v-model="form.name">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group">
                                        <label for="user-number" class="sr-only">Number</label>
                                        <ValidationProvider name="phone number" rules="required|max:11|min:11" v-slot="{ errors }">
                                            <input type="tel" class="form-control" id="user-number" placeholder="Your Phone Number" v-model="form.phone_number">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <div class="regbtn">
                                        <button type="submit" class="btn btn-success">Next</button>
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
                    name: "",
                    phone_number: "",
                }
            }
        },
        methods: {
            onNext() {
                this.$store.dispatch('setSignUp', this.form)
                this.$api.post('sendOtp', this.form).then(response => {
                    this.$router.push('/otp-verification').catch(err => {});
                });
            },
        },
    }

</script>
