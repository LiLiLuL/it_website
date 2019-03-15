import Vue from 'vue'
import Vuex from 'vuex'
import resize from './module/resize'
import article from './module/article'
Vue.use(Vuex)

export default new Vuex.Store({
      modules:{
          resize,article
      }
})