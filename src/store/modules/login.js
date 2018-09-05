import api from '@/services/api/'

const state = {
    isLoggedIn: !!localStorage.getItem('token'),
    currentUser: {}
  }
  
  const getters = {
    getLoggedUser: state => {
        return {
            isLogged: state.isLoggedIn,
            user: state.currentUser
        }
    }
  }
  
  const mutations = {
    login: (state) => {
        state.pending = true;
    },
    loginSuccess: (state, { user }) => {
        state.isLoggedIn = true;
        state.pending = false;
        state.currentUser = user;
        alert('Logged in!')
    },
    logout: (state) => {
        state.isLoggedIn = false;
        state.currentUser = {}
    }
  }
  
  const actions = {
    login({commit}, creds) {
        commit('login');
        return api.login(creds).then(result => {
            if (result.data.success) {
                var user = result.data.user;
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('user', JSON.stringify(user));
                commit('loginSuccess', { user });
            }
        })
    },
    logout({commit}) {
        localStorage.removeItem("token");
        localStorage.removeItem('user');
        commit('logout');
    }
  }
  
  export default {
    state,
    getters,
    mutations,
    actions
  }
  