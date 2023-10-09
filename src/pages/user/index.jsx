import { Text, Box, Center } from "@chakra-ui/react";
import Navbar from "../navbar";

function User() {
  return (
    <Box>
      <Navbar />
      <Box p={"1em 5em"} pt={"5em"}>
        <Center>
          <Text>This is page user</Text>
        </Center>
      </Box>
    </Box>
  );
}

export default User;
