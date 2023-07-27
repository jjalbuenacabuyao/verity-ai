"use client"

import { AddUserModal } from "@/components";
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
      <div>
        <h1>Dashboard</h1>
      </div>
      <AddUserModal />
    </div>
  );
};

export default Dashboard;
