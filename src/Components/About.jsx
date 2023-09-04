import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ComponentB } from './ComponentB';



export default function About() {

  const[ranImg, setRanimg] = useState(null);

  useEffect(()=>{
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(resp =>{
      setRanimg(resp.data.message)
      console.log(resp.data.message);
    })
  },[])
    const styles={
      h1Sty:{ 
        color: 'blue',
        textAlign : 'center'
      }  
    }
  return (
    <div className>
    <h2 style={styles.h1Sty}>: Welcome to <u>About</u> Page :</h2>
    <div>
      <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Building' class="d-block w-50 mt-4" width={300} height={250} />
      <p >A company, abbreviated as co., is a legal entity representing an association of people, whether natural, 
      legal or a mixture of both, with a specific objective. Company members share a common purpose and unite to achieve 
      specific, declared goals. Companies take various forms, such as:</p>
      <ul><li>Voluntary associations, which may include nonprofit organizations</li>
      <li>business entities, whose aim is generating profit</li>
      <li>Financial entities and banks</li>
      <li>Programs or educational institutions</li>
      <p>
      A company can be defined as an "artificial person", invisible, intangible, created by or under law, with a discrete legal personality, perpetual succession, and a common seal. Except for some senior positions, 
      companies remain unaffected by the death, insanity, or insolvency of an individual member.</p>
      </ul>
      </div>
      <div>
      <img src={ranImg} alt='dog image' width={400} height={350} />
      </div>
     <ComponentB />
    </div>
    
  )
}
