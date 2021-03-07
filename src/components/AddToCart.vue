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
            <div class="cart-heading"  v-if="cart.length">
              <h2>YOUR CART</h2>
            </div>
            <div class="cart-heading-empty" v-else>
              <h2>YOUR CART IS EMPTY</h2>
            </div>
            <div v-if="cart.length" class="row">
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
                      <tbody >

                        <tr v-for="(item, index) in cart" :key="index">
                            <td scope="col">{{ item.rent.game.data.name }}</td>
                            <td scope="col">{{ item.price + ((item.price * commissionAmount)/100) }}</td>
                            <td scope="col">{{ item.lend_week }}</td>
                            <td scope="col">
                              <div class="d-flex align-items-center justify-content-between">{{ item.price + ((item.price * commissionAmount)/100) }}
                                <div class="item-del" @click="onRemoveCartItem(index)"><i class="fas fa-trash-alt"></i></div>
                              </div>
                            </td>
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
                        <span class="subtotal-price">৳ {{ totalPrice }}</span>
                      </div>
                      <div class="subtotal d-flex align-items-center justify-content-between">
                        <p>Delivery Charge</p>
                        <span class="subtotal-price">৳ {{ deliveryCharge }}</span>
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
                        <span class="total-price">৳ {{ totalPrice + parseFloat(deliveryCharge)}}</span>
                      </div>
                      </form>
                  </div>
                  <!-- Enter Adsress -->
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <form class="" @submit.prevent="handleSubmit(onCheckout)" method="post">
                          <div class="">
                            <div class="cart-delivery-address">
                                <label for="address">Enter Address</label>
                                <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                  <textarea id="address" type="text" v-model="address" class="promo-code-field"></textarea>
                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                          </div>
                           <!-- Place Order button -->
                            <div class="checkout-btn">
                                <!-- <button @click="onCheckout()" class="btn&#45;&#45;cart-btn w-100">GO TO SECURE CHECKOUT</button>-->
                                <button class="btn--cart-btn w-100" :disabled="isLoading">
                                    Place order
                                    <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                </button>
                              <!-- <button @click.prevent="placeOrder" class="btn&#45;&#45;cart-btn w-100" :disabled="isLoading" v-else>-->
                              <!-- Place order-->
                              <!-- <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>-->
                              <!--  </button>-->
                            </div>
                        <!-- PLace Order button -->
                      </form>
              </ValidationObserver>
              <!-- End Enter Adsress -->
              </div>
               
               
                <div v-if="showModal">
                    <transition name="modal">
                        <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
                            <div class="modal-wrapper">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" @click="showModal = false" class="close-modal"></span>
                                            </button>
                                        <div class="modal-body-content">
                                            <p>Opps !!! The game <span v-for="(item, index) in cart" v-if="item.rent.id == id">{{ item.rent.game.data.name }}</span> you wanted to rent is not available at this moment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div v-if="showRentLimitModal">
                    <transition name="modal">
                        <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
                            <div class="modal-wrapper">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" @click="showRentLimitModal = false" class="close-modal"></span>
                                        </button>
                                        <div class="modal-body-content">
                                            <p>Opps !!! You exceeded renting limit. Return your current games to rent new ones </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div v-if="showRentCountModal">
                    <transition name="modal">
                        <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
                            <div class="modal-wrapper">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" @click="showRentCountModal = false" class="close-modal"></span>
                                        </button>
                                        <div class="modal-body-content">
                                            <p>You can not rent more than two games at a time please remove any {{ itemRemovable }} games to procced to order.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div v-if="showBackEndModal">
                    <transition name="modal">
                        <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
                            <div class="modal-wrapper">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" @click="showBackEndModal = false" class="close-modal"></span>
                                        </button>
                                        <div class="modal-body-content">
                                            <p>{{ message }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- rented game modal -->
                <div class="modal fade seller-information-modal upgrade-modal" id="warning" tabindex="-1" aria-labelledby="warningModalLabel" aria-hidden="true" v-if="isEnabled">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <button type="button" class="close m-0 close-modal" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                            <p>Opps !!! The game <span v-for="(item, index) in cart" v-if="item.rent.id == id">{{ item.rent.game.data.name }}</span> you wanted to rent is not available at this moment.</p>
                        </div>
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
              address: '',
              games: null,
              checkedGame: '',
              lendWeek: '',
              cart: [],
              paymentMethod: 'cod',
              isLoading: false,
              price: [],
              deliveryCharge: 0,
              commissionAmount: '',
              gameIds: [],
              id: null,
              showModal: false,
              showRentLimitModal: false,
              showRentCountModal: false,
              showBackEndModal: false,
              isEnabled: false,
              totalItem: 0,
              user: null,
              itemRemovable: 0,
              totalLends: 0,
              message: '',

          }
      },
    computed: {
      totalPrice() {
        var total = 0;
        if (this.cart) {
          for (let i = 0; i < this.cart.length; i++) {
            total += parseFloat(this.cart[i].price) ;
          }
          total = total + ((total * this.commissionAmount)/100)
        }
        return total;
      }
    },
    methods: {
        onCheckout() {

            var token = this.$store.state.token;
            var user = this.$store.state.user;
            this.totalItem = this.cart.length;
            this.itemRemovable = this.user.rent_limit;

            console.log('item count');
            console.log(this.totalItem);
            console.log('cart items');
            console.log(this.cart);
            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            this.$api.get('my-lends', config).then(response => {
                console.log(response.data);
                if (response.data.lends != 0) {
                    this.totalLends = response.data.lends;
                    this.itemRemovable = this.totalLends;
                    console.log('my lends');
                    console.log(this.totalLends);
                }
                if (this.totalLends >= this.user.rent_limit){
                    this.showRentLimitModal = true;
                }
                else if (this.totalItem > this.itemRemovable) {
                    this.itemRemovable = this.totalItem - this.itemRemovable;
                    this.showRentCountModal = true;
                }
                else if (token) {
                    if (user.name && user.phone_number && user.address.address && user.identification_number && user.birth_date) {
                        this.ExistInCart();
                    }
                    else {
                        this.$swal("Incomplete Profile", "Please Update Your Profile with all information ");
                        this.$router.push('/profile').then(res => {
                                this.$root.$emit('profileEdit');
                            },
                        ).catch(err => {
                        });
                    }
                }
                else {
                    this.$swal("Login First", "Please Login to Lend Games");
                    this.$router.push('/login').catch(err => {});
                }

            });
        },
        ExistInCart() {
            console.log('this.gameIds');
            console.log(this.gameIds);
            let data = {
                ids: this.gameIds,
            };

            this.$api.post('check-rented', data).then(response => {
                console.log(response);
                if (response.data.id != '') {
                    this.id = response.data.id;
                    this.showModal = true;
                    console.log(this.id, 'id');
                } else {
                    this.placeOrder();
                }
            });

        },
        subTotal() {
            if (this.cart != null) {
              for (let i = 0; i < this.cart.length; i++) {
                  this.$store.state.totalAmount = this.$store.state.totalAmount + this.price;
              }

              return this.$store.state.totalAmount;
            }
        },
        updateRentWeek(index) {
            localStorage.setItem('lendWeek', JSON.stringify(this.$store.state.lendWeek));
            this.$store.state.totalAmount = 0;
            for (let i=0;i<this.cart.length;i++) {
                this.$store.state.totalAmount = this.$store.state.totalAmount + this.price;
            }
        },
        placeOrder() {
            this.isLoading = true
            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };

            let data = {
                address: this.address,
                paymentMethod: this.paymentMethod,
                cart_items: this.cart,
                delivery_charge: this.deliveryCharge
            };

            this.$api.post('lend-game', data, config).then(response => {
                if (response.data.error === false) {
                    this.$store.dispatch('clearCart');
                    this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
                    this.isLoading = false;
                    localStorage.setItem('cartItems', '');
                    localStorage.setItem('deliveryCharge', 0);
                    this.$router.push('/profile').then(err => {});
                }
                if (response.data.error === true) {
                    this.isLoading = false;
                    this.message = response.data.message;
                    this.showBackEndModal = true;

                }
            });
        },
        onRemoveCartItem(index) {
          this.$swal({
            title: "Do you want to remove this item?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              this.cart.splice(index, 1)
              this.$store.dispatch('removeCartItem', index)
              swal("The item is removed.", {
                icon: "success",
              });
            } else {
              swal("The item is not removed.");
            }
          });
        },
        getCartItems() {
          let cartItems = localStorage.getItem('cartItems');
          if (cartItems != '' && cartItems != null) {
            this.cart = JSON.parse(cartItems);
              if (this.cart) {
                  for (let i = 0; i < this.cart.length; i++) {
                      console.log('cart data');
                      this.gameIds.push(this.cart);
                  }
              }
            console.log('this.cart');
            console.log(this.cart);
          }
        }
    },
    created() {
        var config = {
            headers: {
                'Authorization': 'Bearer ' + this.$store.state.token
            }
        };
        this.$api.get('user/details', config).then(response => {
            this.user = response.data.data;
            console.log('this.user');
            console.log(this.user);
        });
        this.$api.get('delivery-charge').then(response => {
            if (response.data.data) {
                this.deliveryCharge = response.data.data.charge;
                localStorage.setItem('deliveryCharge', response.data.data.charge);
            }
        });

        this.$api.get('commission').then(response => {
            if (response.data.data) {
                this.commissionAmount = response.data.data.amount;
            }
        });

        this.getCartItems();

        this.$store.watch((state) => {
                return this.$store.state.cart
            },
            (newValue, oldValue) => {
                this.cart = newValue;
            },
            {deep: true}
        );
    },
    mounted () {
            document.body.classList.add('body-position')
        },
        destroyed () {
            document.body.classList.remove('body-position')
        }
  }
</script>

