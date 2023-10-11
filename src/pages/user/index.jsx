import { Text, Box, Center, VStack } from "@chakra-ui/react";
import Navbar from "../navbar";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function User() {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      <Navbar />
      <Box p={"1em 10em"} pt={"5em"}>
        <VStack align={"stretch"}>
          <Box>
            <VStack align={"stretch"}>
              {data?.length > 0 &&
                data.map((item) => {
                  return (
                    <Box>
                      <Text>
                        <Text as="b">Name:</Text> {item.name}
                      </Text>
                      <Text>
                        <Text as="b">Email:</Text> {item.email}
                      </Text>
                      <Text>
                        <Text as="b">Phone Number:</Text> {item.number}
                      </Text>
                    </Box>
                  );
                })}
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default User;
