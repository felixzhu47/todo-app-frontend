import type { Metadata } from "next";
import "./globals.css";
import { TaskProvider } from "./TaskContext";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Take-home test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
