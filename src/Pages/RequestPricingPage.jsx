import { Box, Button, Container, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import Profile, { PricingRequest } from '../Components/Profile'
import ProfileForm from '../Components/ProfileForm'

const RequestPricingPage = () => {
  return (
   <Container maxW={"10xl"}>
    <Box h={200} p={"2%"} bg={"#080736"} display={{base:"block", md:"block", lg:"none"}}>
        <Heading textAlign={"left"} color={"white"} fontSize={{base:"4xl", md:"5xl"}}>Request pricing for Optimizely products</Heading>
    </Box>
 <Flex direction={{ base: "column-reverse", lg: "row" }}>
        <PricingRequest/>
        <ProfileForm />
      </Flex>
      <br />
      <Box m={0} p={"2%"}>
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
      <br />
      <Footer/>
   </Container>
  )
}

export default RequestPricingPage