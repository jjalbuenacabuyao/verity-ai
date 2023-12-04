import client from "@/app/libs/prismadb";
import { AccessDenied } from "@/components/utilities";
import ForgotPasswordForm from "@/components/utilities/ForgotPasswordForm";
import React from "react";

type Param = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: Param) => {
  const tokenExist = await client.user.findFirst({
    where: {
      resetPasswordToken: {
        token: params.slug,
      },
    },
    include: {
      resetPasswordToken: true,
    },
  });

  const id = tokenExist?.id!;

  const tokenExpiration = new Date(tokenExist?.resetPasswordToken?.expiration!);

  if (tokenExist === null || tokenExpiration < new Date()) {
    return <AccessDenied />;
  }

  return <ForgotPasswordForm id={id} />;
};

export default page;
