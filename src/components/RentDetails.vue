<template>
    <div>
        <!-- item details -->
        <section class="item-details">
            <div class="container-fluid item-details-width">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="item-slide" v-if="rent">
                            <ul class="thumbnails" id="two" v-if="rent.game">
                                <li class="thumbnail-active" v-for="(asset,index) in rent.game.data.assets.data" :key="index">
                                    <a :href="'#slide'+index" class="thumbnail-active-action"><img :src="asset.url" alt="jedi fallen" class="img-fluid"/></a>
                                </li>
                            </ul>
                            <ul class="slides" v-if="rent.game">
                                <li v-for="(asset,index) in rent.game.data.assets.data" :key="index" :id="'slide'+index"><img :src="asset.url" alt="jedi fallen" class="img-fluid"/></li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-lg-6 col-xl-7">
                        <div class="item-description">
                            <div class="back-to-home" v-if="rent">
                                <p><router-link to="/">Home</router-link> > <router-link to="/games">Games</router-link> > {{ rent.game.data.name }}</p>
                            </div>
                            <div class="card w-100" v-if="show">
                                <div class="card-body" v-if="rent">
                                    <h5 class="card-title">{{rent.game.data.name}}</h5>
                                    <br>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="part-left">
                                                <h4>Platform :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-8 pb-4">
                                            <div class="part-right" v-if="rent.platform">
                                                <img width="35px" height="30px" :src="rent.platform.data.url" alt="doom">
