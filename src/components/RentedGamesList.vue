<template>
    <div>

    <!-- user profile details -->
        <section class="user-profile-details">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="back mb-a-7">
                            <router-link to="/profile" class="d-flex secondery-fill-hover align-items-center">
                                <svg class="mr-3 secondery-fill-hover" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8114 14.5468C12.1234 14.3785 12.3179 14.0584 12.3179 13.7103V8.28972H23.0209C23.5614 8.28972 24 7.86127 24 7.33337C24 6.80546 23.5614 6.37702 23.0209 6.37702H12.3179V0.956419C12.3179 0.607032 12.1234 0.286973 11.8114 0.119931C11.4994 -0.0496622 11.1182 -0.038186 10.8166 0.146709L0.456894 6.52366C0.172314 6.69963 0 7.00438 0 7.33337C0 7.66235 0.172314 7.96711 0.456894 8.14308L10.8166 14.52C10.9759 14.6169 11.1574 14.6667 11.3388 14.6667C11.5007 14.6667 11.6639 14.6259 11.8114 14.5468Z" fill="white"/>
                                </svg>Back
                            </router-link>
                        </div>
                        <!-- new rented design -->
                        <div class="d-flex flex-wrap justify-content-center" v-if="lends">
                            <div class="max-446 mb-3 mr-sm-4 w-100 pt-a-2 pl-a-4 pb-a-6 pr-a-4 position-relative bg-game-details border-2 warning-border" v-for="(lend, index) in lends" :key="index">
                                <!-- disk type -->
                                <div class="dashboard-content--rented--box--disk-type position-absolute top--1 right--1 bg-secondery p-2 gil-bold">
                                    <div class="disk-type text-black" v-if="lend.rent.disk_type == 1">Physical Copy</div>
                                    <div class="disk-type text-black" v-if="lend.rent.disk_type == 0">Digital Copy</div>
                                </div>
                                <div class="dashboard-content--rented--box--order-id h-30">
                                    <p v-if="lend.order">{{ lend.order.order_no }}</p>
                                    <p v-else>N/A</p>
                                </div>
                                <div class="dashboard-content--rented--box--order-name mt-3">
                                    <p v-if="lend.rent" class="f-s-20 gil-bold mb-a-3 h-60">{{ lend.rent.game.name }}</p>
                                </div>
                                <div class="d-flex flex-column flex-sm-row justify-content-between dashboard-content--rented--box--order-description">
                                        <div class=" flex-2">
                                            <div class="mb-3">
                                                <p class="mb-1">{{ $t('rent_start_date', $store.state.locale) }}</p>
                                                <p class="text-secondery">{{ formattedDate(lend.lend_date) }}</p>
                                            </div>
                                            <div>
                                                <p class="mb-1">{{ $t('duration', $store.state.locale) }}</p>
                                                <p class="text-secondery">1 week</p>
                                            </div>
                                        </div>
                                        <div class="duration flex-1">
                                            <div class="mb-3">
                                                <p class="mb-1">{{ $t('rent_end_date', $store.state.locale) }}</p>
                                                <div class="d-flex flex-column align-items-center duration--date text-secondery w-fit">
                                                    <p class="mb-1" v-if="lend.status === 1 || lend.status === 3 && lend.end_date">{{ formattedReturnDate(lend.end_date) }}</p>
                                                    <p class="mb-1" v-else>-</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p class="mb-1">{{ $t('amount', $store.state.locale) }}</p>
                                                <p class="text-secondery">{{ lend.lend_cost + parseInt(lend.commission)  }}</p>
                                            </div>
                                            
                                        </div>
                                </div>
                                <div class="mt-3 flex-column-reverse flex-sm-row d-flex justify-content-between">
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
                                        <div class="status flex-1 mb-a-7 mb-sm-0">
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
                                            <div class="mt-a-4 mt-a-sm-7">
                                                <a href="#" class="bg-secondery black-text-hover py-1 px-3 d-block text-center text-black w-fit gil-medium">Extend date</a>
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
    import StarRating from 'vue-star-rating';
    import { VueFeedbackReaction } from 'vue-feedback-reaction';
    export default {
        components: {StarRating, FlipCountdown, Clipboard, VueFeedbackReaction},
        // props: ['rentPost', 'profileEdit'],
        data() {
            return {
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
                ratingList: [],

            }
        },
        watch: {
            credentialModalShow: {
                handler: function () {
                    this.rentCheck()
                }
            },
            // "$route": {
            //     handler: function(value) {
            //         if (value.name === 'Profile'){
            //             this.ratingCheck()
            //         }
            //     },
            //     deep: true,
            //     immediate: true,
            // },

        },
        methods: {
            ratingSubmit () {
                this.invalidRating = false;
                if (this.ratingData.rating === 0 && this.ratingData.comment === ''){
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
                    this.$toaster.success( response.data.message );
                    this.ratingCheck();
                    this.ratingPopupModal = false;
                    this.$root.$refs.Navbar.navRatingCheck();
                });
            },
            setRatingData (data) {
                this.ratingPopupModal = true;
                this.ratingData.value = data;
            },
            onCopy: function (e) {
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
            },
            activeRentOffers() {
                // // $('#v-pills-overview-tab').removeClass('active');
                // // $('#v-pills-overview').removeClass('active');
                // // $('#v-pills-overview').removeClass('show');
                // // $('#v-pills-post-rent-tab').removeClass('active');
                // // $('#v-pills-post-rent').removeClass('show');
                // // $('#v-pills-post-rent').removeClass('active');
                // $('#v-pills-dashboard-tab').removeClass('active');
                // $('#v-pills-dashboard').removeClass('active');
                // $('#v-pills-dashboard').removeClass('show');
                // $('#v-pills-edit-profile-tab').addClass('active');
                // // $('#v-pills-edit-profile').addClass('active');
                // // $('#v-pills-edit-profile').addClass('show');
                // // $('#v-pills-dashboard-tab').addClass('active');
                // // $('#v-pills-dashboard').addClass('active');
                // // $('#v-pills-dashboard').addClass('show');
                // // $('#v-pills-my-earning-tab').removeClass('active');
                // // $('#v-pills-my-earning').removeClass('active');
                // // $('#v-pills-my-earning').removeClass('show');
                // // $('#v-pills-refer-tab').removeClass('active');
                // // $('#v-pills-refer').removeClass('active');
                // // $('#v-pills-refer').removeClass('show');
                // // $('#v-pills-rating-tab').removeClass('active');
                // // $('#v-pills-rating').removeClass('active');
                // // $('#v-pills-rating').removeClass('show');
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
                });

                this.$api.get('lends', config).then(response =>
                {
                    this.lends = response.data;
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
            // rentPostTab() {
            //     $('#v-pills-overview-tab').removeClass('active');
            //     $('#v-pills-overview').removeClass('active');
            //     $('#v-pills-overview').removeClass('show');
            //     $('#v-pills-post-rent-tab').addClass('active');
            //     $('#v-pills-post-rent').addClass('show');
            //     $('#v-pills-post-rent').addClass('active');
            //     $('#v-pills-edit-profile-tab').removeClass('active');
            //     $('#v-pills-edit-profile').removeClass('active');
            //     $('#v-pills-edit-profile').removeClass('show');
            //     $('#v-pills-dashboard-tab').removeClass('active');
            //     $('#v-pills-dashboard').removeClass('active');
            //     $('#v-pills-dashboard').removeClass('show');
            //     $('#v-pills-my-earning-tab').removeClass('active');
            //     $('#v-pills-my-earning').removeClass('active');
            //     $('#v-pills-my-earning').removeClass('show');
            //     $('#v-pills-refer-tab').removeClass('active');
            //     $('#v-pills-refer').removeClass('active');
            //     $('#v-pills-refer').removeClass('show');
            //     $('#v-pills-rating-tab').removeClass('active');
            //     $('#v-pills-rating').removeClass('active');
            //     $('#v-pills-rating').removeClass('show');
            // },
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
            rentGamesTab() {
                $('#v-pills-overview-tab').removeClass('active');
                $('#v-pills-overview').removeClass('active');
                $('#v-pills-overview').removeClass('show');
                $('#v-pills-post-rent-tab').removeClass('active');
                $('#v-pills-post-rent').removeClass('show');
                $('#v-pills-post-rent').removeClass('active');
                $('#v-pills-edit-profile-tab').removeClass('active');
                $('#v-pills-edit-profile').removeClass('active');
                $('#v-pills-edit-profile').removeClass('show');
                $('#v-pills-dashboard-tab').addClass('active');
                $('#v-pills-dashboard').addClass('active');
                $('#v-pills-dashboard').addClass('show');
                $('#v-pills-my-earning-tab').removeClass('active');
                $('#v-pills-my-earning').removeClass('active');
                $('#v-pills-my-earning').removeClass('show');
                $('#v-pills-refer-tab').removeClass('active');
                $('#v-pills-refer').removeClass('active');
                $('#v-pills-refer').removeClass('show');
                $('#v-pills-rating-tab').removeClass('active');
                $('#v-pills-rating').removeClass('active');
                $('#v-pills-rating').removeClass('show');

                this.onRentedGames();
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
            this.$root.$on('ratingNavCheck', () => {
                this.ratingCheck();
            });
            this.$root.$on('rentGames', () => {
                this.rentGamesTab();
            });
            this.copyUrl = process.env.VUE_APP_BASE;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            };
            this.ratingCheck();
            this.rentCheck();
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
