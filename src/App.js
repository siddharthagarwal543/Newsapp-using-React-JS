
import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
   BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API
  // apiKey="0d723e870d5c45aeb8c096bff7cf9115"
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" pageSize={this.pageSize} category='general'/>}></Route>
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" pageSize={this.pageSize} category='business'/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" pageSize={this.pageSize} category='entertainment'/>}> </Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" pageSize={this.pageSize} category='health'/>}> </Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" pageSize={this.pageSize} category='science'/>}> </Route>
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" pageSize={this.pageSize} category='sports'/>}> </Route>
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" pageSize={this.pageSize} category='technology'/>}> </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

