import { Box, Divider, Flex, Spacer, Text, Link } from "@chakra-ui/react";
import Navbar from "../navbar";
import AddTweet from "../../features/posts/addTweet";
import TweetLists from "../../features/posts/tweetLists";
import User from "../user";
import SideBar from "../sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

function Tweet() {
  const [tweets, setTweets] = useState([]);
  const fetchTweetData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tweets");
      setTweets(response.data);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchTweetData();
  }, [tweets]);

  return (
    <Box>
      <Navbar />
      <Box p={"1em 5em"} mb={"3em"} mt={"5em"}>
        <Flex spac>
          <Box w={"20%"}>
            <SideBar />
          </Box>
          <Spacer />
          <Box w={"50%"} p={"1em"} pt={"0"} borderRadius={"1em"}>
            <Box>
              <AddTweet />
            </Box>
            <Box>
              <TweetLists />
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
