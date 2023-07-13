import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
const font = Inter({ subsets: ["latin"] });
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

export const metadata = {
  title: "Vibe",
  description: "Introducing Vibe, the ultimate music app for your listening pleasure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
