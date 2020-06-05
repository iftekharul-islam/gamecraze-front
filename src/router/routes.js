import Home from '../components/Home';
import Games from '../components/Games';
import Login from "../components/Login";
import Registration from "../components/Registration";
import GameDetails from '../components/GameDetails';

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
        path: '/game-details/:gameId',
        component: GameDetails,
    },
]
