import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Living() {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const getData = async (pageno) => {
    setLoading(true);
    let res = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/products?category=matress&page=${pageno}&limit=20`
    );
    setData([...res.data.data]);
    setLength(res.data.length);
    setLoading(false);
  };
  const el = Math.ceil(length / 20);
  const pagination = new Array(el).fill(0);
  console.log(pagination);
  useEffect(() => {
    getData(page);
  }, [page]);
  data && console.log(data);
  return (
    <Box>
      <Navbar />
      {loading === true ? (
        <Box m="100px auto" display={"flex"} justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="pink.500"
            size="xl"
          />
        </Box>
      ) : (
        <Box w="90%" m="auto" my="25px">
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
                  <Link to={`/product/${prod._id}`} key={prod._id}>
                    <GridItem
                    h="450px"
                    
                    border={"1px solid lightgrey"}
                      backgroundColor={"#FFFFFF"}
                      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"450px" }}
                    >
                      <Box borderBottom={"1px solid lightgrey"}>
                        <figure>
                        <Image
                          h="300px"
                          w="100%"
                          src={prod.image}
                          alt={prod.brand}
                        />
                        </figure>
                      </Box>
                      <hr />
                      <Box  p="10px">
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
                            <Box
                              as="span"
                              ml="2"
                              color="gray.600"
                              fontSize="sm"
                            >
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

          <Flex
            justifyContent={"center"}
            alignItems="center"
            flexWrap={"wrap"}
            gap={5}
            my="30px"
          >
            <Button color={"#ffffff"} borderRadius={2} backgroundColor={"blue"} disabled={page===1} onClick={()=>setPage(page-1)}>Prev</Button>
            {pagination &&
              pagination.map((item, i) => {
                return (
                  <Button
                    key={i}
                    color={"#ffffff"} borderRadius={2} backgroundColor={"blue"}
                    disabled={page === i + 1}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                );
              })}
              <Button  color={"#ffffff"} borderRadius={2} backgroundColor={"blue"} disabled={page===pagination.length} onClick={()=>setPage(page+1)}>Next</Button>
          </Flex>
        </Box>
      )}
      <Footer />
    </Box>
  );
}
export default Living;
