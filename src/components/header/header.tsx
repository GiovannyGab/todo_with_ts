import 'bulma/css/bulma.min.css';

import React, { ReactElement } from 'react'



function Header():ReactElement {
  return (
    <div>
    <nav className="navbar has-background-link-dark " role="navigation" aria-label="main navigation">
  <div className="navbar-brand ">
    <a className="navbar-item" href="http://localhost:3000">
      <h1 className='Title'><strong className='has-text-white is-size-3'>ToDoList</strong></h1>
    </a>


  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      

     

      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-link has-background-info is-rounded">
            <strong>Registrar</strong>
          </a>
          <a className="button is-light is-rounded ">
           <strong>Login</strong> 
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header