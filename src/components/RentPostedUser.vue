<template>
  <div>
    <section class="cart sign-in-bg pt-5">
      <div class="container-fluid game-page-width pb-5">
        <h1 class="text-white text-center">Available Right Now!</h1>
        <div class="w-70 m-auto pt-3">
          <div class="table-responsive pb-5">
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Game Owner</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Checkpoint</th>
                  <th scope="col">Available From</th>
                  <th scope="col">Available For</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(rent, index) in rents" :key="index">
                  <th scope="row" class="h5 text-gray" v-if="rent.rented_user_id != null">{{ rent.user.data.name ? rent.user.data.name : rent.user.data.phone_number}} (Rented)</th>
                  <th scope="row" class="h5 text-gray" v-else-if="$store.state.user && rent.user_id === $store.state.user.id">{{ rent.user.data.name ? rent.user.data.name : rent.user.data.phone_number}} (me)</th>
                  <th scope="row" class="h5" v-else> <router-link :to="{ path: '/rent-details/' + rent.id}">{{ rent.user.data.name ? rent.user.data.name : rent.user.data.phone_number }}</router-link></th>
                  <td>#</td>
                  <td>{{ rent.checkpoint_id == null ? 'N/A' : rent.checkpoint.data.area.data.name }}</td>
                  <td>{{ formattedDate(rent.availability_from_date) }}</td>
                  <td>{{ rent.max_number_of_week }} week(s)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        rents: []
      }
    },
    computed: {
      filteredRents() {
        return this.rents.filter(function (rent) {
          const today = new Date();
          const available = new Date(rent.availability_from_date);
          const diffTime = available - today;
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 2;
        });
      }
    },
    methods: {
      formattedDate(date) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let formattedDate = new Date(date)
        return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
      }
    },
    created() {
      this.$api.get('rent-posted-users/' + this.id + '?include=user,checkpoint.area').then(response => {
        this.rents = response.data.data;
        console.log(this.rents)
      });
    }
  }
</script>
