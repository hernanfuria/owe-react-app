
export const NameInputLine = ({names, setNames, name, id, handleRemovePerson}) => {

    const handleInputChange = (event) => {
        let newNames = [...names]
        for (const n of newNames) {
            if (n.id == id) {
                n.name = event.target.value
            }
        }
        setNames(newNames)
    }

    return (
        <div className="names-form-line">
            <label className="form-label" htmlFor={`name${id}`}>Name</label>
            <input 
                type="text" 
                name={`name${id}`} 
                id={id}
                value={name} 
                className="form-input"
                onChange={(event) => handleInputChange(event)} 
                required
            />
            <button 
                className="discard-button"
                onClick={() => handleRemovePerson(id)}
            >
                Remove
            </button>
        </div>
    )
}
