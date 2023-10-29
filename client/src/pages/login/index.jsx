import {
  Box,
  Text,
  Input,
  Button,
  FormLabel,
  Center,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../navbar";

function Login() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  const fetchDataLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setAccounts(response.data);
      console.log(`--Fetch Login Success--`);
    } catch (err) {
      throw err;
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters minimum")
      .required("Password is required"),
  });

  const allEmail = accounts.map((item) => item.email);

  useEffect(() => {
    fetchDataLogin();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      check(values.email, values.password);
    },
  });

  const check = (email, password) => {
    if (allEmail.includes(email)) {
      const inputtedEmail = accounts[allEmail.indexOf(email)]["email"];
      const username = accounts[allEmail.indexOf(email)]["username"];
      console.log(username);
      if (accounts[allEmail.indexOf(inputtedEmail)]["password"] === password) {
        localStorage.setItem("akun", username);
        navigate("/saptweet");
        console.log(localStorage);
      }
    } else {
      alert("Username / Password salah ");
    }
  };

  return (
    <Box>
      <Navbar />
      <Box p={"0 5em"} pt={"5em"}>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Box>
                <Center fontSize={"2xl"} as="b">
                  LOGIN
                </Center>
              </Box>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="text"
                id="email"
                name="email"
                size={"lg"}
                onChange={formik.handleChange}
                value={formik.values.email}
                bgColor="transparent"
                border="2px solid #192655"
                color="black"
                _hover={"none"}
                variant={"ghost"}
                _focus={{ border: "3px solid #192655" }}
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                size={"lg"}
                value={formik.values.password}
                onChange={formik.handleChange}
                bgColor="transparent"
                border="2px solid #192655"
                color="black"
                _hover={"none"}
                variant={"ghost"}
                _focus={{ border: "3px solid #192655" }}
              />
              <Button
                type="submit"
                bgColor={"#3876BF"}
                textColor={"white"}
                mt={".5em"}
                p=".5em 1em"
                _hover={"none"}
                cursor={"pointer"}
              >
                Login
              </Button>
            </Box>
          </form>
          <Box>
            <VStack>
              <Text>
                Belum punya akun?{" "}
                <Text as="b">
                  <Link to="/register">Register</Link>
                </Text>
              </Text>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
