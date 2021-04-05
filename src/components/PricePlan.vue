<template>
   <div>
         <div class="pricing-plan">
             <div class="container">
                 <div class="pricing-plan--content d-flex flex-column flex-md-row justify-content-md-center">
                     <div class="pricing-plan--card secondery-border">
                         <div class="pricing-plan--card--header bg-secondery d-flex align-items-center justify-content-center h-48">
                                <h6 class="f-s-20 gil-bold text-uppercase text-black mb-0">THE ELITE</h6>
                            </div>
                         <div class=" pricing-plan--card--main">
                            <div class="pricing-plan--card--price text-center">
                                <h2 class="text-secondery mb-2">3000 taka</h2>
                                <span class="gil-medium f-s-20">(Refundable)</span>
                            </div>
                            <div class="pricing-plan--card--list">
                                <div class="pricing-plan--card--list--item">
                                    <span class="box eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                                <div class="pricing-plan--card--list--item">
                                    <span class="box eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                                <div class="pricing-plan--card--list--item">
                                    <span class="box eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                                <div class="pricing-plan--card--list--item">
                                    <span class="box eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                            </div>
                            <div class="pricing-plan--card--description">
                                <p class="f-s-14 mb-0">
                                    The Elite members need to pay 2999 BDT which allows them to rent games for three months. The amount is refundable unless the member breaks any rules or involves themselves in any fraudulent activity. This type of membership will allow the player to rent unlimited games during the period but they can not possess more than two games at the given period. The elite members will be allowed to rent both physical and digital games.
                                </p>
                            </div>
                            <div class="pricing-plan--card--btn">
                                <a href="#" class="btn--secondery text-uppercase mx-auto"><span>GET THIS</span></a>
                            </div>
                         </div>
                     </div>
                     <!-- Rookie Membership -->
                      <div class="pricing-plan--card gray-header-border">
                         <div class="pricing-plan--card--header gray-header d-flex align-items-center justify-content-center h-48">
                                <h6 class="f-s-20 gil-bold text-uppercase text-black mb-0">THE rookie</h6>
                            </div>
                         <div class=" pricing-plan--card--main">
                            <div class="pricing-plan--card--price text-center">
                                <h2 class="text-secondery mb-2 text-uppercase">free</h2>
                            </div>
                            <div class="pricing-plan--card--list">
                                <div class="pricing-plan--card--list--item">
                                    <span class="box eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                                <div class="pricing-plan--card--list--item">
                                    <span class="box not-eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                                <div class="pricing-plan--card--list--item">
                                    <span class="box not-eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                                <div class="pricing-plan--card--list--item">
                                    <span class="box not-eligible"></span>
                                    <span>Demo text here</span>
                                </div>
                            </div>
                            <div class="pricing-plan--card--description">
                                <p class="f-s-14 mb-0">
                                    The Rookie membership is free. This type of membership allow the player to rent unlimited digital games but they can not possess more than two games at any given period. The rookie members will be able to rent only digital games. The digital version of the games will be delivered to gamers via email. If the members want to rent physical games they need to upgrade to elite membership.
                                </p>
                            </div>
                            <div class="pricing-plan--card--btn">
                            </div>
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
