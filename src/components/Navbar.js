import React from 'react'


export default function Navbar(props) {
  return (
    <nav className={` navbar navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">Please Enable Dark Mode </a>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link"  href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText} </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.guard}</a>
              </li>
            </ul>
            
          </div>
          
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?':dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault" color='red'>Enable Dark Mode</label>
</div>
<div className={`form-check form-switch text-${props.node==='light'?':dark':'light'}`}>
<input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault" color='red'>Enable blue Mode</label>
</div>
      </nav>
      
      
  )
}