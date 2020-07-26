    <template>
        <div>
            <section class="rented-page sign-in-bg">
                <div class="container rented-page-width pb-5">
                    <div class="dashbord mb-5">
                        <h2 class="text-center text-light">DASHBOARD</h2>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                        <button class="btn btn-primary mr-3" @click.prevent="onOfferedGames" :disabled="!show">Offered Games</button>
                        <button class="btn btn-primary ml-3" @click.prevent="onRentedGames" :disabled="show">Rented Games</button>
                    </div>
                    <h2 v-if="rents.length && !show" class="text-white text-center">Your Offered Games</h2>
                    <h2 v-else-if="lends.length && show" class="text-white text-center">Your Rented Games</h2>
                    <div style="background: #fff url('../assets/loader.gif') no-repeat center center;"></div>
                    <div class="table-responsive pb-5" v-if="rents.length && !show">
                            <table class="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th scope="col" >Serial No</th>
                                    <th scope="col">Game name</th>
                                    <th scope="col">Disk condition</th>
                                    <th scope="col">Platform</th>
                                    <th scope="col">Renter name</th>
                                    <th scope="col">Approvement</th>
                                    <th scope="col">Available From</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(rent, index) in rents" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ rent.game.data.name }}</td>
                                    <td>{{ rent.diskCondition.data.name_of_type }}</td>
                                    <td>{{ rent.platform.data.name }}</td>
                                    <td v-if="rent.rented_user_id == null">N/A</td>
                                    <td v-else>{{ rent.rented_user_id }}</td>
                                    <td v-if="rent.status === 0">
                                        <a class="badge-danger badge" >Rejected</a>
                                    </td>
                                    <td v-else-if="rent.status === 1">
                                        <a class="badge-success badge" >Approved</a>
                                    </td>
                                    <td v-else>
                                        <a class="badge-info badge" >Pending</a>
                                    </td>
                                    <td>{{ rent.availability_from_date }}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger mb-2" @click.prevent="onDelete(rent)" ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                    <div class="table-responsive pb-5" v-else-if="lends.length && show">
                        <table class="table table-striped table-dark" v-if="lends">
                            <thead>
                            <tr>
                                <th scope="col" >Serial No</th>
                                <th scope="col">Game name</th>
                                <th scope="col">Disk condition</th>
                                <th scope="col">Platform</th>
                                <th scope="col">Lend Week</th>
                                <th scope="col">Lend Date</th>
                                <th scope="col">Return Date</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(lend, index) in lends" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ lend.rent.game.name }}</td>
                                <td>{{ lend.rent.disk_condition.name }}</td>
                                <td>{{ lend.rent.platform.name }}</td>
                                <td>{{ lend.lend_week }}</td>
                                <td>{{ lend.lend_date }}</td>
                                <td>{{ returnDate(lend.lend_date, lend.lend_week) }}</td>
                                <td>{{ lend.lend_cost }}</td>
                                <td><button class="btn btn-primary">Return Request</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card no-post-found-card mb-0" v-else>
                        <!-- <div class="wavy">
                            <span style="--i:1;">N</span>
                            <span style="--i:2;">o</span>&nbsp; &nbsp;
                            <span style="--i:3;">P</span>
                            <span style="--i:4;">o</span>
                            <span style="--i:5;">s</span>
                            <span style="--i:6;">t</span>&nbsp; &nbsp;
                            <span style="--i:7;">F</span>
                            <span style="--i:8;">o</span>
                            <span style="--i:9;">r</span>&nbsp; &nbsp;
                            <span style="--i:10;">R</span>
                            <span style="--i:11;">e</span>
                            <span style="--i:12;">n</span>
                            <span style="--i:13;">t</span>&nbsp; &nbsp;
                            <span style="--i:14;">F</span>
                            <span style="--i:15;">o</span>
                            <span style="--i:16;">u</span>
                            <span style="--i:17;">n</span>
                            <span style="--i:18;">d</span>&nbsp; &nbsp;
                            <span style="--i:19;">!</span>
                            <span style="--i:20;">!</span>
                            <span style="--i:21;">!</span>
                            <span style="--i:22;">!</span>
                         </div> -->
                         <div class="loading text-center">
                            <div id="loading-wrapper">
                            <div id="loading-text">LOADING</div>
                            <div id="loading-content"></div>
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
                    rents: [],
                    lends: [],
                    show: false
                }
            },
            methods: {
                onDelete(rent) {
                    this.$swal({
                        title: "Rent Post Delete!",
                        text: "Do you want to delete the Rent Post?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    }).then((willDelete) => {
                        if (willDelete) {
                            let config = {
                                headers: {
                                    'Authorization': 'Bearer ' + this.$store.state.token
                                }
                            }
                            this.$api.delete('rents/' + rent.id, config)
                                .then(response => {
                                if (response.data) {
                                    this.rents.splice(this.rents.indexOf(rent), 1)
                                }
                                this.$swal ({
                                    title: "Post Deleted!",
                                    text: "Rent Post Delete Successful!",
                                    timer: 1500
                                });
                            })

                        }
                        else {
                            this.$swal("Your information is safe!");
                        }
                    });

                },
                onOfferedGames() {
                    this.show = false
                },
                onRentedGames() {
                    this.show = true
                },
                returnDate(lendDate, week) {
                    let date = new Date(lendDate);
                    date.setDate(date.getDate() + week * 7);
                    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
                    return formatted_date;
                }
            },
            created() {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
                this.$api.get('rents?include=game,platform,diskCondition', config)
                    .then(response =>
                    {
                        this.rents = response.data.data
                    })

                this.$api.get('lends', config)
                    .then(response =>
                    {
                        this.lends = response.data
                    })
            }
        }
    </script>

    <style scoped>

    </style>
