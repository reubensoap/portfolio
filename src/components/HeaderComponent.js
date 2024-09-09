import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="spacer">
                <div className="main-text">
                    <img src={require('../images/reuben_pena_logo.png')} className="mainImage" />
                </div>
                <div className="sub-header-wrapper black-pill">
                    <div className="flex-it body-nav">
                        <a target="_blank" href="https://github.com/reubensoap"><p>Github</p></a>
                        <a target="_blank" href="https://www.linkedin.com/in/reuben-pena/"><p>LinkedIn</p></a>
                        <NavLink to="privacy"><p>Privacy Policy</p></NavLink>
                    </div>
                    <h3>I'm a software engineer specializing in building
                        exceptional digital experiences.
                    </h3>     
                </div>
            </div>
        );      
    }
}

export default Header;