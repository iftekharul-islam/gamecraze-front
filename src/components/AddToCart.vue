<template>
    <div>
         <!-- Cart page-->
  <section class="cart sign-in-bg pt-4">
    <div class="container-fluid cart-width">
      <main class="pb-5" v-if="!paymentStatus">
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
                      <button @click="onRemoveCartItem(index)">
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
            <div class="summary-total">
              <div class="total-title">Payment Method</div>
              <input class="mt-1" type="radio" id="cod" name="delivery" value="cod" v-model="paymentMethod">
              <label class="ml-2 text-white" for="cod">Cash On Delivery</label>
              <br>
              <input class="mt-1" type="radio" id="bkash" name="delivery" value="online" v-model="paymentMethod">
              <label class="ml-2 text-white" for="bkash">Online Payment</label>
            </div>
            <div class="summary-checkout">
              <button class="checkout-cta btn btn-primary" @click.prevent="onCheckout" :disabled="!$store.state.postId.length" v-show="paymentMethod === 'cod'">Go to Secure Checkout</button>
<!--              <button class="checkout-cta btn btn-primary" @click.prevent="onPayNow" :disabled="!$store.state.postId.length" v-else>Pay Now</button>-->
              <button class="btn btn-primary btn-lg btn-block" id="sslczPayBtn" :disabled="!$store.state.postId.length" v-show="paymentMethod === 'online'"
                      token="if you have any token validation"
                      postdata="your javascript arrays or objects which requires in backend"
                      order="If you already have the transaction generated for current order"
                      :endpoint="$gamehubApi + 'pay'"> Pay Now
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                games: null,
                checkedGame: '',
                lendWeek: null,
                cart: [],
                paymentStatus: false,
                paymentMethod: 'cod',
                isLoading: false

            }
        },
        methods: {
            onCheckout() {
                var token = this.$store.state.token;
                var user = this.$store.state.user;
                if (token) {
                    if (user.name && user.phone_number && user.address) {
                        this.paymentStatus = !this.paymentStatus;
                    }
                    else {
                      this.$swal("Incomplete Profile", "Please Update Your Profile");
                      this.$router.push('profile').catch(err => {});
                    }
                }
                else {
                  this.$swal("Login First", "Please Login to Lend Games");
                    this.$router.push('login').catch(err => {});
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
                     this.$router.push('dashboard').then(err => {});
                  }
                });
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
        }
    }

</script>
