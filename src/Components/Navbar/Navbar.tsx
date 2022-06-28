import React from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='Nav'>
       <div className="Nav__div--logo" onClick={()=>navigate('/')}>
        <p className="Nav__p--logonames">AE</p>
        <p className="Nav__p--logolastnames">TP</p>
      </div>
        <div className="Nav__div--links">
          <Link className='Nav__link' to="/code">code</Link>
          <Link  className='Nav__link' to="/music">music</Link>
        </div>
    </div>
  );
}

export default Navbar