import React from "react";

function Main() {
  const handleChange = (e) => {
    e.target.name = e.target.value
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/', {
      method: 'POST',
      mode: 'cors',
      // body: JSON.stringify(),
      headers: {'Content-Type': 'application/json'}
    })
  }
  return(
      <div className="App">
      <a href="/">Enter User</a> |  <a href="/users">Users</a>
      <form action="/users" method="POST">
        <input type="text" name="user" onChange={handleChange}></input>
        <button class="btn" type="submit" onSubmit={handleSubmit}>Add User</button>
      </form>
    </div>
  );
}

export default Main