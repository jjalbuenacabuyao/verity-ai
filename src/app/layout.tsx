import { Header } from "@/components";
import { CurrentUserProvider, ToastProvider } from "@/providers";
import getCurrentUser from "./actions/getCurrentUser";
import { inter } from "@/fonts";
import NextTopLoader from 'nextjs-toploader';
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
      <body className={`${inter.className} text-slate-700 bg-white/95 antialiased`}>
        <NextTopLoader color="#0ea5e9" showSpinner={false} />
        <CurrentUserProvider currentUser={currentUser}>
          <ToastProvider>
            <Header />
            <main>{children}</main>
          </ToastProvider>
        </CurrentUserProvider>
      </body>
    </html>
  );
}
