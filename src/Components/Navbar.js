import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarStyles.css';
import logo from '../Pages/Images/h-logo/png/logo-no-background.png';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <NavLink to='/'>
                    <img src={logo} alt='logo' className='logo' />
                </NavLink>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={
                        this.state.clicked ? 
                        "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <NavLink className={'nav-links'} exact="true" to="/" onClick={this.handleClick}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-links'} to="/about" onClick={this.handleClick}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-links'} to="/experience" onClick={this.handleClick}>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-links'} to="/projects" onClick={this.handleClick}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className={'nav-links'} to="/contact" onClick={this.handleClick}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
