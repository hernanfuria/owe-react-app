// import { NamesFormHook } from "../hooks/NamesFormHook"

import { useState } from "react"
import { NameInputLine } from "./NameInputLine"


export const NamesForm = ({names, setNames, defineNames}) => {

    const [idsCounter, setIdsCounter] = useState(0)

    const incrementIdCounter = () => {
        setIdsCounter(idsCounter + 1)
    }

    const handleSubmit = () => {
        defineNames()
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

            <button onClick={handleNewPerson}>New person</button>

            <div className="form-submit">
                <input type="submit" value="Ready!" />
            </div>
            {/*<button onClick={setNamesDefined}>Ready!</button>*/}
        </form>
    )
}
