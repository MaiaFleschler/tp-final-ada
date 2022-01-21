import { FC } from 'react'
import { SignUp as SignUpForm } from '../../components/forms'
import { Layout } from '../../components/layout'


const SignUp: FC = () => {
    return(
        <Layout hideHeader>
            <SignUpForm />
        </Layout>
    )
}

export {  SignUp }