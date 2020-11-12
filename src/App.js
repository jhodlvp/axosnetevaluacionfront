import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Usuarios from './components/usuarios/Usuarios';
import Monedas from './components/monedas/Monedas';
import Proveedors from './components/proveedors/Proveedors';
import Recibos from './components/recibos/Recibos';

function App() {
  return (
    <Router>
      <Switch>
	<Route exact path="/" component={Login} />
	<Route exact path="/usuarios" component={Usuarios} />
	<Route exact path="/monedas" component={Monedas} />
	<Route exact path="/proveedors" component={Proveedors} />
	<Route exact path="/recibos" component={Recibos} />
      </Switch>
    </Router>
  );
}

export default App;
