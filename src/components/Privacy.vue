<template>
    <div>
        <!-- Privacy Policy -->
        <section class="gamehub-policy-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="content-heading">
                            <h2>{{ $t('privacy_&_policies', $store.state.locale) }}</h2>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="gamehub-policy-section--content">
                            <div class="gamehub-policy-section--content--text">
                                <p>{{ $t('privacy_body_part_1', $store.state.locale) }}</p>
                                 <div class="gamehub-policy-section--content--text--heading">
                                     <p>
                                         {{ $t('consent', $store.state.locale) }}
                                    </p>
                                    <p> {{ $t('privacy_body_part_2', $store.state.locale) }}</p>
                                 </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('information_we_collect', $store.state.locale) }}</p>
                                    <p>{{ $t('privacy_body_part_3', $store.state.locale) }}</p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p> {{ $t('privacy_body_part_4', $store.state.locale) }}</p>
                                    <p> {{ $t('privacy_body_part_5', $store.state.locale) }}</p>
                                        <ul class="bullet-list">
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_6', $store.state.locale) }}</li>
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_7', $store.state.locale) }}</li>
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_8', $store.state.locale) }}</li>
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_9', $store.state.locale) }}</li>
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_10', $store.state.locale) }}</li>
                                            <li class="bullet-list--item"> {{ $t('sent_you_email', $store.state.locale) }}</li>
                                            <li class="bullet-list--item">{{ $t('find_and_prevent_fraud', $store.state.locale) }}</li>
                                        </ul>
                                </div>
                                 <div class="gamehub-policy-section--content--text--heading"> 
                                     <p>{{ $t('log_files', $store.state.locale) }}</p>
                                     <p>{{ $t('privacy_body_part_11', $store.state.locale) }}</p>
                                 </div>
                                  <div class="gamehub-policy-section--content--text--heading"> 
                                     <p>{{ $t('privacy_body_part_12', $store.state.locale) }}</p>
                                     <p>{{ $t('privacy_body_part_13', $store.state.locale) }}</p>
                                 </div>

                                  <div class="gamehub-policy-section--content--text--heading"> 
                                    <p>{{ $t('privacy_body_part_34', $store.state.locale) }}</p>
                                    <p>{{ $t('privacy_body_part_35', $store.state.locale) }}</p>
                                         <ul class="bullet-list">
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_36', $store.state.locale) }}</li>
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_37', $store.state.locale) }}</li>
                                            <li class="bullet-list--item">{{ $t('privacy_body_part_38', $store.state.locale) }}</li>
                                        </ul>
                                    <p>{{ $t('privacy_body_part_39', $store.state.locale) }}</p>
                                    <ul class="bullet-list">
                                        <li class="bullet-list--item">{{ $t('privacy_body_part_40', $store.state.locale) }}</li>
                                        <li class="bullet-list--item">{{ $t('privacy_body_part_41', $store.state.locale) }}</li>
                                        <li class="bullet-list--item">{{ $t('privacy_body_part_42', $store.state.locale) }}</li>
                                        <li class="bullet-list--item">{{ $t('privacy_body_part_43', $store.state.locale) }}</li>
                                        <li class="bullet-list--item">{{ $t('privacy_body_part_44', $store.state.locale) }}</li>
                                    </ul>
                                  </div>
                                 
                            </div>

                            <div class="gamehub-policy-section--content--text">
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('delivery_&_return_policy', $store.state.locale) }}</p>
                                    <p>{{ $t('privacy_body_part_14', $store.state.locale) }}<br><br>
                                        {{ $t('privacy_body_part_15', $store.state.locale) }}</p>
                                </div>
                                 <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('privacy_body_part_16', $store.state.locale) }}</p>
                                    <p>{{ $t('privacy_body_part_17', $store.state.locale) }}<br>
                                        {{ $t('privacy_body_part_18', $store.state.locale) }}</p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('privacy_body_part_19', $store.state.locale) }}</p>
                                    <p>{{ $t('privacy_body_part_20', $store.state.locale) }}<br>
                                        {{ $t('privacy_body_part_21', $store.state.locale) }}<br>
                                        {{ $t('privacy_body_part_22', $store.state.locale) }}<br>
                                        {{ $t('privacy_body_part_23', $store.state.locale) }}</p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('privacy_body_part_24', $store.state.locale) }}</p>
                                    <p>{{ $t('privacy_body_part_25', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_26', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_27', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_28', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_29', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_30', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_31', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_32', $store.state.locale) }}
                                        <br> {{ $t('privacy_body_part_33', $store.state.locale) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                         <!--  -->
                         <div class="support-bottom">
                            <p class="mb-0 mr-a-6">{{ $t('question_query', $store.state.locale) }}</p>
                            <a href="/contacts" class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative"><span></span> <div class="position-relative">{{ $t('contact_us', $store.state.locale) }}</div></a>
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
