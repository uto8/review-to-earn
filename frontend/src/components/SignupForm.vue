<template>
  <div class="mb-6">
    <h2 class="text-center mb-4">アカウントを登録</h2>
    <v-form>
      <label for="name">お名前</label>
      <v-text-field type="text" required label="ユーザー名" v-model="username" />
      <label for="email">メールアドレス</label>
      <v-text-field type="email" required label="メールアドレス" v-model="email" />
      <label for="password">パスワード</label>
      <v-text-field type="password" required label="パスワード" v-model="password" />
      <p class="mb-4">8文字以上で入力してください</p>
      <!-- <label for="password">パスワード(確認用)</label>
      <v-text-field type="password" required placeholder="パスワード（確認用）" v-model="passwordConfirmation" /> -->
      <v-btn
        elevation="2"
        @click="signUp"
      >
        登録する
      </v-btn>
    </v-form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async signUp() {
        try{
          this.error = null
          const res = await axios.post('http://localhost:3000/api/auth/register', {
            username: this.username,
            email: this.email,
            password: this.password
            }
          )
          if (!this.error) {
            window.localStorage.setItem('access-token', res.headers['access-token'])
            window.localStorage.setItem('client', res.headers.client)
            window.localStorage.setItem('uid', res.headers.uid)
            window.localStorage.setItem('name', res.data.data.name)
            this.$router.push('/')
          }
          console.log({ res })
          return res
        } catch(err) {
          console.log(err);
        }
      },
      createUser() {
        axios.post('');
      }
    }
  }
</script>
