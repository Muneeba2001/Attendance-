import "./App.css";
import { Route,Routes } from "react-router-dom";
import LogIn from "./Pages/Login";
import UserAuth from "./Pages/UserAuth";
import Register from "./Pages/Register"
import ForgetPassword from "./Pages/ForgetPassword";
import Home from "./Pages/Home";
import DefaultLayout from "./DefaultLayout";

function App() {
  return (
    <>
     
     <Routes>
      <Route path="/" element = {<DefaultLayout><Home/></DefaultLayout>}/>
      {/* user Authentication Route */}
  <Route path="UserAuth" element={<UserAuth />}>
    <Route path="Register" element={<Register />} />
    <Route path="Login" element={<LogIn />} />
    <Route path="ForgetPassword" element={<ForgetPassword />} />
  </Route>
</Routes>

    </>
  );
}

export default App;
