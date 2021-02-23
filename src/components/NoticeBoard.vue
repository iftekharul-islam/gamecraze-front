<template>
    <div>
       
     
    <!-- Inbox Section -->
    <section class="inbox-section">
        <div class="container">
            <div class="inbox-section--content">
                <div class="inbox-section--content--heading text-center">
                    <h6>Inbox</h6>
                </div>

                <div class="inbox-section--content--according">
                    <div class="card" v-for="(item, index) in notices" :key="index">
                        <div class="inbox-click" @click="changeToggle(index)">Click me</div>
                        <i class="fas fa-envelope mail-icon"></i>
                        <p :class="{ peraToggle: show !== index }">
                            {{ item['description'] }}
                        </p>
                    </div>
                </div>




            
                 <!-- <div class="accordion inbox-according" id="mailbox">
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            
                            </button>
                        </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#mailbox">
                            <span><i class="fas fa-envelope"></i></span>
                        <div class="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus 
                            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum 
                            facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis 
                            scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris 
                            sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            </button>
                        </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#mailbox">
                            <span><i class="fas fa-envelope"></i></span>
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>

    <!-- event results -->
<!--    <section class="event-results">-->
<!--        <div class="container">-->
<!--                <div class="event-results&#45;&#45;img text-center">-->
<!--                    <img src="../assets/img/pubg.png" alt="pubg">-->
<!--                 </div>-->
<!--                 &lt;!&ndash; event-results&#45;&#45;content &ndash;&gt;-->
<!--                 <div class="event-results&#45;&#45;content">-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;heading">-->
<!--                        <h2>ROYAL PASS WINNERS</h2>-->
<!--                    </div>-->
<!--                    <div class="event-results&#45;&#45;content&#45;&#45;row">-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                 </div>-->
<!--                  &lt;!&ndash; event-results&#45;&#45;content &ndash;&gt;-->
<!--                 <div class="event-results&#45;&#45;content">-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;heading">-->
<!--                        <h2>MONTHLY TOP BUYERS</h2>-->
<!--                    </div>-->
<!--                    <div class="event-results&#45;&#45;content&#45;&#45;row">-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                          <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                 </div>-->
<!--                  &lt;!&ndash; event-results&#45;&#45;content &ndash;&gt;-->
<!--                 <div class="event-results&#45;&#45;content">-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;heading">-->
<!--                        <h2>MONTHLY TOP SELLERS</h2>-->
<!--                    </div>-->
<!--                    <div class="event-results&#45;&#45;content&#45;&#45;row">-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                        <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                          <div class="event-results&#45;&#45;content&#45;&#45;row&#45;&#45;box">-->
<!--                            <img src="../assets/img/sss.jpg" alt="player">-->
<!--                            <p>Arlene McCoy</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                 </div>-->
<!--        </div>-->
<!--    </section>-->
       




    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {},
                isToggle: false,
                show: -1,
                notices: {}
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
            this.user = this.$store.state.user
            console.log(this.user, 'user');

            this.$api.get('notice').then(response =>
            {
                console.log("notice");
                console.log(response.data.data);
                this.notices = response.data.data;

            });
        }
    }


</script>
