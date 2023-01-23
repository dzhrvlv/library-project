<template>
  <div class="book">
    <p class="book__item">{{ readerBook.title || "" }}, {{ readerBook.author || "" }}</p>
    <button class="book__return" @click="returnBook">Вернуть</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ResBookCard",
  props: {
    readerBook: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    returnBook() {
      this.$store.dispatch("RETURN_BOOK_REQUEST", { bookId: this.readerBook._id, userId: this.user._id })
    }
  }
}
</script>

<style scoped>
.book {
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.book__item {
  font-size: 20px;
}

.book__return {
  padding: 10px;
  background: none;
  border: none;
  border-radius: 5px;
}

.book__return:hover {
  background: lightgrey;
}
.book__return:active {
  background: grey;
  opacity: 0.7;
  transform: scale(0.9);
}

.book__deadline {
  font-size: 16px;
  opacity: 0.6;
}

.book__deadline strong {
  font-style: italic;
}
</style>