<template>
    <div>
        <!-- sign in  -->
        <section class="set-password">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 col-lg-4 mx-auto">
                        <div class="text-center login-logo">
                            <img src="../../assets/img/logo/gamehublogo.svg" alt="gamehublogo" class="text-center">
                        </div>
                        <div class="card mt-5">
                            <h3 class="card-title text-center">SIGN UP</h3>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form method="post">
                                   <!-- Mobile No. -->
                                    <div class="form-group">
                                        <label for="Phone">Phone number</label>
                                        <ValidationProvider name="Phone" rules="required" v-slot="{ errors }">
                                            <input type="text" class="form-control gray cursor-none" id="Phone" value="" v-model="form.phone_number" readonly>
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <!-- First Name -->
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstName">First name</label>
                                            <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                                                <input @keypress="isValidString($event)" type="text" class="form-control" id="firstName" value="" v-model="form.name">
                                                <span class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="LastName">Last name</label>
                                            <ValidationProvider name="last name" rules="required" v-slot="{ errors }">
                                                <input @keypress="isValidString($event)" type="text" class="form-control" id="LastName" value="" v-model="form.lastName">
                                                <span class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                         
                                     <div class="form-group">
                                        <label for="email">Email address</label>
                                        <ValidationProvider name="email" rules="email" v-slot="{ errors }">
                                            <input type="email" class="form-control" id="email" value="" v-model="form.email">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn">
                                        <button class="btn  btn--otp w-100" type="button" @click.prevent="handleSubmit(onSubmit)" :disabled="isLoading">
                                            PROCEED
                                            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                        </button>
                                      <!-- <button type="button" class="btn btn-primary mb-2" @click.prevent="handleSubmit(onSubmit)">Submit</button>-->
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
                    lastName: '',
                    email: '',
                    // password: '',
                    // confirmPassword: '',
                    phone_number: JSON.parse(localStorage.getItem('user')).phone_number
                },
                isLoading: false
            }
        },
        methods: {
            onSubmit: function () {
                this.isLoading = true
                this.$store.dispatch('updateUserDetails', this.form)
            },
            isValidString: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if(!(charCode >= 65 && charCode <= 121) && (charCode != 32 && charCode != 0)){
                    event.preventDefault();
                }
            }
        },
        created () {
            this.$toaster.success('Welcome to Game Hub');
        },
        
       mounted () {
        document.body.classList.add('body-position')
        },
        destroyed () {
        document.body.classList.remove('body-position')
        }

    }
</script>
