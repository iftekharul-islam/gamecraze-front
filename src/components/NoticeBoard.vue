<template>
    <!-- Inbox Section -->
    <section class="inbox-section">
        <div class="container">
            <div class="inbox-section--content" v-if="notices.length">
                <div class="inbox-section--content--heading text-center">
                    <h6>{{ $t('notice_board', $store.state.locale) }}</h6>
                </div>

                <div class="inbox-section--content--according">
                    <div class="card" v-for="(item, index) in notices" :key="index">
                        <div class="inbox-click" @click="changeToggle(index)">{{ $t('click_me', $store.state.locale) }}</div>
                        <i class="fas fa-envelope mail-icon"></i>
                        <p :class="{ peraToggle: show !== index }">
                            {{ item['description'] }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="cart-heading-empty" v-if="emptyNotice">
                <h2 style="text-transform: uppercase">{{ $t('notice_empty_inbox', $store.state.locale) }}</h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                user: {},
                isToggle: false,
                show: -1,
                notices: {},
                emptyNotice: false,
            }
        },
        methods: {
            formattedDate(date) {
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                let birthDate = new Date(date)
                return birthDate.getDate() + " " + months[birthDate.getMonth()] + " " + birthDate.getFullYear()
            },
            changeToggle(index) {
              if (this.show === index) {
                this.show = -1;
              }
              else {
                this.show = index;
              }
            }
        },
        created() {
            window.scrollTo(0,0);
            this.user = this.$store.state.user

            this.$api.get('notice').then(response =>
            {
                this.notices = response.data.data;
                if (!this.notices.length) {
                    this.emptyNotice = true;
                }

            });
        }
    }


</script>
