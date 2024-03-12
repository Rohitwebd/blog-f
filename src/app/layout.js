"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/header";
import Footer from "./shared/footer";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./shared/Bootstrapclient";
import "@fortawesome/fontawesome-free";


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <BootstrapClient/>
        <Footer />
      </body>


    </html>
  );
}