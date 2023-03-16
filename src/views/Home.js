import { useEffect, useState, useContext } from "react";
import Car from '../components/Car'
import {DataContext} from '../contexts/DataProvider'

export default function Home(){
    const {cars} = useContext(DataContext)

    console.log(cars)
    return (
        
        <div>
            <h1>Home</h1>
            {cars.map((car) => <Car car={car} key={car.id}/>)}
        </div>
    )
}
