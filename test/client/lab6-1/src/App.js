import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="/">Enter User</a><br></br>
      <a href="/users">Users</a>
      <form action="/" method="POST">
        <input type="text" name="user" id="user" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button class="btn" type="submit" onClick={onsubmit}>Add Product</button>
      </form>
    </div>
  );
}

const [inputValue, setInputValue] = useState("");
const onSubmit = () => {

}

export default App;
