import React, { useContext, useEffect, useState } from "react";
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
  useToast,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
const getData = () => {
  return axios.get(`https://mock-server-app-7f6y.onrender.com/registerUser`);
};

const Login = () => {
  const { isAuth, handleAuth } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const toast = useToast();
  const navi = useNavigate();
  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth();
    console.log("yes");

    if (data[data.length-1].email === email && data[data.length-1].password === password) {
      
      onOpen();
      // toast({
      //   title: `${email} is Successfully Log-in`,
      //   position: "top",
      //   isClosable: true,
      // });
      
    };
    // return navi("/");
  };
  console.log(data);
  // console.log(handleAuth)
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        textAlign={"center"}
      >
        <Image
          margin={"auto"}
          w={"50%"}
          src="https://accounts.welcomesoftware.com/images/welcome/welcome-optimizely-logo.png"
        />
        <Box
          align={"center"}
          display={"flex"}
          justifyContent={"space-around"}
          fontSize={"2xl"}
          fontWeight={700}
        >
          <Link className="link" to={"/login"}>
            Log in
          </Link>

          <Link className="link" to={"/signup"}>
            SignUp
          </Link>
        </Box>
        <Button size={"md"} variant={"outline"} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        <Text fontWeight={500}>or</Text>
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
                Log in
              </Button>
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
        bg={"#5420a2"}
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
             You are Log in Successfully
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to contnue.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default Login;
