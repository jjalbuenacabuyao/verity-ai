"use client";

import { Header, AddUserModal } from "@/components";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <main>
        <div>
          <h1>Users</h1>
          <button>+ Add New User</button>
        </div>
        <AddUserModal />
      </main>
    </>
  );
};

export default Dashboard;
