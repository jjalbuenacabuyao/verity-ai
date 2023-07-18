import { Header, CurrentUserProvider } from "@/components";
import getCurrentUser from "./actions/getCurrentUser";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "VerityAI",
  description: "Detect AI-Generated Academic Submissions",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-700 antialiased`}>
        <CurrentUserProvider currentUser={currentUser}>
          <Header />
          <main>{children}</main>
        </CurrentUserProvider>
      </body>
    </html>
  );
}
