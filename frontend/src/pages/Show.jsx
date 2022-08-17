import { useParams, useNavigate } from 'react-router-dom'
import { useState } from "react"
import {
  DeleteButton, FormStyle, ShowStyle
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
      <div>
        <ShowStyle className="car">
            <h1>{car.make}</h1>
            <h2>{car.model}</h2>
            <h3>year = {car.year}</h3>
            <h4>price = {car.price}</h4>
            <h5>contact = {car.contact}</h5>
            <p>Description: {car.description}</p> <br/>
            <img src={car.image} 
            alt={car.make} 
            width="100%"
            height="auto"/>
        </ShowStyle>
            <br/>
            <DeleteButton id="delete" onClick={removeCar}>Delete Post</DeleteButton>
            
            <FormStyle onSubmit={handleSubmit}>
                <input type="text" value={editForm.make} name="make" placeholder="make" onChange={handleChange} /> <br/>
                <input type="text" value={editForm.model} name="model" placeholder="model" onChange={handleChange} /> <br/>
                <input type="number" value={editForm.year} name="year" placeholder="year" onChange={handleChange} /> <br/> 
                <input type="text" value={editForm.image} name="image" placeholder="image URL" onChange={handleChange} /> <br/>
                <input type="number" value={editForm.price} name="price" placeholder="price" onChange={handleChange} /> <br/>
                <input type="tel" value={editForm.contact} name="contact" placeholder="contact" onChange={handleChange} /> <br/>
                <input type="text" value={editForm.description} name="description" placeholder="description" onChange={handleChange} /> <br/>
                <input type="submit" value="Update Car Post" /> 
            </FormStyle>
        </div>
    )
}