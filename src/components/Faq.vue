<template>
  <div>
    <!-- support-section -->
    <!-- <section class="title-section">
        <div class="contact-title text-center">

            <div class="gamehub-input-group--content">
                <div class="search-input-design support-input-design">
                    <input type="search" class="" placeholder="How Can We Help?">
                </div>
                <button class="btn gamehub-search-btn support-search-btn" type="search">
                    <i class="fa fa-search"></i>
                </button>
            </div>

        </div>
    </section> -->
    <!-- support faq -->
    <section class="support-faq">
      <div class="container">
        <div class="row">
          <div class="col-md-11 mx-auto">
            <!-- collapse -->
            <div class="content-heading">
              <h2>{{ $t('faq_explain', $store.state.locale) }}</h2>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq1">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                            data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                      {{ $t('gamehub_signup', $store.state.locale) }}
                    </button>
                  </h2>
                </div>

                <div id="collapse1" class="collapse show" aria-labelledby="faq1" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_1', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.2 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq2">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse2" aria-expanded="false" aria-controls="collapseTwo">
                      {{ $t('faq_body_part_2', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse2" class="collapse" aria-labelledby="faq2" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_3', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.3 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq3">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse3" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_4', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse3" class="collapse" aria-labelledby="faq3" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_5', $store.state.locale) }}
                  </div>
                </div>
              </div>

              <!-- Q.4 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq4">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse4" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_6', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse4" class="collapse" aria-labelledby="faq4" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_7', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.5 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq5">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse5" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_8', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse5" class="collapse" aria-labelledby="faq5" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_9', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.6 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq6">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse6" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_10', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse6" class="collapse" aria-labelledby="faq6" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_11', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.7 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq7">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse7" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_12', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse7" class="collapse" aria-labelledby="faq7" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_13', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.8 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq8">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse8" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_14', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse8" class="collapse" aria-labelledby="faq8" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_15', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.9 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq9">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse9" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_16', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse9" class="collapse" aria-labelledby="faq9" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_17', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.10 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq10">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse10" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_18', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse10" class="collapse" aria-labelledby="faq10" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_19', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.11 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq11">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse11" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_20', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse11" class="collapse" aria-labelledby="faq11" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_21', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.12 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq12">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse12" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_22', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse12" class="collapse" aria-labelledby="faq12" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_23', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.13 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq13">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse13" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_24', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse13" class="collapse" aria-labelledby="faq13" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_25', $store.state.locale) }}
                  </div>
                </div>
              </div>
              <!-- Q.14 -->
              <div class="card mb-a-7">
                <div class="card-header p-0" id="faq14">
                  <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse14" aria-expanded="false" aria-controls="collapseThree">
                      {{ $t('faq_body_part_26', $store.state.locale) }}
                    </button>
                  </h2>
                </div>
                <div id="collapse14" class="collapse" aria-labelledby="faq14" data-parent="#accordionExample">
                  <div class="card-body">
                    {{ $t('faq_body_part_27', $store.state.locale) }}
                  </div>
                </div>
              </div>


            </div>
            <!-- end collapse -->
            <div class="support-bottom">
              <p class="mb-0 mr-a-6">{{ $t('question_query', $store.state.locale) }}</p>
              <a href="/contacts"
                 class="btn--secondery-hover gil-bold font-weight-bold primary-text d-inline-block position-relative">
                <span></span>
                <div class="position-relative">{{ $t('contact_us', $store.state.locale) }}</div>
              </a>
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
    return {}
  },
  created() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
fieldset {
  max-width: 100% !important;
}
</style>
