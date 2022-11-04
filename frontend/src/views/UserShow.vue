<template>
  <v-app>
    <div class="rightbarContainer">
      <NavBar/>
      <div class="rightbarUser">
        <div class="rightbarUserProfile">
          <div class="profileCover">
            <img src="@/assets/img/iwati.jpeg" alt="" class='profileCoverImg'>
            <img src="@/assets/img/iwati.jpeg" alt="" class='profileUserImg'>
          </div>
          <div class="profileInfo">
            <h4 class='profileInfoName'>{{name}}</h4>
            <span class="profileInfoDesc">{{description}}</span>
          </div>
          <div class="profileRightBottom">
            <TimeLine userId = "1"/>
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
  import NavBar from "../components/NavBar.vue";
  import TimeLine from "../components/TimeLine.vue";
  import RightBar from "../components/RightBar.vue";
  import axios from "axios";
  export default {
    data() {
      return {
        name: "",
        description: ""
      }
    },
    created() {
      axios.get(
        `http://localhost:3000/api/users/${this.$route.params.id}`
      ).then(response => {
        this.name = response.data.username;
        this.description = response.data.desc;
        console.log(response.data);
      });
    },
    components: {
      NavBar,
      TimeLine,
      RightBar
    }
  }
</script>
<style scoped>
  div.rightbarContainer{
    display: flex;
  }
  .rightbarUser{
    width:80%;
  }
  .rightbarUserProfile{

  }
  .profileCover{
  height:320px;
  position:relative;
}
.profileCoverImg{
  width:100%;
  height:250px;
  object-fit: cover;
}
.profileUserImg{
  position:absolute;
  left:0;
  width:150px;
  right:150px;
  border-radius: 50%;
  top:150px;
  right:0;
  margin:auto;
  /* border: 3px solid white; */
}
.profileInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.profileInfoName{
  font-size: 24px;
}
.profileRightBottom{
  display: flex;
}
</style>
