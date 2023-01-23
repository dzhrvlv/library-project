<template>
  <div class="cabinet">
    <h1 class="cabinet__title">Личный кабинет</h1>
    <button class="cabinet__quit" @click="logout">Выйти</button>
    <div class="cabinet__container">
      <div class="cabinet__data">
        <h2>Личные данные</h2>
        <div>
          <p>Имя: <strong id="firstname">{{ user.firstname || "ИМЯ" }}</strong></p>
          <p>Фамилия: <strong id="lastname">{{ user.lastname || "ФАМИЛИЯ" }}</strong></p>
          <p>Возраст: <strong id="age">{{ user.age || "00" }}</strong></p>
          <p>
            Номер читательского билета: <strong id="readerId">{{ user.readerId || "000.000" }}</strong>
          </p>
        </div>
      </div>
      <ResBookList :readerBooks="user.books" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ResBookList from '@/components/cabinet/ResBookList.vue';
export default {
  components: { ResBookList },
  data() {
    return {
      readerBooks: [
        {
          id: 1,
          item: "Капитанская дочка, Александр Пушкин",
          deadline: "25.11.2021"
        },
        {
          id: 2,
          item: "Пиковая дама, Александр Пушкин",
          deadline: "25.11.2021"
        },
      ]
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("AUTH_LOGOUT")
        .then(() => {
          this.$router.push("/")
        })
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
  }
}
</script>

<style scoped>

.cabinet__title {
  margin-bottom: 20px;
}

.cabinet__quit {
  margin-bottom: 10px;
  font-size: 16px;
  background: none;
  border: none;
  border-bottom: 1px dotted black;
  opacity: 0.6;
}

.cabinet__container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.cabinet__data {
  width: 50%;
}

.cabinet__data h2 {
  margin-bottom: 10px;
}

</style>