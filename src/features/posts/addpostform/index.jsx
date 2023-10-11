import { Box, Button, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../postSlice";

export default function AddPostForm() {
  const [content, setContent] = useState("");
  const onContentChanged = (e) => setContent(e.target.value);
  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (content) {
      dispatch(
        postAdded({
          id: nanoid(),
          content,
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
                <Button
                  type="button"
                  onClick={onSavePostClicked}
                  bgColor={"lightgray"}
                >
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
