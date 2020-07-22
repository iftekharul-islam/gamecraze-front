<template>
    <div>
         <!-- Cart page-->
  <section class="cart sign-in-bg pt-4">
    <div class="container-fluid cart-width">
      <main class="pb-5">
        <div class="basket">
         
          <div class="basket-labels">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <td scope="col" class="item item-heading">Item</td>
                  <td scope="col" class="price">Price</td>
                  <!-- <td scope="col" class="quantity">Quantity</td> -->
                  <td scope="col" class="subtotal">Subtotal</td>
                </tr>
              </thead>
              <tbody>
                <tr class="basket-product" v-for="(item, index) in cart" :key="index">
                  <td scope="row" class="item">

                   <div class="item-product">
                    <div class="product-image">
                        <img :src="$gamehubStorageApi + 'assets/' + item.game.data.assets.data[0].name"  :alt="item.game.data.name" class="product-frame img-fluid" v-if="item.game.data.assets.data.length">
                        <img class="card-img-top" src="../assets/img/rented/grid.png" alt="Grid" v-else>
                    </div>
                    <div class="product-details">
                      <h1>{{ item.game.data.name }}</h1>
                      <small>Product Code - 232321939</small>
                    </div>
                   </div>
                  </td>
                  <td class="price">5000</td>
                    <!-- <td class="quantity">
                        <input type="number" value="1" min="1" class="quantity-field">
                    </td> -->
                  <td class="subtotal">5000</td>
                    <div class="remove-cart">
                      <button @click="onRemoveCartItem(index)" class="tooltips" tooltip="Click Here to Remove Game!">
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
                  <!-- <div class="border"></div> -->
                </tr>
              </tbody>
            </table>
          </div>
          <!--  -->
        </div>
        <aside>
          <div class="summary">
            <div class="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
            <div class="summary-subtotal">
              <div class="subtotal-title">Subtotal</div>
              <div class="subtotal-value final-value" id="basket-subtotal">5000</div>
              <div class="summary-promo hide">
                <div class="promo-title">Promotion</div>
                <div class="promo-value final-value" id="basket-promo"></div>
              </div>
            </div>
            <div class="basket-module">
              <label for="promo-code">Enter a promotional code</label>
              <input id="promo-code" type="text" name="promo-code" maxlength="5" class="promo-code-field">
              <button class="promo-code-cta">Apply</button>
            </div>
            <div class="summary-total">
              <div class="total-title">Total</div>
              <div class="total-value final-value" id="basket-total">5000</div>
            </div>

            <div class="summary-checkout">
              <button class="checkout-cta btn btn-primary" @click.prevent="onCheckout" :disabled="!$store.state.postId.length">Go to Secure Checkout</button>
<!--              <button class="checkout-cta btn btn-primary" @click.prevent="onPayNow" :disabled="!$store.state.postId.length" v-else>Pay Now</button>-->
<!--              <button class="btn btn-primary btn-lg btn-block" id="sslczPayBtn" :disabled="!$store.state.postId.length" v-show="paymentMethod === 'online'"-->
<!--                      token=""-->
<!--                      postdata=""-->
<!--                      order="If you already have the transaction generated for current order"-->
<!--                      :endpoint="$gamehubApi + 'pay'" @click="loadData"> Pay Now-->
<!--              </button>-->
<!--                  <PayButton :postData="postData" v-show="paymentMethod === 'online'"></PayButton>-->
            </div>
          </div>
        </aside>
      </main>
    </div>
  </section>
    </div>
</template>

<script>

  import PayButton from "./PayButton";
  export default {
    data() {
        return {
            games: null,
            checkedGame: '',
            lendWeek: null,
            cart: [],
            paymentMethod: 'cod',
            isLoading: false,
            postData: {
              amount: '500',
            }

        }
    },
    components: {
      PayButton
    },
    methods: {
        onCheckout() {
            var token = this.$store.state.token;
            var user = this.$store.state.user;
            if (token) {
                if (user.name && user.phone_number && user.address) {
                  // this.isLoading = true
                  // var config = {
                  //   headers: {
                  //     'Authorization': 'Bearer ' + this.$store.state.token
                  //   }
                  // };
                  // var data = {
                  //   postId: this.$store.state.postId,
                  //   week: this.$store.state.lendWeek,
                  //   paymentMethod: this.paymentMethod
                  // };
                  // this.$api.post('lend-game', data, config).then(response => {
                  //   if (response.data.error === false) {
                  //     this.$store.dispatch('clearCart');
                  //     this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
                  //     this.isLoading = false;
                  //     this.$router.push('dashboard').then(err => {});
                  //   }
                  // });
                  this.$router.push('/payment').catch(err => {});
                }
                else {
                  this.$swal("Incomplete Profile", "Please Update Your Profile");
                  this.$router.push('/profile').catch(err => {});
                }
            }
            else {
              this.$swal("Login First", "Please Login to Lend Games");
                this.$router.push('/login').catch(err => {});
            }
        },
        onRemoveCartItem(index) {
          this.$swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
                  .then((willDelete) => {
                    if (willDelete) {
                      this.cart.splice(index, 1)
                      this.$store.dispatch('removePostId', index)
                      swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
        },
        onConfirmOrder() {
            // this.isLoading = true
            // var config = {
            //   headers: {
            //     'Authorization': 'Bearer ' + this.$store.state.token
            //   }
            // };
            // var data = {
            //   postId: this.$store.state.postId,
            //   week: this.$store.state.lendWeek,
            //   paymentMethod: this.paymentMethod
            // };
            // this.$api.post('lend-game', data, config).then(response => {
            //   if (response.data.error === false) {
            //      this.$store.dispatch('clearCart');
            //      this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
            //      this.isLoading = false;
            //      this.$router.push('dashboard').then(err => {});
            //   }
            // });
        },
      loadPaymentScript() {
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
    created() {
      this.lendWeek = this.$store.state.lendWeek;
      this.$api.get('cart-items/?ids=' + this.$store.state.postId + '&include=game.assets')
          .then (response =>
          {
              console.log(response);
              this.cart = response.data.data
              // console.log(this.rent);
          })

      this.loadPaymentScript();
    },
  }

</script>
