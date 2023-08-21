import AccessDenied from "@/components/AccessDenied";
import { getSession } from "../actions/getCurrentUser";
import client from "../libs/prismadb";
import DashboardContents from "@/components/DashboardContents";

const Dashboard = async () => {
  const session = await getSession();
  const totalUsers = (await client.user.findMany()).length;

  if (!session) {
    return (
      <AccessDenied />
    )
  }

  return (
    <div className="mx-6 pb-10 pt-8 lg:mx-16 lg:pt-10">
      <DashboardContents totalUsers={totalUsers} />
    </div>
  );
};

export default Dashboard;
