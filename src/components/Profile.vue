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
                                                    <img :src="item.url" class="img-fluid">
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
                    <!-- avatar icon -->
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
<!--           <h6>sabertooth_wolf</h6>-->
                    </div>
<!--                    <div class="user-rating">-->
<!--                        <i class="fas fa-star"></i>-->
<!--                        <i class="fas fa-star"></i>-->
<!--                        <i class="fas fa-star"></i>-->
<!--                        <i class="fas fa-star-half-alt"></i>-->
<!--                        <i class="far fa-star"></i>-->
<!--                    </div>-->
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

                            <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
                                <div class="dashboard-content">
                                    <div class="d-flex justify-content-center dashboard-tab-button mb-5">
                                        <button  @click.prevent="onRentedGames()" :disabled="!show" :class="{active: !show}"><img class="active-black" src="../assets/img/rent-icon.png" alt="rent icon"> <img class="active-yellow" src="../assets/img/rent-icon-black.png" alt="rent icon"> {{ $t('rented_games', $store.state.locale) }}</button>
                                        <button  @click.prevent="onOfferedGames()" :disabled="show" :class="{active: show}"><img class="active-yellow" src="../assets/img/offer-icon.png" alt="offer icon"> <img class="active-black" src="../assets/img/offer-icon-black.png" alt="offer icon">  {{ $t('offered_games', $store.state.locale) }}</button>
                                    </div>
                                <!-- Offer -->
                                    <div class="dashboard-content--rented" v-if="rents.length && show">
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
                                            <div class="d-flex">
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
                                                <div class="right flex-1">
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
                                                        <div class="action" v-if="rent.disk_type != 1">
                                                            <a href="#" class="btn--secondery h-40 w-80 ml-2" @click.prevent="credentialModal(rent)"><span>Edit</span></a>
                                                        </div>
                                                    <div v-if="rent.status == 0">
                                                        <div class="action" v-if="rent.disk_type != 0">
                                                            <a href="#" class="btn--secondery h-40 w-80 ml-2" @click.prevent="ImageModal(rent)"><span>Edit</span></a>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <router-link :to="{ path: '/' + rent.id + '/' + rent.game.data.slug}" class="trending-image">
                                                                <a href="">Details</a>
                                                        </router-link>
                                                    </div>
                                                    <div class="refer-friend--link--input-group--append"
                                                         v-clipboard:copy="copyUrl + rent.id + '/' + rent.game.data.slug "
                                                         v-clipboard:success="onCopy"
                                                         v-clipboard:error="onError">
                                                        <span>share link</span>
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
<!--                                                                                <button type="submit" href="javascript:void(0)" class="btn&#45;&#45;secondery" @click.prevent="handleSubmit(gameCredentialUpdate(rent.id, rent.game_user_id, rent.game_password))">Submit</button>-->
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
                                    <div v-else-if="lends.length && !show">
                                        <div class="dashboard-content--rented">
                                            <!-- new rented design -->
                                            <div class="d-flex flex-wrap" v-if="lends">
                                                <div class="dashboard-content--rented--box position-relative bg-game-details border-2 warning-border" v-for="(lend, index) in lends" :key="index">
                                                    <!-- disk type -->
                                                    <div class="dashboard-content--rented--box--disk-type position-absolute top--1 right--1 bg-secondery p-2 gil-bold">
                                                        <div class="disk-type text-black" v-if="lend.rent.disk_type == 1">Physical Copy</div>
                                                        <div class="disk-type text-black" v-if="lend.rent.disk_type == 0">Digital Copy</div>
                                                    </div>
                                                    <div class="dashboard-content--rented--box--order-id h-30">
                                                        <p v-if="lend.order">{{ lend.order.order_no }}</p>
                                                        <p v-else>N/A</p>
                                                    </div>
                                                    <div class="dashboard-content--rented--box--order-name">
                                                        <p v-if="lend.rent" class="f-s-20 gil-bold mb-a-3 h-60">{{ lend.rent.game.name }}</p>
                                                    </div>
                                                    <div class="d-flex justify-content-between dashboard-content--rented--box--order-description">
                                                            <div class="cost flex-2">
                                                                <p>{{ $t('cost', $store.state.locale) }}</p>
                                                                <p class="text-secondery">{{ lend.lend_cost + parseInt(lend.commission)  }}</p>
                                                            </div>
                                                            <div class="duration flex-1">
                                                                <p>{{ $t('rent_duration', $store.state.locale) }}</p>
                                                                <div class="d-flex flex-column align-items-center duration--date text-secondery w-fit">
                                                                    <p class="mb-1">{{ formattedDate(lend.lend_date) }} </p>
                                                                    <p class="mb-1">to</p>
                                                                    <p class="mb-1" v-if="lend.status === 1 || lend.status === 3 && lend.end_date">{{ formattedReturnDate(lend.end_date) }}</p>
                                                                    <p class="mb-1" v-else>-</p>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div class="mt-a-6 d-flex justify-content-between">
                                                            <div class="timer flex-2">
                                                                <p class="mb-1">{{ $t('remaining_time', $store.state.locale) }}</p>
                                                                <div v-if="lend.rent.disk_type == 1">
                                                                    <flip-countdown :deadline="endDate(lend.rent.disk_type, lend.updated_at, lend.lend_week)" v-if="lend.status === 3"></flip-countdown>
                                                                    <flip-countdown :deadline="formattedDateForTimer(lend.created_at)" v-else></flip-countdown>
                                                                </div>
                                                                <div v-if="lend.rent.disk_type == 0">
                                                                    <flip-countdown :deadline="endDate(lend.rent.disk_type, lend.updated_at, lend.lend_week)" v-if="lend.status === 3"></flip-countdown>
                                                                    <flip-countdown :deadline="formattedDateForTimer(lend.created_at)" v-else></flip-countdown>
