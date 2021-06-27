/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import BorderedH2 from "./BorderedH2";
import { EnvelopeFill, Instagram, Twitter } from "react-bootstrap-icons";

export default function ContactUsForm() {
    return (
        <div className={"container"} id="contact">
            <BorderedH2 nomargin>Contact Us</BorderedH2>
            <div className="center">
                <a href="https://twitter.com/debatedakota">
                    <Twitter size={70} color={"#4937b8"} />
                </a>
                <a href="mailto:staff@dakotadebate.org">
                    <EnvelopeFill size={70} color={"#4937b8"} />
                </a>
                <a href="https://instagram.com/dakotadebate">
                    <Instagram size={70} color={"#4937b8"} />
                </a>
            </div>
            <div className="footer">Copyright &copy; Dakota Debate Institute 2021</div>
            <style jsx>{`
                .container {
                    background-color: #e5dcff;
                    margin-top: 75px;
                    padding-top: 75px;
                    padding-bottom: 95px;
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
                    padding: 10px;
                    width: 100%;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}
