import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Clientes from "./components/pages/Clientes";
import Pasajeros from "./components/pages/Pasajeros";
import FAQs from "./components/pages/FAQs";
import Ayuda from "./components/pages/Ayuda";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/pasajeros" exact component={Pasajeros} />
          <Route path="/faqs" exact component={FAQs} />
          <Route path="/ayuda" exact component={Ayuda} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
