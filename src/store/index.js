import createPersistedState from "vuex-persistedstate";

export const storage = {
    state: {
        token: '',
        profile: null,
        searchResult: [],
        admin: null,
        signup: {
            name: '',
            phoneNumber: ''
        }
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
        },
        setSignUp(state, payload) {
            state.signup.name = payload.name
            state.signup.phoneNumber = payload.phone_number
        },
        setPhoneNumber(state, payload) {
            state.signup.phoneNumber = payload
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
        },
        setSignUp(context, payload) {
            context.commit('setSignUp', payload)
        },
        setPhoneNumber (context, payload) {
            context.commit('setPhoneNumber', payload)
        }
    },
    // plugins: [createPersistedState()],
}