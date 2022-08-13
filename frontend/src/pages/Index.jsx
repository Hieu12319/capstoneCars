import { Link } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"

export const section = styled.form`
background: #00aec9;
color: #fff;
cursor: pointer;
margin-bottom: 0;
text-transform: uppercase;
width: 100%;
border-radius: 5px;
height: 35px;
border-color: transparent;
box-shadow: 0px;
outline: none;
transition: 0.15s;
text-align: center;
&:active {
  background-color: #f1ac15;
}

    
input[type='submit'] {
    background: #00aec9;
    color: #fff;
    cursor: pointer;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
`



export default function Index(props) {
    const [newForm, setNewForm] = useState ({
        make: "",
        model: "",
        year: "",
        image: "",
        price: "",
        description: "",
    })

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})} 
        

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCars(newForm)
        setNewForm({
            make: "",
            model: "",
            year: "",
            image: "",
            price: "",
            description: "",
        })
    }

   const loaded = () => {
    return props.cars.map((car) => (
        <div key={car._id} className="car">
            <Link to={`/cars/${car._id}`}>
                <h1>{car.make}</h1>
            </Link>
            <img src={car.image} alt={car.model} />
            <h3>{car.make}</h3>
        </div>
    ))
   }
   
   const loading = () => {
    return <h1>loading.....</h1>
   }

   return (
    <section>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newForm.make} name="make" placeholder="make" onchange={handleChange} />
            <input type="text" value={newForm.model} name="model" placeholder="model" onchange={handleChange} />
            <input type="number" value={newForm.year} name="year" placeholder="year" onchange={handleChange} />
            <input type="text" value={newForm.image} name="image" placeholder="image URL" onchange={handleChange} />
            <input type="number" value={newForm.price} name="price" placeholder="price" onchange={handleChange} />
            <input type="text" value={newForm.description} name="description" placeholder="description" onchange={handleChange} />
            <input type="submit" value="Add Car For Sale" />
        </form>
        {props.car ? loaded() : loading()}
    </section>
   )





    

}