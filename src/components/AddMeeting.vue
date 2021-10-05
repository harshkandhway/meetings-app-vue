<template>
  <div>
    <div class="add-new search-for-meeting" id="add-new">
      <form class="add-new-container search-container" @submit.prevent="postData">
        <!-- @submit="postData" method="post" -->
        <h2>Add a new meeting</h2>
        <hr />
        <label for="name">
        <p>Name</p>
        <input type="text" name="name" id="name" class="date-selector" v-model="form.name"/>
        </label>
        <label for="date-selector">
          <p>Date</p>
        <input type="date" name="dateSelector" id="date-selector2" class="date-selector" v-model="form.date"/>
        </label>

        <p>Start time (hh:mm)</p>
        <select name="start-time" id="start-time1" class="time" v-model="form.startTime.hours">
          <option v-for="hour in 24" :key="hour">{{hour}}</option>
        </select>
        <span>:</span>
        <select name="start-time" id="start-time2" class="time" v-model="form.startTime.minutes">
          <option v-for="minute in 60" :key="minute">{{minute}}</option>
        </select>

        <p>End Time (hh:mm)</p>
        <select name="start-time" id="start-time1" class="time" v-model="form.endTime.hours">
          <option v-for="hour in 24" :key="hour">{{hour}}</option>
        </select>
        <span>:</span>
        <select name="start-time" id="start-time2" class="time" v-model="form.endTime.minutes">
          <option v-for="minute in 60" :key="minute">{{minute}}</option>
        </select>
        <label for="search-for1">
          <p>Description</p>
        </label>
        <textarea name="search-for1" id="search-for1" placeholder="What is the agenda of the meeting?" v-model="form.description"/>
        <label for="emails">
          <p>EmailIDs of attendees, or team's short</p>
        </label>
        <select name="emails" id="emails" class="emails"
        v-model="emailId" @change="emailList(emailId)">
            <!-- <option value="---Select Attendees---" selected>---Select Attendees---</option> -->
            <option v-for="user in registerdUsers" :key="user.id">{{user.email}}</option>
        </select>

        <!-- <select name="emails" id="emails" class="emails" placeholder="john@example.com, @annual-day, mark@example.com" 
        v-for="(attendee,index) in attendees" :key="index" v-model="form.attendees[index].email">
            <option v-for="user in registerdUsers" :key="user.id">{{user.email}}</option>
        </select> -->
        <div class="emails-overlay">
        <span class="overlay" v-for="(attendee,index) in form.attendees" :key="index">{{form.attendees[index]}} &#32;</span>
        </div>
        <input type="submit" value="Add meeting" class="fbutton my-m"/>
      </form>
    </div>
  </div>
</template>

<script>
import {addMeetings, getUsers } from "@/services/meetings.js";
// 
import axios from 'axios'
import moment from 'moment';
import token from '@/config' 
axios.defaults.headers.common['Authorization'] = token;
export default {
  data() {
    return {
      form: {
        name: "Vue Workshop 16",
        description: "Web Dev",
        date: moment().format('YYYY-MM-DD'),
        startTime: { hours: 10, minutes: 50 },
        endTime: { hours: 12, minutes: 30},
        attendees: []
      },
      registerdUsers: [],
      emailId: "---Select Attendees---"
    };
  },

  methods:{
    postData(){
      // this.form.attendees.push({email:'harsh@'})
      console.log(this.form)
      addMeetings(this.form).then(data => {
        alert("Meeting Added, Thank You!")
      console.log("Add Meetings page", data);
      this.form.attendees=[]
    })
    },
    emailList(emailId){
      this.emailId = emailId;
      this.form.attendees.push(this.emailId)
      console.log(this.emailId)
    }
  },

  created() {
    getUsers().then(data=>{
        this.registerdUsers = data;
        console.log("reges",this.registerdUsers)
    })
  }
};
</script>

<style scoped>
.date-selector {
  border: 1px solid white;
}
.time {
  height: 35px;
  width: 50px;
  font-weight: 800;
  font-size: large;
  border-radius: 5px;
}
.emails {
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid white;
}

.emails-overlay{
  
  margin: 20px 0 0 0; 
  
}
.overlay{
  margin: 20px 10px 0 0; 
  padding: 5px;
  color: black;
  border-radius: 10px;
  background: white;
}
</style>