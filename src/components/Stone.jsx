import './action.css'
import stone from '../assets/images/icon-rock.svg'
export default function Stone({setSelect,setInitial,setSecond}){

    const handle =()=>{
        setSelect(choice => {
            return {...choice,rock:choice.rock=true}
        })
        setInitial(val => val=false)
        setSecond(val => val=true)
    }
    return (
        <div className='outer'style={{backgroundColor:'hsl(349, 71%, 52%)'}} onClick={handle}>
            <div className='inner'>
                <div><img src={stone} alt="" /></div>
            </div>
        </div>
    )
}