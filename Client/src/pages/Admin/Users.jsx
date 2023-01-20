import { Box, Button, Flex, Image, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
function Users() {
  const [users, setUsers] = useState([]);
  const [page, setpage] = useState(1);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sucesss, setSuccess] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      let del = await axios.delete(
        `${process.env.REACT_APP_LOCAL_URL}/user/${id}`
      );
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getUser = async (page) => {
    let user = await axios.get(
      `${process.env.REACT_APP_LOCAL_URL}/user?limit=20&page=${page}`
    );
    let userlength = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/user`);
    setUsers(user.data);
    setLength(userlength.data.length);
  };

  const el = Math.ceil(length / 40);
  const pagination = new Array(el).fill(0);

  useEffect(() => {
    getUser(page);
  }, [page, loading]);
  return (
    <div>
      <AdminNav />

      <Box w={"90%"} m="auto" my="50px">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>User Id</Th>
                  <Th>User Name</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users &&
                  users.map((el, i) => {
                    return (
                      <Tr key={el._id}>
                        {console.log(el)}
                        <Td>{el.email}</Td>
                        <Td>{el.name}</Td>
                        <Td onClick={onOpen}>📝</Td>
                        <Td
                          cursor={"pointer"}
                          onClick={() => handleDelete(el._id)}
                        >
                          🪣
                        </Td>
                        <>
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>User Info</ModalHeader>
                              <ModalCloseButton />
                              <ModalBody>
                                <Image src ={el.pic} alt={el.pic} />
                                <Text fontSize={"20px"} fontWeight={600} fontFamily={"sans-serif"}>Name : {el.name}</Text>
                                <Text fontSize={"20px"} fontWeight={600} fontFamily={"sans-serif"}>Email : {el.email}</Text>
                                <Text fontSize={"20px"} fontWeight={600} fontFamily={"sans-serif"}>User Id : {el._id}</Text>
                                <Text fontSize={"20px"} fontWeight={600} fontFamily={"sans-serif"}>Password : {el.password}</Text>
                                <Text fontSize={"20px"} fontWeight={600} fontFamily={"sans-serif"}>Role : {el.user}</Text>
                              </ModalBody>

                              <ModalFooter>
                                <Button
                                  colorScheme="blue"
                                  mr={3}
                                  onClick={onClose}
                                >
                                  Close
                                </Button>
                                <Button variant="ghost">
                                  Secondary Action
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </>
                      </Tr>
                      
                    );
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>

      <Flex
        justifyContent={"center"}
        alignItems="center"
        flexWrap={"wrap"}
        gap={5}
        my="30px"
      >
        <Button
          color={"#ffffff"}
          borderRadius={2}
          backgroundColor={"blue"}
          disabled={page === 1}
          onClick={() => setpage(page - 1)}
        >
          Prev
        </Button>
        {pagination &&
          pagination.map((item, i) => {
            return (
              <Button
                key={i}
                color={"#ffffff"}
                borderRadius={2}
                backgroundColor={"blue"}
                disabled={page === i + 1}
                onClick={() => setpage(i + 1)}
              >
                {i + 1}
              </Button>
            );
          })}
        <Button
          color={"#ffffff"}
          borderRadius={2}
          backgroundColor={"blue"}
          disabled={page === pagination.length}
          onClick={() => setpage(page + 1)}
        >
          Next
        </Button>
      </Flex>
    </div>
  );
}

export default Users;
