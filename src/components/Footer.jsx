import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "../assets/kartik.jpg";

// const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Xcrypto</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Xcrypto is the best crypto trading app in India, it provides in
            depth analysis of all the crypto currencies in the market.
          </Text>
        </VStack>

        <VStack>
          <Text>
            <a href="https://github.com/kartikjain2001">About The Developer</a>
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
