<template>
    <div>
        <section class="newsroom-section">
            <div class="text-center newsroom-section--heading"> <h2>NEWSROOM</h2></div>
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="trending-news position-relative">
                            <a href="#" class="w-100 h-100 d-flex align-items-end">
                                <img src="../assets/img/newsroom.png" alt="newsroom" class="img-fluid w-100 position-absolute">
                                <div class="trending-news--text-content">
                                    <p>Feature</p>
                                    <h2>Get PUBG Royal Pass free every month</h2>
                                    <p class="newsroom-date">January  15, 2021</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- row -->
                <div class="row">
                    <div v-for="(item, index) in news" :key="item.id" :class="{ 'col-md-6 mb-4': (index == 0 || index == 1) , 'col-md-4 mb-4' : (index != 0 || index != 1) }">
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
                <div class="view-all-btn mt-5">
                    <a href="#" class="btn--secondery m-auto"><span>VIEW ALL</span></a>
                </div>
            </div>
            <div class="view-all-btn newsroom-pagination mt-5">
                <!-- <a href="#" class="btn--secondery m-auto"><span>VIEW ALL</span></a> -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
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
                news: []
            }
        },
        methods: {
            getNews: function(perPage, order = 'DESC') {
                this.$api.get('articles?perPage=' + perPage + '&order=' + order).then(response => {
                    if (response.status == 200) {
                        this.news = response.data.data;
                        return;
                    }

                    this.$toaster.error('Something went wrong.');
                    console.log('status: ', response.status);
                });
            },
        },
        created() {
            this.getNews(5, 'DESC');
        }
    }
		

</script>
