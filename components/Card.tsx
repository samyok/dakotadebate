/*
 * Copyright (c) 2021 Samyok Nepal.
 */
import React from "react";
import { Text } from "@chakra-ui/react";

interface CardProps {
  image?: JSX.Element;
  children: React.ReactNode;
  title?: string;
  radius?: string;
}

export default function Card({ radius, image, children, title }: CardProps) {
  return (
    <div className={"card"}>
      <div className={"third"}>
        {!!image && <div className={"image"}>{image}</div>}
        {title && <h3>{title}</h3>}
      </div>
      <Text fontSize={"sm"} flexGrow={1} mx={10}>
        {children}
      </Text>
      <style jsx>{`
        .card {
          display: flex;
          align-items: center;
          box-shadow: rgba(122, 102, 203, 0.1) 1px 2px 8px 1px;
          border-radius: ${radius ?? "25px"};
          padding: 0 25px 20px 25px;
          margin: 20px;
          justify-content: center;
        }

        @media screen and (max-width: 850px) {
          .card {
            flex-wrap: wrap;
            padding: 20px 0px;
            margin: 20px 10px;
          }
        }

        h3 {
          margin: 0 0 15px 0;
          text-align: center;
          font-size: 20px;
          width: 200px;
          max-width: 100%;
        }

        .image {
          border-radius: 150px;
          overflow: hidden;
          margin-bottom: 20px;
          height: 100px;
          width: 100px;
        }
        .third {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
