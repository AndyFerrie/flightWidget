import React from "react"
import { useState, useEffect } from "react";

const TableBody = () => {

const [flights, setFlights] = useState(null);

const getFlights = () => {
    fetch('http://localhost:8000/flights')
         .then(response => response.json())
         .then(flights => setFlights(flights))
         .catch(error => console.log(error))
}

useEffect(() => getFlights(), [])

console.log(flights)

    return 
}

export default TableBody