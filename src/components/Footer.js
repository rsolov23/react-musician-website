import React from "react";
import { Box, Stack, StackDivider,Text } from "@chakra-ui/react";
import { Copyright } from "./Copyright";
import { SocialMediaLinks } from "./Socialicons";

function Logo() {
  return (
    <>
      <Text>Martell Schaub</Text>
    </>
  );
}

export default function Footer() {
  return (
    <Box
      bg="brand.300"
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <Copyright />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  );
}
