import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../postSlice";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";

export default function AddPostForm() {
  const [content, setContent] = useState([]);
  const [user, setUser] = useState([]);
  const [onlineUser, setOnlineUser] = useState("");
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tweets");
      setContent(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchDataOnline = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      console.log(`---FETCH ONLINE USER---`);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchDataOnline();
  }, []);

  function online() {
    user.map((item) => {
      item.isLogin === "true" ? setOnlineUser(item.username) : console.log("");
    });
  }
  useEffect(() => {
    online();
  });
  const tweet = async (username, tweet, time) => {
    try {
      await axios.post("http://localhost:3001/tweets", {
        username,
        tweet,
        time,
      });
      alert("success");
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      tweet: "",
      time: "10/12/2023",
    },
    onSubmit: (values) => {
      tweet((values.username = onlineUser), values.tweet, values.time);
    },
  });

  return (
    <Box p={".5em"}>
      <VStack align={"stretch"}>
        <Box>
          <Text as={"b"}>Tweet your speech</Text>
        </Box>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <VStack align={"stretch"}>
              <Box>
                <FormControl>
                  <Textarea
                    id="tweet"
                    type="text"
                    name="tweet"
                    value={formik.values.tweet}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <Button
                  type="submit"
                  // onClick={onSavePostClicked}
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
