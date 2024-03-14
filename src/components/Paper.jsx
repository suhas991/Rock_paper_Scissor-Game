import './action.css'
import paper from '../assets/images/icon-paper.svg'
export default function Paper({setSelect,setInitial,setSecond}){
    
    const handle =()=>{
        setSelect(choice => {
            return {...choice,paper:choice.paper=true}
        })
        setInitial(val => val=false)
        setSecond(val => val=true)
    }
    return (
        <div className='outer'style={{backgroundColor:'hsl(230, 89%, 62%)'}}  onClick={handle}>
            <div className='inner'>
                <div><img src={paper} alt="" /></div>
            </div>
        </div>
    )
}