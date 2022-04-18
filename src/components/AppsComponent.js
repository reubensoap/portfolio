import React from 'react';

class Apps extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="spacer">
                <p className="tag">Apps</p>
                <div className="app-wrapper spacer">
                    {AppItem('Hollow Checklist', 'React, Firebase, Production')}
                    {AppItem('Expense - Project', 'React, Firebase,')}
                    {AppItem('Indecision - Project', 'React, Firebase')}
                </div>
                <p className="black-pill">
                    Entry Level React Developer, currently developing React projects 
                    on spare time, deploying production ready apps via Heroku. Currently
                    work in Devops. Started out in IT marketing, freelance websites via 
                    html, css, php, now focusing on web apps via React, firebase.
                </p>
            </div>
        );
    }
}

const AppItem = (title, description) => (
    <a>
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
export default Apps;