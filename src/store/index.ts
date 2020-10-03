import { createStore } from 'vuex'
import { StateInterface } from './module/state'
import module from './module/index'

export interface StoreInterface {
  module: StateInterface;
}

export default createStore({
  modules: { module }
})
