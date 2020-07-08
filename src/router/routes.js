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


export const routes = [
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
        component: Login
    },
    {
        path: '/registration',
        component: Registration
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
    },
    {
        path: '/categories',
        name: 'Category',
        component: Categories,
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts,
    },
    {
        path: '/otp-verification',
        name: 'OTP',
        component: OTP,
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
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ForgotPassword,
        meta: {
            auth:false
        }
    },
    {
        path: '/rent-post',
        name: 'RentPost',
        component: RentPost,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    }
]
