import React ,{useState} from 'react';
import axios from 'axios';
import {
    Link,
  } from "react-router-dom";


export const Home = () => {

    // const animaldata = {
    //     name: "Parrot",
    //     url: "http://"
    // };
    const [name, setName] = useState();
    const [url, setUrl] = useState();

    const postData =()=> {
    //  const name = document.getElementById("animalName");
    //  console.log(name);
       const animaldata = {
            name: document.getElementById("animalName").value,
            url: document.getElementById("animalUrl").value,
              
        // name: "Parrot",
        // url: "http://",
    }
    axios.post('http://127.0.0.1:5000/animals', animaldata)
    .then((animaldata)=>{
         console.log(animaldata);
        //  window.location.reload();
        // return(<Redirect to="/animal" />)
    })
    .catch((err)=>{
        console.log(`post failed , ${err}`)
    })
    
   }

    // const post = () => {
    //     fetch('http://127.0.0.1:5000/animals', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             "name": "Dog",
    //             "url": "http://"
    //         }),
    //     }).then
    //         (data => data.json())
    //         .then(
    //             data => {
    //                 if (data) {
    //                     console.log(data);
    //                 };
    //             }
    //         ).catch(error => {
    //             console.error(error);
    //             if (error) {
    //                 alert("Something went wrong!")
    //             }
    //         })
    //      axios.post(`http://127.0.0.1:5000/animals`, { animaldata})
    //      .then(res => {
    //        console.log(res);
    //        console.log(res.data);
    //      })

    // }
    return (
        <div className="container">

            <div className="imgDiv">
                <h4>Animal React web App using Rest API built on Node.js
                    ,express.js and mongoose
                </h4>
                {/* <button>animal data</button> */}
                {/* <h4>animal data</h4> */}
            </div>
            <div className="formDiv">

                <div className="animal_form">
                    <label>Animal Name</label><br></br>
                    <input onChange={(nameVal) => setName(nameVal)} type="text" name="name" id="animalName" placeholder="Type your favourite animal name" /><br></br><br></br>
                    <label>Image URL</label><br></br>
                    <input onChange={(urlVal)=> setUrl(urlVal)} type="url" name="url" id="animalUrl" placeholder="Enter the image URL" />
                    {
                        name != null && url != null ? <button type="button" onClick={() => postData()} id="submitBtn"><Link style={{textDecoration:'none', color:'black'}} to="/animal">POST</Link></button> 
                        : <></>
                    }
                    
                </div>
            </div>

        </div>

    )
}