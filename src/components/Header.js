import { NavLink, Link} from "react-router-dom";
/*
  Using 'React Router' library in our apps allows us to navigate between
  different pages or components in React, and actually makes these changes to
  the Url of each page or component.

  React Router needs to be installed.
*/


function Header(props) {
  return (
    <header className=''>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to="/">{props.title}</Link>
          <ul className='nav justify-content-center'>
            <li className="nav-item"><NavLink to="/documentation" className={(navData) => ( navData.isActive ? "nav-link active" : "nav-link")}>Documentation</NavLink></li>
            <li className="nav-item"><NavLink to="/tutorials" className={(navData) => ( navData.isActive ? "nav-link active" : "nav-link")}>Tutorials</NavLink></li>
            <li className="nav-item"><NavLink  to="/about" className={(navData) => ( navData.isActive ? "nav-link active" : "nav-link")}>About us</NavLink></li>
          </ul>
        </div>
        
      </nav>
    </header>
  )
}

export default Header