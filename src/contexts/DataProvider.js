import { useState, useEffect, createContext, useContext } from "react";
import { getFirestore, getDocs, collection, getDoc, doc, addDoc, Timestamp, collectionGroup, query } from 'firebase/firestore'
import { AuthContext } from './AuthProvider'



export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()
    console.log(cars)

    useEffect(() => {
        async function getCars() {
            const carQuery = query(collectionGroup(db, 'reactcar'))
            const querySnapshot = await getDocs(carQuery)   
            const loadedCars = []
            querySnapshot.forEach((doc) => {
                loadedCars.push({
                    id: doc.id,
                    uid: doc.ref.parent.parent.id,
                    ...doc.data()
                })
            })
            setCars(loadedCars)
        }
        getCars()
    }, [])   

    async function getCar(uid, id){

        const docRef = doc(db, 'user',uid, 'reactcar', id)

        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            throw new Error
        }
        return docSnap.data()
    }
    async function addCars(title, body) {
        const newCar = {
            title, 
            body,
            dateCreated: Timestamp.now(),
            username: user.displayName
        }

        const docRef = await addDoc(collection(db, 'users', user.uid, 'posts'), newCar)

        newCar.id = docRef.id

        setCars([
            newCar,
            ...cars
        ])

        return newCar
    }



    const value = {
        
        cars,
        getCar,
        addCars,
    }




    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}