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
import RentPostedUser from "../components/RentPostedUser";
import Support from "../components/Support";
import Faq from "../components/Faq";
import About from '../components/About';
import Join from '../components/JoinUs';
import Sponsors from '../components/Sponsors';
import Shop from '../components/Shop';
import Privacy from '../components/Privacy';
import Terms from '../components/Terms';
import Forum from '../components/Forum';
import Stats from '../components/Stats';
import RentPostedBy from '../components/RentPostedBy';
import RentPricing from '../components/RentPostedByPriceList';
import Elite from '../components/Elite';
import Rookie from '../components/Rookie';
import Tournament from '../components/Tournament';
import LendNotice from '../components/LendNotice';
import PricePlan from '../components/PricePlan';
import RatingList from '../components/RatingList';
import RenterRatingList from '../components/RenterRatingList';
import RentPostDetails from '../components/RentPostDetails';
import OrderDetails from '../components/OrderDetails';
import SellPosts from '../components/SellPosts';
import PostDetails from '../components/PostDetails';
import SellPost from '../components/SellPostHelp'
import GamebazarHome from '../components/GamebazarHome';
import GamebazarAd from '../components/GamebazarAd';

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            name: 'Home',
            component: Home,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/home',
            name: 'home',
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
            path: '/game-details/:slug',
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
            props: true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/cart',
            name: 'AddToCart',
            component: AddToCart,
            meta: {
                requiresAuth: true
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
            path: '/frequently-asked-questions',
            name: 'Faq',
            component: Faq,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/about-us',
            name: 'About',
            component: About,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/join-us',
            name: 'Join',
            component: Join,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/sponsors',
            name: 'Sponsors',
            component: Sponsors,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/terms',
            name: 'Terms',
            component: Terms,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/elite',
            name: 'Elite',
            component: Elite,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/rookie',
            name: 'Rookie',
            component: Rookie,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/forum',
            name: 'Forum',
            component: Forum,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/stats',
            name: 'Stats',
            component: Stats,
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
                requiresAuth: true
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
            path: '/news/:slug',
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
            path: '/rent-posted-users/:slug',
            name: 'RentPostedBy',
            component: RentPostedBy,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/rent-price/:slug',
            name: 'RentPricing',
            component: RentPricing,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/tournament',
            name: 'Tournament',
            component: Tournament,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/lend-notice',
            name: 'lend-notice',
            component: LendNotice,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: PricePlan,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/lender-rating-list',
            name: 'lender-rating-list',
            component: RatingList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/renter-rating-list',
            name: 'ratingList',
            component: RenterRatingList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/:id/order-details',
            name: 'order-details',
            component: OrderDetails,
            props: true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/:id/:slug',
            name: 'rent-post-details',
            component: RentPostDetails,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/sell-posts',
            name: 'sell-post',
            component: SellPosts,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/sell-post/:id/:slug',
            name: 'post-details',
            component: PostDetails,
            props: true,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/about-sell-post',
            name: 'sell-post-help',
            component: SellPost,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/gamebazar',
            name: 'gamebazar',
            component: GamebazarHome,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/create-ad',
            name: 'GamebazarAd',
            component: GamebazarAd,
            meta: {
                requiresAuth: true
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
