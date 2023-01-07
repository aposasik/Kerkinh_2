export const state = () => ({
    // Server - Back End Base Url
    baseUrl: '',
    prwtokolaUrl: 'v1/prwtokola',
    deigmataUrl: 'v1/deigmata',
    picturesUrl: 'v1/pictures',
    filesUrl: 'v1/files',
    deigmaThhlastikwnUrl: 'v1/deigmaThhlastikwn',
    thhlastikaCtEidosUrl: 'v1/ctThhlastikaEidh',
    thhlastikaCtPressThreatsUrl: 'v1/ctThhlastikaPressThreats',
    thhlastikaXEidhUrl: 'v1/deigmaThhlastikwnXEidh',
    thhlastikaXPressThreatsUrl: 'v1/deigmaThhlastikwnXPressThreats',
    ornithopanidaCtPressThreatsUrl: 'v1/ctornithopanidaPressuresAndThreats',
    ornithopanidaCtEidosUrl: 'v1/ctornithopanidaEidi',
    deigmaOrnithopanidaUrl: 'v1/deigmaOrnithopanida',
    ornithopanidaXPressThreatsUrl: 'v1/deigmaOrnithopanidaXPresAndThreats',
    ornithopanidaXEidhUrl:'v1/deigmaOrnithopanidaXSpecies/',
})