<!--                                                <h6>{{rent.platform.data.url}}</h6>-->
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="part-left">
                                                <h4>Disk Condition :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-8 pb-4">
                                            <div class="part-right">
                                                <h6>{{rent.diskCondition.data.name_of_type}} ({{rent.diskCondition.data.description}})</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="part-left">
                                                <h4>Available From :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-8 pb-4">
                                            <div class="part-right">
                                                <h6>{{ formattedDate(rent.availability_from_date) }}</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="part-left">
                                                <h4>Maximum Rent For :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-8 pb-4">
                                            <div class="part-right">
                                                <h6>{{rent.max_number_of_week}} Week</h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="part-left">
                                                <h4>Posted By :</h4>
                                            </div>
                                        </div>
                                        <div class="col-sm-8 pb-4" v-if="rent.user">
                                            <div class="part-right">
                                                <h6 class="seller-name"><span>{{ rent.user.data.name ? rent.user.data.name : rent.user.data.phone_number }}</span></h6>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card w-100 information" v-else>
                                <div class="card-body" v-if="rent">
                                    <h2 class="text-left mb-5">Provide Necessary Information</h2>
                                    <ValidationObserver v-slot="{ handleSubmit }">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="part-left">
                                                    <h4>Select Rent week :</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-8 pb-5">
                                                <div class="part-right" v-if="rent.platform">
                                                    <ValidationProvider name="Rent Week" rules="required" v-slot="{ errors }">
                                                        <select class="form-control w-50" v-model="week">
                                                            <option value="" selected disabled>Please Select Rent Week...</option>
                                                            <option v-for="n in rent.max_number_of_week" :value="n">For {{n}} Week</option>
                                                        </select>
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="part-left">
                                                    <h4>Rent Available From: </h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-8 pb-5">
                                                <div class="part-right">
                                                    <h6>{{ formattedDate(rent.availability_from_date) }}</h6>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 pb-5" v-if="week">
                                                <div class="part-left">
                                                    <h4>Return Date :</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-8"  v-if="week">
                                                <div class="part-right">
                                                    <h6>{{returnDate}}</h6>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 pb-5" v-if="week">
                                                <div class="part-left">
                                                    <h4>Delivery :</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-8" v-if="week">
                                                <div class="part-right">
                                                    <select class="form-control w-50" @change="onChange($event)" v-model="x">
                                                        <option value="" selected disabled>Please Select delivery ...</option>
                                                        <option value="1" :disabled="rent.checkpoint_id == null ">Checkpoint</option>
                                                        <option value="2">Cash on delivery</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 pb-5" v-if="x =='1'" >
                                                <div class="part-left">
                                                    <h4>Checkpoint details:</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-8">
                                                <div class="part-right" v-if="x =='1'">
                                                    <div class="my-checkpoint">
                                                        <strong>Name: CP1</strong>
                                                        <ul class="ml-4 mb-0 fa-ul text-muted">
                                                            <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span>
                                                                {{ rent.checkpoint.data.flat_no }}/{{ rent.checkpoint.data.road_no }} Block {{ rent.checkpoint.data.block_no }},
                                                                <br> Area: {{ rent.checkpoint.data.area.data.name }}
                                                                <br> Thana: {{ rent.checkpoint.data.area.data.thana.data.name }},
                                                                <br> District: {{ rent.checkpoint.data.area.data.thana.data.district.data.name }},
                                                                <br> Division: {{ rent.checkpoint.data.area.data.thana.data.district.data.division.data.name }}.
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pb-5 ml-2" v-if="x =='2'">
                                                <h5 >Cash delivery will be charged 60 tk</h5>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" @click.prevent="handleSubmit(onAddToCart)">Add to Cart<i class="fas fa-cart-plus ml-2"></i></button>
                                    </ValidationObserver>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="item-btn">
                            <a v-if="show" @click.prevent="onRent" class="btn btn-success rent">
                                Rent Now
                            </a>
                            <a v-else @click.prevent="onRent" class="btn btn-success rent">
                                See Details
                            </a>
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
                                        <table class="table table-borderless" v-if="rent">
                                            <tbody>
                                            <tr>
                                                <td class="general-titles">Title Name</td>
                                                <td class="general-titles-details">{{rent.game.data.name}}</td>
                                            </tr>
                                            <tr v-if="rent.platform">
                                                <td class="general-titles">Platform</td>
                                                <td class="general-titles-details"><span>
                                                    {{rent.platform.data.name}}</span></td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Edition</td>
                                                <td class="general-titles-details">Standard Edition</td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Type</td>
                                                <td class="general-titles-details">Full Game</td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Genre</td>
                                                <td class="general-titles-details"><span>
                                                    Action</span></td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Game Modes</td>
                                                <td class="general-titles-details">{{rent.game.data.game_mode}}</td>
                                            </tr>
                                            <tr>
                                                <td class="general-titles">Publisher</td>
                                                <td class="general-titles-details">{{rent.game.data.publisher}}</td>
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
                                    <div class="title-1" v-if="rent">
                                        <h2>{{rent.game.data.name}}<span>TM</span></h2>
                                        <p>{{rent.game.data.description}}</p>
                                        <br>
                                        <br>
                                        <p class="release">Release Date: {{rent.game.data.release_date}}</p>
                                        <p>Devloper: Respawn Entertainment </p>
                                        <p>Genre: <span>
                                                    Action</span></p>
                                        <p>Publisher: {{rent.game.data.publisher}}</p>
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
                                        <h2 v-if="rent">See {{rent.game.data.name}} in Action </h2>
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
                                    <div class="action-part pb-5">
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
        props: ['id'],
        data() {
            return {
                checkpoints: [],
                rent: null,
                lends: [],
                show: true,
                week: '',
                x: '',
                userDetails: {},
                form: {
                    checkpoint: '',
                }
            }
        },
        methods: {
            onRent() {
                this.show = !this.show
            },
            onChange (event) {
                if(event.target.value == 1) {
                    this.form.checkpoint = this.rent.checkpoint_id;
                    console.log(this.form.checkpoint);
                }
                if (event.target.value == 2) {
                    this.form.checkpoint = '';
                    console.log(this.form.checkpoint);
                }
            },
            onAddToCart() {
                console.log(this.$store.state.userId, 'user id');
                console.log(this.$store.state.postId.length, 'post length');
                console.log(this.lends.length, 'lends');
                console.log(this.userDetails.rent_limit, 'rent limit');
                if ( this.$store.state.userId !== null) {
                    if (this.userDetails.rent_limit > this.$store.state.postId.length && this.userDetails.rent_limit > this.lends.length) {
                        this.$store.dispatch('pushPostId', this.id)
                        this.$store.dispatch('pushLendWeek', this.week)
                        this.$store.dispatch('pushCheckpointId', this.form.checkpoint.id)
                        return this.$router.push('/add-to-cart').then(err => {});
                    }
                    return this.$swal({
                        title: "Rent is Limited",
                        text: "For more Rent, Please Contact to helpline of GameHub",
                        icon: "warning",
                    });
                }
                    if (this.$store.state.postId.length == 0) {
                        this.$store.dispatch('pushPostId', this.id)
                        this.$store.dispatch('pushLendWeek', this.week)
                        this.$store.dispatch('pushCheckpointId', this.form.checkpoint.id)
                        return this.$router.push('/add-to-cart').then(err => {});
                    }
                    this.$swal({
                        title: "Rent is Limited",
                        text: "For Rent, Please login to GameHub",
                        icon: "warning",
                    });
            },
            formattedDate(date) {
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
        },
        computed: {
            returnDate() {
                let today = new Date();
                let available = new Date(this.rent.availability_from_date);
                if (today < available)
                {
                    available.setDate(available.getDate()+ 1 + this.week * 7);
                    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                    return available.getDate() + " " + months[available.getMonth()] + " " + available.getFullYear()
                }
                today.setDate(today.getDate() + this.week * 7);
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                return today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear()
            }
        },
        created() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            if (this.$store.state.userId != null) {
                this.$api.get('user/details', config)
                    .then (response =>
                    {
                        this.userDetails = response.data.data;
                        console.log(this.userDetails, 'User details');
                    })
            }
            this.$api.get('rents/' + this.id + '?include=diskCondition,game.assets,platform,user,checkpoint,checkpoint.area,checkpoint.area.thana,checkpoint.area.thana.district,checkpoint.area.thana.district.division')
                .then (response =>
                {
                    this.rent = response.data.data
                    console.log(this.rent, 'rent-details');
                }),
            this.$api.get('checkpoints?include=area')
                .then (response =>
                {
                    this.checkpoints = response.data.data
                }),
            this.$api.get('lends', config)
                .then (response =>
                {
                    this.lends = response.data.data
                    console.log(this.lends, 'lends')
                })

        }
    }
</script>
<style>
    .my-checkpoint {
        border: 3px solid #222f5e;
        padding: 1.5rem;
        width: fit-content;
        border-radius: 10px;
    }
</style>
