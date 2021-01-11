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
                    <div class="col-md-4">
                        <div class="nav nav-pills user-profile-details--nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="v-pills-overview-tab" data-toggle="pill" href="#v-pills-overview" role="tab" aria-controls="v-pills-overview" aria-selected="true"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon1.png" alt="profile icon"> <img src="../assets/img/active-profile-icon1.png" class="img-active" alt="profile icon"></div> <span>Overview</span></a>
                        <a class="nav-link" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon2.png" alt="profile icon"> <img src="../assets/img/active-profile-icon2.png" class="img-active" alt="profile icon"></div> <span>Dashboard</span></a>
                        <a class="nav-link" id="v-pills-post-rent-tab" data-toggle="pill" href="#v-pills-post-rent" role="tab" aria-controls="v-pills-post-rent" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon3.png" alt="profile icon"> <img src="../assets/img/active-profile-icon3.png" class="img-active" alt="profile icon"></div> <span>Post for Rent</span></a>
                        <a class="nav-link" id="v-pills-edit-profile-tab" data-toggle="pill" href="#v-pills-edit-profile" role="tab" aria-controls="v-pills-edit-profile" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon4.png" alt="profile icon"> <img src="../assets/img/active-profile-icon4.png" class="img-active" alt="profile icon"></div> <span>Edit Profile</span></a>
                        </div>
                    </div>
                    <div class="col-md-8">
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
                        <div class="tab-pane fade" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <div class="dashboard-content">
                                        <div class="d-flex justify-content-center dashboard-tab-button mb-5">
                                            <button  @click.prevent="onOfferedGames" :disabled="!show" :class="{active: !show}"><img class="active-yellow" src="../assets/img/offer-icon.png" alt="offer icon"> <img class="active-black" src="../assets/img/offer-icon-black.png" alt="offer icon">  Offered Games</button>
                                            <button  @click.prevent="onRentedGames" :disabled="show" :class="{active: show}"><img class="active-black" src="../assets/img/rent-icon.png" alt="rent icon"> <img class="active-yellow" src="../assets/img/rent-icon-black.png" alt="rent icon"> Rented Games</button>
                                        </div>
                                        <div class="table-responsive pb-5" v-if="rents.length && !show">
                                                <table class="table table-striped table-dark">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Game name</th>
                                                        <th scope="col">Disk condition</th>
                                                        <th scope="col">Platform</th>
                                                        <th scope="col">Renter name</th>
                                                        <th scope="col">Pick Point</th>
                                                        <th scope="col">Approvement</th>
                                                        <th scope="col">Available From</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="(rent, index) in rents" :key="index">
                                                        <td>{{ rent.game.data.name }}</td>
                                                        <td>{{ rent.diskCondition.data.name_of_type }}</td>
                                                        <td>{{ rent.platform.data.name }}</td>
                                                        <td>{{ rent.rented_user_id ? rent.rented_user_id : 'N/A' }}</td>
                                                        <td>{{ rent.checkpoint_id ? rent.checkpoint.data.name : 'Home Delivery' }}</td>
                                                        <td v-if="rent.status === 0">
                                                            <a class="badge-danger badge" >Rejected</a>
                                                        </td>
                                                        <td v-else-if="rent.status === 1">
                                                            <a class="badge-success badge" >Approved</a>
                                                        </td>
                                                        <td v-else>
                                                            <a class="badge-info badge" >Pending</a>
                                                        </td>
                                                        <td>{{ formattedDate(rent.availability_from_date) }}</td>
                                                        <td>
                                                            <button type="button" class="btn btn-danger mb-2" @click.prevent="onDelete(rent)" ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                        </div>
                                        <div class="dashboard-content--rented pb-5" v-else-if="lends.length && show">
                                            <table class="table table-borderless" v-if="lends">
                                                <thead>
                                                <tr>
                                                    <td scope="col">Game</td>
                                                    <td scope="col">Rent Week(s)</td>
                                                    <td scope="col">Rent Start</td>
                                                    <td scope="col">Return Date</td>
                                                    <td scope="col" class="text-center">Remaining Days</td>
                                                    <td scope="col">Cost</td>
                                                    <td scope="col">Action</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(lend, index) in lends" :key="index">
                                                <td>{{ lend.rent.game.name }}</td>
                                                    <td>{{ lend.lend_week }}</td>
                                                    <td>{{ formattedDate(lend.lend_date) }}</td>
                                                    <td>{{ returnDate(lend.lend_date, lend.lend_week) }}</td>
                                                    <td>
                                                        <flip-countdown :deadline="endDate(lend.lend_date, lend.lend_week)"></flip-countdown>
                                                    </td>
                                                    <td>{{ lend.lend_cost }}</td>
                                                    <td><button class="btn btn-primary" @click.prevent="extend">Extent Date</button></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card no-post-found-card mb-0" v-else>
                                        <h5 class="text-white text-center">Nothing to Show</h5>
                                        </div>
                                    </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-post-rent" role="tabpanel" aria-labelledby="v-pills-post-rent-tab">
                            <div class="post-rent">
                                <form action="#">
                                     <div class="form-group row">
                                        <label for="gamename" class="col-sm-3 col-form-label">Game Name:</label>
                                        <div class="col-sm-8 post-rent--input">
                                        <input type="text" class="form-control" id="gamename">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="gamenumber" class="col-sm-3 col-form-label">Max Rented Week:</label>
                                        <div class="col-sm-8 post-rent--input">
                                        <input type="number" class="form-control renten-input" id="gamenumber">
                                         <i class="fa fa-angle-up rented-plus"></i>
                                        <i class="fa fa-angle-down rented-minus"></i>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="gamendate" class="col-sm-3 col-form-label">Available from:</label>
                                        <div class="col-sm-8 post-rent--input">
                                        <input type="date" class="form-control" id="gamendate">
                                        </div>
                                    </div>
                                     <div class="form-group row">
                                        <label for="gamedisk" class="col-sm-3 col-form-label">Disk Condition:</label>
                                        <div class="col-sm-8 post-rent--input">
                                        <select id="gamedisk" class="form-control">
                                            <option selected>Please Select Disk Condition</option>
                                            <option>...</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Disk Image:</label>
                                        <div class="col-sm-8 post-rent--input">
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
                                        <div class="col-sm-8 post-rent--input">
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
                                        <div class="offset-md-3 col-md-8 mt-4">
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
    import FlipCountdown from 'vue2-flip-countdown'
        export default {
            components: { FlipCountdown },
            data() {
                return {
                    rents: [],
                    lends: [],
                    show: false,
                }
            },
            methods: {
                onDelete(rent) {
                    this.$swal({
                        title: "Rent Post Delete!",
                        text: "Do you want to delete the Rent Post?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    }).then((willDelete) => {
                        if (willDelete) {
                            let config = {
                                headers: {
                                    'Authorization': 'Bearer ' + this.$store.state.token
                                }
                            }
                            this.$api.delete('rents/' + rent.id, config)
                                .then(response => {
                                if (response.data) {
                                    this.rents.splice(this.rents.indexOf(rent), 1)
                                }
                                this.$swal ({
                                    title: "Post Deleted!",
                                    text: "Rent Post Delete Successful!",
                                    timer: 1500
                                });
                            })

                        }
                        else {
                            this.$swal("Your information is safe!");
                        }
                    });

                },
                extend () {
                    this.$swal({
                        title: "Please Contact",
                        text: "Phone no: 017773278387",
                        icon: "warning",
                    }).then(() => {
                            this.$swal({
                                text: "thank you",
                                icon: 'success',
                                timer: 1500,
                                button: false,
                            });

                    });

                },
                onOfferedGames() {
                    this.show = false
                },
                onRentedGames() {
                    this.show = true
                },
                returnDate(lendDate, week) {
                    let date = new Date(lendDate);
                    date.setDate(date.getDate() + week * 7);
                    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
                },
                formattedDate(date) {
                    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    let formattedDate = new Date(date)
                    return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
                },
                endDate(data, week) {
                    let date = new Date(data);
                    date.setDate(date.getDate() + 1 + week * 7);
                    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()
                }
            },
            created() {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
                this.$api.get('rents?include=game,platform,diskCondition,checkpoint', config)
                    .then(response =>
                    {
                        this.rents = response.data.data
                    })

                this.$api.get('lends', config)
                    .then(response =>
                    {
                        this.lends = response.data
                        console.log(this.lends, 'lends');
                    })
            },
            
        mounted() {
            document.body.classList.add('body-position')
        },
        destroyed() {
            document.body.classList.remove('body-position')
        }
        }
</script>
