<template>
    <div>
        <div class="container">
            <h1>Teams</h1>
            <hr />
            <div class="teams">
                <div class="team-container" v-for="team in teams" :key="team.id">
                    <div class="matching-container">
                        <h2 style="margin: 0;">{{team.name}}</h2>
                        <p style="margin: 10px 0;font-weight: 800;">@{{team.shortName}}</p>
                        <p>{{team.description}}</p>
                        <input type="button" value="Excuse yourself" class="fbutton my-m">
                        <hr />
                        <p><b>Members</b>: <span v-for="attendee in team.members" :key="attendee.id">{{attendee.email}}&#32;</span></p>
                        <div class="select-member" style="height: 30px; margin: 0; padding: 5px;">
                            <input type="number" name="member" id="member" placeholder="Select member">
                            <button style="height: inherit; border-radius: 5px;">Add</button>
                        </div>
                    </div>
                </div>
                <label for="add-team-overlay">
                    <div class="team-container">
                        <div class="matching-container">
                            <i class="fas fa-plus fa-2x"></i>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>


<script>
import {teams} from '@/services/teams.js'
export default {
   data(){
    return{
        teams: []
    }

   },
   created(){
       teams().then(data=>{
           this.teams = data;
           console.log(data);
       })
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

.add-team-container{
    display: none;
    position: absolute;
    width: 100%;
    top: 80px;
    margin: auto;
}


.add-new-team{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    display: inline-flex;
    background-color: darkslategrey;
    height: fit-content;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
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
    min-height: 350px;
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
