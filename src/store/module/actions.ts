import { ActionTree } from 'vuex'
import { StoreInterface } from '..'
import { StateInterface } from './state'

const actions: ActionTree<StateInterface, StoreInterface> = {
  setExample ({ commit }) {
    commit('setExample', 'teste')
  }
}

export default actions
