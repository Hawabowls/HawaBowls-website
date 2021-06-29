export const state = () => ({
    loggedUser: null,
    token: ""
})

export const getters = {
    getUser: (state) => state.loggedUser,


}

export const mutations = {
    setCurrentToken: (state, token) => {
        state.token = token
    },
    setCurrentUser: (state, user) => state.loggedUser = user
}

export const actions = {
    async login({ commit }, form) {
        try {
            const client = await this.$axios.post('/api/login', form)
            commit('setCurrentUser', client.data.user)
            commit('setCurrentToken', client.data.token)
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
            return client
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }

    },

    async signOutUser({ commit }) {
        try {

            const client = await this.$axios.post(`/api/${id}`)
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
        commit('setCurrentToken', "");
        commit('setCurrentUser', null)
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

        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    }
}
