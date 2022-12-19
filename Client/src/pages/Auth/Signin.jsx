import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Image,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../../components/Navbar";
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { usersignin } from "../../redux/user/user.action";
function Signin() {
  let navigate = useNavigate();
  const toast = useToast();
  let dispatch = useDispatch();
  const { error, loading, data } = useSelector((store) => store.user);
  const handleSignin = async(val) => {
   dispatch(usersignin(val));
    if (data.email) {
      toast({
        title: "Successfully signed in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
     navigate("/");
    }
    if (error) {
      toast({
        title: "Error",
        description: "Something went wrong plese try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    // console.log(error);
  };
  

  return (
    <Box>
      <Navbar />
      <Box
        h="90vh"
        m="auto"
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box display={"flex"} justifyContent="center">
          {" "}
          <Image
            w={{ base: "85%", sm: "65%", md: "60%" }}
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg"
            alt="offers"
          />
        </Box>
        <Box p="50px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}>
          <Text
            m="20px 0px 40px -30px"
            fontSize={"40px"}
            color="pink.400"
            as="b"
          >
            Signin
          </Text>
          <Flex align="center" justify="center">
            <Box bg="white" rounded="md" w={64}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  name: "",
                }}
                onSubmit={(values) => {
                  handleSignin(values);
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <FormLabel color={"pink.400"} htmlFor="email">
                          Email Address
                        </FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          validate={(value) => {
                            let error;

                            if (value.length <= 4) {
                              error = "Enter the Email Address";
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                      >
                        <FormLabel color={"pink.400"} htmlFor="password">
                          Password
                        </FormLabel>
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type="password"
                          variant="filled"
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                      <Button disabled={loading} type="submit" colorScheme="pink" width="full">
                        {loading===true?<Spinner/>:"Signin"}
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </Flex>
        </Box>
        <Text m="20px">Don't have an account? <Link style={{fontWeight:"bold",textDecoration:"underline",color:"#247FF8"}} to="/signup">Sign Up</Link></Text>
      </Box>
      
    </Box>
  );
}

export default Signin;
