import { useParams, useNavigate } from 'react-router-dom'
import { useState } from "react"


export default function Show(props) {
    const { id } = useParams();
    const cars = props.cars
    const car = cars.find((c) => c._id === id)
    let navigate = useNavigate()

    const [editForm, setEditForm] = useState(car)

    const handleChange = (event) => {
        setEditForm((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }))
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateCars(editForm, car._id)
        navigate("/")
      }

      const removeCar = () => {
        props.deleteCars(car._id)
        props.history.push("/")
      }

    return (
        <div className="car">
            <h1>{car.make}</h1>
            <h2>{car.model}</h2>
            <h3>{car.year}</h3>
            <h4>{car.description}</h4>
            <img src={car.image} alt={car.name} />
            <button id="delete" onClick={removeCar}>Delete Post</button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={editForm.make} name="make" placeholder="make" onchange={handleChange} />
                <input type="text" value={editForm.model} name="model" placeholder="model" onchange={handleChange} />
                <input type="number" value={editForm.year} name="year" placeholder="year" onchange={handleChange} />
                <input type="text" value={editForm.image} name="image" placeholder="image URL" onchange={handleChange} />
                <input type="number" value={editForm.price} name="price" placeholder="price" onchange={handleChange} />
                <input type="text" value={editForm.description} name="description" placeholder="description" onchange={handleChange} />
                <input type="submit" value="Update Car Post" />
            </form>
        </div>
    )
}