export const storage = {
    state: {
        token: '',
        profile: null,
        searchResult: [],
        admin: null,
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
        },
        setAdmin(state, payload) {
            state.admin = payload
        }
    },
    actions: {
        setToken(context, payload) {
            context.commit('setToken', payload)
        },
        setProfile(context, payload) {
            context.commit('setProfile', payload)
        },
        setAdmin(context, payload) {
            context.commit('setAdmin', payload)
        }
    }
}