<template>
    <div>
        <section class="cart-section">
          <div class="container">
            <div class="cart-heading"  v-if="newCartItems.length">
              <h2>{{ $t('your_cart', $store.state.locale) }}</h2>
            </div>
            <div class="cart-heading-empty" v-if="emptyCart">
              <h2>{{ $t('my_cart_empty', $store.state.locale) }}</h2>
            </div>
            <div v-if="newCartItems.length" class="row">
              <div class="mb-4 mb-lg-0 col-md-12 col-lg-7">
                <div class="cart-section--item-details">
                  <table class="table table-borderless cart-section--item-details--table">
                      <thead>
                        <tr>
                            <td scope="col">{{ $t('item', $store.state.locale) }}</td>
                            <td scope="col">{{ $t('type', $store.state.locale) }}</td>
                            <td scope="col">{{ $t('rent_week', $store.state.locale) }}</td>
                             <td scope="col">{{ $t('price', $store.state.locale) }}</td>
                        </tr>
                      </thead>
                      <tbody >

                        <tr v-for="(item, index) in newCartItems" :key="index">
                            <td scope="col">{{ item.game_name }}</td>
                            <td scope="col" v-if="item.disk_type == 0">Digital</td>
                            <td scope="col" v-if="item.disk_type == 1">Physical</td>
                            <td scope="col">{{ item.rent_week }}</td>
                            <td scope="col">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="new-price"><span>৳ </span>
                                        {{ item.regular_price + item.regular_commission }}
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
                        <span>{{ $t('bag_item', $store.state.locale) }}</span>
                      </div>
                      <div class="subtotal d-flex align-items-center justify-content-between">
                        <p>{{ $t('subtotal', $store.state.locale) }}</p>
                        <span class="subtotal-price">৳ {{ mainAmount }}</span>
                      </div>
                      <div class="subtotal d-flex align-items-center justify-content-between">
                        <p>{{ $t('delivery_charge', $store.state.locale) }}</p>
                        <span class="subtotal-price">৳ {{ deliveryCharge }}</span>
                      </div>
                      <div class="promotional-code">
                        <p class="mb-2">Enter a promotional code</p>
                        <div class="promotional-code--input-group d-flex">
                          <input type="text" class="form-control mr-3" v-model="promoCode">
                          <button class="btn--cart-btn d-flex" @click.prevent="applyCode">
                              <span v-if="!isLoadingCode">APPLY</span>
                              <span v-if="isLoadingCode" class="spinner-border spinner-border-sm"></span>
                          </button>
                        </div>
                        <p class="text-danger" v-if="promoError">Invalid Promo Code</p>
                      </div>
                      <div class="total d-flex align-items-center justify-content-between">
                          <p>{{ $t('total', $store.state.locale) }}</p>
                          <span class="total-price">৳ {{ grandTotal }}</span>
                      </div>
                      <div class="total d-flex align-items-center justify-content-between" v-if="discountAmount != 0">
                          <p>Discount amount</p>
                          <span class="total-price">৳ {{ discountAmount }}</span>
                      </div>
                      <div class="total d-flex align-items-center justify-content-between" v-if="discountAmount != 0">
                          <p>Final amount</p>
                          <span class="total-price">৳ {{ totalPrice }}</span>
                      </div>
                      </form>
                  </div>
                   <div class="cart-section--item-price-box--payment-method secondery-border mt-a-6">
                            <p class="mb-0">{{ $t('payment_method', $store.state.locale) }}</p>
                            <div class="cart-section--item-price-box--payment-method--content d-flex flex-wrap align-items-center justify-content-between content">
                                <div class="checkbox-parents" v-if="digitalIsExist">
                                    <input type="radio" id="cod" name="payment" value="cod" class="checkbox-parents--input" v-model="paymentMethod">
                                    <label for="cod" class="checkbox-parents--label">Cash on Delivery</label>
                                </div>
                                <div class="checkbox-parents">
                                    <input type="radio" id="op" name="payment" value="bkashpay" class="checkbox-parents--input" v-model="paymentMethod">
                                    <label for="op" class="checkbox-parents--label">Bkash payment</label>
                                </div>
                                <div class="checkbox-parents w-100 mt-3" v-if="availableWallet">
                                    <input type="checkbox" id="refer" @click="spendWalletExistAmount($event)" class="checkbox-parents--input">
                                    <label for="refer" class="checkbox-parents--label">Referral amount </label>
                                </div>
                            </div>
                      </div>
                  <!-- Enter Adsress -->
                    <ValidationObserver v-slot="{ handleSubmit }">
                      <form class="" @submit.prevent="handleSubmit(onCheckout)" method="post">
                          <div class="cart-delivery-address" v-if="digitalIsExist">
                              <label>{{ $t('enter_address', $store.state.locale) }}</label>
                              <ValidationProvider name="address" :rules="{required: digitalIsExist}" v-slot="{ errors }">
                                <textarea type="text" v-model="address" class="promo-code-field"></textarea>
                              <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                              </ValidationProvider>
                          </div>
                        <!-- Agree terms condition -->
                        <div class="post-rent--form-group--agree pl-a-6 mt-a-3">
                            <div class="checkbox-parents">
                                <ValidationProvider name="Terms & Conditions" rules="required" v-slot="{ errors }">
                                <input type="checkbox" id="terms-agree" class="checkbox-parents--input" v-model="agreement" @change="onAgreement($event)">
                                <label for="terms-agree" class="checkbox-parents--label">{{ $t('i_agree', $store.state.locale) }} <router-link to="/terms" target="_blank" class="text-secondery"><u> {{ $t('terms', $store.state.locale) }}</u></router-link></label>
                                <span v-if="errors.length" class="error-message d-block ml--30">{{ errors[0] }}</span>
                            </ValidationProvider>
                            </div>
                        </div>
                           <!-- Place Order button -->
                            <div class="checkout-btn">
                                <button class="btn--secondery-hover br-4 gil-bold border-0 font-weight-bold primary-text pl-a-6 pr-a-6 d-inline-block position-relative w-100 gil-bold" :disabled="isLoading">
                                    {{ $t('place_order', $store.state.locale) }}
                                    <i v-if="isLoading" class="spinner-border spinner-border-sm"></i>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        <!-- PLace Order button -->
                      </form>
              </ValidationObserver>
              <!-- End Enter Address -->
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
                                            <p>{{ $t('game_not_available_part_1', $store.state.locale) }} {{ id }} {{ $t('game_not_available_part_2', $store.state.locale) }}</p>
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
                                            <p>{{ $t('exceed_rent_limit', $store.state.locale) }}</p>
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
                                            <span aria-hidden="true" @click="showRentCountModal = false">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                                                    <path d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z" fill="white"/>
                                                </svg>
                                            </span>
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
                            <p>Opps !!! The game <span v-for="(item, index) in cart" :key="index"> <strong v-if="item.rent.id == id">{{ item.rent.game.data.name }}</strong></span> you wanted to rent is not available at this moment.</p>
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
              digitalIsExist: false,
              isLoadingCode: false,
              discountAmount: false,
              promoCode: '',
              promoAmount: 0,
              promoError: false,
              agreement: '',
              address: '',
              games: null,
              checkedGame: '',
              lendWeek: '',
              cart: [],
              paymentMethod: 'bkashpay',
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
              mainAmount: 0,
              totalCommission: 0,
              availableWallet: false,
              spendWalletAmount: 0,
              couponId: null
          }
      },
      computed: {
        grandTotal() {
          return parseInt(this.mainAmount) + parseInt(this.deliveryCharge);
        }
      },
    methods: {
        autoPromoApply() {
            let code = this.$store.state.promo ?? false;
            if (code) {
                this.promoCode = code;
                this.applyCode();
            }
        },
        applyCode() {
            this.isLoadingCode = true;
            this.promoError = false;
            this.discountAmount = 0;
            this.totalPrice = this.mainAmount;
            this.couponId = null;
            if (this.promoCode != null){
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                let data = {
                    promo: this.promoCode,
                    amount: this.mainAmount,
                };
                this.$api.post('apply-promo', data, config).then(response => {
                    if (response.data.error == false){
                        this.promoAmount = response.data.amount;
                        this.couponId = response.data.coupon_id;
                        this.discountAmount = this.mainAmount - this.promoAmount;
                        this.totalPrice = parseInt(this.promoAmount) + parseInt(this.deliveryCharge);
                    } else {
                        this.promoError = true;
                    }
                    this.isLoadingCode = false;
                })
            }
        },
        spendWalletExistAmount(event) {
            if (event.target.checked == true) {
                if (this.totalPrice > this.user.wallet) {
                    this.totalPrice = this.totalPrice - this.user.wallet;
                    this.spendWalletAmount = this.user.wallet
                } else {
                    this.spendWalletAmount = this.totalPrice;
                    this.totalPrice = 0 ;
                }
            } else {
                this.totalPrice = this.totalPrice + this.spendWalletAmount;
            }
        },
        authData () {
            var auth = this.$store.getters.ifAuthenticated;
            this.digitalIsExist = false;
            if (auth){
                var config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };
                this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                    this.user = response.data.data;
                    if (this.user.wallet != 0) {
                        this.availableWallet = false;
                    }
                })
                    .catch( err => {
                    console.log(err);
                });
                this.$api.get('cart-items', config).then(response => {
                    this.newCartItems = response.data.data.cartItems;
                    this.totalPrice = response.data.data.totalRegularPrice;
                    this.mainAmount = this.totalPrice;
                    this.deliveryCharge = response.data.data.deliveryCharge;
                    this.autoPromoApply();
                    if (this.newCartItems) {
                        for (let i = 0; i < this.newCartItems.length; i++) {
                            this.rentIds.push(this.newCartItems[i].rent_id);
                            if (this.newCartItems[i].disk_type == 1){
                              this.digitalIsExist = true;
                            }
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

            let config = {
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
                        this.$router.push('/profile').then(() => {
                            this.$root.$emit('profileEdit');
                        });
                    }
                }
                else {
                    this.$swal("Login First", "Please Login to Lend Games");
                    this.$router.push('/login').catch( ()=> {});
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
                discountAmount: this.discountAmount,
                couponId: this.couponId,
            };
            this.$api.post('lend-game', data, config).then(response => {
                if (response.data.error === false) {
                    this.$store.dispatch('clearCart');
                    this.$swal(this.$t('order_confirmed', this.$store.state.locale), this.$t('order_successful', this.$store.state.locale), "success");
                    this.isLoading = false;
                    localStorage.setItem('cartItems', '');
                    localStorage.setItem('deliveryCharge', 0);
                    this.$store.dispatch('setPromo', null);
                    this.$router.push('/profile').then( () => {
                        this.$root.$emit('rentGames')
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
                title: this.$t('cart_remove_warning', this.$store.state.locale),
                text: "",
                icon: "warning",
                buttons: [this.$t('cancel', this.$store.state.locale), this.$t('ok', this.$store.state.locale)],
            }).then((willDelete) => {
                if (willDelete) {
                    this.$api.post('cart-item/destroy', data, config).then(response => {
                        if (response.data.error == false){
                            this.$store.dispatch('removeCartItem', index)
                            swal(this.$t('cart_removed', this.$store.state.locale), {
                                icon: "success",
                                buttons: false,
                                timer: 1500,
                            });
                            this.authData();
                            this.$root.$refs.Navbar.authData();
                        }
                    });
                } else {
                    this.$swal(this.$t('cart_not_removed', this.$store.state.locale),{
                        icon: "warning",
                        buttons: [this.$t('ok', this.$store.state.locale)],
                        timer: 2000
                    });
                }
            });
        },
        getCartItems() {
          if (this.newCartItems != '' && this.newCartItems != null) {
            this.newCartItems = JSON.parse(this.newCartItems);
              if (this.newCartItems) {
                  for (let i = 0; i < this.newCartItems.length; i++) {
                      this.gameIds.push(this.newCartItems[i]);
                  }
              }
          }
        }
    },
    created() {
        window.scrollTo(0,0);
        this.authData();

        this.$api.get('commission').then(response => {
            if (response.data.data) {
                this.commissionAmount = response.data.data.amount;
            }
        });
    },
  }
</script>

