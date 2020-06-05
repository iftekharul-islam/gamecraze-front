<template>
    <div>
        <!-- Registration  -->
        <section class="registration sign-in-bg">
            <div class="container-fluid registration-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h3 class="card-title text-center">Registration</h3>
                            <!-- photo upload with preview -->
                            <div class="avatar-wrapper">
                                <img class="profile-pic" src="" alt=""/>
                                <div class="upload-button">
                                    <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                                </div>
                                <input class="file-upload" type="file" ref="files" accept="image/*" @change="onImageChange"/>
                            </div>

                            <!-- form -->
                            <form v-on:submit.prevent="onRegistration" method="post" enctype="multipart/form-data">
                                <!-- name -->
                                <div class="form-group">
                                    <label for="name1" class="sr-only">Name</label>
                                    <input type="text" class="form-control" id="name1" value="" name="name1" placeholder="Name" required v-model="form.name">
                                </div>
                                <!-- email -->
                                <div class="form-row">
                                    <div class="form-group col-lg form-width">
                                        <label for="email1" class="sr-only">Email</label>
                                        <input type="email" class="form-control" id="email1" placeholder="Email" required v-model="form.email">
                                    </div>
                                    <!-- mobile number -->
                                    <div class="form-group col-lg form-width">
                                        <label for="mobile1" class="sr-only">Mobile</label>
                                        <input type="tel" class="form-control" id="mobile1" placeholder="Mobile Number" name="mobile1" required v-model="form.phone_number">
                                    </div>
                                </div>
                                <!-- gender -->
                                <div class="form-row">
                                    <div class="form-group col-lg form-width">
                                        <label class="gender-label">Gender</label>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input class="custom-control-input" type="radio" name="gender" id="male1" value="male" v-model="form.gender">
                                            <label class="custom-control-label" for="male1">Male</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input class="custom-control-input" type="radio" name="gender" id="female2" value="female" v-model="form.gender">
                                            <label class="custom-control-label" for="female2">Female</label>
                                        </div>
                                    </div>
                                    <!-- birth year -->
                                    <div class="form-group col-lg form-width">
                                        <label for="datepicker" class="sr-only">Birthyear</label>
                                        <input type="text" class="form-control" id="datepicker" placeholder="Birthday" onfocus="(this.type='date')" onblur="(this.type='text')" name="datepicker" required v-model="form.birth_date">
                                    </div>
                                </div>
                                <!-- password -->
                                <div class="form-row">
                                    <div class="form-group col-lg form-width">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password" name="password" required v-model="form.password">
                                    </div>
                                    <div class="form-group col-lg form-width">
                                        <label for="password-verify" class="sr-only">Confirm-password</label>
                                        <input type="password" class="form-control" id="password-verify" placeholder="Confirm Password" name="password-verify" required>
                                        <p class="incorrectMsg">passwords do not match!</p>
                                    </div>
                                </div>
                                <!-- confirm paswword info -->
                                <div class="pswd_info">
                                    <h4 class="pswd_reqs">Password must meet the following requirements:</h4>
                                    <ul>
                                        <li id='letter' class='invalid'>Contains <strong>a lowercase letter</strong></li>

                                        <li id='capital' class='invalid'>Contains <strong>a capital letter</strong></li>

                                        <li id='number' class='invalid'>Contains <strong>a number</strong></li>

                                        <li id='special' class='invalid'>Contains <strong>a special character</strong></li>

                                        <li id='length' class='invalid'>Contains <strong>8 characters</strong></li>
                                    </ul>
                                </div>
                                <!-- address -->
                                <div class="form-group">
                                    <label for="address1" class="sr-only">Address</label>
                                    <textarea class="form-control" id="address1" rows="4"  placeholder="Address" required v-model="form.address"></textarea>
                                </div>
                                <!-- interested -->
                                <div class="form-group">
                                    <label for="interest1" class="sr-only">Interest</label>
                                    <textarea class="form-control" id="interest1" rows="4"  placeholder="Interest" required v-model="form.interest"></textarea>
                                </div>
                                <!-- status -->
                                <div class="form-group">
                                    <label for="status1" class="sr-only">Status</label>
                                    <textarea class="form-control" id="status1" rows="4"  placeholder="Status" required v-model="form.status"></textarea>
                                </div>
                                <!-- registration button -->
                                <div class="text-center registration-btn pt-5">
                                    <button type="submit" class="passwordButton btn btn-primary mb-2">Registration</button>
                                </div>
                                <div class="footer">
                                    <p>Have an account ? Please <router-link to="login" class="">Sign in</router-link> </p>
                                </div>
                            </form>

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
                    email: "",
                    phone_number: "",
                    gender: "",
                    birth_date: "",
                    password: "",
                    address: "",
                    interest: "",
                    status: "",
                    image: "",
                }
            }
        },
        methods: {
            onImageChange(event) {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(event.target.files[0]);
                fileReader.onload = (e) => {
                    this.form.image = e.target.result;
                }
                console.log(this.form);
            },
            onRegistration() {
                this.$api.post('register', this.form).then(response => {
                    console.log(response);
                });
            }
        }
    }
</script>