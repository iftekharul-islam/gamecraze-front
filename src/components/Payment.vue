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
                <div class="col-12">
                    <div class="payment-section--heading text-center">
                        <h2>YOUR CART</h2>
                    </div>
                    <div class="payment-section--item">
                        <div class="payment-section--item--content">
                            <p>Select payment method</p>
                            <div class="payment-section--item--content--method-btn">
                                <a href="#">CASH ON DELIVERY</a>
                                <a href="#">ONLINE PAYMENT</a>
                            </div>
                        </div>
                        <div class="payment-section--item--content"> 
                            <p>Select delivery point</p>
                            <form action="">
                                <div class="payment-section--item--content--delivery-point">
                                    <div class="payment-section--item--content--delivery-point--input">
                                        <input type="text">
                                        <label for=""></label>
                                    </div>
                                    <button><img src="../assets/img/location-arw.png" alt="location"> Locate me</button>
                                </div>
                                <div class="payment-section--item--content--map">
                                    <img src="../assets/img/paymentmap.png" alt="payment map">
                                </div>
                            </form>
                        </div>
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
                cart: []
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

                // var data = {
                //   postId: this.$store.state.postId,
                //   week: this.$store.state.lendWeek,
                //   checkpointId: this.$store.state.checkpointId,
                //   paymentMethod: this.paymentMethod,
                //   totalPrice: this.amount
                // };

                let data = {
                    paymentMethod: this.paymentMethod,
                    cart_items: this.cart
                };

                this.$api.post('lend-game', data, config).then(response => {
                    if (response.data.error === false) {
                        this.$store.dispatch('clearCart');
                        this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
                        this.isLoading = false;
                        localStorage.setItem('cartItems', '');
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
        }
    }
</script>
