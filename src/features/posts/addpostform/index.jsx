import { Box, Button, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../postSlice";
import axios from "axios";
import { useEffect } from "react";
export default function AddPostForm() {
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
  const [content, setContent] = useState("");
  const [user, setUser] = useState("@putuphillipsteven");
  const onContentChanged = (e) => setContent(e.target.value);
  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (content) {
      dispatch(
        postAdded({
          id: nanoid(),
          content,
          user,
        })
      );
      setContent("");
    }
  };
  return (
    <Box p={".5em"}>
      <VStack align={"stretch"}>
        <Box>
          <Text>Tweet your speech</Text>
        </Box>
        <Box>
          <form>
            <VStack align={"stretch"}>
              <Box>
                <Textarea
                  id="postContent"
                  name="postContent"
                  value={content}
                  onChange={onContentChanged}
                />
              </Box>
              <Box>
                <Button type="button" onClick={onSavePostClicked}>
                  Tweet
                </Button>
              </Box>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}
