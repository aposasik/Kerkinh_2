export const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  deigmaOrnithopanidaIdList: [],
  actCodesList: [],
  kwdikosEidousList: [],
  pressThreatList: [],
  importanceList: []
})

export const getters = {
  getChipsList: state => {
    return state.chipsList
  },
  getSize: state => {
    return state.size
  },
  getSort: state => {
    return state.sort
  },
  getDeigmaOrnithopanidaIdList: state => {
    return state.deigmaOrnithopanidaIdList
  },
  getActCodesList: state => {
    return state.actCodesList
  },
  getKwdikosEidousList: state => {
    return state.kwdikosEidousList
  },
  getPressThreatList: state => {
    return state.pressThreatList
  },
  getImportanceList: state => {
    return state.importanceList
  }
}

export const mutations = {
  setChipsList (state, newChips) {
    state.chipsList = newChips
  },
  setSize (state, newSize) {
    state.size = newSize
  },
  setSort (state, newSort) {
    state.sort = newSort
  },
  setDeigmaOrnithopanidaIdList (state, newDeigmaOrnithopanidaIdList) {
    state.deigmaOrnithopanidaIdList = newDeigmaOrnithopanidaIdList
  },
  setActCodesList (state, newActCodes) {
    state.actCodesList = newActCodes
  },
  setKwdikosEidousList (state, newKwdikosEidous) {
    state.kwdikosEidousList = newKwdikosEidous
  },
  setPressThreatList (state, newPressThreat) {
    state.pressThreatList = newPressThreat
  },
  setImportanceList (state, newImportance) {
    state.importanceList = newImportance
  }
}