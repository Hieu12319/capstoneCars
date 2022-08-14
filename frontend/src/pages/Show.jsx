import { useParams, useNavigate } from 'react-router-dom'
import { useState } from "react"
import {
  DeleteButton
} from "../styles/styles"

export default function Show(props) {
    const { id } = useParams();
    const cars = props.cars
    const car = cars.find((c) => c._id === id)
    let navigate = useNavigate()

    const [editForm, setEditForm] = useState(car)

    const handleChange = (event) => {
        setEditForm(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value,
        })
      )}

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateCars(editForm, id)
        navigate("/")
      }

      const removeCar = () => {
        props.deleteCars(id)
        navigate("/")
      }

    return (
        <div className="car">
            <h1>{car.make}</h1>
            <h2>{car.model}</h2>
            <h3>{car.year}</h3>
            <h4>price = {car.price}</h4>
            <h5>{car.description}</h5>
            <img src={car.image} alt={car.make} />
            
            <DeleteButton id="delete" onClick={removeCar}>Delete Post</DeleteButton>
            
            <form onSubmit={handleSubmit}>
                <input type="text" value={editForm.make} name="make" placeholder="make" onChange={handleChange} />
                <input type="text" value={editForm.model} name="model" placeholder="model" onChange={handleChange} />
                <input type="number" value={editForm.year} name="year" placeholder="year" onChange={handleChange} />
                <input type="text" value={editForm.image} name="image" placeholder="image URL" onChange={handleChange} />
                <input type="number" value={editForm.price} name="price" placeholder="price" onChange={handleChange} />
                <input type="text" value={editForm.description} name="description" placeholder="description" onChange={handleChange} />
                <input type="submit" value="Update Car Post" />
            </form>
        </div>
    )
}