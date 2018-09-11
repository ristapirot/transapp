import api from '@/services/api/'

const state = {
    
}

const getters = {

}

const mutations = {
    
}

const actions = {
    updateProfile({commit}, creds) {
        return api.updateProfile(creds).then(result => {
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
  