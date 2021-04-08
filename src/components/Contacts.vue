<template>
    <div>
        <!-- contact-section -->
        <section class="title-section">
            <div class="contact-title text-center">
                <h2 class="mb-3">Don't Be Shy, Let's Get In Touch!</h2>
                <p>If you need any assistance, require any information, or want to upgrade your membership please contact us via the below form.</p>
            </div>
        </section>
        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="map">
                            <a href="https://goo.gl/maps/K1gTqktfgaojX44o9" target="_blank" title="View location in google map">
                                <img src="../assets/img/map.png" alt="map" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 mt-md-0">
                        <div class="contact-form">
                            <h2>CONTACT US</h2>
                            <ValidationObserver v-slot="{ handleSubmit }">
                                <form @submit.prevent="handleSubmit(sendMail)" method="post" id="contactForm">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstName">First name</label>
                                            <ValidationProvider name="first name" rules="required" v-slot="{ errors }">
                                                <input type="text" class="form-control" name="first_name" id="firstName" value="" v-model="form.first_name">
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="lastName">Last name</label>
                                            <ValidationProvider name="last name" rules="required" v-slot="{ errors }">
                                                <input type="text" class="form-control" name="last_name" id="lastName" value="" v-model="form.last_name">
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <ValidationProvider name="number" :rules="`required|user-number:${form.phone_number}`" v-slot="{ errors }">
                                        <div class="form-group">
                                            <label for="phone">Phone</label>
                                                <input type="tel" @keypress="isNumber($event)" class="form-control country-number mb-2" v-model="form.phone_number" name="phone"/>
                                                <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </div>
                                    </ValidationProvider>
                                    <div class="form-group">
                                        <label for="contactmail">Email </label>
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <input type="email" class="form-control" name="email" id="contactmail" v-model="form.email" aria-describedby="Contact email">
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group">
                                        <label for="contactmessage">Message</label>
                                        
                                        <ValidationProvider name="message" rules="required" v-slot="{ errors }">
                                            <textarea class="form-control" id="contactmessage" rows="3" v-model="form.message"></textarea>
                                            <span v-if="errors.length" class="error-message">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <button class="btn--secondery submit-btn">
                                        <span>Submit <i v-if="isLoading" class="spinner-border spinner-border-sm"></i></span>
                                        
                                    </button>
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

                    this.$toaster.warning('Cound not send your message. Try sometime later.');
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
