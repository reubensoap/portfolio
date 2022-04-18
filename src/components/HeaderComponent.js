import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header-wrapper spacer">
                <div className="main-text">
                    <h1>Reuben</h1>
                    <h1>Pena</h1>
                </div>
                <div className="flex-it sub-header-wrapper black-pill">
                    <div className="header-details body-nav">
                        <p>reubencode117@gmail.com</p>
                        <h3>/Developer</h3>
                    </div>
                    <div>
                        <h3>I'm a software engineer specializing in building
                            exceptional digital experiences.
                        </h3>
                        <div className="flex-it body-nav">
                            <a target="_blank" href="https://github.com/reubensoap"><p>Github</p></a>
                            <a target="_blank" href="https://www.linkedin.com/in/reuben-pena/"><p>LinkedIn</p></a>
                        </div>
                    </div>
                </div>
            </div>
        );      
    }
}

export default Header;