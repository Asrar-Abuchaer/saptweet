import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
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

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters minimum")
    .required("Password is required"),
});

function Login() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  let newEmail;
  let indexUser;
  const fetchDataLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setAccounts(response.data);
      console.log(response.data);
      console.log(`--Fetch Login Success--`);
    } catch (err) {
      console.log(err);
    }
  };

  const allEmail = accounts.map((item) => item.email);

  useEffect(() => {
    fetchDataLogin();
  }, []);

  const updateIsLogin = (index) => {
    axios
      .patch(`http://localhost:3000/users/${index}`, {
        isLogin: "true",
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = (index) => {
    axios
      .patch(`http://localhost:3000/users/${index}`, {
        isLogin: "false",
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateLogOut = async () => {
    await logOut(indexUser);
    alert("Logout Success");
  };
  const check = (email, password) => {
    if (allEmail.includes(email)) {
      newEmail = accounts[allEmail.indexOf(email)];
      indexUser = allEmail.indexOf(email) + 1;
      updateIsLogin(indexUser);
      if (newEmail.password.includes(password)) {
        navigate("/saptweet");
      } else {
        alert("Password salah");
      }
    } else {
      alert("Email Belum Terdaftar");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      check(values.email, values.password);
      console.log(newEmail);
      console.log(indexUser);
    },
  });

  return (
    <Box>
      <Navbar />
      <Box p={"0 5em"} pt={"5em"}>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Box>
                <Text as="b">Login</Text>
              </Box>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  name="email"
                  size={"lg"}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  bgColor="transparent"
                  border="2px solid gray"
                  color="black"
                />
              </FormControl>
              <FormControl
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  size={"lg"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  bgColor="transparent"
                  border="2px solid gray"
                  color="black"
                />
              </FormControl>
              <Box display={"flex"} justifyContent={"center"}>
                <Button mt={".5em"} type="submit" p=".5em 1em">
                  Login
                </Button>
              </Box>
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
              <Button w={"15%"} bgColor={"lightgray"} onClick={updateLogOut}>
                Log Out
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
