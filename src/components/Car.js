import { Link } from "react-router-dom"


export default function Car(props) {
    console.log(props)
    return (
        <div className="car">
            <p>{props.car.fuel}</p>
            <p>{props.car.id}</p>
            <p>{props.car.owner}</p>
            <p>{props.car.seats}</p>
            <p>{props.car.year}</p>
            {
                (props.hideLink) ?
                <></> :
            
            <Link to={`/car/${props.car.id}`}>Read More</Link>
}
        </div>
    )
}