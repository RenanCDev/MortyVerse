import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "MortyVerse",
  description: "Cards Page - MortyVerse",
};

export default function CardsLayout({ children }) {
  return (
        <>{children}</>
  );
}
