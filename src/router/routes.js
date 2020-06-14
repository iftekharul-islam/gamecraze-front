import Home from '../components/Home';
import Games from '../components/Games';
import Login from "../components/login_registration/Login";
import Registration from "../components/login_registration/Registration";
import GameDetails from '../components/GameDetails';
import Search from "../components/Search";
import Profile from "../components/Profile";

export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/games',
        component: Games
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
]
