import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import AdminNav from "../../components/AdminNav";
import "./admin.css";
function Admin() {
  const [data, setData] = useState(0);
  const [products, setProducts] = useState(0);
  const [cart, setcart] = useState(0);
  async function Getusers() {
    let user = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/user`);
    setData(user.data.length);
  }
  async function GetProducts() {
    let prod = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/products`);
    setProducts(prod.data.length);
  }
  async function GetCart() {
    let Cart = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/cart`);
    setcart(Cart.data.length);
  }
  useEffect(() => {
    Getusers();
    GetProducts();
    GetCart();
  }, []);

  let { email, name, pic, user } = useSelector((store) => store.user.data);
  console.log(email, name, pic, user);
  return (
    <Box>
      <AdminNav />
      <Box
        height={"90vh"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexWrap="wrap"
      >
        <a href="/users"><Box className="box">
          Users : <span style={{color:"yellow",marginLeft:"2%"}}> {data} </span>{" "}
        </Box></a>
        <a href="/products">
        <Box className="box">
          Products : <span style={{color:"yellow",marginLeft:"2%"}}> {products} </span>
        </Box>
        </a>
        <a href="/admincart">
        <Box className="box">
          Cart : <span style={{color:"yellow",marginLeft:"2%"}}> {cart} </span>
        </Box>
        </a>
      </Box>
    </Box>
  );
}

export default Admin;
