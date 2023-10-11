import { Box, Heading, Center } from "@chakra-ui/react";
import Navbar from "../navbar";

function Home() {
  return (
    <Box>
      <Navbar />
      <Box paddingTop={"5em"}>
        <Center>
          <Heading>SAPTWEET</Heading>
        </Center>
      </Box>
    </Box>
  );
}

export default Home;
