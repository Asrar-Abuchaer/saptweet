import { Box, VStack, Text, Divider } from "@chakra-ui/react";
function SideBar() {
  return (
    <Box border={"2px solid gray"} p={"1em"} borderRadius={"1em"}>
      <Box>
        <VStack align={"stretch"}>
          <Box>
            <Text as="b">SIDEBAR</Text>
          </Box>
          <Divider border={"1px solid gray"} />
          <Box>
            <VStack align={"stretch"}>
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
