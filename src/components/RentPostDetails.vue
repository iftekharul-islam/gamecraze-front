<template>
    <div>
        <!-- games header section -->
        <div class="container">
            <div class="row" v-if="rentPostDetails">
                <div class="col-md-6">
                    <p>rent details</p>
                    <p>lend week :</p><p>{{ rentPostDetails.max_number_of_week }}</p>
                    <p>Renter name:</p>
                    <p>{{ rentPostDetails.user.data.name }}</p>
                </div>
                <div class="col-md-6">
                    <p>games details</p>
                    <p>game name</p><p>{{ rentPostDetails.game.data.name }}</p>
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
