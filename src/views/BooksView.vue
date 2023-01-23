<template>
  <div class="books__container">
    <h1 class="books__title" >Каталог книг</h1>


    <div class="books__search">
      <div class="search">
        <input class="search__input" type="text" placeholder="Поиск" :value="searchQuery" @input="setSearchQuery" />
        <button class="search__button" v-if="searchQuery.length" @click="clearSearch()">&times;</button>
      </div>
    </div>
    <div class="books__filter">
      <FilterList :jenres="jenres" />
    </div>
    <!-- Книги -->
    <div class="books">
      <BookList :books="searchedBooks" />

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import BookList from '@/components/books/BookList';
import FilterList from '@/components/books/FilterList';

export default {
  components: {
    BookList, FilterList
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions({
      fetchBooks: "GET_ALL_BOOKS_REQUEST"
    }),
    ...mapMutations({
      setSearchQuery: "SET_SEARCH_QUERY"
    }),
    clearSearch() {
      this.setSearchQuery()
    }
  },
  computed: {
    ...mapState({
      books: state => state.book.books,
      searchQuery: state => state.book.searchQuery,
      jenres: state => state.book.jenres
    }),
    ...mapGetters({
      searchedBooks: "searchedBooks"
    }),

  },
  mounted() {
    this.fetchBooks()
  }
}
</script>

<style scoped>
* {
  list-style-type: none;
}

.books__container {
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: 40px 40px auto;
  grid-gap: 10px;
  /* min-height: calc(100vh - 100px); */
}

.books__title {
  grid-row: 1;
  grid-column: 1/3;
  font-size: 25px;
}


.books__filter {
  box-sizing: border-box;
  grid-column: 1;
  grid-row: 3;
  border: 1px solid black;
  cursor: pointer;

  /* display: none; */
}



.books__search {
  grid-column: 1/3;
  grid-row: 2;
  width: 100%;
  margin-bottom: 20px;
}

.search {
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.search__input {
  padding: 3px 30px 3px 5px;
  width: 100%;
  font-size: 15px;
  outline: none;
}

.search__button {
  margin-left: -28px;
  width: 29px;
  height: 29px;
  background: none;
  border: none;
}

.search__button:hover {
  background: lightgrey;
}

.books {
  grid-column: 2;
  grid-row: 3;
  /* display: block; */
  /* justify-self: flex-start; */
}
</style>