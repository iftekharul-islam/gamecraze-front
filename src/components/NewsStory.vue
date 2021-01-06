<template>
    <div>
        <!-- News-story Section -->
        <section class="news-story-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="news-story-section--heading">
                            <p>Update</p>
                            <p>{{ newsDetails.created }}</p>
                            <h2>{{ newsDetails.title }}</h2>
                            <div class="news-story-section--heading--icon">
                                <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + currentPageUrl"><i class="fab fa-facebook-f"></i></a>
                                <a target="_blank" :href="'https://twitter.com/intent/tweet?url=' + currentPageUrl"><i class="fab fa-twitter"></i></a>
                                <a target="_blank" href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <div class="news-story-section--article" v-html="newsDetails.description"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- related setion -->
        <section class="related-article-section">
            <div class="container">
                <div class="text-center">
                    <h2>Related Articles</h2>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="(item, index) in relatedNews" :key="index">
                        <router-link :to="{ name: 'NewsStory', params: { id: item.id }}" @click.native="loadData" class="newsroom-section--content-box">
                            <div class="newsroom-section--content-box--img">
                                <img :src=item.thumbnail :alt=item.title class="w-100 img-fluid">
                            </div>
                            <div class="newsroom-section--content-box--text">
                                <p>Update</p>
                                <h6>{{ item.title && item.title.length > 28 ? item.title.substring(0, 28) + ".." : item.title }}</h6>
                                <p>{{ item.created }}</p>
                            </div>
                        </router-link>
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
                user: {},
                isToggle: false,
                newsDetails: '',
                currentPageUrl: '',
                relatedNews: []
            }
        },
        props: ['id'],
        methods: {
            getNewsDetails: function(id) {
                this.$api.get('article/' + id).then(response => {
                    if (response.status == 200) {
                        this.newsDetails = response.data.data;
                        return;
                    }

                    this.$toaster.error('Something went wrong.');
                    console.log('status: ', response.status);
                });
            },
            getRelatedNews: function(id, number) {
                this.$api.get('article/related/' + id + '?number=' + number).then(response => {
                    console.log(response.data.data);
                    if (response.status == 200) {
                        this.relatedNews = response.data.data;
                    }
                });
            },
            loadData: function() {
                this.getNewsDetails(this.id);
                this.getRelatedNews(this.id, 3);
                this.currentPageUrl = window.location.href;
            }
        },
        created() {
            this.loadData();
        }
    }
</script>
