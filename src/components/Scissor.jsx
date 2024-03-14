import './action.css'
import paper from '../assets/images/icon-scissors.svg'
export default function Scissor({setSelect,setInitial,setSecond}){
    const handle =()=>{
        setSelect(choice => {
            return {...choice,scissor:choice.scissor=true}
        })
        setInitial(val => val=false)
        setSecond(val => val=true)
    }
    return (
        <div className='outer'style={{backgroundColor:'hsl(39, 89%, 49%)'}}onClick={handle}>
            <div className='inner'>
                <div><img src={paper} alt="" /></div>
            </div>
        </div>
    )
}