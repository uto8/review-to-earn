<template>
  <div>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
      >
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
      <h2 class="mb-4">ログイン</h2>
      <v-form>
        <label for="name">お名前</label>
        <v-text-field type="text" required label="ユーザー名" />
        <label for="email">メールアドレス</label>
        <v-text-field type="email" required label="メールアドレス" />
        <label for="password">パスワード</label>
        <v-text-field type="password" required label="パスワード" />
        <div class="text-center">
          <v-btn
            elevation="2"
          >
            ログインする
          </v-btn>
        </div>
      </v-form>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
