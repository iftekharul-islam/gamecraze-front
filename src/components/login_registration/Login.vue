<template>
    <div>
        <!-- sign in  -->
        <section class="sign-in sign-in-bg">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h3 class="card-title text-center">Sign in</h3>
                            <button class="btn btn-success mb-5" style="width: 60%; margin: 0 auto;" @click="onChangeLoginOption">Login with {{ loginOption }}</button>
                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption==='Phone Number'">
                                <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                    <div class="form-group">
                                        <!-- user anme -->
                                        <span style="color: red;" v-if="unauthorized===0">{{ unautorizedError }}</span>
                                        <label for="username1" class="sr-only">User Name</label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="text" class="form-control" id="username1" value="" placeholder="User Name or Email" v-model="form.email">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <!-- password -->
                                    <div class="form-group mb-3">
                                        <label for="gamepassword1" class="sr-only">Password</label>
                                        <ValidationProvider name="password" rules="required|min:8" v-slot="{ errors }">
                                            <input type="password" class="form-control" id="gamepassword1" placeholder="Password" v-model="form.password">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="custom-control custom-checkbox">
                                            <input class="custom-control-input" type="checkbox" id="gamecheck1">
                                            <label class="custom-control-label" for="gamecheck1">
                                                Remember Me
                                            </label>
                                        </div>
                                        <!-- forget password -->
                                        <div class="forget">
                                            <router-link to="reset-password">Forget Password ?</router-link>
                                        </div>
                                    </div>
                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-5">
                                        <button type="submit" class="btn btn-primary mb-2">Sign in</button>
                                    </div>
                                    <div class="footer">
                                        <p>Dont't have an account ? <router-link to="registration">Create Account</router-link> </p>
                                    </div>
                                </form>
                            </ValidationObserver>

                            <!-- form -->
                            <ValidationObserver v-slot="{ handleSubmit }" v-if="loginOption==='Email'">
                                <form @submit.prevent="handleSubmit(onLogin)" method="post">
                                    <div class="form-group">
                                        <label for="user-number" class="sr-only">Number</label>
                                        <ValidationProvider name="phone number" rules="required|max:14|min:11" v-slot="{ errors }">
                                            <input type="tel" class="form-control" id="user-number" placeholder="Your Phone Number" v-model="form.phone_number">
                                            <span style="color: red;">{{ errors[0] }}</span>
                                        </ValidationProvider>

                                    </div>
                                    <!-- sign in button -->
                                    <div class="text-center sign-btn pt-5">
                                        <button type="submit" class="btn btn-primary mb-2">Sign in</button>
                                    </div>
                                    <div class="footer">
                                        <p>Dont't have an account ? <router-link to="registration">Create Account</router-link> </p>
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
                    email: "",
                    password: "",
                    phone_number: ""
                },
                loginOption: "Email",
                unauthorized: "",
                unautorizedError: "Wrong email or password!"
            }
        },
        methods: {
            checkAdminRole(roles) {
                return roles.some(el => el.name === 'admin')
            },
            onLogin() {
                if (this.loginOption === "Email") {
                    this.$store.dispatch('setPhoneNumber', this.form.phone_number)
                    this.$api.post('sendOtp', this.form).then(response => {
                        console.log(response);
                        this.$router.push('/otp-verification').catch(err => {});
                    });
                    // this.$router.push('/admin').catch(err => {});
                }
                else {
                    this.$api.post('login', this.form).then(response => {
                        console.log(response);
                        if (response.data) {
                            this.$store.dispatch('setToken', response.data)
                            console.log(this.$store.state.token);
                            let config = {
                                headers: {
                                    'Authorization': 'Bearer ' + response.data
                                }
                            }
                            this.$api.get('profile', config).then(response => {
                                let admin = this.checkAdminRole(response.data.data.roles)
                                if (admin) {
                                    this.$store.dispatch('setAdmin', admin)
                                    this.$router.push('/admin').catch(err => {});
                                }
                                else {
                                    this.$router.push('/').catch(err => {});
                                }
                                this.$store.dispatch('setProfile', response.data.data)
                            });

                        }
                        else {
                            this.unauthorized = response.data
                            console.log(this.unauthorized)
                        }
                    });
                }
            },
            onChangeLoginOption: function () {
                if (this.loginOption === "Phone Number") {
                    this.loginOption = "Email"
                }
                else {
                    this.loginOption = "Phone Number"
                }
            }
        }
    }
</script>