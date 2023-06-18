import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button
        paddingRight={"4"}
        variant={"unstyled"}
        color={"white"}
        _hover={{ bg: "#333333" }}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button
        paddingRight={"4"}
        variant={"unstyled"}
        color={"white"}
        _hover={{ bg: "#333333" }}
      >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
        paddingRight={"4"}
        variant={"unstyled"}
        color={"white"}
        _hover={{ bg: "#333333" }}
      >
        <Link to="/coins"> Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
