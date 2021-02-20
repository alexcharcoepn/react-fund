import './App.css';
import React,{useState} from 'react'
import Counter from './Components/Counter'
import Accordeon from "./Components/Accordeon"
import Input from "./Components/Input"
import Loop from './Components/Loop';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import MovieDet from './Components/MovieDet';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      
      <HelloWorld name="Alexander" greetings="XDD"/>
      <Counter btnContent="Apachurrale" />
      <Accordeon/>
      

    <Router>

      <Switch>
    <Route path="/movie/:id">
      <MovieDet/>
    </Route>


      <Route path="/">
          <Input/>
            <Loop data={[{value:"Doge"},{value:"Cheems"},{value:"Gabe"}]}/>
        </Route>


      

     
        
       
      </Switch>
    </Router>



      </header>

    </div>
  );
}

function HelloWorld({name, greetings="Username"}){
  return <h1> Hey there... {name} {greetings} !!!</h1>
}


export default App;


