import Link from "next/link";

const DetectorLink = () => {
  return (
    <Link
      className="transition-colors duration-300 hover:text-sky-500"
      href={"/dashboard"}>
      Detector
    </Link>
  );
};

export default DetectorLink;
