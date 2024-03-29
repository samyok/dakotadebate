/*
 * Copyright (c) 2021 Samyok Nepal.
 */

import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { InputControl } from "formik-chakra-ui";
import { initialValues, pages, QuestionTypes } from "./registrationQuestions";

interface RegistrationFormProps {
  onDone: (done: boolean) => void;
  data: QuestionTypes | null;
}

export default function RegistrationForm({ onDone, data }: RegistrationFormProps) {
  const [page, setPage] = useState(0);
  const [, setLoading] = useState(false);
  const lastPage = page === pages.length - 1;
  return (
    <div className={"mainContent"}>
      <h3>{pages[page].title}</h3>
      <Formik
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        initialValues={{ ...initialValues, ...data }}
        onSubmit={(values: QuestionTypes) => {
          setLoading(true);
          if (lastPage) {
            fetch("/api/register", {
              method: "POST",
              body: JSON.stringify({ ...values, page }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((r) => r.json())
              .then(() => {
                setLoading(false);
                onDone(true);
              });
          } else {
            fetch("/api/partialRegistrations", {
              method: "POST",
              body: JSON.stringify({ ...values, page }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((r) => r.json())
              .then(() => {
                setLoading(false);
                setPage((p) => p + 1);
              });
          }
        }}>
        <Form
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <Box
            borderWidth={"1px"}
            rounded={"lg"}
            shadow={"1px 1px 3px rgba(0,0,0,0.3)"}
            maxWidth={800}
            flexGrow={1}
            background={"white"}
            p={6}
            m={"10px 10px"}>
            <Stack spacing={7}>
              {pages[page].data.map((question) => (
                <InputControl
                  key={JSON.stringify(question)}
                  name={question.name}
                  label={question.label}
                  isRequired
                  inputProps={{ placeholder: question.placeholder }}
                />
              ))}
              <Button
                loadingText={"Loading"}
                colorScheme={"purple"}
                variant={lastPage ? "solid" : "outline"}
                type={"submit"}>
                {lastPage ? "Submit" : "Next Page"}
              </Button>
            </Stack>
          </Box>
        </Form>
      </Formik>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .mainContent {
          margin: 5px;
          background-color: white;
        }

        h3 {
          text-align: center;
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 35px;
          margin-top: 30px;
          margin-bottom: 10px;
        }

        label,
        input,
        input::placeholder,
        select {
          font-family: "Inter", sans-serif;
        }

        label {
          font-weight: 300;
        }

        .main {
          padding: 10px 10%;
        }
      `}</style>
    </div>
  );
}
