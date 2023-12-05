import Image from "next/image";
import React from "react";

type Props = {
  user: {
    name: string;
    designation: string;
    imageSrc: string;
    email: string;
  };
};

const Profile = ({ user }: Props) => {
  return (
    <div className="flex">
      <Image
        src={user.imageSrc}
        width={32}
        height={32}
        alt={`Image of ${user.name}`}
      />
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p>{user.name}</p>
          <p>{user.designation}</p>
        </div>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
