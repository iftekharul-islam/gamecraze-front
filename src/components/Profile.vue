<template>
    <div>
        <!-- user profile -->

        <!-- <section class="user-profile sign-in-bg">
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
                                <router-link to="dashboard" type="button" class="btn btn-primary mr-4">Dashboard</router-link>
                                <router-link to="rent-post" type="button" class="btn btn-primary mr-4">Post for Rent</router-link>
                                <router-link to="update-profile" type="button" class="btn btn-primary mr-4">Update Profile</router-link>
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
                                                <td>{{ user.birth_date != null ? formattedDate(user.birth_date) : ''}}</td>
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
                                                <td v-if="user.address">{{ user.address.address }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">City</th>
                                                <td v-if="user.address">{{ user.address.city }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Post Code</th>
                                                <td v-if="user.address">{{ user.address.post_code }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">NID Id</th>
                                                <td>{{ user.identification_number }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="d-block">NID Image</th>
                                                <td><img class="w-50" :src="$gamehubStorageApi + $store.state.user.identification_image" alt="nid image"></td>
                                            </tr>
                                            </tbody>
                                        </table>

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
        </section> -->
     
        <section class="user-profile-heading">
            <img src="../assets/img/profile-bg.png" alt="profile bg" class="img-fluid user-profile-bg">
            <div class="container">
                <div class="user-profile-heading--name">
                    <img src="../assets/img/sss.jpg" alt="user profile" class="img-fluid">
                    <div class="users-name">
                        <h3>MD Minhaj</h3>
                        <h6>sabertooth_wolf</h6>
                    </div>
                    <div class="user-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
        </section>
    <!-- user profile details -->
        <section class="user-profile-details">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills user-profile-details--nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="v-pills-overview-tab" data-toggle="pill" href="#v-pills-overview" role="tab" aria-controls="v-pills-overview" aria-selected="true"><i class="fas fa-user"></i> Overview</a>
                        <a class="nav-link" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="false"><i class="fas fa-gamepad"></i> Dashboard</a>
                        <a class="nav-link" id="v-pills-post-rent-tab" data-toggle="pill" href="#v-pills-post-rent" role="tab" aria-controls="v-pills-post-rent" aria-selected="false"><i class="fab fa-telegram-plane"></i> Post for Rent</a>
                        <a class="nav-link" id="v-pills-edit-profile-tab" data-toggle="pill" href="#v-pills-edit-profile" role="tab" aria-controls="v-pills-edit-profile" aria-selected="false"><i class="fas fa-edit"></i> Edit Profile</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-overview" role="tabpanel" aria-labelledby="v-pills-overview-tab">
                            <div class="over-view">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Name:</td>
                                            <td>Minhaj</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Username:</td>
                                            <td>sabertooth_wolf</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Gender:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Date of Birth:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Email:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Mobile No:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Address:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">City:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Post Code:</td>
                                            <td>Male</td>
                                        </tr>
                                         <tr>
                                           <td scope="row">NID No:</td>
                                            <td>Male</td>
                                        </tr>
                                         <tr>
                                           <td scope="row">NID Image:</td>
                                            <td><img src="../assets/img/nid.png" alt="nid" class="img-fluid"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">...</div>
                        <div class="tab-pane fade" id="v-pills-post-rent" role="tabpanel" aria-labelledby="v-pills-post-rent-tab">
                            <div class="post-rent">
                                <form action="#">
                                     <div class="form-group row">
                                        <label for="gamename" class="col-sm-3 col-form-label">Game Name:</label>
                                        <div class="col-sm-9">
                                        <input type="text" class="form-control" id="gamename">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="gamenumber" class="col-sm-3 col-form-label">Max Rented Week:</label>
                                        <div class="col-sm-9">
                                        <input type="number" class="form-control" id="gamenumber">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="gamendate" class="col-sm-3 col-form-label">Available from:</label>
                                        <div class="col-sm-9">
                                        <input type="date" class="form-control" id="gamendate">
                                        </div>
                                    </div>
                                     <div class="form-group row">
                                        <label for="gamedisk" class="col-sm-3 col-form-label">Disk Condition:</label>
                                        <div class="col-sm-9">
                                        <select id="gamedisk" class="form-control">
                                            <option selected>Please Select Disk Condition</option>
                                            <option>...</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Disk Image:</label>
                                        <div class="col-sm-9">
                                            <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="customFile">
                                                    <label class="custom-file-label text-light" for="customFile">Disk Image</label>
                                                </div>
                                                <div class="img-prev">
                                                    <img src="../assets/img/disk.png" alt="img previes">
                                                </div>
                                        </div>
                                    </div>
                                     <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Cover Image:</label>
                                        <div class="col-sm-9">
                                            <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="customFile2">
                                                    <label class="custom-file-label text-light" for="customFile2">Cover Image</label>
                                                </div>
                                                <div class="img-prev">
                                                    <img src="../assets/img/disk.png" alt="img previes">
                                                </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="offset-md-3 col-md-9 mt-4">
                                            <button class="btn--secondery w-100 border-0"><span>Submit</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-edit-profile" role="tabpanel" aria-labelledby="v-pills-edit-profile-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>





    </div>
</template>

<script>
    // export default {
    //     data() {
    //         return {
    //             user: {}
    //         }
    //     },
    //     methods: {
    //         formattedDate(date) {
    //             const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    //             let birthDate = new Date(date)
    //             return birthDate.getDate() + " " + months[birthDate.getMonth()] + " " + birthDate.getFullYear()
    //         }
    //     },
    //     created() {
    //         this.user = this.$store.state.user
    //         console.log(this.user, 'user');
    //     }
    // }
</script>
