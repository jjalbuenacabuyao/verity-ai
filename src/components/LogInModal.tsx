"use client";

import { Portal, Overlay, Content, Title } from "@radix-ui/react-dialog";
import { FormEvent, useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import Button from "./Button";
import InputField from "./InputField";
import { workSans } from "@/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useNavOpenContext } from "@/hooks/navOpenContext";
import { TailSpin } from "react-loader-spinner";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogInModal = ({ setIsOpen }: Props) => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navOpenContext = useNavOpenContext();
  const setNavOpen = navOpenContext!.updater;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: { email: string; password: string } = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };

    setIsLoading(true);
    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
    } else {
      router.push("/detector");
      setNavOpen(false);
      router.refresh();
    }
  };

  useEffect(() => {
    if (error !== "") {
      setIsLoading(false);
    }
  }, [error]);

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
          <fieldset className="flex flex-col">
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
              variant="primary"
              type="submit"
              className={`self-end ${
                isLoading
                  ? "pointer-events-none flex h-10 w-24 items-center justify-center"
                  : ""
              }`}
              onClick={() => setError("")}>
              {isLoading ? (
                <TailSpin
                  height="24"
                  width="24"
                  color="#fff"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                <span>Log in</span>
              )}
            </Button>
          </fieldset>
        </form>
      </Content>
    </Portal>
  );
};

export default LogInModal;
