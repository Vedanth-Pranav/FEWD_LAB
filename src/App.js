import "./App.css";
// import { useContext } from "react";
// import Login from "./components/EXP8/Login.js";
// import Home from "./components/EXP8/Home.js";
// import AuthProvider, { AuthContext } from "./components/EXP8/AuthContext.js";
// import Counter from "./components/Counter.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
// import About from "./components/Routing/About.js";
// import Contact from "./components/Routing/Contact.js";
// import Home from "./components/EXP9/comps/Home/Home";

import Home from "./components/EXP10/Home";
import About from "./components/EXP10/About";
import Contact from "./components/EXP10/Contact";
import Navbar from "./components/EXP10/Navbar";

// function MainApp() {
//   const { user } = useContext(AuthContext);
//   return (
//     <div className="App">
//       {user ? <Home /> : <Login />}
//     </div>
//   );
// }
// function App() {
//   return (
//     <AuthProvider>
//       <MainApp />
//     </AuthProvider>
//   );
// }
// function App(){
//    return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul style={{ display: "flex", gap: "10px" }}>
//             <li><Link to="/">Counter</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Counter />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

//EXP9
// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };

//EXP10
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
