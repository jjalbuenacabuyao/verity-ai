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
    <div className="px-4 pb-10 pt-8 supports-clamp:px-responsive md:px-16 md:supports-clamp:px-responsive lg:px-24 lg:pt-10 lg:supports-clamp:px-responsive xl:px-28 xl:supports-clamp:px-responsive">
      <DashboardContents totalUsers={totalUsers} />
    </div>
  );
};

export default Dashboard;
