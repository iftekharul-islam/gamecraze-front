<template>
    <div>
        <!-- sign in  -->
        <section class="set-password">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 col-lg-4 mx-auto">
                        <!-- <div class="text-center login-logo">
                            <img src="../../assets/img/logo/gamehublogo.svg" alt="gamehublogo" class="text-center">
                        </div> -->
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
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            <span v-if="isPhoneExists" class="error-message">Phone number already taken</span>
                                        </ValidationProvider>
                                    </div>
                                    <!-- First Name -->
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstName">First name</label>
                                            <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                                                <input @keypress="isValidString($event)" type="text" class="form-control" id="firstName" value="" v-model="form.name">
                                                <span v-if="errors.length" class="error-message first-name-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="LastName">Last name</label>
                                            <ValidationProvider name="last name" rules="required" v-slot="{ errors }">
                                                <input @keypress="isValidString($event)" type="text" class="form-control" id="LastName" value="" v-model="form.last_name">
                                                <span v-if="errors.length" class="error-message last-name-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                         
                                     <div class="form-group">
                                        <label for="email">Email address</label>

                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input @focus="onEmailChange" type="email" class="form-control" id="email" value="" v-model="form.email">
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            <span v-if="isEmailExists" class="error-message">Email address already taken</span>
                                        </ValidationProvider>

                                    </div>
                                      <!-- Agree terms and condition -->
                                    <div class="post-rent--form-group post-rent--form-group--agree ml-a-6 mt-4">
                                        <div class="checkbox-parents">
                                        <ValidationProvider name="Term & Conditions" rules="required" v-slot="{ errors }">
                                            <input type="checkbox" id="terms-agree" class="checkbox-parents--input" v-model="agreement" @change="onAgreement($event)">
                                            <label for="terms-agree" class="checkbox-parents--label">I agree with all <router-link to="/terms" target="_blank" class="text-secondery"><u> term & conditions</u></router-link></label>
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                        </div>
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
                agreement: '',
                form: {
                    name: '',
                    last_name: '',
                    email: '',
                    phone_number: JSON.parse(localStorage.getItem('user')).phone_number
                },
                isLoading: false,
                isEmailExists: false,
                isPhoneExists: false
            }
        },
        methods: {
            onAgreement(event){
                this.agreement = '';
                if (event.target.checked == true){
                    this.agreement = 1
                }
            },
            onSubmit: function () {
                this.isLoading = true;
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
                this.$api.put('update-users-by-phone', this.form, config).then(response => {
                    this.isLoading = false;
                    if (response.data.error === false) {
                        this.$store.commit('setUser', response.data.data);
                        this.$store.commit('setUserId', response.data.data.id);
                        localStorage.setItem('userId', JSON.stringify(response.data.data.id))
                        localStorage.setItem('user', JSON.stringify(response.data.data));
                        this.$router.push('/profile');
                        return
                    }
                    if (response.data.error === true) {
                        if (response.data.data.isEmailExists) {
                            this.isEmailExists = true;
                        }
                        if (response.data.data.isPhoneExists) {
                            this.isPhoneExists = true;
                        }
                        return;
                    }

                    this.$swal("Warning", response.message, 'warning');
                });
            },
            isValidString: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if(!(charCode >= 65 && charCode <= 121) && (charCode != 32 && charCode != 0)){
                    event.preventDefault();
                }
            },
            onEmailChange: function() {
                this.isEmailExists = false;
            }
        },
        created () {
            this.$toaster.success('Welcome to Game Hub');
        },

    }
</script>
