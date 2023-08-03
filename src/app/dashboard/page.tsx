"use client";

import { AddUserModal, Searchbar, UserTable } from "@/components";
import { workSans } from "@/fonts";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "@/types";

const Dashboard = () => {
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllUsers() {
    const fetchedUsers: UserType[] | null = await axios("/api/users").then(
      (res) => res.data
    );
    setUsers(fetchedUsers);
    setIsLoading(false)
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="mx-6 pt-24 lg:mx-16 lg:pt-28">
      <div className="flex items-center justify-between">
        <h1
          className={`${workSans.className} text-2xl font-bold tracking-wide`}>
          Dashboard
        </h1>
        <Searchbar />
      </div>

      <div className="mt-5 lg:grid lg:grid-cols-[1fr_2.5fr] lg:gap-10">
        <aside className="mb-6 lg:mb-0">
          <div className="rounded-xl bg-blue-500 text-center text-white py-14">
            <p
              aria-describedby="title"
              className={`${workSans.className} text-3xl font-bold`}>
              {users ? users.length : 0}
            </p>
            <p id="title" className="font-bold">
              Users
            </p>
          </div>
        </aside>
        {!isLoading && users && <UserTable users={users} />}
      </div>
    </div>
  );
};

export default Dashboard;
