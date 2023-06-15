import "../globals.css";

export const metadata = {
  title: "Dashboard | VerityAI",
  description: "User management system for VerityAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
