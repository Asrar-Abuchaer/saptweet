import { Heading, Box, Center } from "@chakra-ui/react";
import Navbar from "../navbar";
import PostsList from "../../features/posts/postlists";
import AddPostForm from "../../features/posts/addpostform";

function Tweet() {
  return (
    <Box>
      <Navbar />
      <Box p={{ base: "1em 5em", lg: "1em 25em" }}>
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
