import { Box, Heading, VStack, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <VStack w={"full"} px={8} py={7} color={"white"} border={"1px solid red"}
    alignItems={"flex-start"} bg={"#080736 "}>
     
        <Heading textAlign={"left"}>Getting started with Optimizely</Heading>
        <br />
        <Text textAlign={"left"}>Optimizely is known for content, commerce and optimization with our Digital Experience Platform (DXP). Millions of experiences are served with our platform every single day, helping organizations grow exponentially online. Ready to take your digital experiences to the next level?</Text>
        <br />
        <Text textAlign={"left"} fontWeight={700}>If you have questions about our products or services, our experts are here to help with:</Text>
        <br />
        <UnorderedList textAlign={"left"} px={10}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
    </VStack>
  );
};

export default Profile;
