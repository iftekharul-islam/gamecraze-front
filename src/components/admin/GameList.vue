<template>
    <div>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">All Games</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">All Games</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    <div class="w-80 m-auto">
                        <table class="table table-hover table-dark mb-0">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Publisher</th>
                                <th scope="col">Release Date</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Action</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(game,index) in games" :key="index">
                                <th scope="row">{{ game.id }}</th>
                                <td>{{ game.name }}</td>
                                <td>{{ game.publisher }}</td>
                                <td>{{ game.release_date }}</td>
                                <td>{{ game.rating }}</td>
                                <td><router-link to="/game-edit" class="btn btn-primary">Edit</router-link></td>
                                <td><button class="btn btn-danger" @click="onDelete(game)">Delete</button></td>
                            </tr>
                            </tbody>
                        </table>
                        <nav>
                            <ul class="pagination m-0 mt-4 float-right">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                games: [],
                game: {}
            }
        },
        methods: {
            onEdit() {

            },
            onDelete(game) {
                this.$swal({
                    title: "Delete Game!",
                    text: "Do you want to delete the game?",
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
                        this.$api.delete('games/' + game.id, config).then(response => {
                            if (response.data) {
                                this.games.splice(this.games.indexOf(game), 1)
                            }
                        })
                        this.$swal("Game Deleted!", "Game Delete Successful!", "success")
                    }
                    else {
                        this.$swal("Your information is safe!");
                    }
                });

            }
        },
        created() {
            this.$api.get('games').then(response => {
                this.games = response.data.data;
            })
        }
    };
</script>