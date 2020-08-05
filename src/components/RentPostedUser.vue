<template>
  <div>
    <section class="cart sign-in-bg pt-5">
      <div class="container-fluid game-page-width pb-5">
        <h1 class="text-white text-center">Available Right Now!</h1>
        <div class="w-50 m-auto pt-3">
          <div class="table-responsive pb-5">
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Game Owner</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Available From</th>
                  <th scope="col">Available For</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(rent, index) in rents" :key="index">
                  <th scope="row" class="h5"> <router-link :to="{ path: '/rent-details/' + rent.id}">{{ rent.user.data.name }}</router-link></th>
                  <td>#</td>
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
    methods: {
      formattedDate(date) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let formattedDate = new Date(date)
        return formattedDate.getDate() + " " + months[formattedDate.getMonth()] + " " + formattedDate.getFullYear()
      }
    },
    created() {
      this.$api.get('rent-posted-users/' + this.id + '?include=user').then(response => {
        this.rents = response.data.data;
        console.log(this.rents);
      });
    }
  }
</script>
