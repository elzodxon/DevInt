import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./ui/Header/Header";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
            <Route path="/css"  component={CSS} />
          <Route path="/javaScript"  component={JavaScript} />

        </div>
      </Router>
    </div>
  );
}

export default App;
