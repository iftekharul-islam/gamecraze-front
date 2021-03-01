<template>
    <div>
        <section class="newsroom-section">
            <div class="text-center newsroom-section--heading"> <h2>NEWSROOM</h2></div>
            <div class="container">
                <div class="row" v-if="featured">
                    <div class="col-12 mb-4">
                        <div class="trending-news position-relative">
                            <router-link :to="{ name: 'NewsStory', params: { id: featured.id }}" class="w-100 h-100 d-flex align-items-end">
                                <img :src="featured.thumbnail" alt="newsroom" class="img-fluid w-100 position-absolute">
                                <div class="trending-news--text-content">
                                    <p>Feature</p>
                                    <h2>{{ featured.title }}</h2>
                                    <p class="newsroom-date">{{ featured.created }}</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- row -->
                <div class="row">
                    <div v-for="(item, index) in news" :key="item.id" :class="{ 'col-md-6 mb-4': (index == 0 || index == 1) , 'col-md-4 mb-4' : (index != 0 || index != 1) }" v-if="featured.id !== item.id">
                        <router-link :to="{ name: 'NewsStory', params: { id: item.id }}" class="newsroom-section--content-box">
                            <div class="newsroom-section--content-box--img">
                                <img :src=item.thumbnail :alt=item.title class="w-100 img-fluid">
                            </div>
                            <div class="newsroom-section--content-box--text">
                                <p>Update</p>
                                <h6 v-if="index == 0 || index == 1">{{ item.title && item.title.length > 53 ? item.title.substring(0, 53) + ".." : item.title }} </h6>
                                <h6 v-else>{{ item.title && item.title.length > 28 ? item.title.substring(0, 28) + ".." : item.title }} </h6>


                                <p>{{ item.created }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="view-all-btn newsroom-pagination mt-5" v-if="totalPage > 1">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li v-if="currentPage > 1" class="page-item">
                            <a class="page-link" href="javascript:void()" @click="prevPage" aria-label="Previous">
                                <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                            </a>
                        </li>
                        <li class="page-item" v-for="index in totalPage" :key="index">
                            <a :class="{ 'page-link active': currentPage == index , 'page-link': currentPage != index }" href="javascript:void(0)" @click="setPage(index)">{{ index }}</a>
                        </li>

                        <li  v-if="currentPage < totalPage" class="page-item">
                            <a class="page-link" href="javascript:void(0)" @click="nextPage" aria-label="Next">
                                <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>
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
                featured: '',
                news: [],
                perPage: 5,
                currentPage: 1,
                totalPage: 1
            }
        },
        methods: {
            getNews: function(perPage, order = 'DESC') {
                this.$api.get('articles?perPage=' + perPage + '&order=' + order + '&page=' + this.currentPage).then(response => {
                    if (response.status == 200) {
                        this.news = response.data.data;
                        this.currentPage = response.data.meta.pagination.current_page;
                        this.totalPage = response.data.meta.pagination.total_pages;
                        return;
                    }

                    this.$toaster.error('Something went wrong.');
                    console.log('status: ', response.status);
                });
            },
            getFeaturedNews: function(number) {
                this.$api.get('featured-article?number=' + number).then(response => {
                    if (response.status == 200) {
                        this.featured = response.data.data[0];
                        return;
                    }

                    this.$toaster.error('Something went wrong.');
                    console.log('status: ', response.status);
                });
            },
            prevPage: function() {
                if (this.currentPage > 1) {
                    this.currentPage = this.currentPage - 1;
                    this.getNews(this.perPage, 'DESC');
                    this.addParamsToLocation({page: this.currentPage});
                }
            },
            nextPage: function() {
                if (this.currentPage < this.totalPage) {
                    this.currentPage = this.currentPage + 1;
                    this.getNews(this.perPage, 'DESC');
                    this.addParamsToLocation({page: this.currentPage});
                }
            },
            addParamsToLocation: function(params) {
                history.pushState({}, null, this.$route.path + '?' +
                    Object.keys(params).map(key => {
                        return (
                            encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
                        )
                    }).join('&')
                )
            },
            setPage: function(page) {
                this.currentPage = page;
                this.getNews(this.perPage, 'DESC');
                this.addParamsToLocation({page: this.currentPage});
            }
        },
        created() {
            this.getNews(this.perPage, 'DESC');
            this.getFeaturedNews(1);
        }
    }
</script>
