import { Inter, Work_Sans } from "next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "900"]
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});