<template>
    <div>
        <!-- Registration  -->
        <section class="registration-section">
            <!-- <div class="container-fluid registration-width">
                <div class="row">
                    <div class="col-md-6 col-xl-4 mx-auto">
                        <div class="registration-form">
                            <div class="text-center registration-logo">
                            <img src="../../assets/img/logo/gamehublogo.svg" alt="gamehublogo" class="text-center">
                        </div>
                         <ul class="mb-3 d-flex justify-content-center align-items-center">
                            <li>SIGN UP</li>
                        </ul>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form id="regForm" @submit.prevent="handleSubmit(onNext)" method="post">
                                     <div class="form-group">
                                        <label >{{ $t('email', $store.state.locale) }}</label>
                                        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                                            <input type="email" class="form-control"  v-model="form.email" readonly>
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                           
                                            <label for="firstName">{{ $t('first_name', $store.state.locale) }}</label>
                                            <ValidationProvider name="firstName" rules="required" v-slot="{ errors }">
                                                <input @keypress="isValidNameString($event)"  type="text" class="form-control" id="firstName" value="" v-model="form.name">
                                                <span class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                            <div class="form-group col-md-6">
                                            
                                                <label for="LastName">{{ $t('last_name', $store.state.locale) }}</label>
                                                <ValidationProvider name="LastName" rules="required" v-slot="{ errors }">
                                                    <input @keypress="isValidLastNameString($event)"  type="text" class="form-control" id="LastName" value="" v-model="form.lastName">
                                                    <span class="error-message">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="user-number">{{ $t('phone_number', $store.state.locale) }}</label>
                                        <ValidationProvider name="phone number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">
                                            <input @keypress="isNumber($event)" type="tel" class="form-control" id="user-number" v-model="form.phone_number" readonly>
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <div class="form-group">
                                        <label>{{ $t('set_password', $store.state.locale) }}</label>
                                        <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                                            <input type="password" class="form-control" v-model="form.password">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="regbtn mt-4">
                                        <button type="submit" class="btn w-100 btn--login">{{ $t('proceed', $store.state.locale) }}</button>
                                    </div>
                                </form>
                            </ValidationObserver>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="login-form">
                <h2 class="gil-regular f-s-32 f-s-md-48 opa-85 sign-text"> 
                    <span class="text-secondery">{{ $t('gamehubbd', $store.state.locale) }}</span>
                     {{ $t('welcome_to', $store.state.locale) }} <span class="text-secondery">{{ $t('gamehube', $store.state.locale) }}</span></h2>
                <h4 class="f-s-28 gil-medium mb-a-5">{{ $t('create_new_account', $store.state.locale) }}</h4>
                <!-- tabs -->
                <div>
                    <p class="gil-medium opa-85">{{ $t('select_a_user_type', $store.state.locale) }}</p>
                    <div class="d-grid grid-cols-2 grid-gap-20">
                        <router-link to="/user-registration" class="registration-tabs-box bg-login-input pointer">
                            <p class="text-secondery gil-medium f-s-20 mb-2">{{ $t('user', $store.state.locale) }}</p>
                             <p class="gil-medium f-s-14 mb-0 opa-75">{{ $t('for_personal_use_only', $store.state.locale) }}</p>
                        </router-link>
                        <router-link to="/vendor-registration" class="registration-tabs-box bg-login-input pointer">
                            <p class="text-secondery gil-medium f-s-20 mb-2">{{ $t('vendor', $store.state.locale) }}</p>
                             <p class="gil-medium f-s-14 mb-0 opa-75">{{ $t('use_for_business_only', $store.state.locale) }}</p>
                        </router-link>
                    </div>
                    <router-view></router-view>
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
                    email: this.$store.state.setupPasswordUser.email,
                    name: this.$store.state.setupPasswordUser.name,
                    lastName: this.$store.state.setupPasswordUser.last_name,
                    phone_number: this.$store.state.setupPasswordUser.phone_number,
                    password: ""
                },
                // user: this.$store.state.setupPasswordUser
            }
        },
        methods: {
          isValidNameString: function(evt) {
            evt = (evt) ? evt : window.event;
            let charCode = (evt.which) ? evt.which : evt.keyCode;
            if(!(charCode >= 65 && charCode <= 121) && (charCode != 32 && charCode != 0) || this.form.name.length > 12){
              evt.preventDefault();
            }
          },
          isValidLastNameString: function(evt) {
            evt = (evt) ? evt : window.event;
            let charCode = (evt.which) ? evt.which : evt.keyCode;
            if(!(charCode >= 65 && charCode <= 121) && (charCode != 32 && charCode != 0) || this.form.last_name.length > 12){
              evt.preventDefault();
            }
          },
          isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.form.phone_number.length > 10) {
              evt.preventDefault();
            } else {
              return true;
            }
          },
            onNext() {
                // this.$store.dispatch('setSignUp', this.form)
                this.$api.put('users', this.form).then(response => {
                  if (response.data.error === false) {
                    this.$store.dispatch('login', this.form)
                  }
                });
            },
            toggleBodyClass(addRemoveClass, className) {
            const el = document.body;

                if (addRemoveClass === 'addClass') {
                el.classList.add(className);
                } else {
                el.classList.remove(className);
                }
            },
        },
         mounted() {
        this.toggleBodyClass('addClass', 'pt-0');
        },
        destroyed() {
        this.toggleBodyClass('removeClass', 'pt-0');
        }
    }

</script>
