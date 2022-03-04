/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import BorderedH2 from "./BorderedH2";
import { EnvelopeFill, Instagram, Twitter, Facebook } from "react-bootstrap-icons";
import Link from "next/link";

export default function ContactUsForm() {
    const year = new Date().getFullYear();
    return (
        <div className={"container"} id="contact">
            <BorderedH2 nomargin>Contact Us</BorderedH2>
            <div className="center">
                <a href="mailto:staff@dakotadebate.org">
                    <EnvelopeFill size={70} color={"#4937b8"} />
                </a>
                <a href="https://instagram.com/dakotadebate">
                    <Instagram size={70} color={"#4937b8"} />
                </a>
                <a href="https://twitter.com/debatedakota">
                    <Twitter size={70} color={"#4937b8"} />
                </a>
                <a href="https://facebook.com/dakotadebate">
                    <Facebook size={70} color={"#4937b8"} />
                </a>
            </div>
            <div className="footer">
                Dakota Debate Inc is a 501(c)(3) nonprofit organization (EIN 87-3383622). Donations are tax-deductible. &copy;{year} Dakota Debate Inc
            </div>
            <style jsx>{`
                .container {
                    background-color: #e5dcff;
                    margin-top: 75px;
                    padding-top: 75px;
                    padding-bottom: 145px;
                    position: relative;
                }

                @media screen and (max-width: 900px) {
                    .container {
                        padding-top: 20px;
                        margin-top: 30px;
                    }
                }

                .center {
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                a {
                    display: block;
                    margin: 15px 40px;
                }

                a:hover {
                    opacity: 70%;
                }

                .footer {
                    background: #1f134e;
                    color: #713fce;
                    font-family: "Inter", sans-serif;
                    font-weight: 300;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    padding: 20px 10px;
                    width: 100%;
                    text-align: center;
                    font-size: 13px;
                }
                .footer .link {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}
