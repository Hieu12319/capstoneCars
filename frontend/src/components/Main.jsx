import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import { useEffect, useState } from "react"


export default function Main(props) {
    const [cars, setCars] = useState(null)
    const URL = "https://capstonecarbackend.herokuapp.com/cars/"

    const getCars = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setCars(data)
    }

    const createCars = async (car) => {
        await fetch(URL , {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(car),
        })
        getCars()
    }

    const updateCars = async (car, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(car),
        })
        getCars()
    }

    const deleteCars = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        })
        getCars()
    }


    useEffect(() => {       
    getCars()
},[])

    return(
        <main>
            <Routes>
                <Route exact path="/" element={<Index cars={cars} createCars={createCars} />} />
                <Route path="/cars/:id" element={<Show cars={cars} updateCars={updateCars} deleteCars={deleteCars}/>} />
            </Routes>
        </main>
    )
}