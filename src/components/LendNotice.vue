<template>
   <div>
          <div class="profile-header position-relative">
              <div class="position-absolute w-100 h-100">
                   <img src="../assets/img/profile-bg.webp" alt="profile bg" class="img-fluid w-100 h-100 user-profile-bg">
              </div>
              <div class="container position-relative h-100">
                  <div class="profile-header--btn position-absolute right-0 bottom-50">
                      <router-link  class="btn--secondery" to="/profile" @click.native="clickProfile()"><span>Post for lend</span></router-link>
<!--                      <a href="https://www.gamehub.com.bd/profile" class="btn&#45;&#45;secondery"></a>-->
                  </div>
              </div>
          </div>
          <div class="lend-notice-content">
              <div class="container">
                  <p class="f-s-20 main-text"><i>Have you ever wondered apart from winning gaming tournaments how can a gamer earn money? Well 
                      GameHub is offering all the gamers in Bangladesh a chance to do just that. It's a fabulous opportunity to pocket 
                      some extra money while enjoying gaming.</i> </p>
                  <div class="row">
                      <div class="col-sm-6">
                          <div class="lend-notice-content--text ">
                              <p>How Lend For Post Works:</p>
                              <p>This is the most common question we get & to be honest the answer is quite straightforward. 
                                  All you need to do is post your unused Playstation, Xbox or Pc games for rent. In other words 
                                  you are lending your games to those people who can not afford to buy games. The games are not 
                                  cheap & in a way you are helping your fellow gamers to enjoy playing games. By doing so you will 
                                  earn an extra bit of money. You might be wondering what if someone damages your games or worse if 
                                  someone stole it ? On such occasions GameHub will take full responsibility for your games & provide 
                                  you with a brand new game.</p>
                          </div>
                           <div class="lend-notice-content--text">
                              <p class="mb-3 lend-notice-content--text-margin">How To Post For Lend:</p>
                              <ul>
                                  <li class="d-block">First you need to search the game you want to post for rent in the Game Name box. If you do not find the game you are looking to post for rent you need <u><a href="https://www.gamehub.com.bd/contacts" class="text-secondery">contact us.</a></u></li>
                                  <li>In the next step you need to decide how many weeks you want to post for renting. You need to lend your disk minimum 1 week & maximum of 10 weeks.</li>
                                  <li> Now you need to provide a method of delivery which is currently by default cash on delivery.</li>
                                  <li>In this stage you need to select the game type there can be either physical or digital games.</li>
                                  
                              </ul>
                               <ul class="post-rent--form-group-width">
                                      <li>For digital games you need to provide the user account & password. </li>
                                  </ul>
                              <div class="form-group post-rent--form-group post-rent--form-group-width form-width">
                                 
                                  <label for="rent-game-user-id" class=" label-padding post-rent--form-group--label"> Game user name</label>
                                    <div class=" post-rent--form-group--input">
                                          <input type="text" id="rent-game-user-id" placeholder="Enter game user id" class="form-control renten-input">
                                    </div>
                                </div>
                                <div class="form-group post-rent--form-group post-rent--form-group-width form-width">
                                  <label for="rent-game-user-id" class=" label-padding post-rent--form-group--label"> Game password</label>
                                    <div class=" post-rent--form-group--input">
                                          <input type="text" id="rent-game-user-id" placeholder="Enter game user id" class="form-control renten-input">
                                    </div>
                                    
                                </div>
                                <ul class="post-rent--form-group-width">
                                        <li>For physical games you need to upload two images of the games as shown on the image.</li>
                                    </ul>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="lend-notice-content--text-right ">
                            <p class="">Finally you need to provide us your consent that you agree with the mentioned terms & conditions set by the GameHub authority & click submit.</p>
                            <p>Once you submit the games it will take 1-2 hours max to approve the games you posted. Once approved other gamers will be able to take your games for rent & you will start earning. Your payment will be provided to you via digital payment methods or via bank transfer.</p>
                            <p>It is the easiest way to make money online don't you think & most importantly you are not only earning money you are also helping out all the gamers in our small community. So what are you waiting for? Post your games for rent today </p>
                            <div class="img-margin">
                                <img src="../assets/img/disk.png" alt="Disk image preview" class="img-fluid">
                                    <img src="../assets/img/cover.png" alt="Cover image preview" class="img-fluid">
                            </div>
                        </div>
                      </div>
                      <div class="col-md-5 mx-auto">
                         <div class="lend-notice-content-btn">
                              <a href="https://www.gamehub.com.bd/profile" class="btn--secondery w-100"><span>Post for lend</span></a>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
   </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        methods: {
            clickProfile() {
                var auth = this.$store.getters.ifAuthenticated;
                if (!auth) {
                    this.$router.push('/login');
                    return
                }
                this.$root.$emit('rentPost');
            },
        },
        created() {
            window.scrollTo(0,0);
        },
    }
</script>

<style scoped>
    fieldset {
        max-width: 100% !important;
    }
</style>
