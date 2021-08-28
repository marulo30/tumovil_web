import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Aliados from "./components/pages/Aliados";
import Pasajeros from "./components/pages/Pasajeros";
import Corporativos from "./components/pages/Corporativos";
import Ayuda from "./components/pages/Ayuda";
import Como from "./components/pages/Como";
import Contacto from "./components/pages/Contacto";
import Soporte from "./components/pages/Soporte";
import Termino from "./components/pages/Terminos";
import Testimonios from "./components/pages/Testimonios";
import Preguntas from "./components/pages/Preguntas";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aliados" exact component={Aliados} />
          <Route path="/pasajeros" exact component={Pasajeros} />
          <Route path="/corporativos" exact component={Corporativos} />
          <Route path="/ayuda" exact component={Ayuda} />
          <Route path="/como" exact component={Como} />
          <Route path="/contacto" exact component={Contacto} />
          <Route path="/preguntas" exact component={Preguntas} />
          <Route path="/soporte" exact component={Soporte} />
          <Route path="/termino" exact component={Termino} />
          <Route path="/testimonio" exact component={Testimonios} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
