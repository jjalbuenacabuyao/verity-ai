"use client";

import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import AddUserModal from "@/components/AddUserModal/AddUserModal";

const Dashboard = () => {
  return (
    <>
      <Header />
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
