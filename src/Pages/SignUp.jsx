import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, setRegister } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast()

  // console.log(register);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3004/registerUser`, {
        email: email,
        password: password,
      })
      .then((res) => {
       setRegister(res.data);
       toast({
        title: `You Have Successfully Sign-in`,
        position: "top",
        isClosable: true,
      })
      
      })
      .catch((err) => console.log(err));
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Image
          margin={"auto"}
          w={"50%"}
          src="https://accounts.welcomesoftware.com/images/welcome/welcome-optimizely-logo.png"
        />
        <Box
          align={"center"}
          display={"flex"}
          fontWeight={700}
          justifyContent={"space-around"}
          fontSize={"2xl"}
        >
          <Link className="link" to={"/login"}>
            Log in
          </Link>

          <Link className="link" to={"/signup"}>
            SignUp
          </Link>
        </Box>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>

              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to={"/login"} color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box
        w={"30%"}
        py={"4%"}
        color={"white"}
        border={"1px solid red"}
        display={{ base: "none", md: "block" }}
        h={"3xl"}
        bg={"blue.800"}
        textAlign={"left"}
      >
        <Heading px={"5%"}>
          Unleash the potential of your marketing team with:
        </Heading>
        <br />
        <br />
        <Text px={"5%"}>One workspace to plan, track & distribute work</Text>
        <br />
        <br />{" "}
        <Text px={"5%"}>Creative tools to produce, edit & proof content</Text>
        <br />{" "}
        <Text px={"5%"}>
          Multiple views to visualize campaigns: calendar, timeline, Kanban,
          lists, & more
        </Text>
        <Image
          position={"absolute"}
          bottom={0}
          src="https://accounts.welcomesoftware.com/svgs/illustrations/signup.svg"
          w={"20%"}
        />
      </Box>
      
    </Flex>
  );
};

export default SignUp;
