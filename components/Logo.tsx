import { chakra, Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";

export default function Logo({ ...props }: any) {
  return (
    <Link href="/#" _hover={{ textDecoration: "none" }}>
      <Flex alignItems={"center"} cursor={"pointer"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <chakra.img w={{ base: "65px", md: "95px", lg: "100px" }} src="/outlined_bison.png" alt={"logo"} />
        <Heading
          fontFamily={"Merriweather"}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight={"black"}
          letterSpacing={"unset"}
          mx={4}
          {...props}
        >
          Dakota Debate Institute
        </Heading>
      </Flex>
    </Link>
  );
}
