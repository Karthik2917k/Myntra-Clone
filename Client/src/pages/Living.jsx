import { Box, Grid, GridItem, Image, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Living() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const getData = async () => {
    setLoading(true)
    let res = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/products?category=matress`);
    setData([...res.data]);
    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);
  data && console.log(data);
  return (
    <Box>
      <Navbar />
      {loading === true ? (
        <Box m="100px auto" display={"flex"} justifyContent="center">
          <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='pink.500'
        size='xl'
      />
        </Box>
      ):
      <Box w="90%" m=" 50px auto">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
          {data &&
            data.map((prod) => {
              return (
                <Link to={`/mens/${prod._id}`} key={prod._id}>
                  <GridItem
                    backgroundColor={"#FFFFFF"}
                    _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    <Box border={"1px solid lightgrey"} borderBottom={"none"}>
                      <Image
                        h="300px"
                        w="300px"
                        src={prod.image}
                        alt={prod.brand}
                      />
                    </Box>
                    <hr />

                    <Box border={"1px solid lightgrey"} p="10px">
                      <Box>
                        <Text>{prod.brand}</Text>
                        <Box display="flex" alignItems="center">
                          {Array(5)
                            .fill("")
                            .map((_, i) => {
                              const roundedRating =
                                Math.round(prod.rating * 2) / 2;
                              if (roundedRating - i >= 1) {
                                return (
                                  <BsStarFill
                                    key={i}
                                    style={{ marginLeft: "1" }}
                                    color={
                                      i < prod.rating ? "orange" : "orange"
                                    }
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
                              return (
                                <BsStar key={i} style={{ marginLeft: "1" }} />
                              );
                            })}
                          <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {prod.ratingsCount} reviews{" "}
                          </Box>
                        </Box>
                      </Box>
                      <Text>{prod.productname}</Text>
                      <Text>RS. {prod.price}</Text>
                    </Box>
                  </GridItem>
                </Link>
              );
            })}
        </Grid>
      </Box>}
      <Footer />
    </Box>
  );
}

export default Living;
