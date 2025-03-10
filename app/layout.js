import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

 const outfit = Outfit({
  subsets: ["latin"],weight:["400", "500", "600", "700"]
});

 const ovo = Ovo({
  subsets: ["latin"],weight:["400"]
});

export const metadata = {
  title: "PortFolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} leading-8 antialiased overflow-x-hidden bg-[#070A20]`}
      >
        {children}
      </body>
    </html>
  );
}
