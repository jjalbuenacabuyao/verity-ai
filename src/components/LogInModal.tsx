"use client";

import { Portal, Overlay, Content, Title } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";
import { signIn, getSession } from "next-auth/react";
import Button from "./Button";
import InputField from "./InputField";
import { workSans } from "@/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LogInModal = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: { email: string; password: string } = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
    } else {
      const session = await getSession();
      if (session?.user.role === "ADMIN") {
        router.push("/dashboard");
        router.refresh();
      } else {
        router.push("/detector");
        router.refresh();
      }
    }
  };

  return (
    <Portal>
      <Overlay className="fixed inset-0 z-20 animate-overlayShow bg-black/[0.44]" />
      <Content className="fixed left-1/2 top-1/2 z-20 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow overflow-auto rounded-md bg-white p-8 shadow-dialog-content">
        <Image
          src="/logo.svg"
          width={40}
          height={44}
          alt="VerityAI"
          className="mx-auto mb-2"
        />
        <Title className={`${workSans.className} mb-12 text-center text-2xl`}>
          Log in your account
        </Title>
        <form onSubmit={handleSubmit}>
          <fieldset className="text-right">
            <InputField
              type="email"
              id="email"
              name="email"
              required
              label="Email Address"
              error={error === "User does not exist" ? error : ""}
            />

            <InputField
              type="password"
              id="password"
              name="password"
              required
              label="Password"
              error={error === "Incorrect password" ? error : ""}
            />

            <Button
              text="Log in"
              variant="primary"
              type="submit"
              onClick={() => setError("")}
            />
          </fieldset>
        </form>
      </Content>
    </Portal>
  );
};

export default LogInModal;
