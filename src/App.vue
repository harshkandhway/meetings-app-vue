<template>
  <div id="app">
    <meetings-nav/>
    <meetings-calendar/>
  </div>
</template>

<script>
import MeetingsNav from './components/MeetingsNav.vue'
import MeetingsCalendar from './components/MeetingsCalendar.vue'

export default {
  name: 'App',
  components: {
    MeetingsNav,
    MeetingsCalendar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cormorant');
#app {
  font-family: 'Cormorant', serif;
}
</style>
