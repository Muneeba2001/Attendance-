import "./App.css";
import { Route,Routes } from "react-router-dom";
import LogIn from "./Pages/Login";
import UserAuth from "./Pages/UserAuth";
import Register from "./Pages/Register"

function App() {
  return (
    <>
     
      {/* <LogIn/> */}
      <Routes>
        <Route path="/UserAuth" element = {<UserAuth/>}>
          <Route path="Register" element = {<Register/>} />
          <Route path="Login" element = {<LogIn/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
