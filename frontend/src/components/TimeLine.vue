<template>
  <div class="timeline">
    <div
      class="post"
    >
      <div class="profile">
        <img src="@/assets/img/iwati.jpeg" alt="" class="profileImg">
      </div>
      <div class="postcontent">
        <v-text-field :rules="rules" placeholder="投稿内容" class="postInput"></v-text-field>
        <div class="postBottom">
          <div class="postButtons">
            <div class="postButton">
              <v-icon>
                fa fa-file-image-o
              </v-icon>
            </div>
          </div>
          <div class="postButton">
            <v-btn
              color="primary"
              elevation="2"
            >
              投稿
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="timelineContents">
      <div class="timelineContent">
        <div class="timelineContentHeader">
          <img src="@/assets/img/iwati.jpeg" alt="" class="profileImg">
          <h5>メンマ＠名大で一番バカな学生</h5>
        </div>
        <div class="postContent">
          <p>テキストテキストテキストテキストテキストテキスト</p>
          <img src="@/assets/img/iwati.jpeg" alt="">
        </div>
        <div class="postContentBottom">
          <div class="postContentBottomIcon">
            <v-icon>
              fa fa-comment-o
            </v-icon>
          </div>
          <div class="postContentBottomIcon">
            <v-icon>
              fa fa-heart-o
            </v-icon>
          </div>
          <div class="postContentBottomIcon">
            <v-icon>
              fa fa-share

            </v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

  export default {
    props: [
      "userId"
    ],
    data() {
      return {
        posts:[]
      }
    },
    created() {
      axios.get(
        `http://localhost:3000/api/users/${this.$route.params.id}`
      ).then(response => {
        console.log(response);
      });
    }
  };
</script>
<style scoped>
  .timeline{
    width:50%;
    /* padding:20px; */
    box-sizing: border-box;
  }
  .post{
    display: flex;
    padding:10px;
    box-sizing: border-box;
    border-bottom:1px solid #4242423b;
  }
  .profile{
    /* width:20%; */
  }
  .profileImg{
    width:50px;
    height:50px;
    border-radius: 50%;
  }
  .postcontent{
    padding-left: 20px;
    box-sizing: border-box;
    width:80%;
  }
  .postInput{
    font-size: 22px;
  }
  .postBottom{
    display: flex;
    justify-content: space-between;
  }
  .timelineContent{
    padding: 10px;
    border-bottom:1px solid #4242423b;
  }
  .timelineContentHeader{
    display: flex;
    align-items: center;
  }
  .postContentBottom{
    display: flex;
    justify-content: space-around;
  }
</style>
