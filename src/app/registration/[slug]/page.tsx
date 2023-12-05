import client from "@/app/libs/prismadb";
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

  return <div>page</div>;
};

export default page;
