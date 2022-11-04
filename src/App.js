import './App.css';
import { signInWithGoogle } from './Firebase';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <button onClick={signInWithGoogle}>Sign with google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img alt="avatar" src={localStorage.getItem("profilePic")} />
    </div>
  );
}

export default App;
