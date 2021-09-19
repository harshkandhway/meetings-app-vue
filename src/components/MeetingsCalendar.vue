<template>
  
    <div class="container">
      <h1>Calendar</h1>
      <hr />
      <div class="container-date">
        <div>
          <h2>12 September 2020</h2>
          <h3>Saturday</h3>
        </div>
        <input type="date" name="fdate" id="fdate" />
      </div>
      <div class="calendar">
        <div>
          <div class="calendar-hours" v-for="calendar in 24" :key="calendar">
            <p>{{calendar}}</p>
          </div>
          
        </div>
        <div class="meetings-container">
          <p>Project Kickoff</p>
          <hr />
          <p>Attendees : mark@example.com, jane@example.com</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MeetingsCalendar',
  // props: {
  //   msg: String
  // }
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