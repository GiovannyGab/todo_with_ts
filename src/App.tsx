import React from 'react';
import Header from './components/header/header';
import 'bulma/css/bulma.min.css';
import Cat from './components/pets/cat';
import Dog from './components/pets/dog';

function App() {


  return (
    <div>
      <Header/>
      
        <Cat name= "minguado" age={12}/>
        <Dog name= "banner" age={2}/>
      
      
    </div>
   
  );
}

export default App;
