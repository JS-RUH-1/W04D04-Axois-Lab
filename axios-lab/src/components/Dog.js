import React, { useState } from 'react'
import Axios from 'axios'

function Dog(){
    const [dog, setDog] = useState('')

    function getDog(){
        Axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
            console.log(response.data.message)
            setDog(response.data.message)
        })
    }

    return(
        <div>
            <img src={dog} alt="Click button to fetch dog"  /><br />
            <button onClick={getDog}>Display dog</button>
        </div>
    );
}

export default Dog 