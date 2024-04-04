import React from 'react';
import {NavLink} from 'react-router-dom';

class privacyPolicy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
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
                                <NavLink to="/"><p>Back to main</p></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer">
                    <h2>Privacy Policy</h2>
                    <div className="app-wrapper spacer">
                        <p>
                        Last Updated: 1/5/2024

Introduction:

Welcome to Hollow Knight 112%! We appreciate your trust and are committed to safeguarding the confidentiality and security of your personal information. This Privacy Policy elucidates how we gather, employ, and secure your data when you utilize our mobile application.

Information We Collect:

Types of Data:

    No Data Collection.

We employ various methods to collect data, including:

    We do not collect data.

Data Usage and Sharing

We do not sell your personal information.

We implement robust security measures, including encryption and access controls, to protect your data from unauthorized access and misuse.

    Updates and Changes: This Privacy Policy may be updated, and you will be notified of any significant changes. Your continued use of the app after such modifications implies your consent.

    Contact Us: If you have any questions or concerns regarding this Privacy Policy, please contact us at reubencode117@gmail.

                        </p>
                    </div>
                    <p className="black-pill">
                        Entry Level React Developer, currently developing React projects 
                        on spare time, deploying production ready apps via Heroku. Currently
                        work in Devops. Started out in IT marketing, freelance websites via 
                        html, css, php, now focusing on web apps via React, firebase.
                    </p>
                </div>
            </div>
        );      
    }
}

const AppItem = (title, description, site) => (
    <a href={`http://${site}`} target="_blank">
        <div className="item">
            <div className="flex-it item-top">
                <h2>{title}</h2>
                <p>Go</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    </a>
);

export default privacyPolicy;