// import { NamesFormHook } from "../hooks/NamesFormHook"

import { useContext, useEffect, useState } from "react"
import { NameInputLine } from "./NameInputLine"
import { GlobalContext } from "./context/GlobalContext"


const initNames = [
    {
        name: '',
        id: 1,
    },
    {
        name: '',
        id: 2,
    },
    {
        name: '',
        id: 3,
    }
]

export const NamesForm = () => {
    const {names, setNames, setPayments, setNamesDefined, navigate} = useContext(GlobalContext)

    const [canSubmit, setCanSubmit] = useState(false)

    useEffect(() => {
        let submitEnabled = true
        for (const person of names) {
            if (person.name == '') {
                submitEnabled = false
                break
            }
        }
        console.log(submitEnabled)
        setCanSubmit(submitEnabled)

    }, [names])
    

    useEffect(() => {
        setNames(initNames)
        setPayments([])
    }, [])
    

    const [idsCounter, setIdsCounter] = useState(10)

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

            <div className="form-control">
                <button className="button-add new" onClick={handleNewPerson}>+</button>
                <input 
                    type="submit" 
                    disabled={canSubmit ? false : true}
                    className="form-submit next" 
                    value="Ready!" 
                />
            </div>
        </form>
    )
}
