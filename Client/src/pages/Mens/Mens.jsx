import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

import { mens } from "../../redux/mens/mens.actions";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function Mens() {
  let dispatch = useDispatch();
  const [page, setpage] = useState(1);
  const { data, loading, error, length } = useSelector(
    (store) => store.products
  );
  console.log(data)
  const el = Math.ceil(length / 40);
  const pagination = new Array(el).fill(0);
  console.log(pagination);
  const handlechange = (str) => {
    dispatch(mens(page, str));
  };

  useEffect(() => {
    dispatch(mens(page));
  }, [page]);

  return (
    <Box>
      <Navbar />

      <Box
        display={"flex"}
        w="100%"
        gap={3}
        p={{ base: "10px", sm: "20px 10px", md: "20px 40px" }}
        justifyContent={"flex-end"}
        color={"#F687B3"}
      >
        <Menu>
          <MenuButton as={"button"}>
            <Box
              p="5px"
              background={"none"}
              border="3px solid pink"
              borderRadius={"8px"}
            >
              {" "}
              Categories <ChevronDownIcon />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handlechange("?category=tshirts")}>
              Tshirts
            </MenuItem>

            <MenuItem onClick={() => handlechange("?category=mentrousers")}>
              Trousers
            </MenuItem>

            <MenuItem onClick={() => handlechange("?category=shoes")}>
              Shoes
            </MenuItem>

            <MenuItem onClick={() => handlechange("?category=sweaters")}>
              Sweaters
            </MenuItem>

            <MenuItem onClick={() => handlechange("?category=mensblazers")}>
              Mensblazers
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={"button"}>
            <Box
              p="5px"
              background={"none"}
              border="3px solid pink"
              borderRadius={"8px"}
            >
              {" "}
              Price <ChevronDownIcon />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => handlechange(`?category=sweaters&sort=asc`)}
            >
              ASC
            </MenuItem>
            <MenuItem
              onClick={() => handlechange(`?category=sweaters&sort=des`)}
            >
              DES
            </MenuItem>
            {/* <MenuItem>500 Above</MenuItem>
                <MenuItem>500 Below</MenuItem>
                <MenuItem>1000 Above</MenuItem>
                <MenuItem>1000 Below</MenuItem> */}
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={"button"}>
            <Box
              p="5px"
              background={"none"}
              border="3px solid pink"
              borderRadius={"8px"}
            >
              {" "}
              Brand <ChevronDownIcon />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handlechange("?brand=IVOC")}>
              IVOC
            </MenuItem>
            <MenuItem onClick={() => handlechange("?brand=DENNISON")}>
              DENNISON
            </MenuItem>
            <MenuItem onClick={() => handlechange("?brand=Roadster")}>
              Roadstar
            </MenuItem>
            <MenuItem onClick={() => handlechange("?brand=WROGN")}>
              WROGN
            </MenuItem>
            <MenuItem onClick={() => handlechange("?brand=Provogue")}>
              Provogue
            </MenuItem>
            <MenuItem onClick={() => handlechange("?brand=ADIDAS")}>
              ADIDAS
            </MenuItem>
            <MenuItem onClick={() => handlechange("?brand=KRA")}>KRA</MenuItem>
          </MenuList>
        </Menu>
      </Box>

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
      ) : error === true ? (
        <Box m="100px auto" display={"flex"} justifyContent="center">
          <video
            loading="lazy"
            muted="muted"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/error-mark-3767444-3162438.mp4"
            type="video/mp4"
            autoplay="autoplay"
            loop="loop"
          ></video>
        </Box>
      ) : (
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
                  <Link to={`/product/${prod._id}`} key={prod._id}>
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

          <Grid
            templateColumns={{base:"repeat(7,1fr)",sm:"repeat(10,1fr)",md:"repeat(20,1fr)"}}
            
            gap={5}
            my="30px"
          >
            <Button color={"#ffffff"} borderRadius={2} backgroundColor={"blue"} disabled={page===1} onClick={()=>setpage(page-1)}>Prev</Button>
            {pagination &&
              pagination.map((item, i) => {
                return (
                  <Button
                    key={i}
                    color={"#ffffff"} borderRadius={2} backgroundColor={"blue"}
                    disabled={page === i + 1}
                    onClick={() => setpage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                );
              })}
              <Button  color={"#ffffff"} borderRadius={2} backgroundColor={"blue"} disabled={page===pagination.length} onClick={()=>setpage(page+1)}>Next</Button>
          </Grid>
        </Box>
      )}
      <Footer />
    </Box>
  );
}

export default Mens;
