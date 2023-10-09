import {
  Box,
  Flex,
  HStack,
  Input,
  Spacer,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AiTwotoneHome } from "react-icons/ai";

function Navbar() {
  return (
    <Box bg={"lightgrey"} p={"1em 5em"}>
      <Flex alignItems={"center"}>
        <Box>
          <HStack>
            <Box>
              <Link to={"/"}>
                <IconButton
                  backgroundColor={"transparent"}
                  fontSize={"1.5em"}
                  size="md"
                  icon={<AiTwotoneHome />}
                  _hover={{ bgColor: "transparent" }}
                />
              </Link>
            </Box>
            <Box>
              <InputGroup w={"100%"}>
                <InputLeftElement>
                  <GoSearch color="grey" />
                </InputLeftElement>
                <Input
                  placeholder="Search Here"
                  border="2px solid grey"
                  _hover={{ border: "2px solid grey" }}
                />
              </InputGroup>
            </Box>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack>
            <Box p={".3em 1em"} borderRadius={".3em"} border={"2px solid grey"}>
              <Link to={"/user"}>User</Link>
            </Box>
            <Box p={".3em 1em"} borderRadius={".3em"} border={"2px solid grey"}>
              <Link to={"/register"}>Register</Link>
            </Box>
            <Box p={".3em 1em"} borderRadius={".3em"} border={"2px solid grey"}>
              <Link to={"/saptweet"}>SAP Tweet</Link>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
export default Navbar;
