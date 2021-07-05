/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import styles from "../styles/hero.module.sass";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/bison_logo.png";

const SCROLL_DISTANCE = 30;
const TRANSITION_DURATION = "450ms";

export default function Navigation() {
    let [scrollDistance, setScrollDistance] = useState(0);
    useEffect(() => {
        let windowWidth = window.innerWidth;
        if (windowWidth > 900) {
            // @ts-ignore
            setScrollDistance(window.document.querySelector("body")?.getClientRects()[0].y * -1);
        } else {
            setScrollDistance(0);
        }
        window.addEventListener("scroll", event => {
            if (window.innerWidth > 900) {
                let distance =
                    -1 * (window.document.querySelector("body")?.getClientRects()[0].y || 0);
                setScrollDistance(distance);
                // console.log(distance);
            } else {
                setScrollDistance(0);
            }
        });
    }, []);
    return (
        <>
            <div
                className={
                    scrollDistance > SCROLL_DISTANCE
                        ? styles.gradientBackground
                        : styles.gradientBackgroundInactive
                }>
                <div
                    className={`${styles.navigation} ${
                        scrollDistance > SCROLL_DISTANCE ? styles.compact : ""
                    }`}>
                    <div className={styles.logo}>
                        <div className={"logoContainer"}>
                            <Image
                                layout={"responsive"}
                                src={logo}
                                alt={"DDI Logo"}
                                priority={true}
                            />
                        </div>
                        <h2>Dakota Debate Institute</h2>
                    </div>
                    <div className={styles.menu}>
                        <a className={styles.link} href="#people">
                            Our Team
                        </a>
                        <a className={styles.link} href="#faq">
                            FAQ
                        </a>
                        <a className={styles.link} href="#history">
                            History
                        </a>
                        <a className={styles.link} href="#contact">
                            Contact Us
                        </a>
                        {/*<a className={`${styles.link}`} href="/login">*/}
                        {/*    Login*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>

            {<div className={scrollDistance > 300000 ? "spacer" : "spacer-default"} />}
            <style jsx>{`
                * {
                    transition-duration: ${TRANSITION_DURATION} !important;
                }

                h2 {
                    font-family: "Mate SC", serif;
                    color: white;
                    font-size: min(8.1vw, 100px);
                    position: absolute;
                    top: 175px;
                    left: 50%;
                    transform: translateX(-50%);
                    transition-duration: 500ms;
                    display: inline;
                    margin: 0;
                    white-space: nowrap;
                }

                .logoContainer {
                    width: 300px;
                    position: absolute;
                    left: 50%;
                    top: -50px;
                    transition-duration: 500ms;
                    transform: translateX(-50%);
                }

                .${styles.compact} .logoContainer {
                    width: 150px;
                    margin: 0;
                    left: 5%;
                    transform: translateX(0);
                    top: -30px;
                }

                .${styles.compact} h2 {
                    top: 7px;
                    left: calc(5% + 165px);
                    transform: translateX(0);
                }

                .spacer {
                    height: 300px;
                }

                .spacer-default {
                    height: 300px;
                }
            `}</style>
        </>
    );
}
