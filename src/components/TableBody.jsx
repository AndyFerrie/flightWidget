import React from "react";
import { useState, useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = () => {

const [flights, setFlights] = useState(null);

const getFlights = () => {
    fetch('http://localhost:8000/flights')
         .then(response => response.json())
         .then(flights => setFlights(Object.values(flights.data)))
         .catch(error => console.log(error))
}

useEffect(() => getFlights(), [])

console.log(flights)

    return (
        <tbody>
            {flights && flights.map((flight, _index) => (
                <TableRow key={_index} flight={flight}/>
            ))}
        </tbody>
    )
}

export default TableBody