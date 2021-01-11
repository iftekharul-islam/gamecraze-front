import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// components
import Home from '../components/Home';
import RentPost from '../components/RentPost';
import Dashboard from '../components/Dashboard';
import Game from '../components/Games';
import Login from "../components/Login/Login";
import Registration from "../components/Login/Registration";
import EmailRegistration from "../components/Login/EmailRegistration";
import GameDetails from '../components/GameDetails';
import Search from "../components/Search";
import Profile from "../components/Profile";
import Contacts from "../components/Contacts";
import NoticeBoard from "../components/NoticeBoard";
import NewsRoom from "../components/Newsroom";
import NewsStory from "../components/NewsStory";
import OTP from "../components/Login/OTP";
import RentView from "../components/RentView";
import Password from "../components/Login/Password";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ResetPassword from "../components/ForgotPassword/ResetPassword";
import ProfileUpdate from "../components/ProfileUpdate";
import UpdatePassword from '../components/Login/UpdatePassword';

import NotFoundPage from "../components/NotFoundPage";
import AddToCart from "../components/AddToCart";
import AllRentPost from "../components/AllRentPost";
import Payment from "../components/Payment";
import Success from "../components/payment/Success";
import Fail from "../components/payment/Fail";
import RentDetails from "../components/RentDetails";
import RentPostedUser from "@/components/RentPostedUser";
import Support from "../components/Support";

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            component: Home,
            meta: {
                requiresAuth: false
            }
        },
        {
            name: 'games',
            path: '/games',
            component: Game,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                requiresAuth: false,
                bodyClass: 'bg-light'
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
            path: '/email-registration',
            component: EmailRegistration,
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
            path: '/game-details/:id',
            name: 'GameDetails',
            component: GameDetails,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/add-to-cart',
            name: 'AddToCart',
            component: AddToCart,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/support',
            name: 'support',
            component: Support,
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
            path: '/notice-board',
            name: 'NoticeBoard',
            component: NoticeBoard,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/news',
            name: 'Newsroom',
            component: NewsRoom,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/news/:id',
            name: 'NewsStory',
            component: NewsStory,
            props: true,
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
            path: '/password-setup',
            name: 'Password',
            component: Password,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/update-password/:token',
            name: 'UpdatePassword',
            component: UpdatePassword,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
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
                requiresAuth: false
            }
        },
        {
            path: '/reset-password',
            name: 'ResetPassword',
            component: ResetPassword,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/update-profile',
            name: 'UpdateProfile',
            component: ProfileUpdate,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/payment/:amount',
            name: 'Payment',
            component: Payment,
            props: true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/all-rent-posts',
            name: 'AllRentPost',
            component: AllRentPost,
        },
        {
            path: '/all-rent-posts/rent-view/:id/:slug',
            name: 'RentView',
            component: RentView,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/success',
            name: 'Success',
            component: Success,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/fail',
            name: 'Fail',
            component: Fail,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/rent-details/:id',
            name: 'RentDetails',
            component: RentDetails,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/rent-posted-users/:id',
            name: 'RentPostedUser',
            component: RentPostedUser,
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
