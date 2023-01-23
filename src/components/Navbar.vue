<template>
  <header class="header">
    <p class="header__logo"><router-link to="/">Библиотека</router-link></p>
    <nav>
      <ul class="header__nav">
        <li class="header__link"><router-link to="/about">О библиотеке</router-link></li>
        <li class="header__link"><router-link to="/books">Книги</router-link></li>
        <li class="header__link">
          <router-link to="/auth" v-if="!isAuth">Вход</router-link>
          <router-link to="/cabinet" v-else>Кабинет</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters(["isAuth"])
  },
  watch: {
    isAuth() {}
  }
}
</script>

<style scoped>
.header {
  height: 40px;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: lightgrey;
}

.header a {
  color: black;
}

.header a:hover {
  opacity: 0.6;
}

.header__logo {
  font-size: 30px;
  font-weight: 700;
}

.header__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
}

.header__link {
  margin-left: 30px;
}
</style>