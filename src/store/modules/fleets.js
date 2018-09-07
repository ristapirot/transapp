import api from '@/services/api/'

const state = {
    fleets: []
}

const getters = {
    getFleets: state => state.fleets
}

const mutations = {
    addFleet: (state, creds) => {
        state.fleets.push(creds)
    },
    getFleets: (state, payload) => {
        state.fleets = payload
    } 
}

const actions = {
    addFleet({commit}, creds) {
        return api.addFleet(creds).then(result => {
            if(result.data.success) {
                commit('addFleet', creds)
            }
        })
    },
    getFleetsToStore({commit}) {
        return api.getFleets().then(result => {
            commit('getFleets', result.data)
        })
    }
}

export default {
state,
getters,
mutations,
actions
}
  