<template>
    <div>
       
     
    <!-- News-story Section -->
    <section class="news-story-section">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="news-story-section--heading">
                        <p>Update</p>
                        <p>January  15, 2021</p>
                        <h2>Get PUBG Royal Pass free every month and play like a rockster</h2>
                        <div class="news-story-section--heading--icon">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="news-story-section--article">
                        <img src="../assets/img/newsroom.png" alt="news story" class="img-fluid w-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum at rutrum non egestas 
                            tempus volutpat enim sodales tempus. In tincidunt est, elementum facilisis sit ipsum. 
                            In metus dolor, aliquet et ac, senectus fames. Aenean maecenas purus, at aliquet ut tortor. 
                            Tempus vitae non praesent vitae quisque ac. Mauris platea lacus, lobortis imperdiet. Elementum 
                            malesuada lacus duis ac. Nibh justo, ac sit quam faucibus. Posuere in a amet pulvinar. Amet, 
                            sed dolor pellentesque neque volutpat tristique pharetra, auctor. Pellentesque purus enim donec amet 
                            consectetur lobortis. Erat tortor proin ut elementum eget sed fermentum, arcu. Nulla mauris convallis pellentesque 
                            faucibus. Molestie sit ut cras metus, sollicitudin orci ac arcu turpis.
                        </p>
                        <h6 class="news-story-section--article--heading">PUBG Royal Pass</h6>
                        <div class="news-story-section--article--display-img">
                            <img src="../assets/img/royalpass.png" alt="royal pass" class="img-fluid w-100">
                            <img src="../assets/img/royalpass.png" alt="royal pass" class="img-fluid w-100">
                        </div>
                         <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum at rutrum non egestas 
                            tempus volutpat enim sodales tempus. In tincidunt est, elementum facilisis sit ipsum. 
                            In metus dolor, aliquet et ac, senectus fames. Aenean maecenas purus, at aliquet ut tortor. 
                            Tempus vitae non praesent vitae quisque ac. Mauris platea lacus, lobortis imperdiet. Elementum 
                            malesuada lacus duis ac. Nibh justo, ac sit quam faucibus. Posuere in a amet pulvinar. Amet, 
                            sed dolor pellentesque neque volutpat tristique pharetra, auctor. Pellentesque purus enim donec amet 
                            consectetur lobortis. Erat tortor proin ut elementum eget sed fermentum, arcu. Nulla mauris convallis pellentesque 
                            faucibus. Molestie sit ut cras metus, sollicitudin orci ac arcu turpis.
                        </p>
                        <img src="../assets/img/royal.png" alt="royal pass" class="img-fluid w-100">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum at rutrum non egestas 
                            tempus volutpat enim sodales tempus. In tincidunt est, elementum facilisis sit ipsum. 
                            In metus dolor, aliquet et ac, senectus fames. Aenean maecenas purus, at aliquet ut tortor. 
                            Tempus vitae non praesent vitae quisque ac. Mauris platea lacus, lobortis imperdiet. Elementum 
                            malesuada lacus duis ac. Nibh justo, ac sit quam faucibus. Posuere in a amet pulvinar. Amet, 
                            sed dolor pellentesque neque volutpat tristique pharetra, auctor. Pellentesque purus enim donec amet 
                            consectetur lobortis. Erat tortor proin ut elementum eget sed fermentum, arcu. Nulla mauris convallis pellentesque 
                            faucibus. Molestie sit ut cras metus, sollicitudin orci ac arcu turpis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- related setion -->
    <section class="related-article-section">
        <div class="container">
            <div class="text-center">
                <h2>Related Articles</h2>
            </div>
            <div class="row">
                 <div class="col-md-4 mb-4">
                    <a href="#" class="newsroom-section--content-box">
                        <div class="newsroom-section--content-box--img">
                            <img src="../assets/img/newsroom-box.png" alt="News box" class="w-100 img-fluid">
                        </div>
                        <div class="newsroom-section--content-box--text">
                            <p>Update</p>
                            <h6>Get PUBG Royal Pass free every month and Play like a Rockster</h6>
                            <p>January  15, 2021</p>
                        </div>
                    </a>
                </div>
                 <div class="col-md-4 mb-4">
                    <a href="#" class="newsroom-section--content-box">
                        <div class="newsroom-section--content-box--img">
                            <img src="../assets/img/newsroom-box.png" alt="News box" class="w-100 img-fluid">
                        </div>
                        <div class="newsroom-section--content-box--text">
                            <p>Update</p>
                            <h6>Get PUBG Royal Pass free every month and Play like a Rockster</h6>
                            <p>January  15, 2021</p>
                        </div>
                    </a>
                </div>
                 <div class="col-md-4 mb-4">
                    <a href="#" class="newsroom-section--content-box">
                        <div class="newsroom-section--content-box--img">
                            <img src="../assets/img/newsroom-box.png" alt="News box" class="w-100 img-fluid">
                        </div>
                        <div class="newsroom-section--content-box--text">
                            <p>Update</p>
                            <h6>Get PUBG Royal Pass free every month and Play like a Rockster</h6>
                            <p>January  15, 2021</p>
                        </div>
                    </a>
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
                user: {},
                isToggle: false
            }
        },
        methods: {
            formattedDate(date) {
                const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                let birthDate = new Date(date)
                return birthDate.getDate() + " " + months[birthDate.getMonth()] + " " + birthDate.getFullYear()
            },
            changeToggle() {
                if (this.isToggle) {
                    this.isToggle = false;
                }
                else {
                    this.isToggle = true;
                }
            }
        },
        created() {
            this.user = this.$store.state.user
            console.log(this.user, 'user');
        }
    }
		

</script>
