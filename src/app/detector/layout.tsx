import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detector",
};

export default async function DetectorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
