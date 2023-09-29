import React, { useState } from 'react';
import shirt from '../Asserts/Images/f1.jpg';
import food from '../foods.json';


export default function FoodItems() {
const [search, setSearch] = useState('');

const handleSearch=(e)=>{
    setSearch(e.target.value);
}

  return (
    <div>
        <h2 className='text-center'>Food-Items</h2>
        <div className='card-header'>
            <div className='card'>

            <section className='w-100 text-center'> 
            <input type='text' value={search} onChange={handleSearch} placeholder='Search Food item'/><input type='submit' name='submit'/> 
            </section>
               
                <div className='card-body'>
                {
                  food.filter((item)=>item.food_name.toLowerCase().includes(search.toLowerCase())).map((fitem, index)=>{
                    return (
                        <div key={index.id} className='card w-25 text-center gap-3'>
                        
                        <img src={fitem.img} alt='food-pic' height={200} style={{width:'100%'}}/>
                        <h4><b>Food Name : </b>{fitem.food_name}</h4>
                        <h5><b>Ingradients : </b>{fitem.ingradients}</h5>
                        <p><b>Cook Method : </b>{fitem.cook_method}</p>
                        <h5><b>Receip for 5 persons: </b>{fitem.for_5_members}</h5>
                    </div>
                    )
                   
                  })  
                }
                    
                  
                </div>
            </div>
        
        </div>
    
    </div>
  )
}
