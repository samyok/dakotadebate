import { Box } from "@chakra-ui/react";
import React from "react";

export function Layout({ children, ...props }: any) {
  return (
    <Box px={["2%", "5%"]} {...props}>
      {children}
    </Box>
  );
}
