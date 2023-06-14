import "./globals.css";

export const metadata = {
  title: "VeracityAI | Detect AI-Generated Academic Submissions",
  description: "Detect AI-Generated Academic Submissions",
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
