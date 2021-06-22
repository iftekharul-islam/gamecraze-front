<template>
    <div>
        <section class="games-categories-section">
            <div class="container">
                <ul class="text-white">
                    <li>{{ post.id }}</li>
                    <li>{{ post.name }}</li>
                    <li>{{ post.description }}</li>
                    <li>{{ post.price }}</li>
                    <li>{{ post.product_no }}</li>
                    <li>{{ post.created_at }}</li>
                    <li>
                        <img v-for="image in post.images" :src="image" class="img-fluid mr-2" width="200">
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: 'post-details',
        props: ['id'],
        data() {
            return {
                post: ''
            }
        },
        watch: {

        },
        methods: {


        },
        computed: {

        },
        created() {
            window.scrollTo(0,0);
            this.$api.get('sell-post/'+ this.id +'?include=subcategory').then(response => {
                this.post = response.data.data;
                console.log(this.post)
            });

        },
    }
</script>
