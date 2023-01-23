import axios from "axios"
import { URL } from "@/config/config"


export const bookModule = {
    state: () => ({
        books: [],
        jenres: [],
        selectedJenre: "",
        status: "",
        searchQuery: "",
    }),
    getters: {
        searchedBooks(state) {
            return [...state.books].filter(book => 
                (book.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(state.searchQuery.toLowerCase())) && 
                book.jenre.includes(state.selectedJenre))
        }
    },
    mutations: {
        SET_STATUS_LOADING: (state) => {
            state.status = "loading"
        },
        SET_STATUS_ERROR: (state, error) => {
            console.log(7, error)

            state.error = error
        },
        SET_BOOKS: (state, data) => {
            state.status = "success"
            state.books = data.books
            state.jenres = data.jenres
        },
        UPDATE_BOOK: (state, updateBook) => {
            console.log(4)

            state.books = state.books.map(book => {
                if (book._id === updateBook._id) return updateBook
                return book
            })
            state.status = "success"
            console.log(5)
        },
        SET_SEARCH_QUERY: (state, query) => {
            if (query) state.searchQuery = query.target.value
            else state.searchQuery = ""
        },
        SET_SELECTED_JENRE: (state, jenre) => {
            state.selectedJenre = jenre
            console.log(jenre)
        }
    },
    actions: {
        GET_ALL_BOOKS_REQUEST: async ({ commit }) => {
            try {
                commit("SET_STATUS_LOADING")

                const response = await axios.get(`${URL}/api/books/all`)

                console.log(response.data)
                commit("SET_BOOKS", response.data)

            }
            catch (err) {
                commit("SET_STATUS_ERROR", err);

            }
        },
        RESERVE_BOOK_REQUEST: async ({ commit }, { bookId, userId }) => {
            try {
                console.log(1)
                commit("SET_STATUS_LOADING")
                console.log(2, bookId, userId)

                const response = await axios.put(`${URL}/api/books/reserve/${bookId}`, { userId: userId })
                console.log(3)

                commit("UPDATE_BOOK", response.data.updateBook)
                console.log(6)

                commit("USER_ADD_BOOK", response.data.updateBook)


            }
            catch (err) {
                commit("SET_STATUS_ERROR", err);

            }
        },
        RETURN_BOOK_REQUEST: async ({ commit }, { bookId, userId }) => {
            try {
                commit("SET_STATUS_LOADING")
                const response = await axios.put(`${URL}/api/books/return/${bookId}`, { userId: userId })
                commit("UPDATE_BOOK", response.data.updateBook)
                commit("USER_RETURN_BOOK", response.data.updateBook._id)


            }
            catch (err) {
                commit("SET_STATUS_ERROR", err);

            }
        }
    },
}