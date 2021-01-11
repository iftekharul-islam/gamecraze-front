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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isTokenValid: false,
                show:false,
                errMsg: 'Invalid Token',
                form: {
                    password: "",
                    confirmPassword: "",
                    token: ''
                },
                // user: this.$store.state.setupPasswordUser
            }
        },
        props: ['token'],
        methods: {
            onNext() {
                // this.$store.dispatch('setSignUp', this.form)
                console.log('fff', this.form);
                
                this.$api.put('update-password', this.form).then(response => {
                    console.log('update: ', response);
                    if (response.data.error === false) {
                        this.$router.push('/login');
                    } else {
                        this.$swal("Warning", response.message, 'warning')
                    }
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
