import React from 'react';
// import Ops from './logicOps/Ops'
function App() {


  let symbs ={

    conjunction: '&',
    conditional:'->',
    disjunction:'v',
    negation:'~'
  }


  function renderOperatos(symbs){
      let a = 'A'
      let b = 'B'
      for (const [key,value] in Object.entries(symbs)) {
        if (symbs.hasOwnProperty(key)) {
         return <p>

           {a} {value} {b}
         </p>
          
        }
      }
  }
  return (
    <main className='App'>
    {renderOperatos(symbs)}
    </main>
  );
}

export default App;