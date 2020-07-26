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
            this.$api.get('fail-payment', config).then(response => {
                if (response.data.error === true) {
                    this.$router.push('/add-to-cart').then(err => {});
                    this.$swal("Payment Failed", "Something went wrong. Try Again!", "error");
                }
            })
        }
    }
</script>
