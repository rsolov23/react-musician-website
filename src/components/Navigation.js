import React from "react";
import { useState } from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  HStack,
  Center,
  useColorMode,
  Switch,
  IconButton,
} from "@chakra-ui/react";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("");
  return (
    <Box
    // display={{ base: isOpen ? "block" : "none", md: "block" }}
    // flexBasis={{ base: "100%", md: "auto" }}
    >
      <HStack
        spacing={8}
        // align="center"
        // justify={["center", "space-between"]}

        // direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/services">Services</MenuItem>
        <MenuItem to="/appointments">Appointments</MenuItem>
        <MenuItem to="/blog">
          Blog
          <MenuItem className=""></MenuItem>
        </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            // color={["primary.500", "primary.500", "black", "black"]}
            // bg={["black", "black", "primary.500", "primary.500"]}
            // _hover={{
            //   bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            // }}
          >
            Create Account
          </Button>
          <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
        </MenuItem>
      </HStack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      justify="center"
      w="100%"
      mb={8}
      p={8}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
      // color={["black", "black", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Navigation;
