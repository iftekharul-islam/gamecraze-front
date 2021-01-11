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
                            <li>SIGN UP</li>
                        </ul>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form id="regForm" @submit.prevent="handleSubmit(onNext)" method="post">
                                     <div class="form-group">
                                        <label >Email address</label>
                                        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                                            <input type="email" class="form-control"  v-model="form.email" readonly>
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>

                                          <!-- First Name -->
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                           
                                            <label for="firstName">First name</label>
                                            <ValidationProvider name="firstName" rules="required" v-slot="{ errors }">
                                                <input type="text" class="form-control" id="firstName" value="" v-model="form.name">
                                                <span class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                               <!-- Last Name -->
                                            <div class="form-group col-md-6">
                                            
                                                <label for="LastName">Last name</label>
                                                <ValidationProvider name="LastName" rules="required" v-slot="{ errors }">
                                                    <input type="text" class="form-control" id="LastName" value="" v-model="form.lastName">
                                                    <span class="error-message">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="user-number">Phone number</label>
                                        <ValidationProvider name="phone number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">
                                            <input @keypress="isNumber($event)" type="tel" class="form-control" id="user-number" v-model="form.phone_number" readonly>
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <!-- password -->
                                    <div class="form-group">
                                        <label>Set your password</label>
                                        <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                                            <input type="password" class="form-control" v-model="form.password">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="regbtn mt-4">
                                        <button type="submit" class="btn w-100 btn--login">PROCEED</button>
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
        },
        mounted () {
          console.log(this.$store.state.setupPasswordUser)
          document.body.classList.add('body-position')
        },
        destroyed () {
          document.body.classList.remove('body-position')
        }
    }

</script>
