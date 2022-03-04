import { FC } from 'react';
import { Login as LoginForm } from '../../components/forms';
import { Layout } from '../../components/layout';
import { WithAuth } from '../../hoc';

const LoginPage: FC = () => {
    return(
        <Layout hideHeader>
            <LoginForm />
        </Layout>
    )
}

export const Login = WithAuth(LoginPage)