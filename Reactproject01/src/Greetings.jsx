import { useState } from "react";
function Greetings() {
    const [message, setName] = useState("Hello, AMAN!");

    function changeMessage() {
        setMessage("you click the button");
    }
    return (
        <div>
            <h1>{message}</h1>  
            <button onClick={changeMessage}>Click Me</button>
        </div>
    );
}