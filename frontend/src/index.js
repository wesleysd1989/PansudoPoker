import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Swit, Redirect, IndexRoute  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'

import Home from './views/Home/'

import reducers from './reducers/'

import AuthOrApp from './Main/'


//const store = cfgStore()

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
      <Route exact path="/home" name="Home Page" component={Home}/>
      <Route path="/" name="Home" component={AuthOrApp}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

/*
<Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/subject/list" name="SubjectList" component={SubjectList} />
                <Route path="/subject/new" name="SubjectCreate" component={SubjectCreate} />
                
              </Switch>

        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Redirect from='*' to='/' />

*/
