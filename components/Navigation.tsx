import React, { useEffect, useState } from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

function MenuLink({ children, ...props }: any) {
  return (
    <Link
      _hover={{
        color: "rgba(255,255, 255, 0.9)",
      }}
      size="sm"
      {...props}
    >
      {children}
    </Link>
  );
}
const SCROLL_DISTANCE = 120;
type NavigationParams = {
  animateScroll: boolean;
};

export default function Navigation({ animateScroll = true }: NavigationParams) {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  const [scrollDistance, setScrollDistance] = useState(0);
  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 900) {
      // @ts-ignore
      setScrollDistance(window.document.querySelector("body")?.getClientRects()[0].y * -1);
    } else {
      setScrollDistance(0);
    }
    window.addEventListener("scroll", (event) => {
      if (window.innerWidth > 900) {
        let distance = -1 * (window.document.querySelector("body")?.getClientRects()[0].y || 0);
        setScrollDistance(distance);
        // console.log(distance);
      } else {
        setScrollDistance(0);
      }
    });
  }, []);

  // has it scrolled far enough to trigger the scrolled state?
  // or is animateScroll false
  const scrolledState = !animateScroll || scrollDistance > SCROLL_DISTANCE;
  const slightWhite = scrolledState ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.5)";
  return (
    <>
      <chakra.header
        bg={scrolledState ? "black" : "transparent"}
        transitionDuration={"550ms"}
        w="full"
        px={{ base: 2, sm: 10 }}
        py={1}
        shadow={"md"}
        pos={"fixed"}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link href="/">
            <Flex alignItems={"center"} cursor={"pointer"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <chakra.img
                w={{ base: "65px", md: "95px", lg: "100px" }}
                src="/outlined_bison.png"
                alt={"logo"}
              />
              <Heading
                fontFamily={"Merriweather"}
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight={"black"}
                mx={4}
                color={slightWhite}
                _hover={{ color: "white" }}
              >
                Dakota Debate Institute
              </Heading>
            </Flex>
          </Link>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack color={slightWhite} spacing={8} display={{ base: "none", md: "inline-flex" }}>
              <MenuLink>Info</MenuLink>
              <MenuLink>Staff</MenuLink>
              <MenuLink>Scholarships</MenuLink>
              <MenuLink>Contact</MenuLink>
              <Button colorScheme="purple" size="sm">
                Register
              </Button>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={slightWhite}
                variant="outlined"
                borderRadius={4}
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
}
