<template>
    <div>
        <div class="container">
            <div class="box">
                <div class="box-item" v-for="(game,index) in this.games" :key="index">
                    <h4>{{game.name}}</h4>
                    <p>Description: {{game.description}}</p>
                    <p>Genre: {{game.genre.name}}</p>
                    <p>Category: {{game.categories.name}}</p>
                    <p>Release Date: {{game.release_date}}</p>
                    <p>Publisher: {{game.publisher}}</p>
                    <p>Platform: {{game.platform}}</p>
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
            this.$api.get('games').then(response => {
                this.games = response.data.data;
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