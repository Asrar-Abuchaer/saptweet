import React from "react";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../../pages/navbar";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  const post2 = useSelector((state) => state.id);
  console.log(post2);
  console.log(useSelector((state) => console.log(state.posts)));

  if (!post) {
    return (
      <Box>
        <Text>Post not found!</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Navbar />
      <Box>
        <Text as="b">{post.title}</Text>
        <Text>{post.content}</Text>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </Box>
    </Box>
  );
};
