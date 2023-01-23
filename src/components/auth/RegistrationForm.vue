<template>
  <div class="form__wrap">
    <form class="form" @submit.prevent="registration">
      <div class="form__group">
        <label for="firstname">Имя</label>
        <input type="text" id="firstname" v-model="firstname" />
      </div>
      <div class="form__group">
        <label for="lastname">Фамилия</label>
        <input type="text" id="lastname" v-model="lastname" />
      </div>
      <div class="form__group">
        <label for="age">Возраст</label>
        <input type="number" id="age" v-model="age" />
      </div>
      <div class="form__group">
        <label for="password">Пароль</label>
        <input type="text" id="password" v-model="password" />
      </div>
      <button class="form__button" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data: () => ({
    firstname: "",
    lastname: "",
    age: 0,
    password: ""
  }),
  methods: {
    registration() {
      const { firstname, lastname, age, password } = this

      this.$store.dispatch("AUTH_REQUEST", {
        method: "register",
        data: {
          firstname,
          lastname,
          age,
          password
        }
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
  /* border: 1px solid black; */
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