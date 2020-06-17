import Home from '../components/Home';
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
import AdminLogin from "../components/admin/AdminLogin";

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
        path: '/admin',
        name: 'Admin',
        component: AdminLogin,
    },
]
