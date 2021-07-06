let store = require('store')
export const state = () => ({
    articles: [],
    article: {}
})

export const getters = {
    getArticles: (state) => state.articles,
    getArticle: (state) => state.article,
}

export const mutations = {
    setArticles: (state, articles) => (state.articles = articles),
    setArticle: (state, article) => (state.article = article),
    removeArticle: (state, article) => {
        let id = state.articles.findIndex(x => x._id == article._id)
        state.articles.splice(id, 1)
    }
}


export const actions = {
    async getAllArticles({ commit }) {
        try {
            let response = await this.$axios.get('/api/articles');
            if (response.data) {
                commit('setArticles', response.data)

            }
            return response.data

        } catch (e) {
            console.log(e)
        }
    },

    async getArticle({ commit }, payload) {
        try {
            let response = await this.$axios.get(`/api/articles/${payload}`);
            if (response.data) {
                /* commit('setIngredient', response.data)
 */ const { createdAt, updatedAt, __v, _id, ...article } = response.data
                console.log(article)
                return article
            }


        } catch (e) {
            console.log(e)
        }
    }
    ,
    async updateArticle({ commit }, payload) {
        try {
            console.log(payload.id)
            let tok = store.get('tokenAd')
            let response = await this.$axios.patch(`/api/articles/${payload.id}`, payload.article,
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
    async createArticle({ commit }, payload) {
        try {
            let tok = store.get('tokenAd')
            let response = await this.$axios.post(`/api/articles`, payload.ingredient,
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