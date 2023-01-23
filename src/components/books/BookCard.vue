<template>
    <div class="books__card">
        <div class="book" v-if="book">
            <div class="book__title">
                {{ book.title || "" }}, {{ book.author || "" }}
            </div>
            <div class="book__text">
                {{ book.description || "" }}
            </div>
            <div class="book__count">Количество в библиотеке: <span>{{ book.number || "" }}</span></div>
            <button class="book__button" v-if="isAuth" @click="reserveBook">Забронировать</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
        }),
        ...mapGetters(["isAuth"])
    },
    methods: {
        reserveBook() {
            console.log("reserve click", this.book._id, this.user._id)
            this.$store.dispatch("RESERVE_BOOK_REQUEST",{ bookId: this.book._id, userId: this.user._id})
        }
    }
}
</script>

<style scoped>
.books__card {
    box-sizing: border-box;
    width: 70%;
    padding: 10px;
    border: 1px solid black;
}

.books__card:not(:last-child) {
    margin-bottom: 10px;
}

.book {
    display: grid;
    grid-template-columns: 2;
    grid-template-rows: 3;
    grid-gap: 1em;
}

.book__title {
    grid-column: 1/3;
    grid-row: 1;
    font-size: 25px;
    font-weight: 700;
}

.book__image {
    width: 130px;
    grid-column: 1;
    grid-row: 2;
}

.book__text {
    grid-column: 2;
    grid-row: 2;
    font-size: 20px;
    justify-self: end;
}

.book__count {
    grid-column: 1;
    grid-row: 3;
    align-self: flex-end;
}

.book__button {
    grid-column: 2;
    grid-row: 3;
    justify-self: flex-end;

    padding: 10px;
    font-size: 15px;
    background: lightgrey;
    border: 1px solid black;
}

.book__button:hover {
    background: grey;
}

.book__button:active {
    background: grey;
    opacity: 0.7;
    transform: scale(0.9);
}
</style>