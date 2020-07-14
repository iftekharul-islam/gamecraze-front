<template>
    <div>
        <!-- Category  -->
         <!-- Cart  -->
  <section class="cart sign-in-bg pt-4">
    <div class="container-fluid cart-width">
      <main class="pb-5">
        <div class="basket">
         
          <div class="basket-labels">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col" class="item item-heading">Item</th>
                  <th scope="col" class="price">Price</th>
                  <th scope="col" class="quantity">Quantity</th>
                  <th scope="col" class="subtotal">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr class="basket-product">
                  <th scope="row" class="item">
                   <div class="item-product">
                    <div class="product-image">
                      <img src="../assets/img/selling/jedi-fallen.jpg" alt="Placholder Image 2" class="product-frame img-fluid">
                    </div>
                    <div class="product-details">
                      <h1><strong><span class="item-quantity">1</span> x Action</strong> jedi-fallen order</h1>
                      <p>Product Code - 232321939</p>
                    </div>
                   </div>
                  </th>
                  <td class="price">5000</td>
                  <td class="quantity">
                    <input type="number" value="1" min="1" class="quantity-field">
                  
                </td>
                  <td class="subtotal">5000</td>
                    <div class="remove-cart">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
                  <!-- <div class="border"></div> -->
                </tr>
                <tr class="basket-product">
                  <th scope="row" class="item">
                   <div class="item-product">
                    <div class="product-image">
                      <img src="../assets/img/selling/jedi-fallen.jpg" alt="Placholder Image 2" class="product-frame img-fluid">
                    </div>
                    <div class="product-details">
                      <h1><strong><span class="item-quantity">1</span> x Action</strong> jedi-fallen order</h1>
                      <p>Product Code - 232321939</p>
                    </div>
                   </div>
                  </th>
                  <td class="price">5000</td>
                  <td class="quantity">
                    <input type="number" value="1" min="1" class="quantity-field">                 
                </td>
                  <td class="subtotal">5000</td>
                   <div class="remove-cart">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
                </tr>
                 <tr class="basket-product">
                  <th scope="row" class="item">
                   <div class="item-product">
                    <div class="product-image">
                      <img src="../assets/img/selling/jedi-fallen.jpg" alt="Placholder Image 2" class="product-frame img-fluid">
                    </div>
                    <div class="product-details">
                      <h1><strong><span class="item-quantity">1</span> x Action</strong> jedi-fallen order</h1>
                      <p>Product Code - 232321939</p>
                    </div>
                   </div>
                  </th>
                  <td class="price">5000</td>
                  <td class="quantity">
                    <input type="number" value="1" min="1" class="quantity-field">
                </td>
                  <td class="subtotal">5000</td>
                   <div class="remove-cart">
                      <button>
                        <i class="far fa-trash-alt"></i>
                      </button>
                  </div>
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
              <button class="checkout-cta btn btn-primary">Go to Secure Checkout</button>
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
                games: [],
                checkedGame: '',
                categories: ['Action', 'Adventure', 'Arcade', 'Music & Dance', 'Racing', 'Role Playing', 'Simulation', 'Sports', 'Strategy'],
                checkedCategories: [],
            }
        },
        computed: {
            filteredGames(){
                if (!this.checkedCategories.length) {
                    return this.games
                }
                // console.log(this.checkedCategories)
                var checked = this.checkedCategories

                return this.games.filter(function (game) {
                    var genres= []

                    for (var genre of game.genres.data) {
                        genres.push(genre.name)
                    }
                    return checked.some(r => genres.includes(r))
                })
            }
        },
        methods: {

        },
        created() {
            this.$api.get('games?include=assets,genres,platforms').then(response => {
                this.games = response.data.data
                console.log(this.games);
            });
        }
    }
</script>