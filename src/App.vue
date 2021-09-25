<template>
  <div id="app">
    <meetings-nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import MeetingsNav from './components/MeetingsNav.vue'


export default {
  name: 'App',
  components: {
    MeetingsNav,
    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Cormorant');
#app {
  font-family: 'Cormorant', serif;
}
</style>
