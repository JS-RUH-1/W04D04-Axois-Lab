import React, { useState, useEffect } from 'react';
import './Axios.css'

const axios = require('axios');


function Axios (){
    const [image, setImage] = useState("");
    
    function requestNewImage (){
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
        // handle success
            setImage(response.data.message)
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
    }

    useEffect(() => {
        requestNewImage();
      }, []);

    return (
        <div className="content">
            <button onClick={ () => requestNewImage()}>Get Random Dog Pic</button>
            <br></br>
            <img src={image} alt="Image fetched form api"></img>
        </div>
    )
}

export default Axios