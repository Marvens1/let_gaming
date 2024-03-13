import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/126.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="70px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
