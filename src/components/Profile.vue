<template>
    <div>
        <section class="user-profile-heading">
            <img src="../assets/img/profile-bg.png" alt="profile bg" class="img-fluid user-profile-bg">
            <div class="container">
                <div class="user-profile-heading--name">
                    <img v-if="user" :src="user.image" :alt="user.name" class="img-fluid">
                    <img v-else src="../assets/img/profile_image4.png" alt="user profile" class="img-fluid">
                    <div class="users-name">
                        <h3>{{ user.name }}</h3>
<!--                        <h6>sabertooth_wolf</h6>-->
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
                                            <td>{{ user.name + ' ' + user.last_name }}</td>
                                        </tr>
<!--                                        <tr>-->
<!--                                           <td scope="row">Username:</td>-->
<!--                                            <td>sabertooth_wolf</td>-->
<!--                                        </tr>-->
                                        <tr>
                                           <td scope="row">Gender:</td>
                                            <td>{{ user.gender }}</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Date of Birth:</td>
                                            <td>{{ user.birth_date }}</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Email:</td>
                                            <td>{{ user.email }}</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Mobile No:</td>
                                            <td>
                                                {{ user.phone_number }}
                                                <span class="verified" v-if="user.is_phone_verified == 1">
                                                    <i  class="fas fa-check" aria-hidden="true" title="Verified"></i>
                                                </span>
                                                <span v-else class="not-verified">
                                                    <i class="fas fa-question-circle" aria-hidden="true" title="Not Verified"></i>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Address:</td>
                                            <td v-if="user.address.address">{{ user.address.address }}</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">City:</td>
                                            <td v-if="user.address">{{ user.address.city }}</td>
                                        </tr>
                                        <tr>
                                           <td scope="row">Post Code:</td>
                                            <td v-if="user.address">{{ user.address.post_code }}</td>
                                        </tr>
                                         <tr>
                                           <td scope="row">NID No:</td>
                                            <td>{{ user.identification_number }}</td>
                                        </tr>
                                         <tr>
                                           <td scope="row">NID Image:</td>
                                            <td v-if="user.identification_image"><img :src="user.identification_image" alt="nid" class="img-fluid"></td>
                                            <td v-else><img src="../assets/img/id.jpg" alt="nid" class="img-fluid"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                    <div class="dashboard-content">
                                        <div class="d-flex justify-content-center dashboard-tab-button mb-5">
                                            <button  @click.prevent="onRentedGames()" :disabled="show" :class="{active: show}"><img class="active-black" src="../assets/img/rent-icon.png" alt="rent icon"> <img class="active-yellow" src="../assets/img/rent-icon-black.png" alt="rent icon"> Rented Games</button>
                                            <button  @click.prevent="onOfferedGames()" :disabled="!show" :class="{active: !show}"><img class="active-yellow" src="../assets/img/offer-icon.png" alt="offer icon"> <img class="active-black" src="../assets/img/offer-icon-black.png" alt="offer icon">  Offered Games</button>
                                        </div>

                                      <div class="dashboard-content--rented pb-5" v-if="rents.length && !show">
                                        <table class="table table-borderless" v-if="rents">
                                          <thead>
                                          <tr>
                                            <td scope="col">Game</td>
                                            <td scope="col">Disk condition</td>
                                            <td scope="col">Platform</td>
                                            <td scope="col">Renter name</td>
                                            <td scope="col">Pick Point</td>
                                            <td scope="col">Available From</td>
                                            <td scope="col">Approvement</td>
                                            <td scope="col">Action</td>
                                          </tr>
                                          </thead>
                                          <tbody>
                                          <tr v-for="(rent, index) in rents" :key="index">
                                            <td v-if="rent.game">{{ rent.game.data.name }}</td>
                                            <td>{{ rent.diskCondition.data.name_of_type }}</td>
                                            <td>{{ rent.platform.data.name }}</td>
                                            <td>Renter Name</td>
                                            <td v-if="rent.checkpoint_id">{{}}</td>
                                            <td v-else>Not Set</td>
                                            <td>{{ formattedDate(rent.availability_from_date) }}</td>
                                            <td v-if="rent.status === 0">
                                                <a class="badge-danger badge" >Rejected</a>
                                            </td>
                                            <td v-else-if="rent.status === 1">
                                                <a class="badge-success badge" >Approved</a>
                                            </td>
                                            <td><button type="button" class="btn btn-danger mb-2" @click.prevent="onDelete(rent)" ><i class="fa fa-trash" aria-hidden="true"></i></button></td>
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
                                                    <td v-if="lend.rent">{{ lend.rent.game.name }}</td>
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
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form @submit.prevent="handleSubmit(onRentSubmit)" method="post" id="rentPostForm">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Game Name:</label>
                                            <div class="col-sm-8 post-rent--input">
                                                <ValidationProvider name="game" rules="" v-slot="{ errors }">
