"use client";

import { AddUserButton, Searchbar, TableSkeleton, UserTable } from "@/components";
import { workSans } from "@/fonts";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "@/types";
import { TailSpin } from "react-loader-spinner";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<UserType>();
  const [userAdded, setUserAdded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfUsers, setNumOfUsers] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  async function getTotalUsers() {
    setIsLoading(true);
    const fetchedUsers: number = await axios("/api/totalusers").then(
      (res) => res.data
    );
    setNumOfUsers(fetchedUsers);
  }

  useEffect(() => {
    getTotalUsers();
  }, [userAdded]);

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers = await axios(`/api/users?page=${page}`).then(
        (res) => res.data
      );
      setUsers(fetchedUsers);
      setIsLoading(false);
    }
    if (numOfUsers) {
      fetchUsers();
    }
  }, [page, numOfUsers]);

  return (
    <div className="mx-6 pb-10 pt-10 lg:mx-16 lg:pb-0 lg:pt-28">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1
          className={`${workSans.className} mb-5 text-center text-2xl font-bold lg:mb-0 lg:text-left`}>
          Dashboard
        </h1>
        <Searchbar />
      </div>

      <div className="mt-5 lg:grid lg:grid-cols-[1fr_3fr] lg:gap-7">
        <aside className="mb-6 lg:mb-0 lg:flex lg:flex-col lg:gap-4">
          <div className="rounded-xl bg-blue-500 py-10 text-center text-white">
            <p
              aria-describedby="title"
              className={`${workSans.className} text-4xl font-bold`}>
              {isLoading ? <TailSpin
                height="40"
                width="40"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{"justify-content": "center", "margin-bottom": "1.25rem"}}
                wrapperClass=""
                visible={true}
              /> : numOfUsers}
            </p>
            <p id="title" className="text-sm font-semibold">
              Total Users
            </p>
          </div>
          <AddUserButton setUserAdded={setUserAdded} />
        </aside>
        {isLoading && <TableSkeleton />}
        {!isLoading && !users && <p>No users</p>}
        {!isLoading && users && (
          <UserTable
            users={users}
            numOfUsers={numOfUsers ? numOfUsers : 0}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
