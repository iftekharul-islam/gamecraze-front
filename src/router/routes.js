import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// components
import Home from '../components/Home';
import RentPost from '../components/RentPost';
import Dashboard from '../components/Dashboard';
import Game from '../components/Games';
import Login from "../components/login_registration/Login";
import Registration from "../components/login_registration/Registration";
import GameDetails from '../components/GameDetails';
import Search from "../components/Search";
import Profile from "../components/Profile";
import Categories from "../components/Categories";
import Contacts from "../components/Contacts";
import OTP from "../components/login_registration/OTP";
import GameList from "../components/admin/GameList";
import UploadGame from "../components/admin/UploadGame";
// import AdminLogin from "../components/admin/AdminLogin";
import GameEdit from "../components/admin/GameEdit";
// import Navbar from "../components/admin/partial/Navbar"
import Password from "../components/login_registration/Password";
import ForgotPassword from "../components/forgot_password/ForgotPassword";
import NotFoundPage from "../components/NotFoundPage";
import RentView from "../components/RentView";


let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/games',
            component: Game
        },
        {
            path: '/login',
            component: Login,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/registration',
            component: Registration,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
            props: true
        },
        {
            path: '/game-details',
            name: 'GameDetails',
            component: GameDetails,
            props: true
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/categories',
            name: 'Category',
            component: Categories,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/otp-verification',
            name: 'OTP',
            component: OTP,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/game-list',
            name: 'GameList',
            component: GameList,
        },
        {
            path: '/upload-game',
            name: 'UploadGame',
            component: UploadGame,
        },
        {
            path: '/game-edit',
            name: 'GameEdit',
            component: GameEdit,
        },
        {
            path: '/password-setup',
            name: 'Password',
            component: Password,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/reset-password',
            name: 'reset-password',
            component: ForgotPassword,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/rent-post',
            name: 'RentPost',
            component: RentPost,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/rent-view/:id/:slug',
            name: 'RentView',
            component: RentView,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '*',
            name: 'NotFoundPage',
            component: NotFoundPage,
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token')) {
            return next()
        }
        return next('login')
    }
    next();
})

export default router
