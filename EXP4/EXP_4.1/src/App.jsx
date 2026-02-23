// App.jsx
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext.jsx";
import Profile from "./Profile.jsx";
import Theme from "./Theme.jsx";
import "./App.css";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="card">
        <h1>Context API Lab</h1>
        <Profile />
        <Theme />
      </div>
    </div>
  );
}

export default App;