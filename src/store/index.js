export const storage = {
    state: {
        token: '',
        profile: null,
        searchResult: []
    },
    getters: {
        getToken(state) {
          return state.token
        },
        getProfile(state) {
            return state.profile
        },
        getSearchResult(state) {
            return state.searchResult
        }
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        },
        setProfile(state, payload) {
            state.profile = payload
        },
        addToSearchResult(state, payload) {
            state.searchResult = payload
        }
    },
    actions: {
        setToken(context, payload) {
            context.commit('setToken', payload)
        },
        setProfile(context, payload) {
            context.commit('setProfile', payload)
        }
    }
}