<template>
    <div>
        <!-- <section class="cart sign-in-bg pt-4">
            <div class="container-fluid cart-width">
                <div class="payment-method m-auto">
                    <h3 class="text-light text-center mb-5">Payment Method</h3>
                    <div class="payment-option">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="cod" v-model="paymentMethod">
                            <label class="form-check-label" for="exampleRadios1">
                                Cash on Delivery
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="online" v-model="paymentMethod">
                            <label class="form-check-label" for="exampleRadios2">
                                Online Payment
                            </label>
                        </div>
                    </div>
                    <div class="payment-btn text-center mt-5">
                        <button class="btn btn-primary" v-show="paymentMethod === 'cod'" @click.prevent="placeOrder" :disabled="isLoading">
                            Place Order
                            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                        </button>

                        <PayButton :amount="amount" v-show="paymentMethod === 'online'"></PayButton>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="payment-section">
            <div class="container">
                <div class="col-11 mx-auto p-0 ">
                    <div class="payment-section--heading text-center">
                        <h2>YOUR CART</h2>
                    </div>
                    <div class="payment-section--item">
                        <div class="payment-section--item--content">
                            <p>Select payment method</p>
                            <div class="payment-section--item--content--method-btn">
                                <div class="payment-option">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="cod" v-model="paymentMethod">
                                        <label class="form-check-label" for="exampleRadios1">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="online" v-model="paymentMethod">
                                        <label class="form-check-label" for="exampleRadios2">
                                            Online Payment
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="payment-section--item--content"> 
                            <p>Select delivery point</p>
                            <form action="">
                                <div class="payment-section--item--content--delivery-point">
                                    <div class="payment-section--item--content--delivery-point--input">
                                        <input type="text">
                                        <label for=""><img src="../assets/img/map-forward.png" alt="map forward"></label>
                                    </div>
                                    <button class="payment-section--item--content--delivery-point--btn"><img src="../assets/img/location-arw.png" alt="location"> Locate me</button>
                                </div>
                                <div class="payment-section--item--content--map">
                                    <img src="../assets/img/paymentmap.png" class="img-fluid w-100" alt="payment map">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="checkout-btn">
                        <button class="btn w-100" v-show="paymentMethod === 'cod'" @click.prevent="placeOrder" :disabled="isLoading">
                            Place Order
                            <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                        </button>

                        <PayButton :amount="amount" v-show="paymentMethod === 'online'"></PayButton>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    import Vue from 'vue';
    import PayButton from "./PayButton";
    export default {
        data() {
            return {
                paymentMethod: 'cod',
                isLoading: false,
                amount: 0,
                cart: [],
                deliveryCharge: 0
            }
        },
        components: {
            PayButton
        },
        methods: {
            placeOrder() {
                this.isLoading = true
                var config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };

                let data = {
                    paymentMethod: this.paymentMethod,
                    cart_items: this.cart,
                    delivery_charge: this.deliveryCharge
                };

                this.$api.post('lend-game', data, config).then(response => {
                    if (response.data.error === false) {
                        this.$store.dispatch('clearCart');
                        this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
                        this.isLoading = false;
                        localStorage.setItem('cartItems', '');
                        localStorage.setItem('deliveryCharge', 0);
                        this.$router.push('/profile').then(err => {});
                    }
                });
            },
            getCartItems() {
                this.$store.dispatch('getCartItems').then(response => {
                    if (response) {
                        this.cart = response;
                        let amount = 0;
                        for (let i = 0; i < response.length; i++) {
                            amount += parseFloat(response[i].price); 
                        }
                        this.amount = amount;
                    }
                });
            }
        },
        created() {
            this.getCartItems();
            let deliveryCharge = localStorage.getItem('deliveryCharge');
            this.deliveryCharge = deliveryCharge ? deliveryCharge : 0;
        }
    }
</script>
