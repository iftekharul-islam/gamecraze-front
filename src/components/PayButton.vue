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
      data() {
          return {
            data: {}
          }
      },
      mounted() {
        this.data = {
          cus_name: this.$store.state.user.name,
          cus_phone: this.$store.state.user.phone_number,
          cus_email: this.$store.state.user.email,
          cus_addr1: this.$store.state.user.address.address,
          amount: this.amount
        };
        this.loadSSLCdn();
      },
      methods: {
        loadData() {
            $('#sslczPayBtn').prop('postdata',  this.data );
        },

        loadSSLCdn() {
          (function (window, document) {
            var loader = function () {
              var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
              script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
              tag.parentNode.insertBefore(script, tag);
            };

            window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
          })(window, document);
        }
      },
    }
</script>
