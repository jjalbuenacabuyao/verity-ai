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
import { FormEvent, useState } from "react";
import bcrypt from "bcrypt";

type Props = {};

const LogInModal = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hashedPassword = await bcrypt.hash(password, 12);

    const formData = {
      email: email,
      hashedPassword: hashedPassword
    }
  };

  return (
    <Root>
      <Trigger asChild>
        <button>Login</button>
      </Trigger>
      <Portal>
        <Overlay className={style.DialogOverlay} />
        <Content className={style.DialogContent}>
          <Title>Login your account</Title>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <LogInButton />
          </form>
        </Content>
      </Portal>
    </Root>
  );
};

export default LogInModal;
