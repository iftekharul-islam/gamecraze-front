<template>
    <div>
        <!-- Rating List -->
        <div class="container">
            <div class="row">
                <div class="col-md-10 mx-auto mt-3">
                    <router-link to="/profile" class="text-white gil-bold mb-4 d-flex align-items-center" @click.native="clickOnRating">
                        <svg class="mr-2" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9999 9.293L4.41394 9.293L9.70694 14.586L8.29294 16L0.585938 8.293L8.29294 0.586L9.70694 2L4.41394 7.293L18.9999 7.293L18.9999 9.293Z" fill="white"/>
                        </svg>
                        Back
                    </router-link>
                    <div class="rating-list">
                        <h5 class="gray-text f-s-24 gil-medium mb-5">Renting review list ({{ renterRating.length}})</h5>

                        <div class="rating-list--box" v-for="(rating, index) in renterRating">
                            <h4 class="f-s-28 gil-medium text-secondery mb-4">{{ rating.lend.data.rent.data.game.data.name }}</h4>
                            <div class="d-flex flex-column flex-lg-row justify-content-between">
                                <div class="rating-list--box--content max-368">
                                    <p class="gil-bold gray-text f-s-16 mb-2">Order complete date</p>
                                    <p class="text-white mb-4 gil-bold">{{ formattedReturnDate(rating.lend.data.lend_date) }}</p>
                                    <p class="gray-text gil-bold">Lenders feedback to you</p>
                                    <div class="d-flex align-items-center mb-4">
                                        <star-rating :read-only="true" :rating="rating.renter_rating" inactive-color="#D8D8D8" active-color="#FFD715" v-bind:star-size="30"></star-rating>
                                    </div>
                                    <p class="text-white">{{ rating.renter_comment }}</p>
                                </div>
                                <div class="rating-list--box--content mb-4 mb-lg-0 mr-lg-4 max-368">
                                    <p class="gil-bold gray-text f-s-16 mb-2">Order complete date</p>
                                    <p class="text-white mb-4 gil-bold">{{ formattedReturnDate(rating.lend.data.lend_date) }}</p>
                                    <p class="gray-text gil-bold">Your feedback to lenders</p>
                                    <div class="d-flex align-items-center mb-4">
                                        <star-rating :read-only="true" :rating="rating.lender_rating" inactive-color="#D8D8D8" active-color="#FFD715" v-bind:star-size="30"></star-rating>
                                    </div>
                                    <p class="text-white">{{ rating.lender_comment }}</p>
                                </div>
                            </div>
                        </div>

                        <!--                       <div class="text-center">-->
                        <!--                            <a href="#" class="gray-text gil-bold f-s-16 ">Load more</a>-->
                        <!--                       </div>-->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import StarRating from 'vue-star-rating';
    export default {
        components: {StarRating},
        data() {
            return {
                renterRating: [],
            }
        },
        methods: {
            clickOnRating() {
                var auth = this.$store.getters.ifAuthenticated;
                if (!auth) {
                    this.$router.push('/lend-notice');
                    return
                }
                this.$root.$emit('userRating');
            },
            formattedReturnDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
        },
        created() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            this.$api.get('renter-rating-list?include=renter,lender,lend.rent.game', config).then(response =>
            {
                this.renterRating = response.data.data;
                console.log(this.lenderRating);
            });
        }
    }
</script>

<style scoped>
    fieldset {
        max-width: 100% !important;
    }
</style>
