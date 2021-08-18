<template>
    <div>
        <section class="user-profile-heading">
            <img v-if="activeCoverImage" :src="activeCoverImage" alt="profile bg" class="img-fluid user-profile-bg">
            <img v-if="dummyCover" src="../assets/img/profile-bg.png" alt="profile bg" class="img-fluid user-profile-bg">
            <div class="cover-edit" @click="coverModal = true">
                <label><i class="fas fa-camera camera-icon"></i> <span>{{ $t('edit_cover_photo', $store.state.locale) }}</span></label>
                <i v-if="isCoverImgUpdating" class="spinner-border spinner-border-sm"></i>
            </div>
            <div v-if="coverModal">
                <transition name="modal">
                    <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal bg-image-gallery-modal">
                        <div class="modal-wrapper">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="coverModal = false" class="close-modal"></span>
                                    </button>
                                    <div class="modal-body-content">
                                        <!-- Background Image Gallery -->
                                       <div class="bg-image-gallery" v-if="coverImages.length">
                                            <div class="bg-image-gallery--item position-relative" v-for="(item, index) in coverImages" :key="index">
                                                <input type="radio" :value="item.url" name="image-checkbox" :id="item.id" v-model="coverUrl" @click="submitAcitve == true" class="w-100 h-100" />
                                                <label :for="item.id">
                                                    <img :src="item.url" class="img-fluid" :alt="item.url">
                                                </label>
                                            </div>
                                       </div>
                                        <!-- End Background Image Gallery -->
                                        <div v-else>
                                            <p class="text-secondery">{{ $t('no_image_available', $store.state.locale) }}</p>
                                        </div>
                                        <div class="modal-footer justify-content-center border-0" v-if="coverImages.length">
                                            <a type="submit" class="btn--secondery user-id-edit-btn" disabled @click.prevent="coverImageSelect(user.id)" ><span class="w-100">{{ $t('submit', $store.state.locale) }}</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <!-- Account verified -->
            <div class="user-profile-heading--account-verified">
                <a href="#" class="user-profile-heading--account-verified--btn account-verified" v-if="user.is_verified == 1"><span>{{ $t('account_verified', $store.state.locale) }}</span></a>
                <a href="#" data-toggle="modal" data-target="#warning" class="user-profile-heading--account-verified--btn account-not-verified" v-if="user.is_verified == 0"><span>{{ $t('account_verify_now', $store.state.locale) }}</span></a>
            </div>
            <!-- account upgrade modal -->
            <div class="modal fade seller-information-modal upgrade-modal" id="warning" tabindex="-1" aria-labelledby="warningModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                            <button type="button" class="close m-0 close-modal" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"></span>
                            </button>
                        <p>{{ $t('rookie_sms_part_1', $store.state.locale) }}
                            <a href="/rookie" class="text-secondery"> Rookie</a>
                            {{ $t('rookie_sms_part_2', $store.state.locale) }}
                            <a href="/elite" class="text-secondery">ELITE.</a>
                            {{ $t('rookie_sms_part_3', $store.state.locale) }}</p>
                        <div class="modal-content--description--form">
                            <div class="modal-content--description--form--call">
                                <p>{{ $t('please_call_contact', $store.state.locale) }}</p>
                                <p>01886-614533</p>
                            </div>
                            <span class="modal-or">{{ $t('or', $store.state.locale) }}</span>
                            <div class="modal-content--description--form--call">
                                <a href="/contacts" class="btn--secondery secondery-border" target="_blank"><span>{{ $t('form_fillup', $store.state.locale) }}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="user-profile-heading--name">
                    <div class="position-relative">
                        <div class="user-profile-heading--dp">
                            <img v-if="user.image" :src="user.image" :alt="user.name" class="img-fluid">
                            <img v-else src="../assets/img/avatar.png" :alt="user.name" class="img-fluid">
                        </div>
                        <div class="avatar-edit">
                            <form action="" method="post" id="profile-image-form">
                                <input @change="onProfileImageChange($event, 'profile')" type="file" id="profileUpload" accept=".png, .jpg, .jpeg">
                                <label for="profileUpload"><i class="fas fa-camera camera-icon"></i></label>
                                <div class="avatar-edit--spinner" v-if="isProfileImgUpdating"><i  class="spinner-border spinner-border-sm"></i></div>
                            </form>
                        </div>
                    </div>
                    <div class="users-name">
                        <h3>{{ user.name }} {{ user.last_name}}</h3>
                    </div>
                </div>
            </div>
            <div class="user-profile-heading--change-photo">

            </div>
        </section>
    <!-- user profile details -->
        <section class="user-profile-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="nav nav-pills user-profile-details--nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link" id="v-pills-overview-tab" data-toggle="pill" href="#v-pills-overview" role="tab" aria-controls="v-pills-overview" aria-selected="true"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon1.png" alt="profile icon"> <img src="../assets/img/active-profile-icon1.png" class="img-active" alt="profile icon"></div> <span>{{ $t('overview', $store.state.locale) }}</span></a>
                            <a class="nav-link active" id="v-pills-dashboard-tab" data-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon2.png" alt="profile icon"> <img src="../assets/img/active-profile-icon2.png" class="img-active" alt="profile icon"></div> <span>{{ $t('dashboard', $store.state.locale) }}</span></a>
                            <a class="nav-link" id="v-pills-post-rent-tab" data-toggle="pill" href="#v-pills-post-rent" role="tab" aria-controls="v-pills-post-rent" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon3.png" alt="profile icon"> <img src="../assets/img/active-profile-icon3.png" class="img-active" alt="profile icon"></div> <span>{{ $t('post_for_lend', $store.state.locale) }}</span></a>
                            <a class="nav-link" id="v-pills-edit-profile-tab" data-toggle="pill" href="#v-pills-edit-profile" role="tab" aria-controls="v-pills-edit-profile" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/profile-icon4.png" alt="profile icon"> <img src="../assets/img/active-profile-icon4.png" class="img-active" alt="profile icon"></div> <span>{{ $t('edit_profile', $store.state.locale) }}</span></a>
                            <a class="nav-link" id="v-pills-my-earning-tab" data-toggle="pill" href="#v-pills-my-earning" role="tab" aria-controls="v-pills-my-earning" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/earn.png" alt="profile icon"> <img src="../assets/img/active-earn.png" class="img-active" alt="profile icon"></div> <span>{{ $t('my_earning', $store.state.locale) }}</span></a>
                            <a class="nav-link" id="v-pills-refer-tab" data-toggle="pill" href="#v-pills-refer" role="tab" aria-controls="v-pills-refer" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/refer.png" alt="profile icon"> <img src="../assets/img/refer-active.png" class="img-active" alt="profile icon"></div> <span>{{ $t('refer_friend', $store.state.locale) }}</span></a>
                            <a class="nav-link" id="v-pills-rating-tab" data-toggle="pill" href="#v-pills-rating" role="tab" aria-controls="v-pills-rating" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/star-not-active.png" alt="profile icon"> <img src="../assets/img/star-active.png" class="img-active" alt="profile icon"></div> <span>{{ $t('rating', $store.state.locale) }}</span></a>
                            <a class="nav-link" id="v-pills-sell-post-tab" data-toggle="pill" href="#v-pills-sell-post" role="tab" aria-controls="v-pills-sell-post" aria-selected="false"><div class="user-profile-details--nav--img"><img src="../assets/img/star-not-active.png" alt="profile icon"> <img src="../assets/img/star-active.png" class="img-active" alt="profile icon"></div> <span>{{ $t('sell_post', $store.state.locale) }}</span></a>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade" id="v-pills-overview" role="tabpanel" aria-labelledby="v-pills-overview-tab">
                                <div class="over-view">
                                    <table class="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td scope="row">{{ $t('name', $store.state.locale) }} :</td>
                                                <td> <span v-if="user.name">{{ user.name }}</span> <span v-if="user.last_name">{{ user.last_name }}</span></td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('gender', $store.state.locale) }} :</td>
                                                <td>{{ user.gender }}</td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('dob', $store.state.locale) }} :</td>
                                                <td>{{ user.birth_date ? formattedDate(user.birth_date) : '' }}</td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('email', $store.state.locale) }}:</td>
                                                <td>{{ user.email }}</td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('mobile_no', $store.state.locale) }} :</td>
                                                <td>
                                                    {{ user.phone_number }}
                                                    <span class="verified gamehub-success" v-if="user.is_phone_verified === 1">
                                                        <i  class="fas fa-check" aria-hidden="true" title="Verified"></i>
                                                    </span>
                                                    <span class="not-verified gamehub-danger" v-if="user.is_phone_verified === 0">
                                                        <i class="fas fa-question-circle" aria-hidden="true" title="Not Verified"></i>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('address', $store.state.locale) }} :</td>
                                                <td v-if="user.address">{{ user.address.address }}</td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('city', $store.state.locale) }}:</td>
                                                <td v-if="user.address">{{ user.address.city }}</td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('post_code', $store.state.locale) }} :</td>
                                                <td v-if="user.address">{{ user.address.post_code }}</td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('nid', $store.state.locale) }} :</td>
                                                <td>{{ user.identification_number }}</td>
                                            </tr>
                                            <tr>
                                            <td scope="row">{{ $t('nid_image', $store.state.locale) }} :</td>
                                                <td v-if="user.identification_image"><img :src="user.identification_image" alt="nid" class="img-fluid"></td>
                                                <td v-else><img src="" alt="nid" class="img-fluid"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- Dashboard -->
                            <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                <div class="dashboard-content">
                                    <div class="d-flex justify-content-between dashboard-tab-button mb-5">
                                        <button @click.prevent="onRentedGames()" :disabled="rentShow" :class="{active: rentShow}"><img class="active-black" src="../assets/img/rent-icon.png" alt="rent icon"> <img class="active-yellow" src="../assets/img/rent-icon-black.png" alt="rent icon"> {{ $t('rented_games', $store.state.locale) }}</button>
                                        <button class="mx-4" @click.prevent="onOfferedGames()" :disabled="offerShow" :class="{active: offerShow}"><img class="active-yellow" src="../assets/img/offer-icon.png" alt="offer icon"> <img class="active-black" src="../assets/img/offer-icon-black.png" alt="offer icon"> {{ $t('offered_games', $store.state.locale) }}</button>
                                        <button  @click.prevent="onSellPost()" :disabled="postShow" :class="{active: postShow}"><img class="active-yellow" src="../assets/img/offer-icon.png" alt="offer icon"> <img class="active-black" src="../assets/img/offer-icon-black.png" alt="offer icon">  {{ $t('sell_post', $store.state.locale) }}</button>
                                    </div>
                                    <!-- Offer -->
                                    <div class="dashboard-content--offer" v-if="rents.length && offerShow">
                                    <!-- new offter design -->
                                        <div class="d-flex flex-wrap"  v-if="rents">
                                        <div class="dashboard-content--rented--box position-relative bg-game-details border-2 warning-border" v-for="(rent, index) in rents" :key="index">
                                            <div class="position-absolute top--1 right--1 bg-secondery p-2 gil-bold">
                                                    <div class="disk-type text-black" v-if="rent.disk_type == 1">Physical Copy</div>
                                                    <div class="disk-type text-black" v-else>Digital Copy</div>
                                                </div>

                                             <div class="dashboard-content--rented--box--order-id h-30">
                                            </div>

                                             <div class="dashboard-content--rented--box--order-name">
                                                    <p v-if="rent.game" class="f-s-20 gil-bold mb-a-3 h-60">{{ rent.game.data.name }}</p>
                                            </div>
                                            <div class="d-flex flex-wrap">
                                                <div class="left flex-1">
                                                    <div class="disk-condition">
                                                        <p class="mb-2">{{ $t('disk_condition', $store.state.locale) }}</p>
                                                        <p class="text-secondery" v-if="rent.diskCondition">{{ rent.diskCondition.data.name_of_type }}</p>
                                                        <p class="text-secondery" v-else>N/A</p>
                                                    </div>
                                                    <div class="renter-name">
                                                        <p class="mb-2">{{ $t('renter_name', $store.state.locale) }}</p>
                                                        <p class="text-secondery" v-if="rent.renter">{{ rent.renter.data.name }}</p>
                                                        <p class="text-secondery" v-else>N/A</p>
                                                    </div>
                                                    <label class="toggle-switch mt-0 mt-sm-2">
                                                        <input type="checkbox" @change="postStatusChange($event,rent.id)" :checked="rent.status_by_user == 1" :disabled="rent.renter"/>
                                                        <span>
                                                            <span>Inactive</span>
                                                            <span>Active</span>
                                                        </span>
                                                        <a class="toggle-ball"></a>
                                                    </label>
                                                </div>
                                                <div class="right flex-1 mt-5 mt-sm-0">
                                                    <div class="platform">
                                                        <p class="mb-2">{{ $t('platform', $store.state.locale) }}</p>
                                                        <p class="text-secondery">{{ rent.platform.data.name }}</p>
                                                    </div>
                                                    <div class="status">
                                                        <p class="mb-2">{{ $t('status', $store.state.locale) }}</p>
                                                        <p v-if="rent.status ==2"><span class="rejected br-0 f-s-16">Rejected</span></p>
                                                        <p v-else-if="rent.lend != null"><span class="badge-danger badge br-0 p-2 f-s-16">Rented for {{ rent.lend.data.lend_week }} week(s)</span></p>
                                                        <p class="text-secondery" v-else>Available for {{ rent.max_number_of_week }} week(s)</p>
                                                    </div>
                                                    <div class="d-flex">
                                                        <div class="action bg-secondery mr-2" v-if="rent.disk_type != 1">
                                                            <a href="#" class="text-black d-flex gil-medium px-3 py-1 text-black-hover" @click.prevent="credentialModal(rent)"><span>Edit</span></a>
                                                        </div>
                                                    <div v-if="rent.status == 0">
                                                        <div class="action bg-secondery mr-2 h-100 d-flex" v-if="rent.disk_type != 0">
                                                            <a href="#" class="text-black px-3 py-1 gil-medium text-black-hover" @click.prevent="ImageModal(rent)"><span>Edit</span></a>
                                                        </div>
                                                    </div>
                                                    <div class="bg-secondery mr-2">
                                                        <router-link :to="{ path: '/' + rent.id + '/' + rent.game.data.slug}" class="trending-image d-flex px-3 py-1 text-black-hover">
                                                                <span class="text-black gil-medium text-black-hover">View</span>
                                                        </router-link>
                                                    </div>
                                                    <div class="bg-secondery px-3 py-1 pointer"
                                                         v-clipboard:copy="copyUrl + rent.id + '/' + rent.game.data.slug "
                                                         v-clipboard:success="onCopy"
                                                         v-clipboard:error="onError" v-if="rent.status == 1">
                                                        <span class="text-black gil-medium">Share</span>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- modal edit game -->
                                            <div v-if="credentialModalShow">
                                                <transition name="modal">
                                                    <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal">
                                                        <div class="modal-wrapper">
                                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                                <div class="modal-content">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true" @click="credentialModalShow = false" class="close-modal"></span>
                                                                    </button>
                                                                <h4 class="text-secondery mb-a-12 f-s-28">{{ $t('enter_game_credential', $store.state.locale) }}</h4>
                                                                <!-- form-group -->
                                                                <ValidationObserver v-slot="{ invalid }">
                                                                    <form @submit.prevent="gameCredentialUpdate(userRentId, userGameId, userPassword)" method="post">
                                                                        <div class="form-group post-rent--form-group">
                                                                            <label for="game-user-id" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('game_user_id', $store.state.locale) }}</label>
                                                                            <div class=" post-rent--form-group--input">
                                                                                <ValidationProvider name="Game user id" rules="required" v-slot="{ errors }">
                                                                                <input type="text" class="form-control renten-input" id="game-user-id" placeholder="Enter game user id" v-model="userGameId">
                                                                                <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                            </div>

                                                                        </div>
                                                                        <!-- form-group -->
                                                                        <div class="form-group post-rent--form-group">
                                                                            <label for="game-user-pass" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('game_password', $store.state.locale) }}</label>
                                                                            <div class=" post-rent--form-group--input">
                                                                            <ValidationProvider name="Game password" rules="required" v-slot="{ errors }">
                                                                                <input type="text" class="form-control renten-input" id="game-user-pass" placeholder="Enter game user password" v-model="userPassword">
                                                                                <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                            </ValidationProvider>
                                                                            </div>
                                                                        </div>
                                                                        <!-- form-group Button -->
                                                                        <div class="form-group post-rent--form-group offer-edit-btn">
                                                                            <label for="game-user-pass" class=" label-padding post-rent--form-group--label text-light"></label>
                                                                            <div class=" post-rent--form-group--input">
                                                                                <button type="submit" class="btn--secondery user-id-edit-btn" :disabled="invalid"><span class="w-100">{{ $t('submit', $store.state.locale) }}</span></button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </ValidationObserver>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                            <div v-if="imageModalShow">
                                                <transition name="modal">
                                                    <div class="modal-mask seller-information-modal upgrade-modal multiple-user-warning-modal game-photo-edit-modal overflow-auto">
                                                        <div class="modal-wrapper">
                                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                                <div class="modal-content h-auto">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true" @click="imageModalShow = false" class="close-modal"></span>
                                                                    </button>
                                                                    <h4 class="text-secondery mb-a-12 f-s-28">{{ $t('enter_game_credential', $store.state.locale) }}</h4>
                                                                    <!-- form-group -->
                                                                        <form @submit.prevent="rentImageUpdate(userRentId, lendDiskImage, lendCoverImage)" method="post">
                                                                            <div class="form-group post-rent--form-group post-rent--form-group-img" >
                                                                                <label class="post-rent--form-group--label">{{ $t('disk_image', $store.state.locale) }} :</label>
                                                                                <div class="post-rent--form-group--input">
                                                                                        <div class="custom-file">
                                                                                            <input type="file" class="custom-file-input" id="EditDiskUpload"  accept="image/*" @change="onEditDiskImageChange($event)">
                                                                                            <label class="custom-file-label text-light" for="EditDiskUpload">
                                                                                                <b v-if="selectedEditDiskName == null">
                                                                                                    {{ $t('disk_image', $store.state.locale) }}
                                                                                                </b>
                                                                                                <b v-else>
                                                                                                    {{ selectedEditDiskName }}
                                                                                                </b>
                                                                                            </label>
                                                                                        </div>
                                                                                        <div class="img-prev">
                                                                                            <img v-if="lendDiskImage" :src="lendDiskImage" alt="Disk image preview">
                                                                                            <img v-else src="../assets/img/disk.png" alt="Disk image preview">
                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="form-group post-rent--form-group post-rent--form-group-img" >
                                                                                <label class="post-rent--form-group--label">{{ $t('cover_image', $store.state.locale) }} :</label>
                                                                                <div class="post-rent--form-group--input">
                                                                                        <div class="custom-file">
                                                                                            <input type="file" class="custom-file-input" id="EditCoverUpload" accept="image/*" @change="onEditCoverImageChange($event)">
                                                                                            <label class="custom-file-label text-light" for="EditCoverUpload">
                                                                                                <b v-if="selectedEditCoverName == null">
                                                                                                    {{ $t('cover_image', $store.state.locale) }}
                                                                                                </b>
                                                                                                <b v-else>
                                                                                                    {{ selectedEditCoverName }}
                                                                                                </b>
                                                                                            </label>
                                                                                        </div>
                                                                                        <div class="img-prev">
                                                                                            <img v-if="lendCoverImage" :src="lendCoverImage" alt="Cover image preview">
                                                                                            <img v-else src="../assets/img/cover.png" alt="Cover image preview">
                                                                                        </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- form-group Button -->
                                                                            <div class="form-group post-rent--form-group offer-edit-btn">
                                                                                <label for="game-user-pass" class=" label-padding post-rent--form-group--label text-light"></label>
                                                                                <div class=" post-rent--form-group--input">
                                                                                    <button type="submit" class="btn--secondery user-id-edit-btn"><span class="w-100">{{ $t('submit', $store.state.locale) }}</span></button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <!-- Rented -->
                                    <div v-else-if="orders.length && rentShow">
                                        <div class="dashboard-content--rented new-rented">
                                            <!-- new rented design -->
                                            <div class="d-flex flex-wrap" v-if="orders">
                                                <div class="dashboard-content--rented--box flex-wrap d-flex justify-content-between w-100 mr-0  bg-game-details border-2 warning-border" v-for="(order, index) in orders" :key="index">
                                                    <!-- order id -->
                                                    <div class="order-id flex-none flex-sm-initial w-full w-sm-initial">
                                                        <p class="f-s-20 gil-bold text-secondery" v-if="order">{{ order.order_no }}</p>
                                                        <p class="f-s-20 gil-bold text-secondery" v-else>N/A</p>
                                                    </div>
                                                    <div class="start-date d-flex flex-column">
                                                        <div class="mb-4">
                                                            <p class="text-white mb-2">{{ $t('order_start_date', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0">{{ formattedDate(order.create_date) }} </p>
                                                        </div>
                                                        <div>
                                                            <p class="text-white mb-2">{{ $t('total_game', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0">{{ order.lenders.data.length }}</p>
                                                        </div>
                                                    </div>
                                                     <div class="payment d-flex flex-column">
                                                        <div class="mb-4">
                                                            <p class="text-white mb-2">{{ $t('order_amount', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0">{{ order.amount  }}</p>
                                                        </div>
                                                        <div>
                                                            <p class="text-white mb-2">{{ $t('payment_status', $store.state.locale) }}</p>
                                                            <p class=" text-secondery" v-if="order.payment_status == 1">Paid</p>
                                                            <p class=" text-secondery mb-0" v-else>Unpaid</p>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-column">
                                                        <div class=" mb-4 h-56">
                                                            <router-link :to="'/'+ order.id +'/order-details'" class="d-flex border-1 border-secondery -skew-19-deg pl-a-7 pr-a-7 py-1 bg-secondery text-black game-details-hover mt-2"><span class="skew-19-deg">Details</span></router-link>
                                                        </div>
                                                        <div>
                                                            <p class="mb-1">{{ $t('status', $store.state.locale) }}</p>
                                                            <div v-if="order.delivery_status === 0">
                                                                <span class="pending br-0 f-s-16" >Pending</span>
                                                            </div>
                                                            <div v-else-if="order.delivery_status === 1">
                                                                <span class="completed br-0 f-s-16" >Completed</span>
                                                            </div>
                                                            <div v-else-if="order.delivery_status === 2">
                                                                <span class="completed br-0 f-s-16" >Delivered</span>
                                                            </div>
                                                            <div v-else-if="order.delivery_status === 3">
                                                                <span class="rejected br-0  f-s-16" >Rejected</span>
                                                            </div>
                                                            <div v-else-if="order.delivery_status === 4">
                                                                <span class="completed br-0 f-s-16" >Processing</span>
                                                            </div>
                                                            <div v-else-if="order.delivery_status === 5">
                                                                <span class="completed br-0 f-s-16" >Postponed</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- sellPosts -->
                                    <div v-else-if="sellPosts.length && postShow">
                                        <div class="dashboard-content--rented new-rented">
                                            <!-- new rented design -->
                                            <div class="d-flex flex-wrap" v-if="sellPosts">
                                                <div class="dashboard-content--rented--box dashboard-content--rented--sell-post flex-wrap d-flex justify-content-between w-100 mr-0  bg-game-details border-2 warning-border" v-for="(product, index) in sellPosts" :key="index">
                                                    <!-- order id -->
                                                    <div class="order-id flex-none flex-sm-initial w-full w-sm-initial">
                                                        <p class="f-s-20 gil-bold text-secondery" v-if="product">{{ product.product_no }}</p>
                                                        <p class="f-s-20 gil-bold text-secondery" v-else>N/A</p>
                                                    </div>
                                                    <div class="start-date d-flex flex-column">
                                                        <div class="mb-4">
                                                            <p class="text-white mb-2">{{ $t('name', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0">{{ product.name }}</p>
                                                        </div>
                                                        <div class="text-white  mb-4">
                                                            <p class="text-white mb-2">{{ $t('created_at', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0">{{ formattedDate(product.created_at) }} </p>
                                                        </div>
                                                        <label class="toggle-switch mt-0 mt-sm-1">
                                                            <input type="checkbox" @change="sellPostStatusChange($event,product.id)" :checked="product.is_sold == 1"/>
                                                            <span>
                                                            <span>Sold</span>
                                                            <span>Available</span>
                                                        </span>
                                                            <a class="toggle-ball"></a>
                                                        </label>
                                                    </div>
                                                    <div class="payment d-flex flex-column">
                                                        <div class="mb-4">
                                                            <p class="text-white mb-2">{{ $t('sub_category', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0">{{ product.subcategory.data.name }}</p>
                                                        </div>
                                                        <div class="mb-4">
                                                            <p class="text-white mb-2">{{ $t('price', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0">
                                                                {{ product.price  }}
                                                                <span v-if="product.is_negotiable">( Negotiable )</span>
                                                            </p>
                                                        </div>
                                                        <div class="mb-4">
                                                            <p class="text-white mb-2">{{ $t('product_type', $store.state.locale) }}</p>
                                                            <p class=" text-secondery mb-0" v-if="product.product_type == 1">
                                                              {{ $t('new', $store.state.locale) }}
                                                            </p>
                                                            <p class=" text-secondery mb-0" v-else>
                                                              {{ $t('used', $store.state.locale) }}
                                                              <span v-if="product.used_year != null">
                                                                {{ product.used_year }}
                                                                {{ $t('year', $store.state.locale) }}
                                                              </span>
                                                              <span v-if="product.used_month != null">
                                                                {{ product.used_month }}
                                                                {{ $t('month', $store.state.locale) }}
                                                              </span>
                                                              <span v-if="product.used_day != null">
                                                                {{ product.used_day }}
                                                                {{ $t('day', $store.state.locale) }}
                                                            </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="dashboard-content--rented--sell-post--status d-flex flex-column">
                                                        <div>
                                                            <p class="mb-1">{{ $t('status', $store.state.locale) }}</p>
                                                            <div v-if="product.status === 1">
                                                                <span class="completed br-0 f-s-16" >Approved</span>
                                                            </div>
                                                            <div v-else-if="product.status === 2">
                                                                <span class="pending br-0 f-s-16" >Pending</span>
                                                            </div>
                                                            <div v-else-if="product.status === 3">
                                                                <span class="pending br-0 f-s-16" >Rejected</span>
                                                            </div>
                                                            <div v-else>
                                                                <span class="pending br-0 f-s-16" >Inactive</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dashboard-content--rented--sell-post--button mb-4">
                                                        <router-link :to="'/sell-post/' + product.id + '/' + product.url_name " class="d-flex border-1 border-secondery pl-a-7 pr-a-7 py-1 mb-3 bg-secondery text-black game-details-hover mt-2"><span class="">Details</span></router-link>
                                                        <a href="#" class="d-flex border-1 border-secondery pl-a-7 pr-a-7 py-1 bg-secondery text-black game-details-hover mt-2" @click.prevent="sellPostEditModal(product)" v-if="product.status === 2"><span class="w-full text-center">Edit</span></a>
                                                    </div>
                                                </div>
                                                <!-- modal edit game -->
                                                <div v-if="sellPostEditModalShow">
                                                    <transition name="modal">
                                                        <div class="modal-mask sell-post-modal position-fixed top-0 left-0 z-index-9999 w-full h-100 d-flex align-items-center justify-content-center">
                                                            <div class="modal-wrapper overflow-auto max-h-80pr border-1 border-secondery w-full w-sm-initial">
                                                                <div class="modal-dialog modal-dialog-centered m-0" role="document">
                                                                    <div class="modal-content bg-game-details br-0 p-3 p-sm-5">
                                                                        <button type="button" class="position-absolute top-10 right-10 close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true" @click="sellPostEditModalShow = false" class="close-modal">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M16.2427 6.34315L12.0001 10.5858L7.75744 6.34315L6.34323 7.75736L10.5859 12L6.34323 16.2426L7.75744 17.6569L12.0001 13.4142L16.2427 17.6569L17.6569 16.2426L13.4143 12L17.6569 7.75736L16.2427 6.34315Z" fill="#FFD715"/>
                                                                                    <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#FFD715"/>
                                                                                </svg>
                                                                            </span>
                                                                        </button>
                                                                        <h4 class="text-secondery mb-a-12 f-s-28 text-center">{{ $t('sell_post', $store.state.locale) }}</h4>
                                                                        <!-- form-group -->
                                                                        <ValidationObserver v-slot="{ invalid }">
                                                                            <form @submit.prevent="sellPostUpdate" method="post">
                                                                                <div class="form-group post-rent--form-group">
                                                                                    <label for="sell-post-name" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('name', $store.state.locale) }}</label>
                                                                                    <div class=" post-rent--form-group--input">
                                                                                        <ValidationProvider name="Sell post name" rules="required" v-slot="{ errors }">
                                                                                            <input type="text" class="form-control renten-input" id="sell-post-name" placeholder="Enter sell post name" v-model="editPostData.name">
                                                                                            <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                                        </ValidationProvider>
                                                                                    </div>

                                                                                </div>
                                                                                <!-- form-group -->
                                                                                <div class="form-group post-rent--form-group">
                                                                                    <label class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('description', $store.state.locale) }}</label>
                                                                                    <div class=" post-rent--form-group--input">
                                                                                        <ValidationProvider name="description" rules="required" v-slot="{ errors }">
                                                                                            <ckeditor v-model="editPostData.description" :config="editorConfig"></ckeditor>
                                                                                            <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                                        </ValidationProvider>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group post-rent--form-group">
                                                                                    <label for="sell-post-price" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('price', $store.state.locale) }}</label>
                                                                                    <div class=" post-rent--form-group--input">
                                                                                        <ValidationProvider name="price" rules="required" v-slot="{ errors }">
                                                                                            <input type="text" @keypress="isNumberOnEditPrice($event)" class="form-control renten-input" id="sell-post-price" placeholder="Enter price" v-model="editPostData.price">
                                                                                            <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                                        </ValidationProvider>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group post-rent--form-group" >
                                                                                    <label class="label-padding post-rent--form-group--label text-light text-left">{{ $t('is_negotiable', $store.state.locale) }} :</label>
                                                                                    <div class="post-rent--form-group--input">
                                                                                        <div class=" post-rent--form-group--input--radio-group ">
                                                                                            <div class="form-check form-check-inline custom-radio">
                                                                                                <input class="custom-control-input platform" id="sell-post-nego" name="is_negotiable" type="checkbox" value="" v-model="editPostData.is_negotiable" :checked="editPostData.is_negotiable == 1">
                                                                                                <label class="custom-control-label ml-2" for="sell-post-nego">{{ $t('is_negotiable', $store.state.locale) }}</label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group post-rent--form-group">
                                                                                    <label class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('sub_category', $store.state.locale) }}</label>
                                                                                    <div class=" post-rent--form-group--input">
                                                                                        <ValidationProvider name="Sub category" rules="required" v-slot="{ errors }">
                                                                                            <b-form-select
                                                                                                    v-model="selected"
                                                                                                    :options="subCategories"
                                                                                                    class="custom-select"
                                                                                                    value-field="id"
                                                                                                    text-field="name"
                                                                                                    disabled-field="notEnabled"
                                                                                            ></b-form-select>
                                                                                            <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                                        </ValidationProvider>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="form-group post-rent--form-group">
                                                                                    <label for="sell-post-phone" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('phone_number', $store.state.locale) }}</label>
                                                                                    <div class=" post-rent--form-group--input">
                                                                                        <ValidationProvider name="Phone no" rules="required|min:11|max:11" v-slot="{ errors }">
                                                                                            <input type="number" @keypress="isNumber($event)" class="form-control renten-input" id="sell-post-phone" v-model="editPostData.phone_no">
                                                                                            <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                                        </ValidationProvider>
                                                                                    </div>

                                                                                </div>
                                                                                <div class="form-group post-rent--form-group">
                                                                                  <label for="sell-post-email" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('email', $store.state.locale) }}</label>
                                                                                  <div class=" post-rent--form-group--input">
                                                                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                                                                      <input type="text" class="form-control renten-input" id="sell-post-email" v-model="editPostData.email">
                                                                                      <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                                    </ValidationProvider>
                                                                                  </div>
                                                                                </div>
                                                                                <div class="form-group post-rent--form-group">
                                                                                    <label for="sell-post-address" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('address', $store.state.locale) }}</label>
                                                                                    <div class=" post-rent--form-group--input">
                                                                                        <ValidationProvider name="Address" rules="required" v-slot="{ errors }">
                                                                                            <input type="text" class="form-control renten-input" id="sell-post-address" placeholder="Enter sell post address" v-model="editPostData.address">
                                                                                            <span v-if="errors.length" class="error-message d-block text-left mt-2">{{ errors[0] }}</span>
                                                                                        </ValidationProvider>
                                                                                    </div>

                                                                                </div>
                                                                              <div class="form-group post-rent--form-group" v-if="editPostData.cover != null">
                                                                                <label  class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('cover_image', $store.state.locale) }}</label>
                                                                                <div class="post-rent--form-group--input d-grid grid-cols-2 grid-sm-cols-3 grid-gap-10 grid-rows-100 grid-auto-rows-100">
                                                                                  <div class="position-relative sell-post-modal-img" :class="{ 'd-none': removeCover === editPostData.cover.id }"  @click="removeCover = editPostData.cover.id">
                                                                                    <img :src="editPostData.cover.url" class="img-fluid h-100" width="150" height="200">
                                                                                    <span class="image-cancel position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center sellpost-img-bg pointer">
                                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M16.2427 6.34315L12.0001 10.5858L7.75744 6.34315L6.34323 7.75736L10.5859 12L6.34323 16.2426L7.75744 17.6569L12.0001 13.4142L16.2427 17.6569L17.6569 16.2426L13.4143 12L17.6569 7.75736L16.2427 6.34315Z" fill="#FFD715"></path></svg>
                                                                                    </span>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div class="form-group post-rent--form-group">
                                                                                <label class="label-padding post-rent--form-group--label mt-0">{{ $t('upload_cover', $store.state.locale) }} :</label>
                                                                                <div class=" post-rent--form-group--input">
                                                                                  <div class="custom-file">
                                                                                    <a class=" btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative pointer" @click="$refs.FileInput.click()"><span></span> <div class="text-center position-relative">Upload image</div></a>
                                                                                    <input ref="FileInput" type="file" style="display: none;" @change="onEditFileSelect" />
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div class="form-group post-rent--form-group" v-if="editPostData.dialog">
                                                                                <label class="label-padding post-rent--form-group--label mt-0">Image preview :</label>
                                                                                <div class=" post-rent--form-group--input">
                                                                                  <div class="img-prev">
                                                                                    <VueCropper v-show="editPostData.postCoverImage"
                                                                                                ref="cropper"
                                                                                                :src="editPostData.postCoverImage"
                                                                                                :scalable="false"
                                                                                                dragMode="move"
                                                                                                :cropBoxMovable="false"
                                                                                                :cropBoxResizable="false"
                                                                                                :ready="cropBoxSet"
                                                                                                alt="Disk image preview">

                                                                                    </VueCropper>
                                                                                  </div>
                                                                                  <div class="my-2 d-grid grid-cols-2 grid-gap-16">
                                                                                    <a class=" btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative pointer" @click="saveEditImage(), (editPostData.dialog = true)"><span></span> <div class="position-relative text-center">Crop</div></a>
                                                                                    <a class=" btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative pointer" @click="editPostData.dialog = false, (editPostData.cover_image = '')"><span></span> <div class="position-relative text-center">Cancel</div></a>
                                                                                  </div>
                                                                                  <div class="img-prev" v-if="editPostData.cover_image">
                                                                                    <img :src="editPostData.cover_image" alt="Cover image preview">
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                              <div class="form-group post-rent--form-group" v-if="editPostData.images.length">
                                                                                  <label  class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('screenshots', $store.state.locale) }}</label>
                                                                                  <div class="post-rent--form-group--input d-grid grid-cols-2 grid-sm-cols-3 grid-gap-10 grid-rows-100 grid-auto-rows-100">
                                                                                     <div class="position-relative sell-post-modal-img" :class="{ 'd-none': removeScreenshots.some(data => data === image.id) }" v-for="(image, index) in editPostData.images" :key="index" @click="removeEditScreenshots(image.id)">
                                                                                          <img :src="image.url" class="img-fluid h-100" width="150" height="200">
                                                                                          <span class="image-cancel position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center sellpost-img-bg pointer">
                                                                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path d="M16.2427 6.34315L12.0001 10.5858L7.75744 6.34315L6.34323 7.75736L10.5859 12L6.34323 16.2426L7.75744 17.6569L12.0001 13.4142L16.2427 17.6569L17.6569 16.2426L13.4143 12L17.6569 7.75736L16.2427 6.34315Z" fill="#FFD715"></path></svg>
                                                                                          </span>
                                                                                     </div>
                                                                                  </div>
                                                                              </div>
                                                                              <div class="form-group post-rent--form-group gamebazar-step-form ">
                                                                                <label for="sell-post-address" class=" label-padding post-rent--form-group--label text-light text-left">{{ $t('upload_screenshots', $store.state.locale) }}</label>
                                                                                <div class=" post-rent--form-group--input wizard__body__step">
                                                                                  <UploadImages class="image-boxs w-100 p-0 bg-transparent border-0" :max="4" @change="handleEditScreenshots"/>
                                                                                </div>
                                                                              </div>
                                                                              <!-- form-group Button -->
                                                                              <div class="form-group post-rent--form-group offer-edit-btn">
                                                                                  <label class=" label-padding post-rent--form-group--label text-light"></label>
                                                                                  <div class=" post-rent--form-group--input">
                                                                                      <button type="submit" class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative pointer user-id-edit-btn" :disabled="invalid">
                                                                                          <span></span>
                                                                                        <div class="w-100 position-relative">
                                                                                          <div v-if="isEditLoading" class="spinner-border spinner-border-sm skew-none"></div>
                                                                                          {{ $t('submit', $store.state.locale) }}
                                                                                        </div>
                                                                                      </button>
                                                                                  </div>
                                                                              </div>
                                                                            </form>
                                                                        </ValidationObserver>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </transition>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Nothing to show -->
                                    <div class="no-post-found-card mb-0" v-else>
                                        <h5>{{ $t('noting_to_show', $store.state.locale) }} !</h5>
                                    </div>
                                </div>
                            </div>
                            <!-- Post for Rent -->
                            <div class="tab-pane fade" id="v-pills-post-rent" role="tabpanel" aria-labelledby="v-pills-post-rent-tab">
                                <div class="post-rent">
                                    <ValidationObserver ref="form">
                                        <form @submit.prevent="onRentSubmit" method="post" id="sellPostForm">
                                            <!-- form-group -->
                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label"></label>
                                                <div class=" post-rent--form-group--input">
                                                    <router-link
                                                            class="secondery-border text-secondery d-flex align-items-center justify-content-center h-48 game-rent-bg"
                                                            to="/lend-notice" target="_blank">{{$t('learn_about_create_post', $store.state.locale) }}
                                                    </router-link>
                                                </div>
                                            </div>

                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label">{{ $t('game_name', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="game" rules="" v-slot="{ errors }">
                                                        <vue-autosuggest
                                                            v-model="gameName"
                                                            :suggestions="filteredOptions"
                                                            @focus="focusMe"
                                                            @click="clickHandler"
                                                            @input="onInputChange"
                                                            @selected="onSelected"
                                                            :get-suggestion-value="getSuggestionValue"
                                                            :input-props="{id:'autosuggest__input2', placeholder: $t('search_game', $store.state.locale) }">
                                                        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                                            <div>{{suggestion.item.name}}</div>
                                                        </div>
                                                        </vue-autosuggest>
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                              <!-- form-group -->
                                            <div class="form-group post-rent--form-group">
                                                <label for="rentedWeek" class=" label-padding post-rent--form-group--label">{{ $t('max_rent_week', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="rented week" rules="required|integer|min_value:1" v-slot="{ errors }">
                                                        <input type="number" class="form-control renten-input" id="rentedWeek" min="1" max="10" v-model="rentData.max_week">
                                                        <!-- Plus Minus icon -->
                                                       <div class="post-rent--form-group--input--plus-minus">
                                                           <div @click="adjustRentedWeek('increase')"> <i class="fa fa-angle-up rented-plus icon" ></i></div>
                                                            <div @click="adjustRentedWeek('decrease')"><i class="fa fa-angle-down rented-minus icon"></i></div>
                                                       </div>
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                              <!-- form-group -->
                                            <div class="form-group post-rent--form-group" v-if="gamePlatform">
                                                <label class=" label-padding post-rent--form-group--label mt-0">{{ $t('platform', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                <ValidationProvider name="Platform" rules="required" v-slot="{ errors }">
                                                    <div class=" post-rent--form-group--input--radio-group ">
                                                        <div class="form-check form-check-inline custom-radio" v-for="(platform, index) in rentData.game.platforms.data" :key="index">
                                                            <input class="custom-control-input platform" :id="'platform-' + index" name="platform" type="radio" :value="platform" v-model="rentData.platform">
                                                            <label class="custom-control-label ml-2" :for="'platform-' + index">{{ platform.name }}</label>
                                                        </div>
                                                    </div>


                                                    <span v-if="errors.length" class="error-message platform-error">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                                </div>
                                            </div>
                                                  <!-- Delivery type -->
                                            <div class="form-group post-rent--form-group">
                                                <label class="post-rent--form-group--label mt-0">{{ $t('delivery_type', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                    <div class="post-rent--form-group--input--radio-group delivery-radio-group">
                                                        <div class="custom-radio d-flex">
                                                            <input type="radio" v-model="x" value="" v-on:change="onEmpty" name="checkpoint_id" id="cod" class="custom-control-input" checked>
                                                            <label for="cod" class="custom-control-label"> {{ $t('cash_on_delivery', $store.state.locale) }} <span class="checkbox-style"></span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Select Check point -->
                                              <!-- form-group -->
                                           <div class="form-group post-rent--form-group" v-show="x === '1'">
                                                    <label class="post-rent--form-group--label">{{ $t('select_checkpoint', $store.state.locale) }} :</label>
                                                    <div class="post-rent--form-group--input">
                                                        <select class="form-control" id="checkpoint" v-model="rentData.checkpoint">
                                                            <option value="" disabled>Please Select Near Checkpoint</option>
                                                            <option v-for="(checkpoint, index) in checkpoints" :key="index" :value="checkpoint">{{ checkpoint.name }}, Area: {{ checkpoint.area.data.name }}</option>
                                                        </select>
                                                    </div>
                                            </div>
                                              <!-- form-group -->
                                            <div class="form-group post-rent--form-group">

                                                <label class="post-rent--form-group--label mt-0">{{ $t('disk_type', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                    <ValidationProvider name="Game type" rules="required" v-slot="{ errors }">
                                                    <div class="post-rent--form-group--input--radio-group delivery-radio-group">
                                                        <div class="custom-radio d-flex ">
                                                            <input type="radio" value="0" id="digital_copy" name="disk_type" v-model="rentData.disk_type" @click="basePriceSelect(1)" class="custom-control-input">
                                                            <label for="digital_copy" class="custom-control-label"> {{ $t('digital_copy', $store.state.locale) }} <span></span></label>
                                                        </div>

                                                        <div class="custom-radio d-flex">
                                                            <input type="radio" value="1" id="physical_copy" name="disk_type" v-model="rentData.disk_type" @click="basePriceSelect(2)" class="custom-control-input">
                                                            <label for="physical_copy" class="custom-control-label"> {{ $t('physical_copy', $store.state.locale) }} <span></span></label>
                                                        </div>

                                                    </div>
                                                    <span v-if="errors.length" class="error-message platform-error type-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <!-- earning amount -->
                                            <!-- form-group -->
<!--                                            <div class="form-group post-rent&#45;&#45;form-group" v-if="basePrices">-->
                                            <div class="form-group post-rent--form-group" v-if="gameTypePricingState && basePrices">
                                                <label class="post-rent--form-group--label mt-0">{{ $t('earning_amount', $store.state.locale) }} :</label>
                                                <div class="earning-amount post-rent--form-group--input">
                                                    <div class="earning-amount--content">
                                                        <table class="table table-borderless">
                                                            <tbody>
                                                            <tr class="">
                                                                <td>{{ $t('estimation_1', $store.state.locale) }}</td>
                                                                <td>BDT {{ Math.ceil((basePrices[1] - ( basePrices[1] * gameTypePricing ) /100)) }}</td>
                                                            </tr>
                                                            <tr class="">
                                                                <td>{{ $t('estimation_2', $store.state.locale) }}</td>
                                                                <td>BDT {{ Math.ceil(basePrices[1] + basePrices[2]  - ((basePrices[1] + basePrices[2])  * gameTypePricing )/100) }}</td>
                                                            </tr>
                                                            <tr class="">
                                                                <td>{{ $t('estimation_3', $store.state.locale) }}</td>
                                                                <td>BDT {{ Math.ceil(basePrices[1] + basePrices[2] + basePrices[3] - ((basePrices[1] + basePrices[2] + basePrices[3]) * gameTypePricing)/100) }}</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                        <!-- warning -->
                                                        <div class=" mt-2 game-rent-alert">
                                                            <div class="alert alert-info alert-dismissible game-rent-alert--box">
                                                                <button type="button" class="close close-modal" data-dismiss="alert" aria-label="Close"></button>
                                                                <p>
                                                                    {{ $t('estimation_notice', $store.state.locale) }}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                             <!-- form-group -->
                                            <div class="form-group post-rent--form-group" v-if="isDigital">
                                                <label for="rent-game-user-id" class=" label-padding post-rent--form-group--label">{{ $t('game_user_id', $store.state.locale) }}</label>
                                                <div class=" post-rent--form-group--input">
                                                    <input type="text" class="form-control renten-input" id="rent-game-user-id" placeholder="Enter game user id" v-model="rentData.gameUserId">
                                                </div>
                                            </div>
                                            <!-- form-group -->
                                            <div class="form-group post-rent--form-group" v-if="isDigital">
                                                <label for="rent-game-user-pass" class=" label-padding post-rent--form-group--label">{{ $t('game_password', $store.state.locale) }}</label>
                                                <div class=" post-rent--form-group--input">
                                                    <input type="text" class="form-control renten-input" id="rent-game-user-pass" placeholder="Enter game user password" v-model="rentData.gamePassword">
                                                </div>
                                            </div>
                                            <!-- form-group -->
                                            <div class="form-group post-rent--form-group" v-if="diskImageRequired">
                                                <label class="post-rent--form-group--label" for="DiskCondition">{{ $t('disk_condition', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                    <ValidationProvider name="Disk Condition" :rules='{required: diskImageRequired}' v-slot="{ errors }">
                                                        <select class="form-control js-example-basic-single" id="DiskCondition" v-model="rentData.disk_condition">
                                                            <option disabled value="" >{{ $t('disk_condition_select', $store.state.locale) }}</option>
                                                            <option v-for="(diskCondition, index) in diskConditions" :key="index" :value="diskCondition">{{ diskCondition.name_of_type }} ({{ diskCondition.description }})</option>
                                                        </select>
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <!-- disk image -->
                                            <div class="form-group post-rent--form-group post-rent--form-group-img" v-if="diskImageRequired">
                                                <label class="post-rent--form-group--label">{{ $t('disk_image', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                    <ValidationProvider name="Disk Image" :rules='{required: diskImageRequired}' v-slot="{ validate, errors }">
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="diskUpload"  accept="image/*" @change="onDiskImageChange($event)|| validate($event)">
                                                        <label class="custom-file-label text-light" for="diskUpload">{{ selectedDiskName }}</label>
                                                    </div>
                                                    <div class="img-prev">
                                                        <img v-if="rentData.disk_image" :src="rentData.disk_image" alt="Disk image preview">
                                                        <img v-else src="../assets/img/disk.png" alt="Disk image preview">
                                                    </div>
                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group post-rent--form-group-img" v-if="diskImageRequired">
                                                <label class="post-rent--form-group--label">{{ $t('cover_image', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                    <ValidationProvider name="Cover Image" :rules='{required: diskImageRequired}' v-slot="{ validate, errors }">
                                                    <div class="custom-file">
                                                        <input type="file" class="custom-file-input" id="customFile2" accept="image/*" @change="onCoverImageChange($event)|| validate($event)">
                                                        <label class="custom-file-label text-light" for="customFile2">{{ selectedCoverName }}</label>
                                                    </div>
                                                    <div class="img-prev">
                                                        <img v-if="rentData.cover_image" :src="rentData.cover_image" alt="Cover image preview">
                                                        <img v-else src="../assets/img/cover.png" alt="Cover image preview">
                                                    </div>
                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>

                                            <!-- Agree terms and condition -->
                                            <div class="form-group post-rent--form-group post-rent--form-group--agree post-rent--form-group--agree-profile mt-a-7">
                                                <div class="checkbox-parents">
                                                <ValidationProvider name="Terms & Conditions" rules="required" v-slot="{ errors }">
                                                    <input type="checkbox" id="terms-agree" class="checkbox-parents--input" v-model="agreement" @change="onAgreement($event)">
                                                    <label for="terms-agree" class="checkbox-parents--label">{{ $t('i_agree', $store.state.locale) }} <router-link to="/terms" target="_blank" class="text-secondery"><u>{{ $t('terms', $store.state.locale) }}</u></router-link></label>
                                                    <span v-if="errors.length" class="error-message d-block ml--28">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group post-rent-btn">
                                                <button class="btn--secondery-hover br-4 gil-bold font-weight-bold border-0 primary-text d-inline-block position-relative post-rent--form-group--btn" :disabled="isRentLoading">
                                                    <div class="mr-2 position-relative">{{ $t('submit', $store.state.locale) }} <i v-if="isRentLoading" class="spinner-border spinner-border-sm"></i></div>
                                                    <span></span>
                                                    <span></span>
                                                </button>
                                            </div>

                                        </form>
                                    </ValidationObserver>
                                </div>
                            </div>
                            <!-- edit profile -->
                            <div class="tab-pane fade" id="v-pills-edit-profile" role="tabpanel" aria-labelledby="v-pills-edit-profile-tab">
                                <div class="edit-profile">
                                    <ValidationObserver v-slot="{ handleSubmit }">
                                        <form @submit.prevent="handleSubmit(onProfileUpdate)" method="post">
                                            <div class="form-group row">
                                                <label for="first_name" class="col-sm-3 col-form-label">{{ $t('first_name', $store.state.locale) }} :</label>

                                                    <div class="col-sm-9 edit--input">
                                                        <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                                                            <input @keypress="isValidString($event)" type="text" class="form-control" id="first_name" v-model="form.name">
                                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                        </ValidationProvider>
                                                    </div>

                                            </div>
                                            <div class="form-group row">
                                                <label for="last_name" class="col-sm-3 col-form-label">{{ $t('last_name', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="last name" rules="required" v-slot="{ errors }">
                                                        <input @keypress="isValidString($event)" type="text" class="form-control" id="last_name" v-model="form.last_name">
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label for="gender" class="col-sm-3 col-form-label">{{ $t('gender', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="gender" rules="required" v-slot="{ errors }">



                                                     <!-- <v-select :options="itemsData"  label="Standard" v-model="form.gender" class="gamehub-custome-select"></v-select> -->



                                                        <select class="custom-select" id="gender" v-model="form.gender">
                                                            <option value="">Select Gender</option>
                                                            <option value="male" >Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="others">Others</option>
                                                        </select>
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="dateofbirth" class="col-sm-3 col-form-label">{{ $t('dob', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="date of birth" rules="required" v-slot="{ errors }">
                                                        <input type="date" class="form-control" id="dateofbirth" :max="todayDate()" v-model="form.birth_date">
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="email" class="col-sm-3 col-form-label">{{ $t('email', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                                        <input type="email" @focus="onEmailFocus" class="form-control" id="email" v-model="form.email">
                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    <span class="error-message d-block" v-if="isEmailExists">Email already taken</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
<!--                                            <div class="form-group row">-->
<!--                                                <label class="col-sm-3 col-form-label">Mobile No:</label>-->
<!--                                                <div class="col-sm-9 edit&#45;&#45;input">-->
<!--                                                    <ValidationProvider name="phone number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">-->
<!--                                                        <input type="text" @focus="onPhoneFocus" @keypress="isNumber($event)" class="form-control" id="phone_number" v-model="form.phone_number">-->
<!--                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>-->
<!--                                                        <span class="error-message d-block" v-if="isPhoneExists">Phone number already exists</span>-->
<!--                                                    </ValidationProvider>-->
<!--                                                </div>-->
<!--                                            </div>-->
                                            <div class="form-group row">
                                                <label for="address" class="col-sm-3 col-form-label">{{ $t('address', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                                        <input type="text" class="form-control" id="address" v-model="form.address">
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="city" class="col-sm-3 col-form-label">{{ $t('city', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="city" rules="required" v-slot="{ errors }">
                                                        <input type="text" class="form-control" id="city" v-model="form.city">
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label for="postcode" class="col-sm-3 col-form-label">{{ $t('post_code', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="post code" rules="required" v-slot="{ errors }">
                                                        <input type="text" class="form-control" id="postcode" v-model="form.postCode">
                                                        <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group row" v-if="nid_verification == 0">
                                                <label for="nidno" class="col-sm-3 col-form-label">{{ $t('nid', $store.state.locale) }}:</label>
                                                <div class="col-sm-9 edit--input">
                                                    <ValidationProvider name="NID" rules="required" v-slot="{ errors }">
                                                    <input type="text" class="form-control" id="nidno" v-model="form.identification_number">
                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group row" v-if="nid_verification == 0">
                                                <label class="col-sm-3 col-form-label">{{ $t('nid_image', $store.state.locale) }} :</label>
                                                <div class="col-sm-9 edit--input">
                                                <div class="custom-file">
                                                    <ValidationProvider name="NID Image" rules="required" v-slot="{ validate, errors }">
                                                        <input @change="onIdChange($event) || validate($event)" accept=".png, .jpg, .jpeg" type="file" class="custom-file-input" id="customFile">
                                                        <label class="custom-file-label text-light" for="customFile">{{ selectedFile }}</label>
                                                    <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                            <div class="offset-md-3 col-md-9 col-xl-8 mt-4 post-rent--input">
                                                    <button class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-100 border-0" :disabled="$store.state.isProfileUpdating">
                                                        <div class="mr-2 position-relative">{{ $t('update_profile', $store.state.locale) }} <i v-if="$store.state.isProfileUpdating" class="spinner-border spinner-border-sm text-dark"></i>  </div>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </ValidationObserver>
                                </div>
                            </div>
                            <!-- Earning tab -->
                            <div class="tab-pane fade" id="v-pills-my-earning" role="tabpanel" aria-labelledby="v-pills-my-earning-tab">
                                <div class="my-earning">
                                    <div class="my-earning--dashboard">
                                        <div class="my-earning--dashboard--content">
                                            <h4>{{ $t('lifetime_earning', $store.state.locale) }}</h4>
                                            <h2>{{ total_earn }} Taka</h2>
                                        </div>
                                        <div class="my-earning--dashboard--content">
                                            <h4>{{ $t('amount_received', $store.state.locale) }}</h4>
                                            <h2>{{ payable_amount }} Taka</h2>
                                              <a href="javascript:void(0)" @click="requestModalShow = true; withdrawAmount = payable_amount" class="bg-secondery d-block text-center primary-text w-full primary-text-shadow gil-bold primary-text-hover py-2">
                                                <span>{{ $t('withdraw_request', $store.state.locale) }}</span>
                                              </a>
                                        </div>
                                    </div>
                                  <!-- Extend modal -->
                                  <div v-if="requestModalShow">
                                    <transition name="modal">
                                      <div class="modal-mask order-details-extend-modal position-fixed top-0 left-0 h-100 w-full d-flex align-items-center justify-content-center z-index-9">
                                        <div class="modal-wrapper">
                                          <div class="modal-dialog modal-dialog-centered w-328" role="document">
                                            <div class="modal-content bg-pattens-blue border-2 border-secondery p-a-4 br-0">
                                              <button type="button" class="close position-absolute right-10 top-10 w-fit" data-dismiss="modal" aria-label="Close">
                                                <svg aria-hidden="true" @click="requestModalShow = false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M16.2427 6.34315L12.0001 10.5858L7.75744 6.34315L6.34323 7.75736L10.5859 12L6.34323 16.2426L7.75744 17.6569L12.0001 13.4142L16.2427 17.6569L17.6569 16.2426L13.4143 12L17.6569 7.75736L16.2427 6.34315Z" fill="#0B0F18"/>
                                                  <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#0B0F18"/>
                                                </svg>
                                              </button>
                                              <div class="modal-body-content">
                                                  <div>
                                                    <div class="border-0">
                                                      <div class="d-flex mb-4">
                                                        <p class="primary-text gil-medium mb-0">{{ $t('withdraw_request', $store.state.locale) }}:</p>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between mt-4">
                                                        <p class="text-light-gray gil-medium mb-0">{{ $t('amount', $store.state.locale) }} :</p>
                                                      </div>
                                                      <div class="d-flex align-items-center justify-content-between mt-4">
                                                        <input type="number" min="100" max="5000" class="form-control bg-game-details focus-game-details border-half border-secondery-imp no-default-arrow br-0 shadow-none cursor-pointer text-white gil-medium" v-model="withdrawAmount" />
                                                      </div>
                                                    </div>
                                                  </div>

                                                  <div class="d-flex justify-content-center mt-5">
                                                    <a href="javascript:void(0)" @click.prevent="submitWithdraw" :disabled="withdrawLoading" class="bg-secondery d-block text-center primary-text w-full primary-text-shadow gil-bold primary-text-hover py-2">
                                                      <span> {{ $t('submit', $store.state.locale) }} <i v-if="withdrawLoading" class="spinner-border spinner-border-sm"></i></span>
                                                    </a>
                                                  </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </transition>
                                  </div>
                                    <!-- payment history -->
                                    <div class="my-earning--payment-history">
                                        <h4 class="my-earning--payment-history--heading">{{ $t('payment_history', $store.state.locale) }}</h4>
                                        <div class="table-responsive" v-if="transactions.length">
                                            <table class="table my-earning--payment-history--table">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">{{ $t('transaction_id', $store.state.locale) }}</th>
                                                    <th scope="col">{{ $t('date', $store.state.locale) }}</th>
                                                    <th scope="col">{{ $t('withdrawal_amount', $store.state.locale) }}</th>
                                                    <th scope="col">{{ $t('withdrawal_method', $store.state.locale) }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in transactions" :key="index">
                                                        <td>{{ item.transaction_id }}</td>
                                                        <td>{{ item.create }}</td>
                                                        <td>{{ Math.ceil(item.amount) }} Taka</td>
                                                        <td>{{ item.payment_type }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <span class="text-center d-block mt-a-18" v-else>{{ $t('no_trans_found', $store.state.locale) }}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Refer friend -->
                            <div class="tab-pane fade" id="v-pills-refer" role="tabpanel" aria-labelledby="v-pills-refer-tab">
                                <div class="refer-friend">
                                    <div class="refer-friend--link">
                                        <p>{{ $t('refer_link', $store.state.locale) }}</p>
                                        <div class="refer-friend--link--input-group d-flex">
                                            <input type="text" class="refer-friend--link--input-group--input" :value="user.referral_url" v-if="user.referral_url" readonly>
                                            <div class="refer-friend--link--input-group--append"
                                                 v-clipboard:copy="user.referral_url"
                                                 v-clipboard:success="onCopy"
                                                 v-clipboard:error="onError">
                                                <span>{{ $t('copy_link', $store.state.locale) }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- refer earning -->
                                     <div class="my-earning--dashboard">
                                        <div class="my-earning--dashboard--content">
                                            <h4>{{ $t('Used_referral', $store.state.locale) }}</h4>
                                            <h2>{{ walletTotalSpend }} Taka</h2>
                                        </div>
                                        <div class="my-earning--dashboard--content">
                                            <h4>{{ $t('usable_amount', $store.state.locale) }}</h4>
                                            <h2>{{ walletUsableAmount }} Taka</h2>
                                        </div>
                                    </div>
                                    <!-- refer amount -->
                                    <div class="d-flex flex-column flex-sm-row text-center text-sm-left align-items-center justify-content-between">
                                        <h6 class="mr-4 gray-text">{{ $t('want_to_earn', $store.state.locale) }}</h6>
                                        <router-link to="/games" class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('rent_games', $store.state.locale) }}</div></router-link>
                                    </div>
                                    <!-- refer history -->
                                    <div class="refer-history">
                                        <h6 class="mr-4 gray-text">{{ $t('referral_history', $store.state.locale) }}</h6>
                                        <div class="table-responsive" v-if="walletHistory.length">
                                             <table class="table my-earning--payment-history--table">
                                                <thead>
                                                    <tr>
                                                    <th scope="col">{{ $t('date', $store.state.locale) }}</th>
                                                    <th scope="col">{{ $t('name', $store.state.locale) }}</th>
                                                    <th scope="col">{{ $t('email', $store.state.locale) }} {{ $t('address', $store.state.locale) }}</th>
                                                    <th scope="col">{{ $t('earned', $store.state.locale) }}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in walletHistory" :key="index">
                                                        <td>{{ formattedDate(item.created_at) }}</td>
                                                        <td>{{ item.referred_user ? item.referred_user.name :'N/A' }}</td>
                                                        <td>{{ item.referred_user ? item.referred_user.email :  'N/A' }}</td>
                                                        <td>{{ item.amount }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <span class="text-center d-block mt-a-18" v-else>{{ $t('no_referral_history', $store.state.locale) }}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Rating game -->
                            <div class="tab-pane fade" id="v-pills-rating" role="tabpanel" aria-labelledby="v-pills-rating-tab">
                                    <div class="my-rating">
                                        <div class="my-rating--dashboard secondery-border d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-5">
                                            <div class="my-earning--dashboard--content mb-5 mb-md-0">
                                                <h4 class="f-s-24 gil-medium mb-4">{{ $t('as_a', $store.state.locale) }} <span class="text-white">{{ $t('Renter', $store.state.locale) }}</span> {{ $t('your_rating', $store.state.locale) }}</h4>
                                                <star-rating :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :border-width="3" :active-border-color="['#FFD715']" border-color="#D8D8D8" :rounded-corners="true" :read-only="true" :rating="rentingAvg" inactive-color="#D8D8D8" active-color="#FFD715" v-bind:star-size="30"></star-rating>
                                                <router-link to="/renter-rating-list" class="text-secondery mt-4 d-inline-block">{{ $t('view_list', $store.state.locale) }} ( {{ renterRatingCount }} )</router-link>
                                            </div>
                                            <div class="my-earning--dashboard--content">
                                                <h4 class="f-s-24 gil-medium mb-4">{{ $t('as_a', $store.state.locale) }} <span class="text-white">{{ $t('Lender', $store.state.locale) }}</span> {{ $t('your_rating', $store.state.locale) }}</h4>
                                                <star-rating :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :border-width="3" :active-border-color="['#FFD715']" border-color="#D8D8D8" :rounded-corners="true" :read-only="true" :rating="lendingAvg" inactive-color="#D8D8D8" active-color="#FFD715" v-bind:star-size="30"></star-rating>
                                                <router-link to="/lender-rating-list" class="text-secondery mt-4 d-inline-block">{{ $t('view_list', $store.state.locale) }} ( {{ lenderRatingCount }} )</router-link>
                                            </div>
                                        </div>
                                        <!-- Rating history -->
                                        <div class="my-earning--payment-history">
                                            <h4 class="my-earning--payment-history--heading mb-4">{{ $t('waiting_for_rate', $store.state.locale) }}</h4>
                                            <div class="table-responsive" v-if="ratingList.length">
                                                <table class="table my-earning--payment-history--table">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">{{ $t('order_no', $store.state.locale) }}</th>
                                                        <th scope="col">{{ $t('game_name', $store.state.locale) }}</th>
                                                        <th scope="col">{{ $t('order_type', $store.state.locale) }}</th>
                                                        <th scope="col">{{ $t('order_completed', $store.state.locale) }}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(rating, index) in ratingList" :key="index">
                                                            <td>{{ rating.lend.data.order.data.order_no }}</td>
                                                            <td>{{ rating.lend.data.rent.data.game.data.name }}</td>
                                                            <td v-if="rating.lender_id == $store.state.user.id">Lending</td>
                                                            <td v-else>Renting</td>
                                                            <td>{{ formattedReturnDate(rating.lend.data.lend_date) }}</td>
                                                            <td><a href="#" class="text-secondery"  @click="setRatingData(rating)">{{ $t('rate_now', $store.state.locale) }}</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!-- Rating box  -->

                                            <div v-if="ratingPopupModal">
                                                <transition name="modal">
                                                    <div class="modal-mask rating-box-modal position-fixed top-0 left-0 w-100 h-100 m-auto z-index-9999">
                                                        <div class="modal-wrapper bg-black-opa overflow-auto h-100">
                                                            <div class="modal-dialog modal-dialog-centered h-100 mt-a-16" role="document">
                                                                <div class="modal-content max-500 bg-game-details border-2 border-secondery br-0">
                                                                    <button type="button" class="close position-absolute right-20 top-20" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true" @click="ratingPopupModal = false" class="close-modal">
                                                                            <svg class="secondery-border rounded-circle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M14.2427 4.34315L10.0001 8.58579L5.75744 4.34315L4.34323 5.75736L8.58587 10L4.34323 14.2426L5.75744 15.6569L10.0001 11.4142L14.2427 15.6569L15.6569 14.2426L11.4143 10L15.6569 5.75736L14.2427 4.34315Z" fill="#FFD715"/>
                                                                        </svg>
                                                                        </span>
                                                                    </button>
                                                                    <div class="modal-body-content">
                                                                        <h5 class="modal-title text-secondery text-center f-s-32 mb-4" id="exampleModalLabel">{{ $t('rate_please', $store.state.locale) }}</h5>
                                                                        <div class="text-center w-100px h-100px mx-auto overflow-hidden rounded-circle mb-4" v-if="ratingData.value.lender_id != $store.state.user.id">
                                                                            <img :src="ratingData.value.lender.data.image" alt="img" class="img-fluid" v-if="ratingData.value.lender.data.image">
                                                                            <img src="../assets/img/avatar.png" class="img-fluid gamehub--logo" alt="Gamehub Logo logo" v-else>
                                                                        </div>
                                                                        <div class="text-center w-100px h-100px mx-auto overflow-hidden rounded-circle mb-4" v-else>
                                                                            <img :src="ratingData.value.renter.data.image" alt="img" class="img-fluid" v-if="ratingData.value.renter.data.image">
                                                                            <img src="../assets/img/avatar.png" class="img-fluid gamehub--logo" alt="Gamehub Logo logo" v-else>
                                                                        </div>
                                                                        <div class="text-center" v-if="ratingData.value.lender_id != $store.state.user.id">
                                                                            <p class="f-s-20 mb-1 gil-bold" >{{ ratingData.value.lender.data.name}} {{ ratingData.value.lender.data.last_name}}</p>
                                                                            <p class="gil-bold opa-8">{{ $t('Lender', $store.state.locale) }}</p>
                                                                        </div>
                                                                        <div class="text-center" v-else>
                                                                            <p class="f-s-20 mb-1 gil-bold" >{{ ratingData.value.renter.data.name}} {{ ratingData.value.renter.data.last_name}}</p>
                                                                            <p class="gil-bold opa-8">{{ $t('Renter', $store.state.locale) }}</p>
                                                                        </div>
                                                                        <div class="text-center">
                                                                            <p class="f-s-20 mb-1 gil-bold">{{ ratingData.value.lend.data.rent.data.game.data.name }}</p>
                                                                            <p class="gil-bold opa-8">{{ $t('game_name', $store.state.locale) }}</p>
                                                                        </div>
                                                                        <div class="d-flex vue-react justify-content-center align-items-center mb-5">
                                                                            <vue-feedback-reaction v-model="ratingData.feedback" :labels="['Very Poor','Poor','Average','Good','Excellent']"/>
                                                                        </div>
                                                                        <form class="" @submit.prevent="ratingSubmit" method="post">
                                                                            <div class="comment-box">
                                                                                <div class="form-group">
                                                                                    <label for="comment-box" class="d-block gil-bold">{{ $t('comment_box', $store.state.locale) }}</label>
                                                                                    <textarea type="text" id="comment-box" rows="3" class="w-100 border-1 border-secondery primary-bg text-white p-2 focus-primary" v-model="ratingData.comment"></textarea>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <span class="text-center d-block text-danger" v-if="invalidRating">{{ $t('please_rating', $store.state.locale) }}</span>
                                                                            </div>
                                                                            <div>
                                                                                <button type="submit" class="bg-secondery primary-text text-center py-2 w-100 d-block gil-medium primary-text-hover">{{ $t('submit', $store.state.locale) }}</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                            </div>
                                            <span class="text-center d-block mt-a-18" v-else>{{ $t('no_pending_rating', $store.state.locale) }}</span>
    <!--                                        <nav aria-label="Page navigation example" class="my-earning&#45;&#45;payment-history&#45;&#45;pagination">-->
    <!--                                            <ul class="pagination">-->
    <!--                                                <li class="page-item">-->
    <!--                                                    <a class="page-link" href="#" aria-label="Previous">-->
    <!--                                                        <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>-->
    <!--                                                    </a>-->
    <!--                                                </li>-->
    <!--                                                <li class="page-item"><a class="page-link active" href="#">1</a></li>-->
    <!--                                                <li class="page-item"><a class="page-link" href="#">2</a></li>-->
    <!--                                                <li class="page-item"><a class="page-link" href="#">3</a></li>-->
    <!--                                                <li class="page-item">-->
    <!--                                                    <a class="page-link" href="#" aria-label="Next">-->
    <!--                                                        <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>-->
    <!--                                                    </a>-->
    <!--                                                </li>-->
    <!--                                            </ul>-->
    <!--                                        </nav>-->
                                        </div>
                                    </div>
                              </div>
                            <!-- Sell post -->
                            <div class="tab-pane fade" id="v-pills-sell-post" role="tabpanel" aria-labelledby="v-pills-sell-post-tab">
                                <div class="post-rent">
                                    <ValidationObserver ref="sellForm">
                                        <form @submit.prevent="onSellPostSubmit" method="post" id="sellForm">
                                            <!-- form-group -->
                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label"></label>
                                                <div class=" post-rent--form-group--input">
                                                    <router-link
                                                            class="secondery-border text-secondery d-flex align-items-center justify-content-center h-48 game-rent-bg"
                                                            to="/about-sell-post">{{$t('learn_about_create_sell_post', $store.state.locale) }}
                                                    </router-link>
                                                </div>
                                            </div>

                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label">{{ $t('product_name', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                                                        <input type="text" class="form-control renten-input" name="name" v-model="sellData.name">
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label">{{ $t('description', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="description" rules="required" v-slot="{ errors }">
                                                        <ckeditor v-model="sellData.description" :config="editorConfig"></ckeditor>
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label">{{ $t('price', $store.state.locale) }} (BDT):</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="price" rules="required|integer" v-slot="{ errors }">
                                                        <input type="number" @keypress="isNumberOnPostPrice($event)" class="form-control renten-input" name="price" v-model="sellData.price">
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group" >
                                                <label class=" label-padding post-rent--form-group--label mt-0">{{ $t('product_type', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                    <ValidationProvider name="Product type" rules="required" v-slot="{ errors }">
                                                        <div class=" post-rent--form-group--input--radio-group ">
                                                            <div class="form-check form-check-inline custom-radio">
                                                                <input class="custom-control-input platform" id="new_type" @click="summaryModal = false" name="product_type" type="radio" value="1" v-model="sellData.product_type">
                                                                <label class="custom-control-label ml-2" for="new_type">New</label>
                                                            </div>
                                                            <div class="form-check form-check-inline custom-radio">
                                                                <input class="custom-control-input platform" id="used_type" @click="summaryModal = true" name="product_type" type="radio" value="2" v-model="sellData.product_type">
                                                                <label class="custom-control-label ml-2" for="used_type">Used</label>
                                                            </div>
                                                        </div>
                                                        <span v-if="errors.length" class="error-message platform-error">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group" v-if="summaryModal">
                                                <label class=" post-rent--form-group--label">{{ $t('condition_summary', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                                        <input type="text" class="form-control renten-input" name="condition_summary" v-model="sellData.summary">
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group" >
                                                <label class=" label-padding post-rent--form-group--label mt-0">{{ $t('is_negotiable', $store.state.locale) }} :</label>
                                                <div class="post-rent--form-group--input">
                                                    <div class=" post-rent--form-group--input--radio-group ">
                                                        <div class="form-check form-check-inline custom-radio">
                                                            <input class="custom-control-input platform" id="is_negotiable" name="is_negotiable" type="checkbox" value="" v-model="sellData.is_negotiable">
                                                            <label class="custom-control-label ml-2" for="is_negotiable">{{ $t('is_negotiable', $store.state.locale) }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label">{{ $t('phone_number', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="phone number" rules="required" v-slot="{ errors }">
                                                        <input type="number" @keypress="isNumberOnSell($event)" class="form-control renten-input" name="phone_no" v-model="sellData.phone_no" placeholder="Enter Phone number">
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label">{{ $t('address', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="address" rules="required" v-slot="{ errors }">
                                                        <input type="text" class="form-control renten-input" name="address" v-model="sellData.address" placeholder="Enter address">
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label">{{ $t('sub_category', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                    <ValidationProvider name="Sub Category" rules="required" v-slot="{ errors }">
                                                        <select class="custom-select" id="sub_category" name="sub_category" v-model="sellData.sub_category_id">
                                                            <option value="">Select sub category</option>
                                                            <option :value="category.id" v-for="(category, index) in subCategories" :key="index">{{ category.name }}</option>
                                                        </select>
                                                        <span class="text-danger">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group">
                                                <label class="label-padding post-rent--form-group--label mt-0">{{ $t('cover_image', $store.state.locale) }} :</label>
                                                <div class=" post-rent--form-group--input">
                                                  <div class="custom-file">
                                                    <a class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative pointer" @click="$refs.FileInputNew.click()"> <span></span> <div class="position-relative">Upload image</div></a>
                                                    <input ref="FileInputNew" type="file" style="display: none;" @change="onFileSelect" />
                                                  </div>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group" v-if="dialog">
                                              <label class="label-padding post-rent--form-group--label mt-0">Image preview :</label>
                                              <div class=" post-rent--form-group--input">
                                                <div class="img-prev">
                                                  <VueCropper v-show="postCoverImage"
                                                              ref="cropper"
                                                              :src="postCoverImage"
                                                              :autoCropArea="0"
                                                              :scalable="false"
                                                              dragMode="move"
                                                              :cropBoxMovable="false"
                                                              :cropBoxResizable="false"
                                                              :ready="cropBoxSet"
                                                              alt="Disk image preview">

                                                  </VueCropper>
                                                </div>
                                                <div class="my-2 d-grid grid-cols-2 grid-gap-16 mr-2">
                                                  <a class="btn--secondery w-100" @click="saveImage(), (dialog = true)">Crop</a>
                                                  <a class="btn--secondery w-100" @click="dialog = false, (sellData.cover_image === '')">Cancel</a>
                                                </div>
                                                <div class="img-prev" v-if="sellData.cover_image">
                                                  <img :src="sellData.cover_image" alt="Cover image preview">
                                                </div>
                                              </div>
                                            </div>
                                            <div class="form-group post-rent--form-group">
                                                <label class=" label-padding post-rent--form-group--label mt-0">{{ $t('upload_screenshots', $store.state.locale) }} :</label>
                                                <UploadImages class="image-box" :max="4" @change="handleUploadScreenshots"/>
                                            </div>
                                            <!-- Agree terms and condition -->
                                            <div class="form-group post-rent--form-group post-rent--form-group--agree post-rent--form-group--agree-profile mt-a-7">
                                                <div class="checkbox-parents">
                                                    <ValidationProvider name="Terms & Conditions" rules="required" v-slot="{ errors }">
                                                        <input type="checkbox" id="terms-agree-sell-post" class="checkbox-parents--input" v-model="agreement" @change="onAgreement($event)">
                                                        <label for="terms-agree-sell-post" class="checkbox-parents--label">{{ $t('i_agree', $store.state.locale) }} <router-link to="/terms" target="_blank" class="text-secondery"><u>{{ $t('terms', $store.state.locale) }}</u></router-link></label>
                                                        <span v-if="errors.length" class="error-message d-block ml--28">{{ errors[0] }}</span>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                            <div class="form-group post-rent--form-group post-rent-btn">
                                                <button class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative w-100 border-0 post-rent--form-group--btn" :disabled="onSellPostLoading">
                                                    <div class="mr-2 position-relative">{{ $t('submit', $store.state.locale) }} <i v-if="onSellPostLoading" class="spinner-border spinner-border-sm"></i></div>
                                                    <span></span>
                                                </button>
                                            </div>

                                        </form>
                                    </ValidationObserver>
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
    import StarRating from 'vue-star-rating';
    import UploadImages from "vue-upload-drop-images";
    import { VueFeedbackReaction } from 'vue-feedback-reaction';
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';
    export default {
        components: {StarRating, VueFeedbackReaction, UploadImages, VueCropper},
        data() {
            return {
                editorConfig:{

                },
                withdrawAmount: 0,
                withdrawLoading: false,
                requestModalShow: false,
                isEditLoading: false,
                removeScreenshots: [],
                removeCover: '',
                previewImage : '',
                postCoverImage: '',
                postCoverImageName: '',
                selected: '',
                sellPostEditModalShow: false,
                summaryModal: false,
                onSellPostLoading: false,
                subCategories: [],
                postImages: [],
                editPostData: {
                    dialog: false,
                    id: '',
                    name: '',
                    description: '',
                    price: '',
                    product_type: '',
                    is_negotiable: '',
                    sub_category_id: '',
                    images: [],
                    phone_no: '',
                    email: '',
                    address: '',
                    postImages: [],
                    cover: '',
                    cover_image: '',
                    mime_type: '',
                    postCoverImage: ''
                },
                sellData: {
                    name: '',
                    description: '',
                    price: '',
                    product_type: '',
                    is_negotiable: '',
                    sub_category_id: '',
                    product_image: '',
                    phone_no: '',
                    address: '',
                    summary: '',
                    cover_image: ''
                },
                extend: {
                    week: '',
                    price: 0,
                    game: '',
                    lend_id: null,
                    orderNo: '',
                    commission: 0,
                    game_id: '',
                    disk_type: ''
                },
                extendModalShow: false,
                fromCart: false,
                lenderRatingCount: 0,
                renterRatingCount: 0,
                credentialModalShow: false,
                invalidRating: false,
                lendingAvg: 0,
                rentingAvg: 0,
                ratingData: {
                    value: null,
                    feedback: '',
                    comment: '',
                },
                reaction: '',
                isActive: false,
                isDisabled: false,
                imageModalShow: false,
                ratingPopupModal: false,
                diskImageRequired: false,
                userGameId: '',
                userPassword: '',
                lendDiskImage: '',
                lendCoverImage: '',
                editDiskImage: '',
                editCoverImage: '',
                userRentId: '',
                isDigital: false,
                itemsData: ['Male', 'Female', 'Others'],
                rents: [],
                orders: [],
                sellPosts: [],
                agreement: '',
                offerShow: true,
                rentShow: false,
                postShow: false,
                user: {},
                form: {
                    name: this.$store.state.user.name,
                    last_name: this.$store.state.user.last_name,
                    gender: this.$store.state.user.gender ?? '',
                    birth_date: this.$store.state.user.birth_date,
                    email: this.$store.state.user.email,
                    phone_number: this.$store.state.user.phone_number,
                    identification_number: this.$store.state.user.identification_number,
                    address: this.$store.state.user.address ? this.$store.state.user.address.address: '',
                    city: this.$store.state.user.address ? this.$store.state.user.address.city: '',
                    postCode: this.$store.state.user.address ? this.$store.state.user.address.post_code: '',
                    id_image: "",
                },
                nid_verification: 0,
                selectedFile: this.$t('select_nid', this.$store.state.locale),
                selectedDiskName: this.$t('disk_image', this.$store.state.locale),
                selectedCoverName: this.$t('cover_image', this.$store.state.locale),
                selectedEditCoverName: null,
                selectedEditDiskName: null,
                x: '',
                diskConditions: [],
                checkpoints: [],
                games: [],
                platforms: [],
                gamesName: {},
                platformsName: {},
                basePrices: false,
                gameTypePricing: 0,
                gameTypePricingState: false,
                diskConditionsName: {},
                gameName: '',
                gamePlatform: false,
                rentData: {
                    game: null,
                    // availability: '',
                    max_week: 1,
                    platform: null,
                    disk_condition: '',
                    disk_image: '',
                    cover_image: '',
                    checkpoint: {},
                    disk_type: '',
                    gameUserId: '',
                    gamePassword: '',
                },
                isRentLoading: false,
                image: null,
                isProfileImgUpdating: false,
                isCoverImgUpdating: false,
                isPhoneExists: false,
                isEmailExists: false,
                total_earn: 0,
                payable_amount: 0,
                transactions: [],
                coverImages: [],
                coverModal: false,
                coverUrl: '',
                activeCoverImage: '',
                dummyCover: false,
                walletTotalSpend: 0,
                walletUsableAmount: 0,
                walletHistory: [],
                copyUrl: '',
                ratingList: [],
                mime_type: '',
                dialog: false,
                croppedImage: '',
            }
        },
        watch: {
            credentialModalShow: {
                handler: function () {
                    this.rentCheck()
                }
            },
        },
        methods: {
            submitWithdraw() {
              this.withdrawLoading = true;
              if (this.withdrawAmount === ''){
                this.$toaster.error('Please enter an amount');
                this.withdrawLoading = false;
                return;
              }
              if (100 > this.withdrawAmount){
                this.$toaster.error('Amount should be more than 100');
                this.withdrawLoading = false;
                return;
              }
              if (this.withdrawAmount > 5000){
                this.$toaster.error('Amount should be less than 5000');
                this.withdrawLoading = false;
                return;
              }

              if (this.withdrawAmount > this.payable_amount){
                this.$toaster.error('Amount should be less than payable amount');
                this.withdrawLoading = false;
                return;
              }

              var config = {
                headers: {
                  'Authorization': 'Bearer ' + this.$store.state.token
                }
              };

              let data = {
                amount: this.withdrawAmount,
              };

              this.$api.post('withdraw-request', data, config).then(response => {
                if (response.data.error == false) {
                  this.requestModalShow = false;
                  this.withdrawLoading = false;
                  this.$toaster.success("Withdraw request sent successfully!!");
                  return;
                }
                this.$toaster.error("Withdraw request is not available!!");
              });
            },
            onLogout() {
              this.$store.dispatch('logout');
            },
            cropBoxSet(){
              let data = {
                width: 363,
                height: 270
              }
              this.$refs.cropper.setCropBoxData(data);
            },
            removeEditScreenshots(id){
              this.removeScreenshots.push(id);
              console.log(this.removeScreenshots)
            },
            onFileSelect(e) {
              const file = e.target.files[0]
              this.mime_type = file.type
              if (typeof FileReader === 'function') {
                this.dialog = true
                const reader = new FileReader()
                reader.onload = (event) => {
                  this.postCoverImage = event.target.result
                  this.$refs.cropper.replace(this.postCoverImage)
                }
                reader.readAsDataURL(file)
              } else {
                alert('Sorry, FileReader API not supported')
              }
            },
            saveImage() {
              this.sellData.cover_image = this.$refs.cropper.getCroppedCanvas().toDataURL()
              this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                const formData = new FormData()
                formData.append('profile_photo', blob, 'name.jpeg')
              }, this.mime_type)
            },
            onEditFileSelect(e) {
              const file = e.target.files[0]
              this.editPostData.mime_type = file.type
              if (typeof FileReader === 'function') {
                this.editPostData.dialog = true
                const reader = new FileReader()
                reader.onload = (event) => {
                  this.editPostData.postCoverImage = event.target.result
                  this.$refs.cropper.replace(this.editPostData.postCoverImage)
                }
                reader.readAsDataURL(file)
              } else {
                alert('Sorry, FileReader API not supported')
              }
            },
            saveEditImage() {
              this.editPostData.cover_image = this.$refs.cropper.getCroppedCanvas().toDataURL()
              this.$refs.cropper.getCroppedCanvas().toBlob((blob) => {
                const formData = new FormData()
                formData.append('profile_photo', blob, 'name.jpeg')
              }, this.editPostData.mime_type)
            },
            sellPostEditModal(product) {
                console.log(product);
                this.sellPostEditModalShow = true

                this.editPostData.id = product.id
                this.editPostData.name =  product.name
                this.editPostData.description = product.description
                this.editPostData.price = product.price
                this.editPostData.is_negotiable =  product.is_negotiable
                this.editPostData.images =  product.images
                this.editPostData.cover =  product.cover
                this.editPostData.phone_no =  product.phone_no
                this.editPostData.email =  product.email
                this.editPostData.address =  product.address
                this.selected = product.sub_category_id
                this.removeCover = ''
                this.removeScreenshots = []
            },
            handleUploadScreenshots(files) {
              if (files.length === 0) {
                  this.postImages = [];
                  console.log(this.postImages);
                  return;
              }
              if (this.postImages.length > files.length) {
                let val = '';
                this.postImages.forEach(function (image, index) {
                  files.forEach(function (file) {
                    if (image.name !== file.name) {
                      val = index
                      return
                    }
                  })
                })
                this.postImages.splice(val, 1);
                return
              }
              this.postImages = [];
              let screenshots = [];
              files.forEach( function (file) {
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                  let fileBase64 = reader.result;
                  let data = {
                    name: file.name,
                    file: fileBase64
                  }
                  screenshots.push(data);
                }
                reader.onerror = function (error) {
                  console.log('Error: ', error)
                }
              })
              this.postImages = screenshots;
              console.log(this.postImages);
            },
            handleEditScreenshots(files) {
                if (files.length === 0) {
                    this.editPostData.postImages = [];
                    return;
                }
                if (this.editPostData.postImages.length > files.length) {
                    var val = '';
                    this.editPostData.postImages.forEach(function (image, index) {
                        files.forEach(function (file) {
                            if (image.name != file.name){
                                val = index
                                return
                            }
                        })
                    })
                    this.editPostData.postImages.splice(val, 1);
                    return
                }
              this.editPostData.postImages = [];
              let screenshots = [];
              files.forEach( function (file) {
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = () => {
                  let fileBase64 = reader.result;
                  let data = {
                    name: file.name,
                    file: fileBase64
                  }
                  screenshots.push(data);
                }
                reader.onerror = function (error) {
                  console.log('Error: ', error)
                }
              })
              this.editPostData.postImages = screenshots;
            },
            extendModal(lend) {
                this.extend.week = '';
                this.extend.price = 0;
                this.extend.commission = 0;

                this.extendModalShow = true;
                this.extend.game = lend.rent.game.name;
                this.extend.game_id = lend.rent.game.id;
                this.extend.disk_type = lend.rent.disk_type;
                this.extend.orderNo = lend.order.order_no;
                this.extend.lend_id = lend.id;
            },
            rentCost(week, disk_type, game_id) {
                this.$api.get('base-price/game-calculation/' + game_id + '/' + week + '/' + disk_type).then(response => {
                    this.extend.price = response.data.price.discount_price;
                    this.extend.commission =  response.data.price.discount_commission;
                })
            },
            ratingSubmit () {
              this.invalidRating = false;
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                if (this.ratingData.rating === 0 && this.ratingData.comment === '') {
                  this.invalidRating = true;
                  return;
                }
                var config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };

                let data = {
                  id: this.ratingData.value.id,
                  rating: this.ratingData.feedback,
                  comment: this.ratingData.comment,
                };

                this.$api.post('user-rating', data, config).then(response => {
                  this.$toaster.success(response.data.message);
                  this.ratingCheck();
                  this.ratingPopupModal = false;
                  this.$root.$refs.Navbar.navRatingCheck();
                });
              })
            },
            setRatingData (data) {
                this.ratingPopupModal = true;
                this.ratingData.value = data;
            },
            onCopy: function () {
                this.$toaster.success( this.$t('link_copied_successfully', this.$store.state.locale) );
            },
            onError: function (e) {
                this.$toaster.success( this.$t('link_copied_failed', this.$store.state.locale) );
                console.log(e);
            },
            postStatusChange(event, id) {
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                var status = event.target.checked;
                let config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };
                let data = {
                  id: id,
                  status: status,
                };

                this.$api.post('post-status-update', data, config).then(response => {
                  if (response.data.error == false) {
                    this.coverModal = false;
                    this.$toaster.success(this.$t('rent_post_status', this.$store.state.locale));
                  } else {
                    this.$toaster.fail(response.data.message);
                  }

                });
              })
            },
            sellPostStatusChange(event, id) {
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                var status = event.target.checked;
                let config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };
                let data = {
                  id: id,
                  status: status,
                };

                this.$api.post('sold-status-update', data, config).then(response => {
                  if (response.data.error == false) {
                    this.coverModal = false;
                    this.$toaster.success(this.$t('rent_post_status', this.$store.state.locale));
                  } else {
                    this.$toaster.fail(response.data.message);
                  }

                });
              })
            },
            credentialModal(rent){
                this.userGameId = rent.game_user_id;
                this.userPassword = rent.game_password;
                this.userRentId = rent.id;

                this.credentialModalShow = true;
            },
            ImageModal(rent){
                this.lendDiskImage = rent.disk_image;
                this.lendCoverImage = rent.cover_image;
                this.editDiskImage = rent.disk_image;
                this.editCoverImage = rent.cover_image;
                this.userRentId = rent.id;

                console.log(this.lendCoverImage);

                this.imageModalShow = true;
            },
            coverImageSelect(userId){
              this.dummyCover = false;
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                if (this.coverUrl == '') {
                  return
                }
                this.activeCoverImage = this.coverUrl;
                let config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };
                let data = {
                  user_id: userId,
                  cover: this.coverUrl,
                };

                this.$api.post('user-cover-update', data, config).then(response => {
                  if (response.data.error == false) {
                    this.coverModal = false;
                    this.$toaster.success(this.$t('cover_updated', this.$store.state.locale));
                  } else {
                    this.$toaster.warning(response.data.message);
                  }

                });
              })
            },
            rentImageUpdate(rentId, disk, cover){
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }

                if (this.editDiskImage == disk) {
                  disk = null;
                }
                if (this.editCoverImage == cover) {
                  cover = null
                }
                this.imageModalShow = false;
                let config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };
                let data = {
                  cover_image: cover,
                  disk_image: disk,
                  id: rentId
                };
                this.$api.post('rent-image-update', data, config).then(response => {
                  if (response.data.error == false) {
                    this.$toaster.success(this.$t('rent_image_update', this.$store.state.locale));
                  } else {
                    this.$toaster.warning(this.$t('image_update_failed', this.$store.state.locale));
                  }

                });
              })
            },
            gameCredentialUpdate(rentId, userId, gamePassword){
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                let config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };
                let data = {
                  game_user_id: userId,
                  game_password: gamePassword,
                  rent_id: rentId
                };

                this.$api.post('game-credential-update', data, config).then(response => {
                  if (response.data.error == false) {
                    this.credentialModalShow = false;
                    this.$toaster.success(this.$t('credential_updated', this.$store.state.locale));
                  } else {
                    this.$toaster.fail(response.data.message);
                  }

                });
              })
            },
            onAgreement(event){
                this.agreement = '';
                if (event.target.checked == true){
                    this.agreement = 1
                }
            },
            basePriceSelect(value) {
                this.gameTypePricingState = true;
                this.gameTypePricing = 0;
                this.isDigital = false;
                this.diskImageRequired = true;


                if (value == 1) {
                    this.isDigital = true;
                    this.gameTypePricing = 20;
                    this.diskImageRequired = false;
                }
            },
            onOfferedGames() {
                this.offerShow = true
                this.rentShow = false
                this.postShow = false
            },
            onRentedGames() {
                this.rentShow = true
                this.offerShow = false
                this.postShow = false
            },
            onSellPost() {
                this.postShow = true
                this.offerShow = false
                this.rentShow = false
            },
            formattedDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
            formattedReturnDate(date) {
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let formattedDate = new Date(date)
                return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
            },
            onProfileUpdate: function() {
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                this.validateUserPhoneEmail();
              })
            },
            validateUserPhoneEmail: function() {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }

                this.$api.post('user-phone-email-validation', {email: this.form.email, phone: this.form.phone_number}, config).then(response => {
                    this.$store.commit('setIsProfileUpdateing', true);
                    if ( response.data.error) {
                        this.isEmailExists = response.data.isEmailExists;
                        this.isPhoneExists = response.data.isPhoneExists;
                        this.$store.commit('setIsProfileUpdateing', false);
                        return;
                    }
                    this.$store.dispatch('updateUserDetails', this.form);
                    this.$toaster.success(this.$t('profile_updated', this.$store.state.locale));
                    if (this.fromCart) {
                        this.fromCart = false;
                        this.$router.push('/cart');
                    } else {
                        setTimeout(function(){
                            // window.location.reload();
                            $('#v-pills-edit-profile-tab').removeClass('active');
                            $('#v-pills-edit-profile').removeClass('active');
                            $('#v-pills-edit-profile').removeClass('show');
                            $('#v-pills-overview-tab').addClass('active');
                            $('#v-pills-overview').addClass('active');
                            $('#v-pills-overview').addClass('show');
                        }, 1000);
                    }

                });
            },
            isNumberOnSell: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.sellData.phone_no.length > 10) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.editPostData.phone_no.length > 10) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            isNumberOnPostPrice: function(evt) {
              evt = (evt) ? evt : window.event;
              var charCode = (evt.which) ? evt.which : evt.keyCode;
              if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.sellData.price.length > 10) {
                evt.preventDefault();
              } else {
                return true;
              }
            },
            isNumberOnEditPrice: function(evt) {
              evt = (evt) ? evt : window.event;
              var charCode = (evt.which) ? evt.which : evt.keyCode;
              if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.editPostData.price.length > 10) {
                evt.preventDefault();
              } else {
                return true;
              }
            },
            isValidString: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if(!(charCode >= 65 && charCode <= 121) && (charCode != 32 && charCode != 0)){
                    event.preventDefault();
                }
            },
            onIdChange(event) {
                let fileReader = new FileReader();
                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) {
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSize =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSize > 5102) { //5mb
                        this.$toaster.warning(this.$t('image_size_validation', this.$store.state.locale));
                        return;
                    }
                    this.selectedFile = event.srcElement.files[0].name;
                    fileReader.onload = (e) => {
                        this.form.id_image = e.target.result;
                    }
                    fileReader.readAsDataURL(event.target.files[0]);
                }
            },
            onDiskImageChange (event) {
                let fileReader = new FileReader();

                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) {
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSize =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSize > 5120) { //5mb
                        this.$toaster.warning(this.$t('image_size_validation', this.$store.state.locale));
                        return;
                    }
                    this.selectedDiskName = event.srcElement.files[0].name;
                    fileReader.onload = (e) => {
                        this.rentData.disk_image = e.target.result;
                    }
                    fileReader.readAsDataURL(event.target.files[0]);
                }
            },
            onCoverImageChange (event) {
                let fileReader = new FileReader();
                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) {
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSize =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSize > 5120) { //5mb
                        this.$toaster.warning(this.$t('image_size_validation', this.$store.state.locale));
                        return;
                    }
                    this.selectedCoverName = event.srcElement.files[0].name;
                    fileReader.onload = (e) => {
                        this.rentData.cover_image = e.target.result;
                    }
                    fileReader.readAsDataURL(event.target.files[0]);
                }
            },
            onEditDiskImageChange (event) {
                let fileReader = new FileReader();

                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) {
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSize =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSize > 5120) { //5mb
                        this.$toaster.warning(this.$t('image_size_validation', this.$store.state.locale));
                        return;
                    }
                    this.selectedEditDiskName = event.srcElement.files[0].name;
                    fileReader.onload = (e) => {
                        this.lendDiskImage = e.target.result;
                        console.log(this.lendDiskImage);
                    }
                    fileReader.readAsDataURL(event.target.files[0]);
                }
            },
            onEditCoverImageChange (event) {
                let fileReader = new FileReader();
                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) {
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSize =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSize > 5120) { //5mb
                        this.$toaster.warning(this.$t('image_size_validation', this.$store.state.locale));
                        return;
                    }
                    this.selectedEditCoverName = event.srcElement.files[0].name;
                    fileReader.onload = (e) => {
                        this.lendCoverImage = e.target.result;
                        console.log(this.lendCoverImage);
                    }
                    fileReader.readAsDataURL(event.target.files[0]);
                }
            },
            onEmpty () {
                this.form.checkpoint = '';
            },
            onSellPostSubmit () {
              this.onSellPostLoading = true;
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                this.$refs.sellForm.validate().then(success => {
                  if (!success) {
                    window.scrollTo({
                      top: 400,
                      behavior: 'smooth',
                    })
                    this.$toaster.error(this.$t('complete_required_field', this.$store.state.locale));
                    this.onSellPostLoading = false;
                    return;
                  }
                  if (this.postImages.length ===  0){
                    this.$toaster.error('Screenshot images not uploaded');
                    this.onSellPostLoading = false;
                    return;
                  }
                  if (this.sellData.cover_image === ''){
                    this.$toaster.error('Cover image not uploaded');
                    this.onSellPostLoading = false;
                    return;
                  }
                  this.onSellPostLoading = true;
                  let uploadInfo = {
                    name: this.sellData.name,
                    description: this.sellData.description,
                    price: this.sellData.price,
                    product_type: this.sellData.product_type,
                    is_negotiable: this.sellData.is_negotiable,
                    sub_category_id: this.sellData.sub_category_id,
                    phone_no: this.sellData.phone_no,
                    address: this.sellData.address,
                    images: this.postImages,
                    condition_summary: this.sellData.summary,
                    cover_image: this.sellData.cover_image,
                  }
                  let config = {
                    headers: {
                      'Authorization': 'Bearer ' + this.$store.state.token
                    }
                  }
                  this.$api.post('sell-post', uploadInfo, config)
                      .then(response => {
                        if (response.status == 200) {
                          this.dialog = false
                          this.sellData.name = '';
                          this.sellData.description = '';
                          this.sellData.price = '';
                          this.sellData.product_type = '';
                          this.sellData.is_negotiable = '';
                          this.sellData.sub_category_id = '';
                          this.sellData.summary = '';
                          this.sellData.phone_no = '';
                          this.sellData.address = '';
                          document.querySelector(".clearButton").click();
                          this.postImages = [];
                          this.sellData.cover_image = '',

                              this.$toaster.success(this.$t('post_submitted', this.$store.state.locale));

                          $('#v-pills-sell-post-tab').removeClass('active');
                          $('#v-pills-sell-post').removeClass('active');
                          $('#v-pills-sell-post').removeClass('show');
                          $('#v-pills-dashboard-tab').addClass('active');
                          $('#v-pills-dashboard').addClass('active');
                          $('#v-pills-dashboard').addClass('show');
                          this.sellPostCheck()
                          this.onSellPost();
                          this.onSellPostLoading = false;
                        }
                      }).catch(err => {
                    console.log(err)
                  });
                })
              })
            },
            sellPostUpdate(){
              this.isEditLoading = true;
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                this.user = response.data.data;
                if (this.user.status == 0) {
                  this.onLogout();
                  return;
                }
                if (this.removeCover != '' && this.editPostData.cover_image === '') {
                  this.$toaster.error(this.$t('upload_cover_notification', this.$store.state.locale));
                  this.isEditLoading = false;
                  return;
                }
                if (this.editPostData.images.length === this.removeScreenshots.length && this.editPostData.postImages.length === 0) {
                  this.$toaster.error(this.$t('upload_screenshots_notification', this.$store.state.locale));
                  this.isEditLoading = false;
                  return;
                }
                let config = {
                  headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                  }
                };
                let data = {
                  id: this.editPostData.id,
                  name: this.editPostData.name,
                  description: this.editPostData.description,
                  price: this.editPostData.price,
                  sub_category_id: this.selected,
                  is_negotiable: this.editPostData.is_negotiable,
                  phone_no: this.editPostData.phone_no,
                  email: this.editPostData.email,
                  address: this.editPostData.address,
                  images: this.editPostData.postImages,
                  cover_image: this.editPostData.cover_image,
                  removeCover: this.removeCover,
                  removeScreenshots: this.removeScreenshots

                };

                this.$api.post('sell-post-update', data, config).then(response => {
                  if (response.data.error == false) {
                    this.isEditLoading = false;
                    this.sellPostEditModalShow = false;
                    this.editPostData.postImages = [];
                    this.editPostData.cover_image = '';
                    this.editPostData.dialog = false;
                    this.editPostData.images = [];
                    this.removeCover = '';
                    this.$toaster.success(this.$t('info_update_notification', this.$store.state.locale));
                    this.sellPostCheck()
                    this.onSellPost()
                  } else {
                    this.$toaster.fail(response.data.message);
                  }
                })
              })
            },
            onRentSubmit () {
              this.$api.get('user/details/' + this.$store.state.user.id ).then(response => {
                if (typeof response.data == 'string') {
                  this.onLogout();
                  return;
                }
                if (response.data.data.status == 0) {
                  this.onLogout();
                  return;
                }
                this.$refs.form.validate().then(success => {
                  if (!success) {
                    window.scrollTo({
                      top: 400,
                      behavior: 'smooth',
                    })
                    this.$toaster.error(this.$t('complete_required_field', this.$store.state.locale));
                    return;
                  }
                  if (this.rentData.game == '' || this.rentData.game == null) {
                    this.$toaster.warning(this.$t('games_required_field', this.$store.state.locale));
                    this.isRentLoading = false;
                    return;
                  }
                  this.isRentLoading = true;
                  let uploadInfo = {
                    game_id: this.rentData.game.id,
                    // availability: this.rentData.availability,
                    max_week: this.rentData.max_week,
                    platform_id: this.rentData.platform.id,
                    disk_condition_id: this.rentData.disk_condition.id,
                    disk_image: this.rentData.disk_image,
                    cover_image: this.rentData.cover_image,
                    checkpoint_id: this.rentData.checkpoint.id,
                    disk_type: this.rentData.disk_type,
                    game_user_id: this.rentData.gameUserId,
                    game_password: this.rentData.gamePassword,
                  }
                  let config = {
                    headers: {
                      'Authorization': 'Bearer ' + this.$store.state.token
                    }
                  }

                  this.$api.post('rents', uploadInfo, config)
                      .then(response => {
                        console.log(response)
                        this.$toaster.success(this.$t('post_submitted', this.$store.state.locale));
                        setTimeout(function () {
                          // this.rentData.game = '';
                          // this.rentData.max_week = 1;
                          // this.rentData.platform = null;
                          // this.rentData.disk_condition = '';
                          // this.rentData.disk_image = '';
                          // this.rentData.cover_image = '';
                          // this.rentData.checkpoint = {};
                          // this.rentData.disk_type = '';
                          // this.rentData.gameUserId = '';
                          // this.rentData.gamePassword = '';
                          // this.activeRentOffers();

                          window.location.reload();
                          // $('#v-pills-post-rent-tab').removeClass('active');
                          // $('#v-pills-post-rent').removeClass('active');
                          // $('#v-pills-post-rent').removeClass('show');
                          // $('#v-pills-dashboard-tab').addClass('active');
                          // $('#v-pills-dashboard').addClass('active');
                          // $('#v-pills-dashboard').addClass('show');
                        }, 2000);
                      });
                })
              })
            },
            clickHandler(item) {
              // event fired when clicking on the input
              console.log(item)
            },
            onSelected(item) {
              this.rentData.game = item.item;
              this.gamePlatform = true;
                this.$api.get('base-price/calculate/' + this.rentData.game.id).then (response =>
                {
                    this.basePrices = response.data;
                })
            },
            onInputChange(text) {
              // event fired when the input changes
              console.log(text)
            },
            getSuggestionValue(suggestion) {
              return suggestion.item.name;
            },
            focusMe(e) {
              console.log(e) // FocusEvent
            },
            todayDate(daysToAdd = 0) {
              var today = new Date();
              if (daysToAdd > 0) {
                   today.setDate(today.getDate() + daysToAdd);
              }
              var dd =  today.getDate();
              var mm = today.getMonth()+1;
              var yyyy = today.getFullYear();
              if (dd < 10) { dd='0'+dd; }
              if (mm < 10) { mm='0'+mm; }
              return yyyy + '-' + mm + '-' + dd;
            },
            adjustRentedWeek: function(adjustmentType) {
                if (adjustmentType == 'increase' && parseInt(this.rentData.max_week) < 10) {
                    this.rentData.max_week = parseInt(this.rentData.max_week) + 1;
                    return;
                }

                if (adjustmentType == 'decrease' && this.rentData.max_week > 1) {
                    this.rentData.max_week = parseInt(this.rentData.max_week) - 1;
                    return;
                }
            },
            onProfileImageChange: function(event, imageType) {
                let fileReader = new FileReader();
                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) {
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSize =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSize > 5120) { //5mb
                        this.$toaster.warning(this.$t('image_size_validation', this.$store.state.locale));
                        return;
                    }
                    fileReader.onload = (e) => {
                        this.image = e.target.result;
                        this.uploadProfileImage(e.target.result, imageType);
                    }
                    fileReader.readAsDataURL(event.target.files[0]);
                }
            },
            uploadProfileImage: function(imageBase64, type) {
                if (type == 'cover') {
                    this.isCoverImgUpdating = true;
                } else {
                    this.isProfileImgUpdating = true;
                }

                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
                this.$api.post('update-user-profile-image', {image: imageBase64, image_type: type}, config).then(response => {
                    if (response.data.error  == false) {
                        this.$store.commit('setUser', response.data.user);
                        this.$store.commit('setUserId', response.data.user.id);
                        localStorage.setItem('userId', JSON.stringify(response.data.user.id))
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        this.$toaster.success(response.data.message);
                    } else {
                        this.$toaster.warning(response.data.message);
                    }

                    this.isProfileImgUpdating = false;
                    this.isCoverImgUpdating = false;
                })

            },
            onPhoneFocus: function() {
                this.isPhoneExists = false;
            },
            onEmailFocus: function() {
                this.isEmailExists = false;
            },
            rentCheck: function() {

                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                this.$api.get('rents?include=game,platform,diskCondition,checkpoint,renter,lend', config).then(response =>
                {
                    this.rents = response.data.data;
                });
            },
            orderCheck() {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };
                this.$api.get('orders?include=lenders', config).then(response => {
                    this.orders = response.data.data;
                });
            },
            sellPostCheck() {
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };
                this.$api.get('my-sell-posts?include=subcategory', config).then(response => {
                    this.sellPosts = response.data.data;
                });
            },
            ratingCheck() {
                this.ratingList = [];
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                };

                this.$api.get('rating-check?include=lend.rent.game,lend.order,lender,renter', config).then(response => {
                    this.ratingList = response.data.data;
                });

                this.$api.get('avg-renter-rating', config).then(response => {
                    this.rentingAvg = response.data.avg;
                });
                this.$api.get('avg-lender-rating', config).then(response => {
                    this.lendingAvg = response.data.avg;
                });
                this.$api.get('total-renter-rating', config).then(response =>
                {
                    this.renterRatingCount = response.data.total;
                });
                this.$api.get('total-lending-rating', config).then(response =>
                {
                    this.lenderRatingCount = response.data.total;
                });
            },
            rentPostTab() {
                $('#v-pills-overview-tab').removeClass('active');
                $('#v-pills-overview').removeClass('active');
                $('#v-pills-overview').removeClass('show');
                $('#v-pills-post-rent-tab').addClass('active');
                $('#v-pills-post-rent').addClass('show');
                $('#v-pills-post-rent').addClass('active');
                $('#v-pills-edit-profile-tab').removeClass('active');
                $('#v-pills-edit-profile').removeClass('active');
                $('#v-pills-edit-profile').removeClass('show');
                $('#v-pills-dashboard-tab').removeClass('active');
                $('#v-pills-dashboard').removeClass('active');
                $('#v-pills-dashboard').removeClass('show');
                $('#v-pills-my-earning-tab').removeClass('active');
                $('#v-pills-my-earning').removeClass('active');
                $('#v-pills-my-earning').removeClass('show');
                $('#v-pills-refer-tab').removeClass('active');
                $('#v-pills-refer').removeClass('active');
                $('#v-pills-refer').removeClass('show');
                $('#v-pills-rating-tab').removeClass('active');
                $('#v-pills-rating').removeClass('active');
                $('#v-pills-rating').removeClass('show');
            },
            editProfileTab () {
                $('#v-pills-edit-profile-tab').addClass('active');
                $('#v-pills-edit-profile').addClass('active');
                $('#v-pills-edit-profile').addClass('show');
                $('#v-pills-overview-tab').removeClass('active');
                $('#v-pills-overview').removeClass('active');
                $('#v-pills-overview').removeClass('show');
                $('#v-pills-post-rent-tab').removeClass('active');
                $('#v-pills-post-rent').removeClass('show');
                $('#v-pills-post-rent').removeClass('active');
                $('#v-pills-dashboard-tab').removeClass('active');
                $('#v-pills-dashboard').removeClass('active');
                $('#v-pills-dashboard').removeClass('show');
                $('#v-pills-my-earning-tab').removeClass('active');
                $('#v-pills-my-earning').removeClass('show');
                $('#v-pills-my-earning').removeClass('show');
                $('#v-pills-refer-tab').removeClass('active');
                $('#v-pills-refer').removeClass('active');
                $('#v-pills-refer').removeClass('show');
                $('#v-pills-rating-tab').removeClass('active');
                $('#v-pills-rating').removeClass('active');
                $('#v-pills-rating').removeClass('show');
            }
        },
        created() {
            window.scrollTo(0,0);
            let config = {
              headers: {
                'Authorization': 'Bearer ' + this.$store.state.token
              }
            };
            this.copyUrl = process.env.VUE_APP_BASE;
            this.orderCheck();
            this.sellPostCheck();
            this.ratingCheck();
            this.rentCheck();
            this.$root.$on('ratingNavCheck', () => {
                this.ratingCheck();
            });
            this.$root.$on('rentGames', () => {
              this.onRentedGames();
            });
            this.$root.$on('sellPostDashboard', () => {
              this.onSellPost();
            });
            this.$root.$on('rentPost', () => {
              this.rentPostTab();
            });
            this.$root.$on('profileEdit', () => {
                this.editProfileTab();
                this.fromCart = true;
              });
            this.$root.$on('userRating', () => {
                $('#v-pills-rating-tab').addClass('active');
                $('#v-pills-rating').addClass('active');
                $('#v-pills-rating').addClass('show');
                $('#v-pills-edit-profile-tab').removeClass('active');
                $('#v-pills-edit-profile').removeClass('active');
                $('#v-pills-edit-profile').removeClass('show');
                $('#v-pills-overview-tab').removeClass('active');
                $('#v-pills-overview').removeClass('active');
                $('#v-pills-overview').removeClass('show');
                $('#v-pills-post-rent-tab').removeClass('active');
                $('#v-pills-post-rent').removeClass('show');
                $('#v-pills-post-rent').removeClass('active');
                $('#v-pills-dashboard-tab').removeClass('active');
                $('#v-pills-dashboard').removeClass('active');
                $('#v-pills-dashboard').removeClass('show');
                $('#v-pills-my-earning-tab').removeClass('active');
                $('#v-pills-my-earning').removeClass('show');
                $('#v-pills-my-earning').removeClass('show');
                $('#v-pills-refer-tab').removeClass('active');
                $('#v-pills-refer').removeClass('active');
                $('#v-pills-refer').removeClass('show');

            });
            this.$api.get('cover-image').then(response => {
                this.coverImages = response.data.data;
            });
            this.$api.get('games/released-games?include=platforms').then(response =>{
                this.games = response.data.data
            });
            this.$api.get('platforms').then (response =>{
                this.platforms = response.data.data
            });
            this.$api.get('disk-conditions').then (response =>{
                this.diskConditions = response.data.data
            });
            this.$api.get('checkpoints?include=area').then (response =>{
                this.checkpoints = response.data.data
            });
            this.$api.get('sub-categories').then (response =>{
                this.subCategories = response.data.data
            });
            this.$api.get('transaction-details', config).then (response => {
                this.total_earn = response.data.transactions_details.total_earning;
                this.payable_amount = response.data.transactions_details.due;
            });
            this.$api.get('payment-history', config).then (response => {
                this.transactions = response.data.data;
            });
            this.$api.get('user/details/' + this.$store.state.user.id ).then(response =>{
                this.user = response.data.data;
                this.nid_verification = this.user.id_verified;
                this.activeCoverImage = this.user.cover;
                if (!this.activeCoverImage.length){
                    this.dummyCover = true;
                }
            });
            this.$api.get('referral-history', config).then(response => {
                this.walletTotalSpend = response.data.referred_history.total_spend;
                this.walletUsableAmount = response.data.referred_history.usable_amount;
                this.walletHistory = response.data.referred_history.history;
            });
            this.$store.watch(() => {
                    return this.$store.state.user // could also put a Getter here
                },
                (newValue)=>{
                    this.user = newValue;
                },
                //Optional Deep if you need it
                { deep:true }
            );
        },
        computed: {
          filteredOptions() {
            return [
              {
                data: this.games.filter(option => {
                  return option.name.toLowerCase().indexOf(this.gameName.toLowerCase()) > -1;
                })
              }
            ];
          }
        },
    }
</script>
<style>
.demo {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.image-box {
    width: 70% !important;
}

input {
  width: 100%;
  padding: 0.5rem;
}

ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
li:hover {
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 280px;
}

#autosuggest { width: 100%; display: block;}

</style>
