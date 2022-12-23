import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Image,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { userReset } from "../redux/user/user.action";
const Links = [
  { name: "Mens", path: "/mens" },
  { name: "Womens", path: "/womens" },
  { name: "Home", path: "/home_living" },
  { name: "Beauty", path: "/beauty" },
];

export default function Navbar({ user = "" }) {
  let dispatch = useDispatch();
  let usser = useSelector((store) => store.user.data);
  const [search, setSearchdata] = useState([]);
  const [userData, setUserData] = useState({});
  const [val, setValue] = useState("");
  const [len, setLen] = useState(0);
  const [state, setState] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSearch = (e) => {
    let data = axios
      .get(`http://localhost:8080/products/search?search=${e.target.value}`)
      .then((res) => setSearchdata(res.data.data))
      .catch((e) => console.log("error"));
    console.log(e.target.value);
    setValue(e.target.value);
    setLen(search.length)
  };
  const handleLogout = () => {
    dispatch(userReset());
    setState(!state);
  };
  useEffect(() => {
    if (user.email) {
      setUserData(user);
    }
  }, [user]);
  console.log(search);
  return (
    <>
      <Box
        boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px"
        borderBottom={"1px solid lightgrey"}
        px={4}
        position="sticky"
        top="0"
        backgroundColor={"#ffffff"}
        zIndex={4}
      >
        <Flex
          w="100%"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Image
                  src="https://dotslevel.com/wp-content/uploads/2017/08/myntra-logo.png"
                  w="200px"
                  h="100px"
                  alt=""
                />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <Link to={link.path} key={i}>
                  <Text
                    color="pink.400"
                    fontWeight={"600"}
                    px={2}
                    py={1}
                    fontSize="20px"
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                    }}
                    href={"#"}
                    key={link.name}
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </HStack>
            <HStack display={{ base: "none", sm: "none", md: "block" }}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsSearch color="gray.300" />}
                />
                <Input
                  type="tel"
                  placeholder="Search for products..."
                  w="500px"
                  focusBorderColor="none"
                  onChange={(e) => handleSearch(e)}
                />
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={usser.pic || "https://i.ibb.co/Jd12z6R/user.png"}
                />
              </MenuButton>
              <MenuList>
                {usser.email ? (
                  <>
                    <Link to="">
                      <MenuItem>Account</MenuItem>
                    </Link>
                    <Link to="/cart">
                      <MenuItem>cart</MenuItem>
                    </Link>
                    <Link>
                      <MenuItem>Help</MenuItem>
                    </Link>
                    <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
                  </>
                ) : (
                  <>
                    <Link to="/signin">
                      <MenuItem>Signin</MenuItem>
                    </Link>
                    <Link to="/signup">
                      <MenuItem>Signup</MenuItem>
                    </Link>
                    <Link>
                      <MenuItem>Help</MenuItem>
                    </Link>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link to={link.path}>
                  <Text
                    color="pink.400"
                    fontWeight={"600"}
                    px={2}
                    py={1}
                    fontSize="20px"
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                    }}
                    href={"#"}
                    key={link.name}
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}

        {val && (
          <Box
          display={{base:"none",sm:"none",md:"block"}}
            background={"#ffffff"}
            p="20px"
            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
            position="absolute"
            top="55px"
            left="43%"
            right="22%"
          >
            {search &&
              len>=1?search.map((item, i) => {
                return (
                  <Link to={`/product/${item._id}`}>
                  <Flex mb="20px">
                    <Avatar src={item.image} />
                    <Text>{item.productname}</Text>
                  </Flex>
                  </Link>
                );
              }):<Box>No results found</Box>
            }
          </Box>
        )}
      </Box>
    </>
  );
}
