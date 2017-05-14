const actions = {
  configKeyVal ({commit}, {key, val}) {
    commit('changeKeyVal', {key, val})
  }
}

export default actions