<!--                                                                    <flip-countdown :deadline="endDate(lend.rent.disk_type,lend.created_at, lend.lend_week)" v-else></flip-countdown>-->
                                                                </div>
                                                            </div>
                                                            <div class="status flex-1">
                                                                <p class="mb-1">{{ $t('status', $store.state.locale) }}</p>
                                                                <div v-if="lend.status === 0">
                                                                    <span class="pending br-0 f-s-16" >Pending</span>
                                                                </div>
                                                                <div v-else-if="lend.status === 1">
                                                                    <span class="completed br-0 f-s-16" >Completed</span>
                                                                </div>
                                                                <div v-else-if="lend.status === 2">
                                                                    <span class="completed br-0  f-s-16" >Arrived at checkpoint</span>
                                                                </div>
                                                                <div v-else-if="lend.status === 3">
                                                                    <span class="completed br-0 f-s-16" >Delivered</span>
                                                                </div>
                                                                <div v-else-if="lend.status === 4">
                                                                    <span class="rejected br-0  f-s-16" >Rejected</span>
                                                                </div>
                                                                <div v-else-if="lend.status === 5">
                                                                    <span class="completed br-0 f-s-16" >Processing</span>
                                                                </div>
                                                                <div v-else-if="lend.status === 6">
                                                                    <span class="completed br-0 f-s-16" >Postponed</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-center text-secondery mt-3 rented-note">{{ $t('delivery_charge_notice', $store.state.locale) }}</p>
                                    </div>
                                    <!-- Norhing to show -->
                                    <div class="no-post-found-card mb-0" v-else>
                                        <h5>{{ $t('noting_to_show', $store.state.locale) }} !</h5>
                                    </div>
                                </div>
<!--                            </div>-->
                            </div>
                                <!-- Post for Rent -->
                            <div class="tab-pane fade" id="v-pills-post-rent" role="tabpanel" aria-labelledby="v-pills-post-rent-tab">
                                <div class="post-rent">
                                    <ValidationObserver ref="form">
                                        <form @submit.prevent="onRentSubmit" method="post" id="rentPostForm">
                                            <!-- form-group -->
                                             <div class="form-group post-rent--form-group">
                                                <label class=" post-rent--form-group--label"></label>
                                                <div class=" post-rent--form-group--input">
                                                    <router-link  class="secondery-border text-secondery d-flex align-items-center justify-content-center h-48 game-rent-bg" to="/lend-notice" target="_blank">{{ $t('learn_about_create_post', $store.state.locale) }}</router-link>
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
                                                    

<!--                                                    <div class=" custom-radio d-flex">-->
<!--                                                        <input type="radio" v-model="x" value="1" name="checkpoint_id" id="checkpoint_true" class="custom-control-input">-->
<!--                                                        <label for="checkpoint_true" class="custom-control-label"> Checkpoint <span class="checkbox-style"></span></label>-->
<!--                                                    </div>-->
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
                                                        <input type="file" class="custom-file-input" id="diskUpload"  accept="image/*" @change="onDiskimageChange($event)|| validate($event)">
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
                                                        <input type="file" class="custom-file-input" id="customFile2" accept="image/*" @change="onCoverimageChange($event)|| validate($event)">
                                                        <label class="custom-file-label text-light" for="customFile2">{{ selectedCoverName }}</label>
