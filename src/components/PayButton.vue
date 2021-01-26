<template>
    <div>
        <button class="btn btn-primary btn-lg btn-block m-auto" id="sslczPayBtn"
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
            data: {},
          }
      },
      mounted() {
        console.log('button ammount: ', this.amount);
        // this.data = {
        //   cus_name: this.$store.state.user.name,
        //   cus_phone: this.$store.state.user.phone_number,
        //   cus_email: this.$store.state.user.email,
        //   cus_addr1: this.$store.state.user.address.address,
        //   amount: this.amount
        // };
        this.loadSSLCdn();
      },
      methods: {
        loadData() {
          let data = {
            cus_name: this.$store.state.user.name,
            cus_phone: this.$store.state.user.phone_number,
            cus_email: this.$store.state.user.email,
            cus_addr1: this.$store.state.user.address.address,
            amount: this.amount
          };
          console.log('data; ', data)
          this.$store.dispatch('setTotalPrice', this.amount)|
          $('#sslczPayBtn').prop('postdata',  data );
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
        },
        getCartItems() {
          this.$store.dispatch('getCartItems').then(response => {
              if (response) {
                let amount = 0;
                for (let i = 0; i < response.length; i++) {
                    amount += parseFloat(response[i].price); 
                }

                let deliveryCharge = localStorage.getItem('deliveryCharge');

                this.amount = amount + parseFloat(deliveryCharge);
              }
          });
        }
      },
      created() {
        this.getCartItems();
      }
    }
</script>
