import React, { FC, FormEvent, useState } from "react";
import { render } from "react-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import { InputField, Form, TextAreaField } from "./lib";
import { IAppearance } from "@redwallsolutions/common-interfaces-ts";
import { Md3DRotation } from "react-icons/md";

const theming = createThemeWithAppearance();

const Reset = createGlobalStyle<any>`
    body {
		font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
        padding: 0;
        margin: 0;
        background-color: ${(props) => theming(props).contrast};
        color: ${(props) => theming(props).color};
        &, * {
            box-sizing: border-box;
            transition: .3s;
        }
    }
`;

Reset.defaultProps = {
  appearance: "default",
} as any;

const Container = styled.div`
  height: 100vw;
  padding: 10px;
  margin: 0;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
`;

const App: FC = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [appearance, setAppearance] = useState("default");

  const onChange = (event: FormEvent) => {
    let currentTarget = event.currentTarget;
    let inputName = currentTarget.attributes.getNamedItem("name").nodeValue;
    if (inputName === "mode") {
      setThemeMode(currentTarget.id);
    } else {
      setAppearance(currentTarget.id);
    }
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Container>
        <Reset appearance={appearance} />
        <InputsContainer>
          <InputItem>
            <label htmlFor="light">Mode Light</label>
            <input type="radio" id="light" onChange={onChange} name="mode" />
          </InputItem>
          <InputItem>
            <label htmlFor="dark">Mode Dark</label>
            <input type="radio" id="dark" onChange={onChange} name="mode" />
          </InputItem>
          <InputItem>
            <label htmlFor="default">Appearance Default</label>
            <input
              type="radio"
              id="default"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
          <InputItem>
            <label htmlFor="primary">Appearance Primary</label>
            <input
              type="radio"
              id="primary"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
          <InputItem>
            <label htmlFor="secondary">Appearance Secondary</label>
            <input
              type="radio"
              id="secondary"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
        </InputsContainer>
        <div style={{ marginTop: "2em" }}>
          <Form onSubmit={console.log}>
            <InputField
              label="Something"
              field="something"
              appearance={appearance as IAppearance}
              required
            />
            <InputField
              label="Password"
              field="password"
              type="password"
              appearance={appearance as IAppearance}
            />
            <InputField
              label="Can't be 2 (Custom Validator)"
              field="cantbetwo"
              appearance={appearance as IAppearance}
              validate={(value: any) =>
                value && value === "2" ? "Can't be 2" : undefined
              }
            />
            <InputField
              label="I have initial value"
              field="initialvalue"
              appearance={appearance as IAppearance}
              initialValue="I <3 RW"
            />
            <InputField
              label="Leading Icon"
              field="leadingIcon"
              appearance={appearance as IAppearance}
              leading={<Md3DRotation size={20} />}
            />
            <InputField
              label="CPF"
              field="cpf"
              appearance={appearance as IAppearance}
              maskType="cpf"
            />
            <InputField
              label="Money"
              field="money"
              appearance={appearance as IAppearance}
              maskType="money"
            />
            <InputField
              label="Simple Month Year"
              field="simplemonthyear"
              appearance={appearance as IAppearance}
              maskType="simpleMonthYear"
            />
            <InputField
              label="CVC"
              field="cvc"
              appearance={appearance as IAppearance}
              maskType="cvc"
            />
            <InputField
              label="hidden"
              type="hidden"
              field="hidden"
              initialValue={1}
            />

            <div style={{ width: 100 }}>
              <InputField
                label="Very small field"
                field="verySmall"
                shouldFitContainer
                isMultiline
              />
            </div>
            <TextAreaField field="textArea" label="hdua" required />
            <button type="submit">Submit</button>
          </Form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

render(<App />, document.querySelector("#app"));
