import {
  CHANGE_STYLE_MODE
} from '../types'

const state = {
  styleMode: 'day-mode'
}

const mutations = {
  [CHANGE_STYLE_MODE](state) {
    state.styleMode = (state.styleMode === 'day-mode') ? 'night-mode' : 'day-mode'
  }
}

export default {
  state,
  mutations
}