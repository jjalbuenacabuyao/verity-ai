import Link from "next/link";

const DashboardLink = () => {
  return (
    <Link
      className="transition-colors duration-300 hover:text-sky-500"
      href={"/dashboard"}>
      Dashboard
    </Link>
  );
};

export default DashboardLink;
