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
  Spinner
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Formik, Field } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  let navigate = useNavigate();
  const [state, setState] = useState(false);
  const toast = useToast();
  const handleSignup = async (val) => {
    // console.log(val)
    // console.log(process.env.REACT_APP_LOCAL_URL);
    setState(true);
    try {
      let data = await axios.post(
        `${process.env.REACT_APP_LOCAL_URL}/user/signup`,
        val
      );
      toast({
        title: "Redirecting to Login Page",
        description: data.data,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setState(false);
      navigate("/signin");
    } catch (err) {
      toast({
        title: err.response.data,
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setState(false);
    }
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
            m="30px 0px 30px -40px"
            fontSize={"40px"}
            color="pink.400"
            as="b"
          >
            Signup
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
                  handleSignup(values);
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl isInvalid={!!errors.name && touched.name}>
                        <FormLabel color={"pink.400"} htmlFor="name">
                          Name
                        </FormLabel>
                        <Field
                          as={Input}
                          id="name"
                          name="name"
                          type="text"
                          variant="filled"
                          validate={(value) => {
                            let error;

                            if (value.length < 4) {
                              error = "Enter the Name";
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                      </FormControl>
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
                          validate={(value) => {
                            let error;

                            if (value.length <= 4) {
                              error =
                                "Password must contain at least 5 characters";
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                      <Button
                        disabled={state}
                        type="submit"
                        colorScheme="pink"
                        width="full"
                      >
                        {state === true ? <Spinner /> : "Signup"}
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </Flex>
        </Box>
        <Text m="20px">
          Have an account?{" "}
          <Link
            style={{
              color: "#247FF8",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
            to="/signin"
          >
            Log in now
          </Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Signup;
