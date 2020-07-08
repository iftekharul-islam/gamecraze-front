import axios from 'axios'
import router from "../router/routes";

export const storage = {
    state: {
        searchResult: [],
        admin: null,
        signup: {
            name: '',
            phoneNumber: ''
        },
        rentPostDetails: {},
        //auth user info
        token: null,
        userId: null,
        user: null
    },
    getters: {
        user (state) {
            return state.user
        },
        ifAuthenticated (state) {
            return state.token !== null
        },
        getSearchResult(state) {
            return state.searchResult
        }
    },
    mutations: {
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
        },
        setRentPostDetails(state, payload) {
            state.rentPostDetails = payload
        },
        authUser (state, userData) {
            state.token = userData.token
            state.userId = userData.user.id
            state.user = userData.user
        },
        clearAuth (state) {
            state.token = null
            state.userId = null
            state.user = null
        }
    },
    actions: {
        setAdmin(context, payload) {
            context.commit('setAdmin', payload)
        },
        setSignUp(context, payload) {
            context.commit('setSignUp', payload)
        },
        setPhoneNumber (context, payload) {
            context.commit('setPhoneNumber', payload)
        },
        setRentPostDetails(context, payload) {
            context.commit('setRentPostDetails', payload)
        },
        signup ({commit}, authData) {
            axios.post('register', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res)
                router.push("/dashboard")
            })
            .catch(error => console.log(error))
        },
        login ({commit}, authData) {
            axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'login', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
        })
        .then(res => {
            console.log(res)
            commit('authUser', {
                token: res.data.token,
                user: res.data.user
            })
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', JSON.stringify(res.data.user.id))
            localStorage.setItem('user', JSON.stringify(res.data.user))
            router.push('/').catch(err => {});
        })
        .catch(error => console.log(error))
        },
        AutoLogin ({commit}) {
            const localToken = localStorage.getItem('token')
            if (!localToken) {
                return
            }

            const token = localStorage.getItem('token')
            const user = JSON.parse(localStorage.getItem('user'))
            commit('authUser', {
                token: token,
                user: user,
            })
        },
        logout({commit}) {
            commit('clearAuth')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('user')

            router.push('/login').catch(err => {});
        },
        verifyOtp({commit}, payload) {
            axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'verify-otp', payload).then(response => {
                console.log(response);
                if (response.data.error === false) {
                    commit('authUser', {
                        token: response.data.token,
                        user: response.data.user
                    })
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userId', JSON.stringify(response.data.user.id))
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    if (response.data.newUser === false) {
                        if (response.data.user.name) {
                            router.push('/').catch(err => {});
                        }
                        else {
                            router.push('/password-setup').catch(err => {});
                        }
                    }
                    else {
                        router.push('/password-setup').catch(err => {});
                    }
                }
            });
        }
    },
}
