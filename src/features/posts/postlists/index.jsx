import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

export default function PostsList() {
  const posts = useSelector((state) => state.posts);
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      console.log("Success");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderedPosts = posts.map((post) => (
    <Box
      key={post.id}
      border={"1px solid black"}
      p={"1.5em"}
      borderRadius={".5em"}
    >
      <VStack align={"stretch"}>
        <Box>
          <Text as={"b"}>
            {data?.length > 0 &&
              data.map((item) => {
                return (
                  <Box>
                    <Text>
                      {item.isLogin === "true" ? `@${item.username}` : ""}
                    </Text>
                  </Box>
                );
              })}
          </Text>
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
              <Link to={`/posts/${post.id}`}>View Tweet</Link>
            </Button>
            <Button size={"xs"}>
              <Link to={`/posts/${post.id}`}>Edit Tweet</Link>
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
          <Text>Tweets</Text>
        </Box>
        <Divider border={"1px solid gray"} />
        <Box>
          <VStack align={"stretch"}>{renderedPosts}</VStack>
        </Box>
      </VStack>
    </Box>
  );
}
