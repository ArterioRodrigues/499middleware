import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Quiz from "./Quiz/Quiz"
function Register(props) {
  const [username, setUsername] = useState([{}]);
  const [password, setPassword] = useState([{}]);
  const [name, setName] = useState([{}]);
  const [secondBackendData, setSecondBackendData] = useState([{}])
/*
  const [exercise_category, set] = useState([{}]);
  const [password, setPassword] = useState([{}]);
  const [password, setPassword] = useState([{}]);
*/

  var request = { "username":username , "password": password, "name":name };
  var HandleSubmit = function (event) {
    event.preventDefault();
 
    alert('form submitted');
    console.log(request);
    //
    fetch(`http://localhost:3001/createUser`, {
      method: 'POST',
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      //convert react state to json and send it as the post body
      body: JSON.stringify(request)
    }).then((response) => response.json()
    ).then(data => {
    setSecondBackendData(data)
      
    })
    console.log(secondBackendData);
    let num = parseInt(secondBackendData[0].user_id);
    console.log(typeof num,num);
    props.setId(num);
    console.log(props.id);
  }
  return (
    <div>
         <h1>register</h1>
      <form onSubmit={HandleSubmit}>
          
        <label>
          Enter username: <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          Enter password: <input type="text" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          Enter name: <input type="text" onChange={e => setName(e.target.value)}/>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
      <Quiz></Quiz>
      <Link to = {'/newExercise'}>
        <h1>Add New Exercise</h1>
      </Link>
      
      <Link to = {'/profile'}>
        <h1>User Profile</h1>
      </Link>
      <Link to = {'/'}>
        <h1>User Recommendations</h1>
      </Link>
     
    </div>
  )
}

export default Register;