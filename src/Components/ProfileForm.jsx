import {
    Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileForm = () => {
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
        <Text textAlign={"left"} fontSize={["xl","2xl"]} fontWeight={700} w={"70%"} margin={"auto"}>First, we need to know a couple of things about you</Text>
      </VStack>
      <Grid templateColumns="repeat(2, 1fr)" gap={2} w={"full"}>
        <GridItem colSpan={{base:'2', lg:1}}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Name" name="name" />
          </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:'2', lg:1}}>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Last Name" name="last_name" />
          </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:'2', lg:1}}>
          <FormControl isRequired>
            <FormLabel>Work Email</FormLabel>
            <Input type="text" placeholder="Email" name="email" />
          </FormControl>
        </GridItem >
        <GridItem  colSpan={{base:'2', lg:1}}>
          <FormControl>
            <FormLabel>Company</FormLabel>
            <Input type="text" placeholder="Company" name="company" />
          </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:'2', lg:1}}>
          <FormControl isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input type="text" placeholder="jo title" name="job_title" />
          </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:'2', lg:1}}>
          <FormControl isRequired>
            <FormLabel>Phone Number(optional)</FormLabel>
            <Input type="number" placeholder="Number" name="name" />
          </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:'2', lg:1}}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select 
            name="country"
            placeholder="country"
            >
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="china">China</option>
                <option value="russia">Russia</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem  colSpan={{base:'2', lg:2}}>
          <FormControl isRequired>
            <FormLabel>What products are you interested in? (optional)</FormLabel>
            <Textarea type="text" placeholder="" name="optional" ></Textarea>
          </FormControl>
        </GridItem>
      </Grid>
      <Text textAlign={"left"}>Optimizely will store and process your personal data as described in our Privacy Policy. You can opt out at any time.</Text>
      <Button bg={"blue.600"} color={"white"} rounded={"3xl"}>Submit</Button>
    </VStack>
  );
};

export default ProfileForm;
