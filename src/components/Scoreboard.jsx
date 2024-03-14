import {useState} from 'react';
import './Scoreboard.css'
export default function Scoreboard({score = 12}){
    return (
        <div className='wrapper'>
            <div className='title'>
                <div>ROCK</div>
                <div>PAPER</div>
                <div>SCISSORS</div>
            </div>
            <div className='scores'>
                <div style={{color:"rgb(43 61 155)",fontSize:"15px"}}>SCORE</div>
                <div style={{color:"black",fontSize:"40px"}}>{score}</div>
            </div>
        </div>
    )
}