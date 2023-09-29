import React, { useState } from 'react';
import shopitems from '../shopitems.json';

export default function Shop() {

    const [cart, setCart] = useState([]);
    const [itemsearch, setItemsearch] = useState('');
     let totalPrice = 0;
    

    const handleAddtocart =(item)=>{
        const shopCartArr = [...cart];
      //  for(let i of shopitems)
        // if(shopCartArr.indexOf(item) == -1){  // for not display duplicates 
            shopCartArr.push(item);
        // }
       setCart(shopCartArr);
      }
   console.log(cart);

   const handleRemoveItem =(indexValue)=>{
    const removeItem = cart.filter((remitem, index)=> index !== indexValue)
    setCart(removeItem);
   }
   
   const handleSearch =(e)=>{
    setItemsearch(e.target.value)
   }

  return (
    <div>
        <div>
            <h3 className='text-center'>E- Shop</h3><span><i class="fa-solid fa-bag-shopping"></i></span><h5>Cart : {cart.length}</h5>
            <div className='text-center'>
                <form>
                <input type='text' placeholder='Search Item...' value={itemsearch} onChange={handleSearch} />
                <input type='submit' name='name' disabled/>
                </form>
            </div><br />
            <div className='container text-center'>
                <div className='row'>
                {
                    shopitems.filter((sitem)=>sitem.item_name.toLowerCase().includes(itemsearch.toLowerCase())).map((item)=>{
                        return(
                            <div className='col-lg-3' key={item.id}>
                            <div className='card'>
                                <img src={item.item_img} alt='product' style={{width:'100%'}} height={150} />
                                <div className='card-body '>
                                    <p className='card-title'>Product : {item.item_name}</p>
                                    <p className='card-text'>Discription : {item.description}</p>
                                    <p className='card-text'>Details : {item.details}</p>
                                    <p className='card-text'>price : &#8377; {item.item_price}</p>
                                    <button className='btn btn-primary' onClick={()=>handleAddtocart(item)}>add to cart</button>
                                    
                                </div>
                            </div>
                        </div>

                        )
                    
                    })
                }

                </div>
            </div>
        </div>

            <div className='addtocart'>
                <h5 className='text-center'>Cart menu</h5>
                    <div className='row'>
                    {
                        cart.map((thing,index)=>{
                            console.log('second array'+thing)
                            totalPrice += thing.item_price
                            return(
                            <div className='col-lg'>
                                <div className='card'>
                                    <img src={thing.item_img} alt='product' style={{width:'100'}} height={100} />
                                    <p>Product Name: {thing.item_name}</p>
                                    <p>Price: &#8377; {thing.item_price}</p>
                                    <span>Qty: 1</span>
                                    
                                    <button className='btn btn-danger' onClick={()=>handleRemoveItem(index)}>Remove</button>
                                </div>
                             </div>
                    
                            )
                        })
                    }
                    <h5>Total Price: &#8377; {totalPrice}</h5>
                     </div>   
            </div>
    </div>
  )
}
