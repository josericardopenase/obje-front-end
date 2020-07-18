import React from 'react';
import Sidebar from './Components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import Owl from './Components/KnowleadgeOwl/owl';


import ListaMenuSidebar from './Components/componentesSidebar/listaMenuSidebar';
import PagePlayFlashcards from './Components/paginas/PagePlayFlashcards/PagePlayFlashcards';
import PageAsignaturas from './Components/paginas/PageAsignaturas/pageAsignaturas';
import PageFlashcards from './Components/paginas/PageFlashcards/pageFlashcards';
import PageLecciones from './Components/paginas/PageLecciones/pageLecciones';
import NotFound from './Components/paginas/PageNotFound/NotFound';
import PageApartados from './Components/paginas/PageApartados/pageApartados';



function App(props) {

  const location = useLocation();

  return (
    <div className="App container-fluid overflow-hidden">
      <div className="row">


 
            <Sidebar>
              
              

                <ListaMenuSidebar></ListaMenuSidebar>

            </Sidebar>

            <Owl></Owl>

            
               
                <AnimatePresence exitBeforeEnter >
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={PageAsignaturas}></Route>
                        <Route exact path="/flashcards/:id" component={PagePlayFlashcards}></Route>
                        <Route exact path="/flashcards" component={PageFlashcards}></Route>
                        <Route  exact path="/:asignaturaID" component={PageLecciones}></Route>
                        <Route exact path="/:asignaturaID/:leccionID" component={PageApartados}></Route>
                        
                        
                        <Route component={NotFound}></Route>
                    </Switch>

                  </AnimatePresence>

   
                
            



      </div>
    </div>
  );
}

export default App;
