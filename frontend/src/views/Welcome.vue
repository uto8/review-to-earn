<template>
  <div class="container welcome">
    <p>ようこそ！</p>
    <div v-if="shouldShowLoginForm">
      <LoginForm />
      <p class="change-form">初めての方は<span @click="shouldShowLoginForm = false">こちら</span>をクリック</p>
    </div>
    <div v-if="!shouldShowLoginForm">
      <SignupForm />
      <p class="change-form">アカウントをお持ちの方は<span @click="shouldShowLoginForm = true">こちら</span>をクリック</p>
    </div>
  </div>
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
</style>
