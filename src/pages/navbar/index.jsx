import {
  Box,
  Flex,
  HStack,
  Input,
  Spacer,
  IconButton,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AiTwotoneHome } from "react-icons/ai";

function Navbar() {
  return (
    <Box
      bg={"lightgrey"}
      p={"1em 5em"}
      w={"full"}
      position={"fixed"}
      zIndex={"2"}
    >
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
            <Button
              backgroundColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              p={".3em 1em"}
              borderRadius={".3em"}
              border={"2px solid grey"}
            >
              <Link to={"/login"}>LOGIN</Link>
            </Button>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack>
            <Button
              backgroundColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              p={".3em 1em"}
              borderRadius={".3em"}
              border={"2px solid grey"}
            >
              <Link to={"/saptweet"}>SAP TWEET</Link>
            </Button>
            {/* <Button
              backgroundColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
              p={".3em 1em"}
              borderRadius={".3em"}
              border={"2px solid grey"}
            >
              <Link to={"/saptweet"}>SAP Tweet</Link>
            </Button> */}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
export default Navbar;
