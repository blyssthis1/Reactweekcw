import { useEffect, useState, useContext } from "react";
import Car from '../components/Car'
import { DataContext } from '../contexts/DataProvider'
import { AuthContext } from '../contexts/AuthProvider'
import CarForm from '../components/CarForm'


export default function Home(){
    const {cars} = useContext(DataContext)
    const { user } = useContext(AuthContext)
    return (

         <div>
            <h1>Home</h1>
            {
                (user.loggedIn) ?
                <CarForm /> :
                <></>
            }
            {cars.map((car) => <Car car={car} key={car.id}/>)}
        </div>
    )
}
