import "../styles/globals.css";

export const metadata = {
  title: "Dashboard | VeracityAI",
  description: "User management system for VeracityAI.",
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
