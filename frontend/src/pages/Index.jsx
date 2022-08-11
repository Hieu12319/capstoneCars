import { Link } from "react-router-dom"
import { useState } from "react"

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
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.make]: event.target.value,
        }))
    }

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
            <input type="text" value={newForm.year} name="year" placeholder="year" onchange={handleChange} />
            <input type="text" value={newForm.image}
        </form>
    </section>
   )





    return props.car ? loaded() : loading()

}