<template>
    <div>
        <section class="game-available-section">
            <div class="container">
                <h2 class="text-center mb-5">Available Right Now!</h2>
                <!-- Remind me -->
                <div class="game-remind-me" v-if="reminder">
                    <input id="reminder" type="checkbox"  @change="submitReminder($event)" :checked="reminderChecked">
                    <label for="reminder">Remind me when available</label>
                </div>
                <div class="game-available-section--table">
                    <table class="table table-borderless rented-dashbord">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Game Owner </th>
                            <th scope="col">Status</th>
<!--                            <th scope="col">Checkpoint</th>-->
                            <th scope="col">Disk type</th>
                            <th scope="col">Available From</th>
                            <th scope="col">Available For</th>
                            <th scope="col">Price for 1st week</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(rent, index) in rentPosts" :key="index"  data-toggle="modal" :data-target="(user_type == false & rent.disk_type == true) ? '#warning' : '#rent_now'" @click="setModalData(rent)" :class="{disablePost: rent.user_id === $store.state.userId || rent.rented_user_id !== null}">
                            <td scope="col" v-if="rent.user.data.image"><img :src="rent.user.data.image" alt="renter">{{ rent.user.data.name }}</td>
                            <td scope="col" v-else><img width="80px" v-if="rent.user.data.gender === 'Male'" src="../assets/img/male.png" alt="renter"><img width="80px" v-else-if="rent.user.data.gender === 'Female'" src="../assets/img/female.png" alt="renter"><img v-else src="../assets/img/avatar.png" width="80px" alt="renter">{{ rent.user.data.name }}</td>
                            <td scope="col" v-if="rent.rented_user_id !== null">Rented</td>
                            <td scope="col" v-else-if="rent.user_id === $store.state.userId">Owner</td>
                            <td scope="col" v-else>Available</td>
