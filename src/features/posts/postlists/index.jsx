import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function PostsList() {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <Box
      key={post.id}
      border={"1px solid black"}
      p={"1.5em"}
      borderRadius={".5em"}
    >
      <Text>{post.title}</Text>
      <Text>{post.content.substring(0, 100)}</Text>
      <Link to={`/posts/${post.id}`}>View Post</Link>
    </Box>
  ));

  return (
    <Box>
      <Text>Posts</Text>
      <VStack align={"stretch"}>{renderedPosts}</VStack>
    </Box>
  );
}
