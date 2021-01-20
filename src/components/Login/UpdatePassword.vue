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
                            <li>RESET PASSWORD</li>
                            </ul>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <div class="text-center" v-if="!isTokenValid && show">
                                    <h4 >{{ errMsg }}</h4>
                                    <router-link to="/login">Try Again</router-link>
                                </div>

                                <form id="regForm" @submit.prevent="handleSubmit(onNext)" method="post" v-if="isTokenValid && show">
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
                                            <input @keypress="isNumber($event)" type="tel" class="form-control" id="user-number" v-model="form.phone_number">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                            <span v-if="isNumberExists" style="color:red">Number already taken</span>
                                        </ValidationProvider>

                                    </div>

                                   <div class="form-group">
                                        <label>Set your password</label>
                                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" v-model="form.password">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="regbtn mt-4">
                                        <button type="submit" class="btn w-100 btn--login">PROCEED <i v-if="isLoading" class="spinner-border spinner-border-sm"></i></button>
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
                isTokenValid: false,
                show:false,
                errMsg: 'Invalid Token',
                isNumberExists: false,
                isLoading: false,
                form: {
                    email: this.$store.state.setupPasswordUser.email,
                    name: this.$store.state.setupPasswordUser.name,
                    lastName: this.$store.state.setupPasswordUser.last_name,
                    phone_number: this.$store.state.setupPasswordUser.phone_number,
                    password: "",
                    token: ''
                },
                // user: this.$store.state.setupPasswordUser
            }
        },
        props: ['token'],
        methods: {
            isNumber: function(evt) {
                this.isNumberExists = false;
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.form.phone_number.length > 10) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            onNext() {
                this.isLoading = true;
                this.$api.put('update-password', this.form).then(response => {
                    if (response.data.error === false) {
                        this.$store.dispatch('loginUserAfterVerification', response.data)
                    } else if (response.data.message == 'numberExists') {
                        this.isNumberExists = true;
                    } else {
                        this.$swal("Warning", response.message, 'warning');
                    }
                    this.isLoading = false;
                });
            },
            validateToken() {
                if (this.token) {
                    this.$api.get('validate-token/' +  this.token).then(response => {
                        console.log('verify: ', response);
                        if (response.data.error === false) {
                            this.isTokenValid = true;
                            this.show = true;
                        } else {
                            this.errMsg = response.data.message;
                            this.show = true;
                        }
                    });
                }
            }
        },
        created() {
            this.form.token = this.token
            this.validateToken();
        },
        mounted () {
          document.body.classList.add('body-position')
        },
        destroyed () {
          document.body.classList.remove('body-position')
        }
    }

</script>
