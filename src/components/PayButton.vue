<template>
    <div>
        <button class="btn btn-primary btn-lg btn-block m-auto" id="sslczPayBtn" :disabled="!$store.state.postId.length"
                token=""
                postdata=""
                order="If you already have the transaction generated for current order"
                :endpoint="$gamehubApi + 'pay'" @click.prevent="loadData"> Pay Now
        </button>
    </div>
</template>

<script>
    export default {
        props: ['amount'],
        methods: {
            loadData() {
                var data = {
                    cus_name: this.$store.state.user.name,
                    cus_phone: this.$store.state.user.phone_number,
                    cus_email: this.$store.state.user.email,
                    cus_addr1: this.$store.state.user.address.address,
                    amount: this.amount
                };

                $('#sslczPayBtn').prop('postdata', data);
            },
        }

    }
</script>
