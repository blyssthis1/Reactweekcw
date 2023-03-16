import { useParams } from "react-router-dom"
import {useState, useEffect, useContext} from 'react'
import Car from '../components/Car'
import { DataContext } from "../contexts/DataProvider"

export default function CarSingle() {
    const { id } = useParams()
    const [car, setCar] = useState({})
    const [error, setError] = useState(false)
    const {getCar} = useContext(DataContext)

    useEffect(() => {
        async function handleLoad() {
        try {
                const data = await getCar(id)
                setCar(data)
            } catch(err) {
                console.log(err)
                setError(true)
            }
        }
        handleLoad()
    }, [])
    
    return (
        <div>
            {/* {
                error ?
                <>
                    <h2>404 Not Found</h2>
                    <p></p>
                </>: */}
                <>
                    <h1>Car Id: {id}</h1>
                    <Car car={car} hideLink={true}/>
                </>
            
        </div>
    )
}