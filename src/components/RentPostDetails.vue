<template>
    <div>
        <!-- games header section -->
        <section class="user-profile-heading" v-if="post != null">
            <img :src="post.game.data.coverImage" alt="profile bg" class="img-fluid user-profile-bg">
        </section>
        <section class="user-profile-heading" v-else>
            <img src="../assets/img/profile-bg.png" alt="profile bg" class="img-fluid user-profile-bg">
        </section>
        <div class="container games-view primary-bg">
            <div class="row max-400 mx-auto" v-if="post != null">
                <div class="col-12 mb-5">
                    <h3 class="f-s-28 gil-bold">{{ post.game.data.name }}</h3>
                </div>
                <div class="col-6">
                    <div class="mb-4">
                        <p class="text-white mb-1">{{ $t('disk_condition', $store.state.locale) }}</p>
                        <p class="text-secondery gil-bold mb-0" v-if="post.diskCondition">{{ post.diskCondition.data.name_of_type }}</p>
                        <p class="text-secondery gil-bold mb-0" v-else>N/A</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">{{ $t('renter_name', $store.state.locale) }}</p>
                        <p class="text-secondery gil-bold mb-0" v-if="post.renter">{{ post.renter.data.name }}</p>
                        <p class="text-secondery gil-bold mb-0" v-else>N/A</p>
                    </div>
                      <div class="mb-4">
                        <p class="text-white mb-1">{{ $t('status', $store.state.locale) }}</p>
                        <p class="text-secondery gil-bold mb-0" v-if="post.status == 2"><span class="rejected br-0 f-s-16">Rejected</span></p>
                        <p class="text-secondery gil-bold mb-0" v-else-if="post.lend != null">Rented for {{ post.lend.data.lend_week }} week(s)</p>
                        <p class="text-secondery gil-bold mb-0" v-else >Available for {{ post.max_number_of_week }} week(s)</p>
                    </div>
                    <div class="mb-4" v-if="renter == true">
                        <label class="toggle-switch mt-0 mt-sm-2">
                            <input type="checkbox" @change="postStatusChange($event, post.id)" :checked="post.status_by_user == 1" :disabled="post.renter">
                            <span><span>Inactive</span>
                            <span>Active</span></span>
                            <a class="toggle-ball"></a>
                        </label>
                    </div>
                </div>
                <div class="col-6">
                   <div class="mb-4">
                        <p class="text-white mb-1">{{ $t('disk_type', $store.state.locale) }}</p>
                        <p class="text-secondery gil-bold mb-0" v-if="post.disk_type == 1">Physical copy</p>
                        <p class="text-secondery gil-bold mb-0" v-else>Digital copy</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">{{ $t('lenders_name', $store.state.locale) }}</p>
                        <p class="text-secondery gil-bold mb-0">{{ post.user.data.name }} {{ post.user.data.last_name }}</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">{{ $t('platform', $store.state.locale) }}</p>
                        <p class="text-secondery gil-bold mb-0">{{ post.platform.data.name }}</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">{{ $t('available_from', $store.state.locale) }}</p>
                        <p class="text-secondery gil-bold mb-0">{{ formattedDate(post.availability_from_date)}}</p>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <a href="#" class="btn--secondery w-75"
                       v-clipboard:copy="copyUrl + post.id + '/' + post.game.data.slug "
                       v-clipboard:success="onCopy"
                       v-clipboard:error="onError"
                       v-if="renter == true"><span style="text-transform: uppercase">{{ $t('share_now', $store.state.locale) }}</span></a>
                    <a href="#" class="btn--secondery w-75" v-else-if="$store.getters.ifAuthenticated" @click="rentModal = true"><span style="text-transform: uppercase">{{ $t('rent_now', $store.state.locale) }}</span></a>
                    <router-link to="/login" class="btn--secondery w-75"
                       v-else><span style="text-transform: uppercase">{{ $t('rent_now', $store.state.locale) }}</span></router-link>
                </div>
                <div v-if="rentModal">
                    <transition name="modal">
                        <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
                            <div class="modal-wrapper">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" @click="rentModal = false" class="close-modal"></span>
                                        </button>
                                        <div class="modal-body-content">
                                            <ValidationObserver v-slot="{ handleSubmit }">
                                                <div>
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td>{{ $t('platform', $store.state.locale) }} :</td>
                                                            <td v-if="post">
                                                                <img :src="post.platform.data.url" alt="ps4">
                                                            </td>
                                                        </tr>
                                                        <tr v-if="post.diskCondition">
                                                            <td>{{ $t('disk_condition', $store.state.locale) }} :</td>
                                                            <td v-if="post">{{ post.diskCondition.data.name_of_type }} ({{ post.diskCondition.data.description }})</td>

                                                        </tr>
                                                        <tr>
                                                            <td>{{ $t('available_from', $store.state.locale) }} :</td>
                                                            <td v-if="post">{{ formattedDate(post.availability_from_date) }}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>{{ $t('maximum_rent_for', $store.state.locale) }} :</td>
                                                            <td v-if="post">{{ post.max_number_of_week}} week(s)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>{{ $t('posted_by', $store.state.locale) }} :</td>
                                                            <td v-if="post">{{ post.user.data.name }}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
