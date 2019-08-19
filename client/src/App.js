import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/map">Map</Link>
              <Link to="/survey">Survey</Link>
              <Link to="/about">About</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/map">Map</Link>
              <Link to="/survey">Survey</Link>
              <Link to="/about">About</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default connect()(App);
