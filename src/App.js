import React from 'react';
import Sidebar from './Components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bienvenido from './Components/bienvenido';
import Asignatura from './Components/componentesAsignaturas/asignatura';
import SearchBar from './Components/searchBar';
import ListaAsignaturas from './Components/componentesAsignaturas/listaAsignaturas';
import PageAsignaturas from './Pages/pageAsignaturas';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import NotFound from './Components/NotFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageLecciones from './Pages/pageLecciones';
import mensajeAsignatura from './Components/componentesLecciones/mensajeAsignatura';
import PageApartados from './Pages/pageApartados';
import { AnimatePresence } from 'framer-motion';
import Owl from './Components/KnowleadgeOwl/owl';


function App(props) {

  const location = useLocation();


  console.log(location)
  return (
    <div className="App container-fluid overflow-hidden">
      <div className="row">


 
            <Sidebar></Sidebar>

            <Owl></Owl>

            <div className="main-page" style={{ marginRight: "50px", marginTop: "20px"}}>
            
               

                <AnimatePresence exitBeforeEnter >
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={PageAsignaturas}></Route>
                        <Route  exact path="/:asignaturaID" component={PageLecciones}></Route>
                        <Route exact path="/:asignaturaID/:leccionID" component={PageApartados}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>

                  </AnimatePresence>
                
            
            </div>


      </div>
    </div>
  );
}

export default App;
