<template>
  <div class="navbar">
    <v-navigation-drawer permanent width="100%">
      <v-list-item class="nav-user">
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{name}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{email}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <v-list-item link to="/">
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
        <v-list-item link to="/users/1">
          <v-list-item-icon>
            <v-icon>
              fa fa-user
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
        <PostModal/>
        <button @click="logout">ログアウト</button>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  import axios from 'axios'
  import PostModal from "./PostModal.vue";
  export default {
    components: {
      PostModal,
    },
    data () {
      return {
        name: window.localStorage.getItem('name'),
        email: window.localStorage.getItem('uid')
      }
    },
    methods: {

    async logout () {
      try {
        const res = await axios.delete('http://localhost:3000/api/auth/logout', {
          headers: {
            uid: this.email,
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client')
          }
        })

        console.log("ログアウトしました")
        window.localStorage.removeItem('access-token')
        window.localStorage.removeItem('client')
        window.localStorage.removeItem('uid')
        window.localStorage.removeItem('name')

        return res
      } catch (error) {
        console.log({ error })
      }
    }
    }
  }
</script>
<style scoped>
  .navbar{
    height:100vh;
    width:20%;
  }
  @media(max-width:600px){
    .navbar{
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
