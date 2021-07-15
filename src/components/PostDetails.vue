<template>
  <div>
    <!-- Product details -->
    <div class="gamebazar-product-details pb-a-20">
      <div class="container">
        <a href="#" class="d-flex align-items-center mt-a-6 mb-a-6">

          <svg class="rotate-180" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFFBE7"/>
          </svg>
          <span class="ml-2 opa-7">Back</span>
        </a>
        <div class="row">
          <div class="col-md-6 pr-a-md-5" v-if="sliderSection">
            <div class="gamebazar-product-details__gallery">
              <lingallery :iid.sync="currentId" accentColor="#ffd715" baseColor="#0B0F18" :width="600" :height="400" :items="images"/>
            </div>
          </div>
          <div class="col-md-6 pl-a-md-5">
            <div class="gamebazar-product-details__content">
              <h1 class="f-s-48 gil-bold text-secondery mb-a-6">{{ post.name }}</h1>
              <div class="gamebazar-product-details__content__des">
                <p class="text-white gil-bold mb-4">Product details:</p>
                <p>{{ post.description }}</p>

              </div>
              <h2 class="f-s-34 gil-bold text-secondery mb-a-6">{{ post.price }} tk</h2>
              <div class=" mt-5">
                <a class="border-1 bg-secondery-gradient border-secondery-opa-25 primary-text primary-text-hover gil-bold py-2 pl-a-6 pr-a-6 d-inline-block br-4" @click="showSeller = true">Contact the seller</a>
              </div>
              <div class="row border-b-1 border-white-25 pt-a-6">
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">Publish date</p>
                    <p class="text-white gil-regular">{{ formattedDate(post.created_at) }}</p>
                  </div>
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">Product Id</p>
                    <p class="text-white gil-regular">{{ post.product_no }}</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">Avalability</p>
                    <p class="before-ball d-flex align-items-center text-success-ball" v-if="post.is_sold == 1">In stock</p>
                    <p class="before-ball d-flex align-items-center text-success-ball" v-else>Sold out</p>
                  </div>
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">Type</p>
                    <p class="before-ball d-flex align-items-center text-success-ball" v-if="post.product_type === 1">New</p>
                    <p class="before-ball d-flex align-items-center text-success-ball" v-if="post.product_type === 2">Used ( {{ post.condition }} )</p>
                  </div>
                </div>
              </div>

              <div class="row border-b-1 border-white-25 pt-a-6">
<!--                <div class="col-md-6">-->
<!--                  <div class="mb-a-6">-->
<!--                    <p class="text-white gil-bold mb-2">Location</p>-->
<!--                    <p class="text-white gil-regular">25 June 2021</p>-->
<!--                  </div>-->
<!--                </div>-->
                <div class="col-md-6">
                  <div class="mb-a-6">
                    <p class="text-white gil-bold mb-2">Address</p>
                    <p class="text-white gil-regular">{{ post.address }}</p>
                  </div>
                </div>
              </div>

              <div class="row pt-a-6">
                <div class="col-md-6">
                  <div class="">
                    <p class="text-white gil-bold f-s-20 mb-4">Learn about sellers</p>
                    <div class="w-80 h-80 overflow-hidden">
                      <img :src="post.user.data.image" class="img-fluid w-100" alt="Gamebazar image" v-if="post.user.data.image">
                      <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image" v-else>
                    </div>
                    <p class="text-white gil-bold mb-4">{{ post.user.data.name }}</p>
                    <div class="d-flex align-items-center">
                      <star-rating :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :border-width="1" :active-border-color="['#FFD715']" border-color="#D8D8D8" :rounded-corners="true" :read-only="true" :rating="rentingAvg" inactive-color="#D8D8D8" active-color="#FFD715" v-bind:star-size="24"></star-rating>
                    </div>
                    <div class="d-flex align-items-center mt-a-6">
                      <span class="mr-2 opa-7">All Rating</span>
                      <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFFBE7"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="h-100 d-flex align-items-end justify-content-end">
                    <a href="#" class="text-white">Report this post</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gamebazar-product-similar pb-a-20">
      <div class="container">
        <h3 class="text-white f-s-24 gil-bold mb-4">এই ধরনের আরও পোষ্ট</h3>
        <div class="d-grid grid-sm-cols-2 grid-md-cols-3 grid-lg-cols-4 grid-xl-cols-5 grid-gap-16 grid-gap-md-30 gamebazar-post">
          <router-link to="/sell-posts" >
            <div class="product-img position-relative br-4 overflow-hidden">
              <img src="../assets/img/play.png" class="img-fluid w-100 " alt="Gamebazar image">
              <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5">New</span>
              <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5">$123</span>
            </div>
            <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
            <p class="mb-4 text-white">Used 1.5 years</p>
            <div class="d-flex align-items-center text-secondery">
              <p class="mb-0">Details</p>
              <div class="gamebazar-post__arrow">
                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                </svg>
              </div>
            </div>
          </router-link>
          <a href="#">
            <div class="product-img position-relative br-4 overflow-hidden">
              <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
              <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5">New</span>
              <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5">$123</span>
            </div>
            <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
            <p class="mb-4 text-white">Used 1.5 years</p>
            <div class="d-flex align-items-center text-secondery">
              <p class="mb-0">Details</p>
              <div class="gamebazar-post__arrow">
                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                </svg>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="product-img position-relative br-4 overflow-hidden">
              <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
              <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5">New</span>
              <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5">$123</span>
            </div>
            <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
            <p class="mb-4 text-white">Used 1.5 years</p>
            <div class="d-flex align-items-center text-secondery">
              <p class="mb-0">Details</p>
              <div class="gamebazar-post__arrow">
                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                </svg>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="product-img position-relative br-4 overflow-hidden">
              <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
              <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5">New</span>
              <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5">$123</span>
            </div>
            <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
            <p class="mb-4 text-white">Used 1.5 years</p>
            <div class="d-flex align-items-center text-secondery">
              <p class="mb-0">Details</p>
              <div class="gamebazar-post__arrow">
                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                </svg>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="product-img position-relative br-4 overflow-hidden">
              <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
              <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white br-t-l-5">New</span>
              <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium br-b-r-5">$123</span>
            </div>
            <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
            <p class="mb-4 text-white">Used 1.5 years</p>
            <div class="d-flex align-items-center text-secondery">
              <p class="mb-0">Details</p>
              <div class="gamebazar-post__arrow">
                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div class="text-center mt-5">
          <router-link to="/sell-posts" class="border-1 border-secondery-opa-25 text-secondery py-2 pl-a-6 pr-a-6 d-inline-block br-4">All post</router-link>
        </div>
      </div>
    </div>
    <div v-if="showSeller">
      <transition name="modal">
        <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showSeller = false" class="close-modal"></span>
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
  </div>
</template>
<script>
    import StarRating from 'vue-star-rating';
    export default {
        components: {StarRating},
        name: 'post-details',
        props: ['id', 'slug'],
        data() {
            return {
                showSeller: false,
                sliderSection: false,
                images: '',
                post: '',
                currentId: null,
                rentingAvg : 4
            }
        },
        methods: {
          formattedDate(date) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let formattedDate = new Date(date)
            return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
          },
        },
        created() {
            window.scrollTo(0,0);
            this.$api.get('sell-post/'+ this.id +'?include=subcategory,user').then(response => {
                this.post = response.data.data;
                if (this.post.slider.length > 0) {
                  this.images = this.post.slider
                  this.sliderSection = true
                }

                console.log(this.post)
            });

        },
    }
</script>
