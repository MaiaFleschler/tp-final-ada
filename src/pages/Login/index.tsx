import { FC } from 'react';
import { Login as LoginForm } from '../../components/forms';
import { Layout } from '../../components/layout';

const Login: FC = () => {
    return(
        <Layout hideHeader>
            <LoginForm />
        </Layout>
    )
}

export { Login }