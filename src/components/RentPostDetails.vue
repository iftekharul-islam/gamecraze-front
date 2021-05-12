<template>
    <div>
        <!-- games header section -->
        <section class="user-profile-heading">
            <img src="../assets/img/profile-bg.png" alt="profile bg" class="img-fluid user-profile-bg">
        </section>
        <div class="container games-view primary-bg">
            <div class="row max-400 mx-auto" v-if="rentPostDetails">
                <div class="col-12 mb-5">
                    <h3 class="f-s-28 gil-bold">Call of duty: Black OPS, Cold War</h3>
                </div>
                <div class="col-6">
                    <div class="mb-4">
                        <p class="text-white mb-1">Disk condition</p>
                        <p class="text-secondery gil-bold mb-0">Super</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">Renter’s name</p>
                        <p class="text-secondery gil-bold mb-0">MInhaj</p>
                    </div>
                      <div class="mb-4">
                        <p class="text-white mb-1">Status</p>
                        <p class="text-secondery gil-bold mb-0">Available  for 3 weeks</p>
                    </div>
                    <div class="mb-4">
                        <label class="toggle-switch mt-0 mt-sm-2">
                            <input type="checkbox">
                            <span><span>Inactive</span>
                            <span>Active</span></span>
                            <a class="toggle-ball"></a>
                        </label>
                    </div>
                </div>
                <div class="col-6">
                   <div class="mb-4">
                        <p class="text-white mb-1">Disk type</p>
                        <p class="text-secondery gil-bold mb-0">Digtal copy</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">Lender’s name</p>
                        <p class="text-secondery gil-bold mb-0">Zahid</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">Platform</p>
                        <p class="text-secondery gil-bold mb-0">PS4</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white mb-1">Available from</p>
                        <p class="text-secondery gil-bold mb-0">25 Feb, 2021</p>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <a href="#" class="btn--secondery w-75"><span>SHARE NOW</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RentPostDetails',
        props: ['id','slug'],
        data() {
            return {
                rentPostDetails : [],
            }
        },
        methods: {

        },
        created() {
            console.log(this.$route.params.id);
            window.scrollTo(0,0);
            console.log('hello in rent post details page');
            this.$api.get('rents/' + this.$route.params.id + '?include=game.assets,game.genres,game.platforms,user').then(response => {
                console.log(response);
                this.rentPostDetails = response.data.data;
            });
        }
    }
</script>
