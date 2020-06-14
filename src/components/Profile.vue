<template>
    <div>
        <!-- user profile -->
        <section class="user-profile sign-in-bg">
            <div class="conatainer-fluid user-profile-width">
                <div class="row">
                    <div class=" col-xl-6 offset-xl-3 user-profile-width-padding">
                        <div class="card">
                            <div class="d-flex justify-content-between">
                                <div class="current-balance">
                                    <h5>Current Balance</h5>
                                    <span>${{ profile.wallet }}</span>
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
                                <a href="#"><img :src="$backendPath+'users/'+profile.image" alt="user image"></a>
                            </div>
                            <div class="user-details">
                                <!-- tabs -->
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="about" aria-selected="true">About</a>
                                    </li>
<!--                                    <li class="nav-item" role="presentation">-->
<!--                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>-->
<!--                                    </li>-->
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>
                                <!-- end tabs -->
                                <!-- tabs content -->
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Name</th>
                                                <td>{{ profile.name }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Gender</th>
                                                <td>{{ profile.gender }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Date of Birth</th>
                                                <td>{{ profile.birth_date }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
<!--                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>-->
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Email</th>
                                                <td>{{ profile.email }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Mobile No</th>
                                                <td>{{ profile.phone_number }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Address</th>
                                                <td>{{ profile.address }}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">NID</th>
                                                <td>783447838220</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
                profile: {}
            }
        },
        created() {
            this.profile = this.$store.state.profile
            console.log(this.profile);
        }
    }
</script>