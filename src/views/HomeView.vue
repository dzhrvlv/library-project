<template>
  <div class="home">
    <h1 class="home__title">Самарская библиотека</h1>
    <div class="home__text">
      <p>
        Мы рады приветствовать Вас на официальном портале библиотеки города
        Самары. На нашем сайте Вы можете:
      </p>
      <ul class="home__links">
        <li><router-link to="/auth">стать читателем</router-link></li>
        <li><router-link to="/books">ознакомиться с каталогом книг, имеющимися в нашей библиотеке</router-link></li>
        <li><router-link to="/books">забронировать книги, имеющиеся в библиотеке</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home {}

.home__title {
  margin-bottom: 20px;
}

.home__text {
  margin-top: 10px;
  font-size: 20px;
}

.home__links {
  padding-left: 30px;
}
</style>