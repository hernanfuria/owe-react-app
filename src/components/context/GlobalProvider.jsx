// import { useState } from "react"
import { GlobalContext } from "./GlobalContext"


// const user = {
//     id: 132,
//     name: 'asd lkjjk',
//     mail: 'asd@dfg.com',
// }

export const GlobalProvider = ({children}) => {

    // const [user, setUser] = useState()

    return (
        <GlobalContext.Provider> {/* value={{user, setUser}} */}
            {children}
        </GlobalContext.Provider>
    )
}