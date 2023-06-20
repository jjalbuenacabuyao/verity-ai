import "./globals.css";

export const metadata = {
  title: "VerityAI | Detect AI-Generated Academic Submissions",
  description: "Detect AI-Generated Academic Submissions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">{children}</body>
    </html>
  );
}
