import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/hero.module.sass";
import React, { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import particlesConfig from "./particles.config";
import wideLogo from "../public/wide logo.png";
import { Link } from "@chakra-ui/react";

export default function Hero() {
    useEffect(() => {
        window.document.getElementById("particles")?.addEventListener("load", () => {
            // @ts-ignore
            if (!window.particlesJS) return console.log(window.particlesJS);
            // @ts-ignore
            window.particlesJS("particles-js", particlesConfig);
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <svg
                    width="100vw"
                    height="max(90vh, 900px)"
                    viewBox="0 0 2622 1264"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M145.667 1245.99L0 1236.31V-1145H2622V1236.31L2476.33 1216.76C2330.67 1197.94 2039.33 1157.75 1748 1168.16C1456.67 1177.85 1165.33 1236.31 874 1255.85C582.667 1274.67 291.333 1256.4 145.667 1245.99Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="2376.75"
                            y1="360.621"
                            x2="553.261"
                            y2="243.564"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#52A5B7" />
                            <stop offset="1" stopColor="#7045EA" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className={styles.textboxes}
                    width="1144"
                    height="801"
                    viewBox="0 0 1144 801"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 195C0 157.445 30.4446 127 68 127H759C796.555 127 827 157.445 827 195V615.014C827 652.569 796.555 683.014 759 683.014H249.472C236.179 683.014 223.177 686.91 212.075 694.22L51.885 799.699C51.8818 799.701 51.8787 799.703 51.8759 799.706C49.7278 801.753 46.3218 799.37 47.5081 796.65L96.6771 683.943C96.8685 683.505 96.5471 683.014 96.0686 683.014H38.414C17.1986 683.014 0 665.815 0 644.6V195Z"
                        fill="white"
                        fillOpacity="0.04"
                    />
                    <path
                        d="M1144 67.9999C1144 30.4446 1113.56 0 1076 0H389C351.445 0 321 30.4446 321 68V496.982C321 534.537 351.445 564.982 389 564.982H895.28C908.795 564.982 922.004 569.009 933.22 576.55L1092.37 683.549C1092.37 683.551 1092.37 683.554 1092.38 683.556C1094.5 685.624 1097.93 683.272 1096.76 680.545L1047.78 565.911C1047.6 565.471 1047.92 564.982 1048.4 564.982H1105.58C1126.8 564.982 1144 547.781 1144 526.562V67.9999Z"
                        fill="white"
                        fillOpacity="0.04"
                    />
                </svg>

                <div id="particles-js" className={styles.particles} />
                <Script
                    id={"particles"}
                    src={"https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"}
                />
            </div>
            <div className={styles.hero}>
                <h1>Debate camps can be really expensive. DDI is not.</h1>
                <div className={styles.btn}>
                    <Link href={"/enroll"}>
                        <a className={styles.button}>Reserve your spot now!</a>
                    </Link>
                    <p>June 25-30, 2022</p>
                    <p>Hybrid: SDSU or Online</p>
                </div>
                <div className={styles.btn}>
                    {/*<Link href={"/enroll"}>*/}
                    {/*    <a className={styles.button}></a>*/}
                    {/*</Link>*/}
                    {/*<p>Registration closed for 2021</p>*/}
                    {/*<p>2022 registration will open this winter!</p>*/}
                </div>
            </div>
        </div>
    );
}
