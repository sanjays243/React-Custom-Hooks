import useToggle from "../Hooks/useToggle";

function Toggle(){
    const {show,toggle,pass,password}=useToggle()
    return(
        <div><hr />
            <center><h1>Custom Toggle</h1></center>
            <h1>{show?"WelCome to Custom Hook Concept":""}</h1>
            <button onClick={toggle}>{show? "Hide" :"Show"}</button>

            <h1>Password Show/Hide</h1>
            <input type={pass?"text":"password"} placeholder="Enter your password" />
            <button onClick={password}>{pass? "Hide":"Show"}</button>
        </div>
    )
}
export default Toggle;