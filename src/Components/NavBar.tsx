import React from "react";

import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Let gmaing.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="100px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
