    <template>
        <div>
            <section class="rented-page sign-in-bg">
                <div class="container rented-page-width">
                    <div class="dashbord mb-5">
                        <h2 class="text-center text-light">DASHBORD</h2>
                    </div>
                    <div class="table-responsive pb-5">
                        <table class="table table-striped table-dark">
                            <thead>
                            <tr>
                                <th scope="col" >Serial No</th>
                                <th scope="col">Game name</th>
                                <th scope="col">Disk condition</th>
                                <th scope="col">Platform</th>
                                <th scope="col">Renter name</th>
                                <th scope="col">Status</th>
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
                                <td v-else>{{ rent.rented_user_id }}</td>
                                <td v-if="rent.status == 1">
                                    <button class="badge badge-primary" >Active</button>
                                </td>
                                <td v-else>
                                    <button class="badge badge-danger" >Inactive</button>
                                </td>
                                <td>{{ rent.availability_from_date }}</td>
                                <td>
                                    <button type="button" class="btn btn-primary mb-2" @click.prevent="onDelete(rent.id)" ><i class="fa fa-trash" aria-hidden="true"></i></button>
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
            data() {
                return {
                    rents: [],
                }
            },
            methods: {
                onDelete(id) {
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
                            this.$api.delete('rents/' + id, config).then(response => {
                                if (response.data) {
                                    this.rents.splice(this.rents.indexOf(id), 1)
                                }
                            })
                            this.$swal("Rent Post Deleted!", "Rent Post Delete Successful!", "success")
                        }
                        else {
                            this.$swal("Your information is safe!");
                        }
                    });

                }
            },
            created() {
                this.$api.get('rents?include=game,platform,diskCondition' )
                    .then(response =>
                    {
                        this.rents = response.data.data
                        console.log(this.rents)
                    })
            }
        }
    </script>

    <style scoped>

    </style>
