import axios from "axios";
import * as Yup from "yup";
import {
  Box,
  Button,
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Center,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    username: Yup.string()
      .min(4, "username must be 4 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(7, "password must be 7 characters minimum")
      .required("password is required"),
  });

  const register = async (email, username, password) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/register", {
        username,
        email,
        password,
      });
      console.log(data?.message);
      alert(data?.message);
      navigate("/login");
    } catch (err) {
      throw err;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => {
      register(values.email, values.username, values.password);
      actions.resetForm();
      navigate("/login");
    },
  });

  return (
    <Box>
      <Navbar />
      <Box p={"1em 5em"} mb={"3em"} mt={"5em"}>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel htmlFor="email">Email </FormLabel>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <InputGroup>
              <Input
                id="email"
                size="lg"
                type="text"
                name="email"
                placeholder="Input Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                border="2px solid #192655"
                color="black"
                _hover={"none"}
                variant={"ghost"}
                _focus={{ border: "3px solid #192655" }}
              />
            </InputGroup>
            {formik.touched.email && formik.errors.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormLabel htmlFor="username">Username </FormLabel>
          <FormControl
            isInvalid={formik.touched.username && formik.errors.username}
          >
            <InputGroup>
              <Input
                id="username"
                size="lg"
                type="text"
                name="username"
                placeholder="Input Your Email"
                value={formik.values.username}
                onChange={formik.handleChange}
                border="2px solid #192655"
                color="black"
                _hover={"none"}
                variant={"ghost"}
                _focus={{ border: "3px solid #192655" }}
              />
            </InputGroup>
            {formik.touched.username && formik.errors.username && (
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            )}
          </FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormControl
            isInvalid={formik.touched.password && formik.errors.password}
            nb={5}
          >
            <InputGroup>
              <Input
                size="lg"
                type="password"
                name="password"
                placeholder="Input Your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                border="2px solid #192655"
                color="black"
                _hover={"none"}
                variant={"ghost"}
                _focus={{ border: "3px solid #192655" }}
              />
            </InputGroup>
            {formik.touched.password && formik.errors.password && (
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <Center>
            <Button
              textColor={"White"}
              bgColor={"#3876BF"}
              type={"submit"}
              mt={"1em"}
              _hover={"none"}
            >
              REGISTER
            </Button>
          </Center>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