<!--                                                    <span v-if="isExistsInCart" class="text-center d-block">{{ $t('already_in_cart', $store.state.locale) }}</span>-->
                                                    <div class="seller-information">
                                                        <div class="text-center">
                                                            <h2>{{ $t('necessary_info', $store.state.locale) }}</h2>
                                                        </div>
                                                        <table>
                                                            <tbody>
                                                            <tr>
                                                                <td>{{ $t('select_week', $store.state.locale) }} :</td>
                                                                <td>
                                                                    <ValidationProvider name="Rent Week" rules="required" v-slot="{ errors }">
                                                                        <select class="form-control" id="exampleFormControlSelect1" v-if="post" @change="rentCost(form.week, post.disk_type, post.game_id)" v-model="form.week">
                                                                            <option value="" selected disabled>Please select rent week</option>
                                                                            <option v-for="n in post.max_number_of_week" :value="n" :key="n">For {{n}} Week</option>
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
                                                                <td>{{ $t('rent_start_date', $store.state.locale) }} :</td>
                                                                <td>{{ returnDate }}</td>
                                                            </tr>
                                                            <tr v-if="requiredAddress">
                                                                <td>{{ $t('delivery_type', $store.state.locale) }} :</td>
                                                                <td v-if="post">
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
                                                            <tr v-if="form.deliveryType !== '0' && form.deliveryType !== '' && post">
                                                                <td>{{ $t('checkpoint_details', $store.state.locale) }} :</td>
                                                                <td>
                                                                    <div class="seller-address">
                                                                        <i class="fas fa-map-marker-alt"></i>
                                                                        Flat: {{ post.checkpoint.data.flat_no }}, House: {{post.checkpoint.data.house_no}}/{{post.checkpoint.data.road_no}},
                                                                        {{ post.checkpoint.data.area.data.name }},
                                                                        {{ post.checkpoint.data.area.data.thana.data.name }}, {{post.checkpoint.data.area.data.thana.data.district.data.name}}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div class="modal-footer justify-content-center">
                                                    <a href="javascript:void(0)" class="btn--secondery" @click.prevent="handleSubmit(onAddToCart)">
                                                        <span><i class="fas fa-shopping-cart mr-2"></i> {{ $t('add_to_cart', $store.state.locale) }}</span>
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {Clipboard},
        name: 'RentPostDetails',
        props: ['id','slug'],
        data() {
            return {
                rentModal : false,
                post : null,
                price: 0,
                copyUrl : '',
                requiredAddress : true,
                form: {
                    week: '',
                    deliveryType: '',
                    address: ''
                },
            }
        },
        computed: {
            returnDate() {
                let today = new Date();
                let hours = today.getHours();

                if (this.post.disk_type == 0 && hours >= 12) {
                    today.setDate(today.getDate() + 2 + this.form.week * 7 );
                } else {
                    today.setDate(today.getDate() + 1 + this.form.week * 7 );
                }
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

                return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
            },
            rentStartDate() {
                let today = new Date();
                let hours = today.getHours();

                if (this.post.disk_type == 0 && hours >= 12) {
                    today.setDate(today.getDate() + 2 );
                } else {
                    today.setDate(today.getDate() + 1 );
                }
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

                return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
            },
        },
        methods: {
            onCopy: function (e) {
                this.$toaster.success( this.$t('link_copied_successfully', this.$store.state.locale) );
            },
            onError: function (e) {
                this.$toaster.warning( this.$t('link_copied_failed', this.$store.state.locale) );
                console.log(e);
            },
            renter() {
               if (this.$store.state.user == null){
                   return false;
               }
               if (this.$store.state.user.id == this.post.user.data.id) {
                   return true;
               }
            },
            formattedDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
            postStatusChange(event, id) {
                var status = event.target.checked;
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };
                let data = {
                    id: id,
                    status: status,
                };

                this.$api.post('post-status-update', data, config).then(response => {
                    if (response.data.error == false) {
                        this.coverModal = false;
                        this.$toaster.success(this.$t('rent_post_status', this.$store.state.locale));
                    }else {
                        this.$toaster.fail(response.data.message);
                    }

                });
            },
            rentCost(week, disk_type, game_id) {
                this.$api.get('base-price/game-calculation/' + game_id + '/' + week + '/' + disk_type).then(response => {
                    this.price = response.data.price.discount_price + response.data.price.discount_commission;
                })
            },
            onAddToCart() {
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };
                let data = {
                    rent_id: this.post.id,
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
                    this.rentModal = false;
                    this.$router.push('/cart');
                })
            },
        },
        created() {
            this.copyUrl = process.env.VUE_APP_BASE;
            window.scrollTo(0,0);
            this.$api.get('rents/' + this.$route.params.id + '?include=diskCondition,game.genres,user,renter,platform,checkpoint.area.thana.district').then(response => {
                console.log(response);
                this.post = response.data.data;
                if (this.post.disk_type == 0) {
                    this.requiredAddress = false
                }
            });
        }
    }
</script>
