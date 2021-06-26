/*
 * Copyright (c) 2021 Samyok Nepal.
 */
import React from "react";

interface props {
    image?: JSX.Element;
    children: React.ReactNode;
    title?: string;
    width?: string;
    radius?: string;
}

export default function Card({ radius, image, children, title, width }: props) {
    return (
        <div className={"card"}>
            <div className="third">
                {title && <h3>{title}</h3>}
                {!!image && <div className="image">{image}</div>}
            </div>
            <p>{children}</p>
            <style jsx>{`
                .card {
                    display: flex;
                    align-items: center;
                    box-shadow: rgba(122, 102, 203, 0.4) 4px 4px 15px 5px;
                    border-radius: ${radius ?? "25px"};
                    padding: 25px;
                    max-width: ${width ?? "800px"};
                    margin: 20px;
                    justify-content: center;
                }

                @media screen and (max-width: 850px) {
                    .card {
                        flex-wrap: wrap;
                        padding: 20px 0px;
                        margin: 20px 0;
                    }
                }

                h3 {
                    font-family: "Inter", "Aleo", "Merriweather", sans-serif;
                    margin: 0;
                    text-align: center;
                    font-size: 30px;
                    margin-bottom: 15px;
                }

                p {
                    font-family: "Inter", "Aleo", "Merriweather", sans-serif;
                    font-weight: 200;
                    margin: 0 30px;
                    font-size: 17px;
                }

                .image {
                    border-radius: 150px;
                    overflow: hidden;
                    margin-bottom: 20px;
                    height: 250px;
                    width: 250px;
                    min-width: 150px;
                    min-height: 150px;
                }
            `}</style>
        </div>
    );
}
