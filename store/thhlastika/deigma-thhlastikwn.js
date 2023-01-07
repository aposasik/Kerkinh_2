export const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  kwdikosDeigmatolhpsiasList: [],
  xrhmatodothshList: [],
  ereunhthsList: [],
  topothesiaList: [],
  // Apo
  dateFrom: null,
  // Ews kai
  dateTo: null,
  timeFrom: null,
  timeTo: null,
  diarkeiaList: [],
  tuposVlasthshsList: [],
  tuposOikotopouList: [],
  epifaneiaDeigmatolhpsiasFrom: null,
  epifaneiaDeigmatolhpsiasTo: null,
  latitudeEGSAList: [],
  longitudeEGSAList: [],
  latitudeWGS84List: [],
  longitudeWGS84List: [],
  gridCellList: [],
  kwdikosNaturaList: [],
  methodosDeigmatolhpsiasList: [],
  nomosList: []
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
  getKwdikosDeigmatolhpsiasList: state => {
    return state.kwdikosDeigmatolhpsiasList
  },
  getXrhmatodothshList: state => {
    return state.xrhmatodothshList
  },
  getEreunhthsList: state => {
    return state.ereunhthsList
  },
  getTopothesiaList: state => {
    return state.topothesiaList
  },
  getDateFrom: state => {
    return state.dateFrom
  },
  getDateTo: state => {
    return state.dateTo
  },
  getTimeFrom: state => {
    return state.timeFrom
  },
  getTimeTo: state => {
    return state.timeTo
  },
  getDiarkeiaList: state => {
    return state.diarkeiaList
  },
  getTuposVlasthshsList: state => {
    return state.tuposVlasthshsList
  },
  getTuposOikotopouList: state => {
    return state.tuposOikotopouList
  },
  getEpifaneiaDeigmatolhpsiasFrom: state => {
    return state.epifaneiaDeigmatolhpsiasFrom
  },
  getEpifaneiaDeigmatolhpsiasTo: state => {
    return state.epifaneiaDeigmatolhpsiasTo
  },
  getLatitudeEGSAList: state => {
    return state.latitudeEGSAList
  },
  getLongitudeEGSAList: state => {
    return state.longitudeEGSAList
  },
  getLatitudeWGS84List: state => {
    return state.latitudeWGS84List
  },
  getLongitudeWGS84List: state => {
    return state.longitudeWGS84List
  },
  getGridCellList: state => {
    return state.gridCellList
  },
  getKwdikosNaturaList: state => {
    return state.kwdikosNaturaList
  },
  getMethodosDeigmatolhpsiasList: state => {
    return state.methodosDeigmatolhpsiasList
  },
  getNomosList: state => {
    return state.nomosList
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
  setKwdikosDeigmatolhpsiasList (state, newKwdikosDeigmatolhpsiasList) {
    state.kwdikosDeigmatolhpsiasList = newKwdikosDeigmatolhpsiasList
  },
  setXrhmatodothshList (state, newXrhmatodothshList) {
    state.xrhmatodothshList = newXrhmatodothshList
  },
  setEreunhthsList (state, newEreunhthsList) {
    state.ereunhthsList = newEreunhthsList
  },
  setTopothesiaList (state, newTopothesiaList) {
    state.topothesiaList = newTopothesiaList
  },
  setDateFrom (state, newDateFrom) {
    state.dateFrom = newDateFrom
  },
  setDateTo (state, newDateTo) {
    state.dateTo = newDateTo
  },
  setTimeFrom (state, newTimeFrom) {
    state.timeFrom = newTimeFrom
  },
  setTimeTo (state, newTimeTo) {
    state.timeTo = newTimeTo
  },
  setDiarkeiaList (state, newDiarkeiaList) {
    state.diarkeiaList = newDiarkeiaList
  },
  setTuposVlasthshsList (state, newTuposVlasthshsList) {
    state.tuposVlasthshsList = newTuposVlasthshsList
  },
  setTuposOikotopouList (state, newTuposOikotopouList) {
    state.tuposOikotopouList = newTuposOikotopouList
  },
  setEpifaneiaDeigmatolhpsiasFrom (state, newEpifaneiaDeigmatolhpsiasFrom) {
    state.epifaneiaDeigmatolhpsiasFrom = newEpifaneiaDeigmatolhpsiasFrom
  },
  setEpifaneiaDeigmatolhpsiasTo (state, newEpifaneiaDeigmatolhpsiasTo) {
    state.epifaneiaDeigmatolhpsiasTo = newEpifaneiaDeigmatolhpsiasTo
  },
  setLatitudeEGSAList (state, newLatitudeEGSAList) {
    state.latitudeEGSAList = newLatitudeEGSAList
  },
  setLongitudeEGSAList (state, newLongitudeEGSAList) {
    state.longitudeEGSAList = newLongitudeEGSAList
  },
  setLatitudeWGS84List (state, newLatitudeWGS84List) {
    state.latitudeWGS84List = newLatitudeWGS84List
  },
  setLongitudeWGS84List (state, newLongitudeWGS84List) {
    state.longitudeWGS84List = newLongitudeWGS84List
  },
  setGridCellList (state, newGridCellList) {
    state.gridCellList = newGridCellList
  },
  setKwdikosNaturaList (state, newKwdikosNaturaList) {
    state.kwdikosNaturaList = newKwdikosNaturaList
  },
  setMethodosDeigmatolhpsiasList (state, newMethodosDeigmatolhpsiasList) {
    state.methodosDeigmatolhpsiasList = newMethodosDeigmatolhpsiasList
  },
  setNomosList (state, newNomosList) {
    state.nomosList = newNomosList
  },
}