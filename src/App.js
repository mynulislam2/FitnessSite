import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registraion from "./Components/Registration/Registraion";
import RequireAuth from "./Components/requireAuth/RequireAuth";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Registraion></Registraion>}></Route>
          <Route path="/checkout" element={
            <RequireAuth><CheckOut></CheckOut></RequireAuth>
          }></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
