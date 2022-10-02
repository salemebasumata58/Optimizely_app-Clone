import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getDataforSolution } from "../Pages/PlansPage";
// import {SolutionCard} from "../Pages/PlansPage"
const SolutionCard = ({ title, img, desc }) => {
  return (
    <Box
      w="100%"
      minH={"200px"}
      textAlign={"left"}
      p={3}
      bg={"gray.200"}
    >
      {/* <Image  rounded={"2xl"} src={img} alignSelf={"center"} w={"100%"}/> */}
      <Box display={"flex"}>
        <Image src={img} w={"30px"} spacing={5} />
        <Text fontSize={{ base: "lg", md: "xl", lg: "4xl" }} fontWeight={500}>
          {title}
        </Text>
        <Button rounded={"2xl"} alignItems={"center"} bg={"gray.200"}>
          <ArrowForwardIcon marginLeft={"10px"} />
        </Button>
      </Box>
      {/* <br /> */}
      <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>{desc}</Text>
      {/* <br />
        <br /> */}
      <br />
    </Box>
  );
};

const Products = () => {
  const [solutionData, setSolutionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);

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
  console.log(solutionData);
  if (loading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    );
  }
  return (
    <Container minW={"80%"} bg={"gray.200"} boxShadow={"dark-lg"} py={9}>
      <Box display={"flex"}>
        <Box textAlign={"left"} width={"80%"}>
          <Heading fontSize={"2xl"}>Digital Experience Platform {"  "} <ArrowForwardIcon/></Heading>
          <br />
          <Text marginRight={8}>
            Create a seamless digital journey for your customers with an open,
            extensible platform that provides one consistent foundation.
          </Text>
        </Box>
        <Box borderLeft={"2px solid lightgray"}>
          <Button bg={"gray.200"}>App Marketplace</Button>
          <Button  bg={"gray.200"}>Developer docs</Button>
        </Box>
      </Box>
      <br />
      <br />
      {/* <SimpleGrid width={"100%"} columns={[2, null, 3]} spacing='40px'> */}
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 3 }}
        gridGap={2}
        bg={"gray.200"}
      >
        {solutionData?.map((el) => (
          <SolutionCard
            img={el.img}
            desc={el.desc}
            title={el.title}
            key={el.title}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;
