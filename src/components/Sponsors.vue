<template>
    <div>
        <!-- sponsors-section -->
        <section class="sponsors-section">
            <div class="container">
                <div class="sponsors-section--content">
                    <h2>{{ $t('coming_soon', $store.state.locale) }}</h2>
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
        }
    }
</script>

<style scoped>
    fieldset {
        max-width: 100% !important;
    }
</style>
