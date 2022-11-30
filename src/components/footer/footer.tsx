import 'bulma/css/bulma.min.css';
import styles from './footer.module.css'
import React, { ReactElement } from 'react'



function Footer():ReactElement {
  return (
 <div className='container-footer'>
    <footer className="footer has-background-link ">
  <div className="content has-text-centered">
    <p className='has-text-weight-bold has-text-white'>
      Projeto to_do_list ultilizando react/express/typescript a
    </p>
  </div>
</footer>
 </div>
  )
}

export default Footer