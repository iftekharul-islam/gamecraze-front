    <template>
        <div>
            <section class="cart rented-page sign-in-bg">
                <div class="container rented-page-width pb-5">
<!--                    <div class="dashbord mb-5">-->
<!--                        <h2 class="text-center text-light">DASHBOARD</h2>-->
<!--                    </div>-->
                    <div class="d-flex justify-content-center mb-5">
                        <button class="btn btn-primary mr-3" @click.prevent="onOfferedGames" :disabled="!show">Offered Games</button>
                        <button class="btn btn-primary ml-3" @click.prevent="onRentedGames" :disabled="show">Rented Games</button>
                    </div>
                    <div class="table-responsive pb-5" v-if="rents.length && !show">
                            <table class="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">Game name</th>
                                    <th scope="col">Disk condition</th>
                                    <th scope="col">Platform</th>
                                    <th scope="col">Renter name</th>
                                    <th scope="col">Pick Point</th>
                                    <th scope="col">Approvement</th>
                                    <th scope="col">Available From</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(rent, index) in rents" :key="index">
                                    <td>{{ rent.game.data.name }}</td>
                                    <td>{{ rent.diskCondition.data.name_of_type }}</td>
                                    <td>{{ rent.platform.data.name }}</td>
                                    <td>{{ rent.rented_user_id ? rent.rented_user_id : 'N/A' }}</td>
                                    <td>{{ rent.checkpoint_id ? rent.checkpoint.data.name : 'Home Delivery' }}</td>
                                    <td v-if="rent.status === 0">
                                        <a class="badge-danger badge" >Rejected</a>
                                    </td>
                                    <td v-else-if="rent.status === 1">
                                        <a class="badge-success badge" >Approved</a>
                                    </td>
                                    <td v-else>
                                        <a class="badge-info badge" >Pending</a>
                                    </td>
                                    <td>{{ formattedDate(rent.availability_from_date) }}</td>
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
                                <th scope="col">Game</th>
<!--                                <th scope="col">Platform</th>-->
                                <th scope="col">Rent Week(s)</th>
                                <th scope="col">Rent Start</th>
                                <th scope="col">Return Date</th>
                                <th scope="col" class="text-center">Remaining Days</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(lend, index) in lends" :key="index">
                                <td>{{ lend.rent.game.name }}</td>
<!--                                <td>{{ lend.rent.platform.name }}</td>-->
                                <td>{{ lend.lend_week }}</td>
                                <td>{{ formattedDate(lend.lend_date) }}</td>
                                <td>{{ returnDate(lend.lend_date, lend.lend_week) }}</td>
                                <td>
                                    <flip-countdown :deadline="endDate(lend.lend_date, lend.lend_week)"></flip-countdown>
                                </td>
                                <td>{{ lend.lend_cost }}</td>
                                <td><button class="btn btn-primary" @click.prevent="extend">Extent Date</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card no-post-found-card mb-0" v-else>
                      <h5 class="text-white text-center">Nothing to Show</h5>
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
        import FlipCountdown from 'vue2-flip-countdown'
        export default {
            components: { FlipCountdown },
            data() {
                return {
                    rents: [],
                    lends: [],
                    show: false,
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
                extend () {
                    this.$swal({
                        title: "Please Contact",
                        text: "Phone no: 017773278387",
                        icon: "warning",
                    }).then(() => {
                            this.$swal({
                                text: "thank you",
                                icon: 'success',
                                timer: 1500,
                                button: false,
                            });

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
                    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
                },
                formattedDate(date) {
                    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    let formattedDate = new Date(date)
                    return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
                },
                endDate(data, week) {
                    let date = new Date(data);
                    date.setDate(date.getDate() + week * 7);
                    return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()
                }
            },
            created() {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
                this.$api.get('rents?include=game,platform,diskCondition,checkpoint', config)
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
