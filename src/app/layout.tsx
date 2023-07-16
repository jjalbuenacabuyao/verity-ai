import { Header, CurrentUserProvider } from "@/components";
import getCurrentUser from "./actions/getCurrentUser";
import { inter } from "@/fonts";
import "./globals.css";

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
      <body className={`${inter.className} text-slate-900`}>
        <CurrentUserProvider currentUser={currentUser}>
          <Header />
          <main>{children}</main>
        </CurrentUserProvider>
      </body>
    </html>
  );
}
