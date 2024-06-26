import { AccessDenied } from "@/components/utilities";
import getCurrentUser from "../actions/getCurrentUser";
import client from "../libs/prismadb";
import { DashboardContents } from "@/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

/**
 * Renders the dashboard page.
 *
 * Retrieves the current user and the total number of users from the database. If the current user is not an admin, it renders the `AccessDenied` component. Otherwise, it renders the `DashboardContents` component with the total number of users passed as a prop.
 *
 * @returns {Promise<JSX.Element>} JSX elements representing the dashboard page.
 */

const Dashboard = async () => {
  const currentUser = await getCurrentUser();
  let totalUsers: number;

  if (currentUser?.role === "ADMIN") {
    totalUsers = (
      await client.user.findMany({
        where: {
          NOT: [
            {
              role: {
                equals: "ADMIN",
              }
            },
            {
              role: {
                equals: "SUPERADMIN"
              }
            }
          ]
        },
      })
    ).length;
  } else {
    totalUsers = (
      await client.user.findMany({
        where: {
          NOT: [
            {
              role: {
                equals: "SUPERADMIN",
              },
            },
          ],
        },
      })
    ).length;
  }

  if (currentUser?.role !== "ADMIN" && currentUser?.role !== "SUPERADMIN") {
    return <AccessDenied />;
  }

  return (
    <div className="px-6 pb-10 pt-8 supports-clamp:px-fluid md:px-16 md:supports-clamp:px-fluid lg:px-24 lg:supports-clamp:px-fluid xl:px-28 xl:supports-clamp:px-fluid">
      <DashboardContents
        totalUsers={totalUsers}
        currentUserEmail={currentUser.email}
      />
    </div>
  );
};

export default Dashboard;
