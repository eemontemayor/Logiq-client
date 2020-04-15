import React from 'react';
import './OpSymbols.css'



export default function OpSymbols(props){
   const handleClick =()=>{

        console.log()
      }
      

   

      

     const opArray = [
       {
            type:'conju',
            symb: '*',
            logTrans:[],
            isValid: function(a,b) {
                        return a === true && b === true ? true : false
                    }
        },


    {
            type:'condi',
            symb:'->',
            logTrans:[],
            isValid: function(a,b) {
                        return a === true && b === false ? false : true
                    }
        
        },
         {
            type:'bicond',
            symb:'<->',
            logTrans:[],
            isValid: function(a,b) {
                        return (a === true && b === true )|| (a===false && b === false)? true : false
                    }
        },
    {
            type:'disju',
            symb:'v',
            logTrans:[],
            isValid: function(a,b) {
                        return a === true || b === false ? true : false
                    }
                },
        {
            type:'nega',
            symb:'~',
            logTrans:[],
            isValid: function(a) {
                        return a === true ? false : true
                    }
        },
       
 
         ]
    
        
         const list = opArray.map( op => {
            return <li key = {op.type} ><button className = 'A'>A</button><button onClick={op.isValid}>{op.symb} </button><button className = 'B'>B</button></li>
        })

   
return(
    <div className = 'opList'>

{list}
    

    </div>
)

}
 
