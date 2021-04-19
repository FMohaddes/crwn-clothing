import React from 'react'
import HomePage from "./pages/homepage/home-page";
import './App.css';
import { Route ,Switch} from "react-router-dom";

function Hat(){
     return(
     <div>
          <h1>Hats</h1>
     </div>
     )
}

function App() {
     return (
          <div >
               <Switch>
                    <Route exact  path = '/' component = { HomePage } />
                    <Route exact  path = '/shop/hats' component = { Hat } />

               </Switch>
          </div >
     );
}

export default App;
