import { Box, Center, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

export default function TweetLists() {
  const posts = useSelector((state) => state.posts);
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      console.log("--Fetch PostList Success--");
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
            {data.map((item) => {
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
            <Button size={"xs"} bgColor={"lightgray"}>
              <Link to={`/posts/${post.id}`}>View Tweet</Link>
            </Button>
            <Button size={"xs"} bgColor={"lightgray"}>
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
          <Center>
            <Text as={"b"}>Tweets</Text>
          </Center>
        </Box>
        <Divider />
        <Box>
          <VStack align={"stretch"}>{renderedPosts}</VStack>
        </Box>
      </VStack>
    </Box>
  );
}
