<template>
    <div>
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
                if (response.data.error === false) {
                    var config = {
                        headers: {
                            'Authorization': 'Bearer ' + this.$store.state.token
                        }
                    };
                    var data = {
                        postId: this.$store.state.postId,
                        week: this.$store.state.lendWeek,
                        paymentMethod: 'online'
                    };
                    this.$api.post('lend-game', data, config).then(resp => {
                        if (resp.data.error === false) {
                            this.$store.dispatch('clearCart');
                            this.$router.push('/dashboard').then(err => {});
                            this.$swal("Payment Successful!", "Your Order is Confirmed. Your Transaction id " + response.data.order.transaction_id, "success");
                        }
                    });
                    // this.$router.push('/dashboard').then(err => {});
                    // this.$swal("Payment Successful", "Your Transaction id " + response.data.order.transaction_id, "success");
                }
            })
        }
    }
</script>
