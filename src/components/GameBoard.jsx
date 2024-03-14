import Stone from './Stone'
import Paper from './Paper'
import Scissor from './Scissor'
import {useEffect, useState} from 'react'

import Button from '@mui/material/Button';

import './Gameboard.css'
export default function GameBoard({scoreupdate}){
   const [initial,setInitial]=useState(true)
   const [second,setSecond] =useState(false)
   const [select,setSelect] = useState({rock:false,paper:false,scissor:false})
   const [ai,setAi]=useState('')
   const [user,setUser] =useState('');
   const [result,setResult]=useState('');

   useEffect(()=>{
    const myArray=['rock','paper','scissor'];
    let randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    setAi(randomElement);
    for(let key in select){
        if(select.hasOwnProperty(key)){
            let value=select[key];
            if(value==true){
                //console.log(key,value)
                setUser(key)
                break;
            }
        }
      }
   },[select])
   
   const caluclate =()=>{
    if(ai!=''&&user!=''){
        console.log(ai,user);  
        console.log('hello')
        if((ai== 'rock' && user=='rock') || (ai=='paper'&& user== 'paper')|| (ai=='scissor'&& user=='scissor')){
            console.log('draw')
            setResult('DRAW')
         }else if((ai=='rock' && user=='paper')||(ai=='paper' && user=='scissor')||(ai=='scissor'&&user=='rock')){
            console.log('win')
            setResult('WIN')
         }else{
            console.log('lose')
            setResult('LOOSE')
         }
    }
     
   }

   const handleReset =()=>{
        setInitial(val => val=true)
        setSecond(val => val=false)
        setSelect({rock:false,paper:false,scissor:false})
   }

   useEffect(() => {
    if (ai !== '' && user !== '') {
        caluclate();  
    }
    }, [ai, user]);


    useEffect(()=>{
        if(result==='WIN')
        scoreupdate(old => old+1);
    },[result])
   return(
    <>
    {initial ?( <div className='wrap'>
                <div className='lvl1'> 
                    <Paper setSelect={setSelect} setInitial={setInitial} setSecond={setSecond} /> 
                    <Scissor setSelect={setSelect} setInitial={setInitial} setSecond={setSecond} />
                </div>
                <div className='lvl2'>
                    <Stone setSelect={setSelect} setInitial={setInitial} setSecond={setSecond} />
                </div>
                </div> ): ''} 

    {second ? (
         <div className='wrap2'>

        <div className='wrap3'>
        <div className='user'>
            <div>YOU SELECTED</div>
            {select.paper &&  <div><Paper/></div>}
             {select.rock && <div><Stone/></div>} 
             {select.scissor && <div><Scissor/></div>}
         </div>

         <div className='ai'>
            <div>AI SELECTED</div>
             {ai ==='paper' &&<div> <Paper/></div>}
             {ai ==='rock' && <div><Stone/></div>} 
             {ai ==='scissor' &&<div> <Scissor/></div>}
         </div>
        </div>
        <div>{second && (<div>{result}</div>)}
         <Button variant="contained" onClick={handleReset}>PLAY AGAIN</Button>
        </div>

    </div> ):''}


    
    </>
                  
    
    
   
   )


}