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
                            <h3 class="card-title text-center">Rent Preview</h3>
                            <!-- form -->
                            <form>
                                <div class="form-group">
                                    <!-- Game name -->
                                    <label class="mr-2 mt-5">Game Name:</label>
                                    <label>{{ rent.game.data.name }}</label>
                                </div>
                                <div class="form-group">
                                    <label class="mr-2">Disk Condition:</label>
                                    <label class="mr-2">{{ rent.diskCondition.data.name_of_type }}</label>
                                    <label class="mr-2">( {{ rent.diskCondition.data.description }} )</label>
                                </div>
                                <!-- date available -->
                                <div class="form-group">
                                    <label class="mr-2">Available from:</label>
                                    <label>{{ rent.availability_from_date }}</label>
                                </div>
                                <!-- platform -->
                                <div class="form-group">
                                    <label class="mr-2">Platform:</label>
                                    <label>{{ rent.platform.data.name }}</label>
                                </div>
                                <!-- Rent week -->
                                <div class="form-group">
                                    <label class="mr-2">Maximum rented week:</label>
                                    <label>{{ rent.max_number_of_week }}</label>
                                </div>
                                <!-- Status -->
                                <div class="form-group">
                                    <label class="mr-2">Status:</label>
                                    <label v-if="rent.status == 1">Active</label>
                                    <label v-else >Inactive</label>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <!-- disk image -->
                                        <div class="form-group">
                                            <label >Disk Image</label>
                                            <div class="disk-preview">
                                                <img :src="rent.disk_image" id="disk-preview" class="img-thumbnail">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <!-- cover image -->
                                        <div class="form-group">
                                            <label>Cover Image</label>
                                            <div class="cover-preview">
                                                <img :src="rent.cover_image" class="img-thumbnail">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
        mounted() {
            console.log(this.$route.params.id)
            this.$api.get('rents/' + this.$route.params.id + '?include=diskCondition,game,platform')
                .then (response =>
                {
                    this.rent = response.data.data
                    console.log(this.rent);
                })
        }
    }
</script>

<style scoped>

</style>