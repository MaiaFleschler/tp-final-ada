import { FC } from "react"
import { Header } from "../Header"
import { Main } from "../Main"


type Props = {
    id?: string,
    hideHeader?: boolean,
}

const Layout: FC<Props> = ({ children, hideHeader }) => {
    return(
        <>
        { !hideHeader && <Header />}
        <Main>
            {children}
        </Main>
        </>
    )
}
export { Layout }