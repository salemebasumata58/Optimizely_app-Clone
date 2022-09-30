import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
const getData = () => {
  return axios.get(`http://localhost:3004/plansData`);
};
export const getDataforSolution = () => {
  return axios.get(`http://localhost:3004/plansSolutionData`);
};
const Card = ({ title, desc, list }) => {
  const navigate= useNavigate();
  console.log(list);
  return (
    <Box
      rounded={"xl"}
      borderTop={"10px solid orange"}
      w="100%"
      minH={"510px"}
      textAlign={"left"}
      px={7}
      bg={"gray.100"}
    >
      {/* <Image  rounded={"2xl"} src={img} alignSelf={"center"} w={"100%"}/> */}
      <Text fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }} fontWeight={500}>
        {title}
      </Text>
      <br />
      <Text fontWeight={400} fontSize={{ base: "sm", md: "sm", lg: "lg" }}>{desc}</Text>
      <br />
      <List spacing={4}>
        {list.map((el) => (
          // console.log(el)
          <ListItem fontSize={{ base: "xs", md: "sm", lg: "lg" }}>
            <ListIcon as={CheckIcon} color="green.400" />
            {el}
          </ListItem>
        ))}
      </List>
      <br />

      <Button rounded={"2xl"} bg={"blue.300"} onClick={()=> navigate("/request-pricing")}>
        Request Pricing{" "}
      </Button>
    </Box>
  );
};
export const SolutionCard = ({ title, img, desc }) => {
  return (
    <Box w="100%" minH={"310px"} textAlign={"left"} p={7} bg={"white"}>
      {/* <Image  rounded={"2xl"} src={img} alignSelf={"center"} w={"100%"}/> */}
      <Box display={"flex"}>
        <Image src={img} w={"30px"} spacing={5} />
        <Text fontSize={{ base: "lg", md: "xl", lg: "4xl" }} fontWeight={500}>
          {title}
        </Text>
      </Box>
      <br />
      <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>{desc}</Text>
      <br />
      <br />

      <Button rounded={"2xl"} alignItems={"center"}>
        Learn more{"    "}
        <ArrowForwardIcon marginLeft={"10px"} />
      </Button>
    </Box>
  );
};
const PlansPage = () => {
  const [data, setData] = useState([]);
  const [solutionData, setSolutionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
    getDataforSolution()
      .then((res) => {
        setSolutionData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  if (loading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    );
  }
  return (
    <Container maxW="10xl" border={"1px solid red"}px={'7%'}>
      <Box textAlign={"left"} p={2}>
        <Heading>Plans & pricing</Heading>
        <br />
        <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gridGap={2}>
          {data?.map((el) => (
            <Card img={el.img} list={el.list} desc={el.desc} title={el.title} />
          ))}
          <Box
            bg={"#080736"}
            rounded={"xl"}
            borderTop={"10px solid orange"}
            w="100%"
            minH={"510px"}
            textAlign={"left"}
            px={7}
            color={"white"}
          >
            {/* <Image  rounded={"2xl"} src={img} alignSelf={"center"} w={"100%"}/> */}
            <Text
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              fontWeight={500}
            >
              Need more?
            </Text>
            <br />
            <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
              No matter your tech stack or scale, we are here to help optimize
              your digital experiences.
            </Text>
            <br />
            <br />

            <Button rounded={"2xl"} bg={"blue.300"}>
              See adds-ons{" "}
            </Button>
            <br />
            <br />
            <br />
            <Box
              p={7}
              display={"flex"}
              borderTop={"2px solid lightgray"}
              justifyContent={"space-between"}
            >
              <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
                Not sure where to start?{" "}
              </Text>
              <Button bg={"blue.900"} w={"3xl"}>
                Contact us <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <br />
      <Box bg={"gray.100"} p={12}>
        <Box textAlign={"left"}>
          <Heading>Solutions just for you</Heading>
          <Text>We combined products to unlock additional features</Text>
          <br />
          <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gridGap={2}>
            {solutionData?.map((el) => (
              <SolutionCard img={el.img} desc={el.desc} title={el.title} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <br />
      <Footer />
    </Container>
  );
};

export default PlansPage;
