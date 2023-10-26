import { Box, VStack, Text, Divider } from "@chakra-ui/react";
function SideBar() {
  return (
    <Box bgColor={"#192655"} p={"1em"} borderRadius={"1em"}>
      <Box>
        <VStack align={"stretch"}>
          <Box>
            <Text as="b" color={"white"}>SIDEBAR</Text>
          </Box>
          <Divider color={"white"} />
          <Box>
            <VStack align={"stretch"} color={"white"}>
              <Text>SAPTWEET</Text>
              <Text>SAPTWEET</Text>
              <Text>SAPTWEET</Text>
              <Text>SAPTWEET</Text>
              <Text>SAPTWEET</Text>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
export default SideBar;
