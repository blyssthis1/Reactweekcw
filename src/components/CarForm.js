import { useState, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function CarForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { addCar } = useContext(DataContext)

    async function handleSubmit(e) {
        e.preventDefault()
        const newCar = await addCar(title, body)
        setTitle('')
        setBody('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
             <div>
                <textarea 
                    name="body" 
                    id="body" 
                    cols="30" 
                    rows="10"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>
            </div> 
            <button>Add Car</button>
        </form>
    )
}