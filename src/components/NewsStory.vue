<template>
    <div>
        <!-- News-story Section -->
        <section class="news-story-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="news-story-section--heading">
                            <p>{{ $t('update', $store.state.locale) }}</p>
                            <p>{{ newsDetails.created }}</p>
                            <h2>{{ newsDetails.title }}</h2>
                            <div class="news-story-section--heading--icon">
                                <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + currentPageUrl"><i class="fab fa-facebook-f icon"></i></a>
                                <a target="_blank" :href="'https://twitter.com/intent/tweet?url=' + currentPageUrl"><i class="fab fa-twitter icon"></i></a>
                                <a target="_blank" :href="'https://www.linkedin.com/sharing/share-offsite/?url=' + currentPageUrl"><i class="fab fa-linkedin-in  icon"></i></a>
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
                    <h2>{{ $t('related_articles', $store.state.locale) }}</h2>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="(item, index) in relatedNews" :key="index" v-if="newsDetails.id != item.id">
                        <router-link :to="{ name: 'NewsStory', params: { slug: item.slug }}" @click.native="loadData"  class="newsroom-section--content-box">
                            <div class="newsroom-section--content-box--img">
                                <img :src=item.thumbnail :alt=item.title class="w-100 img-fluid">
                            </div>
                            <div class="newsroom-section--content-box--text">
                                <p>{{ $t('update', $store.state.locale) }}</p>
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
        props: ['slug'],
        methods: {
            getNewsDetails: function(slug) {
                this.$api.get('article/' + slug).then(response => {
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
                    if (response.status == 200) {
                        this.relatedNews = response.data.data;
                    }
                });
            },
            loadData: function() {
                this.getNewsDetails(this.slug);
                this.getRelatedNews(this.id, 3);
                this.currentPageUrl = window.location.href;
                window.scrollTo(0, 0);
            }
        },
        created() {
            this.loadData();
        }
    }
</script>
