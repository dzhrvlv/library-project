import { createStore } from 'vuex'
import { bookModule } from './bookModule'
import { userModule } from './userModule'

export default createStore({
  modules: {
    user: userModule,
    book: bookModule
  }
})
