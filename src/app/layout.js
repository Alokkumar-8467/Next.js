import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import USerContext from "@/context/userContext";
import UserProvider from "@/context/userProvider";


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {

  return (
    
    <html lang="en">
      <body className={inter.className}>
      <UserProvider>
      <ToastContainer/>
        <CustomNavbar/>
        <div className="mt-2">
          {children}
        </div>
        <Footer/>
      </UserProvider>
        </body>
    </html>
  );
}
