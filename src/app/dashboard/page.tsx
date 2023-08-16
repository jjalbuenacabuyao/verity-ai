import client from "../libs/prismadb";
import DashboardContents from "@/components/DashboardContents";

const Dashboard = async () => {
  const totalUsers = (await client.user.findMany()).length;

  return (
    <div className="mx-6 pb-10 pt-8 lg:mx-16 lg:pt-10">
      <DashboardContents totalUsers={totalUsers} />
    </div>
  );
};

export default Dashboard;
