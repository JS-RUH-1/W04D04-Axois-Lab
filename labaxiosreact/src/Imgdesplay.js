import { useState} from 'react';
import Axios from 'axios';

function Imgdesplay() {


const [displayimg, setDisplayimg] = useState('');

const  getImg = ()=>{
Axios.get('https://dog.ceo/api/breeds/image/random')
.then((res)=>{
    console.log(res.data);
    setDisplayimg(res.data.message);
}) }
 
    return (  
        <div>
    
        <button onClick={getImg}>Get image</button>
        <div>
        <img src={displayimg}  alt=""/></div>
    </div>
    );
}

export default Imgdesplay; 
