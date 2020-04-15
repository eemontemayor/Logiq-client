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
            isTrue: function(a,b) {
                        return a === true && b === true ? true : false
                    }
        },


    {
            type:'condi',
            symb:'->',
            logTrans:[],
            isTrue: function(a,b) {
                        return a === true && b === false ? false : true
                    }
        
        },
         {
            type:'bicond',
            symb:'<->',
            logTrans:[],
            isTrue: function(a,b) {
                        return (a === true && b === true )|| (a===false && b === false)? true : false
                    }
        },
    {
            type:'disju',
            symb:'v',
            logTrans:[],
            isTrue: function(a,b) {
                        return a === true || b === false ? true : false
                    }
                },
        {
            type:'nega',
            symb:'~',
            logTrans:[],
            negate: function(a) {
                        return a === true ? false : true
                    }
        },
       
 
         ]
    
        
         const list = opArray.map( op => {
            return op.isTrue && <li key = {op.type} ><button className = 'A'>A</button><button onClick={op.isTrue}>{op.symb} </button><button className = 'B'>B</button></li>
        })

   
return(
    <div className = 'opList'>

{list}
    

    </div>
)

}
 
