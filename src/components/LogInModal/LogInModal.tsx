import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
} from "@radix-ui/react-dialog";
import style from "./loginmodal.module.css";
import LogInButton from "../LogInButton/LogInButton";
import { FormEvent } from "react";

const LogInModal = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/loginHandler";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
  };

  return (
    <Root>
      <Trigger asChild>
        <button>Login</button>
      </Trigger>
      <Portal>
        <Overlay className="fixed inset-0 z-20 bg-black/[0.44]" />
        <Content className={style.DialogContent}>
          <Title>Login your account</Title>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </fieldset>

            <fieldset>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required />
            </fieldset>

            <LogInButton />
          </form>
        </Content>
      </Portal>
    </Root>
  );
};

export default LogInModal;
