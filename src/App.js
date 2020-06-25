import React from 'react';
import Sidebar from './Components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenido from './Components/bienvenido';
import Asignatura from './Components/componentesAsignaturas/asignatura';
import SearchBar from './Components/searchBar';
import ListaAsignaturas from './Components/componentesAsignaturas/listaAsignaturas';
import PageAsignaturas from './Pages/pageAsignaturas';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './Components/NotFound';


function App() {



  return (
    <div className="App container-fluid">
      <div className="row">



            <Sidebar></Sidebar>


            <div className="container-fluid" style={{marginLeft: "120px", marginRight: "100px", marginTop: "20px"}}>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={PageAsignaturas}></Route>
                        <Route  exact path="/asignatura/:id" component={Bienvenido}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </BrowserRouter>
            
            </div>

      </div>
    </div>
  );
}

export default App;
