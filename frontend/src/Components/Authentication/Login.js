import { Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  const submitHandler = () => {};

  return (
    <div>
      <VStack spacing="5px">
        {/* Email */}
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>
        {/* Password */}
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5em">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Login
        </Button>
        <Button
          colorScheme="red"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={() => {
            setEmail("guest.example.com")
            setPassword("123456")
          }}
        >
          Login as guest
        </Button>
      </VStack>
    </div>
  );
};

export default Login;
