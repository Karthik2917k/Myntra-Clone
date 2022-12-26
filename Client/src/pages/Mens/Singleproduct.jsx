import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProd } from "../../redux/singleProduct/prod.actions";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {addtocart, cartReset} from "../../redux/Cart/cart.actions.js"
function Singleproduct() {
  const navigate = useNavigate();
  const toast = useToast();
  let { id } = useParams();
  let dispatch = useDispatch();
  const { data, loading, error } = useSelector((store) => store.prod);
  const cardStatus = useSelector((store)=>store.cart)
  let user = useSelector((store) => store.user.data);
  if(cardStatus.error){
    toast({
      title: cardStatus.msg,
      description: "somthing wrong or product alredy exist",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    dispatch(cartReset());
  }
  if(cardStatus.msg==="Product added to cart" || cardStatus.msg==="Quantity Increased"){
    toast({
      title: cardStatus.msg,
      status:"success",
      duration: 5000,
      isClosable: true,
    });
    dispatch(cartReset());
  }
  const handleAddtoCart = (inf) => {
    if (inf.token === undefined) {
      navigate("/signin");
    }
    dispatch(addtocart(inf))
    console.log(cardStatus);
  };
  useEffect(() => {
    dispatch(singleProd(id));
  }, [id]);
  if (loading) {
    return <Text>Loading....</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  return (
    <Box m="auto">
      <Navbar />
      <Grid
        m="50px 10%"
        gridTemplateColumns={{
          sm: "45%",
          md: "30% 60%",
        }}
        gap={10}
      >
        {data && (
          <>
            <GridItem>
              <Image w="100%" src={data.image} alt={data.brand} />
            </GridItem>
            <GridItem w="100%" box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <Box>
                <Text fontSize={"30px"} fontWeight={500} color="grey">
                  {data.brand}
                </Text>
                <Text fontSize={"25px"} fontWeight={400}>
                  {data.productname}
                </Text>
                <Box m="10px 0" display="flex" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => {
                      const roundedRating = Math.round(data.rating * 2) / 2;
                      if (roundedRating - i >= 1) {
                        return (
                          <BsStarFill
                            key={i}
                            style={{ marginLeft: "1" }}
                            color={i < data.rating ? "orange" : "orange"}
                          />
                        );
                      }
                      if (roundedRating - i === 0.5) {
                        return (
                          <BsStarHalf
                            color="orange"
                            key={i}
                            style={{ marginLeft: "1" }}
                          />
                        );
                      }
                      return <BsStar key={i} style={{ marginLeft: "1" }} />;
                    })}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {data.ratingsCount} reviews{"    "}
                  </Box>
                </Box>
              </Box>
              <hr />
              <Text fontSize={"25px"} fontWeight={600}>
                RS. {data.price}.00
              </Text>
              <span style={{ fontSize: "20px" }}>Quantity</span>:{" "}
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
              >
                {data.quantity}{" "}
              </span>
              <Text color={"teal"}>Inclusive all taxes.</Text>
              <Box display={"flex"}>
                <Button
                  m="10px 0"
                  backgroundColor={"pink.400"}
                  fontSize={{ sm: "20px", md: "30px" }}
                  p={{ sm: "10px 20px", md: "30px 50px" }}
                  _hover={{ backgroundColor: "pink.500" }}
                  color={"#ffffff"}
                  w="200px"
                  disabled={cardStatus.loading}
                  onClick={() =>
                    handleAddtoCart({
                      inf: { user: user._id, product: data._id },

                      token: user.email,
                    })
                  }
                >
                 {cardStatus.loading?<Spinner/>:"Add to cart"}
                </Button>
                <Link to="/cart">
                  <Button
                    m="10px 10px"
                    backgroundColor={"pink.400"}
                    fontSize={{ sm: "20px", md: "30px" }}
                    p={{ sm: "10px 20px", md: "30px 50px" }}
                    _hover={{ backgroundColor: "pink.500" }}
                    color={"#ffffff"}
                  >
                    Go to Cart
                  </Button>
                </Link>
              </Box>
              <Text fontFamily={"20px"} p="5px 0">
                100% Original Products
              </Text>
              <Text fontFamily={"20px"} p="5px 0">
                Pay on delivery might be available
              </Text>
              <Text fontFamily={"20px"} p="5px 0">
                Easy 15 days returns and exchanges
              </Text>
              <Text fontFamily={"20px"} p="5px 0">
                Try & Buy might be available
              </Text>
              <hr />
              <hr />
              <Box>
                <Text as="b" color={"pink.400"}>
                  BEST OFFERS
                </Text>
                <Text>
                  Applicable on: Orders above Rs. 599 (only on first purchase)
                </Text>
                <Text>Coupon code: MYNTRA200</Text>
                <Text>
                  Coupon Discount: Rs. 200 off (check cart for final savings)
                </Text>
                <Text>View Eligible Products</Text>
                <Text>Get additional offer</Text>
                <Text>
                  Buy this style and unlock additional 10% off upto ₹100 on a
                  selected catalogue.
                </Text>
                <Text as="b" color={"pink.400"}>
                  EMI option available
                </Text>
                <Text>EMI starting from Rs.56/month</Text>
              </Box>
            </GridItem>
          </>
        )}
      </Grid>
      <hr />
      <Footer />
    </Box>
  );
}

export default Singleproduct;
