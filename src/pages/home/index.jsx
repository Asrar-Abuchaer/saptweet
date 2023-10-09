import { Box, Text, Center } from "@chakra-ui/react";
import Navbar from "../navbar";

function Home() {
  return (
    <Box>
      <Navbar />
      <Box>
        <Center>
          <Text>This is main pages</Text>
        </Center>
      </Box>
    </Box>
  );
}

export default Home;
