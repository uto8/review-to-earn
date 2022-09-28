<template>
  <div>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
      ></v-col>
      <v-col
        cols="12"
        sm="4"
      >
      <h2 class="text-center mb-4">アカウントを登録</h2>
      <v-form>
        <label for="name">お名前</label>
        <v-text-field type="text" required label="ユーザー名" />
        <label for="email">メールアドレス</label>
        <v-text-field type="email" required label="メールアドレス" />
        <label for="password">パスワード</label>
        <v-text-field type="password" required label="パスワード" />
        8文字以上で入力してください
        <label for="password">パスワード(確認用)</label>
        <v-text-field type="password" required placeholder="パスワード（確認用）" v-model="passwordConfirmation" />
        <v-btn
          elevation="2"
        >
          登録する
        </v-btn>
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
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }
}
</script>
