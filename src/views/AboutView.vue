<template>
  <div class="about">
    <h1 class="about__title">О библиотеке</h1>
    <section class="about__section">
      <div class="about__blocks">
        <div class="about__block">
          <h2>Контакты</h2>
          <div>
            <p>Телефон:</p>
            <a href="tel:+71234567890">+7(123)456-78-90</a>
          </div>
          <div>
            <p>e-mail:</p>
            <a href="mailto:library@test.ru">library@test.ru</a>
          </div>
        </div>
        <div class="about__block">
          <h2>Адрес</h2>
          <div>
            <p>443110</p>
            <p>г. Самара, Мичурина, 58</p>
          </div>
        </div>
        <div class="about__block">
          <h2>Время работы</h2>
          <div>
            <p>Ежедневно: 08:00-19:00</p>
          </div>
        </div>
      </div>
      <div class="about__map">
        <Map />
      </div>
    </section>
  </div>
</template>

<script>
import Map from '@/components/Map.vue';

export default {
  components: {
    Map
  },
  data() {
    return {
      
    }
  }
}
</script>


<style scoped>
.about {}

.about__title {
  margin-bottom: 20px;
}

.about__section {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

.about__blocks {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.about__block:not(:last-child) {
  margin-bottom: 10px;
}

.about__block h2 {
  margin-bottom: 10px;
  font-size: 25px;
}

.about__block div {
  margin-bottom: 5px;
  font-size: 18px;
}

.about__map {
  margin: auto;
  text-align: center;
}
</style>