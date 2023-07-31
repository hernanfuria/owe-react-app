// import { NamesFormHook } from "../hooks/NamesFormHook"

import { useContext, useEffect, useState } from "react"
import { NameInputLine } from "./NameInputLine"
import { GlobalContext } from "./context/GlobalContext"


export const NamesForm = () => {
    const {names, setNames, setPayments, setNamesDefined, navigate} = useContext(GlobalContext)


    useEffect(() => {
        setNames([])
        setPayments([])
    }, [])
    

    const [idsCounter, setIdsCounter] = useState(0)

    const incrementIdCounter = () => {
        setIdsCounter(idsCounter + 1)
    }

    const handleSubmit = () => {
        setNamesDefined(true)
        navigate('/paymentslist')
    }

    const handleNewPerson = () => {
        setNames([...names, {name: '', id: idsCounter}])
        incrementIdCounter()
    }

    const handleRemovePerson = (id) => {
        setNames(names.filter(person => person.id != id))
    }

    return (
        <form className="names-input-form" onSubmit={handleSubmit}>
            <span className="form-title">People involved in spendings</span>
            <br />

            {
                names.map(person => {
                    return <NameInputLine 
                                names={names}
                                setNames={setNames}
                                name={person.name} 
                                id={person.id} 
                                handleRemovePerson={handleRemovePerson}
                                key={person.id} 
                            />
                })
            }

            <button className="button-add" onClick={handleNewPerson}>+</button>

            <div className="form-submit">
                <input type="submit" value="Ready!" />
            </div>
            {/*<button onClick={setNamesDefined}>Ready!</button>*/}
        </form>
    )
}
