import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HeaderComponent from './components/common/Header'
import FooterComponent from './components/common/Footer'
import HomePage from './components/homepage/Homepage'
import { Layout } from 'antd'

class App extends Component {
  render() {
    return (
        <Layout className="layout">
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <FooterComponent />
        </Layout>
    );
  }
}

export default App;
