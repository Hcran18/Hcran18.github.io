import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import { NavLink } from 'react-router-dom';
import './NavbarStyles.css';
import logo from '../Pages/Images/h-logo/png/logo-no-background.png';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = (label) => {
        this.setState({ clicked: !this.state.clicked })

        ReactGA.event({
            category: 'Navbar',
            action: 'Click',
            label: label,
        });
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <NavLink to='/'>
                    <img src={logo} alt='logo' className='logo' />
                </NavLink>
                <div className='menu-icon' onClick={() => this.handleClick('Menu Icon')}>
                    <i className={
                        this.state.clicked ? 
                        "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <NavLink className='nav-links' exact="true" to="/" onClick={() => this.handleClick('Home')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links' to="/about" onClick={() => this.handleClick('About')}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links' to="/experience" onClick={() => this.handleClick('Experience')}>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links' to="/projects" onClick={() => this.handleClick('Projects')}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links' to="/pricing" onClick={() => this.handleClick('Pricing')}>Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-links contact' to="/contact" onClick={() => this.handleClick('Contact')}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
