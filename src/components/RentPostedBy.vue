<template>
    <div>
        <section class="game-available-section">
            <div class="container">
                <h2 class="text-center mb-5">{{ $t('available_now', $store.state.locale) }} !</h2>
                <!-- Remind me -->
                <div class="game-remind-me" v-if="reminder">
                    <input id="reminder" type="checkbox"  @change="submitReminder($event)" :checked="reminderChecked">
                    <label for="reminder">{{ $t('remind_me_when_available', $store.state.locale) }}</label>
                </div>
                <div class="game-available-section--table">
                    <table class="table table-borderless rented-dashbord">
                        <thead class="">
                        <tr>
                            <th scope="col">{{ $t('game_owner', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('status', $store.state.locale) }}</th>
<!--                            <th scope="col">Checkpoint</th>-->
                            <th scope="col">{{ $t('disk_type', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('platform', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('create_post', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('available_for', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('price_for_1st_week', $store.state.locale) }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(rent, index) in rentPosts" :key="index" @click="setModalData(rent)" :class="{disablePost: rent.user_id === $store.state.userId || rent.rented_user_id !== null}">
                            <td scope="col" v-if="rent.user.data.image"><img :src="rent.user.data.image" alt="renter">{{ rent.user.data.name }}</td>
                            <td scope="col" v-else><img width="80px" v-if="rent.user.data.gender === 'Male'" src="../assets/img/male.png" alt="renter"><img width="80px" v-else-if="rent.user.data.gender === 'Female'" src="../assets/img/female.png" alt="renter"><img v-else src="../assets/img/avatar.png" width="80px" alt="renter">{{ rent.user.data.name }}</td>
                            <td scope="col" v-if="rent.rented_user_id !== null"><span>Rented</span></td>
                            <td scope="col" v-else-if="rent.user_id === $store.state.userId">Owner</td>
                            <td scope="col" v-else>Available</td>
                            <!--                            <td scope="col" v-if="rent.checkpoint">{{ rent.checkpoint.data.area.data.name }}</td>-->
                            <td scope="col" v-else>Not Set</td>
                            <td scope="col" v-if="rent.disk_type == 1">Physical Disk</td>
                            <td scope="col" v-else>Digital Disk</td>
                            <td scope="col"> {{ rent.platform.data.name }}
<!--                                <img :src="rent.platform.data.url" :alt="rent.platform.data.name">-->
                            </td>
                            <td scope="col">{{ formattedDate(rent.availability_from_date) }}</td>
                            <td scope="col"><span>{{ rent.max_number_of_week}} week(s)</span></td>
                            <td>
                                <div>
<!--                                    <del class="mr-4">-->
<!--                                        <span> ৳</span> {{ rent.price_combination.regular_price}}-->
<!--                                    </del>-->
                                    <span class="new-price">
                                        <span>৳</span> {{ rent.price_combination.regular_price}}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div v-if="rentModal">
                        <transition name="modal">
                            <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal share-post-modal">
                                <div class="modal-wrapper">
                                    <div class="modal-dialog modal-dialog-centered max-md-760" role="document">
                                        <div class="modal-content">
                                            <h2 class="modal-title m-auto" id="exampleModalLabel" v-if="modalData">{{ modalData.game.data.name }}</h2>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" @click="rentModal = false" class="close-modal"></span>
                                            </button>
                                            <div class="modal-body-content">
                                                <ValidationObserver v-slot="{ handleSubmit }">
                                                    <div>
                                                        <div class="seller-information border-0">
                                                            <table class="w-full w-lg-75 share-post-modal--bottom-table">
                                                                <tbody class="text-left">
                                                                    <tr>
                                                                        <td>{{ $t('platform', $store.state.locale) }} :</td>
                                                                        <td v-if="modalData">
                                                                            <img :src="modalData.platform.data.url" alt="ps4">
                                                                        </td>
                                                                    </tr>
                                                                    <tr v-if="modalData.diskCondition">
                                                                        <td>{{ $t('disk_condition', $store.state.locale) }} :</td>
                                                                        <td v-if="modalData">{{ modalData.diskCondition.data.name_of_type }} ({{ modalData.diskCondition.data.description }})</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>{{ $t('create_post', $store.state.locale) }} :</td>
                                                                        <td v-if="modalData">{{ formattedDate(modalData.availability_from_date) }}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{{ $t('maximum_rent_for', $store.state.locale) }} :</td>
                                                                        <td v-if="modalData">{{ modalData.max_number_of_week}} week(s)</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>{{ $t('posted_by', $store.state.locale) }} :</td>
                                                                        <td v-if="modalData">{{ modalData.user.data.name }}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <span v-if="isExistsInCart" class="text-center d-block">{{ $t('already_in_cart', $store.state.locale) }}</span>
                                                        <div class="seller-information mt-4">
                                                            <div class="text-center">
                                                                <h2>{{ $t('necessary_info', $store.state.locale) }}</h2>
                                                            </div>
                                                            <table class="w-100 share-post-modal--bottom-table">
                                                                <tbody class="text-left">
                                                                <tr>
                                                                    <td class="align-middle p-0 pb-3 pb-sm-0">{{ $t('select_week', $store.state.locale) }} :</td>
                                                                    <td class="p-0">
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
                                                                    <td>{{ $t('rent_cost', $store.state.locale) }} :</td>
                                                                    <td><span>৳ </span>{{ price }}</td>
                                                                </tr>
                                                                <tr v-if="form.week">
                                                                    <td>{{ $t('rent_start_date', $store.state.locale) }} :</td>
                                                                    <td>{{ rentStartDate }}</td>
                                                                </tr>
                                                                <tr v-if="form.week">
                                                                    <td>{{ $t('rent_end_date', $store.state.locale) }} :</td>
                                                                    <td>{{ returnDate }}</td>
                                                                </tr>
                                                                <tr v-if="requiredAddress">
                                                                    <td>{{ $t('delivery_type', $store.state.locale) }} :</td>
                                                                    <td v-if="modalData">
                                                                        <ValidationProvider name="Delivery type" :rules="{required: requiredAddress}" v-slot="{ errors }">
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
                                                                    <td>{{ $t('checkpoint_details', $store.state.locale) }} :</td>
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
                                                    <div class="d-flex justify-content-center mt-5" v-if="!isExistsInCart">
                                                        <a href="javascript:void(0)" class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative" @click.prevent="handleSubmit(onAddToCart)">
                                                            <div class="position-relative"><i class="fas fa-shopping-cart mr-2"></i> {{ $t('add_to_cart', $store.state.locale) }}</div>
                                                            <span></span>
                                                        </a>
                                                    </div>
                                                </ValidationObserver>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div v-if="registrationModal">
                        <transition name="modal">
                            <div class="modal-mask seller-information-modal upgrade-modal cart-warning-modal multiple-user-warning-modal z-index-99">
                                <div class="modal-wrapper">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" @click="registrationModal = false" class=""></span>
                                            </button>
                                            <div class="modal-body-content">
                                                <p>{{ $t('rookie_sms_part_1', $store.state.locale) }}
                                                    <a href="/rookie" class="text-secondery"> Rookie</a>
                                                    {{ $t('rookie_sms_part_2', $store.state.locale) }}
                                                    <a href="/elite" class="text-secondery">ELITE.</a>
                                                    {{ $t('rookie_sms_part_3', $store.state.locale) }}
                                                </p>
                                                <div class="d-flex flex-column align-items-center flex-sm-row justify-content-center mt-5">
                                                    <div class="modal-content--description--form--call">
                                                        <p>{{ $t('please_call_contact', $store.state.locale) }}</p>
                                                        <p>01886-614533</p>
                                                    </div>
                                                    <span class="modal-or">{{ $t('or', $store.state.locale) }}</span>
                                                    <div class="modal-content--description--form--call">
                                                        <router-link to="/contacts" class="btn--secondery secondery-border"><span>{{ $t('form_fillup', $store.state.locale) }}</span></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
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
                rentModal: false,
                registrationModal: false,
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
                achievedDiscount: null,
                requiredAddress: true,
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
                    this.price = response.data.price.regular_price + response.data.price.regular_commission;
                })
            },
            setModalData(rent) {
                if (rent.user_id === this.$store.state.userId || rent.rented_user_id !== null) {
                    return
                }
                if (this.user_type == false && rent.disk_type == true) {
                    this.registrationModal = true;
                    return
                }
                this.rentModal = true;
                this.form.week = '';
                if (rent.disk_type == 0) {
                    this.requiredAddress = false
                }

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
                    // this.$store.dispatch('addToCart', {
                    //     rent: this.modalData,
                    //     lendWeek: this.form.week,
                    //     deliveryType: this.form.deliveryType,
                    //     deliveryAddress: this.form.address
                    // });
                    this.modalData = false;
                    this.$router.push('/cart')
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

            this.$api.get('rent-posted-users/' + this.slug + '?include=game,game.basePrice,platform,diskCondition,user,checkpoint.area.thana.district').then(response => {
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

          this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                this.achievedDiscount = false;
                this.user_type = response.data.data.is_verified;
                this.achievedDiscount = response.data.data.achieve_discount;
                if (this.achievedDiscount == null){
                    this.achievedDiscount = false;
                }
            });
            this.$api.get('available-rent/' + this.slug, config).then(response => {
                if (response.data.available == false) {
                    this.reminder = true
                }
            });
        },
    }
</script>
