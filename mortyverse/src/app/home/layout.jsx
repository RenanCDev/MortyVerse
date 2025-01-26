import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "MortyVerse",
  description: "Home Page - MortyVerse",
};

export default function HomeLayout({ children }) {
  return (
        <>{children}</>
  );
}
