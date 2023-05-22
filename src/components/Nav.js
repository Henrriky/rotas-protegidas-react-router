import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';
import { useSelector } from 'react-redux';

function Nav() {

  const login = useSelector(state => state);
  const history = useHistory();
  const location = useLocation();
  
  useEffect(() => {
    let { from } = location.state || { from: { pathname: "/" }};

    if(login) {
      // history.push("/")
      history.replace(from)
    }
  },[login])

  return (
    <div className="nav">
      <h1>Henrriky</h1>
      <ul className="nav-links">
        <li><AuthButton/></li>
        <li><Link to="/aulas">Aulas</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </div>
  )
}

export default Nav

