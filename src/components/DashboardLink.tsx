import Link from "next/link";

interface Props {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardLink = ({ setNavOpen }: Props) => {
  return (
    <Link
      className="transition-colors duration-300 hover:text-sky-500"
      href={"/dashboard"}
      onClick={() => setNavOpen(false)}>
      Dashboard
    </Link>
  );
};

export default DashboardLink;
