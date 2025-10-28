import { useState } from "react";

function Greetings() {
    const [message, setMessage] = useState("Hello, AMAN!"); 

    function changeMessage() {
        setMessage("You clicked the button");
    }

    return (
        <div>
            <h1>{message}</h1>  
            <button onClick={changeMessage}>Click Me</button>
        </div>
    );
}

export default Greetings;