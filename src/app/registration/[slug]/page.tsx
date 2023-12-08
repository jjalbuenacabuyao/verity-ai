import client from "@/app/libs/prismadb";
import { Registration } from "@/components/registration";
import { AccessDenied } from "@/components/utilities";
import React from "react";

type Param = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: Param) => {
  const registrationToken = await client.registrationTokens.findFirst({
    where: {
      registrationToken: params.slug,
    },
  });

  const tokenExpiration = new Date(registrationToken?.expiration!);

  if (registrationToken === null || tokenExpiration < new Date()) {
    return <AccessDenied />;
  }

  return (
    <Registration />
  )
};

export default page;