<!--                                                    <vue-autosuggest-->
<!--                                                        :v-model="gameName"-->
<!--                                                        :suggestions="filteredOptions"-->
<!--                                                        @focus="focusMe"-->
<!--                                                        @click="clickHandler"-->
<!--                                                        @input="onInputChange"-->
<!--                                                        @selected="onSelected"-->
<!--                                                        :get-suggestion-value="getSuggestionValue"-->
<!--                                                        :input-props="{id:'autosuggest__input', class:'form-control', placeholder:'Enter game name'}">-->
<!--                                                        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">-->
<!--                                                            <div style="display: flex; color: white;">{{suggestion.item.name}}</div>-->
<!--                                                        </div>-->
<!--                                                    </vue-autosuggest>-->
                                                    <vue-autosuggest
                                                        v-model="gameName"
                                                        :suggestions="filteredOptions"
                                                        @focus="focusMe"
                                                        @click="clickHandler"
                                                        @input="onInputChange"
                                                        @selected="onSelected"
                                                        :get-suggestion-value="getSuggestionValue"
                                                        :input-props="{id:'autosuggest__input', placeholder:'Search Game'}">
                                                      <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                                        <div>{{suggestion.item.name}}</div>
                                                      </div>
                                                    </vue-autosuggest>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="rentedWeek" class="col-sm-3 col-form-label">Max Rented Week:</label>
                                            <div class="col-sm-8 post-rent--input">
                                                <ValidationProvider name="rented week" rules="required|min_value:1" v-slot="{ errors }">
                                                    <input type="number" class="form-control renten-input" id="rentedWeek" min="1" v-model="rentData.max_week">
                                                    <i class="fa fa-angle-up rented-plus" @click="adjustRentedWeek('increase')"></i>
                                                    <i class="fa fa-angle-down rented-minus" @click="adjustRentedWeek('decrease')"></i>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="gamendate" class="col-sm-3 col-form-label">Available from:</label>
                                            <div class="col-sm-8 post-rent--input">
                                                <ValidationProvider name="available date" rules="required" v-slot="{ errors }">
                                                    <input type="date" class="form-control" id="gamendate" placeholder="Availablity Date" :min="todayDate()" v-model="rentData.availability">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <!-- platform -->
                                        <div class="form-group row" v-if="gamePlatform">
                                            <label class="col-sm-3 col-form-label">Platform:</label>
                                             <div class="col-sm-8 post-rent--input">
                                            <ValidationProvider name="Platform" rules="required" v-slot="{ errors }">
                                                <div class="form-check form-check-inline post-rent--input--platform-input" v-for="(platform, index) in rentData.game.platforms.data" :key="index">
                                                    <input class="form-check-input platform" :id="'platform-' + index" name="platform" type="radio" :value="platform" v-model="rentData.platform">
                                                    <label class="form-check-label ml-2" :for="'platform-' + index">{{ platform.name }}</label>
                                                </div>
                                                <span class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                            </div>
                                        </div>
                                        <!-- earning amount -->
                                        <div class="form-group row" v-if="basePrices">
                                            <label class="col-sm-3 col-form-label">Earning Amount:</label>
                                            <div class="earning-amount col-sm-8 post-rent--input">
                                                <table class="table table-borderless">
                                                    <tbody>
                                                    <tr class="">
                                                        <td>Your Estimated earning for 1 week</td>
                                                        <td>BDT {{ basePrices[1] }}</td>
                                                    </tr>
                                                    <tr class="">
                                                        <td>Your Estimated earning for 2 week</td>
                                                        <td>BDT {{ basePrices[1] + basePrices[2] }}</td>
                                                    </tr>
                                                    <tr class="">
                                                        <td>Your Estimated earning for 3 week</td>
                                                        <td>BDT {{ basePrices[1] + basePrices[2] + basePrices[3] }}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="alert alert-info alert-dismissible mt-2">
                                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                <p>
                                                    If you want to Borrow for more weeks.Then renting price will be cyclic like the given price table.So its start from 1st week.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Disk Condition:</label>
                                            <div class="col-sm-8 post-rent--input">
                                                <ValidationProvider name="Disk Condition" rules="required" v-slot="{ errors }">
                                                    <select class="form-control" id="DiskCondition" v-model="rentData.disk_condition">
                                                        <option selected>Please Select Disk Condition</option>
                                                        <option v-for="(diskCondition, index) in diskConditions" :key="index" :value="diskCondition">{{ diskCondition.name_of_type }} ({{ diskCondition.description }})</option>
                                                    </select>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>

                                        <div class="form-group row">

                                            <label class="col-sm-3 col-form-label">How do you want to Deliver ?</label>
                                            <div class="col-sm-8 post-rent--input post-rent--delivery">

                                                    <label for="cod"><input type="radio" v-model="x" value="" v-on:change="onEmpty" name="checkpoint_id" id="cod"> COD</label>
                                                    <label for="checkpoint_true"><input type="radio" v-model="x" value="1" name="checkpoint_id" id="checkpoint_true"> Checkpoint</label>
                                            </div>
                                        </div>

                                        <div class="form-group row" v-show="x === '1'">
                                            <label class="col-sm-3 col-form-label">Select checkpont:</label>
                                            <div class="col-sm-8 post-rent--input">
                                                <select class="form-control" id="checkpoint" v-model="rentData.checkpoint">
                                                    <option value="" disabled>Please Select Near Checkpoint</option>
                                                    <option v-for="(checkpoint, index) in checkpoints" :key="index" :value="checkpoint">{{ checkpoint.name }}, Area: {{ checkpoint.area.data.name }}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Disk Image:</label>
                                            <div class="col-sm-8 post-rent--input">
                                                <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="DiskUpload" accept="image/*" @change="onDiskimageChange">
                                                        <label class="custom-file-label text-light" for="customFile">Disk Image</label>
                                                    </div>
                                                    <div class="img-prev">
                                                        <img v-if="rentData.disk_image" :src="rentData.disk_image" alt="Disk image preview">
                                                        <img v-else src="../assets/img/disk.png" alt="Disk image preview">
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Cover Image:</label>
                                            <div class="col-sm-8 post-rent--input">
                                                <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="customFile2" accept="image/*" @change="onCoverimageChange">
                                                        <label class="custom-file-label text-light" for="customFile2">Cover Image</label>
                                                    </div>
                                                    <div class="img-prev">
                                                        <img v-if="rentData.cover_image" :src="rentData.cover_image" alt="Cover image preview">
                                                        <img v-else src="../assets/img/disk.png" alt="Cover image preview">
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-md-3 col-md-8 mt-4">
                                                <button class="btn--secondery w-100 border-0">
                                                    <span class="mr-2">Submit <i v-if="isRentLoading" class="spinner-border spinner-border-sm"></i></span>
                                                    
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                 </ValidationObserver>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="v-pills-edit-profile" role="tabpanel" aria-labelledby="v-pills-edit-profile-tab">
                            <div class="edit-profile">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form @submit.prevent="handleSubmit(onProfileUpdate)" method="post">
                                        <div class="form-group row">
                                            <label for="first_name" class="col-sm-3 col-form-label">First name:</label>

                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                                                        <input @keypress="isValidString($event)" type="text" class="form-control" id="first_name" v-model="form.name">
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>

                                        </div>
                                        <div class="form-group row">
                                            <label for="last_name" class="col-sm-3 col-form-label">Last name:</label>
                                            <div class="col-sm-9 edit--input">
                                                 <ValidationProvider name="last name" rules="required" v-slot="{ errors }">
                                                    <input @keypress="isValidString($event)" type="text" class="form-control" id="last_name" v-model="form.last_name">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="user_name" class="col-sm-3 col-form-label">Username:</label>
                                            <div class="col-sm-9 edit--input">
                                                <input type="text" class="form-control" id="user_name">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="gender" class="col-sm-3 col-form-label">Gender:</label>
                                            <div class="col-sm-9 edit--input">
                                                <ValidationProvider name="gender" rules="required" v-slot="{ errors }">
                                                    <select class="custom-select" id="gender" v-model="form.gender">
                                                        <option selected value="">Choose...</option>
                                                        <option value="male" >Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="others">Others</option>
                                                    </select>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="dateofbirth" class="col-sm-3 col-form-label">Date of Birth:</label>
                                            <div class="col-sm-9 edit--input">
                                                <ValidationProvider name="date of birth" rules="required" v-slot="{ errors }">
                                                    <input type="date" class="form-control" id="dateofbirth" v-model="form.birth_date">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="email" class="col-sm-3 col-form-label">Email:</label>
                                            <div class="col-sm-9 edit--input">
                                                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                                    <input type="email" class="form-control" id="email" v-model="form.email">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Mobile No:</label>
                                            <div class="col-sm-9 edit--input">
                                                <ValidationProvider name="phone number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">
                                                    <input type="text" @keypress="isNumber($event)" class="form-control" id="phone_number" v-model="form.phone_number">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                    <span class="error-message d-block" v-if="$store.state.numberExists">Phone number already exists</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="address" class="col-sm-3 col-form-label">Address:</label>
                                            <div class="col-sm-9 edit--input">
                                                <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                                    <input type="text" class="form-control" id="address" v-model="form.address">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="city" class="col-sm-3 col-form-label">City:</label>
                                            <div class="col-sm-9 edit--input">
                                                <ValidationProvider name="city" rules="required" v-slot="{ errors }">
                                                    <input type="text" class="form-control" id="city" v-model="form.city">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="postcode" class="col-sm-3 col-form-label">Post Code:</label>
                                            <div class="col-sm-9 edit--input">
                                                 <ValidationProvider name="post code" rules="required" v-slot="{ errors }">
                                                    <input type="text" class="form-control" id="postcode" v-model="form.postCode">
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="nidno" class="col-sm-3 col-form-label">NID No:</label>
                                            <div class="col-sm-9 edit--input">
                                                <ValidationProvider name="NID" rules="required" v-slot="{ errors }">
                                                <input type="text" class="form-control" id="nidno" v-model="form.id_number">
                                                  <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">NID Image:</label>
                                            <div class="col-sm-9 edit--input">
                                            <div class="custom-file">
                                                    <input @change="onIdChange" accept=".png, .jpg, .jpeg" type="file" class="custom-file-input" id="customFile">
                                                    <label class="custom-file-label text-light" for="customFile">{{ selectedFile }}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                        <div class="offset-md-3 col-md-8 mt-4">
                                                <button class="btn--secondery w-100 border-0" :disabled="$store.state.isProfileUpdating">

                                                    <span class="mr-2">Update Profile <i v-if="$store.state.isProfileUpdating" class="spinner-border spinner-border-sm"></i>  </span>
    
                                                </button>
                                            </div>
                                        </div>

                                    </form>
                                </ValidationObserver>
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
    import FlipCountdown from 'vue2-flip-countdown'
    export default {
        components: { FlipCountdown },
        props: ['rentPost'],
        data() {
            return {
                rents: [],
                lends: [],
                show: false,
                user: this.$store.state.user,
                form: {
                    name: this.$store.state.user.name,
                    last_name: this.$store.state.user.last_name,
                    gender: this.$store.state.user.gender,
                    birth_date: this.$store.state.user.birth_date,
                    email: this.$store.state.user.email,
                    phone_number: this.$store.state.user.phone_number,
                    id_number: this.$store.state.user.identification_number,
                    address: this.$store.state.user.address.address,
                    city: this.$store.state.user.address.city,
                    postCode: this.$store.state.user.address.post_code,
                    id_image: ""
                },
                selectedFile: 'Select NID',
                x: '',
                //rentPost: true,
                // rentView: false,
                diskConditions: [],
                checkpoints: [],
                games: [],
                platforms: [],
                gamesName: {},
                platformsName: {},
                basePrices: false,
                diskConditionsName: {},
                gameName: '',
                gamePlatform: false,
                rentData: {
                    game: null,
                    availability: '',
                    max_week: 1,
                    platform: null,
                    disk_condition: null,
                    disk_image: '',
                    cover_image: '',
                    checkpoint: {},
                },
                isRentLoading: false,
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
            },
            onProfileUpdate: function() {
                this.$store.dispatch('updateUserDetails', this.form);
            },
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.form.phone_number.length > 10) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            },
            isValidString: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if(!(charCode >= 65 && charCode <= 121) && (charCode != 32 && charCode != 0)){
                    event.preventDefault();
                }
            },
            onIdChange(event) {
                let fileReader = new FileReader();
                if (event.srcElement.files.length > 0) {
                    this.selectedFile = event.srcElement.files[0].name;
                }

                fileReader.onload = (e) => {
                    this.form.id_image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
            },
            //rent post
            onDiskimageChange (event) {
                let fileReader = new FileReader();
                fileReader.onload = (e) => {
                    this.rentData.disk_image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
                console.log('rent data: ', this.rentData)
            },
            onCoverimageChange (event) {
                let fileReader = new FileReader();

                fileReader.onload = (e) => {
                    this.rentData.cover_image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
                console.log('rent data: ', this.rentData)
            },
            onEmpty () {
                this.form.checkpoint = '';
            },
            onRentSubmit () {
                if ( this.rentData.game == '' || this.rentData.game == null) {
                    this.$toaster.warning('Select Game');
                    return;
                }
                this.isRentLoading = true;
                let  uploadInfo = {
                    game_id: this.rentData.game.id,
                    availability: this.rentData.availability,
                    max_week: this.rentData.max_week,
                    platform_id: this.rentData.platform.id,
                    disk_condition_id: this.rentData.disk_condition.id,
                    disk_image: this.rentData.disk_image,
                    cover_image: this.rentData.cover_image,
                    checkpoint_id: this.rentData.checkpoint.id,
                }
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }

                this.$api.post('rents', uploadInfo, config)
                    .then(response => {
                        this.isRentLoading = false;
                        this.$toaster.success('Post submitted');
                        setTimeout(function(){
                            window.location.reload();
                        }, 2000);
                    });
            },
            clickHandler(item) {
              // event fired when clicking on the input
            },
            onSelected(item) {
              this.rentData.game = item.item;
              this.gamePlatform = true;
                this.$api.get('base-price/calculate/' + this.rentData.game.id).then (response =>
                {
                    this.basePrices = response.data;
                })
            },
            onInputChange(text) {
              // event fired when the input changes
              // console.log(text)
            },
            /**
             * This is what the <input/> value is set to when you are selecting a suggestion.
             */
            getSuggestionValue(suggestion) {
              return suggestion.item.name;
            },
            focusMe(e) {
              // console.log(e) // FocusEvent
            },
            // formattedDate(date) {
            //   const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            //   let birthDate = new Date(date)
            //   return birthDate.getDate() + " " + months[birthDate.getMonth()] + " " + birthDate.getFullYear()
            // },
            todayDate() {
              var today = new Date();
              var dd = today.getDate() + 1;

              var mm = today.getMonth()+1;
              var yyyy = today.getFullYear();

              if(dd<10)
              {
                dd='0'+dd;
              }

              if(mm<10)
              {
                mm='0'+mm;
              }
              return yyyy+'-'+mm+'-'+dd;

            },
            adjustRentedWeek: function(adjustmentType) {
                if (adjustmentType == 'increase') {
                    this.rentData.max_week =this.rentData.max_week + 1; 
                    return;
                }

                if (adjustmentType == 'decrease' && this.rentData.max_week > 1) {
                    this.rentData.max_week = this.rentData.max_week - 1;
                    return;
                }
            }
        },
        created() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            this.$api.get('rents?include=game,platform,diskCondition,checkpoint', config).then(response =>
            {
                this.rents = response.data.data
                console.log(this.rents, 'rents')
            });

            this.$api.get('lends', config).then(response =>
            {
                this.lends = response.data
                console.log(this.lends, 'lends');
            });

            this.$root.$on('rentPost', () => {
                $('#v-pills-overview-tab').removeClass('active');
                $('#v-pills-overview').removeClass('active');
                $('#v-pills-overview').removeClass('show');
                $('#v-pills-post-rent-tab').addClass('active');
                $('#v-pills-post-rent').addClass('active');
                $('#v-pills-post-rent').addClass('show');
              });

            //rent posts
            this.$api.get('games?include=platforms').then(response =>
            {
                this.games = response.data.data
                console.log(this.games)
            });

            this.$api.get('platforms').then (response =>
            {
                this.platforms = response.data.data
            });

            this.$api.get('disk-conditions').then (response =>
            {
                this.diskConditions = response.data.data
            });

            this.$api.get('checkpoints?include=area').then (response =>
            {
                this.checkpoints = response.data.data
            });

            this.$store.watch(
                (state)=>{
                    return this.$store.state.user // could also put a Getter here
                },
                (newValue, oldValue)=>{
                    this.user = newValue;
                    console.log('newuser: ', newValue)
                },
                //Optional Deep if you need it
                { deep:true }
            );
        },
        computed: {
          filteredOptions() {
            return [
              {
                data: this.games.filter(option => {
                  return option.name.toLowerCase().indexOf(this.gameName.toLowerCase()) > -1;
                })
              }
            ];
          }
        },

        mounted() {
            document.body.classList.add('body-position')
        },
        destroyed() {
            document.body.classList.remove('body-position')
        }
    }
</script>
<style>
.demo {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input {
  width: 100%;
  padding: 0.5rem;
}

ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
li:hover {
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 280px;
}

#autosuggest { width: 100%; display: block;}
.autosuggest__results-item--highlighted {
  background-color: rgba(51, 217, 178,0.2);
}
</style>
