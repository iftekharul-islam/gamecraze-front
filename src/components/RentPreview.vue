<template>
    <div>
        <section class="rented-page sign-in-bg">
            <div class="container-fluid rented-page-width">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="card">
                            <h3 class="card-title text-center">Rent Preview</h3>
                                <!-- form -->
                                <form>
                                    <div class="form-group">
                                        <!-- Game anme -->
                                        <label class="mr-2 mt-5">Game Name:</label>
                                        <label>{{ games.name }}</label>
                                    </div>
                                    <div class="form-group">
                                        <label class="mr-2">Maximum rented week:</label>
                                        <label>{{ this.$store.state.rentPostDetails.max_week }}</label>
                                    </div>
                                    <!-- date available -->
                                    <div class="form-group">
                                        <label class="mr-2">Available from:</label>
                                        <label>{{ this.$store.state.rentPostDetails.availability }}</label>
                                    </div>
                                    <!-- platform -->
                                    <div class="form-group">
                                        <label class="mr-2">Platform:</label>
                                        <label>{{ platforms.name }}</label>
                                    </div>
                                    <div class="form-group">
                                        <label class="mr-2">Disk Condition:</label>
                                        <label class="mr-2">{{ diskConditions.name_of_type }}</label>
                                        <label class="mr-2">( {{ diskConditions.description }} )</label>
                                    </div>
                                    <!-- disk image -->
                                    <div class="form-group">
                                            <label >Disk Image</label>
                                        <div class="disk-preview">
                                            <img :src="this.$store.state.rentPostDetails.cover_image" id="preview" class="img-thumbnail">
                                        </div>
                                    </div>
                                    <!-- Cover image -->
                                    <div class="form-group">
                                        <div class="cover-upload">
                                            <label>Cover Image</label>
                                            <div class="disk-preview">
                                                <img :src="this.$store.state.rentPostDetails.disk_image" class="img-thumbnail">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Status -->
                                    <div class="form-group">
                                        <label class="mr-2">Status:</label>
                                        <label v-if="this.$store.state.rentPostDetails.status == 1">Active</label>
                                        <label v-else >Inactive</label>
                                    </div>
                                </form>
                                <div class="text-center rented-page-btn">
                                    <button type="button" class="btn btn-primary mb-2" @click.prevent="onSubmit">Confirm</button>
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
                games: {},
                platforms: {},
                diskConditions: {}
            }
        },
        methods: {
            onSubmit () {
                this.$api.post('rents', this.$store.state.rentPostDetails)
                    .then(response => {
                        console.log(response);
                    });
                console.log("Store successfully");
            },
        },
        created() {
            this.$api.get('games/' + this.$store.state.rentPostDetails.game_id)
                .then(response =>
                {
                    this.games = response.data.data
                    console.log(this.games)
                })
            this.$api.get('platforms/' + this.$store.state.rentPostDetails.platform_id)
                .then(response =>
                {
                    this.platforms = response.data.data
                })
            this.$api.get('disk-conditions/' + this.$store.state.rentPostDetails.disk_condition_id)
                .then(response =>
                {
                    this.diskConditions = response.data.data
                })
        }
    }
</script>

<style scoped>

</style>