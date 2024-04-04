import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import Dashboard from './components/DashboardComponent';
import ErrorComponent from './components/ErrorComponent';
import Header from './components/HeaderComponent';
import privacyPolicy from './components/privacyPolicy';


const MainComponent = () => (
    <div>
        <BrowserRouter>
            <div className="p-2 max-width">
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/privacy" component={privacyPolicy}/>
                    <Route component={ErrorComponent} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
);

ReactDOM.render(<MainComponent />, document.getElementById('test'));