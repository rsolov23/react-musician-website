import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { blogCards } from "../assets/data";

function Blog() {
  return (
    <>
      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        {blogCards.map((blogCard) => (
          <Box
            mx="auto"
            rounded="lg"
            shadow="md"
            bg={useColorModeValue("white", "gray.800")}
            maxW="2xl"
          >
            <Image
              roundedTop="lg"
              w="full"
              h={64}
              fit="cover"
              src={blogCard.image}
              alt="Article"
            />
            <Box p={6}>
              <Box>
                <chakra.span
                  fontSize="xs"
                  textTransform="uppercase"
                  color={useColorModeValue("brand.600", "brand.400")}
                  blogCard={blogCard}
                >
                  {/* {blogCard.title} */}
                </chakra.span>
                <Link
                  display="block"
                  color={useColorModeValue("gray.800", "white")}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={2}
                  _hover={{ color: "gray.600", textDecor: "underline" }}
                >
                  {blogCard.title}
                </Link>
                <chakra.p
                  mt={2}
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  {blogCard.info}
                </chakra.p>
                <chakra.a href={blogCard.link} target="_blank">
                  Read More ...
                </chakra.a>
              </Box>

              <Box mt={4}>
                <Flex alignItems="center">
                  <Flex alignItems="center">
                    <Image
                      h={10}
                      fit="cover"
                      rounded="full"
                      src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                      alt="Avatar"
                    />
                    <Link
                      mx={2}
                      fontWeight="bold"
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      {blogCard.author}
                    </Link>
                  </Flex>
                  <chakra.span
                    mx={1}
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.300")}
                  >
                    {blogCard.date}
                  </chakra.span>
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
}
export default Blog;
