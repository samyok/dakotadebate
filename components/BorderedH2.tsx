/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import React from "react";

interface opts {
    children: string;
    nomargin?: boolean;
}

export default function BorderedH2({ children, nomargin }: opts) {
    // let {children} = props;
    return (
        <div>
            <h2>{children}</h2>
            <svg
                width="318"
                height="13"
                viewBox="0 0 318 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.148L159 13L318 5.148V0H0V5.148Z" fill="#4D31AC" />
            </svg>
            <style jsx>
                {`
                    h2 {
                        text-align: center;
                        color: #4d31ac;
                        font-size: min(5.5rem, 10vw);
                        ${!nomargin ? "margin: 150px 0 0 0;" : "margin: 0"}
                    }
                    @media screen and (max-width: 900px) {
                        h2 {
                            margin: 100px 0 0 0;
                        }
                    }
                    div {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                    }
                    svg {
                        margin-top: -5px;
                        width: 20vw;
                    }
                `}
            </style>
        </div>
    );
}
