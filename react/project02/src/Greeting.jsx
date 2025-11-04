import {useState} from "react";
function Greeting() {
  const [message, setMessage] = useState('hello class');
  
  function changemessage() {
    setMessage('you clicked the button!');
  }
  
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changemessage}>Click Me</button>
    </div>
  );
}

export default Greeting;