<template>
    <div>

    <!-- user profile details -->
        <section class="user-profile-details">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="back mb-a-7">
                            <router-link to="/profile" class="d-flex secondery-fill-hover align-items-center">
                                <svg class="mr-3 secondery-fill-hover" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8114 14.5468C12.1234 14.3785 12.3179 14.0584 12.3179 13.7103V8.28972H23.0209C23.5614 8.28972 24 7.86127 24 7.33337C24 6.80546 23.5614 6.37702 23.0209 6.37702H12.3179V0.956419C12.3179 0.607032 12.1234 0.286973 11.8114 0.119931C11.4994 -0.0496622 11.1182 -0.038186 10.8166 0.146709L0.456894 6.52366C0.172314 6.69963 0 7.00438 0 7.33337C0 7.66235 0.172314 7.96711 0.456894 8.14308L10.8166 14.52C10.9759 14.6169 11.1574 14.6667 11.3388 14.6667C11.5007 14.6667 11.6639 14.6259 11.8114 14.5468Z" fill="white"/>
                                </svg>Back
                            </router-link>
                        </div>
                        <!-- new rented design -->
                        <div class="d-flex flex-wrap max-940 mx-auto" v-if="orderDetails">
                            <div class="max-446 mb-3 mr-sm-4 w-100 pt-a-2 pl-a-4 pb-a-6 pr-a-4 position-relative bg-game-details border-2 warning-border" v-for="(lend, index) in order.lenders.data" :key="index">
                                <!-- disk type -->
                                <div class="dashboard-content--rented--box--disk-type position-absolute top--1 right--1 bg-secondery p-2 gil-bold">
                                    <div class="disk-type text-black" v-if="lend.rent.data.disk_type == 1">Physical Copy</div>
                                    <div class="disk-type text-black" v-if="lend.rent.data.disk_type == 0">Digital Copy</div>
                                </div>
                                <div class="dashboard-content--rented--box--order-id h-30">
                                    <p v-if="lend.order">{{ lend.order.order_no }}</p>
                                    <p v-else>N/A</p>
                                </div>
                                <div class="dashboard-content--rented--box--order-name mt-3">
                                    <p v-if="lend.rent" class="f-s-20 gil-bold mb-a-3 h-60">{{ lend.rent.data.game.data.name }}</p>
                                </div>
                                <div class="d-flex flex-column flex-sm-row justify-content-between dashboard-content--rented--box--order-description">
                                        <div class=" flex-2">
                                            <div class="mb-3">
                                                <p class="mb-1">{{ $t('rent_start_date', $store.state.locale) }}</p>
                                                <p class="text-secondery">{{ formattedDate(lend.lend_date) }}</p>
                                            </div>
                                            <div>
                                                <p class="mb-1">{{ $t('duration', $store.state.locale) }}</p>
                                                <p class="text-secondery">{{ lend.lend_week }} week</p>
                                            </div>
                                        </div>
                                        <div class="duration flex-1">
                                            <div class="mb-3">
                                                <p class="mb-1">{{ $t('rent_end_date', $store.state.locale) }}</p>
                                                <div class="d-flex flex-column align-items-center duration--date text-secondery w-fit">
                                                    <p class="mb-1" v-if="lend.status === 1 || lend.status === 3 && lend.end_date">{{ formattedReturnDate(lend.end_date) }}</p>
                                                    <p class="mb-1" v-else>-</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p class="mb-1">{{ $t('amount', $store.state.locale) }}</p>
                                                <p class="text-secondery">{{ lend.lend_cost + parseInt(lend.commission)  }}</p>
                                            </div>

                                        </div>
                                </div>
                                <div class="mt-3 flex-column-reverse flex-sm-row d-flex justify-content-between">
                                        <div class="timer flex-2">
                                            <p class="mb-1">{{ $t('remaining_time', $store.state.locale) }}</p>
                                            <div v-if="lend.rent.data.disk_type == 1">
                                                <flip-countdown :deadline="endDate(lend.rent.data.disk_type, lend.updated_at, lend.lend_week)" v-if="lend.status === 3"></flip-countdown>
                                                <flip-countdown :deadline="formattedDateForTimer(lend.created_at)" v-else></flip-countdown>
                                            </div>
                                            <div v-if="lend.rent.data.disk_type == 0">
                                                <flip-countdown :deadline="endDate(lend.rent.data.disk_type, lend.updated_at, lend.lend_week)" v-if="lend.status === 3"></flip-countdown>
                                                <flip-countdown :deadline="formattedDateForTimer(lend.created_at)" v-else></flip-countdown>
