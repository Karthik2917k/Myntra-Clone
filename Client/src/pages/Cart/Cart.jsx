import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { cartproducts } from "../../redux/Cart/cart.actions";
function Cart() {
  let dispatch = useDispatch();

  let { data, msg, loading, error } = useSelector((store) => store.cart);

 const TotalMrp = data.reduce(
    (accumulator, item) => accumulator + item.qty * item.product.price,
    0
  );
  // console.log(TotalMrp);
  // console.log(data);
  let { email } = useSelector((store) => store.user.data);
  console.log(email);
  // const handleDeleteItem = (id) => {
  //   let del= {_id:id};
  //   console.log(del)
  //   try{
  //     dispatch(deleteCart(del))
  //   }
  //   catch(e){
  //     console.log(e)
  //   }
  // }
  // console.log(cart)
  useEffect(() => {
    dispatch(cartproducts(email));
  }, []);
  console.log(data);
  let total = 2;
  return (
    <Box fontFamily={"sans-serif"}>
      <Navbar />
      <Grid
        w={{ base: "90%", sm: "80%", md: "80%" }}
        m="auto"
        mt={{ base: "50px", sm: "80px ", md: "100px" }}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "60% 30%",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <GridItem>
          <Box
            m="10px"
            display={"flex"}
            border="1px solid grey"
            p="20px"
            justifyContent="space-between"
          >
            <Text>Check Delivery Address</Text>
            <Button
              background={"none"}
              border="2px solid pink"
              color={"pink.400"}
            >
              Enter Pin code
            </Button>
          </Box>
          <Box m="10px" border="1px solid grey">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Available Prices
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    <li>
                      10% Instant Discount on PNB Credit Cards on a min spend of
                      Rs 2,000. TCA
                    </li>
                    <li>
                      5% Cashback on Paytm Postpaid transactions on a min spend
                      of Rs 1,500. TCA
                    </li>
                    <li>
                      10% Cashback upto Rs 150 on Freecharge Paylater
                      transaction. TCA
                    </li>
                    <li>
                      Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a
                      min spend of Rs 999.Use code MBK500 on Mobikwik.TCA
                    </li>
                    <li>
                      5% Cashback upto Rs 75 on a minimum spend of Rs 1,500 with
                      PayZapp. TCA
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            m="10px"
            display={"flex"}
            alignItems="center"
            border="1px solid grey"
          >
            <Image
              w="4%"
              src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
              alt="vehicle"
            />
            <Text>
              Yay! <span style={{ fontWeight: "bold" }}>No convention fee</span>{" "}
              for this order
            </Text>
          </Box>

          <Box m="10px" display={"flex"} justifyContent={"space-between"}>
            <Text fontSize="20px" fontWeight={"600"}>
              {data && data.length} Items
            </Text>
          </Box>
          <Box>
            {data &&
              data.map((item) => {
                return (
                  <Box key={item._id}>
                    <Flex
                      boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
                      my={10}
                    >
                      <Box m="10px">
                        <Image
                          w="100px"
                          h="100px"
                          src={item.product.image}
                          alt={item.product.productname}
                        />
                      </Box>

                      <Box m="10px" ml="20px">
                        {" "}
                        <Text>{item.product.brand}</Text>
                        <Text>{item.product.productname}</Text>
                        <Flex
                          backgroundColor={"blackAlpha.500"}
                          w="92px"
                          py="13px"
                          h="20px"
                          alignItems={"center"}
                        >
                          <Button
                            background={"none"}
                            _hover={{ background: "none" }}
                          >
                            -
                          </Button>
                          <Text>{item.qty}</Text>
                          <Button
                            background={"none"}
                            _hover={{ background: "none" }}
                          >
                            +
                          </Button>
                        </Flex>
                        <Text>Rs.{item.qty * item.product.price}.00</Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <Button
                          background={"none"}
                          _hover={{ background: "none" }}
                        >
                          ❌
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
          </Box>
        </GridItem>
        <GridItem boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px">
          <Text>OFFERS & CUPONS</Text>
          <Box m="10px" display="flex" justifyContent={"space-between"}>
            <Text>1 offer on your bag</Text>
            <Text>{">"}</Text>
          </Box>
          <Box m="10px" display="flex" justifyContent={"space-between"}>
            <Text>Apply Coupons</Text>
            <Text>{">"}</Text>
          </Box>
          <Text>Gifting and personalization</Text>
          <Box
            m="10px"
            display="flex"
            justifyContent={"flex-start"}
            background="pink.400"
          >
            {" "}
            <Image
              w="30px"
              src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
              alt="tie"
            />
            <Box>
              <Text color={"#FFFFFF"}>Buy for a Loved one?</Text>
              <Text color={"#FFFFFF"}>
                Gift wrap and personalised message on card, Only for{" "}
              </Text>
              <Text color={"#FFFFFF"}>Add Gift wrap</Text>
            </Box>
          </Box>
          <Box>
            <Text>Price Details {data.length} items</Text>
            <Box display={"flex"} justifyContent="space-between" p=" 10px 10px">
              <Text>Total MRP</Text>
              <Text>{TotalMrp}.00 Rs.</Text>
            </Box>
            <Box display={"flex"} justifyContent="space-between" p=" 10px 10px">
              <Text>Discount on MRP</Text>
              <Text>0.00 Rs.</Text>
            </Box>
            <Box display={"flex"} justifyContent="space-between" p=" 10px 10px">
              <Text>Cupon Discount</Text>
              <Text color="pink.300">Apply</Text>
            </Box>
            <Box display={"flex"} justifyContent="space-between" p=" 10px 10px">
              <Text>convenience Fee</Text>
              <Text>Free</Text>
            </Box>
          </Box>
          <Box m="10px" display={"flex"} justifyContent="center">
            <Button
              border={"none"}
              background="pink.300"
              _hover={{ background: "pink" }}
              color="#FFFFFF"
              p="0 40px"
            >
              Place Order
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Cart;
