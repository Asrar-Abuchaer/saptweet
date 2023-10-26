import {
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import Navbar from "../navbar";
import PostsList from "../../features/posts/postlists";
import AddPostForm from "../../features/posts/addpostform";
import User from "../user";
import SideBar from "../sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

function Tweet() {
  const [tweets, setTweets] = useState([]);
  const fetchDataLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tweets");
      setTweets(response.data);
      console.log(`--Fetch Tweet Success--`);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDataLogin();
  }, []);

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
            // border={"2px solid gray"}
            borderRadius={"1em"}
          >
            <Box>
              <AddPostForm />
            </Box>
            <Box>
              <PostsList />
              {tweets.toReversed().map((item, index) => {
                return (
                  <Box
                    key={index}
                    p={".5em"}
                    bgColor={"white"}
                    marginBottom={".5em"}
                    borderRadius={".5em"}
                    border={"1px solid black"}
                  >
                    <Text as={"b"}>@{item.username}</Text>
                    <Divider border={"1px solid gray"} />
                    <Text>{item.tweet}</Text>
                    <Text fontSize={".75em"}>{item.time}</Text>
                    <Link fontSize={".75em"}>Delete Tweet</Link>
                  </Box>
                );
              })}
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
