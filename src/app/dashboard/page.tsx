import { AccessDenied } from "@/components/utilities";
import getCurrentUser from "../actions/getCurrentUser";
import client from "../libs/prismadb";
import { DashboardContents } from "@/components/dashboard";

const Dashboard = async () => {
  const currentUser = await getCurrentUser();
  const totalUsers = (await client.user.findMany()).length;

  if (currentUser?.role !== "ADMIN") {
    return <AccessDenied />;
  }

  return (
    <div className="px-6 pb-10 pt-8 supports-clamp:px-fluid md:px-16 md:supports-clamp:px-fluid lg:px-24 lg:supports-clamp:px-fluid xl:px-28 xl:supports-clamp:px-fluid">
      <DashboardContents totalUsers={totalUsers} />
    </div>
  );
};

export default Dashboard;