<!--                            <td scope="col" v-if="rent.checkpoint">{{ rent.checkpoint.data.area.data.name }}</td>-->
                            <td scope="col" v-else>Not Set</td>
                            <td scope="col" v-if="rent.disk_type == 1">Physical Disk</td>
                            <td scope="col" v-else>Digital Disk</td>
                            <td scope="col">{{ formattedDate(rent.availability_from_date) }}</td>
                            <td scope="col">{{ rent.max_number_of_week}} week(s)</td>
                            <td>
                                <del class="mr-4"><span> ৳</span> {{ rent.price_combination.regular_price}}</del>
                                <span class="new-price"><span>৳</span> {{ rent.price_combination.discount_price}}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div v-if="modalData && modalData.user_id !== $store.state.userId && modalData.rented_user_id === null" class="modal fade seller-information-modal" id="rent_now" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <ValidationObserver v-slot="{ handleSubmit }">
                                <div class="modal-header text-center">
                                    <h2 class="modal-title m-auto" id="exampleModalLabel" v-if="modalData">{{ modalData.game.data.name }}</h2>
                                    <button type="button" class="close m-0" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"></span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <table class="table table-borderless seller-information-modal--table-top">
                                        <tbody>
                                        <tr>
                                            <td>Platform:</td>
                                            <td v-if="modalData">
                                                <a :href="'/games?platforms=' + platform.slug" v-for="(platform) in modalData.game.data.platforms.data" :key="platform.id"><img :src=platform.url :alt="platform.name" class="mr-2"></a>
                                            </td>
                                        </tr>
                                        <tr v-if="modalData.diskCondition">
                                            <td>Disk Condition:</td>
                                            <td v-if="modalData">{{ modalData.diskCondition.data.name_of_type }} ({{ modalData.diskCondition.data.description }})</td>

                                        </tr>
                                        <tr>
                                            <td>Available From:</td>
                                            <td v-if="modalData">{{ formattedDate(modalData.availability_from_date) }}</td>
                                        </tr>
                                        <tr>
                                            <td>Maximum Rent For:</td>
                                            <td v-if="modalData">{{ modalData.max_number_of_week}} week(s)</td>
                                        </tr>
                                        <tr>
                                            <td>Posted By:</td>
                                            <td v-if="modalData">{{ modalData.user.data.name }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <span v-if="isExistsInCart" class="text-center d-block">Already added in cart</span>
                                    <div v-if="!isExistsInCart" class="seller-information">
                                        <div class="text-center">
                                            <h2>Provide Necessary Information</h2>
                                        </div>
                                        <table class="table table-borderless seller-information-modal--table-bottom">
                                            <tbody>
                                            <tr>
                                                <td>Select Rent Week:</td>
                                                <td>
                                                  <ValidationProvider name="Rent Week" rules="required" v-slot="{ errors }">
                                                    <select class="form-control" id="exampleFormControlSelect1" v-if="modalData" @change="rentCost(form.week, modalData.disk_type, modalData.game_id)" v-model="form.week">
                                                        <option value="" selected disabled>Please select rent week</option>
                                                        <option v-for="n in modalData.max_number_of_week" :value="n" :key="n">For {{n}} Week</option>
                                                    </select>
                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                  </ValidationProvider>
                                                </td>
                                            </tr>
                                            <tr v-if="form.week">
                                                <td>Rent Cost:</td>
                                                <td><span>৳ </span>{{ price }}</td>
                                            </tr>
                                            <tr v-if="form.week">
                                                <td>Rent Start Date:</td>
                                                <td>{{ rentStartDate }}</td>
                                            </tr>
                                            <tr v-if="form.week">
                                                <td>Return Date:</td>
                                                <td>{{ returnDate }}</td>
                                            </tr>
                                            <tr>
                                                <td>Delivery Type:</td>
                                                <td v-if="modalData">
                                                  <ValidationProvider name="Delivery type" rules="required" v-slot="{ errors }">
                                                    <select class="form-control" id="exampleFormControlSelect2" v-model="form.deliveryType">
                                                        <option value="" disabled selected="selected">Please select delivery type</option>
                                                        <option value="0">Home Delivery</option>
<!--                                                        <option :value="modalData.checkpoint_id" :disabled="modalData.checkpoint_id == null ">Checkpoint</option>-->
                                                    </select>
                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                  </ValidationProvider>
                                                </td>
                                            </tr>
                                            <tr v-if="form.deliveryType !== '0' && form.deliveryType !== '' && modalData">
                                                <td>Checkpoint Details:</td>
                                                <td>
                                                    <div class="seller-address">
                                                        <i class="fas fa-map-marker-alt"></i>
                                                        Flat: {{ modalData.checkpoint.data.flat_no }}, House: {{modalData.checkpoint.data.house_no}}/{{modalData.checkpoint.data.road_no}},
                                                      {{ modalData.checkpoint.data.area.data.name }},
                                                        {{ modalData.checkpoint.data.area.data.thana.data.name }}, {{modalData.checkpoint.data.area.data.thana.data.district.data.name}}
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                               
                                <div v-if="!isExistsInCart" class="modal-footer justify-content-center">
                                    <a href="javascript:void(0)" class="btn--secondery" @click.prevent="handleSubmit(onAddToCart)">
                                      <span><i class="fas fa-shopping-cart"></i> ADD TO CART</span>
                                    </a>
                                </div>
                              </ValidationObserver>
                            </div>
                        </div>
                    </div>
                    <div v-if="modalData && modalData.user_id !== $store.state.userId && modalData.rented_user_id === null" class="modal fade seller-information-modal upgrade-modal" id="warning" tabindex="-1" aria-labelledby="warningModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                    <button type="button" class="close m-0" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"></span>
                                    </button>
                                <p>Opps !!! It looks like you are a <a href="/rookie" class="text-secondery"> Rookie</a> member, to access the full features of GameHub you need
                                    to upgrade to <a href="/elite" class="text-secondery">ELITE.</a> Once upgraded you can also rent physical disks.
                                    To upgrade your account please contact us.</p>
                                <div class="modal-content--description--form">
                                    <div class="modal-content--description--form--call">
                                        <p>Please call to this number</p>
                                        <p>01886-614533</p>
                                    </div>
                                    <span class="modal-or">Or</span>
                                    <div class="modal-content--description--form--call">
                                        <a href="/contacts" class="btn--secondery secondery-border" target="_blank"><span>FILL UP FORM</span></a>
                                    </div>
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
        props: ['slug'],
        data() {
            return {
                agreement: '',
                rentPosts: [],
                user_type: 0,
                price: 0,
                rents: [],
                lends: [],
                show: false,
                modalData: null,
                form: {
                    week: '',
                    deliveryType: '',
                    address: ''
                },
                userDetails: null,
                isExistsInCart: false,
                cartItems: [],
                reminder: false,
                isChecked: '',
                reminderChecked: false,
            }
        },
        computed: {
          returnDate() {
            let today = new Date();
            var hours = today.getHours();

              if (this.modalData.disk_type == 0 && hours >= 12) {

                  today.setDate(today.getDate() + 2 + this.form.week * 7 );
              } else {

                  today.setDate(today.getDate() + 1 + this.form.week * 7 );
              }

              const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
          },
          rentStartDate() {
            let today = new Date();
            var hours = today.getHours();

              if (this.modalData.disk_type == 0 && hours >= 12) {

                  today.setDate(today.getDate() + 2 );
              } else {

                  today.setDate(today.getDate() + 1 );
              }
              const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
          }
        },
        methods: {
            submitReminder(event) {
               var checkStatus = event.target.checked;
               var gameId = this.gameId;
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
               if (checkStatus == true) {
                   this.$api.post('set-reminder/' + gameId, {game_id: gameId}, config).then(response => {
                       if (response.status === 200) {
                           this.$toaster.success(response.data.message);
                           return;
                       }
                       this.$toaster.warning(response.data.message);
                   })
               }
                if (checkStatus == false) {
                    this.$api.post('remove-reminder/' + gameId, {game_id: gameId}, config).then(response => {
                        if (response.status === 200) {
                            this.$toaster.success(response.data.message);
                            return;
                        }
                        this.$toaster.warning(response.data.message);
                    })
                }
            },
            rentCost(week, disk_type, game_id) {
                this.$api.get('base-price/game-calculation/' + game_id + '/' + week + '/' + disk_type).then(response => {
                    this.price = response.data.price.discount_price;
                })
            },
            setModalData(rent) {
                this.form.week = '';

                if (this.checkIfExistsInCart(rent.game.data.id)) {
                    this.isExistsInCart = true;
                }
                this.modalData = rent;
            },
            formattedDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
            onAddToCart() {
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                let data = {
                    rent_id: this.modalData.id,
                    rent_week: this.form.week,
                    address: this.form.address,
                };

                this.$api.post('cart-item/create', data, config).then(response => {
                    if (response.data.error == true) {
                        this.$swal('Game is already in the cart');
                    }
                    this.$store.dispatch('addToCart', {
                        rent: this.modalData,
                        lendWeek: this.form.week,
                        deliveryType: this.form.deliveryType,
                        deliveryAddress: this.form.address
                    });
                    this.modalData = false;
                })
            },
            checkIfExistsInCart(gameId) {
                if (this.cartItems != null) {
                    let isExists = this.cartItems.some(item => {
                        if (item.game_id === gameId) {
                            return true;
                        }
                    });

                    return isExists;
                }
                return false;
            }
        },
        created() {
            window.scrollTo(0,0);
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            this.$api.get('cart-items', config).then(response => {
                    this.cartItems = response.data.data.cartItems;
            });

            this.$api.get('rent-posted-users/' + this.slug + '?include=game,game.basePrice,game.platforms,diskCondition,user,checkpoint.area.thana.district').then(response => {
                this.rentPosts = response.data.data;
                this.gameId = this.rentPosts[0].game_id;
                if (this.gameId) {
                    this.$api.get('check-reminder/' + this.gameId, config).then(response => {
                        if (response.data.reminder == true) {
                            this.reminderChecked = true
                        }
                    });
                }
            });

            this.$api.get('user/details', config).then(response => {
                this.user_type = response.data.data.is_verified;
            });
            this.$api.get('available-rent/' + this.slug, config).then(response => {
                if (response.data.available == true) {
                    this.reminder = true
                }
            });
        },
    }
</script>
