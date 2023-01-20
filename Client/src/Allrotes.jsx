import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./pages/Admin/Admin";
import AdminCart from "./pages/Admin/AdminCart";
import Products from "./pages/Admin/Products";
import Users from "./pages/Admin/Users";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Beauty from "./pages/Beauty";
import Cart from "./pages/Cart/Cart";
import Living from "./pages/Living";
import Mens from "./pages/Mens/Mens";
import Singleproduct from "./pages/Mens/Singleproduct";
import Search from "./pages/Search/Search";
import Womens from "./pages/Womens";

function Allrotes() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/home_living" element={<Living />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/search/:id" element={<Search/>}/>
      <Route path="/product/:id" element={< Singleproduct/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />} />
      <Route path="/admincart" element={<AdminCart />} />
      
    </Routes>
  );
}

export default Allrotes;
