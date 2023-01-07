export const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  deigmaThhlastikwnIdList: [],
  eidhList: [],
  sxetikhAfthoniaList: [],
  hlikiaList: [],
  fuloList: [],
  // Apo
  plhthosFrom: null,
  // Ews kai
  plhthosTo: null,
  eokParII: null,
  eokParIV: null,
  eokParV: null
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
  getEidhList: state => {
    return state.eidhList
  },
  getSxetikhAfthoniaList: state => {
    return state.sxetikhAfthoniaList
  },
  getHlikiaList: state => {
    return state.hlikiaList
  },
  getFuloList: state => {
    return state.fuloList
  },
  getPlhthosFrom: state => {
    return state.plhthosFrom
  },
  getPlhthosTo: state => {
    return state.plhthosTo
  },
  getEokParII: state => {
    return state.eokParII
  },
  getEokParIV: state => {
    return state.eokParIV
  },
  getEokParV: state => {
    return state.eokParV
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
  setEidhList (state, newEidh) {
    state.eidhList = newEidh
  },
  setSxetikhAfthoniaList (state, newSxetikhAfthonia) {
    state.sxetikhAfthoniaList = newSxetikhAfthonia
  },
  setHlikiaList (state, newHlikia) {
    state.hlikiaList = newHlikia
  },
  setFuloList (state, newFulo) {
    state.fuloList = newFulo
  },
  setPlhthosFrom (state, newPlhthosFrom) {
    state.plhthosFrom = newPlhthosFrom
  },
  setPlhthosTo (state, newPlhthosTo) {
    state.plhthosTo = newPlhthosTo
  },
  setEokParII (state, newEokParII) {
    state.eokParII = newEokParII
  },
  setEokParIV (state, newEokParIV) {
    state.eokParIV = newEokParIV
  },
  setEokParV (state, newEokParV) {
    state.eokParV = newEokParV
  }
}