import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import ProfileForm from "../Components/ProfileForm";
import Profile from "../Components/Profile";
import Footer from "../Components/Footer";
// import  from 'react-icons/fa';
// import {  Icon } from '@chakra-ui/react';
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

// const Feature = ({ title, text, icon }) => {
//   return (
//     <Stack>
//       <Flex
//         w={16}
//         h={16}
//         align={"center"}
//         justify={"center"}
//         color={"white"}
//         rounded={"full"}
//         bg={"gray.100"}
//         mb={1}
//       >
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{title}</Text>
//       <Text color={"gray.600"}>{text}</Text>
//     </Stack>
//   );
// };
function PriceWrapper({ children }) {
  return (
    <Box
      bg={"#080736 "}
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      // borderColor={useColorModeValue("#080736", "#080736 ")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

const Home = () => {
  return (
    <Container maxW="10xl" border={"1px solid red"}>
      <Stack
        minH={"50vh"}
        direction={{ base: "column", md: "row" }}
        w={"95%"}
        margin={"auto"}
        

        backgroundImage={"https://media-s3-us-east-1.ceros.com/optimizely/images/2022/04/25/105d9a99cee0f31848cb406b261f5b5d/gradient-path-1.png?imageOpt=1&fit=bounds&width=2038"}
        objectFit={"contain"}
      >
        <Flex p={1} flex={1} align={"center"} justify={"center"} w={["100%", "36%", "36%"]}>
          <Stack spacing={1} w={"full"} maxW={"lg"}>
            <Heading
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
              textAlign={"left"}
            >
              <br />{" "}
              <Text color={"black.400"} as={"span"}>
                Unlock
              </Text>
              <br />
              <Text color={"black.400"} as={"span"}>
                digital
              </Text>
              <br />
              <Text color={"black.400"} as={"span"}>
                potential
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "lg", lg: "lg" }} color={"gray.500"} w={{base:"full", md:"full"}}>
              Creating digital experiences that transform your company takes
              data-driven decisions, continued experimentation and constant
              invention. Optimizely Digital Experience Platform helps you unlock
              your digital potential.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} w={"100%"}>
          <Image
            alt={"Login Image"}
            // border={"1px solid red"}
            src={
              "https://www.optimizely.com/contentassets/9c67aa9eed2e4b6fa8b8a802b673fb5e/homepage_illustration_new.svg"
            }
          />
        </Flex>
      </Stack>
      <Flex
        minW={"full"}
        p={10}
        rounded="md"
        h={"65vh"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          backgroundColor={"#0037ff"}
          w={"full"}
          rounded="lg"
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack w={"full"} align={"center"} spacing={6}>
            <Image
              h={"20vh"}
              src="https://media-s3-us-east-1.ceros.com/optimizely/images/2022/05/12/42f8fa19aad44cc9548b668c8256afc7/opticon-logo-anim-clean-rt-blue-matte-lockup.gif?imageOpt=1"
            />
            <Box display={"flex"} justifyContent={"space-around"} gap={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                October 3-5
              </Text>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                paddingLeft={3}
                borderLeft={"2px solid gray"}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                Marriott Marquis
                <br />
                San Diego Marina
              </Text>
            </Box>
            <Stack
              direction={"row"}
              textAlign={"center"}
              //   border={"1px solid red"}
            >
              <Button
                bg={"blue.600"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Register
              </Button>
              <Button
                bg={"#053af8"}
                // rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
                border={"none"}
              >
                Learn More <ArrowForwardIcon />
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Box m={0} p={"2%"} border={"1px solid red"}>
        <Heading fontSize={{ base: "lg", sm: "3xl", md: "4xl", lg: "4xl" }}>
          Trusted by 9,000+ businesses and millions of happy customers
        </Heading>
        <br />
        <SimpleGrid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          //   templateRows={{sm: "repeat(4, 1fr)", lg:"null"}}
          //   minChildWidth="120px"
          spacing="30px"
          p={"4%"}
          paddingLeft={"9%"}
          alignItems={"center"}
          autoColumns={"auto"}
          margin={"auto"}
        >
          <Box height="130px" maxW={"100px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/ebay_logo.svg"></Image>
          </Box>
          <Box height="130px" maxW={"120px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/dolby_logo_2019.svg"></Image>
          </Box>
          <Box height="130px" maxW={"120px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/sme.svg"></Image>
          </Box>
          <Box height="130px" maxW={"120px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/new_era_logo.svg"></Image>
          </Box>
          <Box height="130px" maxW={"120px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/pizza_hut_logo.svg"></Image>
          </Box>
          <Box height="130px" maxW={"120px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/fjall_raven_logo.svg"></Image>
          </Box>
          <Box height="130px" maxW={"120px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/moco-food-logo-blue.svg"></Image>
          </Box>
          <Box height="130px" maxW={"120px"}>
            <Image src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/svg/logo_atlassian_100x300.svg"></Image>
          </Box>
        </SimpleGrid>
        <Button
          bg={"blue.600"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
        >
          See our customer stories
        </Button>
      </Box>
      <Stack
        align={"center"}
        spacing={{ base: 1, md: 0 }}
        py={{ base: 2, md: 1 }}
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Flex
          bg={"purple.800"}
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            paddingTop={6}
            textAlign={"left"}
            position={"relative"}
            height={"450px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Text marginLeft={10} color={"white"} fontSize={"3xl"}>
              Digital Experience Platform
            </Text>
            <br />

            <AspectRatio margin={"auto"} maxW={"88%"} maxH={"320px"} ratio={1}>
              <iframe
                title="naruto"
                src="https://fast.wistia.net/embed/iframe/5w1gsm9tfc?videoFoam=true&playerColor=0037ff&muted=true&autoplay=true&playlistLoop=true&controlsVisibleOnLoad=true&playButton=false"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </Flex>
        <Stack
          height={"450px"}
          flex={1}
          textAlign={"left"}
          spacing={{ base: 3, md: 10 }}
          border={"1px solid red"}
          bg={"blue"}
          paddingLeft={8}
          paddingTop={12}
        >
          <Heading
            lineHeight={1.1}
            marginTop={{ base: 3, md: 6 }}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
          >
            <Text color={"white"}>
              Confidently create and optimize with Optimizely Digital Experience
              Platform
            </Text>
            <br />
            <Text fontSize={"sm"} color={"white"}>
              Transform digital experience creation with Optimizely Digital
              Experience Platform, an open, extensible platform providing one
              consistent foundation behind every digital touch point.
            </Text>
          </Heading>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              //   rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"none"}
              _hover={{ bg: "blue.500" }}
            >
              Learn about our Digital Experience Platform <ArrowForwardIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Box p={4} bg={"#861dff "} color={"white"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box minH={"55vh"} spacing={"xl"}>
            <Button bg={"#861dff "} _hover={{ bg: "blue.500" }}>
              Content <ArrowForwardIcon />
            </Button>
            <Text>
              Easily create, tailor and scale content on a best-in-class
              enterprise CMS.
            </Text>
            <br />
            <Box>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                CMS
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Headless
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Approval workflows
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Media management
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Authoring & layout
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Project management
              </Button>
            </Box>
          </Box>
          <Box minH={"55vh"}>
            <Button bg={"#861dff "} _hover={{ bg: "blue.500" }}>
              Commerce <ArrowForwardIcon />
            </Button>
            <br />
            <Text>
              Run multiple shops, inventory and a catalog online and/or offline.
            </Text>
            <br />
            <Box>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                B2B
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                B2C
              </Button>

              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                PIM
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Targeting
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Multisite
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Catalog management
              </Button>
            </Box>
          </Box>
          <Box minH={"55vh"}>
            <Button bg={"#861dff "} _hover={{ bg: "blue.500" }}>
              Content <ArrowForwardIcon />
            </Button>
            <Text>
              Use AI to test new features and personalize every touchpoint.
            </Text>
            <br />
            <Box>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Web A/B testing
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Personalization
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Feature management
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Data
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Email
              </Button>
              <Button
                fontSize={"xs"}
                bg={"none"}
                border={"1px solid lightgray"}
                rounded={"2xl"}
              >
                Recommendations
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      {/*  */}
      <Box py={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          display={"flex"}
          // justifyContent={"center"}
          border={"1px solid red"}
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <Box
            w={{ base: "90%", md: "33%" }}
            margin={"auto"}
            bg={"#080736 "}
            h={500}
          >
            <Box py={4} px={12}>
              <Image src="https://www.optimizely.com/contentassets/90461ceea0184877b2c559273cd1da58/mazda_logo.svg" />
            </Box>
            <VStack bg={"#080736 "} py={2} borderBottomRadius={"xl"}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <Text color={"gold"} fontWeight={"700"} fontSize={"3xl"}>
                    200%
                  </Text>
                  <Text color={"white"}>Increased engagement on site</Text>
                </ListItem>
                <ListItem>
                  <Text color={"gold"} fontSize={"3xl"} fontWeight={"700"}>
                    5m+
                  </Text>
                  <Text color={"white"}>
                    Unique visitors within 2 months of launch
                  </Text>
                </ListItem>
              </List>
              <Box w="80%" textAlign={"right"} border={"1px solid red"}>
                <ArrowForwardIcon color={"white"} fontSize={"4xl"} />
              </Box>
            </VStack>
          </Box>

          <Box
            w={{ base: "90%", md: "31%" }}
            margin={"auto"}
            bg={"#080736 "}
            h={500}
          >
            <Box py={4} px={12}>
              <Image src="https://www.optimizely.com/contentassets/90461ceea0184877b2c559273cd1da58/blue-apron_logo.svg" />
            </Box>
            <VStack bg={"#080736 "} py={4} borderBottomRadius={"xl"}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <Text color={"gold"} fontWeight={"700"} fontSize={"3xl"}>
                    2X
                  </Text>
                  <Text color={"white"}>
                    Increasingly, customers are buying and researching cars
                    online.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text color={"gold"} fontSize={"3xl"} fontWeight={"700"}>
                    20-50
                  </Text>
                  <Text color={"white"}>
                    Number of product teams using experimentation
                  </Text>
                </ListItem>
              </List>
              <Box w="80%" textAlign={"right"} border={"1px solid red"}>
                <ArrowForwardIcon color={"white"} fontSize={"4xl"} />
              </Box>
            </VStack>
            {/* </Box> */}
          </Box>
          <Box
            w={{ base: "90%", md: "33%" }}
            margin={"auto"}
            bg={"#080736 "}
            h={500}
          >
            <Box py={4} px={12}>
              <Image src="https://www.optimizely.com/contentassets/90461ceea0184877b2c559273cd1da58/farfetch_logo.svg" />
            </Box>
            <VStack bg={"#080736 "} py={4} borderBottomRadius={"xl"}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <Text color={"gold"} fontWeight={"700"} fontSize={"3xl"}>
                    10X
                  </Text>
                  <Text color={"white"}>
                    Experimentation community has more than doubled.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text color={"gold"} fontSize={"3xl"} fontWeight={"700"}>
                    100%
                  </Text>
                  <Text color={"white"}>
                    20-50 experiments running each month
                  </Text>
                </ListItem>
              </List>
              <Box w="80%" textAlign={"right"} border={"1px solid red"}>
                <ArrowForwardIcon color={"white"} fontSize={"4xl"} />
              </Box>
            </VStack>
          </Box>
        </Stack>
      </Box>
      <Flex direction={{ base: "column", lg: "row" }}>
        <Profile />
        <ProfileForm />
      </Flex>
      <br />
      <Footer />
    </Container>
  );
};

export default Home;
