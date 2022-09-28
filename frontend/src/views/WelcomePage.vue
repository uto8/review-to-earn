<template>
  <v-app>
    <div class="container welcome">
      <p>ようこそ！</p>
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
            <div v-if="shouldShowLoginForm">
              <LoginForm />
              <p class="change-form">初めての方は<span @click="shouldShowLoginForm = false">こちら</span>をクリック</p>
            </div>
            <div v-if="!shouldShowLoginForm">
              <SignupForm />
              <p class="change-form">アカウントをお持ちの方は<span @click="shouldShowLoginForm = true">こちら</span>をクリック</p>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
        </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
</template>

<script>
  import LoginForm from '../components/LoginForm.vue';
  import SignupForm from '../components/SignupForm.vue';

  export default{
    components: {
      LoginForm,
      SignupForm
    },
    data () {
      return {
        shouldShowLoginForm: true
      }
    }
  }
</script>

<style scoped>
  div.container{
    background:#2D579A;
    color:#fff;
  }
</style>

