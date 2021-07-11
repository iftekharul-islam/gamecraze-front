<template>
    <div>
        <section class="gamebazar-banner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="max-488">
                            <h1 class="f-s-48 text-secondery">Online platform for buying & selling games & accessories</h1>
                            <router-link class="router_link border-1 border-secondery-opa-25 mb-3 text-secondery mt-a-4 py-2 pl-a-6 pr-a-6 d-inline-block br-4" to="/profile" @click.native="onMenuItemClick(); clickProfile()">Sell post</router-link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="gamebazar-banner__content d-grid grid-gap-16 justify-content-md-end">
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item">
                              <div class=" h-100">
                                   <img src="../assets/img/gamebazar1.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline">Controller</span>
                                  <span class="gil-bold f-s-20 text-white underline">Controller</span>
                                  <span class="gil-bold f-s-20 text-white underline">Controller</span>
                              </div>
                            </a>
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item">
                              <div class=" h-100">
                                   <img src="../assets/img/gamebazar2.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline mt-auto">Controller</span>
                              </div>
                            </a>
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item">
                              <div class=" h-100">
                                   <img src="../assets/img/gamebazar2.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline mt-auto">Controller</span>
                              </div>
                            </a>
                            <a href="#" class="d-block position-relative overflow-hidden gamebazar-banner__content__item">
                              <div class=" h-100">
                                   <img src="../assets/img/gamebazar3.png" class="img-fluid h-100" alt="Gamebazar image">
                              </div>
                              <div class="gamebazar-tag position-absolute">
                                  <span class="gil-bold f-s-20 text-white underline mt-auto">Controller</span>
                              </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- New post -->
        <section class="new-post pb-a-11 pt-a-9">
               <!-- search bar -->
            <div class="container">
                <div class="col-md-8 mx-auto py-5">
                    <div class="gamebazar-search">
                        <div class="d-flex">
                            <div class="position-relative">
                                <a class="bg-secondery-gradient d-flex align-items-center justify-content-center h-100 px-4 br-4 primary-text primary-text-hover dropdown-toggle br-t-r-0 br-b-r-0 border-1 black-border border-r-white-25" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    All product
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <div class="search-append d-flex w-75 align-items-center position-relative border-1 black-border border-l-white-25 br-4 br-t-l-0 br-b-l-0 overflow-hidden">
                                <input type="search" class="h-100 bg-white-25 border-0">
                                <div class="search-icon pointer position-absolute right-10">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M6.84199 13.9454C8.42078 13.9454 9.87214 13.392 11.0301 12.4742L14.7898 16.3057L15.9991 15.0733L12.2395 11.2418C13.1409 10.0608 13.684 8.58168 13.684 6.97272C13.684 3.12814 10.6145 0 6.84199 0C3.06949 0 0 3.12814 0 6.97272C0 10.8173 3.06949 13.9454 6.84199 13.9454ZM6.84199 1.74318C9.67201 1.74318 11.9735 4.08863 11.9735 6.97272C11.9735 9.85681 9.67201 12.2023 6.84199 12.2023C4.01197 12.2023 1.7105 9.85681 1.7105 6.97272C1.7105 4.08863 4.01197 1.74318 6.84199 1.74318Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <h3 class="f-s-24 gil-bold text-white mb-a-4">All new post</h3>
                <div class="d-grid grid-sm-cols-2 grid-md-cols-3 grid-lg-cols-4 grid-xl-cols-5 grid-gap-16 grid-gap-md-30 gamebazar-post">
                    <router-link to="/sell-posts" >
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </router-link>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="text-center mt-5">
                    <a href="#" class="border-1 border-secondery-opa-25 text-secondery py-2 pl-a-6 pr-a-6 d-inline-block br-4">All post</a>
                </div>
            </div>
        </section>
         <!-- Play station sell post -->
        <section class="new-post pb-a-11">
            <div class="container">
                <h3 class="f-s-24 gil-bold text-white mb-a-4">Play station sell post</h3>
                <div class="d-grid grid-sm-cols-2 grid-md-cols-3 grid-lg-cols-4 grid-xl-cols-5 grid-gap-16 grid-gap-md-30 gamebazar-post">
                    <router-link to="/sell-posts">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </router-link>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="text-center mt-5">
                    <a href="#" class="border-1 border-secondery-opa-25 text-secondery py-2 pl-a-6 pr-a-6 d-inline-block br-4">All post</a>
                </div>
            </div>
        </section>
         <!-- Controller sell post -->
        <section class="new-post pb-a-11">
            <div class="container">
                <h3 class="f-s-24 gil-bold text-white mb-a-4">Controller sell post</h3>
                <div class="d-grid grid-sm-cols-2 grid-md-cols-3 grid-lg-cols-4 grid-xl-cols-5 grid-gap-16 grid-gap-md-30 gamebazar-post">
                    <router-link to="/sell-posts">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </router-link>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="product-img position-relative">
                            <img src="../assets/img/play.png" class="img-fluid w-100" alt="Gamebazar image">
                            <span class="position-absolute top-0 left-0 bg-gamebazar-badge br-b-r-5 py-1 px-3 text-white">New</span>
                            <span class="position-absolute bottom-0 right-0 bg-secondery br-t-l-5 py-1 px-3 primary-text gil-medium">$123</span>
                        </div>
                        <p class="gil-bold mb-4 mt-a-4 text-white">Playstation 4 Slim</p>
                        <p class="mb-4 text-white">Used 1.5 years</p>
                        <div class="d-flex align-items-center text-secondery">
                            <p class="mb-0">Details</p>
                            <div class="gamebazar-post__arrow">
                                <svg class="" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1886 0.453195C11.8766 0.621512 11.6821 0.941571 11.6821 1.28968L11.6821 6.71028L0.97906 6.71028C0.438618 6.71028 6.87254e-07 7.13872 6.41103e-07 7.66663C5.94952e-07 8.19454 0.438618 8.62298 0.97906 8.62298L11.6821 8.62298L11.6821 14.0436C11.6821 14.393 11.8766 14.713 12.1886 14.8801C12.5006 15.0497 12.8818 15.0382 13.1834 14.8533L23.5431 8.47634C23.8277 8.30037 24 7.99562 24 7.66663C24 7.33765 23.8277 7.03289 23.5431 6.85692L13.1834 0.479973C13.0241 0.383062 12.8426 0.333332 12.6612 0.333332C12.4993 0.333332 12.3361 0.374136 12.1886 0.453195Z" fill="#FFD715"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="text-center mt-5">
                    <a href="#" class="border-1 border-secondery-opa-25 text-secondery py-2 pl-a-6 pr-a-6 d-inline-block br-4">All post</a>
                </div>
            </div>
        </section>
        <!-- sell post -->
        <section class="accessories-sell-post position-relative">
            <div class="container">
              <div class="row">
                    <div class="col-md-7 col-lg-6">
                        <div class="mr-a-md-10 mb-3 mb-md-0">
                            <h1 class="f-s-28 f-s-md-48 max-600 mb-a-5">
                                Do you have games and accessories?
                                <span class="text-secondery">Want to sell?</span>
                                Then <span class="text-secondery">advertise</span> today
                                And sell.
                            </h1>
                            <p class="max-500 opa-8 text-white"> Gamebazar is giving you a golden opportunity to sell games 
                                and game accessories. Advertise and sell new 
                                and old games and accessories here.</p>
                                <a href="#" class="bg-secondery-gradient d-inline-block gil-bold py-2 px-5 primary-text primary-text-hover br-4">Create ads</a>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-6 position-initial  pr-md-0">
                        <div class="accessories-sellpost position-xl-absolute right-0 top-0">
                                <img src="../assets/img/gamehome.png" class="img-fluid w-100" alt="Gamebazar image">
                        </div>
                    </div>
              </div>
            </div>
        </section>
          <!-- sell post -->
        <section class="accessories-sell-post position-relative">
            <div class="container">
               <div class="row accessories-sell-post__row">
                    <div class="col-md-5 col-lg-6 position-initial pl-md-0">
                        <div class="accessories-sellpost position-xl-absolute left-0 top-0 ">
                            <img src="../assets/img/gamehome.png" class="img-fluid w-100" alt="Gamebazar image">
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-6 ml-auto">
                        <div class="ml-a-md-10 mb-3 mb-md-0">
                            <h1 class="f-s-28 f-s-md-48 max-600 mb-a-5">
                                <span class="text-secondery">Renting and renting</span> games
                                The popular medium is GameHub
                            </h1>
                            <p class="max-500 opa-8 text-white"> Gamebazar is giving you a golden opportunity to sell games 
                                and game accessories. Advertise and sell new 
                                and old games and accessories here.</p>
                                <a href="#" class="bg-secondery-gradient d-inline-block gil-bold py-2 px-5 primary-text primary-text-hover br-4">Browse gamehub</a>
                        </div>
                    </div>
               </div>
            </div>
        </section>
        <!--Current Popular -->
        <section class="related-game-section current-popular" id="related-game">
            <div class="container">
                 <h3 class="f-s-24 gil-bold text-white mb-a-4">Current Popular Games at GameHub:</h3>
                <!-- new carousel -->
              <div class="position-relative">
                <carousel v-if ="Loadedarticles"
                          :autoplay ="false"
                          :loop ="true"
                          :center ="true"
                          :nav ="false"
                          :dots ="true"
                          :margin ="32"
                          :stagePadding ="0"
                          :responsive="{ 0:{items:1, stagePadding:0, center:false,},
                                600:{items:2, stagePadding:0, center:false,},
                                1000:{items:3, stagePadding:0,},
                                1400:{items:4, stagePadding:0, center:false,}}">
                  <template slot="prev"><div class="vue-owl-nav vue-owl-nav-left"><button class="owl-prev z-index-9"><span class="prev"><i class="fas fa-arrow-left arrow"></i></span> </button> </div></template>

                  <template slot="next"><div class="vue-owl-nav vue-owl-nav-right"><button class="owl-next z-index-9"><span class="next"><i class="fas fa-arrow-right arrow"></i></span></button></div></template>

                  <div class="item"  v-for="(article, index) in articles" :key="index">
                    <router-link to="/" class="games-categories-section--games--game-card-box game-card-hover-outer">
                        <div class="game-card game-card-hover-inner">
                            <div class="display-image" href="#">
                                <!-- <img :src="rent.game.data.poster_url" :alt="rent.game.data.name" class="img-fluid"> -->
                                <img src="../assets/img/category/fifa20.jpg" class="img-fluid w-100" alt="Gamebazar image">
                            </div>
                            <div class="game-card--details">
                                <div> <h6>Fif 2020</h6></div>
                                <div class="d-flex flex-wrap game-card--category">
                                    <span >Action<span class="mr-2">, </span></span>
                                </div>
                                <div class="game-card-platform d-flex justify-content-between align-items-center mt-3">

                                    <div class="game-card--details--platforms"><a href="javascript:void(0)"><img src="../assets/img/ps4-white.png" class="img-fluid w-100" alt="ps4"> </a></div>

                                    <span class="game-rating">95</span>
                                </div>
                            </div>

                        </div>
                    </router-link>
                  </div>
                </carousel>
              </div>
              <div class="text-center mt-5">
                    <a href="#" class="border-1 border-secondery-opa-25 text-secondery py-2 pl-a-6 pr-a-6 d-inline-block br-4">All games</a>
              </div>
            </div>
        </section>
    </div>
</template>

<script>
   import carousel from 'vue-owl-carousel';
     export default {
          name: 'GamebazarHome',
          props: ['slug'],
          components: { carousel },
        data() {
          return {
            articles: [1, 2, 3, 4],
            Loadedarticles: true,
            relatedGames: [],
            loadedRelated: false,
          }
        },
        created() {
            window.scrollTo(0,0);
        },
        
    }
</script>
