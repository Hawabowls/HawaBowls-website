let store = require('store')
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
            if (response.data) {
                /* commit('setIngredient', response.data)
 */ const { createdAt, updatedAt, __v, _id, ...ingredient } = response.data
                console.log(ingredient)
                return ingredient
            }


        } catch (e) {
            console.log(e)
        }
    },
    async updateIngredient({ commit }, payload) {
        try {
            console.log(payload.id)
            let tok = store.get('tokenAd')
            let response = await this.$axios.patch(`/api/ingredients/${payload.id}`, payload.ingredient,
                {
                    headers: {
                        Authorization: `Bearer ${tok}`
                    }
                });
            console.log(response.data)

            return response


        } catch (e) {
            console.log(e)
        }


    },
    async createIngredient({ commit }, payload) {
        try {
            let tok = store.get('tokenAd')
            let response = await this.$axios.post(`/api/ingredient/${payload.id}`, payload.ingredient,
                {
                    headers: {
                        Authorization: `Bearer ${tok}`
                    }
                });
            console.log(response.data)
            if (response.data) {
                return response.data

            }


        } catch (e) {
            console.log(e)
        }


    },
}