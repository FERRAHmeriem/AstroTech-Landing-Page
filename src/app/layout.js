import localFont from "next/font/local";
import "./globals.css";

const nasalization = localFont({
  src: "./fonts/Nasalization.otf",
  variable: "--font-nasalization",
  weight: "400",
});

const madeTommyMed = localFont({
  src: "./fonts/MADETOMMYMedium.otf",
  variable: "--font-tommy-medium",
  weight: "500",
});

const madeTommyBold = localFont({
  src: "./fonts/MADETOMMYBold.otf",
  variable: "--font-tommy-bold",
  weight: "700",
});

export const metadata = {
  title: "AstroTech - Join Us",
  description: "Embark on an interplanetary adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nasalization.variable} ${madeTommyMed.variable} ${madeTommyBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