<!--                                                                    <flip-countdown :deadline="endDate(lend.rent.disk_type,lend.created_at, lend.lend_week)" v-else></flip-countdown>-->
                                            </div>
                                        </div>
                                        <div class="status flex-1 mb-a-7 mb-sm-0">
                                            <p class="mb-1">{{ $t('status', $store.state.locale) }}</p>
                                            <div v-if="lend.status === 0">
                                                <span class="pending br-0 f-s-16" >Pending</span>
                                            </div>
                                            <div v-else-if="lend.status === 1">
                                                <span class="completed br-0 f-s-16" >Completed</span>
                                            </div>
                                            <div v-else-if="lend.status === 2">
                                                <span class="completed br-0  f-s-16" >Arrived at checkpoint</span>
                                            </div>
                                            <div v-else-if="lend.status === 3">
                                                <span class="completed br-0 f-s-16" >Delivered</span>
                                            </div>
                                            <div v-else-if="lend.status === 4">
                                                <span class="rejected br-0  f-s-16" >Rejected</span>
                                            </div>
                                            <div v-else-if="lend.status === 5">
                                                <span class="completed br-0 f-s-16" >Processing</span>
                                            </div>
                                            <div v-else-if="lend.status === 6">
                                                <span class="completed br-0 f-s-16" >Postponed</span>
                                            </div>
                                            <div class="mt-a-4 mt-a-sm-7" v-if="lend.status === 3">
                                                <a href="#" class="bg-secondery black-text-hover py-1 px-3 d-block text-center text-black w-fit gil-medium" @click.prevent="extendModal(lend)">Extend date</a>
                                            </div>

                                            <!-- Extend modal -->
                                            <div v-if="extendModalShow">
                                                <transition name="modal">
                                                    <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal share-post-modal">
                                                        <div class="modal-wrapper">
                                                            <div class="modal-dialog modal-dialog-centered max-md-760" role="document">
                                                                <div class="modal-content">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true" @click="extendModalShow = false" class="close-modal"></span>
                                                                    </button>
                                                                    <div class="modal-body-content">
                                                                        <ValidationObserver v-slot="{ handleSubmit }">
                                                                            <div>
                                                                                <div class="seller-information border-0">
                                                                                    <table class="w-full w-lg-75 share-post-modal--bottom-table">
                                                                                        <tbody class="text-left">
                                                                                        <tr>
                                                                                            <td>Order no :</td>
                                                                                            <td>{{ extend.orderNo }}</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>Game Name :</td>
                                                                                            <td>{{ extend.game }}</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                                <div class="seller-information mt-4">
                                                                                    <div class="text-center">
                                                                                        <h2>Provide Extend Week</h2>
                                                                                    </div>
                                                                                    <table class="w-full share-post-modal--bottom-table">
                                                                                        <tbody class="text-left">
                                                                                        <tr>
                                                                                            <td class="align-middle p-0 pb-3 pb-sm-0">{{ $t('select_week', $store.state.locale) }} :</td>
                                                                                            <td class="p-0">
                                                                                                <ValidationProvider name="Rent Week" rules="required" v-slot="{ errors }">
                                                                                                    <select class="form-control" id="exampleFormControlSelect1" @change="rentCost(extend.week, extend.disk_type, extend.game_id)" v-model="extend.week">
                                                                                                        <option value="" selected disabled>Please select rent week</option>
                                                                                                        <option v-for="n in 5" :value="n" :key="n">For {{n}} Week</option>
                                                                                                    </select>
                                                                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                                                                </ValidationProvider>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td>{{ $t('rent_cost', $store.state.locale) }} :</td>
                                                                                            <td><span>৳ </span>{{ extend.price + extend.commission}}</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>

                                                                            <div class="d-flex justify-content-center mt-5">
                                                                                <a href="javascript:void(0)" class="btn--secondery" @click.prevent="handleSubmit(extendSubmit)">
                                                                                    <span><i class="fas fa-shopping-cart mr-2"></i> {{ $t('submit', $store.state.locale) }}</span>
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
                        </div>
                        <div class="max-940 mx-auto">
                            <div class="max-446 mr-sm-4 ml-md-auto mt-5">
                                    <div class="border-b-1 border-t-1 border-white-50 p-4">
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                        <p class="mb-0 gray-text gil-medium">Subtotal</p>
                                        <p class="mb-0 gil-bold text-white">Tk. {{ order.amount - order.delivery_charge + order.discount_amount }}</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-4">
                                        <p class="mb-0 gray-text gil-medium">Delivery charge</p>
                                        <p class="mb-0 gil-bold text-white">Tk. {{ order.delivery_charge }}</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between" v-if="order.discount_amount">
                                        <p class="mb-0 gray-text gil-medium">Discount</p>
                                        <p class="mb-0 gil-bold text-white">Tk. {{ order.discount_amount }}</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between" v-if="order.wallet_amount">
                                        <p class="mb-0 gray-text gil-medium">Wallet amount</p>
                                        <p class="mb-0 gil-bold text-white">Tk. {{ order.wallet_amount }}</p>
                                    </div>
                                </div>
                                <div class="p-4 d-flex align-items-center justify-content-between">
                                    <p class="mb-0 text-secondery gil-medium"> Grand total</p>
                                    <p class="mb-0 gil-bold text-secondery">Tk {{ order.amount }}</p>
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
    import FlipCountdown from 'vue2-flip-countdown';
    export default {
        components: { FlipCountdown },
        name: 'order-details',
        props: ['id'],
        data() {
            return {
                orderDetails: false,
                extend: {
                    week: '',
                    price: 0,
                    game: '',
                    lend_id: null,
                    orderNo: '',
                    commission: 0,
                    game_id: '',
                    disk_type: ''
                },
                order: [],
                extendModalShow: false
            }
        },
        methods: {
            extendModal(lend) {
                this.extend.week = '';
                this.extend.price = 0;
                this.extend.commission = 0;

                this.extendModalShow = true;
                this.extend.game = lend.rent.data.game.data.name;
                this.extend.game_id = lend.rent.data.game.data.id;
                this.extend.disk_type = lend.rent.data.disk_type;
                this.extend.orderNo = lend.order.data.order_no;
                this.extend.lend_id = lend.id;
            },
            extendSubmit(){
                this.extendModalShow = false;
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                let data = {
                    id: this.extend.lend_id,
                    week: this.extend.week,
                    amount: this.extend.price,
                    commission: this.extend.commission,
                };

                this.$api.post('extend-lend', data, config).then(response => {
                    if (response.data.error == false) {
                        this.$toaster.success("Extend request sent successfully!!");
                    }

                });
            },
            rentCost(week, disk_type, game_id) {
                this.$api.get('base-price/game-calculation/' + game_id + '/' + week + '/' + disk_type).then(response => {
                    console.log(response);
                    this.extend.price = response.data.price.discount_price;
                    this.extend.commission =  response.data.price.discount_commission;
                })
            },
            formattedDateForTimer(date) {
                let formattedDate = new Date(date)
                return formattedDate.getMonth()+1 + "/" + formattedDate.getDate() + "/" + formattedDate.getFullYear()
            },
            formattedDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
            formattedReturnDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
            endDate(diskType, datetime, week) {
                let date = new Date(datetime);

                date.setDate(date.getDate() + 1 + week * 7);

                return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()
            },
            returnDate(diskType, datetime, week) {
                let date = new Date(datetime);

                date.setDate(date.getDate() + 1 + week * 7);

                const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
            },
            rentCheck: function() {

                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                this.$api.get('order/'+ this.id + '?include=lenders.rent.game,lenders.order', config).then(response =>
                {
                    this.order = response.data.data;
                    if (this.order.lenders.data.length) {
                        this.orderDetails = true;
                    }
                    console.log(this.order);
                });
            },
        },
        created() {
            window.scrollTo(0,0);
            this.rentCheck();
        },
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

</style>
