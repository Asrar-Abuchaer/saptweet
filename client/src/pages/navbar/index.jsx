import { Box, Flex, HStack, Spacer, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <Box
      bg={"#3876BF"}
      p={"1em 5em"}
      w={"full"}
      position={"fixed"}
      zIndex={"2"}
      top={"0"}
    >
      <Flex alignItems={"center"}>
        <Box>
          <HStack>
            <Box w={"10em"}>
              <Link to={"/"}>
                <Image src={logo} />
              </Link>
            </Box>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <HStack>
            <Link to={"/saptweet"}>
              <Text as={"b"} textColor={"white"}>
                TWEET
              </Text>
            </Link>
            <Spacer />
            <Text
              as={"b"}
              cursor={"pointer"}
              onClick={
                !!localStorage["akun"]
                  ? async () => {
                      await navigate("/");
                      await localStorage.removeItem("akun");
                      setTimeout(() => {
                        alert("logout success");
                      }, 1000);
                    }
                  : () => alert("login first")
              }
              textColor={"white"}
            >
              LOG OUT
            </Text>
            <Spacer />
            <Link to={"/login"}>
              <Text as={"b"} textColor={"white"}>
                LOGIN
              </Text>
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
export default Navbar;
