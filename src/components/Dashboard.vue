    <template>
        <div>
            <!-- game-available section -->
            <section class="game-available-section">
                <div class="container">
                    <div class="game-available-section--table">
                        <table class="table table-borderless rented-dashbord">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">Game Owner</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Checkpoint</th>
                                <th scope="col">Available From</th>
                                <th scope="col">Available For</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr data-toggle="modal" data-target="#rentmodal1">
                                <td scope="col"><img src="../assets/img/renter.png" alt="renter"> Iftekharul Islam</td>
                                <td scope="col">5/5</td>
                                <td scope="col">ECB Chattar</td>
                                <td scope="col">24 SEP 2020</td>
                                <td scope="col">5 week(s)</td>
                            </tr>
                            <tr data-toggle="modal" data-target="#rentmodal2">
                                <td scope="col"><img src="../assets/img/renter.png" alt="renter"> Iftekharul Islam</td>
                                <td scope="col">5/5</td>
                                <td scope="col">ECB Chattar</td>
                                <td scope="col">24 SEP 2020</td>
                                <td scope="col">5 week(s)</td>
                            </tr>
                            </tbody>
                        </table>
                        <!-- 1st modal -->
                        <div class="modal fade" id="rentmodal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header text-center">
                                        <h2 class="modal-title m-auto" id="exampleModalLabel">Battlefield V</h2>
                                        <button type="button" class="close m-0" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <td>Platform:</td>
                                                <td>PS5,PS4</td>
                                            </tr>
                                            <tr>
                                                <td>Disk Condition:</td>
                                                <td>Super (Its look like new)</td>

                                            </tr>
                                            <tr>
                                                <td>Available From:</td>
                                                <td>18 SEP 2020</td>
                                            </tr>
                                            <tr>
                                                <td>Maximum Rent For:</td>
                                                <td>3 week(s)</td>
                                            </tr>
                                            <tr>
                                                <td>Posted By:</td>
                                                <td>Rakibul H. Rocky</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <a href="#" class="btn--secondery" data-toggle="modal" data-target="#rennow1"><span>RENT NOW</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 1st modal baby -->
                        <div class="modal fade seller-information-modal" id="rennow1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header text-center">
                                        <h2 class="modal-title m-auto" id="exampleModalLabel">Battlefield V</h2>
                                        <button type="button" class="close m-0" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <td>Platform:</td>
                                                <td>
                                                    <img src="../assets/img/ps4-white.png" alt="ps4">
                                                    <img src="../assets/img/ps4-white.png" alt="ps4">
                                                    <img src="../assets/img/ps4-white.png" alt="ps4">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Disk Condition:</td>
                                                <td>Super (Its look like new)</td>

                                            </tr>
                                            <tr>
                                                <td>Available From:</td>
                                                <td>18 SEP 2020</td>
                                            </tr>
                                            <tr>
                                                <td>Maximum Rent For:</td>
                                                <td>3 week(s)</td>
                                            </tr>
                                            <tr>
                                                <td>Posted By:</td>
                                                <td>Rakibul H. Rocky</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div class="seller-information">
                                            <div class="text-center">
                                                <h2>Provide Necessary Information</h2>
                                            </div>
                                            <table class="table table-borderless">
                                                <tbody>
                                                <tr>
                                                    <td>Select Rent Week:</td>
                                                    <td>
                                                        <select class="form-control" id="exampleFormControlSelect1">
                                                            <option selected>Please select rent week</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Rent Available From:</td>
                                                    <td>18 SEP 2020</td>

                                                </tr>
                                                <tr>
                                                    <td>Return Date:</td>
                                                    <td>1 NOV 2020</td>
                                                </tr>
                                                <tr>
                                                    <td>Delivery:</td>
                                                    <td>
                                                        <select class="form-control" id="exampleFormControlSelect2">
                                                            <option selected>Please select delivery</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Checkpoint Details:</td>
                                                    <td>
                                                        <div class="seller-address">
                                                            <i class="fas fa-map-marker-alt"></i>
                                                            House: 278/C, Namapara,
                                                            Manikdi, Dhaka Cantt.,
                                                            Dhaka - 1206.
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <a href="#" class="btn--secondery"><span><i class="fas fa-shopping-cart"></i> ADD TO CART</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- 2nd modal -->
                        <div class="modal fade" id="rentmodal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header text-center">
                                        <h2 class="modal-title m-auto" id="exampleModalLabel">Battlefield V</h2>
                                        <button type="button" class="close m-0" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <td>Platform:</td>
                                                <td>PS5,PS4</td>
                                            </tr>
                                            <tr>
                                                <td>Disk Condition:</td>
                                                <td>Super (Its look like new)</td>

                                            </tr>
                                            <tr>
                                                <td>Available From:</td>
                                                <td>18 SEP 2020</td>
                                            </tr>
                                            <tr>
                                                <td>Maximum Rent For:</td>
                                                <td>3 week(s)</td>
                                            </tr>
                                            <tr>
                                                <td>Posted By:</td>
                                                <td>Rakibul H. Rocky</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <a href="#" class="btn--secondery"><span>RENT NOW</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<!--            <section class="cart rented-page sign-in-bg">-->
