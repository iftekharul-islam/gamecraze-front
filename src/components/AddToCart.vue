<template>
    <div>
        <section class="cart-section">
          <div class="container">
            <div class="cart-heading"  v-if="newCartItems.length">
              <h2>YOUR CART</h2>
            </div>
            <div class="cart-heading-empty" v-if="emptyCart">
              <h2>YOUR CART IS EMPTY</h2>
            </div>
            <div v-if="newCartItems.length" class="row">
              <div class="mb-4 mb-lg-0 col-md-12 col-lg-7">
                <div class="cart-section--item-details">
                  <table class="table table-borderless cart-section--item-details--table">
                      <thead>
                        <tr>
                            <td scope="col">Item</td>
                            <td scope="col">Type</td>
                            <td scope="col">Rent Week</td>
                             <td scope="col">Price</td>
                        </tr>
                      </thead>
                      <tbody >

                        <tr v-for="(item, index) in newCartItems" :key="index">
                            <td scope="col">{{ item.game_name }}</td>
                            <td scope="col" v-if="item.disk_type == 0">Digital</td>
                            <td scope="col" v-if="item.disk_type == 1">Physical</td>
                            <td scope="col">{{ item.rent_week }}</td>
                            <td scope="col">
                              <div class="d-flex align-items-center justify-content-between" v-if="user.achieve_discount == true && item.disk_type == 0">
                                  <div class="new-price"><span>৳ </span>
                                      {{ item.regular_price }}
                                  </div>
                                <div class="item-del" @click="onRemoveCartItem(index, item.id)"><i class="fas fa-trash-alt icon"></i></div>
                              </div>
                                <div class="d-flex align-items-center justify-content-between" v-else>
                                    <del><span>৳ </span>
                                        {{ item.regular_price }}
                                    </del>
                                    <div class="new-price"><span>৳ </span>
                                        {{ item.discount_price }}
                                    </div>
                                    <div class="item-del" @click="onRemoveCartItem(index, item.id)"><i class="fas fa-trash-alt icon"></i></div>
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
                        <span class="total-price">৳ {{ totalPrice + deliveryCharge }}</span>
                      </div>
                      </form>
                  </div>
                   <div class="cart-section--item-price-box--payment-method secondery-border mt-a-6">
                            <p class="mb-0">Payment Method</p>
                            <div class="d-flex align-items-center justify-content-between content">
                                <div class="checkbox-parents">
                                    <input type="checkbox" id="cod" class="checkbox-parents--input user-select-none pe-none" checked>
                                    <label for="cod" class="checkbox-parents--label user-select-none pe-none">Cash on Delivery </label>
                                </div>
                                <div class="checkbox-parents" v-if="availableWallet">
                                    <input type="checkbox" id="refer" @click="spendWalletExistAmount($event)" class="checkbox-parents--input">
                                    <label for="refer" class="checkbox-parents--label">Referral amount </label>
                                </div>
                            </div>
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
                        <!-- Agree terms condition -->
                        <div class="post-rent--form-group--agree pl-a-6 mt-a-3">
                            <div class="checkbox-parents">
                                <ValidationProvider name="Terms & Conditions" rules="required" v-slot="{ errors }">
                                <input type="checkbox" id="terms-agree" class="checkbox-parents--input" v-model="agreement" @change="onAgreement($event)">
                                <label for="terms-agree" class="checkbox-parents--label">I agree with all <router-link to="/terms" target="_blank" class="text-secondery"><u> terms & conditions</u></router-link></label>
                                <span v-if="errors.length" class="error-message d-block ml--30">{{ errors[0] }}</span>
                            </ValidationProvider>
                            </div>
                        </div>
                           <!-- Place Order button -->
                            <div class="checkout-btn">
                                <button class="btn--cart-btn w-100 gil-bold" :disabled="isLoading">
                                    Place order
                                    <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                                </button>
                            </div>
                        <!-- PLace Order button -->
                      </form>
              </ValidationObserver>
              <!-- End Enter Adsress -->
              </div>
               
               
                <div v-if="showModal">
                    <transition name="modal">
                        <div class="modal-mask seller-information-modal upgrade-modal cart-warning-modal multiple-user-warning-modal z-index-99">
                            <div class="modal-wrapper">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" @click="showModal = false" class=""></span>
                                            </button>
                                        <div class="modal-body-content">
                                            <p>Opps !!! The game(S) {{ id }} you wanted to rent is not available at this moment.</p>
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
                                            <p>You can not rent more than {{ $store.state.user.rent_limit }} games at a time please remove any {{ itemRemovable }} games to procced to order.</p>
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
              agreement: '',
              address: '',
              games: null,
              checkedGame: '',
              lendWeek: '',
              cart: [],
              paymentMethod: 'cod',
              isLoading: false,
              price: [],
              newCartItems: [],
              deliveryCharge: 0,
              commissionAmount: '',
              rentIds: [],
              id: '',
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
              emptyCart: false,
              offerAmount: 0,
              digitalTypePricing: 20,
              totalPrice: 0,
              availableWallet: false,
              spendWalletAmount: 0,
          }
      },
    methods: {
        spendWalletExistAmount(event) {
            if (event.target.checked == true) {
                if (this.totalPrice > this.user.wallet) {
                    this.totalPrice = this.totalPrice - this.user.wallet;
                    this.spendWalletAmount = this.user.wallet
                } else {
                    this.spendWalletAmount = this.totalPrice;
                    this.totalPrice = 0 ;
                }
                console.log(this.spendWalletAmount);
            } else {
                this.totalPrice = this.totalPrice + this.spendWalletAmount;
            }
        },
        authData () {
            var auth = this.$store.getters.ifAuthenticated;
            if (auth){
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };
                this.$api.get('user/details', config).then(response => {
                    this.user = response.data.data;
                    if (this.user.wallet != 0) {
                        this.availableWallet = true;
                    }
                })
                    .catch( err => {
                    console.log(err);
                });
                this.$api.get('cart-items', config).then(response => {
                    this.newCartItems = response.data.data.cartItems;
                    this.totalPrice = response.data.data.totalDiscountPrice;
                    this.deliveryCharge = response.data.data.deliveryCharge;
                    if (this.newCartItems) {
                        for (let i = 0; i < this.newCartItems.length; i++) {
                            this.rentIds.push(this.newCartItems[i].rent_id);
                        }
                    }
                    if (!this.newCartItems.length) {
                        this.emptyCart = true;
                    }
                })
                    .catch( err => {
                    console.log(err);
                });
            }
        },
        onAgreement(event){
            this.agreement = '';
            if (event.target.checked == true){
                this.agreement = 1
            }
        },
        onCheckout() {
            this.isLoading = true;
            var token = this.$store.state.token;
            var user = this.$store.state.user;
            this.totalItem = this.newCartItems.length;
            this.itemRemovable = this.user.rent_limit;

            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            this.$api.get('my-lends', config).then(response => {
                if (response.data.lends != 0) {
                    this.totalLends = response.data.lends;
                    this.itemRemovable = this.totalLends;
                }
                if (this.totalLends >= this.user.rent_limit){
                    this.isLoading = false
                    this.showRentLimitModal = true;
                }
                else if (this.totalItem > this.itemRemovable) {
                    this.itemRemovable = this.totalItem - this.itemRemovable;
                    this.isLoading = false
                    this.showRentCountModal = true;
                }
                else if (token) {
                    if (user.name && user.phone_number && user.identification_number && user.birth_date) {
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
            let data = {
                ids: this.rentIds,
            };

            this.$api.post('check-rented', data).then(response => {
                if (response.data.data != '') {
                    this.id = response.data.data;
                    this.isLoading = false
                    this.showModal = true;
                } else {
                    this.placeOrder();
                }
            });

        },
        placeOrder() {
            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };

            let data = {
                address: this.address,
                paymentMethod: this.paymentMethod,
                cartItems: this.newCartItems,
                deliveryCharge: this.deliveryCharge,
                totalAmount: this.totalPrice,
                spendWalletAmount: this.spendWalletAmount,
            };
            this.$api.post('lend-game', data, config).then(response => {
                if (response.data.error === false) {
                    this.$store.dispatch('clearCart');
                    this.$swal("Order Confirmed!", "You ordered Successfully!", "success");
                    this.isLoading = false;
                    localStorage.setItem('cartItems', '');
                    localStorage.setItem('deliveryCharge', 0);
                    this.$router.push('/profile').then(err => {
                        setTimeout(function () {
                            location.reload();
                        }, 2000)
                    });
                }
                if (response.data.error === true) {
                    this.isLoading = false;
                    this.message = response.data.message;
                    this.showBackEndModal = true;

                }
            });
        },
        onRemoveCartItem(index,id) {
            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            var data = {
                id: id
            };
            this.$swal({
                title: "Do you want to remove this item?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    this.$api.post('cart-item/destroy', data, config).then(response => {
                        if (response.data.error == false){
                            this.$store.dispatch('removeCartItem', index)
                            swal("The item is removed.", {
                                icon: "success",
                                buttons: false,
                            });
                            setTimeout(function () {
                                location.reload();
                            }, 1500)
                        }
                    });
                } else {
                    swal("The item is not removed.");
                }
            });
        },
        getCartItems() {
          if (this.newCartItems != '' && this.newCartItems != null) {
            this.newCartItems = JSON.parse(this.newCartItems);
              if (this.newCartItems) {
                  for (let i = 0; i < this.newCartItems.length; i++) {
                      console.log(this.newCartItems[i])
                      this.gameIds.push(this.newCartItems[i]);
                  }
              }
          }
        }
    },
    created() {
        window.scrollTo(0,0);
        this.authData();
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

        // this.getCartItems();

        this.$store.watch((state) => {
                return this.$store.state.cart
            },
            (newValue, oldValue) => {
                this.cart = newValue;
            },
            {deep: true}
        );
    },
  }
</script>

