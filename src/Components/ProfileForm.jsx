import {
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
const initState = {
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  job_title: "",
  phone: "",
  country: "",
  optional: "",
};

const ProfileForm = () => {
  const [userInfo, setUserInfo] = useState(initState);
  const {
    first_name,
    last_name,
    email,
    company,
    job_title,
    phone,
    country,
    optional,
  } = userInfo;
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = name === "phone" ? Number(value) : value;
    setUserInfo({ ...userInfo, [name]: val });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "Post",
      url: "https://mock-server-app-7f6y.onrender.com/userInfo",
      data: userInfo,
    })
      .then((res) => {
        setUserInfo(res.data);
        setSuccess(!success);
      })
      .catch((err) => console.log(err));
  };
  console.log(userInfo);
  if (success) {
  return  <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="600px"
    >
      <AlertIcon boxSize="60px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize={{base:"lg", md:"xl", lg:"2xl"}}>
        Application submitted!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for submitting your application. Our team will get back to you
        soon.
      </AlertDescription>
    </Alert>;
  }

  return (
    <VStack
      w={"full"}
      h={"full"}
      p={5}
      alignItems={"flex-start"}
      bg={"#3be081"}
      border={"1px solid red"}
    >
      <VStack w={"full"} spacing={2} alignItems={"flex-start"}>
        <Text
          textAlign={"left"}
          fontSize={["xl", "2xl"]}
          fontWeight={700}
          w={"70%"}
          margin={"auto"}
        >
          First, we need to know a couple of things about you
        </Text>
      </VStack>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} w={"full"}>
        <GridItem colSpan={{ base: "2", lg: 1 }}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              name="first_name"
              value={first_name}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", lg: 1 }}>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", lg: 1 }}>
          <FormControl isRequired>
            <FormLabel>Work Email</FormLabel>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", lg: 1 }}>
          <FormControl>
            <FormLabel>Company</FormLabel>
            <Input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", lg: 1 }}>
          <FormControl isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input
              type="text"
              placeholder="jo title"
              name="job_title"
              value={job_title}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", lg: 1 }}>
          <FormControl isRequired>
            <FormLabel>Phone Number(optional)</FormLabel>
            <Input
              type="number"
              placeholder="Number"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", lg: 1 }}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select
              name="country"
              placeholder="country"
              value={country}
              onChange={handleChange}
            >
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="china">China</option>
              <option value="russia">Russia</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "2", lg: 2 }}>
          <FormControl isRequired>
            <FormLabel>
              What products are you interested in? (optional)
            </FormLabel>
            <Textarea
              type="text"
              placeholder="write here"
              name="optional"
              value={optional}
              onChange={handleChange}
            ></Textarea>
          </FormControl>
        </GridItem>
      </Grid>
      <Text textAlign={"left"}>
        Optimizely will store and process your personal data as described in our
        Privacy Policy. You can opt out at any time.
      </Text>
      <Button
        bg={"blue.600"}
        color={"white"}
        rounded={"3xl"}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </VStack>
  );
};

// function CompExample() {
//   const {
//     isOpen: isVisible,
//     onClose,
//     onOpen,
//   } = useDisclosure({ defaultIsOpen: true })

//   return isVisible ? (
//     <Alert status='success'>
//       <AlertIcon />
//       <Box>
//         <AlertTitle>Success!</AlertTitle>
//         <AlertDescription>
//           Your application has been received. We will review your application
//           and respond within the next 48 hours.
//         </AlertDescription>
//       </Box>
//       <CloseButton
//         alignSelf='flex-start'
//         position='relative'
//         right={-1}
//         top={-1}
//         onClick={onClose}
//       />
//     </Alert>
//   ) : (
//     <Button onClick={onOpen}>Show Alert</Button>
//   )
// }

export default ProfileForm;
