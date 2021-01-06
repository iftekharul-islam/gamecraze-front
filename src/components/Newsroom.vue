<template>
    <div>
       
     
    <!-- Newsroom Section -->
    <section class="newsroom-section">
        <div class="text-center newsroom-section--heading">
                <h2>NEWSROOM</h2>
            </div>
        <div class="container">
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="trending-news position-relative">
                        <a href="#" class="w-100 h-100 d-flex align-items-end">
                            <img src="../assets/img/newsroom.png" alt="newsroom" class="img-fluid w-100 position-absolute">
                            <div class="trending-news--text-content">
                                <p>Feature</p>
                                <h2>Get PUBG Royal Pass free every month</h2>
                                <p class="newsroom-date">January  15, 2021</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- row -->
            <div class="row">
                <div class="col-md-6 mb-4">
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
                 <div class="col-md-6 mb-4">
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
             <!-- row -->
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
            <div class="view-all-btn newsroom-pagination mt-5">
                <!-- <a href="#" class="btn--secondery m-auto"><span>VIEW ALL</span></a> -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                        </a>
                        </li>
                    </ul>
                </nav>
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
