const actions = {
  configKeyVal ({commit}, {key, val}) {
    commit('changeKeyVal', {key, val})
  },
  configPathVal ({commit}, {path}) {
    commit('listVal', {path: path})
  },
  configNewsContent ({commit}, {detailid}) {
    commit('changeNewsContentVal', {detailid})
  }
}

export default actions