<!--                                                        <label class="custom-file-label text-light" for="customFile2">{{ $t('cover_image', $store.state.locale) }}</label>-->
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
                                                <button class="btn--secondery w-100 border-0 post-rent--form-group--btn" :disabled="isRentLoading">
                                                    <span class="mr-2">{{ $t('submit', $store.state.locale) }} <i v-if="isRentLoading" class="spinner-border spinner-border-sm"></i></span>
                                                </button>
                                            </div>

                                        </form>
                                    </ValidationObserver>
                                </div>
                            </div>

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
                                                    <button class="btn--secondery w-100 border-0" :disabled="$store.state.isProfileUpdating">
                                                        <span class="mr-2">{{ $t('update_profile', $store.state.locale) }} <i v-if="$store.state.isProfileUpdating" class="spinner-border spinner-border-sm text-dark"></i>  </span>
                                                    </button>
                                                </div>
                                            </div>

                                        </form>
                                    </ValidationObserver>
                                </div>
                            </div>

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
                                        </div>
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
                                                    <tr v-for="item in transactions">
                                                        <td>{{ item.transaction_id }}</td>
                                                        <td>{{ item.create }}</td>
                                                        <td>{{ Math.ceil(item.amount) }} Taka</td>
                                                        <td>{{ item.payment_type }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <span class="text-center d-block mt-a-18" v-else>{{ $t('no_trans_found', $store.state.locale) }}</span>
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
                                        <router-link to="/games" class="btn--secondery mr-3"><span style="text-transform: uppercase">{{ $t('rent_games', $store.state.locale) }}</span></router-link>
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
                                                    <tr v-for="item in walletHistory">
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


                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import FlipCountdown from 'vue2-flip-countdown';
    export default {
        components: { FlipCountdown, Clipboard},
        props: ['rentPost', 'profileEdit'],
        data() {
            return {
                credentialModalShow: false,
                imageModalShow: false,
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
                lends: [],
                agreement: '',
                show: true,
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
            onCopy: function (e) {
                // this.$toaster.success("Link successfully copied !");
                this.$toaster.success( this.$t('link_copied_successfully', this.$store.state.locale) );
            },
            onError: function (e) {
                this.$toaster.success( this.$t('link_copied_failed', this.$store.state.locale) );
                console.log(e);
            },
            postStatusChange(event, id) {
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
                    }else {
                        this.$toaster.fail(response.data.message);
                    }

                });
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
                        this.$toaster.success( this.$t('cover_updated', this.$store.state.locale) );
                    } else {
                        this.$toaster.warning(response.data.message);
                    }

                });
            },
            rentImageUpdate(rentId, disk, cover){
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
                console.log(data);
                this.$api.post('rent-image-update', data, config).then(response => {
                    if (response.data.error == false) {
                        this.$toaster.success(this.$t('rent_image_update', this.$store.state.locale));
                    }else {
                        this.$toaster.warning(this.$t('image_update_failed', this.$store.state.locale));
                    }

                });
            },
            gameCredentialUpdate(rentId, userId, gamePassword){

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
                    }else {
                        this.$toaster.fail(response.data.message);
                    }

                });
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
            onDelete(rent) {
                this.$swal({
                    title: this.$t('post_deleted', this.$store.state.locale),
                    text: this.$t('delete_confirm', this.$store.state.locale),
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        let config = {
                            headers: {
                                'Authorization': 'Bearer ' + this.$store.state.token
                            }
                        }
                        this.$api.delete('rents/' + rent.id, config)
                            .then(response => {
                                if (response.data) {
                                    this.rents.splice(this.rents.indexOf(rent), 1)
                                }
                                this.$swal({
                                    title: this.$t('post_deleted_successful', this.$store.state.locale),
                                    text: this.$t('post_deleted_successful_msg', this.$store.state.locale),
                                    timer: 1500
                                })

                            })
                    } else {
                        this.$swal(this.$t('information_safe', this.$store.state.locale));
                    }
                });

            },
            extend () {
                this.$swal({
                    title: this.$t('please_contact', this.$store.state.locale),
                    text: this.$t('contact_details', this.$store.state.locale),
                    icon: "warning",
                }).then(() => {
                        this.$swal({
                            text: this.$t('thank_you', this.$store.state.locale),
                            icon: 'success',
                            timer: 1500,
                            button: false,
                        });

                });

            },
            onOfferedGames() {
                this.show = true
            },
            onRentedGames() {
                this.show = false
            },
            formattedDateForTimer(date) {
                let formattedDate = new Date(date)
                return formattedDate.getMonth()+1 + "/" + formattedDate.getDate() + "/" + formattedDate.getFullYear()
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
            startDate(diskType, datetime) {
                let date = new Date(datetime);
                var time = new Date(datetime);

                var hours = time.getHours();

                if (diskType == 0 && hours >= 12) {

                    date.setDate(date.getDate() + 2);
                } else {

                    date.setDate(date.getDate() + 1);
                }

                const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
            },
            endDate(diskType, datetime, week) {
                let date = new Date(datetime);
                var time = new Date(datetime);

                if (diskType == 0) {

                    date.setDate(date.getDate() + 1 + week * 7);

                } else {

                    date.setDate(date.getDate() + 1 + week * 7);
                }

                return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear()
            },
            returnDate(diskType, datetime, week) {
                let date = new Date(datetime);

                date.setDate(date.getDate() + 1 + week * 7);

                const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
            },
            onProfileUpdate: function() {
                this.validateUserPhoneEmail();
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
                    setTimeout(function(){
                        // window.location.reload();
                        $('#v-pills-edit-profile-tab').removeClass('active');
                        $('#v-pills-edit-profile').removeClass('active');
                        $('#v-pills-edit-profile').removeClass('show');
                        $('#v-pills-overview-tab').addClass('active');
                        $('#v-pills-overview').addClass('active');
                        $('#v-pills-overview').addClass('show');
                    }, 1000);
                });
            },
            isNumber: function(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.form.phone_number.length > 10) {
                    evt.preventDefault();;
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
                    let fileSzie =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSzie > 5102) { //5mb
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
            //rent post
            onDiskimageChange (event) {
                let fileReader = new FileReader();

                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) { 
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSzie =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSzie > 5120) { //5mb
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
            onCoverimageChange (event) {
                let fileReader = new FileReader();
                if (event.srcElement.files.length > 0) {
                    let allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
                    if (allowedTypes.indexOf(event.srcElement.files[0].type) == -1) { 
                        this.$toaster.warning(this.$t('image_validation', this.$store.state.locale));
                        return;
                    }
                    let fileSzie =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSzie > 5120) { //5mb
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
                    let fileSzie =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSzie > 5120) { //5mb
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
                    let fileSzie =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSzie > 5120) { //5mb
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
            onRentSubmit () {
                this.$refs.form.validate().then(success => {
                        if (!success) {
                            window.scrollTo({
                                top: 400,
                                behavior: 'smooth',
                            })
                            this.$toaster.error(this.$t('complete_required_field', this.$store.state.locale));
                            return;
                        }
                if ( this.rentData.game == '' || this.rentData.game == null) {
                    this.$toaster.warning(this.$t('games_required_field', this.$store.state.locale));
                    this.isRentLoading = false;
                    return;
                }
                this.isRentLoading = true;
                let  uploadInfo = {
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
                        this.$toaster.success(this.$t('post_submitted', this.$store.state.locale));
                        setTimeout(function () {
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
            },
            clickHandler(item) {
              // event fired when clicking on the input
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
              // console.log(text)
            },
            /**
             * This is what the <input/> value is set to when you are selecting a suggestion.
             */
            getSuggestionValue(suggestion) {
              return suggestion.item.name;
            },
            focusMe(e) {
              // console.log(e) // FocusEvent
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
                    let fileSzie =  Math.round((event.srcElement.files[0].size / 1024));
                    if (fileSzie > 5120) { //5mb
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
                    console.log(this.rents);
                });

                this.$api.get('lends', config).then(response =>
                {
                    this.lends = response.data;
                });
            }
        },
        created() {
            this.copyUrl = process.env.VUE_APP_BASE;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            window.scrollTo(0,0);
            this.rentCheck();
            this.$root.$on('rentPost', () => {
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

              });

            this.$root.$on('profileEdit', () => {
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

              });
            //Cover image
            this.$api.get('cover-image').then(response =>
            {
                this.coverImages = response.data.data;
            });
            //rent posts
            this.$api.get('games/released-games?include=platforms').then(response =>
            {
                this.games = response.data.data
            });

            this.$api.get('platforms').then (response =>
            {
                this.platforms = response.data.data
            });

            this.$api.get('disk-conditions').then (response =>
            {
                this.diskConditions = response.data.data
            });

            this.$api.get('checkpoints?include=area').then (response =>
            {
                this.checkpoints = response.data.data
            });

            //transaction details

            this.$api.get('transaction-details', config).then (response =>
            {
                this.total_earn = response.data.transactions_details.total_earning;
                this.payable_amount = response.data.transactions_details.due;
            });

            this.$api.get('payment-history', config).then (response =>
            {
                this.transactions = response.data.data;
            });
            this.$api.get('user/details', config).then(response =>{
                this.user = response.data.data;
                this.nid_verification = this.user.id_verified;
                this.activeCoverImage = this.user.cover;
                if (!this.activeCoverImage.length){
                    this.dummyCover = true;
                }
            });
            this.$api.get('referral-history', config).then(response =>
            {
                this.walletTotalSpend = response.data.referred_history.total_spend;
                this.walletUsableAmount = response.data.referred_history.usable_amount;
                this.walletHistory = response.data.referred_history.history;
            });


            this.$store.watch(
                (state)=>{
                    return this.$store.state.user // could also put a Getter here
                },
                (newValue, oldValue)=>{
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
