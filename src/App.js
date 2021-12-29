import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  apiKey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="Entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="General"
                  pageSize={this.pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="Health"
                  pageSize={this.pageSize}
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/Science" 
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="Science"
                  pageSize={this.pageSize}
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="Sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="Technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="Technology"
                />
              }
            />
            key=""
          </Routes>
        </Router>
      </div>
    );
  }
}
