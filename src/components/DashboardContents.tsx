"use client";

import { workSans } from '@/fonts';
import { UserType } from '@/types'
import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar';
import { Spinner } from '@nextui-org/spinner';
import AddUserButton from './AddUserButton';
import UserTable from './UserTable';
import axios from 'axios';

interface Props {
  initialUsers: UserType;
  totalUsers: number;
}

const DashboardContents = ({ initialUsers, totalUsers }: Props) => {
  const [users, setUsers] = useState<UserType>(initialUsers);
  const [userAdded, setUserAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingNumOfUsers, setIsFetchingNumOfUsers] =
    useState<boolean>(false);
  const [numOfUsers, setNumOfUsers] = useState<number>(totalUsers);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  // useEffect(() => {
  //   async function getTotalUsers() {
  //     const totalUsers = await axios
  //       .get("/api/totalusers", { headers: { "Cache-Control": "no-cache" } })
  //       .then((res) => res.data);
  //     setNumOfUsers(totalUsers);
  //     setIsFetchingNumOfUsers(false);
  //   }

  //   getTotalUsers();
  // }, [userAdded]);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     setIsLoading(true);
  //     const fetchedUsers = await axios(
  //       `/api/users?page=${page}&search=${search}`
  //     ).then((res) => res.data);
  //     setUsers(fetchedUsers);
  //     setIsLoading(false);
  //   }
  //   if (numOfUsers) {
  //     fetchUsers();
  //   }
  // }, [page, numOfUsers, search]);

  return (
    <>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1
          className={`${workSans.className} mb-5 text-center text-2xl font-bold lg:mb-0 lg:text-left`}>
          Dashboard
        </h1>
        <Searchbar className="hidden lg:block" setSearch={setSearch} />
      </div>

      <div className="mt-5 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-7">
        <aside className="mb-6 flex flex-col gap-4 lg:mb-0">
          <div className="rounded-xl bg-blue-500 py-10 text-center text-white">
            <p
              aria-describedby="title"
              className={`${workSans.className} text-4xl font-bold`}>
              {isFetchingNumOfUsers ? <Spinner color="default" /> : numOfUsers}
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
          numOfUsers={numOfUsers}
          page={page}
          setPage={setPage}
          isLoading={isLoading}
          search={search}
        />
      </div>
    </>
  )
}

export default DashboardContents;