<!--                <div class="container rented-page-width pb-5">-->
<!--&lt;!&ndash;                    <div class="dashbord mb-5">&ndash;&gt;-->
<!--&lt;!&ndash;                        <h2 class="text-center text-light">DASHBOARD</h2>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                    <div class="d-flex justify-content-center mb-5">-->
<!--                        <button class="btn btn-primary mr-3" @click.prevent="onOfferedGames" :disabled="!show">Offered Games</button>-->
<!--                        <button class="btn btn-primary ml-3" @click.prevent="onRentedGames" :disabled="show">Rented Games</button>-->
<!--                    </div>-->
<!--                    <div class="table-responsive pb-5" v-if="rents.length && !show">-->
<!--                            <table class="table table-striped table-dark">-->
<!--                                <thead>-->
<!--                                <tr>-->
<!--                                    <th scope="col">Game name</th>-->
<!--                                    <th scope="col">Disk condition</th>-->
<!--                                    <th scope="col">Platform</th>-->
<!--                                    <th scope="col">Renter name</th>-->
<!--                                    <th scope="col">Pick Point</th>-->
<!--                                    <th scope="col">Approvement</th>-->
<!--                                    <th scope="col">Available From</th>-->
<!--                                    <th scope="col">Action</th>-->
<!--                                </tr>-->
<!--                                </thead>-->
<!--                                <tbody>-->
<!--                                <tr v-for="(rent, index) in rents" :key="index">-->
<!--                                    <td>{{ rent.game.data.name }}</td>-->
<!--                                    <td>{{ rent.diskCondition.data.name_of_type }}</td>-->
<!--                                    <td>{{ rent.platform.data.name }}</td>-->
<!--                                    <td>{{ rent.rented_user_id ? rent.rented_user_id : 'N/A' }}</td>-->
<!--                                    <td>{{ rent.checkpoint_id ? rent.checkpoint.data.name : 'Home Delivery' }}</td>-->
<!--                                    <td v-if="rent.status === 0">-->
<!--                                        <a class="badge-danger badge" >Rejected</a>-->
<!--                                    </td>-->
<!--                                    <td v-else-if="rent.status === 1">-->
<!--                                        <a class="badge-success badge" >Approved</a>-->
<!--                                    </td>-->
<!--                                    <td v-else>-->
<!--                                        <a class="badge-info badge" >Pending</a>-->
<!--                                    </td>-->
<!--                                    <td>{{ formattedDate(rent.availability_from_date) }}</td>-->
<!--                                    <td>-->
<!--                                        <button type="button" class="btn btn-danger mb-2" @click.prevent="onDelete(rent)" ><i class="fa fa-trash" aria-hidden="true"></i></button>-->
<!--                                    </td>-->
<!--                                </tr>-->
<!--                                </tbody>-->
<!--                            </table>-->
<!--                    </div>-->
<!--                    <div class="table-responsive pb-5" v-else-if="lends.length && show">-->
<!--                        <table class="table table-striped table-dark" v-if="lends">-->
<!--                            <thead>-->
<!--                            <tr>-->
<!--                                <th scope="col">Game</th>-->
<!--&lt;!&ndash;                                <th scope="col">Platform</th>&ndash;&gt;-->
<!--                                <th scope="col">Rent Week(s)</th>-->
<!--                                <th scope="col">Rent Start</th>-->
<!--                                <th scope="col">Return Date</th>-->
<!--                                <th scope="col" class="text-center">Remaining Days</th>-->
<!--                                <th scope="col">Cost</th>-->
<!--                                <th scope="col">Action</th>-->
<!--                            </tr>-->
<!--                            </thead>-->
<!--                            <tbody>-->
<!--                            <tr v-for="(lend, index) in lends" :key="index">-->
<!--                                <td>{{ lend.rent.game.name }}</td>-->
<!--&lt;!&ndash;                                <td>{{ lend.rent.platform.name }}</td>&ndash;&gt;-->
<!--                                <td>{{ lend.lend_week }}</td>-->
<!--                                <td>{{ formattedDate(lend.lend_date) }}</td>-->
<!--                                <td>{{ returnDate(lend.lend_date, lend.lend_week) }}</td>-->
<!--                                <td>-->
<!--                                    <flip-countdown :deadline="endDate(lend.lend_date, lend.lend_week)"></flip-countdown>-->
<!--                                </td>-->
<!--                                <td>{{ lend.lend_cost }}</td>-->
<!--                                <td><button class="btn btn-primary" @click.prevent="extend">Extent Date</button></td>-->
<!--                            </tr>-->
<!--                            </tbody>-->
<!--                        </table>-->
<!--                    </div>-->
<!--                    <div class="card no-post-found-card mb-0" v-else>-->
<!--                      <h5 class="text-white text-center">Nothing to Show</h5>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </section>-->
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
                    date.setDate(date.getDate() + 1 + week * 7);
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
                        console.log(this.lends, 'lends');
                    })
            },
            
        mounted() {
            document.body.classList.add('body-position')
        },
        destroyed() {
            document.body.classList.remove('body-position')
        }
        }
    </script>

    <style scoped>

    </style>
