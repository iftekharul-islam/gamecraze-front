import axios from 'axios'
import router from "../router/routes";

import {swal} from 'vue-swal'


export const storage = {
    state: {
        lendWeek: [],
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
        user: null,
        notFoundEmail: false,
        isSubmitLoading: false,
        wrongOTP: false,
        timeout: false,
        postId: [],
        cart: null,
        totalAmount: 0
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
        pushPostId (state, payload) {
            if (state.postId.includes(payload)) {
                return;
            }
            state.postId.push(payload)
            localStorage.setItem('postId', JSON.stringify(state.postId))
        },
        pushLendWeek (state, payload) {
            state.lendWeek.push(payload)
            localStorage.setItem('lendWeek', JSON.stringify(state.lendWeek))
        },
        AddCartPostId (state, payload) {
            state.postId = payload
        },
        setLendWeek (state, payload) {
            state.lendWeek = payload
        },
        removePostId (state, payload) {
            state.postId.splice(payload, 1)
            state.lendWeek.splice(payload, 1)
            localStorage.setItem('postId', JSON.stringify(state.postId))
            localStorage.setItem('lendWeek', JSON.stringify(state.lendWeek))
        },
        clearCart (state) {
            state.postId = []
            state.lendWeek = []
            localStorage.setItem('postId', JSON.stringify(state.postId))
            localStorage.setItem('lendWeek', JSON.stringify(state.lendWeek))
        },
        addToSearchResult (state, payload) {
            state.searchResult = payload
        },
        setAdmin (state, payload) {
            state.admin = payload
        },
        setSignUp (state, payload) {
            state.signup.name = payload.name
            state.signup.phoneNumber = payload.phone_number
        },
        setPhoneNumber (state, payload) {
            state.signup.phoneNumber = payload
        },
        setRentPostDetails (state, payload) {
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
            state.wrongOTP = false
            state.timeout = false
            state.isSubmitLoading = false
        },
        setNotFoundEmail (state, payload) {
            state.notFoundEmail = payload
        },
        setSubmitLoading (state, payload) {
            state.isSubmitLoading = payload
        },
        setWrongOTP (state, payload) {
            state.wrongOTP = payload
        },
        setTimeout (state, payload) {
            state.timeout = payload
        },
        setUser (state, payload) {
            state.user = payload
        },
    },
    actions: {
        pushPostId (context, payload) {
            context.commit('pushPostId', payload)
        },
        pushLendWeek (context, payload) {
            context.commit('pushLendWeek', payload)
        },
        AddCartPostId (context) {
            const postId = JSON.parse(localStorage.getItem('postId'))
            if (!postId) {
                return;
            }
            context.commit('AddCartPostId', postId)
        },
        setLendWeek (context) {
            const lendWeek = JSON.parse(localStorage.getItem('lendWeek'))
            if (!lendWeek) {
                return;
            }
            context.commit('setLendWeek', lendWeek)
        },
        removePostId (context, payload) {
            context.commit('removePostId', payload)
        },
        clearCart (context) {
            context.commit('clearCart')
        },
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
        login ({commit}, authData) {
            axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'login', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
        })
        .then(res => {
            console.log(res)
            if (!res.data.error) {
                commit('setNotFoundEmail', false)
                commit('authUser', {
                    token: res.data.token,
                    user: res.data.user
                })
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', JSON.stringify(res.data.user.id))
                localStorage.setItem('user', JSON.stringify(res.data.user))
                router.push('/').catch(err => {});
            }
            else {
                commit('setNotFoundEmail', true)
            }
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
            commit('setSubmitLoading', true)
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
                    commit('setSubmitLoading', false)
                    if (response.data.newUser === false) {
                        if (payload.email) {
                            router.push('/reset-password').catch(err => {});
                        }
                        else if (response.data.user.name) {
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

                commit('setWrongOTP', response.data.message === 'wrongOtp')
                commit('setTimeout', response.data.message === 'timeout')
                commit('setSubmitLoading', false)

            });
        },
        verifyPasswordResetCode ({commit, dispatch}, payload) {
            if (payload.resetOption === 'email') {
                commit('setSubmitLoading', true)
                axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'verify-reset-code', payload).then(response => {
                    if (response.data.error === false) {
                        commit('authUser', {
                            token: response.data.token,
                            user: response.data.user
                        })
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('userId', JSON.stringify(response.data.user.id))
                        localStorage.setItem('user', JSON.stringify(response.data.user))
                        router.push('/reset-password').catch(err => {});
                    }
                    commit('setWrongOTP', response.data.message === 'wrongOtp')
                    commit('setTimeout', response.data.message === 'timeout')
                    commit('setSubmitLoading', false)
                })
            }
            else {
                dispatch('verifyOtp', payload)
            }
        },
        updateUserDetails ({commit}, payload) {
            var config = {
                headers: {
                    'Authorization': 'Bearer ' + this.state.token
                }
            }
            axios.put(process.env.VUE_APP_GAMEHUB_BASE_API + 'users', payload, config).then(response => {
                if (response.data) {
                    commit('setUser', response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                    if (payload.name || payload.gender || payload.birth_date || payload.email || payload.phone_number || payload.id_number || payload.id_image || payload.address || payload.city || payload.postCode || payload.image) {
                        swal("Profile Updated!", "Profile Update Successful!", "success");
                        router.push('/profile').catch(err => {});
                    }
                    else {
                        swal("Welcome to Gamehub", "Rent Your Game and Earn", "success");
                        router.push('/').catch(err => {});
                    }
                }
            });
        }
    },
}
