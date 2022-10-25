<template>
  <v-app>
    <NavBar/>
    <div class="container">
      <router-link to="/welcome">ログイン</router-link>
    </div>
  </v-app>
</template>
<script>
  import NavBar from "../components/NavBar.vue";
  export default {
    components: {
      NavBar
    }
  }
</script>
<style scoped>
  div.container{
    background:#2D579A;
    color:#fff;
  }
</style>
