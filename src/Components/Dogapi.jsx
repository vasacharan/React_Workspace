import React, { useState } from 'react'

export default function Dogapi() {
const [imgUrl,setImgUrl] = useState(null);

function RandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((resp)=>resp.json())
    .then(ranImg => {
     console.log(ranImg);
     setImgUrl(ranImg.message);
    })
}
    return (
        <div>
        <h2>Random Dog Image</h2>
        <img src={imgUrl} alt='' width={400} height={350}/>
        <button onClick={RandomDog}>Click</button>
        
       
        </div>
    )
}
