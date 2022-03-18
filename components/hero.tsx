import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/hero.module.sass";
import React, { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import particlesConfig from "./particles.config";
import wideLogo from "../public/wide logo.png";
import { Box, Link } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box width={"full"} height={"100vh"} bg={"blackAlpha.900"}>
      <h1>Testing</h1>
    </Box>
  );
}
