export const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  eidhList: []
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
  getEidhList: state => {
    return state.eidhList
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
  setEidhList (state, newEidh) {
    state.eidhList = newEidh
  },
}