import { ButtonGroup, IconButton } from "@chakra-ui/react";
import React from "react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";


export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href=""
      target="blank"
      aria-label="Facebook"
      icon={<FaFacebookSquare fontSize="20px" />}
    />
    <IconButton
      as="a"
      href=""
      target="blank"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href=""
      target="blank"
      aria-label="Instagram"
      icon={<FaInstagramSquare fontSize="20px" />}
    />
  </ButtonGroup>
);
