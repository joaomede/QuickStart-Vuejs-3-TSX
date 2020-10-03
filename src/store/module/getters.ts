
import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { StateInterface } from './state'

const getters: GetterTree<StateInterface, StoreInterface> = {
  getExample: (state) => state.example
}

export default getters
