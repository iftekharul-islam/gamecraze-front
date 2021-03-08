<template>
    <div>
        <!-- Rented page  -->
        <section class="rented-page sign-in-bg">
            <div class="container-fluid rented-page-width">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="card" v-if="rentPost === true && rentView === false">
                            <h3 class="card-title text-center">Rent</h3>
                            <ValidationObserver v-slot="{ handleSubmit }">
                            <!-- form -->
                            <form @submit.prevent="handleSubmit(onSubmit)" method="post" >
                                <div class="form-group text-white">
                                    <!-- Game name -->
                                    <label class="">Game Name</label>
                                    <ValidationProvider name="game" rules="" v-slot="{ errors }">
                                      <vue-autosuggest
                                          :v-model="gameName"
                                          :suggestions="filteredOptions"
                                          @focus="focusMe"
                                          @click="clickHandler"
                                          @input="onInputChange"
                                          @selected="onSelected"
                                          :get-suggestion-value="getSuggestionValue"
                                          :input-props="{id:'autosuggest__input', placeholder:'Enter game name'}">
                                        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
                                          <div style="display: flex; color: white;">{{suggestion.item.name}}</div>
                                        </div>
                                      </vue-autosuggest>
<!--                                            <v-select label="name" :options="games" :reduce="game => game" v-model="form.game" @change="changeGame"></v-select>-->
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <label for="rentedWeek" class="">Maximum rented week</label>
                                    <ValidationProvider name="rented week" rules="required|min_value:1" v-slot="{ errors }">
                                        <input type="number" class="form-control" id="rentedWeek" placeholder="Maximum rented week" min="1" v-model="form.max_week">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <!-- date available -->
                                <div class="form-group">
                                    <label for="rentingWeek" class="">Available from</label>
                                    <ValidationProvider name="available date" rules="required" v-slot="{ errors }">
                                        <input type="date" class="form-control" id="rentingWeek" placeholder="Maximum renting week" :min="todayDate()" v-model="form.availability">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <!-- platform -->
                                <div class="form-group" v-if="gamePlatform">
                                    <label>Platform</label><br>
                                      <ValidationProvider name="Platform" rules="required" v-slot="{ errors }" class="d-flex">
                                        <div class="form-check form-check-inline" v-for="(platform, index) in form.game.platforms.data" :key="index">
                                          <input class="form-check-input platform" :id="'platform-' + index" name="platform" type="radio" :value="platform" v-model="form.platform">
                                          <label class="form-check-label ml-3" :for="'platform-' + index">{{ platform.name }}</label>
                                        </div>
                                        <span class="error-message">{{ errors[0] }}</span>
                                      </ValidationProvider>
                                </div>
                                <!-- earning amount -->
                                <div class="form-group" v-if="basePrices">
                                    <label>Earning Amount</label>
                                    <div class="earning-amount">
                                        <table class="table table-borderless">
                                            <tbody>
                                            <tr class="">
                                                <td>Your Estimated earning for 1 week</td>
                                                <td>BDT {{ basePrices[1] }}</td>
                                            </tr>
                                            <tr class="">
                                                <td>Your Estimated earning for 2 week</td>
                                                <td>BDT {{ basePrices[1] + basePrices[2] }}</td>
                                            </tr>
                                            <tr class="">
                                                <td>Your Estimated earning for 3 week</td>
                                                <td>BDT {{ basePrices[1] + basePrices[2] + basePrices[3] }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class=" mt-2 offset-sm-3 col-sm-8 game-rent-alert">
                                        <div class="alert alert-info alert-dismissible game-rent-alert--box">
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>
                                            <p>
                                                If you want to Rent for more weeks.Then renting price will be cyclic like the given price table.So its start from 1st week.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- disk condition -->
                                <div class="form-group">
                                    <label for="DiskCondition">Disk Condition</label>
                                    <ValidationProvider name="Disk Condition" rules="required" v-slot="{ errors }">
                                        <select class="form-control" id="DiskCondition" v-model="form.disk_condition">
                                            <option value="">Please Select Disk Condition...</option>
                                            <option v-for="(diskCondition, index) in diskConditions" :key="index" :value="diskCondition">{{ diskCondition.name_of_type }} ({{ diskCondition.description }})</option>
                                        </select>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                                <!-- disk image -->
                                <div class="form-group">
                                    <div class="disk-upload">
                                        <div id="msg"></div>
                                        <input type="file" name="disk_image" class="file" id="DiskUpload" accept="image/*" @change="onDiskimageChange">
                                        <label for="DiskUpload">Disk Image</label>
                                        <div class="input-group my-3">
                                            <input type="text" class="form-control upload-input" disabled placeholder="Disk image" id="file">
                                            <div class="input-group-append">
                                                <button type="button" class="browse btn btn-primary">Browse...</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="disk-preview">
                                        <img src="../assets/img/rent/disk.png" id="preview" class="img-thumbnail">
                                    </div>
                                </div>
                                <!-- Cover image -->
                                <div class="form-group">
                                    <div class="cover-upload">
                                        <div id="msg-2"></div>
                                        <input type="file" name="cover_image" class="file-2" id="CoverUpload" accept="image/*" @change="onCoverimageChange">
                                        <label for="CoverUpload">Cover Image</label>
                                        <div class="input-group my-3">
                                            <input type="text" class="form-control upload-input" disabled placeholder="Cover Image"  id="file-2">
                                            <div class="input-group-append">
                                                <button type="button" class="browse-2 btn btn-primary">Browse...</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="disk-preview">
                                        <img src="../assets/img/rent/cover.png" id="preview-2" class="img-thumbnail">
                                    </div>
                                </div>
                                <!-- Rent submit button -->
                                <div class="text-center rented-page-btn pt-5">
                                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                </div>
                            </form>
                            </ValidationObserver>
                        </div>
                        <div class="card" v-if="rentPost === false && rentView === false">
                            <h3 class="card-title text-center">Rent Preview</h3>
                            <hr>
                            <div class="rent-preview">
                                <div class="row">
                                    <div class="col"><h4>Game Name:</h4></div>
                                    <div class="col"><h4>{{ form.game.name }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Disk Condition:</h4></div>
                                    <div class="col"><h4>{{ form.disk_condition.name_of_type }} ( {{ form.disk_condition.description }} )</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Available from:</h4></div>
                                    <div class="col"><h4>{{ formattedDate(form.availability) }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Platform:</h4></div>
                                    <div class="col"><h4>{{ form.platform.name }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col"><h4>Maximum rented week:</h4></div>
                                    <div class="col"><h4>{{ form.max_week }}</h4></div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h4>Disk image:</h4>
                                        <div class="disk-preview disk">
                                            <img :src="form.disk_image" id="disk-preview" class="img-thumbnail">
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4>Cover image</h4>
                                        <div class="cover-preview disk">
                                            <img :src="form.cover_image" class="img-thumbnail">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center rented-page-btn">
                                <button type="button" class="btn btn-primary mb-2" @click.prevent="onConform">Confirm</button>
                            </div>
                        </div>
                        <div class="card text-white" v-if="rentView === true">
                            <div class="p-4">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <label>How do you want to Deliver ?</label>
                                    </div>
                                    <div class="col-lg-1 ">
                                            <label for="checkpoint_true">Checkpoint</label>
                                    </div>
                                    <div class="col-lg-3">
                                        <input type="radio" v-model="x" value="1" name="checkpoint_id" id="checkpoint_true">
                                    </div>
                                    <div class="col-lg-1">
                                        <label for="cod">COD</label>
                                    </div>
                                    <div class="col-lg-1">
                                        <input type="radio" v-model="x" value="" v-on:change="onEmpty" name="checkpoint_id" id="cod">
                                    </div>
                                    <div class="col-lg-12 mt-3" v-show="x === '1'">
                                        <div class="form-group">
                                            <label for="checkpoint">Checkpoint </label>
                                            <select class="form-control" id="checkpoint" v-model="form.checkpoint">
                                                <option value="" disabled>Please Select Near Checkpoint</option>
                                                <option v-for="(checkpoint, index) in checkpoints" :key="index" :value="checkpoint">{{ checkpoint.name }}, Area: {{ checkpoint.area.data.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center rented-page-btn mt-5">
                                    <button type="button" class="btn btn-primary mb-2" @click.prevent="onFinal">Confirm</button>
                                </div>
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
        data() {
            return {
                x: '',
                rentPost: true,
                rentView: false,
                diskConditions: [],
                checkpoints: [],
                games: [],
                platforms: [],
                gamesName: {},
                platformsName: {},
                basePrices: false,
                diskConditionsName: {},
                gameName: '',
                gamePlatform: false,
                form: {
                    game: {},
                    availability: '',
                    max_week: '',
                    platform: {},
                    disk_condition: {},
                    disk_image: '',
                    cover_image: '',
                    checkpoint: {},
                },
            }
        },
        computed: {
          filteredOptions() {
            return [
              {
                data: this.games.filter(option => {
                  return option.name.toLowerCase().indexOf(this.gameName.toLowerCase()) > -1;
                })
              }
            ];
          }
        },
        methods: {
            onDiskimageChange (event) {
                let fileReader = new FileReader();
                fileReader.onload = (e) => {
                    this.form.disk_image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
            },
            onCoverimageChange (event) {
                let fileReader = new FileReader();

                fileReader.onload = (e) => {
                    this.form.cover_image = e.target.result;
                }
                fileReader.readAsDataURL(event.target.files[0]);
            },
            onSubmit () {
                this.rentPost = false;
            },
            onConform () {
                this.rentView = true;
            },
            onEmpty () {
                this.form.checkpoint = '';
            },
            onFinal () {
                this.rentView = false;
                this.rentPost = true;
                let  uploadInfo = {
                    game_id: this.form.game.id,
                    availability: this.form.availability,
                    max_week: this.form.max_week,
                    platform_id: this.form.platform.id,
                    disk_condition_id: this.form.disk_condition.id,
                    disk_image: this.form.disk_image,
                    cover_image: this.form.cover_image,
                    checkpoint_id: this.form.checkpoint.id,
                }
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + this.$store.state.token
                    }
                }
                // console.log(uploadInfo);
                this.$api.post('rents', uploadInfo, config)
                    .then(response => {
                        this.$swal({
                            title: "Post Uploaded!",
                            text: "Rent Post Successful!",
                            timer: 1500
                        });
                        this.$router.push('dashboard').catch(err => {});
                    });
            },
            clickHandler(item) {
              // event fired when clicking on the input
            },
            onSelected(item) {
              this.form.game = item.item;
              console.log(this.form.game);
              this.gamePlatform = true;
                this.$api.get('base-price/calculate/' + this.form.game.id)
                    .then (response =>
                    {
                        this.basePrices = response.data;
                        // console.log(response);
                        // console.log(this.basePrices);
                    })
            },
            onInputChange(text) {
              // event fired when the input changes
              // console.log(text)
            },
            /**
             * This is what the <input/> value is set to when you are selecting a suggestion.
             */
            getSuggestionValue(suggestion) {
              return suggestion.item.name;
            },
            focusMe(e) {
              // console.log(e) // FocusEvent
            },
            formattedDate(date) {
              const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
              let birthDate = new Date(date)
              return birthDate.getDate() + " " + months[birthDate.getMonth()] + " " + birthDate.getFullYear()
            },
            todayDate() {
              var today = new Date();
              var dd = today.getDate() + 1;

              var mm = today.getMonth()+1;
              var yyyy = today.getFullYear();

              if(dd<10)
              {
                dd='0'+dd;
              }

              if(mm<10)
              {
                mm='0'+mm;
              }
              return yyyy+'-'+mm+'-'+dd;

            }
        },
        created () {
            this.$api.get('games?include=platforms')
                .then(response =>
                {
                    this.games = response.data.data
                    console.log(this.games)
                })
            this.$api.get('platforms')
                .then (response =>
                {
                    this.platforms = response.data.data
                })
            this.$api.get('disk-conditions')
                .then (response =>
                {
                    this.diskConditions = response.data.data
                })
            this.$api.get('checkpoints?include=area')
                .then (response =>
                {
                    this.checkpoints = response.data.data
                })
        }
    }
</script>

<style>
.demo {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input {
  width: 100%;
  padding: 0.5rem;
}

ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
li:hover {
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 280px;
}

#autosuggest { width: 100%; display: block;}
.autosuggest__results-item--highlighted {
  background-color: rgba(51, 217, 178,0.2);
}
</style>


