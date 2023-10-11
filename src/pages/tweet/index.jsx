import { Heading, Box, Center, Flex, Spacer } from "@chakra-ui/react";
import Navbar from "../navbar";
import PostsList from "../../features/posts/postlists";
import AddPostForm from "../../features/posts/addpostform";
import { useSelector } from "react-redux";
import User from "../user";
import SideBar from "../sidebar";
function Tweet() {
  return (
    <Box>
      <Navbar />
      <Box p={"0 5em"} paddingTop={"5em"}>
        <Flex spac>
          <Box w={"20%"}>
            <SideBar />
          </Box>
          <Spacer />
          <Box
            w={"50%"}
            p={"1em"}
            pt={"0"}
            border={"2px solid gray"}
            borderRadius={"1em"}
          >
            <Box>
              <AddPostForm />
            </Box>
            <Box>
              <PostsList />
            </Box>
          </Box>
          <Spacer />

          <Box w={"20%"}>
            <User />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Tweet;
