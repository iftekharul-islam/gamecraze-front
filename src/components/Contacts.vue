<template>
    <div>
        <!-- contact-section -->
        <section class="title-section">
            <div class="contact-title text-center">
                <h2 class="mb-3">{{ $t('contact_title_part_1', $store.state.locale) }}</h2>
                <p>{{ $t('contact_title_part_2', $store.state.locale) }}</p>
            </div>
        </section>
        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="map">
                            <!-- <a href="https://goo.gl/maps/K1gTqktfgaojX44o9" target="_blank" title="View location in google map">
                                <img src="../assets/img/map.png" alt="map" class="img-fluid">
                            </a> -->
                            <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4110149219805!2d90.3630115153858!3d23.8395344912814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1c583da4837%3A0x3b78f9f59ec865b6!2sAugnitive!5e0!3m2!1sen!2sbd!4v1623317482971!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="contact-form">
                            <h2 style="text-transform: uppercase">{{ $t('contact_us', $store.state.locale) }}</h2>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(sendMail)" method="post" id="contactForm">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstName">{{ $t('first_name', $store.state.locale) }}</label>
                                            <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                                                <input type="text" class="form-control" name="first_name" id="firstName" value="" v-model="form.first_name">
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="lastName">{{ $t('last_name', $store.state.locale) }}</label>
                                            <ValidationProvider name="last name" rules="required" v-slot="{ errors }">
                                                <input type="text" class="form-control" name="last_name" id="lastName" value="" v-model="form.last_name">
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <ValidationProvider name="number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">
                                        <div class="form-group">
                                            <label for="phone">{{ $t('phone_number', $store.state.locale) }}</label>
                                                <input type="tel" @keypress="isNumber($event)" class="form-control country-number mb-2" v-model="form.phone_number" name="phone"/>
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>
                                    <div class="form-group">
                                        <label for="contactmail">{{ $t('email', $store.state.locale) }} </label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="email" class="form-control" name="email" id="contactmail" v-model="form.email" aria-describedby="Contact email">
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group">
                                        <label for="contactmessage">{{ $t('message', $store.state.locale) }}</label>
                                        
                                        <ValidationProvider name="message" rules="required" v-slot="{ errors }">
                                            <textarea class="form-control" id="contactmessage" rows="3" v-model="form.message"></textarea>
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="text-left mt-3 mt-md-4">
                                        <button class="router_link btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative">
                                            <span>{{ $t('submit', $store.state.locale) }} <i v-if="isLoading" class="spinner-border spinner-border-sm"></i></span>
                                        </button>
                                    </div>
                                </form>
                            </ValidationObserver>
                        </div>
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
                form: {
                    first_name: '',
                    last_name: '',
                    email: "",
                    phone_number: "",
                    message:'',
                },
                isLoading: false,
            }
        },
        methods: {
            isNumber: function(evt) {
              evt = (evt) ? evt : window.event;
              var charCode = (evt.which) ? evt.which : evt.keyCode;
              if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || this.form.phone_number.length > 10) {
                evt.preventDefault();
              } else {
                return true;
              }
            },
            sendMail: function() {
                this.isLoading = true;
                this.$api.post('contact', this.form).then(response => {
                    this.isLoading = false;
                    if (response.data.error === false) {
                        this.isLoading = false;
                        this.$toaster.success(response.data.message);
                        setTimeout(function () {
                            window.location.reload();
                        }, 2000);
                        return;
                    }

                    this.$toaster.warning(this.$t('sms_error', this.$store.state.locale));
                }).catch(error => {
                    console.error(error)
                    this.isLoading = false
                });
            }
        },
        created() {
            window.scrollTo(0,0);
        }
    }
</script>

<style scoped>
    fieldset {
        max-width: 100% !important;
    }
</style>
