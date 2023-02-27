<template>
  <div>
    <!-- About us -->
    <section class="about-us-section">
        <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="content-heading">
                            <h2 style="text-transform: uppercase">{{ $t('about_us', $store.state.locale) }}</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-us-section--content ml-a-6">
                            <p>{{ $t('about_us_body_part_1', $store.state.locale) }}</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="about-us-section--content">
                            <p>{{ $t('about_us_body_part_2', $store.state.locale) }}</p>

                            <p>{{ $t('about_us_body_part_3', $store.state.locale) }}</p>
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
    return {};
  },
    created() {
        window.scrollTo(0,0);
    }
};
</script>

<style scoped>
fieldset {
  max-width: 100% !important;
}
</style>
