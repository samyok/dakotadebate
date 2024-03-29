import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import backgroundImage from "../assets/scholarship_background.png";
import trackEvent from "./trackEvent";

export default function BlackBanner() {
  return (
    <Box width={"full"} height={"50vh"} bg={"blackAlpha.900"} mt={8} pos={"relative"}>
      <Image
        alt={"DDI 2021 Final Round Zoom Picture"}
        src={backgroundImage}
        layout={"fill"}
        objectFit={"cover"}
        placeholder={"blur"}
        priority
        quality={1}
      />
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        bg={"rgba(0,0,0,.85)"}
        pos={"absolute"}
        top={0}
        left={0}
        width={"full"}
        height={"full"}
        color={"white"}
        p={10}
        textAlign={"center"}
        spacing={8}>
        <VStack spacing={4} pb={8}>
          <Heading size={"3xl"} maxWidth={"min(100%, 700px)"}>
            Scholarships!
          </Heading>
          <Text fontSize={"2xl"} fontWeight={"300"} mt={4}>
            Please apply if you need it, we don&apos;t want you to commute an hour every day!
          </Text>
        </VStack>
        <VStack>
          <Button
            href={"/scholarships"}
            as={"a"}
            onClick={() => trackEvent("Scholarships Banner: Click")}
            variant={"solid"}
            size={"lg"}
            colorScheme={"purple"}>
            Apply for Scholarships
          </Button>
          <Text fontSize={"xl"} fontWeight={"300"} mt={4}>
            Available until May 8.
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
}
