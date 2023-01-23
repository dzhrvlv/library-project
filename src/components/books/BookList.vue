<template>
    <div class="books" v-if="books && books.length">
        <BookCard v-for="book in books" :book="book" :key="book.title" />
    </div>
</template>

<script>
import BookCard from './BookCard.vue';

export default {
    components: {
        BookCard
    },
    props: {
        books: {
            type: Array,
            required: true
        }
    },
    
}
</script>

<style scoped>
.books {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>