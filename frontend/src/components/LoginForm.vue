<template>
  <div class="mb-6">
    <h2 class="mb-4">ログイン</h2>
    <v-form>
      <label for="email">メールアドレス</label>
      <v-text-field type="email" required label="メールアドレス" v-show-password-input v-model="email" />
      <label for="password">パスワード</label>
      <v-text-field type="password" required label="パスワード" v-model="password" />
      <div class="text-center">
        <v-btn
          elevation="2"
          @click="login"
        >
          ログインする
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  data () {
    return {
      email: '',
      password: '',
      error: 'null'
    }
  },
  methods: {
    async login(){
      try {
        this.error = null

        const res = await axios.post('http://localhost:3000/api/auth/login', {
          email:this.email,
          password: this.password,
        })
        if(!res) {
          throw new Error('メールアドレスが違います')
        }
        console.log({res})
        this.$router.push('/')
        return res
      } catch(error) {
        console.log(error)
        this.error = 'メールアドレスが違います'
      }
    }
  }
}
</script>
