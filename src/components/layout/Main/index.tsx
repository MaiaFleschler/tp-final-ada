import { FC } from "react"
import './style.css'

const Main: FC = ({children}) => {
    return(
        <main className="main">
            {children}
        </main>
    )
}
export { Main }