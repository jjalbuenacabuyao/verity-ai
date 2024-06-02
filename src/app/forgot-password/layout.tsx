import { inter } from "@/fonts";

export default async function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} mx-auto max-w-screen-2xl bg-white/95 text-slate-700 antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
