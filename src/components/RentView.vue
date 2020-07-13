<template>
    <div>
        <!-- Rented page  -->
        <section class="rented-page sign-in-bg">
            <div class="game-cover-image">
                <img width="100%" src="../assets/img/rented/rent-cover.png" alt="wwe">
            </div>
            <div class="container-fluid rented-page-width">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="card" v-if="rent">
                            <h2 class="card-title text-center mb-5">Rent Preview</h2>
                            <div class="rent-preview">
                                <div class="row">
                                    <div class="col"><h4>Game Name:</h4></div>
                                    <div class="col"><h4>{{ rent.game.data.name }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Disk Condition:</h4></div>
                                    <div class="col"><h4>{{ rent.diskCondition.data.name_of_type }} ( {{ rent.diskCondition.data.description }} )</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Available from:</h4></div>
                                    <div class="col"><h4>{{ rent.availability_from_date }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Platform:</h4></div>
                                    <div class="col"><h4>{{ rent.platform.data.name }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Maximum rented week:</h4></div>
                                    <div class="col"><h4>{{ rent.max_number_of_week }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Platform:</h4></div>
                                    <div class="col"><h4>{{ rent.platform.data.name }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Status:</h4></div>
                                    <div class="col" v-if="rent.status == 1"><h4>Active</h4></div>
                                    <div class="col" v-else><h4>Inactive</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h4>Disk image:</h4>
                                        <div class="disk-preview disk">
                                            <img :src="rent.disk_image" id="disk-preview" class="img-thumbnail">
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>Cover image</h4>
                                        <div class="cover-preview disk">
                                            <img :src="rent.cover_image" class="img-thumbnail">
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="text-center rented-page-btn">
                                    <button type="button" class="btn btn-primary mb-2" @click.prevent="onConform">Confirm</button>
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
        data () {
            return {
                rent: null,
            }
        },
        name: "RentView",
        mounted () {
            console.log(this.$route.params.id)
            this.$api.get('rents/' + this.$route.params.id + '?include=diskCondition,game,platform')
                .then (response =>
                {
                    this.rent = response.data.data
                    console.log(this.rent);
                })
        },
        methods: {
            onConform () {
                console.log('hi Koushik babu!!!!')
            }
        }
    }
</script>