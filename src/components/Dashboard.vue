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
                            <tr v-for="(rent, index) in availableRentPosts" :key="index" data-toggle="modal" data-target="#rennow1" @click="setModalData(rent)">
                                <td scope="col"><img src="../assets/img/renter.png" alt="renter">{{ rent.user.data.name }}</td>
                                <td scope="col">5/5</td>
                                <td scope="col">ECB Chattar</td>
                                <td scope="col">{{ formattedDate(rent.availability_from_date) }}</td>
                                <td scope="col">{{ rent.max_number_of_week}} week(s)</td>
                            </tr>
                            </tbody>
                        </table>

                        <div class="modal fade seller-information-modal" id="rennow1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header text-center">
                                        <h2 class="modal-title m-auto" id="exampleModalLabel" v-if="modalData">{{ modalData.game.data.name }}</h2>
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
                                                <td v-if="modalData">{{ modalData.diskCondition.data.name_of_type }} ({{ modalData.diskCondition.data.description }})</td>

                                            </tr>
                                            <tr>
                                                <td>Available From:</td>
                                                <td v-if="modalData">{{ formattedDate(modalData.availability_from_date) }}</td>
                                            </tr>
                                            <tr>
                                                <td>Maximum Rent For:</td>
                                                <td v-if="modalData">{{ modalData.max_number_of_week}} week(s)</td>
                                            </tr>
                                            <tr>
                                                <td>Posted By:</td>
                                                <td v-if="modalData">{{ modalData.user.data.name }}</td>
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
                                                        <select class="form-control" id="exampleFormControlSelect1" v-if="modalData" v-model="form.week">
                                                            <option selected>Please select rent week</option>
                                                            <option v-for="n in modalData.max_number_of_week" :value="n">For {{n}} Week</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr v-if="form.week">
                                                    <td>Return Date:</td>
                                                    <td>{{ returnDate }}</td>
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
                    </div>
                </div>
            </section>
        </div>
    </template>

    <script>
        import FlipCountdown from 'vue2-flip-countdown'
        export default {
            components: { FlipCountdown },
            props: ['id'],
            data() {
                return {
                    rentPosts: [],
                    rents: [],
                    lends: [],
                    show: false,
                    modalData: null,
                    form: {
                      week: ''
                    }
                }
            },
            computed: {
              returnDate() {
                let today = new Date();
                let available = new Date(this.modalData.availability_from_date);
                if (today < available)
                {
                  // available.setDate(available.getDate()+ 1 + this.week * 7);
                  // const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                  // return available.getDate() + " " + months[available.getMonth()] + " " + available.getFullYear()

                  today.setDate(today.getDate() + this.form.week * 7);
                  const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                  return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
                }
              },
              availableRentPosts() {
                return this.rentPosts.filter(post => {
                  let today = new Date();
                  let available = new Date(post.availability_from_date);
                  return today < available;
                })
              }
            },
            methods: {
                setModalData(rent) {
                  this.modalData = rent;
                },
                formattedDate(date) {
                    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    let formattedDate = new Date(date)
                    return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
                }
            },
            created() {
                this.$api.get('rent-posted-users/' + this.id + '?include=game,diskCondition,user,checkpoint.area').then(response => {
                  this.rentPosts = response.data.data;
                });
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
