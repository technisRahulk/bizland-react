import React,{Component} from "react";
import './App.css';
import './style.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import {BrowserRouter as Router,Route,Switch, withRouter} from 'react-router-dom'

function App(){
 return(
     
        <Router>
            <Header/>
            <div>
                <Switch>
                    <Route exact path="/"><Home/><Gallery/></Route>
                    <Route exact path="/contact"><Contact/></Route>
                </Switch> 
            </div>
                   
            <Footer/>
        </Router>    
 );
}
export default App;
