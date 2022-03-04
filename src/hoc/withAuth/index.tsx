import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { useAuth } from "../../hooks";

const publicRoutes = [
    '/login',
    '/signUp'
]

const adminOnlyRoutes = [
    '/users',
    '/admin'
]

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {

    const Authenticated:FC = (): JSX.Element | null => {
        const { push, location } = useHistory();
        const { hasUserLoggedIn } = useAuth();
        const { userSession } = useContext(AuthContext);

        if(userSession?.role==='user' && adminOnlyRoutes.includes(location.pathname)) push('/');

        if(hasUserLoggedIn && publicRoutes.includes(location.pathname)) push('/');

        if(hasUserLoggedIn === false && !publicRoutes.includes(location.pathname)) push('/login');

        return <Component />;
    }
    return Authenticated;
}
export { WithAuth }