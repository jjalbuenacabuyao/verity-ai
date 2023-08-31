import AccessDenied from "@/components/AccessDenied";
import { getSession } from "../actions/getCurrentUser";
import client from "../libs/prismadb";
import DashboardContents from "@/components/DashboardContents";

const Dashboard = async () => {
  const session = await getSession();
  const totalUsers = (await client.user.findMany()).length;

  if (!session) {
    return <AccessDenied />;
  }

  return (
    <div className="pb-10 pt-8 supports-clamp:px-responsive lg:pt-10">
      <DashboardContents totalUsers={totalUsers} />
    </div>
  );
};

export default Dashboard;
