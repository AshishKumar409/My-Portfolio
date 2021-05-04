import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click,setClick] = useState(false)
  const clickHandler =()=>{
    setClick(!click)
  }
  const closeMobileMenu =()=>{
    setClick(false)
  }
  
  

 
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/'  className="navbar-logo" onClick={closeMobileMenu}>
            My Portfolio
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            
          </div>
          <ul className={click?"nav-menu active":"nav-menu"}>
            <li className="nav-item">
              <a href="/Ashish Resume.pdf" className="nav-links" target="blank" onClick={closeMobileMenu}>Resume</a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/ashish-kumar-64ab71195/" target="blank" className="nav-links" onClick={closeMobileMenu}><i class="fab fa-linkedin"></i></a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/AshishKumar409" target="blank" className="nav-links" onClick={closeMobileMenu}><i class="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
