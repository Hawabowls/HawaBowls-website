export const state = () => ({
    loggedUser: null,
    authenticated: false,
    token: ""
})

export const getters = {
    getUser: (state) => state.loggedUser,
    isAuthenticated: (state) => state.authenticatedStaff

}

export const mutations = {
    setCurrentToken: (state, token) => {
        state.token = token
    },
    setAuthenticated(state, val) {
        state.authenticated = val
    },
    setCurrentUser: (state, user) => state.loggedUser = user,
    removeToken: (state) => {
        state.token = "";
        store.remove('token')
    },
}

export const actions = {
    async login({ commit }, form) {
        try {
            const client = await this.$axios.post('/api/login', form)
            commit('setCurrentUser', client.data.user)
            commit('setCurrentToken', client.data.token)
            commit('setAuthenticated', true)
            return client
        } catch (error) {
            return { error: error.message }
        }
    },
    async register({ commit }, form) {
        try {
            console.log(form)
            const client = await this.$axios.post('/api/register', form)
            commit('setCurrentUser', client.data.user)
            commit('setCurrentToken', client.data.token)
            commit('setAuthenticated', true)
            return client
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }

    },
    async update({ commit }, id, form) {
        try {
            console.log(form)
            const client = await this.$axios.post(`/api/${id}`, form)
            console.log(client)
            commit('setCurrentStaff', client.data.staff)
            return client
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }

    },

    async signOutUser({ commit }) {
        try {

            const client = await this.$axios.post(`/api/${id}`, {
                headers: {
                    Authorization: `Bearer ${state.token}`
                }
            })
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
        commit('removeToken');
        commit('setCurrentUser', null)
        commit('setAuthenticated', false)
    },

    async reconnection({ commit, state }) {
        try {

            const client = await this.$axios.get(`/api/reconnect`, {
                headers: {
                    Authorization: `Bearer ${state.token}`
                }
            })
            commit('setCurrentToken', client.data.token);
            commit('setCurrentUser', client.data.user)
            commit('setAuthenticated', true)

        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    }
}
