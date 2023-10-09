import { Box, Center, Text } from "@chakra-ui/react";
import Navbar from "../navbar";

function Register() {
  return (
    <Box>
      <Navbar />
      <Box p={"1em 5em"} pt={"5em"}>
        <Center>
          <Text>This is page register</Text>
        </Center>
      </Box>
    </Box>
  );
}

export default Register;
