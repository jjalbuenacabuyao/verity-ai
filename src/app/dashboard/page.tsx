"use client";

import { AddUserModal, Searchbar, UserTable } from "@/components";
import { workSans } from "@/fonts";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "@/types";
import { Name, User } from "@prisma/client";

const Dashboard = () => {
  // UserType[] | null
  const [users, setUsers] = useState<
    (User & {
      name: Name | null;
    })[] | null
    >();
  
  const [isLoading, setIsLoading] = useState(true);
  const [numOfUsers, setNumOfUsers] = useState<number>(0)
  const [page, setPage] = useState(2);

  async function getTotalUsers() {
    const fetchedUsers: number = await axios("/api/totalusers").then(
      (res) => res.data
    );
    setNumOfUsers(fetchedUsers);
  }

  useEffect(() => {
    getTotalUsers();
    async function fetchUsers() {
      const fetchedUsers = await axios(`/api/users?page=${page}`).then(res => res.data);
      setUsers(fetchedUsers)
      setIsLoading(false)
    }

    fetchUsers();
  }, [page]);

  return (
    <div className="mx-6 pb-10 pt-24 lg:mx-16 lg:pb-0 lg:pt-28">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1
          className={`${workSans.className} mb-5 text-center text-2xl font-bold lg:mb-0 lg:text-left`}>
          Dashboard
        </h1>
        <Searchbar />
      </div>

      <div className="mt-5 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-7">
        <aside className="mb-6 lg:mb-0">
          <div className="rounded-xl bg-blue-500 py-14 text-center text-white">
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
        {!isLoading && users ? <UserTable users={users} /> : <p>No users</p>}
      </div>
    </div>
  );
};

export default Dashboard;
