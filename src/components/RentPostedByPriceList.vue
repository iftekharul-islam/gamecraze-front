<template>
    <div>
        <section class="game-available-section">
            <div class="container">
                <h2 class="text-center mb-5">{{ $t('available_now', $store.state.locale) }} !</h2>
                <div class="game-available-section--table">
                    <table class="table table-borderless rented-dashbord">
                        <thead class="">
                        <tr>
                            <th scope="col">{{ $t('game_owner', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('status', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('disk_type', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('platform', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('create_post', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('available_for', $store.state.locale) }}</th>
                            <th scope="col">{{ $t('price_for_1st_week', $store.state.locale) }}</th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(rent, index) in rentPosts" :key="index" @click="$router.push('/login')" :class="{disablePost: rent.rented_user_id !== null}">
                                <td scope="col" v-if="rent.user.data.image">
                                    <img :src="rent.user.data.image" alt="renter">{{ rent.user.data.name }}
                                </td>
                                <td scope="col" v-else>
                                    <img width="80px" v-if="rent.user.data.gender === 'Male'" src="../assets/img/male.png" alt="renter">
                                    <img width="80px" v-else-if="rent.user.data.gender === 'Female'" src="../assets/img/female.png" alt="renter">
                                    <img v-else src="../assets/img/avatar.png" width="80px" alt="renter">{{ rent.user.data.name }}
                                </td>
                                <td scope="col" v-if="rent.rented_user_id !== null"><span>Rented</span></td>
                                <td scope="col" v-else>Available</td>
                                <!--                            <td scope="col" v-if="rent.checkpoint">{{ rent.checkpoint.data.area.data.name }}</td>-->
                                <td scope="col" v-else>Not Set</td>
                                <td scope="col" v-if="rent.disk_type == 1">Physical Disk</td>
                                <td scope="col" v-else>Digital Disk</td>
                                <td scope="col"> {{ rent.platform.data.name }}
                                <td scope="col">{{ formattedDate(rent.availability_from_date) }}</td>
                                <td scope="col"><span>{{ rent.max_number_of_week}} week(s)</span></td>
                                <td>
<!--                                    <del class="mr-4"><span> ৳</span> {{ rent.price_combination.regular_price}}</del>-->
                                    <span class="new-price"><span>৳</span> {{ rent.price_combination.regular_price}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
 
    export default {
        props: ['slug'],
        data() {
            return {
                price: 0,
                rents: [],
                lends: [],
                show: false,
                rentPosts: [],
            }
        },
        methods: {
            formattedDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
            authData () {
                var auth = this.$store.getters.ifAuthenticated;
                if (auth){
                    this.$router.push('/rent-posted-users/'+ this.slug)
                }
            },
        },
        created() {
            this.authData();
            window.scrollTo(0,0);
            this.$api.get('rent-posted-users/' + this.slug + '?include=game,game.basePrice,diskCondition,user,checkpoint.area.thana.district,platform').then(response => {
                this.rentPosts = response.data.data;
            });
        },
    }
</script>
