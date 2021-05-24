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
                        <h5 class="gray-text f-s-24 gil-medium mb-5">Renting review list (32)</h5>

                        <div class="rating-list--box">
                            <h4 class="f-s-28 gil-medium text-secondery mb-4">Assassin's Creed 4 black flag</h4>
                            <div class="d-flex flex-column flex-lg-row justify-content-between">
                                <div class="rating-list--box--content mb-4 mb-lg-0 mr-lg-4 max-368">
                                    <p class="gil-bold gray-text f-s-16 mb-2">Order complete date</p>
                                    <p class="text-white mb-4 gil-bold">25 Apr, 2021</p>
                                    <p class="gray-text gil-bold">Lenders feedback to you</p>
                                    <div class="d-flex align-items-center mb-4">
                                        <span class="mr-3"><img src="../assets/img/react1.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react2.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react3.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react4.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react5.png" alt="profile icon"></span>
                                    </div>
                                    <p class="text-white">"He was an amazing guy and given back my game cd among deadlines. Great guy!!!"</p>
                                </div>
                                <div class="rating-list--box--content max-368">
                                    <p class="gil-bold gray-text f-s-16 mb-2">Order complete date</p>
                                    <p class="text-white mb-4 gil-bold">25 Apr, 2021</p>
                                    <p class="gray-text gil-bold">Lenders feedback to you</p>
                                    <div class="d-flex align-items-center mb-4">
                                        <span class="mr-3"><img src="../assets/img/react1.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react2.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react3.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react4.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react5.png" alt="profile icon"></span>
                                    </div>
                                    <p class="text-white">"He was an amazing guy and given back my game cd among deadlines. Great guy!!!"</p>
                                </div>
                            </div>
                        </div>
                        <div class="rating-list--box">
                            <h4 class="f-s-28 gil-medium text-secondery mb-4">Assassin's Creed 4 black flag</h4>
                            <div class="d-flex flex-column flex-lg-row justify-content-between">
                                <div class="rating-list--box--content mb-4 mb-lg-0 mr-lg-4 max-368">
                                    <p class="gil-bold gray-text f-s-16 mb-2">Order complete date</p>
                                    <p class="text-white mb-4 gil-bold">25 Apr, 2021</p>
                                    <p class="gray-text gil-bold">Lenders feedback to you</p>
                                    <div class="d-flex align-items-center mb-4">
                                        <span class="mr-3"><img src="../assets/img/react1.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react2.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react3.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react4.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react5.png" alt="profile icon"></span>
                                    </div>
                                    <p class="text-white">"He was an amazing guy and given back my game cd among deadlines. Great guy!!!"</p>
                                </div>
                                <div class="rating-list--box--content max-368">
                                    <p class="gil-bold gray-text f-s-16 mb-2">Order complete date</p>
                                    <p class="text-white mb-4 gil-bold">25 Apr, 2021</p>
                                    <p class="gray-text gil-bold">Lenders feedback to you</p>
                                    <div class="d-flex align-items-center mb-4">
                                        <span class="mr-3"><img src="../assets/img/react1.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react2.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react3.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react4.png" alt="profile icon"></span>
                                        <span class="mr-3"><img src="../assets/img/react5.png" alt="profile icon"></span>
                                    </div>
                                    <p class="text-white">"He was an amazing guy and given back my game cd among deadlines. Great guy!!!"</p>
                                </div>
                            </div>
                        </div>
                       <div class="text-center">
                            <a href="#" class="gray-text gil-bold f-s-16 ">Load more</a>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {

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
        }

    }
</script>

<style scoped>
    fieldset {
        max-width: 100% !important;
    }
</style>
