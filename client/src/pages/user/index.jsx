import { Text, Box, VStack, Divider } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function User() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box p={"1em"} borderRadius={"1em"} bgColor={"#192655"}>
      <Box>
        <VStack align={"end"}>
          <Box>
            <Text as="b" align={"end"} color={"white"}>
              USER
            </Text>
          </Box>
          <Divider size={"md"} color={"white"} />
          <VStack align={"end"}>
            {data?.length > 0 &&
              data.map((item, index) => {
                return (
                  <Text key={index} color={"white"}>
                    {localStorage["akun"] === item.username
                      ? ``
                      : `@${item.username}`}
                  </Text>
                );
              })}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

export default User;
