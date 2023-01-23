import axios from "axios"
import { AuthorizationHeaderConfig, URL } from "@/config/config"

export const userModule = {
    state: () => ({
        user: {
            readerId: "",
            firstname: "",
            lastname: "",
            age: 0,
            books: []
        },
        // isAuth: false,
        // isLoading: false,
        token: localStorage.getItem("token") || "",
        status: ""
    }),
    getters: {
        isAuth(state) {
            return !!state.token
        },
        authStatus: state => state.status
    },
    mutations: {
        AUTH_REQUEST: (state) => {
            console.log("2")

            state.status = "loading"
        },
        AUTH_SUCCESS: (state, data) => {
            console.log("5", data)

            state.status = "success"
            state.user = data.user
            state.token = data.token
            console.log(data.token)

        },
        AUTH_ERROR: (state, error) => {
            console.log("6", error)

            state.status = error
        },
        AUTH_LOGOUT: (state) => {
            console.log(state.token)
            state.user = {}
            state.token = ""
            state.status = ""

        },
        SET_USER: (state, user) => {
            state.user = user
        },
        USER_ADD_BOOK: (state, book) => {
            state.user.books.push(book)
        },
        USER_RETURN_BOOK: (state, bookId) => {
            state.user.books = state.user.books.filter(b => b._id !== bookId)
        }
        // setUser(state, user) {
        //     state.user = user
        // },
        // setIsAuth(state, isAuth) {
        //     state.isAuth = isAuth
        // },
        // setIsLoading(state, isLoading) {
        //     state.isLoading = isLoading
        // }
    },
    actions: {
        // login: ({commit, dispatch}, user) => {
        //     return new Promise(resolve, reject) => {
        //         coom
        //     }
        // }
        AUTH_REQUEST: async ({ commit }, { method, data }) => {
            try {
                console.log("1", method, data)
                commit("AUTH_REQUEST")
                console.log("3")

                const response = method !== "auth"
                    ? await axios.post(`${URL}/api/auth/${method}`, data)
                    : await axios.get(`${URL}/api/auth/${method}`, AuthorizationHeaderConfig)
                // const response = await axios.post("http://localhost:5000/api/auth/register", data)

                console.log("4")

                // const {user, token} = data
                localStorage.setItem("token", response.data.token)
                axios.defaults.headers.common['Authorization'] = response.data.token
                commit("AUTH_SUCCESS", response.data)
                // commit("setUser", user)
                // commit("setIsAuth", true)
            }

            catch (err) {
                commit("AUTH_ERROR", err);
                localStorage.removeItem("token");
            }
            // const user = await response.data.user

        },
        AUTH_LOGOUT: ({ commit }) => {
            commit("AUTH_LOGOUT")
            localStorage.removeItem('token')
            delete axios.defaults.headers.common['Authorization']
        }
    }
} 