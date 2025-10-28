import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
const nasalization = localFont({
  src: "/fonts/Nasalization.otf",
  variable: "--font-nasalization",
});

const madeTommyMed = localFont({
  src: "/fonts/MADETOMMYMedium.otf",
  variable: "--font-made-tommy-medium",
});

const madeTommyBold = localFont({
  src: "/fonts/MADETOMMYBold.otf",
  variable: "--font-made-tommy-bold",
});

export const metadata = {
  title: "Astrotech - Club",
   icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nasalization.variable} ${madeTommyBold.variable} ${madeTommyMed.variable} antialiased`}
      >
        <Loader>
          {children}
          <Footer/>
        </Loader>
      </body>
    </html>
  );
}