export const getters = {
    // Prwtokola
    getPrwtokolaAddUrl: state => {
        return state.baseUrl + state.prwtokolaUrl
    },
    getPrwtokolaAddFromExcelUrl: state => {
        return state.baseUrl + state.prwtokolaUrl + '/addPrwtokolaFromExcel'
    },
    getPrwtokolaSearchUrl: state => {
        return state.baseUrl + state.prwtokolaUrl + '/getAllByPaging'
    },
    getPrwtokolaByIdUrl: state => {
        return state.baseUrl + state.prwtokolaUrl + '/'
    },
    getPrwtokolaDistinctUrl: state => {
        return state.baseUrl + state.prwtokolaUrl + '/getDistinctIds'
    },

    // Deigmata
    getDeigmataSearchUrl: state => {
        return state.baseUrl + state.deigmataUrl + '/getAllByPaging'
    },
    getDeigmataByIdUrl: state => {
        return state.baseUrl + state.deigmataUrl + '/'
    },
    getDeigmataDynamicSearchUrl: state => {
        return state.baseUrl + state.deigmataUrl + '/search'
    },
    getDeigmataDynamicDownloadUrl: state => {
        return state.baseUrl + state.deigmataUrl + '/downloadExcel'
    },
    getDeigmataAutocompletes: state => {
        return state.baseUrl + state.deigmataUrl + '/getAutocompletes'
    },
    
    // Deigma Thhlastikwn
    getDeigmaThhlastikwnAddUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl
    },
    getDeigmaThhlastikwnAddFromExcelUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/addDeigmaThhlastikwnFromExcel'
    },
    getDeigmaThhlastikwnSearchUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAllByPaging'
    },
    getDeigmaThhlastikwnByIdUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/'
    },
    getDeigmaThhlastikwnAutocompletesUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAutocompletes'
    },
    getDeigmaThhlastikwnMapMarkersUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAllGeoLocations'
    },
    getDeigmaThhlastikwnDynamicSearchUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/search'
    },
    getDeigmaThhlastikwnDynamicDownloadUrl: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/downloadExcel'
    },
    getDeigmaThhlastikwnAutocompletes: state => {
        return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAutocompletes'
    },

    // Pictures
    getPictureByIdUrl: state => {
        return state.baseUrl + state.picturesUrl + '/'
    },
    getPicturesByDeigmaThhlastikwnIdIs: state => {
        return state.baseUrl + state.picturesUrl + '/getPicturesByDeigmaThhlastikwnIs/'
    },
    getPicturesSearchUrl: state => {
        return state.baseUrl + state.picturesUrl + '/getAllByPaging/'
    },

    // Files
    getFileByIdUrl: state => {
        return state.baseUrl + state.filesUrl + '/'
    },
    getFilesByDeigmaThhlastikwnIdIs: state => {
        return state.baseUrl + state.filesUrl + '/getFilesByDeigmaThhlastikwnIs/'
    },
    getFilesSearchUrl: state => {
        return state.baseUrl + state.filesUrl + '/getAllByPaging/'
    },

    // Ct Eidh
    getThhlastikaCtEidosAddUrl: state => {
        return state.baseUrl + state.thhlastikaCtEidosUrl
    },
    getThhlastikaCtEidosAddFromExcelUrl: state => {
        return state.baseUrl + state.thhlastikaCtEidosUrl + '/addEidhFromExcel'
    },
    getThhlastikaCtEidosSearchUrl: state => {
        return state.baseUrl + state.thhlastikaCtEidosUrl + '/getAllByPaging'
    },
    getThhlastikaCtEidosByIdUrl: state => {
        return state.baseUrl + state.thhlastikaCtEidosUrl + '/'
    },
    getThhlastikaCtEidosDistinctUrl: state => {
        return state.baseUrl + state.thhlastikaCtEidosUrl + '/getAllEidh'
    },
    getCtEidhDynamicSearchUrl: state => {
        return state.baseUrl + state.thhlastikaCtEidosUrl + '/search'
    },
    getCtEidhDynamicDownloadUrl: state => {
        return state.baseUrl + state.thhlastikaCtEidosUrl + '/downloadExcel'
    },


    // Ct PressThreats
    getThhlastikaCtPressThreatsAddUrl: state => {
        return state.baseUrl + state.thhlastikaCtPressThreatsUrl
    },
    getThhlastikaCtPressThreatsAddFromExcelUrl: state => {
        return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/addPressThreatsFromExcel'
    },
    getThhlastikaCtPressThreatsSearchUrl: state => {
        return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/getAllByPaging'
    },
    getThhlastikaCtPressThreatsByIdUrl: state => {
        return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/'
    },
    getThhlastikaCtPressThreatsDistinctUrl: state => {
        return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/getAllActCodes'
    },
    getCtPressThreatsDynamicSearchUrl: state => {
        return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/search'
    },
    getCtPressThreatsDynamicDownloadUrl: state => {
        return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/downloadExcel'
    },
    
    // Ct Ornithopanida PressThreats
    getOrnithopanidaCtPressThreatsAddUrl: state => {
        return state.baseUrl + state.ornithopanidaCtPressThreatsUrl
    },
    getOrnithopanidaCtPressThreatsAddFromExcelUrl: state => {
        return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/addPressThreatsFromExcel'
    },
    getOrnithopanidaCtPressThreatsSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/getAllByPaging'
    },
    getOrnithopanidaCtPressThreatsByIdUrl: state => {
        return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '//'
    },
    getOrnithopanidaCtPressThreatsDistinctUrl: state => {
        return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/getAllActCodes'
    },
    getCtPressThreatsDynamicSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/search'
    },
    getCtPressThreatsDynamicDownloadUrl: state => {
        return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/downloadExcel'
    },

    //Ct Ornithopanida Eidi
    getOrnithopanidaCtEidosAddUrl: state => {
        return state.baseUrl + state.ornithopanidaCtEidosUrl
    },
    getOrnithopanidaCtEidosAddFromExcelUrl: state => {
        return state.baseUrl + state.ornithopanidaCtEidosUrl + '/addEidhFromExcel'
    },
    getOrnithopanidaCtEidosSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaCtEidosUrl + '/getAllByPaging'
    },
    getOrnithopanidaCtEidosByIdUrl: state => {
        return state.baseUrl + state.ornithopanidaCtEidosUrl + '/'
    },
    getOrnithopanidaCtEidosDistinctUrl: state => {
        return state.baseUrl + state.ornithopanidaCtEidosUrl + '/getAllEidh'
    },
    getCtEidhDynamicSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaCtEidosUrl + '/search'
    },
    getCtEidhDynamicDownloadUrl: state => {
        return state.baseUrl + state.ornithopanidaCtEidosUrl + '/downloadExcel'
    },

    //Deigma Ornithopanida
     
     getDeigmaOrnithopanidaAddUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl
    },
    getDeigmaOrnithopanidaAddFromExcelUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/addDeigmaOrnithopanidaFromExcel'
    },
    getDeigmaOrnithopanidaSearchUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAllByPaging'
    },
    getDeigmaOrnithopanidaByIdUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/'
    },
    getDeigmaOrnithopanidaAutocompletesUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAutocompletes'
    },
    getDeigmaOrnithopanidaMapMarkersUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAllGeoLocations'
    },
    getDeigmaOrnithopanidaDynamicSearchUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/search'
    },
    getDeigmaOrnithopanidaDynamicDownloadUrl: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/downloadExcel'
    },
    getDeigmaOrnithopanidanAutocompletes: state => {
        return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAutocompletes'
    },

    // Ornithopanida X Eidh
    getOrnithopanidaXEidhAddUrl: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl
    },
    getOrnithopanidaXEidhAddFromExcelUrl: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl + '/addDeigmaOrnithopanidaXEidhFromExcel'
    },
    getOrnithopanidaXEidhSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl + '/getAllByPaging'
    },
    getOrnithopanidaXEidhByIdUrl: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl + '/'
    },
    getOrnithopanidaXEidhByDeigmaOrnithopanidaIdIs: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl + '/getDeigmaOrnithopanidaXSpeciesByDeigmaOrnithopanidaIs/'
    },
    getOrnithopanidaXEidhDynamicSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl + '/search'
    },
    getOrnithopanidaXEidhDynamicDownloadUrl: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl + '/downloadExcel'
    },
    getOrnithopanidaXEidhAutocompletes: state => {
        return state.baseUrl + state.ornithopanidaXEidhUrl + '/getAutocompletes'
    },
    
    // Ornithopanida X PressThreats
    getOrnithopanidaXPressThreatsAddUrl: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl
    },
    getOrnithopanidaXPressThreatsAddFromExcelUrl: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/addDeigmaOrnithopanidaXPressAndThreats'
    },
    getOrnithopanidaXPressThreatsSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/getAllByPaging'
    },
    getOrnithopanidaXPressThreatsByIdUrl: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/'
    },
    getOrnithopanidaXPressThreatsByDeigmaOrnithopanidaIdIs: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/getDeigmaOrnithopanidaXPressThreatsByDeigmaOrnithopanidaIs/'
    },
    getOrnithopanidaXPressThreatsDynamicSearchUrl: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/search'
    },
    getOrnithopanidaXPressThreatsDynamicDownloadUrl: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/downloadExcel'
    },
    getOrnithopanidaXPressThreatsAutocompletes: state => {
        return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/getAutocompletes'
    },
    
    // Thhlastika X Eidh
    getThhlastikaXEidhAddUrl: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl
    },
    getThhlastikaXEidhAddFromExcelUrl: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl + '/addDeigmaThhlastikwnXEidhFromExcel'
    },
    getThhlastikaXEidhSearchUrl: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl + '/getAllByPaging'
    },
    getThhlastikaXEidhByIdUrl: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl + '/'
    },
    getThhlastikaXEidhByDeigmaThhlastikwnIdIs: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl + '/getDeigmaThhlastikwnXEidhByDeigmaThhlastikwnIs/'
    },
    getThhlastikaXEidhDynamicSearchUrl: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl + '/search'
    },
    getThhlastikaXEidhDynamicDownloadUrl: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl + '/downloadExcel'
    },
    getThhlastikaXEidhAutocompletes: state => {
        return state.baseUrl + state.thhlastikaXEidhUrl + '/getAutocompletes'
    },


    // Thhlastika X PressThreats
    getThhlastikaXPressThreatsAddUrl: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl
    },
    getThhlastikaXPressThreatsAddFromExcelUrl: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/addDeigmaThhlastikwnXPressThreatsFromExcel'
    },
    getThhlastikaXPressThreatsSearchUrl: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/getAllByPaging'
    },
    getThhlastikaXPressThreatsByIdUrl: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/'
    },
    getThhlastikaXPressThreatsByDeigmaThhlastikwnIdIs: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/getDeigmaThhlastikwnXPressThreatsByDeigmaThhlastikwnIs/'
    },
    getThhlastikaXPressThreatsDynamicSearchUrl: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/search'
    },
    getThhlastikaXPressThreatsDynamicDownloadUrl: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/downloadExcel'
    },
    getThhlastikaXPressThreatsAutocompletes: state => {
        return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/getAutocompletes'
    },
}

export const mutations = {
    // setSnackbar (state, snackbar) {
    //     state.snackbar = snackbar
    // },
}

export const actions = {
    // setSnackbarSettings ({ commit }, snackbar, snackbarColor, snackbarText) {
        // commit('setSnackbarColor', snackbarColor)
    // },
}