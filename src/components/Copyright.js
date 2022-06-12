import { Text, TextProps } from "@chakra-ui/layout";
import * as React from "react";

export const Copyright = (props: TextProps) => (
  <Text variant="ghost" color="gray.600" fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Designed and Developed by Rachel Solov.
    All rights reserved.
  </Text>
);
