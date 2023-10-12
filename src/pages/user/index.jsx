import { Text, Box, Center, VStack, Divider } from "@chakra-ui/react";
import Navbar from "../navbar";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function User() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      console.log("--Fetch User Success--");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <Box p={"1em"} border={"2px solid gray"} borderRadius={"1em"}>
      <Box>
        <VStack align={"end"}>
          <Box>
            <Text as="b" align={"end"}>
              USER
            </Text>
          </Box>
          <Divider border={"1px solid gray"} />
          <VStack align={"end"}>
            {data?.length > 0 &&
              data.map((item, index) => {
                return (
                  <Text key={index}>
                    {item.isLogin === "false" ? `@${item.username}` : ``}
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
