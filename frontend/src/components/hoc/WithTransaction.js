import React from 'react';


const WithTransaction = (OriginalComponent) =>{

   const NewComponent =()=>{
    return <OriginalComponent/>
   }
   
    return NewComponent;
}

export default WithTransaction;