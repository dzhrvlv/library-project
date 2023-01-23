<template>
  <div class="auth">
    <div class="auth__choose" @click="isLoginForm = !isLoginForm">{{ isLoginForm? "Регистрация": "Войти" }}</div>
    <h1 class="auth__title">{{ isLoginForm? "Вход в личный кабинет": "Регистрация" }}</h1>
    <LoginForm v-if="isLoginForm" />
    <RegistrationForm v-else />
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm";
import RegistrationForm from "@/components/auth/RegistrationForm";

export default {
  components: { LoginForm, RegistrationForm },
  data() {
    return {
      URL: "http://localhost:3000",
      isLoading: false,
      isLoginForm: true
    }
  },
  methods: {
  }

}
</script>

<style scoped>
.auth {}

.auth__choose {
  width: max-content;
  border-bottom: 1px solid #000;
  cursor: pointer;
  user-select: none;
}

.auth__title {
  cursor: default;
  user-select: none;
}
</style>