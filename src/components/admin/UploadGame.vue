<template>
    <div>
        <section class="registration sign-in-bg">
            <div class="container-fluid registration-width">
                <router-link to="/game-list" class="btn btn-primary mt-4 mb-2">Game List</router-link>
                <h3 class="text-white text-center mb-0">Search Game by Name</h3>
                <vue-suggestion
                                :class="{paddingBottom: show}"
                                :items="items"
                                v-model="item"
                                :setLabel="setLabel"
                                @changed="inputChange"
                                :itemTemplate="itemTemplate"
                                @selected="itemSelected"
                                aria-placeholder="Search by name">
                </vue-suggestion>
                <div class="container mt-3" v-if="!show">
                    <h3 class="text-center text-white">Selected Game Details</h3>
                    <table class="table table-hover table-dark mb-0">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{{item.name}}</td>
                            </tr>
                            <tr>
                                <th>Genres</th>
                                <td><span v-for="(genre,index) in item.genres" :key="index">{{genre.name}}<span v-if="index < item.genres.length-1">, </span></span></td>
                            </tr>
                            <tr>
                                <th>Platforms</th>
                                <td><span v-for="(platform,index) in item.platforms" :key="index">{{platform.platform.name}}<span v-if="index < item.platforms.length-1">, </span></span></td>
                            </tr>
                            <tr>
                                <th>Release Date</th>
                                <td>{{item.released}}</td>
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td>{{item.rating}}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button class="btn btn-success mt-3" @click="onUpload">Upload</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import itemTemplate from './item-template.vue';
    export default {
        data () {
            return {
                item: {},
                items: [],
                show: true,
                gameDetails: {},
                game: {
                    name: "",
                    description: "",
                    game_mode: "Single Player",
                    rating: "",
                    publisher: "",
                    released: "",
                    genres: [],
                },
                itemTemplate
            }
        },
        methods: {
            itemSelected (item) {
                this.item = item;
                this.show = false;
                this.$api.get('https://api.rawg.io/api/games/' + this.item.slug).then(response => {
                    this.gameDetails = response.data;
                    this.game.name = this.gameDetails.name;
                    this.game.description = this.gameDetails.description
                    this.game.rating = this.gameDetails.rating
                    this.game.publisher = this.gameDetails.publishers[0].name
                    this.game.released = this.gameDetails.released
                    this.game.genres = this.gameDetails.genres
                })
            },
            setLabel (item) {
                return item.name;
            },
            inputChange (text) {
                // your search method
                this.items = this.items.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
                // now `items` will be showed in the suggestion list
            },
            onUpload () {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
                this.$api.post('games', this.game, config).then(response => {
                    this.$swal("Game Uploaded!", "Game Upload Successful!", "success")
                    this.$router.push('/game-list').catch(err => {});
                })
            }
        },
        created() {
            this.$api.get('https://api.rawg.io/api/games?page=1&page_size=100').then(response => {
                this.items = response.data.results;
                console.log(this.items);
            })
        }
    };
</script>

<style scope>
    .vue-suggestion {
        width: 37%;
        margin: 0 auto;
    }
    .paddingBottom {
        padding-bottom: 300px;
    }
    .vue-suggestion .vs__input-group {
        width: 100%;
        margin: 0 auto;
    }
    .vue-suggestion .vs__input-group {
        width: 100%;
        margin: 0 auto;
    }
    .vue-suggestion .vs__input-group input {
        width: 500px;
        padding: 8px;
        margin-top: 80px;
        border-radius: 8px;
    }
    .vue-suggestion .vs__list {
        width: 500px;
        text-align: left;
        border: none;
        border-top: none;
        max-height: 400px;
        overflow-y: auto;
        border-bottom: 1px solid #023d7b;
        position: relative;
    }
    .vue-suggestion .vs__list .vs__list-item {
        background-color: #fff;
        padding: 10px;
        border-left: 1px solid #023d7b;
        border-right: 1px solid #023d7b;
    }
    .vue-suggestion .vs__list .vs__list-item:last-child {
        border-bottom: none;
    }
    .vue-suggestion .vs__list .vs__list-item:hover {
        background-color: #eee !important;
    }
    .vue-suggestion .vs__list,
    .vue-suggestion .vs__loading {
        position: absolute;
    }
    .vue-suggestion .vs__list .vs__list-item {
        cursor: pointer;
    }
    .vue-suggestion .vs__list .vs__list-item.vs__item-active {
        background-color: #f3f6fa;
    }
</style>

