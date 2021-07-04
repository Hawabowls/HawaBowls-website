let store = require('store')
export const state = () => ({
    loggedStaff: null,
    authenticatedStaff: false,
    tokenAd: ""
})

export const getters = {
    getStaff: (state) => state.loggedStaff,
    isAuthenticated: (state) => state.authenticatedStaff
}

export const mutations = {
    setCurrentToken: (state, token) => {
        state.tokenAd = token
        store.set('tokenAd', token)
    },
    setAuthenticatedStaff(state, val) {
        state.authenticatedStaff = val
    },
    setCurrentStaff: (state, staff) => state.loggedStaff = staff,
    removeToken: (state) => {
        state.tokenAd = "";
        store.remove('tokenAd')
    },
}


export const actions = {
    async login({ commit }, form) {
        try {
            const client = await this.$axios.post('/api/admin/login', form)
            commit('setCurrentStaff', client.data.staff)
            commit('setCurrentToken', client.data.token)
            commit('setAuthenticatedStaff', true)
            return client
        } catch (error) {
            return { error: error.message }
        }
    },
    async register({ commit }, form) {
        try {
            console.log(form)
            const client = await this.$axios.post('/api/admin/register', form)
            commit('setCurrentStaff', client.data.staff)
            commit('setCurrentToken', client.data.token)
            commit('setAuthenticatedStaff', true)
            return client
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }

    },
    async update({ commit }, id, form) {
        try {
            console.log(form)
            const client = await this.$axios.patch(`/api/admin/${id}`, form)
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

            const client = await this.$axios.post(`/api/admin/${id}`, {
                headers: {
                    Authorization: `Bearer ${state.tokenAd}`
                }
            })
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
        commit('removeToken');
        commit('setCurrentStaff', null)
        commit('setAuthenticatedStaff', false)
    },
    async reconnection({ commit }, token) {
        try {

            const client = await this.$axios.get(`/api/admin/reconnect`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            commit('setCurrentToken', client.data.token)
            commit('setCurrentStaff', client.data.staff)
            commit('setAuthenticatedStaff', true)
            return client
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    }


}