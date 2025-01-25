import "./globals.css";

export const metadata = {
  title: "MortyVerse",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-spaceBlue text-alienGreen min-h-screen flex flex-col">
        {/* Cabeçalho */}
        <header className="bg-darkPurple text-neonGreen py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <a
              href="/pages/Home"
              className="text-3xl font-bold font-rick hover:text-portalGreen transition"
            >
              MortyVerse
            </a>
            <nav className="flex gap-4">
              <a
                href="/pages/Home"
                className="text-xl hover:underline hover:text-portalGreen transition"
              >
                HOME
              </a>
              <a
                href="/pages/Page"
                className="text-xl hover:underline hover:text-portalGreen transition"
              >
                PAGE
              </a>
            </nav>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main
        className="flex-grow container mx-auto p-4"
        style={{
            backgroundImage: "url(../04.gif)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
        >{children}</main>

        {/* Rodapé */}
        <footer className="bg-darkPurple text-center text-sm text-neonGreen py-2">
          <p>
            © {new Date().getFullYear()} Mortyverse. Feito com{" "}
            <span className="text-portalGreen">amor interdimensional</span>.
          </p>
        </footer>
      </body>
    </html>
  );
}
