import { Box } from "@chakra-ui/react";
import React from "react";

export function Layout({ children }: any) {
  return <Box px={["4px", "5%"]}>{children}</Box>;
}
