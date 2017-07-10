const mutations = {
  changeKeyVal (state, {key, val}) {
    state[key] = val
  },
  listVal (state, {path}) {
    state.listArray = []
    switch (path) {
      case '/news':
        state.listArray = state.newsWall
        break
      case '/gyhd':
        state.listArray = state.gyhdWall
        break
      case '/csmj':
        state.listArray = state.csmjWall
        break
      case '/mtbd':
        state.listArray = state.mtbdWall
        break
      default: break
    }
  },
  changeNewsContentVal (state, {detailid}) {
    let did = Number(detailid)
    let idx = state.detailList.findIndex((item) => { return item.id === did })
    if (idx >= 0) {
      let obj = state.detailList[idx]
      state.newsContent = obj.content
    }
  }
}

export default mutations
