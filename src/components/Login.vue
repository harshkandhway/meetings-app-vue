<template>
    <div class="body">
        <h1 class="welcome">Welcome to Meetings App</h1>
    <div class="my-m container">
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
        </div>
        <div class="sign_in overlay">
            <a href="signup.html">
                    <input type="button" value="SIGN UP" class="fbutton overlay-button signup-overlay-button">
            </a>
        </div>
        <!-- <div class="sign_up overlay" style="display: none;">
            <a href="index.html">
                <form action="#">
                    <input type="button" value="SIGN IN" class="fbutton overlay-button">
            </a>
            </form>
        </div> -->
    </div>
    </div>
</template>


<script>
import {login} from "@/services/LoginRequest.js"
// import AppConfig from "@/config.js"
// import {AppConf} from "@/config.js"
export default {
    data(){
        return{
            // authenticated: false,
            form:{
                email: "",
                password: ""
            },
            token: '',
            formIsValid: true
        }
    },

    methods:{
        authentication(){
            this.authenticated=true
            return this.authenticated
        },
        signIn(){
            this.formIsValid = true;
            if(this.email === ''|| !this.email.includes('@')||this.password.length<8){
                this.formIsValid=false;
                return
            }
            login(this.form).then(data=>{
                 this.token = data.token;
                    console.log("token inside login method",this.token)
                    localStorage.setItem('AppConfig.token',this.token)
                    this.$router.push({name:"MeetingsCalendar"})
                    // localStorage.removeItem('AppConfig.token')
                    // AppConf(this.token)
                //  console.log(AppConfig.token)
            }).catch(error=>error)
            

        }
    }
    
    
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

button{
    outline: none;
}

input{
    outline: none;
}
.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 290px;
    max-width: 100%;
    min-height: 550px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
}

.container a{
    text-decoration: none;
}



.overlay {
    position: absolute;
    background-color: teal;
    width: 384px;
    min-height: 100px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.fdetail {
    margin: 8px;
    padding: 10px 5px;
    width: 90%;
}

.sic {
    display: none;
    margin-right: auto;
    margin-left: auto;
}

.suc {
    display: none;
    margin-left: auto;
    margin-right: auto;
}

.fbutton {
    border-radius: 20px;
    border: 1px solid #5f2c82;
    background: #5f2c82;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 30px;
    letter-spacing: 2px;
    color: white;
    /* margin-top: 40px; */
}

.fbutton:hover {
    background-color: #472061;
}

.fbutton:active {
    background-color: #7e3baa;
}

.forget-pass {
    font-weight: lighter;
    font-size: medium;
}

@media(min-width:768px){
    .container{
    width: 750px;
    max-width: 100%;
    min-height: 480px;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
}
.fdetail {
    margin: 8px;
    padding: 12px 15px;
    width: 100%;
}
.overlay {
    width: 384px;
    min-height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.sign_in{
    right: 0;
}
.sign_up{
    left: 0;
}

.sign-in-container{
    left: 0;
    margin-right: auto;
    margin-left: auto;
}
.sic {
    display: initial;
    left: 0;
    margin-right: auto;
    margin-left: auto;
}

.sign-up-container{
    
    right: 0;
    margin-left: auto;
    margin-right: auto;
}
.suc {
    display: initial;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}
}
</style>
