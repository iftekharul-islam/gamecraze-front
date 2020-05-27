<template>
    <div>
        <!-- sign in  -->
        <section class="sign-in sign-in-bg">
            <div class="container-fluid sign-in-width">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <h3 class="card-title text-center">Sign in</h3>
                            <!-- form -->
                            <form action="#" >
                                <div class="form-group">
                                    <!-- user anme -->
                                    <label for="username1" class="sr-only">User Name</label>
                                    <input type="text" class="form-control" id="username1" value="" placeholder="User Name" required>
                                </div>
                                <!-- password -->
                                <div class="form-group mb-3">
                                    <label for="gamepassword1" class="sr-only">Password</label>
                                    <input type="password" class="form-control" id="gamepassword1" placeholder="Password" required>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="custom-control custom-checkbox">
                                        <input class="custom-control-input" type="checkbox" id="gamecheck1">
                                        <label class="custom-control-label" for="gamecheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <!-- forget password -->
                                    <div class="forget">
                                        <a href="#">Forget Password ?</a>
                                    </div>
                                </div>
                                <!-- sign in button -->
                                <div class="text-center sign-btn pt-5">
                                    <button type="submit" class="btn btn-primary mb-2">Sign in</button>
                                </div>
                                <div class="footer">
                                    <p>Dont't have an account ? <a href="#" class="">Create Account</a> </p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {

    }
</script>