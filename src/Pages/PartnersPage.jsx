import {
  AspectRatio,
  Box,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Footer from "../Components/Footer";
const getData = () => {
  return axios.get(`https://mock-server-app-7f6y.onrender.com/partners`);
  // .then((res) =>
  //   console.log(res.data)
  // )
  // .catch((err) => console.log(err));
};
const Card = ({img, desc, title}) => {

  return( 
  <Box rounded={"xl"} w="100%" minH={"550px"}  border={"1px solid red"} textAlign={"left"} px={2}>
    <Image  rounded={"2xl"} src={img} alignSelf={"center"} w={"100%"}/>
    <br />
    <br />
    <Text fontSize={{base:"md", md:"xl", lg:"2xl"}} fontWeight={500}>{title}</Text>
    <Text fontSize={{base:"xs", md:"md", lg:"lg"}}>{desc}</Text>
    <Button bg={"whiteAlpha.300"} >Read More <ArrowForwardIcon marginLeft={"10px"}/></Button>
  </Box>
  );
};
const PartnersPage = () => {
  const [data, setData] = useState([]);
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
    <Container maxW="10xl" border={"1px solid red"}>
      <Stack
        minH={"70vh"}
        bg={"#0b122b "}
        direction={{ base: "column-reverse", md: "row" }}
        gap={0}
      >
        <Flex flex={1} marginRight={0}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://www.optimizely.com/contentassets/ec9a7d7c21b847a49920de35577e2f10/stocksy_txpb610a955ma5300_medium_2770103-1.jpg?width=730&height=545&mode=crop"
            }
          />
        </Flex>
        <Flex
          marginLeft={0}
          p={8}
          flex={1}
          align={"center"}
          justify={"left"}
          maxH={{ base: "lg" }}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"} textAlign={"left"}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
              color={"gray.200"}
            >
              <Text>Find your Optimizely partner</Text>
            </Heading>
            <Text fontSize={{ base: "sm", lg: "lg" }} color={"gray.200"}>
              We'll help you find the right partner that will suit your needs
              and help you unlock your digital potential.
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <br />
      <SimpleGrid columns={[1, 2, 2]} spacing={10}>
        <Box bg="tomato" minH={{ base: "350px", md: "300px" }} p={"9%"}>
          <Heading>Find a solution partner</Heading>
          <br />
          <Text>
            Optimizely has a fantastic network of highly skilled and certified
            partners who can develop your customer-centric digital experience.
            We can help you find the best partner to meet your specific needs.
          </Text>
          <Box h={"50%"} w="100%">
          <Button 
            bg={"whiteAlpha.200"}
            position={"relative"}
              bottom={0}
              float={"right"}
              color={"white"}
              fontSize={"4xl"}><ArrowForwardIcon
            /></Button>
          </Box>
        </Box>
        <Box bg="blue" minH={{ base: "350px", md: "300px" }} p={"9%"}>
          <Heading>Find a Technology Partner</Heading>
          <br />
          <Text>
            Our technology partner network brings a smarter tech stack to
            customers through strategic partnerships with best-of-breed software
            companies.
          </Text>

          <Box h={"50%"} w="100%">
            <Button 
            bg={"whiteAlpha.200"}
            position={"relative"}
              bottom={0}
              float={"right"}
              color={"white"}
              fontSize={"4xl"}><ArrowForwardIcon
            /></Button>
          </Box>
        </Box>
        <Box bg="yellow" minH={{ base: "350px", md: "300px" }} p={"9%"}>
          <Heading>Become a partner</Heading>
          <br />
          <Text>
            Want to drive revenue and innovate with more confidence? Consider
            growing your business with Optimizely and discover the benefits of
            joining our network of more than 800 partners.
          </Text>
          <Box h={"50%"} w="100%">
          <Button 
            bg={"whiteAlpha.200"}
            position={"relative"}
              bottom={0}
              float={"right"}
              color={"white"}
              fontSize={"4xl"}><ArrowForwardIcon
            /></Button>
          </Box>
        </Box>
        <Box bg="orange" p={"9%"} minH={{ base: "350px", md: "300px" }}>
          <Heading>Partner Center login</Heading>
          <br />
          <Text>
            Manage your partnership using our new partner portal. For access
            contact partners@optimizely.com
          </Text>
          <Box h={"50%"} w="100%">
          <Button 
            bg={"whiteAlpha.200"}
            position={"relative"}
              bottom={0}
              float={"right"}
              color={"white"}
              fontSize={"4xl"}><ArrowForwardIcon
            /></Button>
          </Box>
        </Box>
      </SimpleGrid>
      <br />

      <Box textAlign={"center"} margin={"auto"} px={5}>
        <Heading position={"relative"} textAlign={"left"}>
          About the Optimizely Partner Network
        </Heading>
        <Text fontSize={["sm", "xl"]} position={"relative"} textAlign={"left"}>
          We'll help you find the best partner that will support you to reach
          your goals
        </Text>
        <br />
        <AspectRatio
          margin={"auto"}
          maxW={"full"}
          minH={{ base: "200px", md: "300px" }}
          ratio={2}
          border={"1px solid red"}
        >
          <iframe
            title="naruto"
            src="https://fast.wistia.net/embed/iframe/5w1gsm9tfc?videoFoam=true&playerColor=0037ff&muted=true&autoplay=true&playlistLoop=true&controlsVisibleOnLoad=true&playButton=false"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      <br />
      <Box
        bg={"gray.100"}
        border={"1px solid red"}
        marginTop={0}
        textAlign={"left"}
        p={"1%"}
        h={"33vh"}
      >
        <Heading fontSize={["sm", "2xl", "4xl"]}>
          Ready to take your digital experiences to the next level?
        </Heading>
        <Text fontSize={["xs", "sm", "lg"]}>
          Optimizely is trusted by over 9,000 leading companies for digital
          experiences, content management, experimentation and commerce. Get
          started
        </Text>
        <br />
        <Button rounded={"xl"} bg={"blue.500"}>
          Get Started
        </Button>
      </Box>
      <Stack
        minH={"70vh"}
        // bg={"#0b122b "}
        direction={{ base: "column", md: "row" }}
        gap={0}
      >
        <Flex flex={1} marginRight={0}>
          <Image
            alt={"Login Image"}
            objectFit={"contain"}
            src={
              "https://www.optimizely.com/globalassets/02.-global-images/illustrations/feature-illustrations/illustration_app_marketplace_call_outs---desktop.svg"
            }
          />
        </Flex>
        <Flex
          marginLeft={0}
          p={8}
          flex={1}
          align={"center"}
          justify={"left"}
          maxH={{ base: "lg" }}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"} textAlign={"left"}>
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "xl" }}
              color={"black"}
            >
              <Text fontSize={["sm", "xl"]}>Find your Optimizely partner</Text>
            </Heading>
            <Text fontSize={{ base: "sm", lg: "lg" }} color={"black"}>
              We'll help you find the right partner that will suit your needs
              and help you unlock your digital potential.
            </Text>
            <Button bg={"whiteAlpha.900"}>
              See all integrations <ArrowForwardIcon />
            </Button>
          </Stack>
        </Flex>
      </Stack>
      <Box textAlign={"left"} px={1}>
        <Heading px={4} fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} >Just for you</Heading>
        <Button  bg={"whiteAlpha.300"}>Powered by Intelligence Cloud Recommendations <ArrowForwardIcon marginLeft={5}/></Button>
      </Box>
      <br />
      <SimpleGrid columns={{base:1, md:2, lg:3}} gridGap={2}>
        {data?.map((el) => (
          <Card img={el.img} desc={el.desc} title={el.title} />
        ))}
      </SimpleGrid>
      <br />
      <Footer/>
    </Container>
  );
};

export default PartnersPage;
