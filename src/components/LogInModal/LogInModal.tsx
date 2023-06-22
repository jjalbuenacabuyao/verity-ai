import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
} from "@radix-ui/react-dialog";
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
        <Overlay className="fixed inset-0 z-20 animate-overlayShow bg-black/[0.44]" />
        <Content className="animate-contentShow fixed left-1/2 top-1/2 z-20 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-dialog-content">
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
