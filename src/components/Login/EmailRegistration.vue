<template>
    <div>
        <!-- sign in  -->
        <section class="set-password">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 col-lg-4 mx-auto">
                        <div class="card mt-5">
                            <h3 class="card-title text-center" style="text-transform: uppercase">{{ $t('sign_up', $store.state.locale) }}</h3>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form method="post">
                                    <!-- user email -->
                                    <div class="form-group">
                                        <label for="email">{{ $t('email', $store.state.locale) }} {{ $t('address', $store.state.locale) }}</label>
                                        <ValidationProvider name="email" rules="email" v-slot="{ errors }">
                                            <input type="email" class="form-control cursor-none gray" id="email" value="" v-model="form.email" readonly>
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <!-- First Name -->
                                    <div class="form-row">
                                        <div class="form-group col-md-6">

                                            <label for="firstName">{{ $t('first_name', $store.state.locale) }}</label>
                                            <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                                                <input @keypress="isValidNameString($event)" type="text" class="form-control" id="firstName" value="" v-model="form.name" placeholder="First Name">
                                                <span v-if="errors.length" class="error-message first-name-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <!-- Last Name -->
                                        <div class="form-group col-md-6">
                                            <label for="LastName">{{ $t('last_name', $store.state.locale) }}</label>
                                            <ValidationProvider name="last name" rules="required" v-slot="{ errors }">
                                                <input @keypress="isValidLastNameString($event)" type="text" class="form-control" id="LastName" value="" v-model="form.lastName" placeholder="Last Name">
                                                <span v-if="errors.length" class="error-message last-name-error">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <!-- Mobile No. -->
                                    <div class="form-group">
                                        <label for="Phone">{{ $t('phone_number', $store.state.locale) }}</label>
                                        <ValidationProvider name="Phone Number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">

                                            <input @focus="changePhoneValidation" @keypress="isNumber($event)" type="text" class="form-control" id="Phone" value="" v-model="form.phone_number" placeholder="Phone Number">
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>

                                            <span class="error-message d-block" v-if="$store.state.numberExists">{{ $t('phone_number_exits', $store.state.locale) }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <!-- password -->
                                    <div class="form-group">
                                        <label for="gamepassword1">{{ $t('password', $store.state.locale) }}</label>
                                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" id="gamepassword1" placeholder="Password" v-model="form.password">
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <!-- confirm password -->
                                    <!-- <div class="form-group">
                                        <label for="gamepassword2">Confirm Password</label>
                                        <ValidationProvider name="confirm" rules="password:@password" v-slot="{ errors }">
                                            <input type="password" class="form-control" id="gamepassword2" placeholder="Confirm Password" v-model="form.confirmPassword">
                                            <span class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div> -->
                                     <!-- Agree terms and condition -->
                                    <div class="post-rent--form-group post-rent--form-group--agree ml-a-6 mt-4">
                                        <div class="checkbox-parents">
                                            <ValidationProvider name="Terms & Conditions" rules="required" v-slot="{ errors }">
                                            <input type="checkbox" id="terms-agree" class="checkbox-parents--input" v-model="agreement" @change="onAgreement($event)">
                                            <label for="terms-agree" class="checkbox-parents--label">{{ $t('i_agree', $store.state.locale) }}  <router-link to="/terms" target="_blank" class="text-secondery"><u>{{ $t('terms', $store.state.locale) }}</u></router-link></label>
                                            <span v-if="errors.length" class="error-message d-block ml--30">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                        </div>
                                    </div>

                                    <!-- sign in button -->
                                    <div class="text-center sign-btn">
                                        <button class="btn  btn--otp w-100" type="button" @click.prevent="handleSubmit(onSubmit)" :disabled="isLoading">
                                            {{ $t('sign_up', $store.state.locale) }}
                                            <span v-if="$store.state.isSubmitLoading" class="spinner-border spinner-border-sm"></span>
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
                    lastName: '',
                    email: localStorage.getItem('email'),
                    referral: localStorage.getItem('referral') ?? '',
                    phone_number: '',
                    password: ""
,                },
                isLoading: false,
            }
        },
        methods: {
            onAgreement(event){
                this.agreement = '';
                if (event.target.checked == true){
                    this.agreement = 1
                }
            },
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.form.phone_number.length > 10) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            },
            isValidNameString: function(evt) {
              evt = (evt) ? evt : window.event;
              if(this.form.name.length > 10){
                evt.preventDefault();
              }
            },
            isValidLastNameString: function(evt) {
              evt = (evt) ? evt : window.event;
              if(this.form.lastName.length > 10){
                evt.preventDefault();
              }
            },
            onSubmit: function () {
                this.$store.dispatch('emailVerify', this.form)
            },
            changePhoneValidation: function() {
                this.$store.dispatch('setNumberExist', false);
            }
        },
        created () {
            this.$toaster.success(this.$t('gamehub_welcome', this.$store.state.locale));
        },

    }
</script>
