export const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  actCodesList: []
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
  getActCodesList: state => {
    return state.actCodesList
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
  setActCodesList (state, newActCodes) {
    state.actCodesList = newActCodes
  }
}