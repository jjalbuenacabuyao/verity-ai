import Link from "next/link";

interface Props {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetectorLink = ({ setNavOpen }: Props) => {
  return (
    <Link
      className="transition-colors duration-300 hover:text-sky-500"
      href={"/detector"}
      onClick={() => setNavOpen(false)}>
      Detector
    </Link>
  );
};

export default DetectorLink;
