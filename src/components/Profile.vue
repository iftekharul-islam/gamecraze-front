<template>
    <div>
        <!-- user profile -->
        <section class="user-profile sign-in-bg">
            <div class="conatainer-fluid user-profile-width">
                <div class="row">
                    <div class=" col-xl-6 offset-xl-3 user-profile-width-padding pb-5">
                        <div class="card">
                            <div class="d-flex justify-content-between">
                                <div class="current-balance">
                                    <h5>Current Balance</h5>
                                    <span>${{ user.wallet }}</span>
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

                            <div class="user-image">
                                <a v-if="!$store.state.user.image" href="#"><img src="../assets/img/profile_image4.png" alt="user image"></a>
                                <a v-else href="#"><img :src="$gamehubStorageApi + $store.state.user.image" alt="user image"></a>
                            </div>
                            <div class="editprofile-btn">
                                <button type="button" class="btn btn-primary mr-4" @click.prevent="onRentPost">Post for Rent</button>
                                <button type="button" class="btn btn-primary mr-4" @click.prevent="onUpdateProfile">Update Profile</button>
                            </div>
                            <div class="user-details">
                                <h3 class="mb-5 text-light">Profile Info</h3>
                                <div class="profile-view" id="myTabContent">

                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Name</th>
                                                <td>{{ user.name }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>{{ user.gender }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>{{ user.birth_date }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Email</th>
                                                <td>{{ user.email }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Mobile No</th>
                                                <td>{{ user.phone_number }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Address</th>
                                                <td>{{ user.address }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">NID</th>
                                                <td>783447838220</td>
                                            </tr>
                                            </tbody>
                                        </table>

<!--                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>-->

                                </div>
                            </div>
                            <div class="recharge">
                                <div class="recharge-button">
                                    <button class="btn btn-primary rechargebtn" type="button" data-toggle="collapse" data-target="#rechargeBtn" aria-expanded="false" aria-controls="rechargeBtn">
                                        Recharge $
                                    </button>
                                </div>
                                <div class="collapse" id="rechargeBtn">
                                    <form method="post" action="#">
                                        <div class="form-group">
                                            <label for="currency-field">Enter Amount</label>
                                            <input class="form-control" type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$1,00.00">
                                        </div>
                                        <button type="submit">Submit</button>
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
    export default {
        data() {
            return {
                user: {}
            }
        },
        methods: {
            onRentPost() {
                this.$router.push('/rent-post').catch(err => {});
            },
            onUpdateProfile() {
                this.$router.push('/update-profile').catch(err => {});
            }
        },
        created() {
            this.user = this.$store.state.user
            // console.log(this.profile);
        }
    }
</script>
