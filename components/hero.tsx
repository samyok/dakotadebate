import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Box, Button, chakra, Heading, Text, VStack } from "@chakra-ui/react";
import trackEvent from "./trackEvent";
import backgroundImage from "../assets/2021-final-round.png";
import { use100vh } from "react-div-100vh";
import { polyfill } from "seamless-scroll-polyfill";
import { useRouter } from "next/router";

type HeroParams = {
  navRef: any;
};

export default function Hero({ navRef }: HeroParams) {
  const [navHeight, setNavHeight] = useState(50);
  const height = use100vh();

  useEffect(() => {
    if (navRef && navRef?.current) {
      setNavHeight(navRef.current.getClientRects()[0].height);
    }
  }, [navRef]);
  useEffect(() => {
    const listener = () => {
      if (navRef && navRef?.current) {
        setNavHeight(navRef.current.getClientRects()[0].height);
      }
    };
    const interval = setInterval(listener, 250);
    window.addEventListener("resize", listener);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", listener);
    };
  }, []);
  return (
    <Box
      width={"full"}
      height={height ? `${height}px` : "100vh"}
      transitionDuration={"1000ms"}
      mb={`-${navHeight}px`}
      bg={"blackAlpha.900"}
      pos={"relative"}
    >
      <Image
        alt="DDI 2021 Final Round Zoom Picture"
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        placeholder={"blur"}
        priority={true}
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
        spacing={8}
      >
        <VStack spacing={4} pb={8}>
          <Heading size={"3xl"} maxWidth={"min(100%, 700px)"}>
            An Affordable Summer Camp for PF and LD
          </Heading>
          <Text fontSize={"2xl"} fontWeight={"300"} mt={4}>
            By former champions, for future champions.
          </Text>
        </VStack>
        <VStack>
          <Button variant={"solid"} size={"lg"} colorScheme={"purple"} as={"a"} href={"#pricing"}>
            Register by May 8!
          </Button>
          <Text fontSize={"xl"} fontWeight={"300"} mt={4}>
            June 25-30 @ SDSU
          </Text>
        </VStack>
      </VStack>
      <chakra.svg
        onClick={() => {
          polyfill();
          window?.document
            ?.querySelector("#what-is-ddi")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
          trackEvent("read more click");
        }}
        zIndex={2}
        cursor={"pointer"}
        opacity={0.65}
        _hover={{
          opacity: 1,
        }}
        pos={"absolute"}
        bottom={4}
        left={"50%"}
        transform={"translateX(-50%)"}
        width="308px"
        height="38px"
        viewBox="0 0 408 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M154.893 25.326C155.019 25.362 155.118 25.425 155.19 25.515C155.262 25.587 155.298 25.686 155.298 25.812V27H152.49C152.022 27 151.68 26.811 151.464 26.433L146.442 19.521C146.316 19.341 146.154 19.188 145.956 19.062C145.794 18.954 145.524 18.9 145.146 18.9H143.418V25.002L144.93 25.326C145.056 25.362 145.155 25.425 145.227 25.515C145.317 25.587 145.362 25.686 145.362 25.812V26.973H138.855V25.812C138.855 25.686 138.891 25.587 138.963 25.515C139.035 25.425 139.134 25.362 139.26 25.326L140.826 25.002V9.612L139.26 9.288C139.134 9.252 139.035 9.198 138.963 9.126C138.891 9.036 138.855 8.928 138.855 8.802V7.614H146.01C147.216 7.614 148.278 7.74 149.196 7.992C150.096 8.244 150.834 8.604 151.41 9.072C152.004 9.558 152.436 10.125 152.706 10.773C152.976 11.421 153.111 12.168 153.111 13.014C153.111 13.68 153.003 14.31 152.787 14.904C152.571 15.48 152.256 16.02 151.842 16.524C151.428 17.028 150.933 17.433 150.357 17.739C149.637 18.135 148.971 18.396 148.359 18.522C148.683 18.72 148.971 18.99 149.223 19.332L153.408 25.056C154.272 25.2 154.776 25.29 154.92 25.326H154.893ZM145.848 17.01C146.64 17.01 147.315 16.92 147.873 16.74C148.413 16.56 148.899 16.29 149.331 15.93C149.727 15.588 150.024 15.192 150.222 14.742C150.42 14.292 150.519 13.77 150.519 13.176C150.519 12.042 150.141 11.178 149.385 10.584C148.647 10.008 147.522 9.72 146.01 9.72H143.391V17.01H145.848ZM162.418 13.122C163.21 13.122 163.957 13.257 164.659 13.527C165.379 13.797 165.973 14.184 166.441 14.688C166.981 15.264 167.377 15.903 167.629 16.605C167.917 17.415 168.061 18.279 168.061 19.197C168.061 19.611 168.025 19.863 167.953 19.953C167.863 20.079 167.701 20.142 167.467 20.142H158.395C158.395 21.006 158.503 21.762 158.719 22.41C158.899 22.968 159.205 23.49 159.637 23.976C160.033 24.426 160.483 24.75 160.987 24.948C161.527 25.164 162.103 25.272 162.715 25.272C163.363 25.272 163.885 25.209 164.281 25.083C164.659 24.957 165.037 24.804 165.415 24.624C165.811 24.426 166.081 24.282 166.225 24.192C166.459 24.048 166.639 23.976 166.765 23.976C166.963 23.976 167.116 24.057 167.224 24.219L167.899 25.11C167.647 25.434 167.287 25.74 166.819 26.028C166.279 26.37 165.838 26.595 165.496 26.703C164.956 26.883 164.47 27.009 164.038 27.081C163.498 27.171 163.003 27.216 162.553 27.216C161.617 27.216 160.744 27.054 159.934 26.73C159.16 26.424 158.467 25.947 157.855 25.299C157.279 24.705 156.829 23.94 156.505 23.004C156.181 22.086 156.019 21.042 156.019 19.872C156.019 18.936 156.172 18.054 156.478 17.226C156.784 16.38 157.207 15.66 157.747 15.066C158.305 14.454 158.98 13.977 159.772 13.635C160.564 13.293 161.446 13.122 162.418 13.122ZM162.472 14.877C161.302 14.877 160.393 15.21 159.745 15.876C159.079 16.578 158.665 17.514 158.503 18.684H165.928C165.928 18.126 165.847 17.622 165.685 17.172C165.487 16.614 165.271 16.209 165.037 15.957C164.731 15.633 164.362 15.372 163.93 15.174C163.516 14.994 163.021 14.904 162.445 14.904L162.472 14.877ZM181.782 25.272C181.908 25.29 182.007 25.353 182.079 25.461C182.151 25.551 182.187 25.659 182.187 25.785V26.946H179.379C179.217 26.946 179.028 26.91 178.812 26.838C178.686 26.802 178.596 26.658 178.542 26.406L178.272 25.11L177.192 26.001C176.886 26.253 176.526 26.469 176.112 26.649C175.716 26.829 175.32 26.964 174.924 27.054C174.564 27.144 174.078 27.189 173.466 27.189C172.962 27.189 172.476 27.108 172.008 26.946C171.45 26.748 171.045 26.532 170.793 26.298C170.469 26.01 170.199 25.632 169.983 25.164C169.785 24.75 169.686 24.21 169.686 23.544C169.686 22.968 169.83 22.446 170.118 21.978C170.442 21.456 170.928 21.006 171.576 20.628C172.296 20.214 173.16 19.89 174.168 19.656C175.212 19.422 176.526 19.305 178.11 19.305V18.252C178.11 17.19 177.876 16.38 177.408 15.822C176.94 15.264 176.265 14.985 175.383 14.985C174.807 14.985 174.312 15.066 173.898 15.228C173.43 15.408 173.088 15.57 172.872 15.714C172.764 15.786 172.638 15.867 172.494 15.957C172.368 16.029 172.233 16.11 172.089 16.2C171.891 16.344 171.684 16.416 171.468 16.416C171.27 16.416 171.126 16.38 171.036 16.308C170.928 16.218 170.838 16.11 170.766 15.984L170.334 15.228C171.036 14.544 171.846 14.004 172.764 13.608C173.592 13.248 174.564 13.068 175.68 13.068C176.49 13.068 177.174 13.194 177.732 13.446C178.344 13.716 178.839 14.058 179.217 14.472C179.613 14.886 179.919 15.426 180.135 16.092C180.333 16.686 180.432 17.388 180.432 18.198V25.029C181.296 25.209 181.746 25.308 181.782 25.326V25.272ZM178.056 20.844C176.886 20.844 175.95 20.907 175.248 21.033C174.564 21.159 173.934 21.348 173.358 21.6C172.854 21.834 172.494 22.104 172.278 22.41C172.062 22.734 171.954 23.076 171.954 23.436C171.954 23.724 172.017 24.03 172.143 24.354C172.251 24.624 172.413 24.84 172.629 25.002C172.845 25.164 173.079 25.281 173.331 25.353C173.637 25.443 173.934 25.488 174.222 25.488C174.582 25.488 174.96 25.443 175.356 25.353C175.716 25.263 176.049 25.146 176.355 25.002C176.625 24.876 176.922 24.678 177.246 24.408C177.426 24.264 177.696 24.012 178.056 23.652V20.844ZM189.684 13.068C191.196 13.068 192.438 13.608 193.41 14.688V9.072L191.601 8.748C191.331 8.694 191.196 8.532 191.196 8.262V7.074H195.786V25.002C196.686 25.164 197.208 25.272 197.352 25.326C197.604 25.38 197.73 25.542 197.73 25.812V27H194.382C194.058 27 193.842 26.829 193.734 26.487L193.518 24.84C192.24 26.388 190.71 27.162 188.928 27.162C187.326 27.162 186.066 26.568 185.148 25.38C184.212 24.138 183.744 22.41 183.744 20.196C183.744 18.126 184.275 16.434 185.337 15.12C186.435 13.752 187.884 13.068 189.684 13.068ZM189.738 25.245C191.16 25.245 192.384 24.552 193.41 23.166V16.578C192.6 15.498 191.547 14.958 190.251 14.958C188.937 14.958 187.938 15.408 187.254 16.308C186.57 17.208 186.228 18.504 186.228 20.196C186.228 22.77 186.894 24.354 188.226 24.948C188.64 25.128 189.135 25.218 189.711 25.218L189.738 25.245ZM227.708 9.612V25.002C228.572 25.164 229.085 25.272 229.247 25.326C229.535 25.38 229.679 25.542 229.679 25.812V27H223.199V25.812C223.199 25.542 223.334 25.38 223.604 25.326L225.413 25.002V12.771C225.413 12.213 225.431 11.79 225.467 11.502L218.825 23.598C218.609 24.012 218.303 24.219 217.907 24.219H217.529C217.097 24.219 216.773 24.012 216.557 23.598L209.834 11.529C209.888 11.979 209.915 12.384 209.915 12.744V25.002L211.751 25.326C211.985 25.38 212.102 25.542 212.102 25.812V27H205.649V25.812C205.649 25.542 205.793 25.38 206.081 25.326L207.593 25.002V9.612C206.765 9.45 206.261 9.342 206.081 9.288C205.793 9.234 205.649 9.072 205.649 8.802V7.614H209.537C209.789 7.614 209.969 7.641 210.077 7.695C210.239 7.767 210.356 7.884 210.428 8.046L217.097 19.98C217.259 20.268 217.466 20.736 217.718 21.384C217.862 20.97 218.069 20.493 218.339 19.953L224.873 8.046C224.945 7.902 225.071 7.785 225.251 7.695C225.359 7.641 225.539 7.614 225.791 7.614H229.679V8.802C229.679 9.072 229.535 9.234 229.247 9.288L227.708 9.612ZM237.89 13.122C238.88 13.122 239.78 13.284 240.59 13.608C241.382 13.932 242.075 14.4 242.669 15.012C243.227 15.588 243.659 16.326 243.965 17.226C244.271 18.108 244.424 19.08 244.424 20.142C244.424 21.204 244.271 22.176 243.965 23.058C243.659 23.958 243.227 24.696 242.669 25.272C242.075 25.884 241.382 26.352 240.59 26.676C239.78 27 238.88 27.162 237.89 27.162C236.9 27.162 236 27 235.19 26.676C234.398 26.352 233.705 25.884 233.111 25.272C232.571 24.714 232.13 23.976 231.788 23.058C231.5 22.284 231.356 21.312 231.356 20.142C231.356 18.972 231.5 18 231.788 17.226C232.13 16.308 232.571 15.57 233.111 15.012C233.705 14.4 234.398 13.932 235.19 13.608C236 13.284 236.9 13.122 237.89 13.122ZM237.89 25.326C239.276 25.326 240.284 24.876 240.914 23.976C241.58 23.04 241.913 21.771 241.913 20.169C241.913 18.567 241.58 17.298 240.914 16.362C240.284 15.462 239.276 15.012 237.89 15.012C237.188 15.012 236.594 15.12 236.108 15.336C235.64 15.552 235.226 15.894 234.866 16.362C234.524 16.83 234.272 17.37 234.11 17.982C233.93 18.702 233.84 19.44 233.84 20.196C233.84 20.916 233.93 21.636 234.11 22.356C234.272 22.968 234.524 23.508 234.866 23.976C235.172 24.39 235.586 24.714 236.108 24.948C236.684 25.2 237.278 25.326 237.89 25.326ZM250.454 16.119C251.462 14.085 252.848 13.068 254.612 13.068C255.314 13.068 255.935 13.23 256.475 13.554L256.178 15.363C256.124 15.597 256.007 15.714 255.827 15.714C255.701 15.714 255.485 15.669 255.179 15.579C254.873 15.489 254.504 15.444 254.072 15.444C252.488 15.444 251.318 16.398 250.562 18.306V25.056L252.101 25.353C252.371 25.407 252.506 25.578 252.506 25.866V27H246.215V25.866C246.215 25.578 246.35 25.407 246.62 25.353L248.159 25.056V15.309C247.295 15.147 246.782 15.039 246.62 14.985C246.35 14.931 246.215 14.76 246.215 14.472V13.338H249.536C249.788 13.338 249.959 13.383 250.049 13.473C250.139 13.563 250.211 13.734 250.265 13.986L250.427 16.119H250.454ZM263.686 13.122C264.478 13.122 265.225 13.257 265.927 13.527C266.647 13.797 267.241 14.184 267.709 14.688C268.249 15.264 268.645 15.903 268.897 16.605C269.185 17.415 269.329 18.279 269.329 19.197C269.329 19.611 269.293 19.863 269.221 19.953C269.131 20.079 268.969 20.142 268.735 20.142H259.663C259.663 21.006 259.771 21.762 259.987 22.41C260.167 22.968 260.473 23.49 260.905 23.976C261.301 24.426 261.751 24.75 262.255 24.948C262.795 25.164 263.371 25.272 263.983 25.272C264.631 25.272 265.153 25.209 265.549 25.083C265.927 24.957 266.305 24.804 266.683 24.624C267.079 24.426 267.349 24.282 267.493 24.192C267.727 24.048 267.907 23.976 268.033 23.976C268.231 23.976 268.384 24.057 268.492 24.219L269.167 25.11C268.915 25.434 268.555 25.74 268.087 26.028C267.547 26.37 267.106 26.595 266.764 26.703C266.224 26.883 265.738 27.009 265.306 27.081C264.766 27.171 264.271 27.216 263.821 27.216C262.885 27.216 262.012 27.054 261.202 26.73C260.428 26.424 259.735 25.947 259.123 25.299C258.547 24.705 258.097 23.94 257.773 23.004C257.449 22.086 257.287 21.042 257.287 19.872C257.287 18.936 257.44 18.054 257.746 17.226C258.052 16.38 258.475 15.66 259.015 15.066C259.573 14.454 260.248 13.977 261.04 13.635C261.832 13.293 262.714 13.122 263.686 13.122ZM263.74 14.877C262.57 14.877 261.661 15.21 261.013 15.876C260.347 16.578 259.933 17.514 259.771 18.684H267.196C267.196 18.126 267.115 17.622 266.953 17.172C266.755 16.614 266.539 16.209 266.305 15.957C265.999 15.633 265.63 15.372 265.198 15.174C264.784 14.994 264.289 14.904 263.713 14.904L263.74 14.877Z"
          fill="white"
          fillOpacity="0.45"
        />
        <path d="M178 40L204 51L230 40" stroke="white" stroke-opacity="0.35" stroke-width="2" />
      </chakra.svg>
    </Box>
  );
}
