import Main from './pages/Main';
import Repositorio from './pages/Repositorio';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

export default function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/repositorio/:repositorio' component={Repositorio}/>
            </Switch>        
        </BrowserRouter>

    );
}