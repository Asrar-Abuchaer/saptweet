import {
  Box,
  Heading,
  Center,
  Text,
  Image,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import Navbar from "../navbar";
import sap from "../../img/sap.jpg";

function Home() {
  return (
    <Box>
      <Navbar />
      <Box paddingTop={"5em"}>
        <Center>
          <VStack>
            <Heading>SAPTWEET-WARUNGTIKET</Heading>
            <Text fontSize={"2xl"}>"Created by the SAP team"</Text>
            <Spacer />
            <Box borderRadius={"1em"} w={"20em"} overflow={"hidden"}>
              <Image src={sap} w={"100%"} />
            </Box>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
}

export default Home;
