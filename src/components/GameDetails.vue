<template>
    <div>
        <!-- item details -->
        <section class="item-details">
            <div class="container-fluid item-details-width">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="item-slide">
                            <ul class="thumbnails" id="two" v-if="game.assets">
                                <li class="thumbnail-active" v-for="(asset,index) in game.assets.data" :key="index">
                                    <a :href="'#slide'+index" class="thumbnail-active-action"><img :src="$backendPath+'games/'+asset.name" alt="jedi fallen" class="img-fluid"/></a>
                                </li>
                            </ul>
                            <ul class="slides" v-if="game.assets">
                                <li v-for="(asset,index) in game.assets.data" :key="index" :id="'slide'+index"><img :src="$backendPath+'games/'+asset.name" alt="jedi fallen" class="img-fluid"/></li>
                            </ul>
                        </div>
                        <div class="row">
                            <div class="col-md-10 offset-md-2">
                                <div class="item-btn">
                                    <a href="#" class="btn btn-success buy-now cart-btn">Buy Now</a>
                                    <a href="#" class="btn btn-success rent">Rent</a>
                                    <a href="#" class="btn btn-success exchange">Exchange</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-7">
                        <div class="item-description">
                            <div class="back-to-home">
                                <p><a href="#">Home</a> > Best Selling > JEDI</p>
                            </div>
                            <div class="card w-100">
                                <div class="card-body">
                                    <h5 class="card-title">{{game.name}}</h5>
                                    <h5 class="pb-5 price">Buy: TK.5000 <span></span> Rent: TK.500</h5>
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="part-left">
                                                <h4>Highlights :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 pb-5">
                                            <div class="part-right" v-if="game.platforms && game.genres">
                                                <h6>Platforms: <span v-for="(platform,index) in game.platforms.data" :key="index">
                                                    {{platform.name}}<span v-if="index < game.platforms.length-1">, </span></span></h6>
                                                <h6>Genre: <span v-for="(genre,index) in game.genres.data" :key="index">
                                                    {{genre.name}}<span v-if="index < game.genres.length-1">, </span></span></h6>
                                                <h6>Edition: Standard Edition</h6>
                                                <h6>Game Modes: {{game.game_mode}}</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="part-left">
                                                <h4>Important Note :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 pb-5">
                                            <div class="part-right">
                                                <h6>Rated PEGI 16, this game features depiction of violence or sexual activity which look the same as would be expected in real life.It also features the use of tobacco,alcohol or illigal drugs, and the extreme usage of bad language. </h6>

                                            </div>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="part-left">
                                                <h4>Seller :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 pb-5">
                                            <div class="part-right">
                                                <h6 class="seller-name">Khaled Hossain <span class="badge badge-primary">4<span class="material-icons">grade </span></span></h6>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- tab menu -->
        <section class="games-main-details sign-in-bg">
            <div class="container-fluid games-main-details-width">
                <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" id="pills-specifications-tab" data-toggle="pill" href="#pills-specifications" role="tab" aria-controls="pills-specification" aria-selected="true">Specifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-overview-tab" data-toggle="pill" href="#pills-overview" role="tab" aria-controls="pills-overview" aria-selected="false">Over view</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-question-tab" data-toggle="pill" href="#pills-question" role="tab" aria-controls="pills-question" aria-selected="false">Question</a>
                    </li>
                </ul>
                <div class="border">
                </div>
            </div>
        </section>
        <!-- tab -->
        <section class="item-tab">
            <div class="tab-content" id="pills-tabContent">
                <!-- specification tab -->
                <div class="tab-pane fade" id="pills-specifications" role="tabpanel" aria-labelledby="pills-specifications-tab">
                    <div class="specification sign-in-bg">
                        <div class="container-fluid specification-width">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="specifications">
                                        <h3>General</h3>
                                        <div class="border mb-3">
                                        </div>
                                        <!-- game details -->
                                        <table class="table table-borderless ">
                                            <tbody>
                                            <tr>
                                                <td class="general-titles">Title Name</td>
                                                <td class="general-titles-details">{{game.name}}</td>
                                            </tr>
                                            <tr v-if="game.platforms">
                                                <td class="general-titles">Platform</td>
                                                <td class="general-titles-details"><span v-for="(platform,index) in game.platforms.data" :key="index">
                                                    {{platform.name}}<span v-if="index < game.platforms.length-1">, </span></span></td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Edition</td>
                                                <td class="general-titles-details">Standard Edition</td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Type</td>
                                                <td class="general-titles-details">Full Game</td>
                                            </tr>
                                            <tr v-if="game.genres">
                                                <td class="general-titles">Genre</td>
                                                <td class="general-titles-details"><span v-for="(genre,index) in game.genres.data" :key="index">
                                                    {{genre.name}}<span v-if="index < game.genres.length-1">, </span></span></td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Game Modes</td>
                                                <td class="general-titles-details">{{game.game_mode}}</td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Publisher</td>
                                                <td class="general-titles-details">{{game.publisher}}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <h3 class="mt-2">Ratings</h3>
                                        <div class="border mb-3">
                                        </div>
                                        <table class="table table-borderless ">
                                            <tbody>
                                            <tr>
                                                <td class="general-titles">PEGI</td>
                                                <td class="general-titles-details">16</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <h3 class="mt-2">More Details</h3>
                                        <div class="border mb-3">
                                        </div>
                                        <table class="table table-borderless ">
                                            <tbody>
                                            <tr>
                                                <td class="general-titles">Generic Name</td>
                                                <td class="general-titles-details">Physical Games</td>
                                            </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- overview tab -->
                <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">
                    <!-- main photo -->
                    <div class="overview-main-photo">
                        <img src="../assets/img/selling/jedi/jed.png" alt="jedi fallen order" class="img-fluid">
                    </div>
                    <div class="over-view sign-in-bg">
                        <div class="container-fluid item-tab-width overview">
                            <!-- overview details -->
                            <div class="row pt-5">
                                <div class="col-md-6">
                                    <div class="title-1" v-if="game.genres">
                                        <h2>{{game.name}}<span>TM</span></h2>
                                        <p>{{game.description}}</p>
                                        <br>
                                        <br>
                                        <p class="release">Release Date: {{game.release_date}}</p>
                                        <p>Devloper: Respawn Entertainment </p>
                                        <p>Genre: <span v-for="(genre,index) in game.genres.data" :key="index">
                                                    {{genre.name}}<span v-if="index < game.genres.length-1">, </span></span></p>
                                        <p>Publisher: {{game.publisher}}</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="title-img">
                                        <img src="../assets/img/selling/jedi/jedii.png" alt="jedi fallen order" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-5">
                                <div class="col-12">
                                    <div class="scr-vdo">
                                        <h5>SCREENSHOTS & VIDEOS </h5>
                                        <h2>See {{game.name}} in Action </h2>
                                    </div>
                                </div>
                                <!-- youtube video -->
                                <div class="col-md-6">
                                    <div class="video-1">
                                        <iframe src="https://www.youtube.com/embed/xIl2z5wwjdA" frameborder="0" allowfullscreen ng-show="showvideo"></iframe>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="video-2">
                                        <iframe  src="https://www.youtube.com/embed/nfcAHfDuNzw" frameborder="0" allowfullscreen ng-show="showvideo">
                                        </iframe>
                                    </div>
                                </div>

                            </div>
                            <!-- screenshots section -->
                            <div class="row mt-5 ex-padding">
                                <div class="col-12">
                                    <div class="action-part">
                                        <a href="../assets/img/selling/jedi/jediseat.jpg"> <img src="../assets/img/selling/jedi/jediseat.jpg" alt="jedi fallen order"></a>
                                        <div class="row mt-5 ex-padding">
                                            <div class="col-md-6">
                                                <a href="../assets/img/selling/jedi/jj.png">  <img src="../assets/img/selling/jedi/jj.png" alt="jedi fallen order" class="ac-img"></a>
                                            </div>
                                            <div class="col-md-6">
                                                <a href="../assets/img/selling/jedi/jjj.png">  <img src="../assets/img/selling/jedi/jjj.png" alt="jedi fallen order"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- question tab -->
                <div class="tab-pane fade" id="pills-question" role="tabpanel" aria-labelledby="pills-question-tab">
                    <div class="question sign-in-bg">
                        <div class="container-fluid question-width">
                            <div class="row">
                                <div class="col-xl-6 all-question">
                                    <div class="questions">
                                        <!-- search bar -->
                                        <div class="input-group">
                                            <div class="input-group-append">
                                                <input type="search" class="form-control question-search-input" placeholder="Have a Question? Search for the Answer..">
                                                <button class="btn btn-secondary question-search-icon" type="button">
                                                    <i class="fa fa-search "></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="main-question loadMore mt-5">
                                            <!--Accordion wrapper-->
                                            <div id="accordion">
                                                <!-- question answer-1 -->
                                                <div class="card loading-more">
                                                    <div class="card-body">
                                                        <table class="table table-borderless ">
                                                            <tbody>
                                                            <tr>
                                                                <td class="qus">Question :</td>
                                                                <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ans">Answer :</td>
                                                                <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td class="date">By NB on November 4, 2019</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="card-header" id="heading-0">
                                                        <h5 class="mb-0 see-more">
                                                            <a class="collapsed" role="button" data-toggle="collapse" href="#question0" aria-expanded="false" aria-controls="question0">
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="question0" class="collapse" data-parent="#accordion" aria-labelledby="heading-0">
                                                        <div class="card-body">
                                                            <table class="table table-borderless border-2">
                                                                <tbody>
                                                                <tr>
                                                                    <td class="qus">Question :</td>
                                                                    <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ans">Answer :</td>
                                                                    <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td class="date">By NB on November 4, 2019</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="border w-100"></div>
                                                </div>
                                                <!-- question answer-2 -->
                                                <div class="card loading-more">
                                                    <div class="card-body">
                                                        <table class="table table-borderless">
                                                            <tbody>
                                                            <tr>
                                                                <td class="qus">Question :</td>
                                                                <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ans">Answer :</td>
                                                                <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td class="date">By NB on November 4, 2019</td>
                                                            </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                    <div class="card-header" id="heading-1">
                                                        <h5 class="mb-0 see-more">
                                                            <a class="collapsed" role="button" data-toggle="collapse" href="#question1" aria-expanded="false" aria-controls="question1">
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="question1" class="collapse" data-parent="#accordion" aria-labelledby="heading-1">
                                                        <div class="card-body">
                                                            <table class="table table-borderless border-2">
                                                                <tbody>
                                                                <tr>
                                                                    <td class="qus">Question :</td>
                                                                    <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ans">Answer :</td>
                                                                    <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td class="date">By NB on November 4, 2019</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="border w-100"></div>
                                                </div>
                                                <!-- question answer-3 -->
                                                <div class="card loading-more">
                                                    <div class="card-body">
                                                        <table class="table table-borderless ">
                                                            <tbody>
                                                            <tr>
                                                                <td class="qus">Question :</td>
                                                                <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ans">Answer :</td>
                                                                <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td class="date">By NB on November 4, 2019</td>
                                                            </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                    <div class="card-header" id="heading-2">
                                                        <h5 class="mb-0 see-more">
                                                            <a class="collapsed" role="button" data-toggle="collapse" href="#question2" aria-expanded="false" aria-controls="question2">
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="question2" class="collapse" data-parent="#accordion" aria-labelledby="heading-2">
                                                        <div class="card-body">
                                                            <table class="table table-borderless border-2">
                                                                <tbody>
                                                                <tr>
                                                                    <td class="qus">Question :</td>
                                                                    <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ans">Answer :</td>
                                                                    <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td class="date">By NB on November 4, 2019</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="border w-100"></div>
                                                </div>
                                                <!-- question answer-4 -->
                                                <div class="card loading-more">
                                                    <div class="card-body">
                                                        <table class="table table-borderless ">
                                                            <tbody>
                                                            <tr>
                                                                <td class="qus">Question :</td>
                                                                <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ans">Answer :</td>
                                                                <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td class="date">By NB on November 4, 2019</td>
                                                            </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>
                                                    <div class="card-header" id="heading-3">
                                                        <h5 class="mb-0 see-more">
                                                            <a class="collapsed" role="button" data-toggle="collapse" href="#question3" aria-expanded="false" aria-controls="question3">
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="question3" class="collapse" data-parent="#accordion" aria-labelledby="heading-3">
                                                        <div class="card-body">
                                                            <table class="table table-borderless border-2">
                                                                <tbody>
                                                                <tr>
                                                                    <td class="qus">Question :</td>
                                                                    <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ans">Answer :</td>
                                                                    <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td class="date">By NB on November 4, 2019</td>
                                                                </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="border w-100"></div>
                                                </div>
                                                <!-- question answer-5 -->
                                                <div class="card loading-more">
                                                    <div class="card-body">
                                                        <table class="table table-borderless ">
                                                            <tbody>
                                                            <tr>
                                                                <td class="qus">Question :</td>
                                                                <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="ans">Answer :</td>
                                                                <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td class="date">By NB on November 4, 2019</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="card-header" id="heading-4">
                                                        <h5 class="mb-0 see-more">
                                                            <a class="collapsed" role="button" data-toggle="collapse" href="#question4" aria-expanded="false" aria-controls="question4">
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="question4" class="collapse" data-parent="#accordion" aria-labelledby="heading-4">
                                                        <div class="card-body">
                                                            <table class="table table-borderless border-2">
                                                                <tbody>
                                                                <tr>
                                                                    <td class="qus">Question :</td>
                                                                    <td class="qus-1">Can i get an edition ea on the front? I'll play plenty more.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="ans">Answer :</td>
                                                                    <td class="ans-1">I sure EA will sell you that version but you will have to pay for a microtransaction.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td class="date">By NB on November 4, 2019</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="border w-100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Load more button -->
                                        <div class="hide-load sign-in-bg">
                                            <div class="loadmore">
                                                <a href="#" id="loadMore">See more answered questions (130)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'GameDetails',
        props: ['gameId'],
        data() {
            return {
                game: {},
            }
        },
        created() {
            this.$api.get('games/'+this.gameId+'?include=assets,genres,platforms').then(response => {
                this.game = response.data.data;
            });
        }

    }
</script>