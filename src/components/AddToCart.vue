<template>
    <div>
         <!-- Cart page-->
  <!-- <section class="cart sign-in-bg pt-4">
    <div class="container-fluid cart-width">
      <main class="pb-5">
        <div class="basket">
         
          <div class="basket-labels">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <td scope="col" class="item item-heading">Item</td>
                  <td scope="col" class="price">Price</td>
                  <td scope="col" class="quantity">Rent Week</td>
                  <td scope="col" class="subtotal">Subtotal</td>
                </tr>
              </thead>
              <tbody>
                <tr class="basket-product" v-for="(item, index) in cart" :key="index">
                  <td scope="row" class="item">

                   <div class="item-product">
                    <div class="product-image">
                        <img :src="item.game.data.assets.data[0].url"  :alt="item.game.data.name" class="product-frame img-fluid" v-if="item.game.data.assets.data.length">
                        <img class="card-img-top" src="../assets/img/rented/grid.png" alt="Grid" v-else>
                    </div>
                    <div class="product-details">
                      <h1>{{ item.game.data.name }}</h1>
                      <small>Product Code - 232321939</small>
                    </div>
                   </div>
                  </td>
                  <td class="price">{{ price[index] }}</td>
                  <td class="price">{{ this.gameId }}</td>
                  <td class="text-white">
                    <h5>{{ lendWeek[index] }}</h5>
                          <div class="quantity">
                            <select class="form-control w-75" v-model="$store.state.lendWeek[index]" @change="updateRentWeek(index)">
                              <option value="" selected disabled>Rent Week</option>
                              <option v-for="n in item.max_number_of_week" :value="n">{{n}}</option>
                           </select>
                          </div> 
                  </td>

                  <td class="subtotal">{{ price[index] }}</td>
                    <div class="remove-cart">
                      <button @click="onRemoveCartItem(index)" class="tooltips" tooltip="Click Here to Remove Game!">
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <aside>
          <div class="summary">
            <div class="summary-total-items"><span class="total-items"></span> Items in your Bag</div>
            <div class="summary-subtotal">
              <div class="subtotal-title">Subtotal</div>
              <div class="subtotal-value final-value" id="basket-subtotal">{{totalPrice}}</div>
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
              <div class="total-value final-value" id="basket-total">{{totalPrice}}</div>
            </div>

            <div class="summary-checkout">
              <button class="checkout-cta btn btn-primary" @click.prevent="onCheckout" :disabled="!$store.state.postId.length">Go to Secure Checkout</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  </section> -->

        <section class="cart-section">
          <div class="container">
            <div class="cart-heading">
              <h2>YOUR CART</h2>
            </div>
            <div class="row">
              <div class="mb-4 mb-lg-0 col-md-12 col-lg-7">
                <div class="cart-section--item-details">
                  <table class="table table-borderless cart-section--item-details--table">
                            <thead>
                            <tr>
                                <td scope="col">Item</td>
                                <td scope="col">Price</td>
                                <td scope="col">Rent Week</td>
                                <td scope="col">Subtotal</td>
                            </tr>
                            </thead>
                            <tbody v-if="cart">
                            <tr v-for="(item, index) in cart" :key="index">
                                <td scope="col">{{ item.game.data.name }}</td>
                                <td scope="col">{{ price[index] }}</td>
                                <td scope="col">{{ lendWeek[index] }}</td>
                                <td scope="col"><div class="d-flex align-items-center justify-content-between">{{price[index]}} <div class="item-del" @click="onRemoveCartItem(index)"><i class="fas fa-trash-alt"></i></div></div></td>
                            </tr>
                            </tbody>
                        </table>
                </div>
              </div>
              <div class="col-md-7 col-lg-5">
                  <div class="cart-section--item-price-box">
                      <form action="">
                        <div class="cart-section--item-price-box--heading text-center">
                        <span>Items in your Bag</span>
                      </div>
                      <div class="subtotal d-flex align-items-center justify-content-between">
                        <p>Subtotal</p>
                        <span class="subtotal-price">৳{{ totalPrice }}</span>
                      </div>
<!--                      <div class="promotional-code">-->
<!--                        <p class="mb-2">Enter a promotional code</p>-->
<!--                        <div class="promotional-code&#45;&#45;input-group d-flex">-->
<!--                          <input type="text" class="form-control mr-3">-->
<!--                          <button class="btn&#45;&#45;cart-btn">APPLY</button>-->
<!--                        </div>-->
<!--                      </div>-->
                      <div class="total d-flex align-items-center justify-content-between">
                        <p>Total</p>
                        <span class="total-price">৳{{ totalPrice }}</span>
                      </div>
                      <div class="checkout-btn">
                          <button @click="onCheckout()" class="btn--cart-btn w-100">GO TO SECURE CHECKOUT</button>
                      </div>
                      </form>
                  </div>
              </div>
            </div>
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
            lendWeek: '',
            cart: [],
            paymentMethod: 'cod',
            isLoading: false,
            price: [],
        }
    },
    computed: {
      totalPrice() {
        var total = 0;
        for (let i=0; i<this.cart.length; i++) {
          total += this.price[i];
        }
        return total;
      }
    },
    methods: {
        subTotal() {
            console.log(this.cart.length)
            for (let i=0;i<this.cart.length;i++) {
                this.$store.state.totalAmount = this.$store.state.totalAmount + this.price;
            }

            return this.$store.state.totalAmount;
        },
        updateRentWeek(index) {
            localStorage.setItem('lendWeek', JSON.stringify(this.$store.state.lendWeek));
            this.$store.state.totalAmount = 0;
            for (let i=0;i<this.cart.length;i++) {
                this.$store.state.totalAmount = this.$store.state.totalAmount + this.price;
            }
        },
        onCheckout() {
            var token = this.$store.state.token;
            var user = this.$store.state.user;
            console.log('user: ', user);
            if (token) {
                if (user.name && user.phone_number && user.address.address && user.identification_number && user.birth_date) {
                  this.$router.push('/payment/' + this.totalPrice).catch(err => {});
                }
                else {
                  this.$swal("Incomplete Profile", "Please Update Your Profile with all information ");
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
                        this.$store.state.totalAmount = 0;
                        for (let i=0;i<this.cart.length;i++) {
                            this.$store.state.totalAmount = this.$store.state.totalAmount + this.price ;
                        }
                      swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    } else {
                      swal("Your imaginary file is safe!");
                    }
                  });
        },
    },
    created() {
      this.lendWeek = this.$store.state.lendWeek;
      this.$api.get('cart-items/?ids=' + this.$store.state.postId + '&include=game.assets')
          .then (response =>
          {
              this.cart = response.data.data
            console.log(this.cart, 'cart');
              for (let i=0;i<this.cart.length;i++) {
                this.$api.get('base-price/game-calculation/' + this.cart[i].game.data.id + '/' + this.lendWeek )
                    .then (response => {
                      this.price.push(parseFloat(response.data));
                    });
              }
            console.log(this.price)
          });
    },
    mounted () {
            document.body.classList.add('body-position')
        },
        destroyed () {
            document.body.classList.remove('body-position')
        }
  }

</script>
