export const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  deigmaThhlastikwnIdList: [],
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
  getDeigmaThhlastikwnIdList: state => {
    return state.deigmaThhlastikwnIdList
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
  setDeigmaThhlastikwnIdList (state, newDeigmaThhlastikwnIdList) {
    state.deigmaThhlastikwnIdList = newDeigmaThhlastikwnIdList
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