import { Header, CurrentUserProvider } from "@/components";
import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "VerityAI",
  description: "Detect AI-Generated Academic Submissions",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className="font-inter text-slate-900">
        <CurrentUserProvider currentUser={currentUser}>
          <Header />
          <main>{children}</main>
        </CurrentUserProvider>
      </body>
    </html>
  );
}
