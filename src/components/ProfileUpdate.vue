<template>
    <div>
        <!-- user profile edit -->
        <section class="user-profile sign-in-bg">
            <div class="conatainer-fluid user-profile-width">
                <div class="row">
                    <div class=" col-xl-6 offset-xl-3 user-profile-width-padding pb-5">
                        <div class="card">
                            <div class="d-flex justify-content-between">
                                <div class="current-balance">
                                    <h5>Current Balance</h5>
                                    <span>$ 0.00</span>
                                </div>
                                <div class="rating">
                                    <h5>Player Rating</h5>
                                    <span>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                  </span>
                                </div>
                            </div>
                            <div class="user-image edit-user-image">
                                <div class="avatar-upload">
                                    <div class="avatar-edit">
                                        <input @change="onImageChange" @click="onUpload" type='file' id="edit-image-upload" accept=".png, .jpg, .jpeg"/>
                                        <label for="edit-image-upload"><img src="../assets/img/switch-camera.png" alt=""></label>
                                    </div>
                                    <div class="avatar-preview">
                                        <div id="edit-image-preview">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-details">
                                <!-- tabs -->
                                <h3 class="mb-5 text-light">Edit Your Profile</h3>
                                    <div class="profile-view">
                                        <!-- edit form -->
                                        <form method="post">
                                            <div class="form-group row">
                                                <label for="editname" class="col-sm-3 col-form-label">Name</label>
                                                <div class="col-sm-9 pr-0">
                                                    <input type="text" class="form-control" id="editname" placeholder="Edit Your Name" v-model="form.name">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Gender</label>
                                                <div class="col-sm-9 pr-0 gender">
                                                    <!-- male -->
                                                    <input type='radio' id='male' name='gender' value="Male" v-model="form.gender">
                                                    <label for='male' id="man">Male </label>
                                                    <!-- female -->
                                                    <input type='radio' id='female' name='gender' value="Female" v-model="form.gender">
                                                    <label for='female' id="women">Female </label>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="datepicker" class="col-sm-3 col-form-label">Date of Birth</label>
                                                <div class="col-sm-9 pr-0">
                                                    <input type="date" class="form-control" id="datepicker" v-model="form.birth_date">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="editmail" class="col-sm-3 col-form-label">Email</label>
                                                <div class="col-sm-9 pr-0">
                                                    <input type="email" class="form-control" id="editmail" placeholder="Edit Your Email" v-model="form.email">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="editnumber" class="col-sm-3 col-form-label">Mobile No</label>
                                                <div class="col-sm-9 pr-0">
                                                    <input type="tel" class="form-control" id="editnumber" placeholder="Edit Your Number" v-model="form.phone_number">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="address" class="col-sm-3 col-form-label">Address</label>
                                                <div class="col-sm-9 pr-0">
                                                    <textarea class="form-control" id="address" placeholder="Edit Your Email" v-model="form.address"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-sm-10">
                                                    <button type="button" class="btn btn-primary" @click.prevent="onUpdateProfile">Save Changes</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        data() {
            return {
                form: {
                    name: this.$store.state.user.name,
                    gender: this.$store.state.user.gender,
                    birth_date: this.$store.state.user.birth_date,
                    email: this.$store.state.user.email,
                    phone_number: this.$store.state.user.phone_number,
                    address: this.$store.state.user.address,
                    image: ""
                }
            }
        },
        methods: {
            upload() {
                // Edit Profile avatar
                function readURL(input) {
                    if (input.files && input.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $('#edit-image-preview').css('background-image', 'url('+e.target.result +')');
                            $('#edit-image-preview').hide();
                            $('#edit-image-preview').fadeIn(650);
                        }
                        reader.readAsDataURL(input.files[0]);
                    }
                }
                $("#edit-image-upload").change(function() {
                    readURL(this);
                });
            },
            onUpload() {
                var vm = this;
                Vue.nextTick(function(){
                    vm.upload();
                }.bind(vm));
            },
            onImageChange(event) {
                let fileReader = new FileReader();
                fileReader.onload = (e) => {
                    this.form.image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
            },
            onUpdateProfile() {
                this.$store.dispatch('updateUserDetails', this.form)
            }
        }
    }
</script>
