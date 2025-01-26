import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "MortyVerse",
  description: "Location Page - MortyVerse",
};

export default function LocationLayout({ children }) {
  return (
        <>{children}</>
  );
}
