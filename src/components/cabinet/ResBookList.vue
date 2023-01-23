<template>
    <div class="main__books">
        <h2>Забронированные книги</h2>
        <div v-if="readerBooks && readerBooks.length">
            <ResBookCard v-for="readerBook in readerBooks" :readerBook="readerBook" :key="readerBook.id" />
        </div>
        <div v-else>
            Книг не забронировано
        </div>
    </div>
</template>

<script>
import ResBookCard from './ResBookCard.vue';
export default {
    name: "ResBookList",
    props: {
        readerBooks: {
            type: Array,
            required: true
        }
    },
    components: { ResBookCard }
}
</script>

<style scoped>

</style>