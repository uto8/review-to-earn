<template>
  <v-card>
    <v-navigation-drawer permanent width="100%">
      <v-list-item class="nav-user">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <router-link to="/users/1">{{name}}</router-link>
          </v-list-item-title>
          <v-list-item-subtitle>
            <router-link to="/users">{{email}}</router-link>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <v-list-item link>
          <v-list-item-icon>
            <v-icon>fa-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-search</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Search</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-bell</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Notification</v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>fas fa-envelope</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Message</v-list-item-title>
        </v-list-item>
        <v-btn
            color="primary"
            elevation="1"
            rounded
          >
          Tweet
        </v-btn>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        name: window.localStorage.getItem('name'),
        email: window.localStorage.getItem('uid')
      }
    }
  }
</script>
<style scoped>
  .v-card{
    height:100vh;
    width:400px;
  }
  @media(max-width:600px){
    .v-card{
      height:auto;
      width:100%;
      position:fixed;
      bottom:0;
    }
    .v-list{
      display: flex;
      justify-content: space-between;
    }
    .v-list-item__title{
      display: none;
    }
    .v-btn{
      display: none;
    }
    .v-list-item__icon{
      margin:auto;
    }
    .nav-user{
      display: none;
    }
  }
</style>
