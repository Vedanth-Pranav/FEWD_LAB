import "./App.css";
import { useContext } from "react";
import Login from "./components/EXP8/Login.js";
import Home from "./components/EXP8/Home.js";
import AuthProvider, { AuthContext } from "./components/EXP8/AuthContext.js";

function MainApp() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      {user ? <Home /> : <Login />}
    </div>
  );
}
function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
export default App;
