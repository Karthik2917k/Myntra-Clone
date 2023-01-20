import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDownIcon } from "@chakra-ui/icons";
function AdminNav() {
  const [state, setState] = useState("none");
  return (
    <Box>
      <Box display={{ base: "none", sm: "block" }} backgroundColor={"pink.600"}>
        <Flex
          w={{ base: "95%", sm: "90%", md: "80%" }}
          h="70px"
          m="auto"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link to="/admin">
            <Text fontSize={"20px"} color={"#ffffff"} fontWeight={"bold"}>
              H<span style={{ color: "yellow" }}>ome</span>
            </Text>
          </Link>
          <Spacer />
          <Box display="flex">
            <Link to="/users">
              <Text fontSize={"20px"} color={"#ffffff"} fontWeight={"bold"}>
                Users
              </Text>
            </Link>
            <Link to="/products">
              <Text
                fontSize={"20px"}
                color={"#ffffff"}
                fontWeight={"bold"}
                ml="20px"
              >
                Products
              </Text>
            </Link>
            <Link to="/admincart">
              <Text
                fontSize={"20px"}
                color={"#ffffff"}
                fontWeight={"bold"}
                ml="20px"
              >
                Cart
              </Text>
            </Link>
          </Box>
          <Spacer />
          <Avatar name="admin" />
        </Flex>
      </Box>
      <Box
        display={{ base: "block", sm: "none", md: "none" }}
        backgroundColor={"pink.600"}
      >
        <Flex
          w="90%"
          h="70px"
          m="auto"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link to="/admin">
            <Text fontSize={"20px"} color={"#ffffff"} fontWeight={"bold"}>
              H<span style={{ color: "yellow" }}>ome</span>
            </Text>
          </Link>
          <Spacer />
          <Box
            display={state}
            transition={"0.5s"}
            w="100%"
            textAlign={"left"}
            py="20px"
            backgroundColor={"pink.500"}
            position={"absolute"}
            top="70px"
          >
            <Link to="/users">
              <Text
                ml="30px"
                fontSize={"20px"}
                color={"#ffffff"}
                fontWeight={"bold"}
              >
                Users
              </Text>
            </Link>
            <Link to="/products">
              <Text
                ml="30px"
                fontSize={"20px"}
                color={"#ffffff"}
                fontWeight={"bold"}
              >
                Products
              </Text>
            </Link>
            <Link to="/admincart">
              <Text
                ml="30px"
                fontSize={"20px"}
                color={"#ffffff"}
                fontWeight={"bold"}
              >
                Cart
              </Text>
            </Link>
          </Box>
          <Spacer />
          <Menu>
            <MenuButton as={"button"}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Box
            transition={"0.5s"}
            onClick={() =>
              state === "none" ? setState("blobk") : setState("none")
            }
          >
            <GiHamburgerMenu style={{ color: "#ffffff", fontSize: "40px" }} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AdminNav;
