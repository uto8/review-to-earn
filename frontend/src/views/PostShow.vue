<template>
  <v-app>
    <div class="homeContainer">
      <NavBar/>
      <TimeLine/>
      <RightBar/>
    </div>
  </v-app>
</template>
<script>
  import NavBar from "../components/NavBar.vue";
  import TimeLine from "../components/TimeLine.vue";
  import RightBar from "../components/RightBar.vue";
  export default {
    components: {
      NavBar,
      TimeLine,
      RightBar
    }
  }
</script>
<style scoped>
  div.homeContainer{
    display: flex;
  }
</style>
