import {
  Box,
  Button,
  Center,
  FormControl,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";

export default function AddPostForm() {
  const date = new Date();
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
      time: "",
    },
    onSubmit: (values, actions) => {
      tweet(
        (values.username = localStorage["akun"]),
        values.tweet,
        (values.time = `${date.getDate()} / ${
          date.getMonth() + 1
        } / ${date.getFullYear()}`)
      );
      actions.resetForm();
    },
  });

  return (
    <Box p={".5em"} bgColor={"#3876BF"} borderRadius={"1em"} color={"white"}>
      <VStack align={"stretch"}>
        <Box>
          <Center>
            <Text as={"b"}>Tweet your speech</Text>
          </Center>
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
                    bgColor={"white"}
                    color={"black"}
                  />
                </FormControl>
              </Box>
              <Box>
                <Button type="submit" size={"sm"}>
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
