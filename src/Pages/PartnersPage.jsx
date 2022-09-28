import { AspectRatio, Box, Container, SimpleGrid } from "@chakra-ui/react";
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
const getData = () => {
  return axios.get(`http://localhost:3004/partners`);
  // .then((res) =>
  //   console.log(res.data)
  // )
  // .catch((err) => console.log(err));
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
            <ArrowForwardIcon
              position={"absolute"}
              bottom={3}
              right={50}
              color={"white"}
              fontSize={"4xl"}
            />
          </Box>
        </Box>
        <Box bg="tomato" minH={{ base: "350px", md: "300px" }} p={"9%"}>
          <Heading>Find a Technology Partner</Heading>
          <br />
          <Text>
            Our technology partner network brings a smarter tech stack to
            customers through strategic partnerships with best-of-breed software
            companies.
          </Text>

          <ArrowForwardIcon
            position={"absolute"}
            bottom={3}
            right={50}
            color={"black"}
            fontSize={"4xl"}
          />
          <Box>
            <ArrowForwardIcon
              position={"absolute"}
              bottom={3}
              right={50}
              color={"white"}
              fontSize={"4xl"}
            />
          </Box>
        </Box>
        <Box bg="tomato" minH={{ base: "350px", md: "300px" }} p={"9%"}>
          <Heading>Become a partner</Heading>
          <br />
          <Text>
            Want to drive revenue and innovate with more confidence? Consider
            growing your business with Optimizely and discover the benefits of
            joining our network of more than 800 partners.
          </Text>
          <Box>
            <ArrowForwardIcon
              position={"absolute"}
              bottom={3}
              right={50}
              color={"white"}
              fontSize={"4xl"}
            />
          </Box>
        </Box>
        <Box bg="tomato" p={"9%"} minH={{ base: "350px", md: "300px" }}>
          <Heading>Partner Center login</Heading>
          <br />
          <Text>
            Manage your partnership using our new partner portal. For access
            contact partners@optimizely.com
          </Text>
          <Box>
            <ArrowForwardIcon
              position={"absolute"}
              bottom={3}
              right={50}
              color={"white"}
              fontSize={"4xl"}
            />
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
      <Box border={"1px solid red"} marginTop={0} textAlign={"left"} p={'7%'} h={"35vh"}>
        <Heading>
          Ready to take your digital experiences to the next level?
        </Heading>
        <Text>
          Optimizely is trusted by over 9,000 leading companies for digital
          experiences, content management, experimentation and commerce. Get
          started
        </Text>
        <br />
        <Button rounded={"xl"} bg={"blue.500"}>Get Started</Button>
      </Box>
      
    </Container>
  );
};

export default PartnersPage;
