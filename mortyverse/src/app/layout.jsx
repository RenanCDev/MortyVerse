import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "MortyVerse",
  description: "Home Page - MortyVerse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-spaceBlue text-alienGreen min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
