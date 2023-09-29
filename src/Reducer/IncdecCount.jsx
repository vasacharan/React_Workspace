let intialValue = 0;
const IncdecCount = (state = intialValue, action) =>{
    const{type, payload} = action;
    switch(type){

        case 'INCREMENT' :
        return state + 1;
        
        case 'DECREMENT':
        return state - 1;
  
        default : 
        return state;
      }
    
}

export default IncdecCount;