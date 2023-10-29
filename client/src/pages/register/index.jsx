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

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "password must be 7 characters minimum")
    .required("email is required"),
});
function Register() {
  const register = async (email, password, username, isLogin) => {
    try {
      await axios.post("http://localhost:3000/users", {
        email,
        password,
        username,
      });
      alert("Success");
    } catch (err) {
      throw err;
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      register(values.email, values.password, values.username);
    },
  });

  return (
    <Box>
      <Navbar />
      <Box p={"5em"}>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel>Email </FormLabel>
          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <InputGroup>
              <Input
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
            {formik.touched.password && formik.errors.password && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormLabel>Username </FormLabel>
          <FormControl
            isInvalid={formik.touched.email && formik.errors.email}
            nb={5}
          >
            <InputGroup>
              <Input
                size="lg"
                type="text"
                name="username"
                placeholder="Input Your Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                border="2px solid #192655"
                color="black"
                _hover={"none"}
                variant={"ghost"}
                _focus={{ border: "3px solid #192655" }}
              />
            </InputGroup>
          </FormControl>
          <FormLabel>Password</FormLabel>
          <FormControl
            isInvalid={formik.touched.email && formik.errors.email}
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
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>

          <Center>
            <Button
              textColor={"White"}
              as={"b"}
              bgColor={"#3876BF"}
              type={"submit"}
              mt={"1em"}
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
