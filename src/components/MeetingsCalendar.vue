<template>
  
    <div class="container">
      <h1>Calendar</h1>
      <hr />
      <div class="container-date">
        <div>
          <h2>{{date1}}</h2>
          <h3>{{day}}</h3>
        </div>
        <input type="date" name="fdate" id="fdate" v-model="date" v-on:input="calendar(date)"/>
      </div>
      <div class="calendar">
        <div>
          <div class="calendar-hours" v-for="hour in 24" :key="hour">
            <p>{{hour}}</p>
          </div>
          
        </div>
        <div class="meetings-container" v-for="meeting in meetings" :key="meeting.id">
          <p>{{meeting.name}}</p>
          <hr />
          <p>Attendees : <span v-for="attendee in meeting.attendees" :key="attendee.id">{{attendee.email}}  </span></p>
        </div>
      </div>
    </div>
</template>

<script>
import {calendar} from "@/services/calendar.js";
// import {login} from "@/services/LoginRequest.js";
import moment from 'moment';

export default {
  name: 'MeetingsCalendar',

  data(){
    return{
    meetings: [],
    date1: moment().format('Do MMMM YYYY'),
    date: moment().format('YYYY-MM-DD'), 
    day : moment().format('dddd')
    }
  },
  methods:{
    calendar(date){
      this.date1 = date;
      this.date1 = moment(date).format('Do MMMM YYYY')
      this.day = moment(date).format('dddd')
      this.date=date;
      calendar(this.date).then(data=>{
      this.meetings = data
      return data
    })
    }
  },

  created(){
    calendar(this.date).then(data=>{
      console.log("CalanerPage",data)
      this.meetings = data
      return data
    })
    
  },

}
</script>

<style scoped>
/* *{
    box-sizing: border-box;
} */

.container{
    margin: 0 85px;
    z-index: 0;
}

.container-date{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

h2, h3{
    margin: 8px 0;
}

#fdate{
    margin-top: 8px;
}

.calendar-hours{
    height: 50px;
    margin: 2px 0;
    background-color: darkgrey;
}

.calendar-hours p{
    margin: 0 -15px;
    padding: 0;
}

.calendar{
    position: relative;
}

.meetings-container{
    display: flex;
    flex-direction: column;
    position:absolute;
    height: 50px;
    background-color: darkslategrey;
    top: 300px;
    width: 98%;
    transform: translate(1%, 0);
    /* padding: 5px 0; */
}

.meetings-container hr{
    width: 99%;
    margin: 0 5px;
    padding: 0;
}

.meetings-container p{
    font-size: smaller;
    line-height: 1.5px;
    margin: 0 5px;
    margin-top: auto;
    margin-bottom: auto;
    color: lightgray;
}
</style>