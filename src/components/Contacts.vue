<template>
    <div>
        <!-- contact-section -->
        <section class="title-section">
            <div class="contact-title text-center">
                <h2 class="mb-3">CONTACT INFO</h2>
                <p>This page contains all the methods to contact GameHub Support.</p>
            </div>
        </section>
        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="map">
                            <img src="../assets/img/map.png" alt="map" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="contact-form">
                            <h2>CONTACT US</h2>
                            <form action="#">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="firstName">First name</label>
                                        <input type="text" class="form-control" id="firstName">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="lastName">Last name</label>
                                        <input type="text" class="form-control" id="lastName">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" class="form-control" id="phone" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="contactmail">Email </label>
                                    <input type="email" class="form-control" id="contactmail" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="contactmessage">Message</label>
                                    <textarea class="form-control" id="contactmessage" rows="3"></textarea>
                                </div>
                                <button class="btn--secondery submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<!--        <div class="container mt-4">-->
<!--            <div class="w-50 m-0 m-auto">-->
<!--                <h3 class="text-center">Contact Form</h3>-->
<!--                <script type="application/javascript">-->
<!--                    hbspt.forms.create({-->
<!--                        css: '',-->
<!--                        cssRequired: '',-->
<!--                        portalId: "7914426",-->
<!--                        formId: "94f62086-f74a-4d36-b32b-67a53916ecb9"-->
<!--                    });-->
<!--                </script>-->
<!--            </div>-->
<!--        </div>-->

    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    fieldset {
        max-width: 100% !important;
    }
</style>
