import React from 'react';
import Header from './HeaderComponent';
import Skills from './SkillsComponent.js';
import Apps from './AppsComponent.js';
import Footer from './FooterComponent';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="">
                    <Header />
                    <Apps />
                    <Footer />
                </div>
            </div>
        );
    }

}

export default Dashboard;