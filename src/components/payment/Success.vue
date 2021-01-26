<template>
    <div>
        <section class="rented-page sign-in-bg">
            <div class="container rented-page-width pb-5 pt-3">
                <div class="card no-post-found-card mb-0">
                    <div class="loading text-center">
                        <div id="loading-wrapper">
                            <div id="loading-text" style="color:red">LOADING</div>
                            <div id="loading-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        created() {
            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            }
            this.$api.get('success-payment', config).then(response => {
                console.log('sucess: ', response);
                if (response.data.error === false) {
                    var config = {
                        headers: {
                            'Authorization': 'Bearer ' + this.$store.state.token
                        }
                    };

                    // var data = {
                    //     postId: this.$store.state.postId,
                    //     week: this.$store.state.lendWeek,
                    //     paymentMethod: 'online',
                    //     checkpointId: this.$store.state.checkpointId,
                    //     totalPrice: this.$store.state.totalPrice
                    // };
                    // console.log('data: ', data);
                    // this.$api.post('lend-game', data, config).then(resp => {
                    //     if (resp.data.error === false) {
                    //         this.$store.dispatch('clearCart');
                    //         this.$router.push('/profile').then(err => {});
                    //         this.$swal("Payment Successful!", "Your Order is Confirmed. Your Transaction id " + response.data.order.transaction_id, "success");
                    //     }
                    // });

                    this.$store.dispatch('getCartItems').then(response => {
                        let deliveryCharge = localStorage.getItem('deliveryCharge');
                        let data = {
                            paymentMethod: 'online',
                            cart_items: response,
                            delivery_charge: deliveryCharge ? deliveryCharge : 0
                        };
                        this.$api.post('lend-game', data, config).then(response => {
                            console.log(response);
                            
                            if (response.data.error === false) {
                                this.$store.dispatch('clearCart');
                                this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
                                // this.isLoading = false;
                                localStorage.setItem('cartItems', '');
                                localStorage.setItem('deliveryCharge', 0);
                                this.$router.push('/profile').then(err => {});
                            }
                        });
                    });
                }
            })
        }
    }
</script>
