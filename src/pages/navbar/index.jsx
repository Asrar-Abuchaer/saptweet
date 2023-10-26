import {
  Box,
  Flex,
  HStack,
  Spacer,
  IconButton,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import logo from "../../img/logo.svg";

function Navbar() {
  return (
    <Box
      bg={"#3876BF"}
      p={"1em 5em"}
      w={"full"}
      position={"fixed"}
      zIndex={"2"}
    >
      <Flex alignItems={"center"}>
        <Box>
          <HStack>
            <Box w={"10em"}>
              <Link to={"/"}>
                <Image src={logo} />
              </Link>
            </Box>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack>
            <Button
              backgroundColor={"#192655"}
              _hover={{ bgColor: "none" }}
              p={".3em 1em"}
              borderRadius={".5em"}
              _active={"none"}
              // border={"2px solid grey"}
            >
              <Link to={"/saptweet"}>
                <Text textColor={"white"}>TWEET</Text>
              </Link>
            </Button>
            <Spacer />
            <Button
              backgroundColor={"#192655"}
              _hover={{ bgColor: "none" }}
              p={".3em 1em"}
              borderRadius={".5em"}
              _active={"none"}
              // border={"2px solid grey"}
            >
              <Link as={"b"} to={"/"}>
                <Text textColor={"white"}>LOG OUT</Text>
              </Link>
            </Button>
            <Spacer />
            <Button
              backgroundColor={"#192655"}
              _hover={{ bgColor: "none" }}
              p={".3em 1em"}
              borderRadius={".5em"}
              _active={"none"}
              // border={"2px solid grey"}
            >
              <Link to={"/login"}>
                <Text textColor={"white"}>LOGIN</Text>
              </Link>
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
export default Navbar;
