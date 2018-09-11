import api from '@/services/api/'

const state = {
    fleets: [],
    fleetsByUser: []
}

const getters = {
    getFleets: state => state.fleets,
    getFleetsByUser: state => state.fleetsByUser
}

const mutations = {
    addFleet: (state, creds) => {
        state.fleets.push(creds)
    },
    getFleets: (state, payload) => {
        state.fleets = payload
        if (localStorage.getItem('user')) {
            state.fleetsByUser = state.fleets.filter(el => el.createdBy.name === JSON.parse(localStorage.getItem('user')).name)
        }
    },
    deletePost: (state, postId) => {
        state.fleets = state.fleets.filter(el => el._id !== postId)
        if (localStorage.getItem('user')) {
            state.fleetsByUser = state.fleets.filter(el => el.createdBy.name === JSON.parse(localStorage.getItem('user')).name)
        }
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
    },

    updateFleetsByUser({commit},{ postId, creds }) {
        return api.updateFleetsByUser({ postId, creds }).then(result => {
            console.log(result)
        })
    },

    deleteFleets({commit}, postId) {
        return api.deleteFleets(postId).then(result => {
            commit('deletePost', postId)
            console.log(result)
        })
    }
}

export default {
state,
getters,
mutations,
actions
}
  