<template>
    <div>
        <div class="container">
            <h1>Teams</h1>
            <hr />
            <div class="teams">
                <div class="team-container" v-for="(team,index) in teams" :key="index">
                    <div class="matching-container">
                        <h2 style="margin: 0;">{{team.name}}</h2>
                        <p style="margin: 10px 0;font-weight: 800;">@{{team.shortName}}</p>
                        <p>{{team.description}}</p>
                        <input type="button" value="Excuse yourself" class="fbutton my-m" @click="excuse(team._id)">
                        <hr />
                        <p><b>Members</b>: <span v-for="attendee in team.members" :key="attendee.id">{{attendee.email}}&#32;</span></p>
                        <div class="select-member" style="height: 30px; margin: 0; padding: 5px;">
                            <select
                                name="member"
                                id="member"
                                class="emails"
                                placeholder="Select member"
                                v-model="emailId[index]"
                                @change="emailList(emailId)"
                            >
                                <option v-for="(user,index) in registerdUsers" :key="index">{{user.email}}</option>
                            </select>
                            <button class="emails"  @click="addAttendee(team._id,emailList(emailId[index]))">Add</button>
                        </div>
                    </div>
                </div>
                    <div class="team-container">
                        <div class="matching-container">
                            <router-link to="/teams/addteam" v-on:click="addTeam()">
                            <i class="fas fa-plus fa-2x"></i>
                            </router-link>
                        </div>
                    </div>
                
            </div>
            <!-- <AddTeam v-if="add"></AddTeam> -->
            <router-view v-if="addTeam()"></router-view>
        </div>
    </div>
</template>


<script>
// import AddTeam from '@/components/AddTeam'
import {teams} from '@/services/teams.js'
import {getUsers} from '@/services/meetings'
import axios from 'axios'
export default {
    name: 'Teams',
    props:{
        teamsNew:{
            type: Array,
            default:()=>[]
        }
    },
    // components:{
    //     AddTeam
    // },
   data(){
    return{
        teams: [],
        temp:[],
        registerdUsers:[],
        emailId: [],
        add: false,
        // newUpdate1: 444
    }
   },
   methods:{
      excuse(id, index) {
        //   this.newUpdate1 = this.newUpdate;
          console.log("new update true or false",this.teamsNew)
      this.temp[index] = false;
      console.log("temp array", this.temp);
      return axios
        .patch(
          `https://mymeetingsapp.herokuapp.com/api/teams/${id}?action=remove_member`
        )
        .then(res1 => {
          teams().then(data => {
            this.teams = data;
            let size = this.teams.length;
            console.log(res1.data)
            for (let i = 0; i < size; i++) {
              this.temp[i] = true;
            }
            return data;
          });
        })
        .catch(error => error);
    },
    addAttendee(id,userId){
        console.log("addAttendee meeting id",id)
        console.log("addAttendee email id",userId)
        this.emailId1 = this.emailId
        return axios.patch(`https://mymeetingsapp.herokuapp.com/api/teams/${id}?action=add_member&userId=${userId}`)
        .then(res=>{
            console.log(res.data)
            alert("User Added")
            teams().then(data=>{
            this.teams = data;
            console.log(data);
            let size = this.teams.length;
            for (let i = 0; i < size; i++) {
              this.temp[i] = true;
            }
        })
        })
        .catch(error => error);
    },
     emailList(emailId){
        console.log("emailList",emailId)
        for(let i=0;i<this.registerdUsers.length;i++){
            if(emailId==this.registerdUsers[i].email){
                let userId = this.registerdUsers[i]._id;
                console.log("userId (_id)",userId)
                return userId;
            }
        }
    },
    addTeam(){
        this.add = true;
        return this.add;
    }
   },
   created(){
       teams().then(data=>{
            this.teams = data;
            console.log(data);
            let size = this.teams.length;
            for (let i = 0; i < size; i++) {
              this.temp[i] = true;
            }
       }),
        getUsers().then(data => {
        this.registerdUsers = data;
        console.log("reges", this.registerdUsers);
        })
        
        // this.add = false;
   }
    
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}

body{
    height: 100%;
}

.container{
    position: relative;
    z-index: 0;
}

.teams{
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    z-index: 0;
    flex-direction: row;
    
}

.add-team-overlay:checked + .add-team-container{
    display: block;
}

.team-container{

    /* flex-wrap: wrap; */
    display: inline-flex;
    /* height: fit-content; */
    /* margin-top: 10px; */
    border: 2px solid lightgray;
    border-radius: 5px;
    flex-direction: column;
    /* margin-bottom: 10px; */
    flex-basis: 32%;
    margin: 20px;
    min-width: 330px;
    max-width: 330px;
    justify-content: center;
    align-items: center;
    min-height: 370px;
}



.cross-button{
    position: absolute; 
    top: 0; 
    right: 0; 
    margin: 10px 10px 0 0; 
    color: white;
}

.cross-button:hover{
    color: teal;
}

.cross-button:active{
    color: rgb(0, 241, 241);
}

.fas{
   color: rgb(49, 49, 49);
}
.fas:hover{
    color: rgb(102, 102, 102);
}

.fbutton{
    margin: 0;background-color: crimson; border: 1px solid crimson
}
#member{
    height: inherit; 
    border-radius: 5px;
    border: 1px solid lightgray;
    }

@media(max-width:1000px){
    .teams{
        position: relative;
        display: flex;
        justify-content: space-around;
        /* flex-direction: column; */
        width: 100%;
        flex-wrap: wrap;
        z-index: 0;
    }
}

@media(max-width:767px){
    .teams{
        position: relative;
        display: flex;
        justify-content: space-around;
        /* flex-direction: column; */
        width: 100%;
        flex-wrap: wrap;
        z-index: 0;
    }

    .add-team-container{
        display: none;
        position: fixed;
        width: 90%;
        top: 80px;
        margin: auto;
    }
}

@media(max-width: 450px){
    .teams{
        position: relative;
        display: flex;
        justify-content: space-around;
        /* flex-direction: column; */
        width: 100%;
        flex-wrap: wrap;
        z-index: 0;
    }

    .add-team-container{
        display: none;
        position: fixed;
        width: 85%;
        top: 80px;
        margin: auto;
    }
}

@media(max-width: 320px){
    .teams{
        position: relative;
        display: flex;
        justify-content: space-around;
        /* flex-direction: column; */
        width: 100%;
        flex-wrap: wrap;
        z-index: 0;
    }

    .add-team-container{
        display: none;
        position: fixed;
        width: 75%;
        top: 80px;
        margin: auto;
    }
}
</style>
