import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth"

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [error, setError] = useState()
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  const [isLoading, setLoading] = useState("")
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
    console.log(data)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
    axiosWithAuth()
      .post("/api/login", data)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        props.history.push("/BubblesPage")
        console.log(res.data.payload)
      })
      .catch(err => console.log(err))
  }




  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
    {error && <div className="error">error</div>}
<input placeholder="username" value={data.username} name="username" type="username" onChange={handleChange}/>
<input placeholder="Password" value={data.password} name="password" type="password" onChange={handleChange}/>
<button>Submit</button>
</form>
    </>
    
   
  );
};

export default Login;
