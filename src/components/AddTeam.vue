<template>
  <div>
    <h2>AddTeam</h2>
    <div class="add-team-container">
      <div class="add-new-team" id="add-new" style="position: absolute; top: 0; max-width: 500px;">
        <form class="add-new-container search-container" @submit.prevent="postData">
          <h2>Add a new team</h2>
          <hr />
          <label for="name-selector">
            <p>Name of Team</p>
          </label>
          <input
            type="text"
            name="name-selector"
            id="name-selector"
            class="date-selector"
            style="border: 1px solid white;"
            v-model="form.name"
          />
          <label for="id-selector">
            <p>Team id</p>
          </label>
          <input
            type="text"
            name="id-selector"
            id="id-selector"
            class="date-selector"
            style="border: 1px solid white;"
            v-model="form.shortName"
          />

          <label for="search-for">
            <p>Description</p>
          </label>
          <textarea
            name="search-for"
            id="search-for"
            placeholder="Search using words which describe the meeting"
            v-model="form.description"
          ></textarea>

          <label for="emails">
            <p>Members</p>
          </label>
          <select name="emails" id="emails" class="date-selector"
        v-model="emailId" @change="emailList(emailId)">
            <option v-for="user in registerdUsers" :key="user.id">{{user.email}}</option>
        </select>
          <input type="submit" value="Add" class="fbutton my-m" />
        </form>
        <label for="add-team-overlay">
          <div class="cross-button"  v-on:click="updateTeams()">
            <router-link :to="{name:'Teams',params:{teamsNew:this.teams}}"><i class="far fa-times-circle"></i></router-link>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>


<script>
// import {addTeam} from '@/components/Teams'
// import Teams from '@/components/Teams'
import {teams} from '@/services/teams.js'
import {addTeam} from '@/services/teams.js'
import {getUsers} from '@/services/meetings'
export default {
  data() {
    return {
      form: {
        name: "Test 2",
        shortName: "test 2",
        description: "hello world 2",
        members: [
          {
            email: "john.doe@example.com"
          },
          {
            email: "jane.doe@example.com"
          }
        ]
      },
      registerdUsers: [],
      emailId: "null",
      teams: []
    };
  },
 
  // components:{
  //   Teams : Teams
  // },
  methods: {
      postData(){
      // this.form.attendees.push({email:'harsh@'})
      console.log(this.form)
      addTeam(this.form).then(data => {
      console.log("Add Teams Page", data);
    })
    },
    emailList(emailId){
      this.emailId = emailId;
      this.form.members.push(this.emailId)
      console.log(this.emailId)
    },
    updateTeams(){
      teams().then(data=>{
            this.teams = data;
            console.log(data);
       })
    }
  },
  created(){
       getUsers().then(data=>{
        this.registerdUsers = data;
        console.log("reges",this.registerdUsers)
    })
  }
};
</script>

<style scoped>
.add-team-container {
  position: absolute;
  width: 100%;
  top: 80px;
  margin: auto;
}
#emails{
    width: 100%; border-radius: 5px; border: 1px solid white;
}

.add-new-team {
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
.cross-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 10px 0 0;
  color: white;
}

.cross-button:hover {
  color: teal;
}

.cross-button:active {
  color: rgb(0, 241, 241);
}

.fas {
  color: rgb(49, 49, 49);
}
.fas:hover {
  color: rgb(102, 102, 102);
}

.fbutton {
  margin: 0;
  background-color: crimson;
  border: 1px solid crimson;
}

@media (max-width: 767px) {
  .teams {
    position: relative;
    display: flex;
    justify-content: space-around;
    /* flex-direction: column; */
    width: 100%;
    flex-wrap: wrap;
    z-index: 0;
  }

  .add-team-container {
    position: fixed;
    width: 90%;
    top: 80px;
    margin: auto;
  }
}

@media (max-width: 450px) {
  .teams {
    position: relative;
    display: flex;
    justify-content: space-around;
    /* flex-direction: column; */
    width: 100%;
    flex-wrap: wrap;
    z-index: 0;
  }

  .add-team-container {
    position: fixed;
    width: 85%;
    top: 80px;
    margin: auto;
  }
}

@media (max-width: 320px) {
  .teams {
    position: relative;
    display: flex;
    justify-content: space-around;
    /* flex-direction: column; */
    width: 100%;
    flex-wrap: wrap;
    z-index: 0;
  }

  .add-team-container {
    position: fixed;
    width: 75%;
    top: 80px;
    margin: auto;
  }
}
</style>
