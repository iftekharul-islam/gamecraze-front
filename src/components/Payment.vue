<template>
    <div>
        <section class="cart sign-in-bg pt-4">
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
        </section>
    </div>
</template>
<script>
    import PayButton from "./PayButton";
    export default {
        data() {
            return {
                paymentMethod: 'cod',
                isLoading: false,
                amount: this.$route.params.amount
            }
        },
        components: {
            PayButton
        },
        methods: {
            loadPaymentScript() {
                (function (window, document) {
                    var loader = function () {
                        var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
                        script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
                        tag.parentNode.insertBefore(script, tag);
                    };

                    window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
                })(window, document);
            },
            placeOrder() {
                this.isLoading = true
                var config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };
                var data = {
                  postId: this.$store.state.postId,
                  week: this.$store.state.lendWeek,
                  paymentMethod: this.paymentMethod
                };
                this.$api.post('lend-game', data, config).then(response => {
                  if (response.data.error === false) {
                    this.$store.dispatch('clearCart');
                    this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
                    this.isLoading = false;
                    this.$router.push('/dashboard').then(err => {});
                  }
                });
            }
        },
        created() {
            this.loadPaymentScript();
        }
    }
</script>
