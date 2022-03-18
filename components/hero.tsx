import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/hero.module.sass";
import React, { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import particlesConfig from "./particles.config";
import wideLogo from "../public/wide logo.png";
import { Box, Link } from "@chakra-ui/react";

type HeroParams = {
  navRef: any;
};

export default function Hero({ navRef }: HeroParams) {
  const [navHeight, setNavHeight] = useState(50);
  useEffect(() => {
    if (navRef && navRef?.current) {
      setNavHeight(navRef.current.getClientRects()[0].height);
    }
  }, [navRef]);
  return (
    <Box width={"full"} height={"100vh"} mb={`-${navHeight}px`} bg={"blackAlpha.900"} pos={"relative"}>
      <Image
        alt="DDI 2021 Final Round Zoom Picture"
        src="/assets/2021-final-round.png"
        layout="fill"
        objectFit="cover"
      />
      <Box bg={"rgba(0,0,0,.8)"} pos={"absolute"} top={0} left={0} width={"full"} height={"full"} />
    </Box>
  );
}
