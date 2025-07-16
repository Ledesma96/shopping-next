import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, NavBar } from "./components";
import "./globals.scss";
import ProviderRedux from "./providers/ProviderRedux";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Shopping',
  description: 'My shopping'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ProviderRedux>
          <NavBar />
          {children}
          <Footer />
        </ProviderRedux>
      </body>
    </html>
  );
}
