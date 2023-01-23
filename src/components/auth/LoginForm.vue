<template>
  <div class="form__wrap">
    <form class="form" @submit.prevent="login">
      <div class="form__group">
        <label for="readerId">Читательский билет</label>
        <input type="text" id="readerId" v-model="readerId" />
      </div>
      <div class="form__group">
        <label for="password">Пароль</label>
        <input type="text" id="password" v-model="password" />
      </div>
      <button class="form__button" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    readerId: "",
    password: ""
  }),
  methods: {
    login() {
      const { readerId, password } = this

      this.$store.dispatch("AUTH_REQUEST", {
        method: "login",
        data: { readerId, password }
      })
        .then(() => {
          this.$router.push("/cabinet")
        })
    }
  }

}
</script>

<style scoped>
.form {
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 20px;
}

.form__group {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.form__group input {
  justify-self: right;
  margin-left: 10px;
  padding: 3px 5px;
  outline: none;
}

.form__group label {
  cursor: default;
  user-select: none;
}

.form__button {
  margin-top: 10px;
  padding: 5px 2px;
  font-size: 18px;
  background: none;
  border: 1px solid black;
}

.form__button:hover {
  background: lightgrey;
}
</style>