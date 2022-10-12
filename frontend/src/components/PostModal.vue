<template>
  <div>
    {{userId}}
    <v-btn color="primary" rounded @click="open">Tweet</v-btn>
    <v-dialog v-model="dialog" width="600px">
        <v-card class="pa-6">
          <v-textarea
          name="input-7-1"
          label="投稿内容"
          v-model="desc"
        ></v-textarea>
          <div class="text-right">
            <v-btn
              rounded
              color="primary"
              @click="createComment"
            >
              投稿する
            </v-btn>
          </div>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        dialog: false,
        userId: window.localStorage.getItem('uid'),
        desc: ''
      };
    },
    methods: {
      open: function() {
        this.dialog = true;
      },
      close: function() {
        this.dialog = false;
      },
      async createComment() {
        try{
          const res = await axios.post('http://localhost:3000/api/posts', {
            userId: this.userId,
              desc: this.desc
            }
          )
          console.log({ res })
          // this.$router.push('/')
          return res
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
</script>
