export const state = () => ({
    ingredients: [],
    ingredient: {}
})

export const getters = {
    getIngredients: (state) => state.ingredients,
    getIngredient: (state) => state.ingredient,
}

export const mutations = {
    setIngredients: (state, ingredients) => (state.allIngredients = ingredients),
    setIngredient: (state, ingredient) => (state.ingredient = ingredient),
    removeIngredient: (state, ingredient) => {
        let id = state.ingredients.findIndex(x => x._id == ingredient._id)
        state.ingredients.splice(id, 1)
    }
}


export const actions = {

    async getAllIngredients({ commit }) {
        try {
            let response = await this.$axios.get('/api/ingredients');
            if (response.data) {
                commit('setIngredients', response.data)

            }
            return response.data

        } catch (e) {
            console.log(e)
        }
    },
    async getIngredient({ commit }, payload) {
        try {
            let response = await this.$axios.get(`/api/ingredients/${payload}`);
            console.log(response.data)
            if (response.data) {
                commit('setIngredient', response.data)

            }
            return response.data

        } catch (e) {
            console.log(e)
        }
    }
}