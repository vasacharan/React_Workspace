import React from 'react';
import Logo from '../Asserts/Images/Bms-logo.png';
import { Link } from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           Home : 'Home',
           About : 'About to',
           Services : 'Services',
           Blog : 'Blog',
           Forms : 'Forms'
          
        }
    }
    
    render(){
        return(
        <div>
            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <img src={Logo} className="navbar-brand" width={100} height={45} alt='display none'/>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">{this.state.Home}</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/About" className="nav-link active">{this.state.About}</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Services" className="nav-link active">{this.state.Services}</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Blog" className="nav-link active">{this.state.Blog}</Link>
                    </li>

                    <div className="dropdown">
                    <button className="btn dropdown-toggle me-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.state.Forms}
                   
                   
                    </button>
                    <ul className="dropdown-menu">
                    <li><Link to="/Forms" className="dropdown-item">Form-Class</Link></li>
                    <li><Link to="/Calculator" className="dropdown-item">Calculator</Link></li>
                    <li><Link to="/TableDataApi" className="dropdown-item">Axios-Class</Link></li>
                    <li><Link to="/Expuseref" className="dropdown-item">useRef-Function</Link></li>
                    <li><Link to="/TodoList" className="dropdown-item">Todo</Link></li>
                    <li><Link to="/Weather" className="dropdown-item">Weather-App</Link></li>
                    <li><Link to="/DataSort" className="dropdown-item">Sort City</Link></li>
                    <li><Link to="/Pagination1" className="dropdown-item">Pagination</Link></li>
                    </ul>
                    </div>
                </ul>
                <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle me-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Select City
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Bangalore</a></li>
                    <li><a className="dropdown-item" href="#">Hyderabad</a></li>
                    <li><Link to="/Services" className="dropdown-item">Visakhapatnam</Link></li>
                    <li><a className="dropdown-item" href="#">Chennai</a></li>
                    <li><a className="dropdown-item" href="#">Kochin</a></li>
                </ul>
                </div>
                
                <form className="d-flex" role="search">
                    <input className="form-control w-50 me-4" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
                </div>
            </nav>
    
        </div>
        )
    }
}
export default Header;








