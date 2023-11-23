"use client";

import { workSans } from "@/fonts";
import { UserType } from "@/types";
import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import AddUserButton from "./AddUserButton";
import UserTable from "./UserTable";
import axios from "axios";

interface Props {
  totalUsers: number;
  currentUserEmail: string;
}

/**
 * Renders the contents of a dashboard, including a search bar, user table, and statistics.
 * Fetches a list of users from an API and updates the UI accordingly.
 *
 * @component
 *
 * @param {number} totalUsers - The total number of users.
 * @param {string} currentUserEmail - The email of the current logged in user.
 * @returns {JSX.Element} - The rendered dashboard contents.
 */
const DashboardContents = ({ totalUsers, currentUserEmail }: Props) => {
  const [users, setUsers] = useState<UserType>([]);
  const [userAdded, setUserAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userDeleted, setUserDeleted] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);
      const fetchedUsers: UserType = await axios(
        `/api/users?page=${page}&search=${search}&useremail=${currentUserEmail}`
      ).then((res) => res.data);
      setUsers(fetchedUsers);
      setIsLoading(false);
    }

    fetchUsers();
  }, [search, page, userAdded, userDeleted, currentUserEmail]);

  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1
          className={`${workSans.className} mb-5 text-center text-2xl font-bold lg:mb-0 lg:text-left`}
        >
          Dashboard
        </h1>
        <Searchbar className="hidden lg:block" setSearch={setSearch} />
      </div>

      <div className="mt-5 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-7">
        <aside className="mb-6 flex flex-col gap-4 lg:mb-0">
          <div className="rounded-xl bg-blue-500 py-10 text-center text-white">
            <p
              aria-describedby="title"
              className={`${workSans.className} text-4xl font-bold`}
            >
              {totalUsers}
            </p>
            <p id="title" className="text-sm font-semibold">
              Total Users
            </p>
          </div>
          <AddUserButton userAdded={userAdded} setUserAdded={setUserAdded} />
          <Searchbar className="lg:hidden" setSearch={setSearch} />
        </aside>
        <UserTable
          users={users}
          numOfUsers={totalUsers}
          page={page}
          setPage={setPage}
          isLoading={isLoading}
          search={search}
          setUserDeleted={setUserDeleted}
        />
      </div>
    </>
  );
};

export default DashboardContents;
