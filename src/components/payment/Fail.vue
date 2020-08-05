<template>
    <div>
        <section class="rented-page sign-in-bg">
            <div class="container rented-page-width pb-5">
                <div class="pt-5 pt-5">
                  <div class="card no-post-found-card mb-0 mt-0">
                    <div class="loading text-center">
                      <div id="loading-wrapper">
                        <div id="loading-text">LOADING</div>
                        <div id="loading-content"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        created() {
            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            }
            this.$api.get('fail-payment', config).then(response => {
                if (response.data.error === true) {
                    this.$router.push('/add-to-cart').then(err => {});
                    this.$swal("Payment Failed", "Something went wrong. Try Again!", "error");
                }
            })
        }
    }
</script>
