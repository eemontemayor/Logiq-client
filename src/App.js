import React, {Component} from 'react';
import OpSymbols from './logicOps/OpSymbols'




class App extends Component {

  state = {
    premises: [],
    conclusion: []
};


componentDidMount() {

}





  render(){

    // const ops =this.renderOperatos()


  return (
    <main className='App'>


     <ul>
<OpSymbols/>
     </ul>
    </main>
  );
}
}
export default App;