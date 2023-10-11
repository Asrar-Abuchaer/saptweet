import { Box, Text, Center } from "@chakra-ui/react";
import Navbar from "../navbar";
import CobaRegister from "../cobaregister";

function Home() {
  return (
    <Box>
      <Navbar />
      <Box paddingTop={"5em"}>
        <CobaRegister />
      </Box>
    </Box>
  );
}

export default Home;
