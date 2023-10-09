import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
export default function PostsList() {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <Box
      key={post.id}
      border={"1px solid black"}
      p={"1.5em"}
      borderRadius={".5em"}
    >
      <VStack align={"stretch"}>
        <Box>
          <Text as={"b"}>@tweetusername</Text>
        </Box>
        <Box>
          <Text>{post.title}</Text>
        </Box>
        <Box>
          <Text>{post.content.substring(0, 100)}</Text>
        </Box>
        <Box alignSelf={"flex-end"}>
          <HStack>
            <Button size={"xs"}>
              <Link to={`/posts/${post.id}`}>View Post</Link>
            </Button>
            <Button size={"xs"}>
              <Link to={`/posts/${post.id}`}>Edit Post</Link>
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  ));

  return (
    <Box p={".5em"}>
      <VStack align={"stretch"}>
        <Box>
          <Text>Posts</Text>
        </Box>
        <Divider />
        <Box>
          <VStack align={"stretch"}>{renderedPosts}</VStack>
        </Box>
      </VStack>
    </Box>
  );
}
