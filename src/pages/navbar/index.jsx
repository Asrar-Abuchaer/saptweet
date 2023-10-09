import { Box, Spacer, IconButton, HStack } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box width="100%" height="50px" bg="blue.500" p=".5em">
      <HStack maxW="1200px" mx="auto" alignItems="center">
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon placeholder="search" />}
        />
        <Spacer />
        <Link to="user" style={{ padding: 5 }}>
          user
        </Link>
        <Link to="register" style={{ padding: 5 }}>
          register
        </Link>

        {/* <Link
            borderRadius=".3em"
            border="solid .1em white"
            color="white"
            mr="2em"
          >
            User
          </Link>
          <Link
            borderRadius=".3em"
            border="solid .1em white"
            color="white"
            mr="2em"
          >
            Register
          </Link> */}
      </HStack>
    </Box>
  );
}
export default Navbar;
