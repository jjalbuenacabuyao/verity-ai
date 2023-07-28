"use client"

import { AddUserModal, Searchbar } from "@/components";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "@/types";

const Dashboard = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  async function getAllUsers() {
    const fetchedUsers: UserType[] = await axios("/api/users").then(res => res.data);
    setUsers(fetchedUsers);
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div>
      <div className="pt-24 mx-6 lg:pt-28 lg:mx-16">
        <h1>Dashboard</h1>
        <Searchbar />
      </div>
      <AddUserModal />
    </div>
  );
};

export default Dashboard;
