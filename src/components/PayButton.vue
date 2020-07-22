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
        props: ['postData'],
        methods: {
            loadData() {
                var obj = {};
                obj.cus_name = this.$store.state.user.name
                obj.cus_phone = this.$store.state.user.phone_number
                obj.cus_email = this.$store.state.user.email
                obj.cus_addr1 = this.$store.state.user.address
                obj.amount = this.postData.amount

                $('#sslczPayBtn').prop('postdata', obj);
            }
        }
    }
</script>
