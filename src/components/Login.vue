<template>
    <div class="body">
        <h1 class="welcome">Welcome to Meetings App</h1>
        <Signup></Signup>
    <!-- <div class="my-m container">
        <div class="sign-in-container">
            <h1>Sign in</h1>
            <div class="sign-in-form">
                <form @submit.prevent="signIn">
                    <input type="email" name="femail" id="femail" placeholder="Email" class="fdetail" v-model="form.email" autocomplete="on">
                    <input type="password" name="fpassword" id="fpassword" placeholder="Password" class="fdetail" v-model="form.password" autocomplete="on">
                    <a href="#" class="forget-pass my-s">Forgot your password ?</a>
                    <input type="submit" value="SIGN IN" class="fbutton my-m">
                </form>
            </div>
        </div>

        <div class="suc sign-up-container">
            <h1>Sign Up</h1>
            <div class="sign-up-form">
                <form action="#">
                    <input type="text" name="fname" placeholder="Name" class="fdetail">
                    <input type="email" name="femail" class="fdetail" placeholder="Email">
                    <input type="password" name="fpassword" class="fdetail" placeholder="Password" autocomplete="on">
                    <input type="password" name="fconfirm" class="fdetail" placeholder="Confirm Password" autocomplete="on">
                    <a href="#" class="forget-pass my-m">Forgot your password</a>
                    <input type="button" value="SIGN UP" class="fbutton my-m">
                </form>
            </div>
        </div> -->
        <!-- <div class="sign_in overlay">
            <router-link to="/signup">
                    <input type="button" value="SIGN UP" class="fbutton overlay-button signup-overlay-button">
            </router-link>
        </div> -->
        <!-- <div class="sign_up overlay" style="display: none;">
            <a href="index.html">
                <form action="#">
                    <input type="button" value="SIGN IN" class="fbutton overlay-button">
            </a>
            </form>
        </div> -->
    <!-- </div> -->
    </div>
</template>


<script>
// import {login} from "@/services/LoginRequest.js"
// import AppConfig from "@/config.js"
// import {AppConf} from "@/config.js"
import Signup from '@/components/Signup.vue'

export default {
    components: {
    Signup,
  },
    }
</script>

<style scoped>

.body {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    font-family: 'Cormorant', serif;
    background: linear-gradient(to right, #49a09d, #5f2c82);
    width: 100%;
    height: 100vh;
}
.welcome{
    color: white;
}
</style>
