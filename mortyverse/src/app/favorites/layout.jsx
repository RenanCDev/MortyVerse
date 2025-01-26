import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "MortyVerse",
  description: "Favorites Page - MortyVerse",
};

export default function FavoritesLayout({ children }) {
  return (
        <>{children}</>
  );
}
