<template>
    <div>
        <!-- Rented page  -->
        <section class="rented-page sign-in-bg">
            <div class="container-fluid rented-page-width">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="card">
                            <h3 class="card-title text-center">Rent</h3>
<!--                            <ValidationObserver v-slot="{ onSubmit }">-->
                            <!-- form -->
                            <form @submit.prevent="onSubmit" method="post" >
                                <div class="form-group">
                                    <!-- Game anme -->
                                    <label class="">Game Name</label>
<!--                                    <input type="text" class="form-control" id="gameName" value="" placeholder="Game Name" required>-->
                                <ValidationProvider name="games" rules="required" v-slot="{ errors }">
                                    <v-select label="name" :options="games" :reduce=" game => game.id" v-model="form.game_id"></v-select>
                                    <span style="color: red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                                </div>
                                <!-- Rented week -->
<!--                                <ValidationProvider name="phone number" rules="required|max:14|min:11" v-slot="{ errors }">-->
<!--                                    <input type="tel" class="form-control" id="user-number" placeholder="Your Phone Number" v-model="form.phone_number">-->
<!--                                    <span style="color: red;">{{ errors[0] }}</span>-->
<!--                                </ValidationProvider>-->
                                <div class="form-group">
                                    <label for="rentedWeek" class="">Maximum rented week</label>
                                <ValidationProvider name="rented week" rules="required" v-slot="{ errors }">
                                    <input type="number" class="form-control" id="rentedWeek" placeholder="Maximum rented week" v-model="form.max_week" required>
                                    <span style="color: red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                                </div>
                                <!-- date available -->
                                <div class="form-group">
                                    <label for="rentingWeek" class="">Available from</label>
                                <ValidationProvider name="available date" rules="required" v-slot="{ errors }">
                                    <input type="date" class="form-control" id="rentingWeek" placeholder="Maximum renting week" v-model="form.availability" required>
                                    <span style="color: red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                                </div>
                                <!-- platform -->
                                <div class="form-group">
                                    <label>Platform</label><br>
                                <ValidationProvider name="Platform" rules="required" v-slot="{ errors }">
                                    <div class="form-check form-check-inline" v-for="(platform, index) in platforms" :key="index">
                                        <input class="form-check-input" name="platform" type="radio" :value="platform.id" v-model="form.platform_id">
                                        <label class="form-check-label" >{{ platform.name }}</label>
                                    </div>
                                    <span style="color: red;">{{ errors[0] }}</span>
                                </ValidationProvider>
                                </div>
                                <!-- earning amount -->
                                <div class="form-group">
                                    <label>Earning Amount</label>
                                    <div class="earning-amount">
                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr class="">
                                                <td>Your Estimated earning for 1 week</td>
                                                <td>BDT 550</td>
                                            </tr>
                                            <tr class="">
                                                <td>Your Estimated earning for 2 week</td>
                                                <td>BDT 990</td>
                                            </tr>
                                            <tr class="">
                                                <td>Your Estimated earning for 3 week</td>
                                                <td>BDT 1500</td>
                                            </tr>
                                            <tr class="">
                                                <td>Your Estimated earning for 1 month</td>
                                                <td>BDT 1600</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!-- disk condition -->
                                <div class="form-group">
                                    <label for="DiskCondition">Disk Conditiont</label>
                                    <select class="form-control" id="DiskCondition" v-model="form.disk_condition_id">
                                        <option v-for="(diskCondition, index) in diskConditions" :key="index" :value="diskCondition.id" selected>{{ diskCondition.name_of_type }}</option>
                                    </select>
                                </div>
                                <!-- disk image -->
                                <div class="form-group">
                                    <div class="disk-upload">
                                        <div id="msg"></div>
                                        <input type="file" name="disk_image" class="file" id="DiskUpload" accept="image/*" @change="onDiskimageChange">
                                        <label for="DiskUpload">Disk Image</label>
                                        <div class="input-group my-3">
                                            <input type="text" class="form-control upload-input" disabled placeholder="Disk image" id="file">
                                            <div class="input-group-append">
                                                <button type="button" class="browse btn btn-primary">Browse...</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="disk-preview">
                                        <img src="../assets/img/rent/disk.png" id="preview" class="img-thumbnail">
                                    </div>
                                </div>
                                <!-- Cover image -->
                                <div class="form-group">
                                    <div class="cover-upload">
                                        <div id="msg-2"></div>
                                        <input type="file" name="cover_image" class="file-2" id="CoverUpload" accept="image/*" @change="onCoverimageChange">
                                        <label for="CoverUpload">Cover Image</label>
                                        <div class="input-group my-3">
                                            <input type="text" class="form-control upload-input" disabled placeholder="Cover Image"  id="file-2">
                                            <div class="input-group-append">
                                                <button type="button" class="browse-2 btn btn-primary">Browse...</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="disk-preview">
                                        <img src="../assets/img/rent/cover.png" id="preview-2" class="img-thumbnail">
                                    </div>
                                </div>
                                <!-- Status -->
                                <div class="form-group">
                                    <label for="status">Status</label>
                                    <select class="form-control" id="status" v-model="form.status">
                                        <option :value="1" >Active</option>
                                        <option :value="0" >Disable</option>
                                    </select>
                                </div>
                                <!-- Rent submit button -->
                                <div class="text-center rented-page-btn pt-5">
                                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                </div>
                            </form>
<!--                            </ValidationObserver>-->
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
                diskConditions: [],
                games: [],
                platforms: [],
                form: {
                    game_id: '',
                    availability: '',
                    max_week: '',
                    platform_id: '',
                    disk_condition_id: '',
                    disk_image: '',
                    cover_image: '',
                    status: '1',
                }
            }
        },
        methods: {
            onDiskimageChange (event) {
                let fileReader = new FileReader();
                fileReader.onload = (e) => {
                    console.log('disk', e)
                    this.form.disk_image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
            },
            onCoverimageChange(event) {
                let fileReader = new FileReader();

                fileReader.onload = (e) => {
                    console.log('Cover', e)
                    this.form.cover_image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
            },
            onSubmit () {
                // this.$validator.validate().then((result) => {
                //     if (result) {
                //         // eslint-disable-next-line
                //         alert('All Passes!');
                //         return;
                //     }
                //     alert('Oh NO!');
                // });
                // console.log(this.form);
                // this.$api.post('rents', this.form)
                //     .then(response => {
                //        console.log(response);
                //     });
                // console.log(this.form);
                this.$store.dispatch('setRentPostDetails', this.form)
                this.$router.push('/rent-preview').catch(err => {});
            },
        },
        created() {
            this.$api.get('games')
                .then(response =>
                {
                    this.games = response.data.data
                    console.log(this.games)
                })
            this.$api.get('platforms')
                .then(response =>
                {
                    this.platforms = response.data.data
                    console.log(this.platforms)
                })
            this.$api.get('disk-conditions')
                .then(response =>
                {
                    this.diskConditions = response.data.data
                    console.log(this.diskConditions)
                })
        }
    }
</script>