import { MutationTree } from 'vuex'
import { StateInterface } from './state'

const mutation: MutationTree<StateInterface> = {
  setExample (state, payload) {
    state.example = payload
  }
}

export default mutation
