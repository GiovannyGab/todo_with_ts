import React from 'react';
import Header from './components/header/header';
import 'bulma/css/bulma.min.css';
import Footer from './components/footer/footer';
import styles from './App.module.css'
function App() {


  return (
    <div>
      <Header/>
      <div className='main'>
      
      <main className={styles.main}>
      <div className='section'>
        <h1 className='title'>Oque voce vai fazer?</h1>
        <p className='text'>formulario</p>
      </div>
      <div className='section'>
      <h1 className='subtitle'>Suas tarefas</h1>
      <p className='text'>lista</p>
      </div>
      </main>
      </div>
      
      <Footer/>
    </div>
   
  );  
}

export default App;
