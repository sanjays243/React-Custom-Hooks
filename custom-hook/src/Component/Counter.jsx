
import useCounter from "../Hooks/useCounter";

function Counter(){
    const {count,increase,decrease,reset}=useCounter()
    return(
        <div>
            <center>  <h1>Custom Counter</h1></center>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}
export default Counter;