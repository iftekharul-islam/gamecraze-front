<template>
    <div>
        <div class="container">
            <div class="box">
                <div class="box-item" v-for="(game,index) in games" :key="index">
                    <h4>{{game.name}}</h4>
                    <p>Description: {{game.description}}</p>
                    <p>Genres: <span v-for="(genre,index) in game.genres.data" :key="index">{{genre.name}}</span></p>
                    <p>Release Date: {{game.release_date}}</p>
                    <p>Publisher: {{game.publisher}}</p>
                    <p>Rating: {{game.rating}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                games: []
            }
        },
        created() {
            this.$api.get('games?include=genres').then(response => {
                this.games = response.data.data;
                console.log(this.games);
            })
        }
    }
</script>

<style scoped>
    .container {
        margin: 50px auto;
    }
    .box {
        width: 100%;
        overflow: hidden;
        border: 1px solid red;
    }

    .box-item {
        width: 31%;
        height: 400px;
        float: left;
        padding: 15px;
        border: 1px solid green;
        margin: 10px;
    }

    .box-item h4 {
        text-align: center;
    }
</style>