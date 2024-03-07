import { FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input"
import React, { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></Input>
      </FormControl>
      SignUp
    </VStack>
  );
};

export default SignUp;
