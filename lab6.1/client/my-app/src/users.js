import React from "react";

function User() {
    useEffect(() => {
        fetch("http://localhost:5000/users")
          .then(res => {
            console.log(res.body)
          })
      }, [])
    
    return(
        <div className="App">
            <a href="/">Enter User</a> |  <a href="/users">Users</a>
            <h1>Users</h1>
            <h1>No Users Found!</h1>
        </div>
    );
}

export default User