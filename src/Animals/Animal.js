// import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Animal = () => {

    const [data, setData] = useState([]);
    const url = 'http://127.0.0.1:5000/animals';


    // to display data on page refresh
    useEffect(() => {
        apiGet();
    }, []);

    const apiGet = async () => {

        const res = await axios.get(url)
        setData(res.data);
        // console.log(res.data);

        // fetch('http://127.0.0.1:5000/animals')
        //     .then((response) => response.json())
        //     .then((data) => setData(data));
    };

    const deleteAnimal = async (id) => {
        // console.log(id);
         await axios.delete(`http://127.0.0.1:5000/animals/${id}`)
        window.location.reload();
    }


    return (
        <div className="animalContainer">
            {/* mapping animal api data */}
            {data.map((animalData) => (
                <div className="animal">

                    <div className="animalImg">
                        <img alt="animal pics" src={animalData.url} />
                    </div>
                    <div className="animalName">
                        <h2>{animalData.name}</h2>
                        {/* <h2>{animalData._id}</h2> */}

                    </div>
                    <div className="animalDelete">
                        <button type="button" onClick={() => deleteAnimal(animalData._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>



    )
}