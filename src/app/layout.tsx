import { Header } from "@/components";
import { CurrentUserProvider, ToastProvider, UIProvider } from "@/providers";
import getCurrentUser from "./actions/getCurrentUser";
import { inter } from "@/fonts";
import NextTopLoader from "nextjs-toploader";
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} mx-auto max-w-screen-2xl bg-white/95 text-slate-700 antialiased`}
      >
        <UIProvider>
          <NextTopLoader color="#0ea5e9" showSpinner={false} />
          <CurrentUserProvider currentUser={currentUser}>
            <ToastProvider>
              <Header />
              <main>{children}</main>
            </ToastProvider>
          </CurrentUserProvider>
        </UIProvider>
      </body>
    </html>
  );
}
