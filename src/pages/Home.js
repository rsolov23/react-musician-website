import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "./Slider";
export default function Home() {
  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        border="1px"
        borderColor="gray.200"
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "brand.600",
                  zIndex: -1,
                }}
              >
                Martell Schaub
              </Text>
              <br />{" "}
              <Text color={"brand.600"} as={"span"}>
                Lorem
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quasi molestias quisquam reprehenderit accusamus
              soluta deleniti incidunt consectetur ex eveniet ipsum iure,
              deserunt dignissimos! Iste iusto a porro ipsa{" "}
              <vitae className=""></vitae>
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"brand.600"}
                color={"white"}
                _hover={{
                  bg: "brand.700",
                }}
              >
                Lorem
              </Button>
              <Button
                rounded={"full"}
                bg={"brand.600"}
                color={"white"}
                _hover={{
                  bg: "brand.700",
                }}
              >
                Lorem
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"self image"}
            objectFit={"cover"}
            src={"https://picsum.photos/400/400"}
          />
        </Flex>
      </Stack>
      <Box>
        <Slider />
      </Box>
    </>
  );
}
