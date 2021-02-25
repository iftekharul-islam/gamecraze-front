<template>
    <div>
        <section class="game-available-section">
            <div class="container">
                <div class="game-available-section--table">
                    <table class="table table-borderless rented-dashbord">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Game Owner </th>
                            <th scope="col">Status</th>
                            <th scope="col">Checkpoint</th>
                            <th scope="col">Disk type</th>
                            <th scope="col">Available From</th>
                            <th scope="col">Available For</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(rent, index) in rentPosts" :key="index"  data-toggle="modal" :data-target="(user_type == false & rent.disk_type == true) ? '#warning' : '#rent_now'" @click="setModalData(rent)" :class="{disablePost: rent.user_id === $store.state.userId || rent.rented_user_id !== null}">
                            <td scope="col" v-if="rent.user.data.image"><img :src="rent.user.data.image" alt="renter">{{ rent.user.data.name }}</td>
                            <td scope="col" v-else><img width="80px" v-if="rent.user.data.gender === 'Male'" src="../assets/img/male.png" alt="renter"><img width="80px" v-else-if="rent.user.data.gender === 'Female'" src="../assets/img/female.png" alt="renter"><img v-else src="../assets/img/avatar.jpg" width="80px" alt="renter">{{ rent.user.data.name }}</td>
                            <td scope="col" v-if="rent.rented_user_id !== null">Rented</td>
                            <td scope="col" v-else-if="rent.user_id === $store.state.userId">Owner</td>
                            <td scope="col" v-else>Available</td>
                            <td scope="col" v-if="rent.checkpoint">{{ rent.checkpoint.data.area.data.name }}</td>
                            <td scope="col" v-else>Not Set</td>
                            <td scope="col" v-if="rent.disk_type == 1">Physical Disk</td>
                            <td scope="col" v-else>Digital Disk</td>
                            <td scope="col">{{ formattedDate(rent.availability_from_date) }}</td>
                            <td scope="col">{{ rent.max_number_of_week}} week(s)</td>
                        </tr>
                        </tbody>
                    </table>

                    <div v-if="modalData && modalData.user_id !== $store.state.userId" class="modal fade seller-information-modal" id="rent_now" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <img :src="modalData.platform.data.url" alt="ps4">
                                            </td>
                                        </tr>
                                        <tr>
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
                                                    <select class="form-control" id="exampleFormControlSelect1" v-if="modalData" v-model="form.week">
                                                        <option value="" selected disabled>Please select rent week</option>
                                                        <option v-for="n in modalData.max_number_of_week" :value="n" :key="n">For {{n}} Week</option>
                                                    </select>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                  </ValidationProvider>
                                                </td>
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
                                                        <option :value="modalData.checkpoint_id" :disabled="modalData.checkpoint_id == null ">Checkpoint</option>
                                                    </select>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                  </ValidationProvider>
                                                </td>
                                            </tr>
                                            <tr v-if="form.deliveryType === '0' && modalData">
                                                <td>Delivery Address:</td>
                                                <td>
                                                  <input type="text" class="form-control" v-model="form.address">
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
                                    <a href="javascript:void(0)" class="btn--secondery" @click.prevent="handleSubmit(onAddToCart)" data-dismiss="modal">
                                      <span><i class="fas fa-shopping-cart"></i> ADD TO CART</span>
                                    </a>
                                </div>
                              </ValidationObserver>
                            </div>
                        </div>
                    </div>
                    <div v-if="modalData && modalData.user_id !== $store.state.userId" class="modal fade seller-information-modal upgrade-modal" id="warning" tabindex="-1" aria-labelledby="warningModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                    <button type="button" class="close m-0 close-modal" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"></span>
                                    </button>
                                <p>Opps !!! You exceeded renting limit. Return your current games to rent new ones</p>
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
                rentPosts: [],
                user_type: 0,
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
                isExistsInCart: false
            }
        },
        computed: {
          returnDate() {
            let today = new Date();
            let available = new Date(this.modalData.availability_from_date);
            if (today > available)
            {
              today.setDate(today.getDate() + this.form.week * 7);
              const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
            }
            else {
              available.setDate(available.getDate() + this.form.week * 7);
              const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              return available.getDate() + " " + months[available.getMonth()] + " " + available.getFullYear()
            }
          },
          availableRentPosts() {
            return this.rentPosts.filter(post => {
              let today = new Date();
              let available = new Date(post.availability_from_date);
              return today < available;
            })
          },
          rentStartDate() {
            let today = new Date();
            let available = new Date(this.modalData.availability_from_date);
            if (today > available)
            {
              const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
            }
            else {
              const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              return available.getDate() + " " + months[available.getMonth()] + " " + available.getFullYear()
            }
          }
        },
        methods: {
          setModalData(rent) {
            if (this.checkIfExistsInCart(this.id)) {
              this.isExistsInCart = true;
            }
            this.modalData = rent;
            // console.log(this.modalData)
          },
          formattedDate(date) {
              const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              let formattedDate = new Date(date)
              return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
          },
          onAddToCart() {
            // console.log(this.id, 'id');
            // console.log(this.$store.state.userId, 'user id');
            // console.log(this.$store.state.postId.length, 'post length');
            // console.log(this.lends.length, 'lends');

            // this.$store.dispatch('pushPostId', this.modalData.id);
            // this.$store.dispatch('pushLendWeek', this.form.week);
            // this.$store.dispatch('pushCheckpointId', this.form.deliveryType);
            
            this.$store.dispatch('addToCart', { 
              rent: this.modalData,
              lendWeek: this.form.week, 
              deliveryType: this.form.deliveryType, 
              deliveryAddress: this.form.address
            });
          }, 
          checkIfExistsInCart(gameId) {
            let cartItems = localStorage.getItem('cartItems');
            if (cartItems) {
              cartItems = JSON.parse(cartItems);
              let isExists = cartItems.some(item => {
                if (item.rent.game.data.id == gameId) {
                  return true;
                }
              });

              return isExists;
            }
            return false;
          }
        },
        created() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            }
            this.$api.get('rent-posted-users/' + this.slug + '?include=game,game.basePrice,platform,diskCondition,user,checkpoint.area.thana.district').then(response => {
                this.rentPosts = response.data.data;
                console.log('rent posts');
                console.log(this.rentPosts);
            });

            this.$api.get('user/details', config).then(response => {
                this.user_type = response.data.data.is_verified;
                console.log(this.user_type);
            });

          // let config = {
          //   headers: {
          //     'Authorization': 'Bearer ' + this.$store.state.token
          //   }
          // };
          // if (this.$store.state.userId != null) {
          //   this.$api.get('user/details', config)
          //       .then (response =>
          //       {
          //         this.userDetails = response.data.data;
          //         console.log(this.userDetails, 'User details');
          //       })
          // }
          // localStorage.setItem('cartItems', '');
        },
        
    mounted() {
        document.body.classList.add('body-position')
    },
    destroyed() {
        document.body.classList.remove('body-position')
    }
    }
</script>
