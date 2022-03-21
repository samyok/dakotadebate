import { Heading } from "@chakra-ui/react";
import React from "react";

export default function SectionHeading({ children, ...props }: any): JSX.Element {
  return (
    <Heading size={"3xl"} fontWeight={"600"} textAlign={"center"} mt={16} mb={8} {...props}>
      {children}
    </Heading>
  );
}
