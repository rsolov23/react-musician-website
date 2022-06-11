import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="35px" fontWeight="bold" fontFamily="fuggles">
        Martell
      </Text>
      <Text>Schaub</Text>
    </Box>
  );
}
