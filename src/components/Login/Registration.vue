<template>
    <div>
        <!-- Registration  -->
        <section class="registration">
            <div class="container-fluid registration-width">
                <div class="row">
                    <div class="col-md-6 col-xl-4 mx-auto">
                        <div class="registration-form">
                            <div class="text-center registration-logo">
                            <img src="../../assets/img/logo/gamehublogo.svg" alt="gamehublogo" class="text-center">
                        </div>

                         <ul class="mb-3 d-flex justify-content-center align-items-center">
                            <li>CREATE YOUR ACCOUNT</li>
                        </ul>
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
                                    <div class="regbtn mt-4">
                                        <button type="submit" class="btn btn--registration w-100 ">Next</button>
                                    </div>
                                </form>
                            </ValidationObserver>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <!-- <section class="registration-section">
            <div class="container">
                <div class="col-md-6 mx-auto">
                    <div class="registration-form">
                        <div class="text-center registration-logo">
                            <img src="../../assets/img/logo/gamehublogo.svg" alt="gamehublogo" class="text-center">
                        </div>
                        <ul class="mb-3 d-flex justify-content-center align-items-center">
                            <li>CREATE YOUR ACCOUNT</li>
                        </ul>

                            registration
                                <form action="#">
                                     <div class="form-group">
                                        <label for="regisName">Name</label>
                                        <input type="text" class="form-control" id="regisName" aria-describedby="emailHelp" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="regismail">Phone/Email Address</label>
                                        <input type="text" class="form-control" id="regismail" aria-describedby="emailHelp" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="regispass">Password</label>
                                        <input type="text" class="form-control" id="regispass" aria-describedby="emailHelp" required>
                                    </div>
                                    <div class="form-group form-check ">
                                        <div class="remember-me">
                                            <input type="checkbox" class="form-check-input" id="regischeck">
                                            <label class="form-check-label" for="regischeck">
                                                Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.
                                            </label>
                                        </div>
                                        
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 btn--registration mt-4">CREATE ACCOUNT</button>


                                </form>

                    </div>
                </div>
            </div>
        </section> -->


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
         mounted () {
        document.body.classList.add('body-position')
        },
        destroyed () {
        document.body.classList.remove('body-position')
        }
    }

</script>
