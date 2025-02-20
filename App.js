import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import Customers from "./Customers";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers" component={Customers} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
