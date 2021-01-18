import axios from 'axios'
import router from "../router/routes";
import {swal} from 'vue-swal';

export const storage = {
    state: {
        lendWeek: [],
        checkpointId: [],
        searchResult: [],
        admin: null,
        signup: {
            name: '',
            phoneNumber: ''
        },
        email:'',
        rentPostDetails: {},
        //auth user info
        token: null,
        userId: null,
        user: null,
        notSetPassword: true,
        notFoundEmail: false,
        setPasswordPopUp: false,
        isSubmitLoading: false,
        isEmailLoading: false,
        numberExists: false,
        wrongOTP: false,
        inactiveUser: false,
        timeout: false,
        isProfileUpdating: false,
        postId: [],
        cart: null,
        totalAmount: 0,
        setupPasswordUser: null,
        otpNotFound: '',
        totalPrice: 0
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
        pushCheckpointId (state, payload) {
            state.checkpointId.push(payload)
            localStorage.setItem('checkpointId', JSON.stringify(state.checkpointId))
        },
        //get data from local to global storage
        setCheckpointId (state, payload) {
            state.checkpointId = payload;
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
            state.checkpointId.splice(payload, 1)
            localStorage.setItem('postId', JSON.stringify(state.postId))
            localStorage.setItem('lendWeek', JSON.stringify(state.lendWeek))
            localStorage.setItem('checkpointId', JSON.stringify(state.lendWeek))
        },
        clearCart (state) {
            state.postId = []
            state.lendWeek = []
            state.checkpointId = []
            localStorage.setItem('postId', JSON.stringify(state.postId))
            localStorage.setItem('lendWeek', JSON.stringify(state.lendWeek))
            localStorage.setItem('checkpointId', JSON.stringify(state.lendWeek))

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
        setEmail (state, payload) {
            state.email = payload
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
            state.numberExists = false
        },
        setNotFoundEmail (state, payload) {
            state.notFoundEmail = payload
        },
        setNotSetPassword (state, payload) {
            state.notSetPassword = payload
        },
        setPasswordPopUp (state, payload) {
            state.setPasswordPopUp = payload
        },
        setSubmitLoading (state, payload) {
            state.isSubmitLoading = payload
        },
        setEmailLoader (state, payload) {
            state.isEmailLoading = payload
        },
        setNumberExist (state, payload) {
            state.numberExists = payload
        },
        setWrongOTP (state, payload) {
            state.wrongOTP = payload
        },
        setInactiveUser (state, payload) {
            state.inactiveUser = payload
        },
        setTimeout (state, payload) {
            state.timeout = payload
        },
        setUser (state, payload) {
            state.user = payload
        },
        setUserId (state, payload) {
            state.userId = payload
        },
        setSetupPasswordUser (state, payload) {
            state.setupPasswordUser = payload
        },
        setSetupPasswordUserFromStorage (state, payload) {
            state.setupPasswordUser = payload
        },
        setOTPNotFound (state, payload) {
            state.otpNotFound = payload
        },
        setTotalPrice(state, payload) {
            state.totalPrice = payload
        },
        setIsProfileUpdateing(state, payload) {
            state.isProfileUpdating = payload
        }
    },
    actions: {
        pushPostId (context, payload) {
            context.commit('pushPostId', payload)
        },
        pushLendWeek (context, payload) {
            context.commit('pushLendWeek', payload)
        },
        setCheckpointId (context) {
            const checkpointId = JSON.parse(localStorage.getItem('checkpointId'))
            if (!checkpointId) {
                return;
            }
            context.commit('setCheckpointId', checkpointId)
        },
        AddCartPostId (context) {
            const postId = JSON.parse(localStorage.getItem('postId'))
            if (!postId) {
                return;
            }
            context.commit('AddCartPostId', postId)
        },
        pushCheckpointId (context, payload) {
            context.commit('pushCheckpointId', payload)
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
        setNumberExist (context, payload) {
            context.commit('setNumberExist', payload)
        },
        setEmail (context, payload) {
            context.commit('setEmail', payload)
        },
        setRentPostDetails(context, payload) {
            context.commit('setRentPostDetails', payload)
        },
        setEmailLoader(context, payload) {
            context.commit('setEmailLoader', payload)
        },
        login ({commit}, authData) {
            axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'login', {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
        })
        .then(res => {
            console.log(res, 'response')
            if (!res.data.error) {
                commit('setInactiveUser', false)
                commit('setNotFoundEmail', false)
                commit('authUser', {
                    token: res.data.token,
                    user: res.data.user
                })
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', JSON.stringify(res.data.user.id))
                localStorage.setItem('user', JSON.stringify(res.data.user))
                localStorage.removeItem('setupPasswordUser')
                router.push('/').catch(err => {});
            }
            else {
                commit('setInactiveUser', res.data.message === 'inactiveUser')
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
            localStorage.removeItem('postId')
            localStorage.removeItem('setupPasswordUser')

            router.push('/login').catch(err => {});
        },
        verifyOtp({commit}, payload) {
            commit('setSubmitLoading', true)
            axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'verify-otp', payload).then(response => {
                console.log('otp-verification: ', response);

                if (response.data.error === false) {
                    commit('authUser', {
                        token: response.data.token,
                        user: response.data.user
                    })
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userId', JSON.stringify(response.data.user.id))
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    commit('setSubmitLoading', false)
                    commit('setInactiveUser', false)
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
                commit('setInactiveUser', response.data.message === 'inactiveUser')
                commit('setWrongOTP', response.data.message === 'wrongOtp')
                commit('setTimeout', response.data.message === 'timeout')
                commit('setOTPNotFound', response.data.message === 'otpNotFound')
                commit('setSubmitLoading', response.data.message === 'timeout')

            });
        },
        emailVerify({commit}, payload) {
            commit('setSubmitLoading', true)
            commit('setNumberExist', false)
            axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'verify-email', payload).then(response => {
                if (response.data.error === false) {
                    commit('authUser', {
                        token: response.data.token,
                        user: response.data.user
                    })
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userId', JSON.stringify(response.data.user.id))
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    commit('setSubmitLoading', false)
                    commit('setInactiveUser', false)
                    router.push('/').catch(err => {});
                } else {
                    console.log(response.data.message);
                    commit('setNumberExist', true)
                    commit('setSubmitLoading', false)
                }
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
                        router.push('/').catch(err => {});
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

            commit('setIsProfileUpdateing', true);
            axios.put(process.env.VUE_APP_GAMEHUB_BASE_API + 'users', payload, config).then(response => {
                commit('setIsProfileUpdateing', false);
                if (response.data) {
                    if (response.data.data) {
                        commit('setUser', response.data.data);
                        commit('setUserId', response.data.data.id);
                        localStorage.setItem('userId', JSON.stringify(response.data.data.id))
                        localStorage.setItem('user', JSON.stringify(response.data.data));
                    } else {
                        commit('setUser', response.data);
                        commit('setUserId', response.data.id);
                        localStorage.setItem('userId', JSON.stringify(response.data.id))
                        localStorage.setItem('user', JSON.stringify(response.data));
                    }
                    // commit('setUser', response.data);
                    // commit('setUserId', response.data.id);
                    // localStorage.setItem('userId', JSON.stringify(response.data.id))
                    // localStorage.setItem('user', JSON.stringify(response.data));

                    if (payload.name || payload.lastName || payload.gender || payload.birth_date || payload.email || payload.phone_number || payload.id_number || payload.id_image || payload.address || payload.city || payload.postCode || payload.image) {
                        swal("Profile Updated!", "Profile Update Successful!", "success");
                        router.push('/profile').catch(err => {});
                    }
                    else {
                        router.push('/').catch(err => {});
                    }
                }
            });
        },
        checkPassword ({commit, dispatch}, payload) {
            axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'check-email-exist', payload).then(response => {
                if (response.data.error === false) {
                    axios.post(process.env.VUE_APP_GAMEHUB_BASE_API + 'check-password', payload).then(response => {
                        console.log('check if password exists: ', response.data);
                        if (response.data.error === true) {
                            commit('setNotSetPassword', false);
                        }
                        else {
                            // this.$emit('stopLoader');
                            commit('setSetupPasswordUser', response.data.user);
                            localStorage.setItem('setupPasswordUser', JSON.stringify(response.data.user))
                            // commit('setPasswordPopUp', true);
                            commit('setEmailLoader', false);
                            if (response.data.isPaswordEmpty) {
                                swal('Reset Password', 'A verification email has been sent. Please check your email.', 'success');
                            }
                        }
                    })
                }
                else {
                    console.log("Email is not registered")
                    router.push('/email-registration')
                }

            })

        },
        setSetupPasswordUserFromStorage (context) {
            const user = JSON.parse(localStorage.getItem('setupPasswordUser'))
            if (!user) {
                return;
            }
            context.commit('setSetupPasswordUserFromStorage', user)
        },
        loginUserAfterVerification ({ commit }, authData) {
            commit('authUser', {
                token: authData.token,
                user: authData.user
            })
            localStorage.setItem('token', authData.token)
            localStorage.setItem('userId', JSON.stringify(authData.user.id))
            localStorage.setItem('user', JSON.stringify(authData.user))
            localStorage.removeItem('setupPasswordUser')
            router.push('/').catch(err => { });
        },
        setTotalPrice({ commit }, price) {
            commit('setTotalPrice', price)
        }
    },
}
