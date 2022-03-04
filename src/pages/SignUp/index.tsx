import { FC } from 'react'
import { SignUp as SignUpForm } from '../../components/forms'
import { Layout } from '../../components/layout'
import { WithAuth } from '../../hoc'


const SignUpPage: FC = () => {
    return(
        <Layout hideHeader>
            <SignUpForm />
        </Layout>
    )
}

export const SignUp = WithAuth(SignUpPage)