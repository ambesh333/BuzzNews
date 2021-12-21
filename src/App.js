
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import {
    BrowserRouter as Router,
    Routes,
    Route,
   
    
  } from "react-router-dom";


export default class App extends Component {
     pageSize=6;
    render() {
        return (
            <div>
                <Router>

                <Navbar/>
                <Routes >
                         
                <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
                <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>} />
                <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
                <Route exact path="/General" element={<News key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
                <Route exact path="/Health" element={<News key="Health" pageSize={this.pageSize} country="in" category="Health"/>}/>
                <Route exact path="/Science" element={<News key="Science" pageSize={this.pageSize} country="in" category="Science"/>}/>
                <Route exact path="/Sports" element={<News  key="Sports"pageSize={this.pageSize} country="in" category="Sports"/> }/>
                <Route exact path="/Technology" element={<News key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
                
            
               
                 key=""
                         </Routes>
                </Router>
            </div>
        )
    }
}

