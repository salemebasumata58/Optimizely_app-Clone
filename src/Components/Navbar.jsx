import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Links = ["Products", "Plans", "Resources", "Partners"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={`/${children}`}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  console.log(search);

  return (
   
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position={"fixed"}  w={"full"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"} width={"100%"}>
            <Box minW={"90px"}>
              <Link to={"/"}>
                <Image src="https://www.optimizely.com/globalassets/02.-global-images/navigation/optimizely_logo_navigation.svg" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              width={"100%"}
              fontSize={{ base: "xxs", md: "xs", lg: "sm" }}
              spacing={7}
              display={{ base: "none", md: "flex", lg: "flex" }}
              justifyContent={"space-around"}
            >
              <Box
                display={"flex"}
                w={"38%"}
                justifyContent={"space-around"}
                alignItems={"center"}
                fontWeight={500}
              >
                <Link to={"/product"} className="link">
                  Products
                </Link>

                <Link className="link" to={"/plans"}>
                  Plans
                </Link>

                <Link className="link" to={"/partners"}>
                  Partners
                </Link>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                w={"40%"}
                justifyContent={"space-between"}
              >
                <Box fontWeight={500}>
                  <a
                    className="link"
                    href={"https://www.optimizely.com/support/"}
                  >
                    Support
                  </a>
                </Box>
                <Box>
                  <InputGroup
                    size="sm"
                    alignItems={"center"}
                    border={"1px solid gray"}
                  >
                    <a
                      href={`https://www.optimizely.com/search/?startindex=0&searchQuery=${search}`}
                      children={<SearchIcon w={"30px"} />}
                      width={"15px"}
                    ></a>
                    <Input
                      border={"none"}
                      placeholder="search"
                      width={"80px"}
                      value={search}
                      name="search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                      minW={0}
                      className="link"
                    >
                      <Link className="link">Login</Link>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                        <Link to={"#"}>
                          Experimentation{" "}
                          <ArrowForwardIcon fontSize={19} marginLeft={5} />
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to={"/login"}>
                          Welcome{" "}
                          <ArrowForwardIcon fontSize={19} marginLeft={5} />
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <Link to={"#"}>
                          Email Campaign{" "}
                          <ArrowForwardIcon fontSize={19} marginLeft={5} />
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to={"#"}>
                          Data Platform{" "}
                          <ArrowForwardIcon fontSize={19} marginLeft={5} />
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to={"/partners"}>
                          Partners{" "}
                          <ArrowForwardIcon fontSize={19} marginLeft={5} />
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box>
                  <Button
                    rounded={"xl"}
                    bg={"blue.400"}
                    onClick={() => navigate("/request-pricing")}
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
            </HStack>
          </HStack>

          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
 
  );
}
