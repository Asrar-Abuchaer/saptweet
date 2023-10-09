import { Heading, Box, Center } from "@chakra-ui/react";
import Navbar from "../navbar";
import PostsList from "../../features/posts/postlists";
import AddPostForm from "../../features/posts/addpostform";

function Tweet() {
  return (
    <Box>
      <Navbar />
      <Box p={"0 10em"} paddingTop={"5em"}>
        <Box>
          <Center>
            <Heading>SAP Tweet</Heading>
          </Center>
        </Box>
        <Box>
          <AddPostForm />
        </Box>
        <Box>
          <PostsList />
        </Box>
      </Box>
    </Box>
  );
}

export default Tweet;
