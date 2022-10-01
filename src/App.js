import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Admin } from "./pages/admin/Admin";
import { Signin } from "./pages/auth/Signin";
import { Signup } from "./pages/auth/Signup";
import { User } from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
