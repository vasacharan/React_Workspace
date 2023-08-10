import { useEffect,useState } from "react"
function Effect(){
    const [count,setcount]=useState(0)
    useEffect(()=>{
        console.log('count');
    },[count])


    return(
        <div>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>Click</button>
        </div>
    )
}
export default Effect;