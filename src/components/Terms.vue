<template>
    <div>
        <!-- Terms And Conditions -->
        <section class="gamehub-policy-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="content-heading">
                            <h2>{{ $t('terms', $store.state.locale) }}</h2>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="gamehub-policy-section--content">
                            <div class="gamehub-policy-section--content--text">
                                <p>{{ $t('terms_body_part_1', $store.state.locale) }}</p>

                                 <div class="gamehub-policy-section--content--text--heading">
                                     <p>{{ $t('terms_body_part_2', $store.state.locale) }} :
                                    </p>
                                    <p> {{ $t('terms_body_part_3', $store.state.locale) }}</p>
                                 </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('terms_body_part_4', $store.state.locale) }} :</p>
                                    <p>{{ $t('terms_body_part_5', $store.state.locale) }}</p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('terms_body_part_6', $store.state.locale) }} :</p>
                                    <p>{{ $t('terms_body_part_7', $store.state.locale) }}</p>
                                </div>
                                 <div class="gamehub-policy-section--content--text--heading">
                                     <p>{{ $t('terms_body_part_8', $store.state.locale) }} :</p>
                                     <p>{{ $t('terms_body_part_9', $store.state.locale) }}</p>
                                 </div>
                                 <div class="gamehub-policy-section--content--text--heading">
                                     <p>{{ $t('terms_body_part_10', $store.state.locale) }} :</p>
                                     <p>{{ $t('terms_body_part_11', $store.state.locale) }}</p>
                                 </div>




                            </div>
                            <div class="gamehub-policy-section--content--text">
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('terms_body_part_12', $store.state.locale) }} :</p>
                                    <p>{{ $t('terms_body_part_13', $store.state.locale) }}</p>
                                </div>
                                 <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('terms_body_part_14', $store.state.locale) }}</p>
                                    <p>{{ $t('terms_body_part_15', $store.state.locale) }}</p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('terms_body_part_16', $store.state.locale) }}</p>
                                    <p>{{ $t('terms_body_part_17', $store.state.locale) }}</p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('terms_body_part_18', $store.state.locale) }} :</p>
                                    <p>{{ $t('terms_body_part_19', $store.state.locale) }} : </p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>Rookie:</p>
                                    <p>{{ $t('terms_body_part_20', $store.state.locale) }}</p>
                                </div>
                                 <div class="gamehub-policy-section--content--text--heading">
                                    <p>Elite:</p>
                                    <p>{{ $t('terms_body_part_21', $store.state.locale) }}</p>
                                </div>
                                <div class="gamehub-policy-section--content--text--heading">
                                    <p>{{ $t('terms_body_part_22', $store.state.locale) }} :</p>
                                    <p>{{ $t('terms_body_part_23', $store.state.locale) }}</p>
                                </div>

                            </div>
                        </div>
                         <!--  -->
                         <div class="support-bottom">
                            <p class="mb-0 mr-a-6">{{ $t('question_query', $store.state.locale) }}</p>
                            <a href="/contacts" class="btn--secondery"><span class="text-uppercase">{{ $t('contact_us', $store.state.locale) }}</span></a>
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
