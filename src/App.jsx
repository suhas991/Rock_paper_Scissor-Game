import './App.css'
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/GameBoard'
import Rules from './components/Rules'

import {useState} from 'react';

function App() {
   const [score,setScore]=useState(0);
   return (
    <div className='container'>
    < Scoreboard score={score}/>
     <Gameboard scoreupdate={setScore}/>
     <Rules/>
    </div>
   )
}
export default App
