import {useState} from "react";
const Main=()=>{
    const [count, setCount] = useState(0);
    const incerment =(c)=>{
        setCount(count+c)
    };

    let value =3;
    return(<div>
        <form action="">
            <label htmlFor="incermenter">
                Incermenter:
            </label>
            <input id="incermenter" 
            type="number"
            required 
            value={value} 
            onChange={(e)=>value=e.target.value}
            />
        <button onClick={()=>incerment(2)}> count:{count} Increment</button>
        </form>
        
    </div>
    );
}
export default Main;